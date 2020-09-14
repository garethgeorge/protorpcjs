export interface RPCMessageTransport {
  onData(callback: (data: Uint8Array) => void): void;
  onClose(callback: () => void): void;
  onError(callback: (error: Error) => void): void;

  send(data: Uint8Array): void;
  close(): void;
}