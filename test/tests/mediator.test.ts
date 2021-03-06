import * as e from "expect";
import { Method } from "protobufjs";

import MockTransport from "../mocks/transport";
import { RPCMediator } from "../../src";
import * as test_pb from "../../src/protos/test";
import { RPCMessage } from "../../src/protos/rpc";

describe("rpc mediator", () => {
  let a, b;
  beforeEach(() => {
    [a, b] = MockTransport.makePair();
  });

  afterEach(() => {
    a.close();
    b.close();
  });

  it("should be able to send and receive an event", (callback) => {
    const clientMediator = new RPCMediator(a);
    const serverMediator = new RPCMediator(b);

    clientMediator.sendEvent(
      "hello_world",
      test_pb.TestEvent.encode({
        eventData: "hello world",
      }).finish()
    );
    
    serverMediator.onEvent("hello_world", test_pb.TestEvent.decode, (message) => {
      e(message.eventData).toBe("hello world");
      callback();
    });
  });

  it("should be able to make a simple unary rpc request", async () => {
    const clientMediator = new RPCMediator(a);
    const serverMediator = new RPCMediator(b);

    serverMediator.addMethod(
      "testRpc",
      test_pb.TestRequest.decode,
      test_pb.TestResponse.encode,
      test_pb.TestRequest.verify,
      async (request) => {
        return new test_pb.TestResponse({
          respText: request.reqText + "!!!",
        });
      }
    );

    const clientService = new test_pb.TestService(clientMediator.makeRpcClientImpl());
    const resp = await clientService.testRpc({
      reqText: "hello world",
    });
  });

  it("should get an error when server throws one", async () => {
    const clientMediator = new RPCMediator(a);
    const serverMediator = new RPCMediator(b);

    serverMediator.addMethod(
      "testRpc",
      test_pb.TestRequest.decode,
      test_pb.TestResponse.encode,
      test_pb.TestRequest.verify,
      async (request) => {
        throw new Error("woops");
      }
    );

    const clientService = new test_pb.TestService(clientMediator.makeRpcClientImpl());
    await e(
      clientService.testRpc({
        reqText: "hello world",
      })
    ).rejects.toThrowError();
  });

  it("should get an error when the request is corrupt", (callback) => {
    const clientMediator = new RPCMediator(a);
    const serverMediator = new RPCMediator(b);

    serverMediator.addMethod(
      "testRpc",
      test_pb.TestRequest.decode,
      test_pb.TestResponse.encode,
      test_pb.TestResponse.verify,
      async (request) => {
        return new test_pb.TestResponse({
          respText: request.reqText + "!!!",
        });
      }
    );

    const clientService = new test_pb.TestService(clientMediator.makeRpcClientImpl());
    const resp = clientMediator.makeUnaryRequest(
      "testRpc",
      new Uint8Array(1),
      (error, response) => {
        e(error).toBeInstanceOf(Error);
        e(response).toBeNull();

        callback();
      }
    );
  });
});
