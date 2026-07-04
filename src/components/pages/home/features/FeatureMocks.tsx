import React from "react";
import { 
  Check, 
  Plus, 
  AlertTriangle, 
  TrendingUp 
} from "lucide-react";
import { BrowserWindow } from "./BrowserWindow";

export const BOQMock = () => (
  <BrowserWindow title="blurick.os / boq-tracker">
    <div className="space-y-4 font-sans">
      <div className="flex justify-between items-center mb-1">
        <div>
          <h4 className="text-xs font-bold text-text-primary">Project Budget Control</h4>
          <p className="text-[10px] text-text-muted">Sector 62 Commercial Tower</p>
        </div>
        <span className="text-[9px] bg-red-500/10 text-red-600 px-2.5 py-1 rounded-full font-bold flex items-center gap-1">
          <AlertTriangle className="w-3 h-3" /> Overrun Alert
        </span>
      </div>
      <div className="space-y-3.5">
        <div className="border border-border-muted rounded-xl p-3">
          <div className="flex justify-between text-xs mb-1.5 font-semibold text-text-primary">
            <span>Slab Concrete (M25 Grade)</span>
            <span>₹4,20,000 / ₹5,00,000</span>
          </div>
          <div className="w-full bg-bg-canvas h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: "84%" }}></div>
          </div>
        </div>

        <div className="border border-border-muted rounded-xl p-3 bg-red-500/[0.01]">
          <div className="flex justify-between text-xs mb-1.5 font-semibold text-text-primary">
            <span>Steel Reinforcement (TMT)</span>
            <span className="text-red-600 font-bold">₹3,25,000 / ₹3,00,000</span>
          </div>
          <div className="w-full bg-bg-canvas h-2 rounded-full overflow-hidden">
            <div className="bg-red-500 h-full rounded-full transition-all duration-500" style={{ width: "100%" }}></div>
          </div>
          <p className="text-[9px] text-red-500 font-medium mt-1">Variance: +₹25,000 (8.3% over budget)</p>
        </div>
      </div>
    </div>
  </BrowserWindow>
);

export const InventoryMock = () => (
  <BrowserWindow title="blurick.os / inventory-ledger">
    <div className="space-y-4 font-sans">
      <div className="flex justify-between items-center mb-1">
        <div>
          <h4 className="text-xs font-bold text-text-primary">Site Stock Ledger</h4>
          <p className="text-[10px] text-text-muted">Real-time balances & indents</p>
        </div>
        <button className="text-[9px] bg-text-primary text-bg-canvas hover:opacity-90 px-2 py-1 rounded font-bold flex items-center gap-1">
          <Plus className="w-2.5 h-2.5" /> Raise Indent
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center p-3 bg-bg-canvas/40 rounded-xl border border-border-default">
          <div>
            <p className="text-xs font-semibold text-text-primary">UltraTech Cement (OPC 43)</p>
            <p className="text-[10px] text-text-muted">Min Threshold: 200 Bags</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-text-primary">120 Bags</p>
            <span className="text-[8px] bg-amber-500/10 text-amber-600 px-2 py-0.5 rounded font-bold">Reorder Alert</span>
          </div>
        </div>

        <div className="flex justify-between items-center p-3 bg-bg-canvas/40 rounded-xl border border-border-default">
          <div>
            <p className="text-xs font-semibold text-text-primary">TMT Rebar (12mm)</p>
            <p className="text-[10px] text-text-muted">Tata Tiscon • In Transit: 2T</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-text-primary">14.2 Tons</p>
            <span className="text-[8px] bg-emerald-500/10 text-emerald-600 px-2 py-0.5 rounded font-bold">Healthy Stock</span>
          </div>
        </div>
      </div>
    </div>
  </BrowserWindow>
);

