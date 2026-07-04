import React from "react";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FeaturesHero from "@/components/pages/features/hero/FeaturesHero";
import FeaturesList from "@/components/pages/features/list/FeaturesList";

export const metadata: Metadata = {
  title: "Features | Blurick - Construction Operating System",
  description: "Explore the features of Blurick: BOQ & budget control, materials ledger, digital attendance, PO approvals, cash logs, and real-time site chat.",
  openGraph: {
    title: "Features | Blurick",
    description: "BOQ & budget control, materials ledger, digital attendance, PO approvals, cash logs, and real-time site chat.",
    url: "https://blurick.com/features",
    type: "website",
  },
};

export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen bg-bg-canvas text-text-primary selection:bg-accent-yellow selection:text-black">
      {/* Navigation Header */}
      <Header />

      {/* Main Sections */}
      <main>
        <FeaturesHero />
        <FeaturesList />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
