import React, { useState, useEffect, useRef } from "react";
import { 
  Calculator, 
  Boxes, 
  ClipboardCheck, 
  CheckSquare, 
  FileText, 
  IndianRupee,
  MessageSquare
} from "lucide-react";
import { 
  BOQMock, 
  InventoryMock, 
  LaborMock, 
  DPRMock, 
  POMock, 
  CashFlowMock,
  ChatMock
} from "./FeatureMocks";

const featuresList = [
  {
    title: "BOQ & Budget Control",
    highlight: "Prevent budget overruns",
    description: "Upload your client BOQ, define project budgets, and track variances in real-time as work happens on-site.",
    icon: Calculator,
    mock: BOQMock,
  },
  {
    title: "Material & Inventory",
    highlight: "Stop material leakage",
    description: "Track Goods Received Notes (GRNs), current stock levels, and issue materials directly to sub-contractors with strict consumption limits.",
    icon: Boxes,
    mock: InventoryMock,
  },
  {
    title: "Muster & Labor Logs",
    highlight: "Automate daily attendance",
    description: "Mark attendance via mobile, automate wage calculations for daily-wagers, and track sub-contractor headcounts directly from the field.",
    icon: ClipboardCheck,
    mock: LaborMock,
  },
  {
    title: "Automated DPRs",
    highlight: "Zero-effort daily reporting",
    description: "Site engineers can log work, upload photos, and generate professional Daily Progress Reports (DPRs) in under 5 minutes.",
    icon: CheckSquare,
    mock: DPRMock,
  },
  {
    title: "Procurement & POs",
    highlight: "Streamline purchasing",
    description: "Raise material indents from site, request vendor quotes, and release Purchase Orders (POs) with automated approval workflows.",
    icon: FileText,
    mock: POMock,
  },
  {
    title: "Client Billing & Cash Flow",
    highlight: "Get paid on time",
    description: "Generate measurement sheets, raise client invoices, and track outstanding receipts to keep your project cash flow healthy.",
    icon: IndianRupee,
    mock: CashFlowMock,
  },
  {
    title: "Instant Site Collaboration",
    highlight: "Connect office & site",
    description: "Connect office managers and field teams instantly. Share progress photos, resolve blockers on-site, and log conversation history directly within project modules.",
    icon: MessageSquare,
    mock: ChatMock,
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the container has been scrolled relative to the viewport
      const totalScrollableHeight = rect.height - windowHeight;
      const scrolledAmount = -rect.top;
      
      if (scrolledAmount < 0) {
        setActiveIndex(0);
        return;
      }
      
      if (scrolledAmount > totalScrollableHeight) {
        setActiveIndex(featuresList.length - 1);
        return;
      }
      
      const progress = scrolledAmount / totalScrollableHeight;
      const index = Math.min(
        featuresList.length - 1,
        Math.floor(progress * featuresList.length)
      );
      
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call to set active index on mount
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-transparent border-t border-border-default/60">
      
      {/* Intro Header Section (scrolls normally) */}
      <div className="mx-auto max-w-6xl px-6 pt-32 pb-16 text-center">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-blue-700 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1 rounded-full">
          Product Capabilities
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mt-5">
          Everything you need to run a profitable site
        </h2>
        <p className="text-base sm:text-lg text-text-secondary mt-4 max-w-2xl mx-auto leading-relaxed">
          From raw material orders to client billings, control every rupee and resource in one place.
        </p>
      </div>

      {/* Sticky scroll container */}
      <div ref={containerRef} className="relative h-[440vh] bg-transparent">
        {/* Sticky wrapper */}
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            
            {/* Left Column: Progress indicator & Text details (Span 5 for cleaner text balance) */}
            <div className="md:col-span-5 flex flex-col justify-center min-h-[220px] md:min-h-[280px] relative">
              {featuresList.map((feature, idx) => {
                const isSelected = idx === activeIndex;
                return (
                  <div
                    key={idx}
                    className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-in-out ${
                      isSelected 
                        ? "opacity-100 translate-y-0 pointer-events-auto" 
                        : "opacity-0 translate-y-6 pointer-events-none"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="h-10 w-10 rounded-xl bg-bg-canvas border border-border-default flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-text-primary" />
                      </div>
                      <span className="text-[10px] font-bold text-blue-700 tracking-wider uppercase bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded">
                        {feature.highlight}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-text-secondary mt-4 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Visual Mockup Showcase Card (Span 7 for wider desktop UIs) */}
            <div className="md:col-span-7 flex flex-col justify-center items-center relative h-[280px] sm:h-[320px] md:h-[380px]">
              {/* Elegant Background Card Ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-[2.5rem] border border-border-default/40 -rotate-2 scale-105 pointer-events-none" />

              {/* Render active mockup */}
              <div className="relative w-full max-w-[480px] h-[250px]">
                {featuresList.map((feature, idx) => {
                  const Mock = feature.mock;
                  const isSelected = idx === activeIndex;
                  return (
                    <div
                      key={idx}
                      className={`absolute inset-0 flex justify-center items-center transition-all duration-500 ease-in-out ${
                        isSelected 
                          ? "opacity-100 scale-100 rotate-0 pointer-events-auto" 
                          : "opacity-0 scale-90 rotate-2 pointer-events-none"
                      }`}
                    >
                      <Mock />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom/Center element: Progress Indicator bar with numerical fractions */}
            <div className="col-span-12 flex justify-center md:justify-start items-center gap-3 mt-8 md:mt-0 z-20 font-mono">
              <span className="text-xs font-bold text-blue-700 min-w-[18px]">
                0{activeIndex + 1}
              </span>
              <div className="flex items-center gap-2">
                {featuresList.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      // Scroll to corresponding position
                      if (containerRef.current) {
                        const rect = containerRef.current.getBoundingClientRect();
                        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                        const elementTop = rect.top + scrollTop;
                        const totalScrollableHeight = rect.height - window.innerHeight;
                        const targetScroll = elementTop + (idx / featuresList.length) * totalScrollableHeight + 10;
                        window.scrollTo({ top: targetScroll, behavior: "smooth" });
                      }
                    }}
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      idx === activeIndex 
                        ? "w-8 bg-blue-600" 
                        : "w-2 bg-border-default hover:bg-text-muted"
                    }`}
                    aria-label={`Go to feature ${idx + 1}`}
                  />
                ))}
              </div>
              <span className="text-[10px] font-medium text-text-muted">
                / 0{featuresList.length}
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
