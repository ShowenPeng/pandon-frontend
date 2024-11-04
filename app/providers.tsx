"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
// import { WagmiConfig, createConfig } from 'wagmi'
import { mainnet, base } from "viem/chains";

// const config = createConfig({
//     chains: [mainnet, base],
//     // ... other config options
// })

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster />
    </ThemeProvider>
  );
}
