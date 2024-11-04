"use client";

import { Button } from "@/components/ui/button";
import { Wallet2, Loader2 } from "lucide-react";
import { useWallet } from "@/lib/web3/hooks";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

export function WalletConnect() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { 
    account, 
    chainId, 
    isConnecting, 
    connectWallet, 
    disconnectWallet 
  } = useWallet();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleConnect = async () => {
    await connectWallet();
    router.push("/dashboard");
  };

  const handleDisconnect = () => {
    disconnectWallet();
    router.push("/");
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const getNetworkName = (chainId: number) => {
    switch (chainId) {
      case 1:
        return "Ethereum Mainnet";
      case 5:
        return "Goerli Testnet";
      case 11155111:
        return "Sepolia Testnet";
      default:
        return "Unknown Network";
    }
  };

  if (!mounted) {
    return (
      <Button variant="outline" size="sm" disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading...
      </Button>
    );
  }

  if (isConnecting) {
    return (
      <Button variant="outline" size="sm" disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Connecting...
      </Button>
    );
  }

  if (account) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            <Wallet2 className="mr-2 h-4 w-4" />
            {formatAddress(account)}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Wallet</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex justify-between">
            Network
            <span className="text-muted-foreground">
              {chainId ? getNetworkName(chainId) : "Not Connected"}
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-between">
            Address
            <span className="text-muted-foreground">
              {formatAddress(account)}
            </span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => router.push("/dashboard")}>
            Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleDisconnect} className="text-red-600">
            Disconnect
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Button variant="outline" size="sm" onClick={handleConnect}>
      <Wallet2 className="mr-2 h-4 w-4" />
      Connect Wallet
    </Button>
  );
}