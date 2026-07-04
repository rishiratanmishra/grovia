import React from "react";
import { Zap, HeartHandshake, Eye, Award } from "lucide-react";

const values = [
  {
    name: "Ground-up Simplicity",
    description: "Our tools are engineered for the field. We prioritize lightweight, intuitive interfaces that site engineers can master in minutes.",
    icon: Zap,
  },
  {
    name: "Leakage Prevention",
    description: "Every bag of cement, ton of steel, and rupee spent matters. We enforce guardrails to keep project resources inside the site perimeter.",
    icon: Award,
  },
  {
    name: "Absolute Transparency",
    description: "We believe in honest project metrics. Real-time data logs ensure immediate visibility for developers, PMCs, and store managers.",
    icon: Eye,
  },
  {
    name: "Uncompromising Reliability",
    description: "Construction doesn't pause for slow internet. Our system works reliably even in low-connectivity infrastructure project locations.",
    icon: HeartHandshake,
  },
];

export default function AboutValues() {
  return (
    <section className="py-20 border-t border-border-default/60 bg-transparent">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
            Our Core Values
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary mt-2">
            The principles that guide our product engineering and customer support systems.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <div 
              key={idx} 
              className="bg-bg-card/45 border border-border-default hover:border-border-default/80 transition-all rounded-2xl p-6 shadow-sm flex flex-col justify-between"
            >
              <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                <val.icon className="w-5 h-5 text-blue-700" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-text-primary mb-2">{val.name}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{val.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