export const LaborMock = () => (
  <BrowserWindow title="blurick.os / muster-roll">
    <div className="space-y-4 font-sans">
      <div className="flex justify-between items-center mb-1">
        <div>
          <h4 className="text-xs font-bold text-text-primary">Daily Labor Muster</h4>
          <p className="text-[10px] text-text-muted">GPS Verified Attendance Logs</p>
        </div>
        <span className="text-[9px] bg-emerald-500/10 text-emerald-600 px-2.5 py-1 rounded-full font-bold">
          142 Workers On-site
        </span>
      </div>

      <div className="space-y-2 max-h-[140px] overflow-y-auto">
        <div className="flex items-center justify-between p-2.5 hover:bg-bg-canvas/50 rounded-xl border border-transparent hover:border-border-default transition-all">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-text-primary text-bg-canvas flex items-center justify-center text-[10px] font-bold">RK</div>
            <div>
              <p className="text-xs font-semibold text-text-primary">Ramesh Kumar</p>
              <p className="text-[9px] text-text-muted">Mason • S.K. Builders</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[9px] text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded font-bold">In: 08:30 AM</span>
            <p className="text-[8px] text-text-muted">GPS Verified</p>
          </div>
        </div>

        <div className="flex items-center justify-between p-2.5 hover:bg-bg-canvas/50 rounded-xl border border-transparent hover:border-border-default transition-all">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-text-secondary text-bg-canvas flex items-center justify-center text-[10px] font-bold">AS</div>
            <div>
              <p className="text-xs font-semibold text-text-primary">Amit Singh</p>
              <p className="text-[9px] text-text-muted">Helper • S.K. Builders</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[9px] text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded font-bold">In: 08:42 AM</span>
            <p className="text-[8px] text-text-muted">GPS Verified</p>
          </div>
        </div>
      </div>
    </div>
  </BrowserWindow>
);

export const DPRMock = () => (
  <BrowserWindow title="blurick.os / dpr-summary">
    <div className="space-y-4 font-sans">
      <div className="flex justify-between items-center mb-1">
        <div>
          <h4 className="text-xs font-bold text-text-primary">Daily Progress Report</h4>
          <p className="text-[10px] text-text-muted">Report #124 • Day Shift</p>
        </div>
        <span className="text-[9px] bg-emerald-500/10 text-emerald-600 px-2.5 py-1 rounded-full font-bold flex items-center gap-1">
          <Check className="w-3 h-3" /> Approved by PMC
        </span>
      </div>

      <div className="border border-border-default rounded-xl overflow-hidden">
        <div className="bg-bg-canvas h-24 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-text-primary/10 to-transparent pointer-events-none" />
          <span className="text-text-muted text-[10px] font-medium z-10">Excavation Site - Block A</span>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-2.5">
            <span className="text-white text-[8px] font-mono opacity-90">Camera-04 • 04/07/2026</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-[10px] text-text-secondary border-t border-border-muted pt-2">
        <span>Concrete: 45m³ poured</span>
        <span>Rebar tying: 100% completed</span>
      </div>
    </div>
  </BrowserWindow>
);

export const POMock = () => (
  <BrowserWindow title="blurick.os / procurement-po">
    <div className="space-y-4 font-sans">
      <div className="flex justify-between items-center mb-1">
        <div>
          <h4 className="text-xs font-bold text-text-primary">Purchase Order Approvals</h4>
          <p className="text-[10px] text-text-muted">PO Ref: PO-2026-0422</p>
        </div>
        <span className="text-[9px] bg-amber-500/10 text-amber-600 px-2.5 py-1 rounded-full font-bold">Awaiting PM Sign-off</span>
      </div>

      <div className="space-y-2 text-xs border border-border-default rounded-xl p-3 bg-bg-canvas/20">
        <div className="flex justify-between">
          <span className="text-text-muted">Vendor:</span>
          <span className="font-bold text-text-primary">UltraTech Cement Ltd</span>
        </div>
        <div className="flex justify-between">
          <span className="text-text-muted">Items:</span>
          <span className="font-bold text-text-primary">400 Bags (OPC 43)</span>
        </div>
        <div className="flex justify-between border-t border-border-muted pt-2 mt-2">
          <span className="text-text-muted font-semibold">Total Amount:</span>
          <span className="font-extrabold text-text-primary">₹1,80,000</span>
        </div>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 bg-text-primary text-bg-canvas text-[10px] py-2 rounded-lg font-bold hover:opacity-90 transition-opacity">
          Approve PO
        </button>
        <button className="flex-1 border border-border-default text-text-primary text-[10px] py-2 rounded-lg font-semibold hover:bg-bg-canvas/50 transition-colors">
          Reject
        </button>
      </div>
    </div>
  </BrowserWindow>
);

