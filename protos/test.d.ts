import * as $protobuf from "protobufjs";
/** Represents a TestService */
export class TestService extends $protobuf.rpc.Service {

    /**
     * Constructs a new TestService service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new TestService service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): TestService;

    /**
     * Calls testRpc.
     * @param request TestRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and TestResponse
     */
    public testRpc(request: ITestRequest, callback: TestService.testRpcCallback): void;

    /**
     * Calls testRpc.
     * @param request TestRequest message or plain object
     * @returns Promise
     */
    public testRpc(request: ITestRequest): Promise<TestResponse>;
}

export namespace TestService {

    /**
     * Callback as used by {@link TestService#testRpc}.
     * @param error Error, if any
     * @param [response] TestResponse
     */
    type testRpcCallback = (error: (Error|null), response?: TestResponse) => void;
}

/** Properties of a TestRequest. */
export interface ITestRequest {

    /** TestRequest reqText */
    reqText?: (string|null);
}

/** Represents a TestRequest. */
export class TestRequest implements ITestRequest {

    /**
     * Constructs a new TestRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITestRequest);

    /** TestRequest reqText. */
    public reqText: string;

    /**
     * Creates a new TestRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TestRequest instance
     */
    public static create(properties?: ITestRequest): TestRequest;

    /**
     * Encodes the specified TestRequest message. Does not implicitly {@link TestRequest.verify|verify} messages.
     * @param message TestRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TestRequest message, length delimited. Does not implicitly {@link TestRequest.verify|verify} messages.
     * @param message TestRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TestRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TestRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TestRequest;

    /**
     * Decodes a TestRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TestRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TestRequest;

    /**
     * Verifies a TestRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TestRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TestRequest
     */
    public static fromObject(object: { [k: string]: any }): TestRequest;

    /**
     * Creates a plain object from a TestRequest message. Also converts values to other types if specified.
     * @param message TestRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TestRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TestRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TestResponse. */
export interface ITestResponse {

    /** TestResponse respText */
    respText?: (string|null);
}

/** Represents a TestResponse. */
export class TestResponse implements ITestResponse {

    /**
     * Constructs a new TestResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITestResponse);

    /** TestResponse respText. */
    public respText: string;

    /**
     * Creates a new TestResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TestResponse instance
     */
    public static create(properties?: ITestResponse): TestResponse;

    /**
     * Encodes the specified TestResponse message. Does not implicitly {@link TestResponse.verify|verify} messages.
     * @param message TestResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITestResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TestResponse message, length delimited. Does not implicitly {@link TestResponse.verify|verify} messages.
     * @param message TestResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITestResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TestResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TestResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TestResponse;

    /**
     * Decodes a TestResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TestResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TestResponse;

    /**
     * Verifies a TestResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TestResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TestResponse
     */
    public static fromObject(object: { [k: string]: any }): TestResponse;

    /**
     * Creates a plain object from a TestResponse message. Also converts values to other types if specified.
     * @param message TestResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TestResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TestResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
