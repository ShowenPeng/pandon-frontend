import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export function CreatePayment() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className="p-6 mb-6">
        <Button onClick={() => setOpen(true)}>Create Payment</Button>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Create Payment Link</DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div>
              <Label htmlFor="productName" className="text-red-500">
                * Product Name
              </Label>
              <Input id="productName" placeholder="Product you want to sell" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border-2 border-dashed rounded-lg p-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-3xl mb-2">+</span>
                  <span>Upload Logo</span>
                </div>
              </div>
              <div>
                <Label>Product Description</Label>
                <Textarea placeholder="Product you want to sell" />
              </div>
            </div>

            <div>
              <Label className="text-red-500">* Pricing Type</Label>
              <Input defaultValue="Fixed price for customers" />
            </div>

            <div>
              <Label className="text-red-500">* Ethereum Address</Label>
              <Input placeholder="Your Ethereum address to receive payouts" />
            </div>

            <div>
              <Label className="text-red-500">* Accepted Tokens</Label>
              <Button variant="outline" className="w-full border-dashed">
                + Add another accepted token
              </Button>
            </div>

            <div>
              <Label>Success URL</Label>
              <Input placeholder="Redirected URL after payment" />
            </div>

            <div>
              <Label>Request Info</Label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Checkbox id="customerName" />
                  <Label htmlFor="customerName" className="ml-2">
                    Customer Name
                  </Label>
                </div>
                <div>
                  <Checkbox id="emailAddress" />
                  <Label htmlFor="emailAddress" className="ml-2">
                    Email Address
                  </Label>
                </div>
                <div>
                  <Checkbox id="phoneNumber" />
                  <Label htmlFor="phoneNumber" className="ml-2">
                    Phone Number
                  </Label>
                </div>
                <div>
                  <Checkbox id="address" />
                  <Label htmlFor="address" className="ml-2">
                    Address
                  </Label>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Reset
              </Button>
              <Button>Create</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
