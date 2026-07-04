"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/pages/home/Hero";
import Features from "@/components/pages/home/features/Features";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-transparent text-text-primary selection:bg-accent-yellow selection:text-black">
      {/* Premium Navigation Header */}
      <Header />

      {/* Main Sections */}
      <main>
        {/* Responsive, High-Fidelity Hero Section */}
        <Hero />
        
        <Features />

        <section id="sandbox" className="py-20 border-t border-border-default/60 relative">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-4">Interactive Sandbox</h2>
            <p className="text-text-secondary">Coming soon in the next step...</p>
          </div>
        </section>

        <section id="pricing" className="py-20 border-t border-border-default/60 relative">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-4">Pricing Section</h2>
            <p className="text-text-secondary">Coming soon in the next step...</p>
          </div>
        </section>
      </main>
    </div>
  );
}
