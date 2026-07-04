import React from "react";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/pages/contact/hero/ContactHero";
import ContactForm from "@/components/pages/contact/form/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Blurick - Construction Operating System",
  description: "Connect with Blurick operations and support. Schedule a live site demo, configure custom material integrations, or request technical support.",
  openGraph: {
    title: "Contact Us | Blurick",
    description: "Connect with Blurick operations and support. Schedule a live site demo, configure custom material integrations, or request technical support.",
    url: "https://blurick.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-bg-canvas text-text-primary selection:bg-accent-yellow selection:text-black">
      {/* Navigation Header */}
      <Header />

      {/* Main Sections */}
      <main>
        <ContactHero />
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
