"use client";

import { useState, useEffect } from "react";
import { ethers } from "ethers";

export function useWallet() {
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);

  useEffect(() => {
    setIsMetaMaskInstalled(
      typeof window !== "undefined" && !!window.ethereum?.isMetaMask,
    );
  }, []);

  const connectWallet = async () => {
    if (!isMetaMaskInstalled) {
      setError("MetaMask is required");
      return;
    }

    setIsConnecting(true);
    try {
      if (!window.ethereum) throw new Error("No ethereum provider");
      const provider = new ethers.BrowserProvider(window.ethereum);
      const network = await provider.getNetwork();
      const accounts = await provider.send("eth_requestAccounts", []);

      setAccount(accounts[0]);
      setChainId(Number(network.chainId));
      setProvider(provider);
      setError(null);
    } catch (err) {
      setError("Failed to connect wallet");
      console.error(err);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setChainId(null);
    setProvider(null);
  };

  useEffect(() => {
    const handleAccountsChanged = (accounts: string[]) => {
      setAccount(accounts[0] || null);
    };

    const handleChainChanged = (chainId: string) => {
      setChainId(Number(chainId));
    };

    if (isMetaMaskInstalled && window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
      window.ethereum.on("chainChanged", handleChainChanged);

      // Check if already connected
      window.ethereum
        .request({ method: "eth_accounts" })
        .then((accounts: string[]) => {
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            if (!window.ethereum) return;
            const provider = new ethers.BrowserProvider(window.ethereum);
            setProvider(provider);
            provider.getNetwork().then((network) => {
              setChainId(Number(network.chainId));
            });
          }
        });
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged,
        );
        window.ethereum.removeListener("chainChanged", handleChainChanged);
      }
    };
  }, [isMetaMaskInstalled]);

  return {
    account,
    chainId,
    provider,
    isConnecting,
    error,
    isMetaMaskInstalled,
    connectWallet,
    disconnectWallet,
  };
}
