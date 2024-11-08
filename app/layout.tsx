import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavigationMenu } from "@/components/navigation-menu";
import { Footer } from "@/components/footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pandon - Web3 Payment Infrastructure for Everyone",
  description:
    "Web3 payment infrastructure designed to be accessible to everyone without permission.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <NavigationMenu />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
