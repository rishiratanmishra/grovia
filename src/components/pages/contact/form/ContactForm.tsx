"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    sites: "1-2",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 border-t border-border-default/60 bg-transparent mb-16 relative z-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Office / Address details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary tracking-tight">
                Connect with our team
              </h2>
              <p className="text-xs text-text-secondary mt-2 leading-relaxed">
                Reach out to speak directly with an onboarding engineer, or visit our headquarters. We respond to all queries within 12 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <div className="h-9 w-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-700 shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Email Us</p>
                  <p className="text-xs font-semibold text-text-primary mt-0.5">contact@blurick.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="h-9 w-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-700 shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Call Us</p>
                  <p className="text-xs font-semibold text-text-primary mt-0.5">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-9 w-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Headquarters</p>
                  <p className="text-xs font-semibold text-text-primary mt-0.5">
                    HSR Layout, Sector 6, <br />
                    Bangalore, Karnataka, 560102
                  </p>
                </div>
              </div>
            </div>

            {/* Micro-map graphic mockup */}
            <div className="border border-border-default rounded-2xl p-4 bg-bg-card/40 flex items-center justify-center h-32 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#80808012_1px,transparent_1.5px)] bg-[size:10px_10px]" />
              <div className="relative text-center z-10 space-y-1">
                <p className="text-[10px] font-bold text-text-primary">Blurick Labs India</p>
                <p className="text-[8px] text-text-secondary">Building for Global Infrastructure Builders</p>
                <span className="inline-block h-2 w-2 rounded-full bg-blue-600 animate-ping absolute -top-1 right-2"></span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form box */}
          <div className="lg:col-span-7">
            <div className="bg-bg-card border border-border-default rounded-3xl p-8 shadow-sm">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-primary">Request Received!</h3>
                    <p className="text-xs text-text-secondary mt-1 max-w-sm mx-auto leading-relaxed">
                      Thank you for contacting Blurick. An operations engineer will reach out to you at <span className="font-semibold text-text-primary">{formData.email}</span> shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-text-primary uppercase tracking-wider block mb-1.5">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Maipal Singh"
                        className="w-full px-4 py-3 bg-bg-canvas/50 border border-border-default rounded-xl text-xs text-text-primary focus:border-blue-600 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-text-primary uppercase tracking-wider block mb-1.5">Work Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="maipal@builders.com"
                        className="w-full px-4 py-3 bg-bg-canvas/50 border border-border-default rounded-xl text-xs text-text-primary focus:border-blue-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-text-primary uppercase tracking-wider block mb-1.5">Company Name</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        placeholder="Mangaliya Developers"
                        className="w-full px-4 py-3 bg-bg-canvas/50 border border-border-default rounded-xl text-xs text-text-primary focus:border-blue-600 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-text-primary uppercase tracking-wider block mb-1.5">Active Project Sites</label>
                      <select
                        value={formData.sites}
                        onChange={(e) => setFormData(prev => ({ ...prev, sites: e.target.value }))}
                        className="w-full px-4 py-3 bg-bg-canvas/50 border border-border-default rounded-xl text-xs text-text-primary focus:border-blue-600 focus:outline-none transition-colors"
                      >
                        <option value="1-2">1 - 2 Sites</option>
                        <option value="3-10">3 - 10 Sites</option>
                        <option value="10+">10+ Active Sites</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-text-primary uppercase tracking-wider block mb-1.5">How can we help?</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Please let us know your requirements or current pain points..."
                      className="w-full px-4 py-3 bg-bg-canvas/50 border border-border-default rounded-xl text-xs text-text-primary focus:border-blue-600 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-bg-canvas text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-500/10"
                  >
                    <span>Send Request</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
