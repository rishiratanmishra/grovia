"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/pages/home/Hero";
import Features from "@/components/pages/home/features/Features";
import Sandbox from "@/components/pages/home/sandbox/Sandbox";
import Pricing from "@/components/pages/home/Pricing";
import Footer from "@/components/layout/Footer";

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
        
        <Sandbox />

        <Pricing />
      </main>

      {/* Site-wide Footer */}
      <Footer />
    </div>
  );
}
