import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-border-default/60 py-16 md:py-20 relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Logo & Slogan Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <img 
                src="/full-logo.svg" 
                alt="Blurick Logo" 
                className="h-9 w-auto object-contain" 
              />
            </Link>
            <p className="text-xs text-text-secondary leading-relaxed max-w-[240px]">
              The construction operating system for modern builders. Plan material, track labor, and control project budgets in real-time.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3 text-xs">
              <li>
                <Link href="/features" className="text-text-secondary hover:text-blue-700 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#sandbox" className="text-text-secondary hover:text-blue-700 transition-colors">
                  Interactive Sandbox
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-text-secondary hover:text-blue-700 transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3 text-xs">
              <li>
                <Link href="/about" className="text-text-secondary hover:text-blue-700 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-text-secondary hover:text-blue-700 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-blue-700 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3 text-xs">
              <li>
                <Link href="#" className="text-text-secondary hover:text-blue-700 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-text-secondary hover:text-blue-700 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-border-default/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-text-muted font-mono">
            © {new Date().getFullYear()} Blurick. All rights reserved.
          </p>
          <p className="text-[10px] text-text-muted font-mono">
            Built for India&apos;s Next Gen Infrastructure.
          </p>
        </div>

      </div>
    </footer>
  );
}
