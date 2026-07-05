import React from "react";
import { Metadata } from "next";
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
    <main>
      <ContactHero />
      <ContactForm />
    </main>
  );
}
