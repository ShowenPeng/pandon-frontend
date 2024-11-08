import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const transactions = [
  {
    id: "1",
    date: "2024-01-20",
    link_id: "bjW9Zd8t",
    amount: "0.5 ETH",
    status: "Completed",
    from: "0x1234...5678",
    to: "0x8765...4321",
  },
  {
    id: "2",
    date: "2024-01-19",
    link_id: "vH65gk7r",
    amount: "1000 USDC",
    status: "Pending",
    from: "0x2345...6789",
    to: "0x9876...5432",
  },
  // Add more transaction data as needed
];

export function PaymentHistory() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Payment History</h2>
      </div>
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Link ID</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>From</TableHead>
              <TableHead>To</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx) => (
              <TableRow key={tx.id}>
                <TableCell>{tx.date}</TableCell>
                <TableCell className="text-blue-500">{tx.link_id}</TableCell>
                <TableCell>{tx.amount}</TableCell>
                <TableCell className="font-mono">{tx.from}</TableCell>
                <TableCell className="font-mono">{tx.to}</TableCell>
                <TableCell>
                  <Badge
                    className="text-blue-500"
                    variant={
                      tx.status === "completed" ? "default" : "secondary"
                    }
                  >
                    {tx.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
