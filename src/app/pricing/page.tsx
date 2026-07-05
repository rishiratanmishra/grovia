import React from "react";
import { Metadata } from "next";
import PricingHero from "@/components/pages/pricing/hero/PricingHero";
import PricingPlans from "@/components/pages/pricing/plans/PricingPlans";
import PricingFaq from "@/components/pages/pricing/faq/PricingFaq";

export const metadata: Metadata = {
  title: "Pricing Plans | Blurick - Construction Operating System",
  description: "Flexible, project-friendly pricing for construction developers, contractors, and PMCs. Start with our 14-day free trial.",
  openGraph: {
    title: "Pricing | Blurick",
    description: "Flexible, project-friendly pricing for construction developers, contractors, and PMCs.",
    url: "https://blurick.com/pricing",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <main>
      <PricingHero />
      <PricingPlans />
      <PricingFaq />
    </main>
  );
}
