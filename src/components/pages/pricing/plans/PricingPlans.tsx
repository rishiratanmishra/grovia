"use client";

import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

interface Plan {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

const plans: Plan[] = [
  {
    name: "Growth",
    monthlyPrice: "₹2,499",
    annualPrice: "₹1,999",
    description: "Ideal for individual contractors and builders running up to 2 active projects.",
    features: [
      "Up to 2 active projects",
      "BOQ & Budget Control",
      "Digital Muster (Attendance)",
      "Automated DPR generation",
      "Standard WhatsApp support",
    ],
    cta: "Start 14-Day Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    monthlyPrice: "₹7,999",
    annualPrice: "₹6,399",
    description: "Perfect for mid-sized construction firms requiring comprehensive material and labor controls.",
    features: [
      "Up to 10 active projects",
      "Everything in Growth",
      "Material Stock & Ledger tracking",
      "PO Creation & Approval workflows",
      "Granular Roles & Permissions",
      "Priority WhatsApp & Call support",
    ],
    cta: "Get Started Now",
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    description: "Designed for large-scale infrastructure companies and multi-site developers.",
    features: [
      "Unlimited active projects",
      "Everything in Professional",
      "Client Billing & Measurement sheets",
      "Custom API & ERP integrations",
      "Dedicated Account Success Manager",
      "Custom SLA & Uptime guarantees",
    ],
    cta: "Schedule Live Demo",
    popular: false,
  },
];

export default function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  return (
    <section className="py-12 border-t border-border-default/60 bg-transparent relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Toggle billing */}
        <div className="flex items-center justify-center gap-3.5 mb-16">
          <span className={`text-xs font-semibold ${billingCycle === "monthly" ? "text-text-primary" : "text-text-secondary"}`}>
            Billed Monthly
          </span>
          <button
            onClick={() => setBillingCycle(prev => prev === "monthly" ? "annual" : "monthly")}
            className="w-11 h-6 bg-border-default hover:bg-border-default/80 rounded-full p-0.5 transition-colors relative flex items-center"
            aria-label="Toggle billing cycle"
          >
            <div 
              className={`w-5 h-5 bg-text-primary rounded-full shadow-sm transition-transform ${
                billingCycle === "annual" ? "translate-x-5 bg-blue-600" : "translate-x-0"
              }`} 
            />
          </button>
          <div className="flex items-center gap-1.5">
            <span className={`text-xs font-semibold ${billingCycle === "annual" ? "text-text-primary" : "text-text-secondary"}`}>
              Billed Annually
            </span>
            <span className="text-[9px] bg-emerald-500/10 text-emerald-600 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const isAnnual = billingCycle === "annual";
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const period = price === "Custom" ? "" : "/month";

            return (
              <div
                key={index}
                className={`relative rounded-3xl p-8 flex flex-col justify-between border transition-all duration-300 ${
                  plan.popular
                    ? "bg-bg-card border-blue-500/30 shadow-[0_20px_50px_rgba(0,47,167,0.03)] scale-105 z-10"
                    : "bg-bg-card/55 border-border-default hover:border-border-default/80 hover:shadow-sm"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-bg-canvas text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md">
                    Most Popular
                  </div>
                )}

                {/* Card Top */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-base font-extrabold text-text-primary uppercase tracking-wider">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mt-4">
                      <span className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight font-mono">
                        {price}
                      </span>
                      {period && (
                        <span className="text-xs font-semibold text-text-secondary">
                          {period}
                        </span>
                      )}
                    </div>
                    {isAnnual && price !== "Custom" && (
                      <p className="text-[10px] text-text-muted mt-1 font-mono">Billed annually (₹{(parseInt(price.replace(/[^0-9]/g, "")) * 12).toLocaleString()}/year)</p>
                    )}
                    <p className="text-xs text-text-secondary mt-4 leading-relaxed min-h-[48px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-[1px] bg-border-muted w-full my-6" />

                  {/* Plan Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs leading-relaxed text-text-secondary">
                        <div className="h-4 w-4 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-blue-700" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Button */}
                <button
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group ${
                    plan.popular
                      ? "bg-blue-600 text-bg-canvas hover:bg-blue-700 shadow-md shadow-blue-500/10"
                      : "bg-text-primary text-bg-canvas hover:opacity-90"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
