import React from "react";

interface BrowserWindowProps {
  children: React.ReactNode;
  title: string;
}

export const BrowserWindow = ({ children, title }: BrowserWindowProps) => (
  <div className="w-full max-w-[480px] bg-bg-card border border-border-default rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.025)] overflow-hidden font-sans border-b-2">
    {/* Window Header */}
    <div className="flex items-center justify-between px-5 py-3.5 bg-bg-canvas/50 border-b border-border-default">
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
      </div>
      <span className="text-[10px] font-mono font-medium text-text-muted select-none tracking-wider">{title}</span>
      <div className="w-12" /> {/* spacer */}
    </div>
    {/* Window Body */}
    <div className="p-6 bg-bg-card min-h-[250px]">
      {children}
    </div>
  </div>
);
