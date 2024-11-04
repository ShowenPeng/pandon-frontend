import { Button } from "@/components/ui/button";
import { useWallet } from "@/lib/web3/hooks";
import { Download } from "lucide-react";

export function DashboardHeader() {
  const { account } = useWallet();

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your payments and account settings
        </p>
      </div>
      <Button variant="outline" size="sm">
        <Download className="mr-2 h-4 w-4" />
        Export Data
      </Button>
    </div>
  );
}
