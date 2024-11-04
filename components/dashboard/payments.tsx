import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function Payments() {
  const router = useRouter();

  const handleNavigateToDetails = useCallback(
    (id: string) => {
      router.push(`/dashboard/payment/${id}`);
    },
    [router],
  );

  return (
    <Card className="p-6 mb-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">My Payments</h3>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Link ID</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            {/* <TableHead>Filter</TableHead> */}
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-sm text-gray-600">
              10/31/2024 18:01:04
            </TableCell>
            <TableCell>Pandon</TableCell>
            <TableCell className="text-blue-500">vfSh9zmU</TableCell>
            <TableCell>100 USDC</TableCell>
            <TableCell>
              <span className="px-2 py-1 bg-blue-100 text-blue-500 rounded-md text-sm">
                Active
              </span>
            </TableCell>
            {/* <TableCell></TableCell> */}
            <TableCell>
              <div className="space-x-2">
                <Button
                  variant="link"
                  className="text-blue-500"
                  onClick={() => {
                    const linkID = "vfSh9zmU";
                    handleNavigateToDetails(linkID);
                  }}
                >
                  Details
                </Button>
                <Button variant="link" className="text-blue-500">
                  Deactivate
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" disabled>
            &lt;
          </Button>
          <Button variant="outline" className="text-blue-500">
            1
          </Button>
          <Button variant="outline" size="icon">
            &gt;
          </Button>
        </div>
        <select className="border rounded-md px-2 py-1">
          <option>10 pages</option>
        </select>
      </div>
    </Card>
  );
}
