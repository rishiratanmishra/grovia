import React from "react";

export function LTLogo() {
  return (
    <div className="flex items-center gap-3 text-text-muted hover:text-text-primary transition-colors cursor-pointer shrink-0">
      <svg className="h-7 w-7" viewBox="0 0 100 100" fill="currentColor">
        <path d="M 20 20 L 42 20 L 42 58 L 75 58 L 75 78 L 20 78 Z" />
        <path d="M 52 20 L 90 20 L 90 38 L 76 38 L 76 78 L 56 78 L 56 38 L 52 38 Z" />
      </svg>
      <span className="text-base font-extrabold tracking-widest font-sans">L&T CONSTRUCTION</span>
    </div>
  );
}

export function TataLogo() {
  return (
    <div className="flex items-center gap-3 text-text-muted hover:text-text-primary transition-colors cursor-pointer shrink-0">
      <svg className="h-7 w-7" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="7" fill="none" />
        <path d="M 50 25 C 37 25, 30 46, 30 65 L 40 65 C 40 52, 44 34, 50 34 C 56 34, 60 52, 60 65 L 70 65 C 70 46, 63 25, 50 25 Z" />
      </svg>
      <span className="text-base font-extrabold tracking-widest font-sans">TATA PROJECTS</span>
    </div>
  );
}

export function ShapoorjiLogo() {
  return (
    <div className="flex items-center gap-3 text-text-muted hover:text-text-primary transition-colors cursor-pointer shrink-0">
      <svg className="h-7 w-7" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="6" fill="none" />
        <circle cx="50" cy="50" r="37" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="3 2" />
        <text x="50" y="58" fontSize="24" fontWeight="900" textAnchor="middle" fontFamily="serif" letterSpacing="-1">SP</text>
      </svg>
      <span className="text-base font-extrabold tracking-widest font-sans">SHAPOORJI PALLONJI</span>
    </div>
  );
}

export function DLFLogo() {
  return (
    <div className="flex items-center gap-3 text-text-muted hover:text-text-primary transition-colors cursor-pointer shrink-0">
      <svg className="h-7 w-8" viewBox="0 0 120 100" fill="currentColor">
        <polygon points="60,10 48,30 72,30" />
        <polygon points="46,34 34,54 58,54" />
        <polygon points="74,34 62,54 86,54" />
        <polygon points="32,58 20,78 44,78" />
        <polygon points="60,58 48,78 72,78" />
        <polygon points="88,58 76,78 100,78" />
      </svg>
      <span className="text-base font-extrabold tracking-widest font-sans">DLF HOMES</span>
    </div>
  );
}

export function GodrejLogo() {
  return (
    <div className="flex items-center gap-3 text-text-muted hover:text-text-primary transition-colors cursor-pointer shrink-0">
      <svg className="h-7 w-7" viewBox="0 0 100 100" fill="currentColor">
        <path d="M 50 12 C 63 30, 63 60, 50 88 C 37 60, 37 30, 50 12 Z" opacity="0.7" />
        <path d="M 50 12 C 72 35, 72 65, 50 88 C 58 65, 58 35, 50 12 Z" />
        <path d="M 50 12 C 28 35, 28 65, 50 88 C 42 65, 42 35, 50 12 Z" />
      </svg>
      <span className="text-base font-extrabold tracking-widest font-sans">GODREJ PROPERTIES</span>
    </div>
  );
}
