import { Button } from "@/components/ui/button";
import { ArrowRight, Wallet2, BarChart2, Shield, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Web3 Payments Made Simple
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create a link and receive crypto payments seamlessly with our
            payment infrastructure. Built for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="gap-2">
              View Demo <Zap className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Pandon?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Wallet2 className="h-8 w-8" />}
              title="Multi-Chain Support"
              description="Accept payments in ETH, USDC, and other major cryptocurrencies across multiple blockchains."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="Enterprise Security"
              description="We don't hold your funds. Enterprise security with non-custodial wallets and automated smart contract auditing."
            />
            <FeatureCard
              icon={<BarChart2 className="h-8 w-8" />}
              title="Real-time Analytics"
              description="Track payments, monitor transactions, and analyze your business performance in real-time."
            />
          </div>
        </div>
      </section>

      {/* Integration Preview */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Simple Integration</h2>
              <p className="text-muted-foreground mb-6">
                Integrate crypto payments into your application with just a few
                lines of code. Our SDK handles all the complexity.
              </p>
              <pre className="p-4 rounded-lg bg-background overflow-x-auto">
                <code className="text-sm font-mono leading-relaxed">
                  {`import { Pandon } from'@pandon/api;
                  
  const payment = await Pandon.createPayment({
  amount: "100",
  currency: "USDC",
  chain: "ethereum"
});`}
                </code>
              </pre>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                alt="Dashboard Preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-xl border bg-card">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
