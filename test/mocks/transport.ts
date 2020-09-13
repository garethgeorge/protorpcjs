import { RPCMessageTransport } from "../../src/index";
import * as EventEmitter from "event-emitter";

export default class MockTransport implements RPCMessageTransport {
  private closed: boolean;
  private receiver: MockTransport;
  private eventEmitter: EventEmitter.Emitter;

  private constructor() {
    this.eventEmitter = EventEmitter();
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
    this.eventEmitter.on("data", handler);
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
