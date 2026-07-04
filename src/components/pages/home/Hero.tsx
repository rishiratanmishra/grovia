"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Check, HardHat, TrendingUp, AlertTriangle, Play, Sparkles } from "lucide-react";

export function VerticalGridLines() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Raised panel column lines — left 36% + right 36%, center clear */}
      <div className="vertical-col-lines absolute inset-0">
        <div className="lines-left">
          {[...Array(7)].map((_, i) => <div key={i} className="col-divider" />)}
        </div>
        <div className="lines-center" />
        <div className="lines-right">
          {[...Array(7)].map((_, i) => <div key={i} className="col-divider" />)}
        </div>
      </div>
      {/* Bottom fade — smooth transition into page content */}
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-b from-transparent to-[#f4f2ee] pointer-events-none" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 bg-transparent min-h-screen flex flex-col justify-between">
      {/* Grovia-style vertical column lines */}
      <VerticalGridLines />

      <div className="relative z-10 mx-auto max-w-5xl px-6 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-12">

          {/* Left Column: Text & Content */}
          <div className="lg:col-span-6 space-y-8 text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border-default bg-bg-card px-4 py-1.5 text-xs font-medium text-text-primary shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <Sparkles className="h-3 w-3 text-accent-orange animate-pulse" />
              <span>Next-gen site management operating system</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.08] font-sans">
              The construction OS built for <span className="bg-gradient-to-r from-text-primary via-text-secondary to-text-muted bg-clip-text text-transparent">modern builders</span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-lg text-base md:text-lg text-text-secondary leading-relaxed font-sans font-medium">
              Blurick connects your office and site teams in real-time. Stop material leakages, automate labor muster rolls, and keep project schedules under control.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#demo"
                className="group flex h-12 items-center justify-center gap-3 rounded-full bg-text-primary px-6 text-sm font-bold text-bg-canvas hover:opacity-90 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
              >
                Get started
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-bg-canvas text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </Link>
              <Link
                href="#video"
                className="flex h-12 items-center justify-center gap-2.5 rounded-full border border-btn-secondary-border bg-btn-secondary-bg px-6 text-sm font-bold text-btn-secondary-text hover:bg-bg-card transition-all"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-border-default text-text-primary">
                  <Play className="h-2.5 w-2.5 fill-current" />
                </div>
                Watch demo
              </Link>
            </div>

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
          <div className="lg:col-span-6 relative flex flex-col sm:flex-row gap-6 justify-center lg:justify-end items-center">

            {/* Card 1: Active Indents / Material logs */}
            <div className="w-full sm:w-[260px] bg-bg-card border border-border-default rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.03)] transform sm:-rotate-2 hover:rotate-0 transition-all duration-300">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xs font-bold uppercase tracking-wider text-text-muted">Material Requests</span>
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <h3 className="text-sm font-bold text-text-primary mb-3">Grand Plaza Indents</h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-2.5 rounded-2xl bg-bg-canvas/50 border border-border-default/40">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-accent-orange/20 text-accent-orange">
                      <HardHat className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-text-primary">OPC Cement</div>
                      <div className="text-4xs text-text-secondary">450 Bags • Approved</div>
                    </div>
                  </div>
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                    <Check className="h-3 w-3" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-2xl bg-bg-canvas/50 border border-border-default/40">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-accent-cyan/20 text-accent-cyan">
                      <HardHat className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-text-primary">12mm TMT Steel</div>
                      <div className="text-4xs text-text-secondary">8 Tons • Pending</div>
                    </div>
                  </div>
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-orange/10 text-accent-orange">
                    <TrendingUp className="h-3 w-3" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-2xl bg-bg-canvas/50 border border-border-default/40">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-accent-pink/20 text-accent-pink">
                      <HardHat className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-text-primary">Fine Sand</div>
                      <div className="text-4xs text-text-secondary">3 Brass • Blocked</div>
                    </div>
                  </div>
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-red/10 text-accent-red">
                    <AlertTriangle className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Analytics & Daily average output */}
            <div className="w-full sm:w-[240px] bg-bg-card border border-border-default rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.03)] sm:translate-y-8 transform sm:rotate-3 hover:rotate-0 transition-all duration-300">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xs font-bold uppercase tracking-wider text-text-muted">Labor Muster</span>
                <span className="text-xs font-bold text-emerald-500">+12%</span>
              </div>
              <h3 className="text-sm font-bold text-text-primary mb-1">Muster Roll Rate</h3>
              <p className="text-2xl font-extrabold text-text-primary mb-4">92.4%</p>

              {/* Pure CSS Bar Chart */}
              <div className="flex items-end justify-between gap-2.5 h-20 pt-2">
                <div className="flex-1 flex flex-col items-center gap-1.5">
                  <div className="w-full rounded-t-md bg-accent-cyan/80 h-10 hover:bg-accent-cyan transition-all"></div>
                  <span className="text-[10px] font-bold text-text-secondary">M</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1.5">
                  <div className="w-full rounded-t-md bg-accent-orange/80 h-14 hover:bg-accent-orange transition-all"></div>
                  <span className="text-[10px] font-bold text-text-secondary">T</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1.5">
                  <div className="w-full rounded-t-md bg-accent-pink/80 h-8 hover:bg-accent-pink transition-all"></div>
                  <span className="text-[10px] font-bold text-text-secondary">W</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1.5">
                  <div className="w-full rounded-t-md bg-accent-yellow/80 h-16 hover:bg-accent-yellow transition-all"></div>
                  <span className="text-[10px] font-bold text-text-secondary">T</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1.5">
                  <div className="w-full rounded-t-md bg-text-primary/70 h-12 hover:bg-text-primary transition-all"></div>
                  <span className="text-[10px] font-bold text-text-secondary">F</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Partners / Social Proof Logo Marquee Ticker */}
      <div className="relative z-10 w-full border-y border-border-default/60 bg-bg-card/50 backdrop-blur-sm py-6 overflow-hidden">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex overflow-hidden select-none gap-12 mask-marquee">
            <div className="animate-marquee flex items-center gap-16 min-w-full justify-around">
              <span className="text-sm font-extrabold tracking-wider text-text-muted hover:text-text-primary transition-colors cursor-pointer">L&T CONSTRUCTION</span>
              <span className="text-sm font-extrabold tracking-wider text-text-muted hover:text-text-primary transition-colors cursor-pointer">TATA PROJECTS</span>
              <span className="text-sm font-extrabold tracking-wider text-text-muted hover:text-text-primary transition-colors cursor-pointer">SHAPOORJI PALLONJI</span>
              <span className="text-sm font-extrabold tracking-wider text-text-muted hover:text-text-primary transition-colors cursor-pointer">DLF HOMES</span>
              <span className="text-sm font-extrabold tracking-wider text-text-muted hover:text-text-primary transition-colors cursor-pointer">JMC PROJECTS</span>
            </div>
            {/* Duplicate for seamless scrolling */}
            <div className="animate-marquee flex items-center gap-16 min-w-full justify-around" aria-hidden="true">
              <span className="text-sm font-extrabold tracking-wider text-text-muted hover:text-text-primary transition-colors cursor-pointer">L&T CONSTRUCTION</span>
              <span className="text-sm font-extrabold tracking-wider text-text-muted hover:text-text-primary transition-colors cursor-pointer">TATA PROJECTS</span>
              <span className="text-sm font-extrabold tracking-wider text-text-muted hover:text-text-primary transition-colors cursor-pointer">SHAPOORJI PALLONJI</span>
              <span className="text-sm font-extrabold tracking-wider text-text-muted hover:text-text-primary transition-colors cursor-pointer">DLF HOMES</span>
              <span className="text-sm font-extrabold tracking-wider text-text-muted hover:text-text-primary transition-colors cursor-pointer">JMC PROJECTS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
