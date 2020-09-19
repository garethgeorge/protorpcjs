import { Method, Writer } from "protobufjs/light";
import { transform } from "typescript";
import { RPCMessageTransport } from "./transport";
import * as rpc_pb from "./protos/rpc";
import {EventEmitter} from "eventemitter3";
import Debug from "debug";

const debug = Debug("protorpcjs");
const debugMethod = Debug("protorpcjs:method");

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

    this.on("error", (error) => {
      debug(error);
    });

    this.transport.onClose(() => {
      debug("transport closed, sending timeout to all pending callbacks");
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
        debug("received message on transport: %o", rpcMessage);
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
            break;
          }
          case "event": {
            this.emit("event-" + rpcMessage.event.name, rpcMessage.event.buffer);
          }
        }
      } catch (e) {
        this.emit(e);
      }
    });
  }

  public sendEvent<EventT>(name: string, buffer: Uint8Array) {
    this.transport.send(
      rpc_pb.RPCMessage.encode({
        event: {
          name,
          buffer,
        },
      }).finish()
    );
  }

  public onEvent<EventT>(
    name: string,
    eventDecoder: (data: Uint8Array) => EventT,
    handler: (event: EventT) => any
  ) {
    this.on("event-" + name, (data: Uint8Array) => {
      try {
        handler(eventDecoder(data));
      } catch (e) {
        this.emit("error", e);
      }
    });
  }

  public addMethod<ReqT, RespT>(
    name: string,
    requestDecoder: (data: Uint8Array) => ReqT,
    responseEncoder: (response: RespT) => Writer,
    responseVerifier: (message: { [k: string]: any }) => string | null,
    handler: (request: ReqT) => Promise<RespT>
  ) {
    debug("adding handler for method: %o", name);
    this.handlers[name] = async (requestPackage: rpc_pb.Request) => {
      let request: ReqT;
      try {
        request = requestDecoder(requestPackage.requestBuffer);
      } catch (e) {
        this.emit("error", e);
        this.sendBackError(requestPackage.trackingId, "line error parsing handler argument");
        return;
      }

      debugMethod("rpc method invocation: %o args: %o", name, request);

      let resp: RespT;
      try {
        resp = await handler(request);
      } catch (e) {
        this.emit("error", e);
        this.sendBackError(requestPackage.trackingId, "internal error in handler");
        return;
      }

      const verificationMsg = responseVerifier(resp);
      if (verificationMsg !== null) {
        throw new Error("bad response: " + verificationMsg);
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
    callback: (error: Error, response?: Uint8Array) => void,
    timeoutMs: number = 60000
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
    
    // setup a timeout for the request, this defaults to a minute
    const timeout = setTimeout(() => {
      const callback = this.callbacks[trackingId];
      if (!callback)
        return
      delete this.callbacks[trackingId];
      callback(null);
    }, timeoutMs);

    this.callbacks[trackingId] = (response: rpc_pb.Response | null) => {
      clearTimeout(timeout);
      if (response === null) {
        return callback(new Error("request timedout"), null);
      }

      switch (response.returned) {
        case "empty": {
          callback(null, null);
          break;
        }
        case "errorMessage": {
          callback(new Error("RPC returned error: " + response.errorMessage), null);
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
