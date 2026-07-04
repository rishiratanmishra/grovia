import React from "react";
import {
  LTLogo,
  TataLogo,
  ShapoorjiLogo,
  DLFLogo,
  GodrejLogo,
} from "./PartnerLogos";

const partners = [
  LTLogo,
  TataLogo,
  ShapoorjiLogo,
  DLFLogo,
  GodrejLogo,
];

function LogoRow() {
  return (
    <>
      {partners.map((Logo, index) => (
        <div
          key={index}
          className="flex h-16 shrink-0 items-center justify-center px-10"
        >
          <Logo />
        </div>
      ))}
    </>
  );
}

export default function PartnerMarquee() {
  return (
    <section className="relative z-10 overflow-hidden py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.35em] text-text-secondary">
          Trusted by Industry Leaders
        </p>

        <div className="mask-marquee overflow-hidden flex gap-0">
          <div className="animate-marquee flex items-center shrink-0">
            <LogoRow />
          </div>
          <div className="animate-marquee flex items-center shrink-0" aria-hidden="true">
            <LogoRow />
          </div>
        </div>
      </div>
    </section>
  );
}