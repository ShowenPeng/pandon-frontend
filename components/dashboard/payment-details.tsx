"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface PaymentDetailsProps {
  id?: string;
}

export default function PaymentDetails({ id: _id }: PaymentDetailsProps) {
  const router = useRouter();

  const handleNavigateToDetails = useCallback(
    (id: string) => {
      router.push(`/pay/${id}`);
    },
    [router],
  );

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="text-gray-500 text-sm">
        <Link href="/dashboard" className="hover:text-gray-700">
          Dashboard
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-500">Payment Details</span>
      </div>

      {/* Details Card */}
      <Card className="p-6">
        <div className="divide-y">
          {/* Link Section */}
          <div className="py-4">
            <div className="flex justify-between items-start mb-2">
              <div className="text-gray-600">Payment Link</div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `https://pandon.finance/pay/${_id}`,
                    );
                    toast("Payment link copied to clipboard!");
                  }}
                >
                  Copy
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    handleNavigateToDetails(_id!);
                  }}
                >
                  Preview
                </Button>
                <Button variant="outline" size="sm">
                  Preview Frames
                </Button>
              </div>
            </div>
            <div>
              <div className="text-blue-500">
                https://pandon.finance/pay/{_id}
              </div>
              <div className="text-sm text-gray-500 mt-2">
                URL params client_ref_id and note can be forwarded to webhook.
                <br />
                Example: https://pandon.finance/pay/{_id}
                ?client_ref_id=123&note=test
              </div>
            </div>
          </div>

          {/* Status Section */}
          <div className="py-4">
            <div className="text-gray-600">Status</div>
            <div className="mt-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-500 rounded-full text-sm">
                Active
              </span>
            </div>
          </div>

          {/* Name Section */}
          <div className="py-4">
            <div className="text-gray-600">Name</div>
            <div className="mt-2">Pandon</div>
          </div>

          {/* Price Section */}
          <div className="py-4">
            <div className="text-gray-600">Price</div>
            <div className="mt-2">100 USDC</div>
          </div>

          {/* Recipient Addresses Section */}
          <div className="py-4">
            <div className="text-gray-600">Recipient Addresses</div>
            <div className="mt-2 space-y-2">
              <div className="break-all">
                100 USDC / Base / 0x63c3742F92B6144876dc9a36AC373D0346f4F2E3
              </div>
              <div className="break-all">
                0.001 ETH / Base / 0x63c3742F92B6144876dc9a36AC373D0346f4F2E3
              </div>
            </div>
          </div>

          {/* Request Info Section */}
          <div className="py-4">
            <div className="text-gray-600">Request Info</div>
            <div className="mt-2">-</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
