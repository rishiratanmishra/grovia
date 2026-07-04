import React from "react";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/pages/about/hero/AboutHero";
import AboutStory from "@/components/pages/about/story/AboutStory";
import AboutValues from "@/components/pages/about/values/AboutValues";
import AboutTeam from "@/components/pages/about/team/AboutTeam";

export const metadata: Metadata = {
  title: "About Us | Blurick - Construction Operating System",
  description: "Learn about the mission, values, and team behind Blurick—building the digital infrastructure to streamline India's construction and material supply chain.",
  openGraph: {
    title: "About Us | Blurick",
    description: "Building the digital infrastructure to streamline India's construction and material supply chain.",
    url: "https://blurick.com/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Blurick",
    description: "Building the digital infrastructure to streamline India's construction and material supply chain.",
  },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-bg-canvas text-text-primary selection:bg-accent-yellow selection:text-black">
      {/* Navigation Header */}
      <Header />

      {/* Main Sections */}
      <main className="pt-20">
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutTeam />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
