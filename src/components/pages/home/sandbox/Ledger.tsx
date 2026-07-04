import React from "react";
import { Plus, Minus } from "lucide-react";
import { BrowserWindow } from "../features/BrowserWindow";

interface LedgerControlsProps {
  handleCementChange: (amount: number) => void;
  handleSteelChange: (amount: number) => void;
}

export const LedgerControls = ({ handleCementChange, handleSteelChange }: LedgerControlsProps) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="text-xs font-bold text-text-primary block mb-3">Adjust Stock Levels (Simulate flow)</label>
        <div className="space-y-4">
          {/* Cement adjustment */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-text-secondary">OPC Cement</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleCementChange(30)}
                className="p-1.5 border border-border-default hover:bg-bg-canvas rounded-lg text-text-primary flex items-center gap-1 text-[10px] font-bold"
              >
                <Plus className="w-3 h-3 text-emerald-600" /> 30 Bags
              </button>
              <button
                onClick={() => handleCementChange(-20)}
                className="p-1.5 border border-border-default hover:bg-bg-canvas rounded-lg text-text-primary flex items-center gap-1 text-[10px] font-bold"
              >
                <Minus className="w-3 h-3 text-red-600" /> 20 Bags
              </button>
            </div>
          </div>

          {/* Steel adjustment */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-text-secondary">TMT Steel</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleSteelChange(2.5)}
                className="p-1.5 border border-border-default hover:bg-bg-canvas rounded-lg text-text-primary flex items-center gap-1 text-[10px] font-bold"
              >
                <Plus className="w-3 h-3 text-emerald-600" /> 2.5T
              </button>
              <button
                onClick={() => handleSteelChange(-1.5)}
                className="p-1.5 border border-border-default hover:bg-bg-canvas rounded-lg text-text-primary flex items-center gap-1 text-[10px] font-bold"
              >
                <Minus className="w-3 h-3 text-red-600" /> 1.5T
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LedgerOutputProps {
  cementStock: number;
  steelStock: number;
  ledgerLogs: string[];
}

export const LedgerOutput = ({ cementStock, steelStock, ledgerLogs }: LedgerOutputProps) => {
  return (
    <BrowserWindow title="ledger.os / stock-ledger">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Cement ledger display */}
          <div className={`border rounded-xl p-3.5 transition-all ${
            cementStock < 100 
              ? "border-red-500/30 bg-red-500/[0.01]" 
              : "border-border-default bg-bg-canvas/40"
          }`}>
            <p className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider">Cement Balance</p>
            <p className="text-lg font-extrabold text-text-primary mt-1 font-mono">{cementStock} Bags</p>
            {cementStock < 100 ? (
              <span className="text-[8px] bg-red-500/10 text-red-600 px-1.5 py-0.5 rounded font-bold mt-1 inline-block animate-pulse">
                Low Stock Alert
              </span>
            ) : (
              <span className="text-[8px] text-text-muted mt-1 inline-block">Threshold: 100 Bags</span>
            )}
          </div>

          {/* Steel ledger display */}
          <div className={`border rounded-xl p-3.5 transition-all ${
            steelStock < 5.0 
              ? "border-red-500/30 bg-red-500/[0.01]" 
              : "border-border-default bg-bg-canvas/40"
          }`}>
            <p className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider">Steel Balance</p>
            <p className="text-lg font-extrabold text-text-primary mt-1 font-mono">{steelStock} Tons</p>
            {steelStock < 5.0 ? (
              <span className="text-[8px] bg-red-500/10 text-red-600 px-1.5 py-0.5 rounded font-bold mt-1 inline-block animate-pulse">
                Low Stock Alert
              </span>
            ) : (
              <span className="text-[8px] text-text-muted mt-1 inline-block">Threshold: 5.0 Tons</span>
            )}
          </div>
        </div>

        {/* Ledger Logs Feed */}
        <div className="border border-border-default rounded-xl p-3 bg-bg-canvas/20">
          <p className="text-[9px] font-bold text-text-muted uppercase tracking-wider mb-2">Live Store Activity Feed</p>
          <div className="space-y-1.5 max-h-[85px] overflow-y-auto pr-1">
            {ledgerLogs.map((log, index) => (
              <p key={index} className="text-[10px] text-text-secondary leading-relaxed font-mono truncate">
                {log}
              </p>
            ))}
          </div>
        </div>
      </div>
    </BrowserWindow>
  );
};
