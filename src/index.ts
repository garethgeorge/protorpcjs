import { Method, Writer } from "protobufjs/light";
import { transform } from "typescript";
import { RPCMessageTransport } from "./transport";
import * as rpc_pb from "../protos/rpc";
import * as EventEmitter from "eventemitter3";

export class RPCMediator extends EventEmitter {
  private nextTrackingId: number;
  private handlers: { [name: string]: (requestPackage: rpc_pb.Request) => any };
  private callbacks: { [trackingId: number]: (response: rpc_pb.Response | null) => any };

  /**
   * constructs RPCMediator instance
   * @param transport - the transport that messages will be sent over
   */
  // TODO: avoid memory leaks / deadlock potential implementing a timeout mechanism
  public constructor(private transport: RPCMessageTransport) {
    super();

    this.nextTrackingId = 1;
    this.handlers = {};
    this.callbacks = {};

    this.transport.onClose(() => {
      for (const callback of Object.values(this.callbacks)) {
        callback(null);
      }
      this.emit("close");
    });

    this.transport.onData((data: Uint8Array) => {
      try {
        let rpcMessage: rpc_pb.RPCMessage;
        try {
          rpcMessage = rpc_pb.RPCMessage.decode(data);
        } catch (e) {
          this.emit("error", e);
          return;
        }
        switch (rpcMessage.msgType) {
          case "request": {
            const handler = this.handlers[rpcMessage.request.rpcName];
            if (!handler) {
              this.sendBackError(
                rpcMessage.request.trackingId,
                "no handler for " + rpcMessage.request.rpcName
              );
              return;
            }

            handler(new rpc_pb.Request(rpcMessage.request));
            break;
          }
          case "response": {
            const callback = this.callbacks[rpcMessage.response.trackingId];
            if (!callback) {
              throw new Error(
                "received response without a callback to handle it (trackingId " +
                  rpcMessage.response.trackingId +
                  ")"
              );
            }
            delete this.callbacks[rpcMessage.response.trackingId];
            callback(new rpc_pb.Response(rpcMessage.response));
          }
        }
      } catch (e) {
        this.emit(e);
      }
    });
  }

  public addMethod<ReqT, RespT>(
    name: string,
    requestDecoder: (data: Uint8Array) => ReqT,
    responseEncoder: (response: RespT) => Writer,
    handler: (request: ReqT) => Promise<RespT>
  ) {
    this.handlers[name] = async (requestPackage: rpc_pb.Request) => {
      let request: ReqT;
      try {
        request = requestDecoder(requestPackage.requestBuffer);
      } catch (e) {
        this.emit("error", e);
        this.sendBackError(requestPackage.trackingId, "line error parsing handler argument");
        return;
      }

      let resp: RespT;
      try {
        resp = await handler(request);
      } catch (e) {
        this.emit("error", e);
        this.sendBackError(requestPackage.trackingId, "internal error in handler");
        return;
      }

      try {
        this.transport.send(
          rpc_pb.RPCMessage.encode({
            response: {
              trackingId: requestPackage.trackingId,
              responseBuffer: responseEncoder(resp).finish(),
            },
          }).finish()
        );
      } catch (e) {
        this.emit("error", e);
        this.sendBackError(requestPackage.trackingId, "error serializing response");
      }
    };
  }

  /**
   * Called to create a message to be passed to a protobufjs service construtor
   *
   * @returns function that takes invocation information, transports request to server, and retruns response
   */
  public makeRpcClientImpl() {
    return (
      method: Method,
      requestData: Uint8Array,
      callback: (error: Error, response?: Uint8Array) => void
    ) => {
      this.makeUnaryRequest(method.name, requestData, callback);
    };
  }

  public makeUnaryRequest(
    method: string,
    requestData: Uint8Array,
    callback: (error: Error, response?: Uint8Array) => void
  ) {
    const trackingId = this.nextTrackingId++;
    this.transport.send(
      rpc_pb.RPCMessage.encode({
        request: {
          rpcName: method,
          trackingId,
          requestBuffer: requestData,
        },
      }).finish()
    );

    this.callbacks[trackingId] = (response: rpc_pb.Response | null) => {
      if (response === null) {
        return callback(new Error("request timedout"), null);
      }

      switch (response.returned) {
        case "empty": {
          callback(null, null);
          break;
        }
        case "errorMessage": {
          callback(new Error(response.errorMessage), null);
          break;
        }
        case "responseBuffer": {
          callback(null, response.responseBuffer);
          break;
        }
      }
    };
  }

  /**
   * Sends an error back for the request with the specified tracking id
   * @param trackingId tracking id for the response
   * @param message the error message
   */
  private sendBackError(trackingId: number, message: string) {
    this.transport.send(
      rpc_pb.RPCMessage.encode({
        response: {
          errorMessage: message,
          trackingId: trackingId,
        },
      }).finish()
    );
  }
}

export const makeClientRpcImpl = (transport: RPCMessageTransport) => {
  transport.onData((data) => {});
};

class RpcClient {
  constructor(socket) {}

  getRpcImpl() {}
}
