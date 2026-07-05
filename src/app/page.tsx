"use client";

import React from "react";
import Hero from "@/components/pages/home/Hero";
import Features from "@/components/pages/home/features/Features";
import Sandbox from "@/components/pages/home/sandbox/Sandbox";
import Pricing from "@/components/pages/home/Pricing";

export default function Home() {
  return (
    <main>
      {/* Responsive, High-Fidelity Hero Section */}
      <Hero />
      
      <Features />
      
      <Sandbox />

      <Pricing />
    </main>
  );
}
