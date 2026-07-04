import { HardHat, Check, TrendingUp, AlertTriangle, Building2, Users } from "lucide-react";
import { VerticalGridLines } from "@/components/pages/home/Hero";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 bg-transparent min-h-screen flex flex-col justify-between">
      {/* Grovia-style vertical column lines */}
      <VerticalGridLines />

      <div className="relative z-10 mx-auto max-w-5xl px-6 w-full flex-1 flex flex-col justify-start pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-4 pb-12">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.08] font-sans">
              Bringing order to <br />
              <span className="bg-gradient-to-r from-text-primary via-text-secondary to-text-muted bg-clip-text text-transparent">construction chaos</span>
            </h1>
            <p className="max-w-lg text-base md:text-lg text-text-secondary leading-relaxed font-sans font-medium">
              Blurick is building the operating system for India&apos;s physical economy. We digitize raw site logs, material indents, and wage ledgers to make construction transparent, predictable, and highly profitable.
            </p>
            
            {/* Ratings / Social Proof info */}
            <div className="pt-4 border-t border-border-default/60 flex items-center gap-6">
              <div>
                <div className="text-2xl font-extrabold text-text-primary">40%</div>
                <div className="text-xs text-text-secondary font-medium">DPR drafting saved</div>
              </div>
              <div className="w-[1px] h-8 bg-border-default/60"></div>
              <div>
                <div className="text-2xl font-extrabold text-text-primary">2.5%</div>
                <div className="text-xs text-text-secondary font-medium">Wastage eliminated</div>
              </div>
              <div className="w-[1px] h-8 bg-border-default/60"></div>
              <div>
                <div className="text-2xl font-extrabold text-text-primary">18 Days</div>
                <div className="text-xs text-text-secondary font-medium">Avg delay prevented</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Graphics (Cards) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center py-12 lg:pr-16">
            <div className="relative w-full max-w-[360px]">

              {/* Card 1: Platform Ecosystem Scale */}
              <div className="w-full bg-bg-card border border-border-default rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.03)] transform sm:-rotate-2 hover:rotate-0 hover:z-30 transition-all duration-300 relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xs font-bold uppercase tracking-wider text-text-muted">Blurick Ecosystem</span>
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>
                <h3 className="text-sm font-bold text-text-primary mb-3">Scale & Coverage</h3>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2.5 rounded-2xl bg-bg-canvas/50 border border-border-default/40">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700">
                        <Building2 className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-text-primary">Active Projects</div>
                        <div className="text-4xs text-text-secondary">340+ Sites Monitored</div>
                      </div>
                    </div>
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                      <Check className="h-3 w-3" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-2xl bg-bg-canvas/50 border border-border-default/40">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700">
                        <HardHat className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-text-primary">Material Volume</div>
                        <div className="text-4xs text-text-secondary">₹240 Cr+ Handled</div>
                      </div>
                    </div>
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                      <TrendingUp className="h-3 w-3" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-2xl bg-bg-canvas/50 border border-border-default/40">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700">
                        <Users className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-text-primary">Field Engineers</div>
                        <div className="text-4xs text-text-secondary">4,800+ Active Users</div>
                      </div>
                    </div>
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                      <Check className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: System Health and Latency */}
              <div className="w-full sm:w-[230px] bg-bg-card border border-border-default rounded-3xl p-5 shadow-[0_25px_60px_rgba(0,0,0,0.08)] sm:absolute sm:-bottom-10 sm:-right-16 z-20 transform sm:rotate-3 hover:rotate-0 hover:z-30 transition-all duration-300 mt-6 sm:mt-0">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xs font-bold uppercase tracking-wider text-text-muted">System Health</span>
                  <span className="text-xs font-bold text-emerald-500">Active</span>
                </div>
                <h3 className="text-sm font-bold text-text-primary mb-1">Platform Uptime</h3>
                <p className="text-2xl font-extrabold text-text-primary mb-4">99.99%</p>

                {/* Pure CSS Bar Chart */}
                <div className="flex items-end justify-between gap-2.5 h-20 pt-2">
                  <div className="flex-1 flex flex-col items-center gap-1.5">
                    <div className="w-full rounded-t-md bg-blue-500/80 h-10 hover:bg-blue-600 transition-all"></div>
                    <span className="text-[10px] font-bold text-text-secondary">M</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-1.5">
                    <div className="w-full rounded-t-md bg-blue-500/80 h-14 hover:bg-blue-600 transition-all"></div>
                    <span className="text-[10px] font-bold text-text-secondary">T</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-1.5">
                    <div className="w-full rounded-t-md bg-blue-500/80 h-8 hover:bg-blue-600 transition-all"></div>
                    <span className="text-[10px] font-bold text-text-secondary">W</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-1.5">
                    <div className="w-full rounded-t-md bg-blue-500/80 h-16 hover:bg-blue-600 transition-all"></div>
                    <span className="text-[10px] font-bold text-text-secondary">T</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-1.5">
                    <div className="w-full rounded-t-md bg-blue-500/80 h-12 hover:bg-blue-600 transition-all"></div>
                    <span className="text-[10px] font-bold text-text-secondary">F</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
