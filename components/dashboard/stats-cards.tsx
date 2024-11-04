import { Card } from "@/components/ui/card";
import { Wallet2, ArrowUpDown, Users, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Total Volume",
    value: "$12,345.67",
    change: "+12.5%",
    icon: TrendingUp,
  },
  {
    title: "Active Customers",
    value: "1,234",
    change: "+3.2%",
    icon: Users,
  },
  {
    title: "Success Rate",
    value: "99.9%",
    change: "+0.1%",
    icon: ArrowUpDown,
  },
  {
    title: "Available Balance",
    value: "$5,432.10",
    change: "+2.3%",
    icon: Wallet2,
  },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="p-6">
          <div className="flex items-center gap-4">
            <stat.icon className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-xs text-green-500">{stat.change}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}