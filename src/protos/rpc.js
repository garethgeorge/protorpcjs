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
     * @property {IEvent|null} [event] RPCMessage event
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

    /**
     * RPCMessage event.
     * @member {IEvent|null|undefined} event
     * @memberof RPCMessage
     * @instance
     */
    RPCMessage.prototype.event = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * RPCMessage msgType.
     * @member {"request"|"response"|"event"|undefined} msgType
     * @memberof RPCMessage
     * @instance
     */
    Object.defineProperty(RPCMessage.prototype, "msgType", {
        get: $util.oneOfGetter($oneOfFields = ["request", "response", "event"]),
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
        if (message.event != null && Object.hasOwnProperty.call(message, "event"))
            $root.Event.encode(message.event, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
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
            case 4:
                message.event = $root.Event.decode(reader, reader.uint32());
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
            properties.msgType = 1;
            {
                var error = $root.Request.verify(message.request);
                if (error)
                    return "request." + error;
            }
        }
        if (message.response != null && message.hasOwnProperty("response")) {
            if (properties.msgType === 1)
                return "msgType: multiple values";
            properties.msgType = 1;
            {
                var error = $root.Response.verify(message.response);
                if (error)
                    return "response." + error;
            }
        }
        if (message.event != null && message.hasOwnProperty("event")) {
            if (properties.msgType === 1)
                return "msgType: multiple values";
            properties.msgType = 1;
            {
                var error = $root.Event.verify(message.event);
                if (error)
                    return "event." + error;
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
        if (object.event != null) {
            if (typeof object.event !== "object")
                throw TypeError(".RPCMessage.event: object expected");
            message.event = $root.Event.fromObject(object.event);
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
                object.msgType = "request";
        }
        if (message.response != null && message.hasOwnProperty("response")) {
            object.response = $root.Response.toObject(message.response, options);
            if (options.oneofs)
                object.msgType = "response";
        }
        if (message.event != null && message.hasOwnProperty("event")) {
            object.event = $root.Event.toObject(message.event, options);
            if (options.oneofs)
                object.msgType = "event";
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
     * @property {Uint8Array|null} [requestBuffer] Request requestBuffer
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
     * Request requestBuffer.
     * @member {Uint8Array} requestBuffer
     * @memberof Request
     * @instance
     */
    Request.prototype.requestBuffer = $util.newBuffer([]);

    /**
     * Request trackingId.
     * @member {number} trackingId
     * @memberof Request
     * @instance
     */
    Request.prototype.trackingId = 0;

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
        if (message.requestBuffer != null && Object.hasOwnProperty.call(message, "requestBuffer"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.requestBuffer);
        if (message.trackingId != null && Object.hasOwnProperty.call(message, "trackingId"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.trackingId);
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
                message.requestBuffer = reader.bytes();
                break;
            case 3:
                message.trackingId = reader.int32();
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
        if (message.requestBuffer != null && message.hasOwnProperty("requestBuffer"))
            if (!(message.requestBuffer && typeof message.requestBuffer.length === "number" || $util.isString(message.requestBuffer)))
                return "requestBuffer: buffer expected";
        if (message.trackingId != null && message.hasOwnProperty("trackingId"))
            if (!$util.isInteger(message.trackingId))
                return "trackingId: integer expected";
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
        if (object.requestBuffer != null)
            if (typeof object.requestBuffer === "string")
                $util.base64.decode(object.requestBuffer, message.requestBuffer = $util.newBuffer($util.base64.length(object.requestBuffer)), 0);
            else if (object.requestBuffer.length)
                message.requestBuffer = object.requestBuffer;
        if (object.trackingId != null)
            message.trackingId = object.trackingId | 0;
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
                object.requestBuffer = "";
            else {
                object.requestBuffer = [];
                if (options.bytes !== Array)
                    object.requestBuffer = $util.newBuffer(object.requestBuffer);
            }
            object.trackingId = 0;
        }
        if (message.rpcName != null && message.hasOwnProperty("rpcName"))
            object.rpcName = message.rpcName;
        if (message.requestBuffer != null && message.hasOwnProperty("requestBuffer"))
            object.requestBuffer = options.bytes === String ? $util.base64.encode(message.requestBuffer, 0, message.requestBuffer.length) : options.bytes === Array ? Array.prototype.slice.call(message.requestBuffer) : message.requestBuffer;
        if (message.trackingId != null && message.hasOwnProperty("trackingId"))
            object.trackingId = message.trackingId;
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
     * @property {number|null} [trackingId] Response trackingId
     * @property {Uint8Array|null} [responseBuffer] Response responseBuffer
     * @property {string|null} [errorMessage] Response errorMessage
     * @property {Response.IEmpty|null} [empty] Response empty
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
     * Response trackingId.
     * @member {number} trackingId
     * @memberof Response
     * @instance
     */
    Response.prototype.trackingId = 0;

    /**
     * Response responseBuffer.
     * @member {Uint8Array} responseBuffer
     * @memberof Response
     * @instance
     */
    Response.prototype.responseBuffer = $util.newBuffer([]);

    /**
     * Response errorMessage.
     * @member {string} errorMessage
     * @memberof Response
     * @instance
     */
    Response.prototype.errorMessage = "";

    /**
     * Response empty.
     * @member {Response.IEmpty|null|undefined} empty
     * @memberof Response
     * @instance
     */
    Response.prototype.empty = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Response returned.
     * @member {"responseBuffer"|"errorMessage"|"empty"|undefined} returned
     * @memberof Response
     * @instance
     */
    Object.defineProperty(Response.prototype, "returned", {
        get: $util.oneOfGetter($oneOfFields = ["responseBuffer", "errorMessage", "empty"]),
        set: $util.oneOfSetter($oneOfFields)
    });

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
        if (message.trackingId != null && Object.hasOwnProperty.call(message, "trackingId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.trackingId);
        if (message.responseBuffer != null && Object.hasOwnProperty.call(message, "responseBuffer"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.responseBuffer);
        if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.errorMessage);
        if (message.empty != null && Object.hasOwnProperty.call(message, "empty"))
            $root.Response.Empty.encode(message.empty, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
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
                message.trackingId = reader.int32();
                break;
            case 2:
                message.responseBuffer = reader.bytes();
                break;
            case 3:
                message.errorMessage = reader.string();
                break;
            case 4:
                message.empty = $root.Response.Empty.decode(reader, reader.uint32());
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
        var properties = {};
        if (message.trackingId != null && message.hasOwnProperty("trackingId"))
            if (!$util.isInteger(message.trackingId))
                return "trackingId: integer expected";
        if (message.responseBuffer != null && message.hasOwnProperty("responseBuffer")) {
            properties.returned = 1;
            if (!(message.responseBuffer && typeof message.responseBuffer.length === "number" || $util.isString(message.responseBuffer)))
                return "responseBuffer: buffer expected";
        }
        if (message.errorMessage != null && message.hasOwnProperty("errorMessage")) {
            if (properties.returned === 1)
                return "returned: multiple values";
            properties.returned = 1;
            if (!$util.isString(message.errorMessage))
                return "errorMessage: string expected";
        }
        if (message.empty != null && message.hasOwnProperty("empty")) {
            if (properties.returned === 1)
                return "returned: multiple values";
            properties.returned = 1;
            {
                var error = $root.Response.Empty.verify(message.empty);
                if (error)
                    return "empty." + error;
            }
        }
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
        if (object.trackingId != null)
            message.trackingId = object.trackingId | 0;
        if (object.responseBuffer != null)
            if (typeof object.responseBuffer === "string")
                $util.base64.decode(object.responseBuffer, message.responseBuffer = $util.newBuffer($util.base64.length(object.responseBuffer)), 0);
            else if (object.responseBuffer.length)
                message.responseBuffer = object.responseBuffer;
        if (object.errorMessage != null)
            message.errorMessage = String(object.errorMessage);
        if (object.empty != null) {
            if (typeof object.empty !== "object")
                throw TypeError(".Response.empty: object expected");
            message.empty = $root.Response.Empty.fromObject(object.empty);
        }
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
        if (options.defaults)
            object.trackingId = 0;
        if (message.trackingId != null && message.hasOwnProperty("trackingId"))
            object.trackingId = message.trackingId;
        if (message.responseBuffer != null && message.hasOwnProperty("responseBuffer")) {
            object.responseBuffer = options.bytes === String ? $util.base64.encode(message.responseBuffer, 0, message.responseBuffer.length) : options.bytes === Array ? Array.prototype.slice.call(message.responseBuffer) : message.responseBuffer;
            if (options.oneofs)
                object.returned = "responseBuffer";
        }
        if (message.errorMessage != null && message.hasOwnProperty("errorMessage")) {
            object.errorMessage = message.errorMessage;
            if (options.oneofs)
                object.returned = "errorMessage";
        }
        if (message.empty != null && message.hasOwnProperty("empty")) {
            object.empty = $root.Response.Empty.toObject(message.empty, options);
            if (options.oneofs)
                object.returned = "empty";
        }
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

    Response.Empty = (function() {

        /**
         * Properties of an Empty.
         * @memberof Response
         * @interface IEmpty
         */

        /**
         * Constructs a new Empty.
         * @memberof Response
         * @classdesc Represents an Empty.
         * @implements IEmpty
         * @constructor
         * @param {Response.IEmpty=} [properties] Properties to set
         */
        function Empty(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Empty instance using the specified properties.
         * @function create
         * @memberof Response.Empty
         * @static
         * @param {Response.IEmpty=} [properties] Properties to set
         * @returns {Response.Empty} Empty instance
         */
        Empty.create = function create(properties) {
            return new Empty(properties);
        };

        /**
         * Encodes the specified Empty message. Does not implicitly {@link Response.Empty.verify|verify} messages.
         * @function encode
         * @memberof Response.Empty
         * @static
         * @param {Response.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link Response.Empty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Response.Empty
         * @static
         * @param {Response.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @function decode
         * @memberof Response.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Response.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Response.Empty();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Response.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Response.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Empty message.
         * @function verify
         * @memberof Response.Empty
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Empty.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Response.Empty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Response.Empty} Empty
         */
        Empty.fromObject = function fromObject(object) {
            if (object instanceof $root.Response.Empty)
                return object;
            return new $root.Response.Empty();
        };

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Response.Empty
         * @static
         * @param {Response.Empty} message Empty
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Empty.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Empty to JSON.
         * @function toJSON
         * @memberof Response.Empty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Empty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Empty;
    })();

    return Response;
})();

$root.Event = (function() {

    /**
     * Properties of an Event.
     * @exports IEvent
     * @interface IEvent
     * @property {string|null} [name] Event name
     * @property {Uint8Array|null} [buffer] Event buffer
     */

    /**
     * Constructs a new Event.
     * @exports Event
     * @classdesc Represents an Event.
     * @implements IEvent
     * @constructor
     * @param {IEvent=} [properties] Properties to set
     */
    function Event(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Event name.
     * @member {string} name
     * @memberof Event
     * @instance
     */
    Event.prototype.name = "";

    /**
     * Event buffer.
     * @member {Uint8Array} buffer
     * @memberof Event
     * @instance
     */
    Event.prototype.buffer = $util.newBuffer([]);

    /**
     * Creates a new Event instance using the specified properties.
     * @function create
     * @memberof Event
     * @static
     * @param {IEvent=} [properties] Properties to set
     * @returns {Event} Event instance
     */
    Event.create = function create(properties) {
        return new Event(properties);
    };

    /**
     * Encodes the specified Event message. Does not implicitly {@link Event.verify|verify} messages.
     * @function encode
     * @memberof Event
     * @static
     * @param {IEvent} message Event message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Event.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.buffer != null && Object.hasOwnProperty.call(message, "buffer"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.buffer);
        return writer;
    };

    /**
     * Encodes the specified Event message, length delimited. Does not implicitly {@link Event.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Event
     * @static
     * @param {IEvent} message Event message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Event.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Event message from the specified reader or buffer.
     * @function decode
     * @memberof Event
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Event} Event
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Event.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Event();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.buffer = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Event message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Event
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Event} Event
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Event.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Event message.
     * @function verify
     * @memberof Event
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Event.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.buffer != null && message.hasOwnProperty("buffer"))
            if (!(message.buffer && typeof message.buffer.length === "number" || $util.isString(message.buffer)))
                return "buffer: buffer expected";
        return null;
    };

    /**
     * Creates an Event message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Event
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Event} Event
     */
    Event.fromObject = function fromObject(object) {
        if (object instanceof $root.Event)
            return object;
        var message = new $root.Event();
        if (object.name != null)
            message.name = String(object.name);
        if (object.buffer != null)
            if (typeof object.buffer === "string")
                $util.base64.decode(object.buffer, message.buffer = $util.newBuffer($util.base64.length(object.buffer)), 0);
            else if (object.buffer.length)
                message.buffer = object.buffer;
        return message;
    };

    /**
     * Creates a plain object from an Event message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Event
     * @static
     * @param {Event} message Event
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Event.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.name = "";
            if (options.bytes === String)
                object.buffer = "";
            else {
                object.buffer = [];
                if (options.bytes !== Array)
                    object.buffer = $util.newBuffer(object.buffer);
            }
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.buffer != null && message.hasOwnProperty("buffer"))
            object.buffer = options.bytes === String ? $util.base64.encode(message.buffer, 0, message.buffer.length) : options.bytes === Array ? Array.prototype.slice.call(message.buffer) : message.buffer;
        return object;
    };

    /**
     * Converts this Event to JSON.
     * @function toJSON
     * @memberof Event
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Event.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Event;
})();

module.exports = $root;
