"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What counts as an 'active project'?",
    answer: "An active project is any project site where work is ongoing and data (e.g. daily logs, labor attendance, material requests) is actively being input. Completed or archived projects do not count toward your plan limit.",
  },
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer: "Yes, you can upgrade, downgrade, or cancel your subscription directly from your account settings. If you upgrade, the change is instant and pro-rated. If you cancel, your access continues until the end of your billing period.",
  },
  {
    question: "Do you offer offline site synchronization?",
    answer: "Yes, the Blurick mobile app caches all input data locally when internet connection is poor on-site. Once a cellular or Wi-Fi signal is re-established, the app automatically syncs the data back to the office ledger.",
  },
  {
    question: "Can we import our existing Excel sheets or BOQs?",
    answer: "Absolutely. Our onboarding team will assist you in migrating your existing cost analysis, contractor ledgers, and BOQ Excel spreadsheets directly into your Blurick database template free of charge.",
  },
];

export default function PricingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="py-20 border-t border-border-default/60 bg-transparent mb-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary mt-2">
            Have questions about billing, data security, or implementation? We have answers.
          </p>
        </div>

        {/* Collapsible FAQ list */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx} 
                className="bg-bg-card border border-border-default rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-xs font-bold text-text-primary uppercase tracking-wide select-none"
                >
                  <span>{faq.question}</span>
                  <div className="h-6 w-6 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-700 shrink-0">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs leading-relaxed text-text-secondary border-t border-border-muted/40 bg-bg-canvas/10">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