export const CashFlowMock = () => (
  <BrowserWindow title="blurick.os / cash-flow">
    <div className="space-y-4 font-sans">
      <div className="flex justify-between items-center mb-1">
        <div>
          <h4 className="text-xs font-bold text-text-primary">Client Invoice & Forecast</h4>
          <p className="text-[10px] text-text-muted">Project Cash Position</p>
        </div>
        <span className="text-[9px] text-emerald-600 bg-emerald-500/10 px-2.5 py-1 rounded-full font-bold flex items-center gap-1">
          <TrendingUp className="w-3 h-3" /> Net Positive
        </span>
      </div>

      <div className="space-y-2.5">
        <div className="flex justify-between items-center text-xs p-2 bg-bg-canvas/40 rounded-lg">
          <span className="text-text-muted font-medium">Inflow (RA Bill #4)</span>
          <span className="text-emerald-600 font-bold">+₹12,80,000</span>
        </div>
        <div className="flex justify-between items-center text-xs p-2 bg-bg-canvas/40 rounded-lg">
          <span className="text-text-muted font-medium">Outflow (Labor & Material)</span>
          <span className="text-red-500 font-bold">-₹4,50,000</span>
        </div>
        <div className="border-t border-border-muted pt-2 flex justify-between items-center text-xs font-bold text-text-primary">
          <span>Net Project Cash Flow</span>
          <span className="text-text-primary font-extrabold">₹8,30,000</span>
        </div>
      </div>
    </div>
  </BrowserWindow>
);

export const ChatMock = () => (
  <BrowserWindow title="blurick.os / project-chat">
    <div className="space-y-4 font-sans">
      <div className="flex justify-between items-center mb-1 pb-2 border-b border-border-default">
        <div className="flex items-center gap-2.5">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <div>
            <h4 className="text-xs font-bold text-text-primary"># Block-A Foundation</h4>
            <p className="text-[9px] text-text-muted">4 members online</p>
          </div>
        </div>
      </div>

      <div className="space-y-3 max-h-[140px] overflow-y-auto">
        <div className="flex items-start gap-2.5">
          <div className="h-6 w-6 rounded-full bg-blue-600 text-bg-canvas flex items-center justify-center text-[8px] font-bold mt-0.5">VK</div>
          <div className="flex-1 bg-bg-canvas/60 border border-border-default rounded-2xl rounded-tl-none p-2.5">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[9px] font-semibold text-text-primary">Vikram Patil</span>
              <span className="text-[8px] text-text-muted">10:15 AM</span>
            </div>
            <p className="text-[10px] text-text-secondary leading-relaxed">
              Cement delivery has arrived. 120 bags checked in at store ledger.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <div className="h-6 w-6 rounded-full bg-text-secondary text-bg-canvas flex items-center justify-center text-[8px] font-bold mt-0.5">AS</div>
          <div className="flex-1 bg-blue-500/5 border border-blue-500/20 rounded-2xl rounded-tl-none p-2.5">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[9px] font-bold text-blue-700">Amit Singh</span>
              <span className="text-[8px] text-text-muted font-medium">10:18 AM</span>
            </div>
            <p className="text-[10px] text-text-secondary leading-relaxed">
              Great. Please upload the GRN receipt photo so I can verify the supplier invoice.
            </p>
          </div>
        </div>
      </div>
    </div>
  </BrowserWindow>
);
