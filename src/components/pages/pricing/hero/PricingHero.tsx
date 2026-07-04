import React from "react";
import { VerticalGridLines } from "@/components/pages/home/Hero";

export default function PricingHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 bg-transparent min-h-[60vh] flex flex-col justify-center">
      <VerticalGridLines />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.08] font-sans">
          Simple plans for <br />
          <span className="bg-gradient-to-r from-text-primary via-text-secondary to-text-muted bg-clip-text text-transparent">growing teams</span>
        </h1>
        <p className="max-w-xl text-base md:text-lg text-text-secondary mt-6 mx-auto leading-relaxed font-sans font-medium">
          Whether you are an independent builder running a single project or a enterprise contractor managing multiple sites, we have a custom plan for you.
        </p>
      </div>
    </section>
  );
}
