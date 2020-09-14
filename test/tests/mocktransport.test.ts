import * as expct from "expect";
import { Method } from "protobufjs";

import MockTransport from "../mocks/transport";
// import {RPCService} from "../../src";
import * as test_pb from "../../protos/test";
import * as rpc_pb from "../../protos/rpc";

describe("mocktransport", () => {
  it("should be able to make a simple end to end request", async () => {
    const [a, b] = MockTransport.makePair();
    a.close();
    b.close();

    b.onData((data: Uint8Array) => {
      const requestPackage = rpc_pb.Request.decode(data);
      const request = test_pb.TestRequest.decode(requestPackage.requestBuffer);

      expct(request.reqText).toBe("hey to server from client")

      const responseData = test_pb.TestResponse.encode(
        new test_pb.TestResponse({
          respText: "hey right back from server to client",
        })
      ).finish();
      const responsePackage = rpc_pb.Response.encode(
        new rpc_pb.Response({
          responseBuffer: responseData,
        })
      ).finish();
      b.send(responsePackage);
    });

    const newService = new test_pb.TestService(
      (method: Method, requestData: Uint8Array, callback) => {
        a.send(
          rpc_pb.Request.encode(
            new rpc_pb.Request({
              rpcName: method.name,
              requestBuffer: requestData,
              trackingId: 1,
            })
          ).finish()
        );
        
        a.onData((data: Uint8Array) => {
          const responsePackage = rpc_pb.Response.decode(data);
          switch (responsePackage.returned) {
            case "responseBuffer": {
              callback(null, responsePackage.responseBuffer);
              break;
            }
            default: {
              callback(new Error(responsePackage.errorMessage));
            }
          }
        });
      }
    );

    const resp = await newService.testRpc({
      reqText: "hey to server from client",
    });
    expct(resp.respText).toBe("hey right back from server to client");
  });
});
