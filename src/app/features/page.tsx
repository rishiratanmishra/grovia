import React from "react";
import { Metadata } from "next";
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
    <main>
      <FeaturesHero />
      <FeaturesList />
    </main>
  );
}
