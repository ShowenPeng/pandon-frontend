"use client";

import * as React from "react";
import Link from "next/link";
import { WalletConnect } from "@/components/wallet-connect";
import { ModeToggle } from "@/components/mode-toggle";

export function NavigationMenu() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <div className="flex items-center space-x-4">
          <Link href="/" className="font-bold text-2xl">
            Pandon
          </Link>
          <div className="hidden md:flex space-x-6 ml-6">
            {/* <Link href="/features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium transition-colors hover:text-primary">
              Pricing
            </Link>
            <Link href="/docs" className="text-sm font-medium transition-colors hover:text-primary">
              Docs
            </Link> */}
          </div>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          <WalletConnect />
        </div>
      </div>
    </nav>
  );
}
