import React from "react";
import { AlertCircle, ShieldCheck, ArrowRight } from "lucide-react";

export default function AboutStory() {
  return (
    <section className="py-20 border-t border-border-default/60 bg-transparent relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story Text */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
              Why we started Blurick
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Construction is one of the oldest and largest industries in the world, yet it remains the least digitized. In India, billions of rupees are wasted annually due to store-ledger mismatch, inventory leakage, and delayed field reports.
            </p>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Site managers struggle to tally material orders, while engineers waste hours daily drafting manual progress reports on chat apps. This gap between the site and the office leads to budget overruns and timeline delays.
            </p>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              We built Blurick to provide a single, unified workspace. By connecting material tracking, muster rolls, purchase orders, and daily progress logs into one platform, we empower developers and contractors to control costs and run transparent sites.
            </p>
          </div>

          {/* Right Column: Visual Infographics or stats card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-bg-card border border-border-default rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700">The Industry Reality</h3>
              
              <div className="flex gap-4 items-start p-3 bg-bg-canvas/50 rounded-xl border border-border-default">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-text-primary">85% Budget Overruns</h4>
                  <p className="text-[10px] text-text-secondary mt-1">Average Indian construction projects exceed budgets due to stock leakages and untracked variances.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-3 bg-bg-canvas/50 rounded-xl border border-border-default">
                <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-text-primary">Real-time Visibility</h4>
                  <p className="text-[10px] text-text-secondary mt-1">Blurick users report a 12% reduction in material wastage and 100% daily log transparency.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
