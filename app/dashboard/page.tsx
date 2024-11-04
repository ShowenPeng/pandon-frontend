"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Wallet2, ArrowUpDown, Users } from "lucide-react";
import { useWallet } from "@/lib/web3/hooks";
import { AnalyticsChart } from "@/components/dashboard/analytics-chart";
import { PaymentHistory } from "@/components/dashboard/payment-history";
import { AccountSettings } from "@/components/dashboard/account-settings";
import { DashboardHeader } from "@/components/dashboard/header";
import { StatsCards } from "@/components/dashboard/stats-cards";

export default function DashboardPage() {
  const { account } = useWallet();
  const [activeTab, setActiveTab] = useState("overview");

  if (!account) {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
          <p className="text-muted-foreground mb-4">
            Please connect your wallet to access the dashboard
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <DashboardHeader />
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="grid grid-cols-3 w-full max-w-[600px] mx-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <StatsCards />
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Payment Analytics</h3>
            <AnalyticsChart />
          </Card>
        </TabsContent>

        <TabsContent value="payments">
          <PaymentHistory />
        </TabsContent>

        <TabsContent value="settings">
          <AccountSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}