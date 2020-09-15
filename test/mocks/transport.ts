import { RPCMessageTransport } from "../../src/transport";
import * as EventEmitter from "eventemitter3";


export default class MockTransport implements RPCMessageTransport {
  private closed: boolean;
  private receiver: MockTransport;
  private eventEmitter: EventEmitter;

  private constructor() {
    this.eventEmitter = new EventEmitter();
    this.receiver = null;
    this.closed = false;
  }

  public static makePair() {
    const a = new MockTransport();
    const b = new MockTransport();

    a.receiver = b;
    b.receiver = a;
    return [a, b];
  }

  onData(handler: (data: Uint8Array) => void) {
    this.eventEmitter.on("data", handler);
  }

  onClose(handler: () => void) {
    this.eventEmitter.on("close", handler);
  }

  onError(handler: (error: Error) => void) {
  }

  send(data: Uint8Array) {
    setImmediate(() => {
      this.receiver.eventEmitter.emit("data", data);
    });
  }

  close() {
    if (this.closed)
      return;
    this.closed = true;
    this.eventEmitter.emit("close");
    setImmediate(() => {
      this.receiver.close();
    });
  }
}
