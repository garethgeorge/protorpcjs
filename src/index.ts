import { Message, Type, Field, OneOf } from "protobufjs/light"; // respectively "./node_modules/protobufjs/light.js"
import * as rpc_pb from "../protos/rpc";


export interface RPCMessageTransport {
  onData(callback: (data: Uint8Array) => void): void;
  onClose(callback: () => void): void;
  onError(callback: (error: Error) => void): void;

  send(data: Uint8Array): void;
  close(): void;
}

interface Callback {
  accept: (data: any) => void;
  reject: (data: any) => void;
  responseDecoder: (data: Uint8Array) => Message;
}

export class RPCService {

  private nextTrackingId: number;
  private transport: RPCMessageTransport;
  private callbacks: { [key: number]: Callback };
  private handlers: { [key: number]: (data: rpc_pb.Request) => any}

  constructor(transport: RPCMessageTransport) {
    this.nextTrackingId = 0;
    this.transport = transport;

    this.callbacks = {};
    this.handlers = {};

    this.transport.onClose(() => {
      try {
        for (const callback of Object.values(this.callbacks)) {
          callback.reject(new Error("transport closed"));
        }
      } finally {
        this.callbacks = {};
      }
    });

    this.transport.onData((data: Uint8Array) => {
      const rpcMessage = rpc_pb.RPCMessage.decode(data);
      switch(rpcMessage.msg) {
        case "request": {
          const requestPackage = rpcMessage.request;
          break;
        }
        case "response": {
          const responsePackage = rpcMessage.response;
          const callback = this.callbacks[responsePackage.trackingId];
          try {
            if (responsePackage.status === rpc_pb.Response.Status.OK) {
              if (callback.responseDecoder) {
                callback.accept(callback.responseDecoder(responsePackage.response));
              } else 
                return callback.reject(new Error("no responseDecoder provided -- response type is null"));
            } else if (responsePackage.status === rpc_pb.Response.Status.EMPTY) {
              callback.accept(null);
            } else if (responsePackage.status === rpc_pb.Response.Status.ERROR) {
              callback.reject(callback.responseDecoder(responsePackage.response));
            } else {
              callback.reject("unhandled status code");
            }
          } catch (e) {
            callback.reject(e);
          }
          break;
        }
      }
    });
  }

  addUnaryHandler<ReqT extends Message, RespT extends Message>(name: string, requestDecoder: (data: Uint8Array) => ReqT, handler: (arg: ReqT) => Promise<RespT>) {
    this.handlers[name] = async (requestPackage: rpc_pb.Request) => {
      try {
        const request = requestDecoder(requestPackage.request);
        let response;
        try {
          response = await handler(request);
        } catch (e) {
          console.log(e);
          this.respondWithError(requestPackage.trackingId, "exception in RPC handler");
          return;
        }
        const responseData = response.$type.encode(response).finish();
        
        this.transport.send(
          rpc_pb.RPCMessage.encode(new rpc_pb.RPCMessage({
            response: {
              status: rpc_pb.Response.Status.OK,
              response: responseData,
              trackingId: requestPackage.trackingId,
            }
          })).finish()
        )
      } catch (e) {
        console.error(e);
        this.respondWithError(requestPackage.trackingId, "protocol error handling RPC request");
      }
    }
  }

  request<ReqT extends Message, RespT extends Message | null>(
    name: string,
    req: ReqT,
    responseDecoder: (data: Uint8Array) => RespT
  ): Promise<RespT> {
    const message = new rpc_pb.Request({
      rpcName: name,
      request: req.$type.encode(req).finish(),
      trackingId: ++this.nextTrackingId,
    });

    this.transport.send(rpc_pb.Request.encode(message).finish());
    return new Promise((accept, reject) => {
      this.callbacks[message.trackingId] = {accept, reject, responseDecoder};
    });
  }

  async *requestStream<ReqT extends Message, RespT extends Message>(
    name: string,
    req: ReqT,
    responseDecoder?: (data: Uint8Array) => RespT
  ): AsyncIterator<RespT> {
    const message = new rpc_pb.Request({
      rpcName: name,
      request: req.$type.encode(req).finish(),
      trackingId: ++this.nextTrackingId,
    });

    this.transport.send(rpc_pb.Request.encode(message).finish());
    
    while (true) {
      const resp = await new Promise((accept, reject) => {
        this.callbacks[message.trackingId] = {accept, reject, responseDecoder};
      }) as RespT;
      if (resp === null) 
        break;
      yield resp;
    }
  }

  private respondWithError(trackingId: number, error: string) {
    this.transport.send(
      rpc_pb.RPCMessage.encode(new rpc_pb.RPCMessage({
        response: {
          status: rpc_pb.Response.Status.ERROR,
          errorMessage: error,
          trackingId: trackingId,
        }
      })).finish()
    )
  }
}
