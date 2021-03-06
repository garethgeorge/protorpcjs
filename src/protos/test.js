/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.TestService = (function() {

    /**
     * Constructs a new TestService service.
     * @exports TestService
     * @classdesc Represents a TestService
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function TestService(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (TestService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = TestService;

    /**
     * Creates new TestService service using the specified rpc implementation.
     * @function create
     * @memberof TestService
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {TestService} RPC service. Useful where requests and/or responses are streamed.
     */
    TestService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link TestService#testRpc}.
     * @memberof TestService
     * @typedef testRpcCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {TestResponse} [response] TestResponse
     */

    /**
     * Calls testRpc.
     * @function testRpc
     * @memberof TestService
     * @instance
     * @param {ITestRequest} request TestRequest message or plain object
     * @param {TestService.testRpcCallback} callback Node-style callback called with the error, if any, and TestResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(TestService.prototype.testRpc = function testRpc(request, callback) {
        return this.rpcCall(testRpc, $root.TestRequest, $root.TestResponse, request, callback);
    }, "name", { value: "testRpc" });

    /**
     * Calls testRpc.
     * @function testRpc
     * @memberof TestService
     * @instance
     * @param {ITestRequest} request TestRequest message or plain object
     * @returns {Promise<TestResponse>} Promise
     * @variation 2
     */

    return TestService;
})();

