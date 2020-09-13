import * as $protobuf from "protobufjs";
/** Properties of a RPCMessage. */
export interface IRPCMessage {

    /** RPCMessage request */
    request?: (IRequest|null);

    /** RPCMessage response */
    response?: (IResponse|null);
}

/** Represents a RPCMessage. */
export class RPCMessage implements IRPCMessage {

    /**
     * Constructs a new RPCMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRPCMessage);

    /** RPCMessage request. */
    public request?: (IRequest|null);

    /** RPCMessage response. */
    public response?: (IResponse|null);

    /** RPCMessage msg. */
    public msg?: ("request"|"response");

    /**
     * Creates a new RPCMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RPCMessage instance
     */
    public static create(properties?: IRPCMessage): RPCMessage;

    /**
     * Encodes the specified RPCMessage message. Does not implicitly {@link RPCMessage.verify|verify} messages.
     * @param message RPCMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRPCMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RPCMessage message, length delimited. Does not implicitly {@link RPCMessage.verify|verify} messages.
     * @param message RPCMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRPCMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RPCMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RPCMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RPCMessage;

    /**
     * Decodes a RPCMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RPCMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RPCMessage;

    /**
     * Verifies a RPCMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RPCMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RPCMessage
     */
    public static fromObject(object: { [k: string]: any }): RPCMessage;

    /**
     * Creates a plain object from a RPCMessage message. Also converts values to other types if specified.
     * @param message RPCMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RPCMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RPCMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Request. */
export interface IRequest {

    /** Request rpcName */
    rpcName?: (string|null);

    /** Request request */
    request?: (Uint8Array|null);

    /** Request trackingId */
    trackingId?: (number|null);
}

/** Represents a Request. */
export class Request implements IRequest {

    /**
     * Constructs a new Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequest);

    /** Request rpcName. */
    public rpcName: string;

    /** Request request. */
    public request: Uint8Array;

    /** Request trackingId. */
    public trackingId: number;

    /**
     * Creates a new Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Request instance
     */
    public static create(properties?: IRequest): Request;

    /**
     * Encodes the specified Request message. Does not implicitly {@link Request.verify|verify} messages.
     * @param message Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Request message, length delimited. Does not implicitly {@link Request.verify|verify} messages.
     * @param message Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Request;

    /**
     * Decodes a Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Request;

    /**
     * Verifies a Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Request
     */
    public static fromObject(object: { [k: string]: any }): Request;

    /**
     * Creates a plain object from a Request message. Also converts values to other types if specified.
     * @param message Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Response. */
export interface IResponse {

    /** Response status */
    status?: (Response.Status|null);

    /** Response response */
    response?: (Uint8Array|null);

    /** Response errorMessage */
    errorMessage?: (string|null);

    /** Response trackingId */
    trackingId?: (number|null);
}

/** Represents a Response. */
export class Response implements IResponse {

    /**
     * Constructs a new Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResponse);

    /** Response status. */
    public status: Response.Status;

    /** Response response. */
    public response: Uint8Array;

    /** Response errorMessage. */
    public errorMessage: string;

    /** Response trackingId. */
    public trackingId: number;

    /**
     * Creates a new Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Response instance
     */
    public static create(properties?: IResponse): Response;

    /**
     * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
     * @param message Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Response message, length delimited. Does not implicitly {@link Response.verify|verify} messages.
     * @param message Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Response;

    /**
     * Decodes a Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Response;

    /**
     * Verifies a Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Response
     */
    public static fromObject(object: { [k: string]: any }): Response;

    /**
     * Creates a plain object from a Response message. Also converts values to other types if specified.
     * @param message Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Response {

    /** Status enum. */
    enum Status {
        OK = 0,
        EMPTY = 1,
        ERROR = 100
    }
}
