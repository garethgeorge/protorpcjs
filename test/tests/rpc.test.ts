import * as expct from "expect";

import MockTransport from "../mocks/transport";
import {RPCService} from "../../src";
import * as test_pb from "../../protos/test";

describe("rpc.proto", () => { 
  it("should be able to make an end to end rpc request", () => {
    const [a, b] = MockTransport.makePair();
    a.close();
    b.close();
    const as = new RPCService(a);
    const bs = new RPCService(b);

    as.addUnaryHandler("test", test_pb.TestRequest.decode, (arg) => {

    })
  });
});