$root.TestRequest = (function() {

    /**
     * Properties of a TestRequest.
     * @exports ITestRequest
     * @interface ITestRequest
     * @property {string|null} [reqText] TestRequest reqText
     */

    /**
     * Constructs a new TestRequest.
     * @exports TestRequest
     * @classdesc Represents a TestRequest.
     * @implements ITestRequest
     * @constructor
     * @param {ITestRequest=} [properties] Properties to set
     */
    function TestRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TestRequest reqText.
     * @member {string} reqText
     * @memberof TestRequest
     * @instance
     */
    TestRequest.prototype.reqText = "";

    /**
     * Creates a new TestRequest instance using the specified properties.
     * @function create
     * @memberof TestRequest
     * @static
     * @param {ITestRequest=} [properties] Properties to set
     * @returns {TestRequest} TestRequest instance
     */
    TestRequest.create = function create(properties) {
        return new TestRequest(properties);
    };

    /**
     * Encodes the specified TestRequest message. Does not implicitly {@link TestRequest.verify|verify} messages.
     * @function encode
     * @memberof TestRequest
     * @static
     * @param {ITestRequest} message TestRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TestRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.reqText != null && Object.hasOwnProperty.call(message, "reqText"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.reqText);
        return writer;
    };

    /**
     * Encodes the specified TestRequest message, length delimited. Does not implicitly {@link TestRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TestRequest
     * @static
     * @param {ITestRequest} message TestRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TestRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TestRequest message from the specified reader or buffer.
     * @function decode
     * @memberof TestRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TestRequest} TestRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TestRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TestRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.reqText = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TestRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TestRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TestRequest} TestRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TestRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TestRequest message.
     * @function verify
     * @memberof TestRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TestRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.reqText != null && message.hasOwnProperty("reqText"))
            if (!$util.isString(message.reqText))
                return "reqText: string expected";
        return null;
    };

    /**
     * Creates a TestRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TestRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TestRequest} TestRequest
     */
    TestRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.TestRequest)
            return object;
        var message = new $root.TestRequest();
        if (object.reqText != null)
            message.reqText = String(object.reqText);
        return message;
    };

    /**
     * Creates a plain object from a TestRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TestRequest
     * @static
     * @param {TestRequest} message TestRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TestRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.reqText = "";
        if (message.reqText != null && message.hasOwnProperty("reqText"))
            object.reqText = message.reqText;
        return object;
    };

    /**
     * Converts this TestRequest to JSON.
     * @function toJSON
     * @memberof TestRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TestRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TestRequest;
})();

$root.TestResponse = (function() {

    /**
     * Properties of a TestResponse.
     * @exports ITestResponse
     * @interface ITestResponse
     * @property {string|null} [respText] TestResponse respText
     */

    /**
     * Constructs a new TestResponse.
     * @exports TestResponse
     * @classdesc Represents a TestResponse.
     * @implements ITestResponse
     * @constructor
     * @param {ITestResponse=} [properties] Properties to set
     */
    function TestResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TestResponse respText.
     * @member {string} respText
     * @memberof TestResponse
     * @instance
     */
    TestResponse.prototype.respText = "";

    /**
     * Creates a new TestResponse instance using the specified properties.
     * @function create
     * @memberof TestResponse
     * @static
     * @param {ITestResponse=} [properties] Properties to set
     * @returns {TestResponse} TestResponse instance
     */
    TestResponse.create = function create(properties) {
        return new TestResponse(properties);
    };

    /**
     * Encodes the specified TestResponse message. Does not implicitly {@link TestResponse.verify|verify} messages.
     * @function encode
     * @memberof TestResponse
     * @static
     * @param {ITestResponse} message TestResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TestResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.respText != null && Object.hasOwnProperty.call(message, "respText"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.respText);
        return writer;
    };

    /**
     * Encodes the specified TestResponse message, length delimited. Does not implicitly {@link TestResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TestResponse
     * @static
     * @param {ITestResponse} message TestResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TestResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TestResponse message from the specified reader or buffer.
     * @function decode
     * @memberof TestResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TestResponse} TestResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TestResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TestResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.respText = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TestResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TestResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TestResponse} TestResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TestResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TestResponse message.
     * @function verify
     * @memberof TestResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TestResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.respText != null && message.hasOwnProperty("respText"))
            if (!$util.isString(message.respText))
                return "respText: string expected";
        return null;
    };

    /**
     * Creates a TestResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TestResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TestResponse} TestResponse
     */
    TestResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.TestResponse)
            return object;
        var message = new $root.TestResponse();
        if (object.respText != null)
            message.respText = String(object.respText);
        return message;
    };

    /**
     * Creates a plain object from a TestResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TestResponse
     * @static
     * @param {TestResponse} message TestResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TestResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.respText = "";
        if (message.respText != null && message.hasOwnProperty("respText"))
            object.respText = message.respText;
        return object;
    };

    /**
     * Converts this TestResponse to JSON.
     * @function toJSON
     * @memberof TestResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TestResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TestResponse;
})();

$root.TestEvent = (function() {

    /**
     * Properties of a TestEvent.
     * @exports ITestEvent
     * @interface ITestEvent
     * @property {string|null} [eventData] TestEvent eventData
     */

    /**
     * Constructs a new TestEvent.
     * @exports TestEvent
     * @classdesc Represents a TestEvent.
     * @implements ITestEvent
     * @constructor
     * @param {ITestEvent=} [properties] Properties to set
     */
    function TestEvent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TestEvent eventData.
     * @member {string} eventData
     * @memberof TestEvent
     * @instance
     */
    TestEvent.prototype.eventData = "";

    /**
     * Creates a new TestEvent instance using the specified properties.
     * @function create
     * @memberof TestEvent
     * @static
     * @param {ITestEvent=} [properties] Properties to set
     * @returns {TestEvent} TestEvent instance
     */
    TestEvent.create = function create(properties) {
        return new TestEvent(properties);
    };

    /**
     * Encodes the specified TestEvent message. Does not implicitly {@link TestEvent.verify|verify} messages.
     * @function encode
     * @memberof TestEvent
     * @static
     * @param {ITestEvent} message TestEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TestEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.eventData != null && Object.hasOwnProperty.call(message, "eventData"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventData);
        return writer;
    };

    /**
     * Encodes the specified TestEvent message, length delimited. Does not implicitly {@link TestEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TestEvent
     * @static
     * @param {ITestEvent} message TestEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TestEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TestEvent message from the specified reader or buffer.
     * @function decode
     * @memberof TestEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TestEvent} TestEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TestEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TestEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.eventData = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TestEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TestEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TestEvent} TestEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TestEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TestEvent message.
     * @function verify
     * @memberof TestEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TestEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.eventData != null && message.hasOwnProperty("eventData"))
            if (!$util.isString(message.eventData))
                return "eventData: string expected";
        return null;
    };

    /**
     * Creates a TestEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TestEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TestEvent} TestEvent
     */
    TestEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.TestEvent)
            return object;
        var message = new $root.TestEvent();
        if (object.eventData != null)
            message.eventData = String(object.eventData);
        return message;
    };

    /**
     * Creates a plain object from a TestEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TestEvent
     * @static
     * @param {TestEvent} message TestEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TestEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.eventData = "";
        if (message.eventData != null && message.hasOwnProperty("eventData"))
            object.eventData = message.eventData;
        return object;
    };

    /**
     * Converts this TestEvent to JSON.
     * @function toJSON
     * @memberof TestEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TestEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TestEvent;
})();

module.exports = $root;
