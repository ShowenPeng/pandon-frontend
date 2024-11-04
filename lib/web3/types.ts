export interface Web3Error {
  code: number;
  message: string;
}

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, callback: (...args: any[]) => void) => void;
      removeListener: (event: string, callback: (...args: any[]) => void) => void;
      removeAllListeners: () => void;
      isMetaMask?: boolean;
    };
  }
}