"use client";

import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Pandon</h3>
            <p className="text-sm text-muted-foreground">
              Web3 payment infrastructure designed to be accessible to everyone without permission.
            </p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://github.com" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features" className="text-muted-foreground hover:text-primary">Features</Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-primary">Pricing</Link>
              </li>
              <li>
                <Link href="/integrations" className="text-muted-foreground hover:text-primary">Integrations</Link>
              </li>
              <li>
                <Link href="/changelog" className="text-muted-foreground hover:text-primary">Changelog</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/docs" className="text-muted-foreground hover:text-primary">Documentation</Link>
              </li>
              <li>
                <Link href="/api" className="text-muted-foreground hover:text-primary">API Reference</Link>
              </li>
              <li>
                <Link href="/guides" className="text-muted-foreground hover:text-primary">Guides</Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-primary">Support</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">About</Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary">Careers</Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
              </li>
            </ul>
          </div> */}
        </div>
        
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Pandon. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}