/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.RPCMessage = (function() {

    /**
     * Properties of a RPCMessage.
     * @exports IRPCMessage
     * @interface IRPCMessage
     * @property {IRequest|null} [request] RPCMessage request
     * @property {IResponse|null} [response] RPCMessage response
     */

    /**
     * Constructs a new RPCMessage.
     * @exports RPCMessage
     * @classdesc Represents a RPCMessage.
     * @implements IRPCMessage
     * @constructor
     * @param {IRPCMessage=} [properties] Properties to set
     */
    function RPCMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RPCMessage request.
     * @member {IRequest|null|undefined} request
     * @memberof RPCMessage
     * @instance
     */
    RPCMessage.prototype.request = null;

    /**
     * RPCMessage response.
     * @member {IResponse|null|undefined} response
     * @memberof RPCMessage
     * @instance
     */
    RPCMessage.prototype.response = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * RPCMessage msg.
     * @member {"request"|"response"|undefined} msg
     * @memberof RPCMessage
     * @instance
     */
    Object.defineProperty(RPCMessage.prototype, "msg", {
        get: $util.oneOfGetter($oneOfFields = ["request", "response"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new RPCMessage instance using the specified properties.
     * @function create
     * @memberof RPCMessage
     * @static
     * @param {IRPCMessage=} [properties] Properties to set
     * @returns {RPCMessage} RPCMessage instance
     */
    RPCMessage.create = function create(properties) {
        return new RPCMessage(properties);
    };

    /**
     * Encodes the specified RPCMessage message. Does not implicitly {@link RPCMessage.verify|verify} messages.
     * @function encode
     * @memberof RPCMessage
     * @static
     * @param {IRPCMessage} message RPCMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RPCMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.request != null && Object.hasOwnProperty.call(message, "request"))
            $root.Request.encode(message.request, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.response != null && Object.hasOwnProperty.call(message, "response"))
            $root.Response.encode(message.response, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RPCMessage message, length delimited. Does not implicitly {@link RPCMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RPCMessage
     * @static
     * @param {IRPCMessage} message RPCMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RPCMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RPCMessage message from the specified reader or buffer.
     * @function decode
     * @memberof RPCMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RPCMessage} RPCMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RPCMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RPCMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2:
                message.request = $root.Request.decode(reader, reader.uint32());
                break;
            case 3:
                message.response = $root.Response.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RPCMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RPCMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RPCMessage} RPCMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RPCMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RPCMessage message.
     * @function verify
     * @memberof RPCMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RPCMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.request != null && message.hasOwnProperty("request")) {
            properties.msg = 1;
            {
                var error = $root.Request.verify(message.request);
                if (error)
                    return "request." + error;
            }
        }
        if (message.response != null && message.hasOwnProperty("response")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.Response.verify(message.response);
                if (error)
                    return "response." + error;
            }
        }
        return null;
    };

    /**
     * Creates a RPCMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RPCMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RPCMessage} RPCMessage
     */
    RPCMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.RPCMessage)
            return object;
        var message = new $root.RPCMessage();
        if (object.request != null) {
            if (typeof object.request !== "object")
                throw TypeError(".RPCMessage.request: object expected");
            message.request = $root.Request.fromObject(object.request);
        }
        if (object.response != null) {
            if (typeof object.response !== "object")
                throw TypeError(".RPCMessage.response: object expected");
            message.response = $root.Response.fromObject(object.response);
        }
        return message;
    };

    /**
     * Creates a plain object from a RPCMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RPCMessage
     * @static
     * @param {RPCMessage} message RPCMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RPCMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.request != null && message.hasOwnProperty("request")) {
            object.request = $root.Request.toObject(message.request, options);
            if (options.oneofs)
                object.msg = "request";
        }
        if (message.response != null && message.hasOwnProperty("response")) {
            object.response = $root.Response.toObject(message.response, options);
            if (options.oneofs)
                object.msg = "response";
        }
        return object;
    };

    /**
     * Converts this RPCMessage to JSON.
     * @function toJSON
     * @memberof RPCMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RPCMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RPCMessage;
})();

$root.Request = (function() {

    /**
     * Properties of a Request.
     * @exports IRequest
     * @interface IRequest
     * @property {string|null} [rpcName] Request rpcName
     * @property {Uint8Array|null} [request] Request request
     * @property {number|null} [trackingId] Request trackingId
     */

    /**
     * Constructs a new Request.
     * @exports Request
     * @classdesc Represents a Request.
     * @implements IRequest
     * @constructor
     * @param {IRequest=} [properties] Properties to set
     */
    function Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Request rpcName.
     * @member {string} rpcName
     * @memberof Request
     * @instance
     */
    Request.prototype.rpcName = "";

    /**
     * Request request.
     * @member {Uint8Array} request
     * @memberof Request
     * @instance
     */
    Request.prototype.request = $util.newBuffer([]);

    /**
     * Request trackingId.
     * @member {number} trackingId
     * @memberof Request
     * @instance
     */
    Request.prototype.trackingId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new Request instance using the specified properties.
     * @function create
     * @memberof Request
     * @static
     * @param {IRequest=} [properties] Properties to set
     * @returns {Request} Request instance
     */
    Request.create = function create(properties) {
        return new Request(properties);
    };

    /**
     * Encodes the specified Request message. Does not implicitly {@link Request.verify|verify} messages.
     * @function encode
     * @memberof Request
     * @static
     * @param {IRequest} message Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.rpcName != null && Object.hasOwnProperty.call(message, "rpcName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.rpcName);
        if (message.request != null && Object.hasOwnProperty.call(message, "request"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.request);
        if (message.trackingId != null && Object.hasOwnProperty.call(message, "trackingId"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.trackingId);
        return writer;
    };

    /**
     * Encodes the specified Request message, length delimited. Does not implicitly {@link Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Request
     * @static
     * @param {IRequest} message Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Request message from the specified reader or buffer.
     * @function decode
     * @memberof Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Request} Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.rpcName = reader.string();
                break;
            case 2:
                message.request = reader.bytes();
                break;
            case 3:
                message.trackingId = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Request} Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Request message.
     * @function verify
     * @memberof Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.rpcName != null && message.hasOwnProperty("rpcName"))
            if (!$util.isString(message.rpcName))
                return "rpcName: string expected";
        if (message.request != null && message.hasOwnProperty("request"))
            if (!(message.request && typeof message.request.length === "number" || $util.isString(message.request)))
                return "request: buffer expected";
        if (message.trackingId != null && message.hasOwnProperty("trackingId"))
            if (!$util.isInteger(message.trackingId) && !(message.trackingId && $util.isInteger(message.trackingId.low) && $util.isInteger(message.trackingId.high)))
                return "trackingId: integer|Long expected";
        return null;
    };

    /**
     * Creates a Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Request} Request
     */
    Request.fromObject = function fromObject(object) {
        if (object instanceof $root.Request)
            return object;
        var message = new $root.Request();
        if (object.rpcName != null)
            message.rpcName = String(object.rpcName);
        if (object.request != null)
            if (typeof object.request === "string")
                $util.base64.decode(object.request, message.request = $util.newBuffer($util.base64.length(object.request)), 0);
            else if (object.request.length)
                message.request = object.request;
        if (object.trackingId != null)
            if ($util.Long)
                (message.trackingId = $util.Long.fromValue(object.trackingId)).unsigned = true;
            else if (typeof object.trackingId === "string")
                message.trackingId = parseInt(object.trackingId, 10);
            else if (typeof object.trackingId === "number")
                message.trackingId = object.trackingId;
            else if (typeof object.trackingId === "object")
                message.trackingId = new $util.LongBits(object.trackingId.low >>> 0, object.trackingId.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Request
     * @static
     * @param {Request} message Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.rpcName = "";
            if (options.bytes === String)
                object.request = "";
            else {
                object.request = [];
                if (options.bytes !== Array)
                    object.request = $util.newBuffer(object.request);
            }
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.trackingId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.trackingId = options.longs === String ? "0" : 0;
        }
        if (message.rpcName != null && message.hasOwnProperty("rpcName"))
            object.rpcName = message.rpcName;
        if (message.request != null && message.hasOwnProperty("request"))
            object.request = options.bytes === String ? $util.base64.encode(message.request, 0, message.request.length) : options.bytes === Array ? Array.prototype.slice.call(message.request) : message.request;
        if (message.trackingId != null && message.hasOwnProperty("trackingId"))
            if (typeof message.trackingId === "number")
                object.trackingId = options.longs === String ? String(message.trackingId) : message.trackingId;
            else
                object.trackingId = options.longs === String ? $util.Long.prototype.toString.call(message.trackingId) : options.longs === Number ? new $util.LongBits(message.trackingId.low >>> 0, message.trackingId.high >>> 0).toNumber(true) : message.trackingId;
        return object;
    };

    /**
     * Converts this Request to JSON.
     * @function toJSON
     * @memberof Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Request;
})();

$root.Response = (function() {

    /**
     * Properties of a Response.
     * @exports IResponse
     * @interface IResponse
     * @property {Response.Status|null} [status] Response status
     * @property {Uint8Array|null} [response] Response response
     * @property {string|null} [errorMessage] Response errorMessage
     * @property {number|null} [trackingId] Response trackingId
     */

    /**
     * Constructs a new Response.
     * @exports Response
     * @classdesc Represents a Response.
     * @implements IResponse
     * @constructor
     * @param {IResponse=} [properties] Properties to set
     */
    function Response(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Response status.
     * @member {Response.Status} status
     * @memberof Response
     * @instance
     */
    Response.prototype.status = 0;

    /**
     * Response response.
     * @member {Uint8Array} response
     * @memberof Response
     * @instance
     */
    Response.prototype.response = $util.newBuffer([]);

    /**
     * Response errorMessage.
     * @member {string} errorMessage
     * @memberof Response
     * @instance
     */
    Response.prototype.errorMessage = "";

    /**
     * Response trackingId.
     * @member {number} trackingId
     * @memberof Response
     * @instance
     */
    Response.prototype.trackingId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new Response instance using the specified properties.
     * @function create
     * @memberof Response
     * @static
     * @param {IResponse=} [properties] Properties to set
     * @returns {Response} Response instance
     */
    Response.create = function create(properties) {
        return new Response(properties);
    };

    /**
     * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
     * @function encode
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
        if (message.response != null && Object.hasOwnProperty.call(message, "response"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.response);
        if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.errorMessage);
        if (message.trackingId != null && Object.hasOwnProperty.call(message, "trackingId"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.trackingId);
        return writer;
    };

    /**
     * Encodes the specified Response message, length delimited. Does not implicitly {@link Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Response message from the specified reader or buffer.
     * @function decode
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Response();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.status = reader.int32();
                break;
            case 2:
                message.response = reader.bytes();
                break;
            case 3:
                message.errorMessage = reader.string();
                break;
            case 4:
                message.trackingId = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Response message.
     * @function verify
     * @memberof Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            switch (message.status) {
            default:
                return "status: enum value expected";
            case 0:
            case 1:
            case 100:
                break;
            }
        if (message.response != null && message.hasOwnProperty("response"))
            if (!(message.response && typeof message.response.length === "number" || $util.isString(message.response)))
                return "response: buffer expected";
        if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
            if (!$util.isString(message.errorMessage))
                return "errorMessage: string expected";
        if (message.trackingId != null && message.hasOwnProperty("trackingId"))
            if (!$util.isInteger(message.trackingId) && !(message.trackingId && $util.isInteger(message.trackingId.low) && $util.isInteger(message.trackingId.high)))
                return "trackingId: integer|Long expected";
        return null;
    };

    /**
     * Creates a Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Response} Response
     */
    Response.fromObject = function fromObject(object) {
        if (object instanceof $root.Response)
            return object;
        var message = new $root.Response();
        switch (object.status) {
        case "OK":
        case 0:
            message.status = 0;
            break;
        case "EMPTY":
        case 1:
            message.status = 1;
            break;
        case "ERROR":
        case 100:
            message.status = 100;
            break;
        }
        if (object.response != null)
            if (typeof object.response === "string")
                $util.base64.decode(object.response, message.response = $util.newBuffer($util.base64.length(object.response)), 0);
            else if (object.response.length)
                message.response = object.response;
        if (object.errorMessage != null)
            message.errorMessage = String(object.errorMessage);
        if (object.trackingId != null)
            if ($util.Long)
                (message.trackingId = $util.Long.fromValue(object.trackingId)).unsigned = true;
            else if (typeof object.trackingId === "string")
                message.trackingId = parseInt(object.trackingId, 10);
            else if (typeof object.trackingId === "number")
                message.trackingId = object.trackingId;
            else if (typeof object.trackingId === "object")
                message.trackingId = new $util.LongBits(object.trackingId.low >>> 0, object.trackingId.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Response
     * @static
     * @param {Response} message Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Response.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.status = options.enums === String ? "OK" : 0;
            if (options.bytes === String)
                object.response = "";
            else {
                object.response = [];
                if (options.bytes !== Array)
                    object.response = $util.newBuffer(object.response);
            }
            object.errorMessage = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.trackingId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.trackingId = options.longs === String ? "0" : 0;
        }
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = options.enums === String ? $root.Response.Status[message.status] : message.status;
        if (message.response != null && message.hasOwnProperty("response"))
            object.response = options.bytes === String ? $util.base64.encode(message.response, 0, message.response.length) : options.bytes === Array ? Array.prototype.slice.call(message.response) : message.response;
        if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
            object.errorMessage = message.errorMessage;
        if (message.trackingId != null && message.hasOwnProperty("trackingId"))
            if (typeof message.trackingId === "number")
                object.trackingId = options.longs === String ? String(message.trackingId) : message.trackingId;
            else
                object.trackingId = options.longs === String ? $util.Long.prototype.toString.call(message.trackingId) : options.longs === Number ? new $util.LongBits(message.trackingId.low >>> 0, message.trackingId.high >>> 0).toNumber(true) : message.trackingId;
        return object;
    };

    /**
     * Converts this Response to JSON.
     * @function toJSON
     * @memberof Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Status enum.
     * @name Response.Status
     * @enum {number}
     * @property {number} OK=0 OK value
     * @property {number} EMPTY=1 EMPTY value
     * @property {number} ERROR=100 ERROR value
     */
    Response.Status = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OK"] = 0;
        values[valuesById[1] = "EMPTY"] = 1;
        values[valuesById[100] = "ERROR"] = 100;
        return values;
    })();

    return Response;
})();

module.exports = $root;
