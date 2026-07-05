import type { Metadata } from "next";
import { Geist, Geist_Mono, Albert_Sans, Fragment_Mono } from "next/font/google";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Blurick | Construction Management & Project Solution",
  description: "Track progress, manage materials, automate labor attendance, and control budgets in real time. Blurick is the modern, AI-powered construction operating system built for developers and general contractors.",
  keywords: ["construction management software", "project tracking app", "DPR automation", "material tracking construction", "labor logs app", "Blurick", "Powerplay rival", "Getpowerplay alternative", "construction ERP"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${albertSans.variable} ${fragmentMono.variable} scroll-smooth antialiased`}>
      <body className="bg-bg-canvas text-text-primary font-sans min-h-screen flex flex-col selection:bg-accent-yellow selection:text-black relative">
        <SmoothScroll>
          <div 
            className="pointer-events-none absolute inset-0 z-0 bg-repeat bg-left-top opacity-[0.025]" 
            style={{
              backgroundImage: "url('/vertical-stripes.png')",
              backgroundSize: "128px auto",
            }}
          />
          <div className="relative z-10 flex-1 flex flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}