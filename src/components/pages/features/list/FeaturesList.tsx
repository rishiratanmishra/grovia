import React from "react";
import { 
  FileText, 
  Boxes, 
  Users, 
  ClipboardCheck, 
  ShoppingBag, 
  Wallet, 
  MessageSquare 
} from "lucide-react";

const details = [
  {
    title: "BOQ & Budget Control",
    description: "Build rate analysis sheets and tie them directly to material requests. Lock item quantities to prevent purchase variance over approved BOQs.",
    icon: FileText,
  },
  {
    title: "Store Ledger & Stocks",
    description: "Tally stock levels automatically upon gate entry. Issue receipts dynamically to sub-contractors and configure alerts for low item thresholds.",
    icon: Boxes,
  },
  {
    title: "Muster & Labor Wages",
    description: "Mark attendance via site supervisors. Log wages, track active shifts, and export monthly payment sheets with zero margin for errors.",
    icon: Users,
  },
  {
    title: "Automated Daily Reports",
    description: "Site engineers select tasks from checklists to instantly compile professional PDF reports (DPRs). Dispatch automatically to stakeholders.",
    icon: ClipboardCheck,
  },
  {
    title: "Procurement & PO Approvals",
    description: "Connect office purchasing with actual site requirements. Approve material requisitions (indents) and generate official PO sheets instantly.",
    icon: ShoppingBag,
  },
  {
    title: "Site Petty Cash Logs",
    description: "Empower supervisors to log local transport, fuel, and utility expenses. Upload payment receipts directly with quick approval loops.",
    icon: Wallet,
  },
  {
    title: "On-site Collaboration Chat",
    description: "Bridge field-to-office communication. Exchange site photos, flag construction bottlenecks, and coordinate directly on specific issue threads.",
    icon: MessageSquare,
  },
];

export default function FeaturesList() {
  return (
    <section className="py-20 border-t border-border-default/60 bg-transparent mb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Section title */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
            Complete operational toolchain
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary mt-2">
            Every feature is designed to address actual friction points faced by project execution teams on-site.
          </p>
        </div>

        {/* Features Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {details.map((feat, idx) => (
            <div 
              key={idx} 
              className="bg-bg-card/45 border border-border-default hover:border-border-default/80 transition-all rounded-3xl p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5">
                  <feat.icon className="w-5 h-5 text-blue-700" />
                </div>
                <h3 className="text-sm font-extrabold text-text-primary mb-3">{feat.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{feat.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
