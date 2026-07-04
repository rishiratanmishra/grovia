"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, HardHat } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed left-0 right-0 z-50 mx-auto max-w-5xl transition-all duration-300 ${
      isScrolled ? "top-6 px-4" : "top-0 px-6"
    }`}>
      <div className={`flex items-center justify-between transition-all duration-300 ${
        isScrolled 
          ? "bg-bg-header backdrop-blur-lg border border-border-default rounded-full px-8 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" 
          : "bg-transparent border-transparent px-0 py-8"
      }`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-text-primary text-bg-canvas transition-colors duration-300">
            <HardHat className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-text-primary">Blurick</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-9">
          <Link href="#features" className="text-[15px] font-medium text-text-secondary hover:text-text-primary transition-colors">
            Features
          </Link>
          <Link href="#sandbox" className="text-[15px] font-medium text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1.5">
            Sandbox
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          </Link>
          <Link href="#pricing" className="text-[15px] font-medium text-text-secondary hover:text-text-primary transition-colors">
            Pricing
          </Link>
          <Link href="#calculator" className="text-[15px] font-medium text-text-secondary hover:text-text-primary transition-colors">
            ROI Calculator
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Contact Button */}
          <Link
            href="#contact"
            className="group flex h-11 items-center justify-center gap-2.5 rounded-full bg-text-primary px-6 text-[15px] font-semibold text-bg-canvas hover:opacity-90 transition-all shadow-sm"
          >
            Contact us
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-bg-canvas text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-full border border-border-default text-text-primary hover:bg-bg-card transition-colors"
          >
            {isOpen ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="mt-2 md:hidden w-full bg-bg-card border border-border-default rounded-3xl p-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            <Link 
              href="#features" 
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-text-secondary hover:text-text-primary transition-colors py-2 border-b border-border-muted"
            >
              Features
            </Link>
            <Link 
              href="#sandbox" 
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-text-secondary hover:text-text-primary transition-colors py-2 border-b border-border-muted flex items-center justify-between"
            >
              <span>Sandbox Demo</span>
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            </Link>
            <Link 
              href="#pricing" 
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-text-secondary hover:text-text-primary transition-colors py-2 border-b border-border-muted"
            >
              Pricing
            </Link>
            <Link 
              href="#calculator" 
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-text-secondary hover:text-text-primary transition-colors py-2 border-b border-border-muted"
            >
              ROI Calculator
            </Link>
            
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full flex h-12 items-center justify-center gap-2 rounded-full bg-text-primary text-bg-canvas font-bold shadow-md hover:opacity-90 transition-opacity"
            >
              Contact us
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
