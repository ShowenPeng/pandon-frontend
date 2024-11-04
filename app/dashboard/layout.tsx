"use client";

import { useWallet } from "@/lib/web3/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { account, isConnecting, connectWallet } = useWallet();
  const router = useRouter();

  useEffect(() => {
    if (!account && !isConnecting) {
      router.push("/");
    }
  }, [account, isConnecting, router]);

  if (isConnecting) {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <Card className="p-8 text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-semibold">Connecting to Wallet</h2>
          <p className="text-muted-foreground mt-2">Please wait...</p>
        </Card>
      </div>
    );
  }

  if (!account) {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <Card className="p-8 text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
          <p className="text-muted-foreground mb-6">
            Please connect your wallet to access the dashboard
          </p>
          <Button onClick={connectWallet} className="w-full">
            Connect Wallet
          </Button>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
}