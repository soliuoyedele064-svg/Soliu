import React, { useState } from "react";
import { SOCIAL_LINKS, FAQS_DATA } from "../data";
import { Star, Linkedin, Instagram, Twitter, Mail, HelpCircle, ChevronDown, MessageSquare, ArrowUpRight, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", projectType: "Creative Direction", budget: "$1k - $3k", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill in all mandatory fields (Name, Email, and Message) to establish a contact link.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/soliuoyedele064@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.projectType,
          budget: formData.budget,
          message: formData.message,
          _subject: `✨ New Project Brief from ${formData.name}!`,
          _captcha: "false"
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", projectType: "Creative Direction", budget: "$1k - $3k", message: "" });
      } else {
        throw new Error("SMTP Gateway transmission failure");
      }
    } catch (error) {
      // Direct fallback warning
      setErrorMsg("Unable to transmit project brief securely through the gateway. Please try again, or book directly via the Fiverr contract portal below.");
    } finally {
      setSubmitting(false);
    }
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Star":
        return <Star className="w-5 h-5 text-orange-400" />;
      case "Linkedin":
        return <Linkedin className="w-5 h-5 text-blue-400" />;
      case "Instagram":
        return <Instagram className="w-5 h-5 text-pink-400" />;
      case "Twitter":
        return <Twitter className="w-5 h-5 text-sky-400" />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-950 border-t border-white/5">
      {/* Decorative vector meshes */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-left">
          <span className="font-mono text-xs tracking-[0.3em] text-orange-400 font-bold uppercase mb-2">
            INQUIRIES GATEWAY // COLLABORATION
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-none">
              Start Your Conversion Engine
            </h2>
            <p className="font-sans text-slate-400 text-sm max-w-sm lg:text-right">
              Whether you want to lock in an expert launch pre-funnel, audit technical SEO rankings, or request premium website UI assets, reach out below.
            </p>
          </div>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Side: Contact Form and Fiverr actions */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {/* Immersive form container */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl relative">
              <span className="font-mono text-[10px] text-orange-400 font-bold uppercase tracking-widest block text-left mb-6">
                SECURE CONVERSION BRIEF FOR SOLIX PRO
              </span>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 gap-5 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-extrabold text-2xl text-white tracking-tight">Brief Transmitted Successfully</h3>
                    <p className="font-sans text-slate-400 text-sm max-w-md">
                      Thank you for outlining your requirements! The project details have been dispatched to <strong>soliuoyedele064@gmail.com</strong>.
                    </p>
                    <p className="font-sans text-xs text-orange-400/90 max-w-md bg-orange-500/5 border border-orange-500/10 rounded-xl p-3 mt-2 leading-relaxed">
                      💡 <strong>Note for Solix Pro:</strong> If this is your first submission, check your inbox (soliuoyedele064@gmail.com) for an activation email from FormSubmit. Clicking the activation link registers your form to receive all future submissions directly.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 font-sans font-bold text-xs text-white tracking-widest transition-all"
                  >
                    SEND ANOTHER BRIEF
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 text-left">
                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 font-sans text-xs text-red-300 leading-relaxed font-semibold">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2.5">
                      <label htmlFor="form-name" className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-slate-950 border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl px-4 py-3.5 text-white font-sans text-sm outline-none transition-all"
                      />
                    </div>
 
                    {/* Email */}
                    <div className="flex flex-col gap-2.5">
                      <label htmlFor="form-email" className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Enterprise Email *
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-slate-950 border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl px-4 py-3.5 text-white font-sans text-sm outline-none transition-all"
                      />
                    </div>
                  </div>
 
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Project Segment */}
                    <div className="flex flex-col gap-2.5">
                      <label htmlFor="form-segment" className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Primary Service Pillar
                      </label>
                      <select
                        id="form-segment"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-slate-950 border border-white/10 focus:border-orange-500 rounded-xl px-4 py-3.5 text-white font-sans text-sm outline-none transition-all"
                      >
                        <option value="Creative Direction">Creative Direction</option>
                        <option value="Crowdfunding">Crowdfunding Launch</option>
                        <option value="Website Design">Website Design</option>
                        <option value="SEO Ranking">SEO Ranking</option>
                      </select>
                    </div>
 
                    {/* Approximate Budget */}
                    <div className="flex flex-col gap-2.5">
                      <label htmlFor="form-budget" className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Est. Budget Bracket
                      </label>
                      <select
                        id="form-budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-slate-950 border border-white/10 focus:border-orange-500 rounded-xl px-4 py-3.5 text-white font-sans text-sm outline-none transition-all"
                      >
                        <option value="$1k - $3k">$1,000 - $3,000</option>
                        <option value="$3k - $10k">$3,000 - $10,000</option>
                        <option value="$10k+">$10,000+ Enterprise value</option>
                      </select>
                    </div>
                  </div>

                  {/* Operational Message Brief */}
                  <div className="flex flex-col gap-2.5">
                    <label htmlFor="form-msg" className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      Project Objective Brief *
                    </label>
                    <textarea
                      id="form-msg"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline core challenges, crowdfunding timeline targets, or keyword areas..."
                      rows={5}
                      className="w-full bg-slate-950 border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl px-4 py-3.5 text-white font-sans text-sm outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submission triggers */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
                    <span className="text-[11px] font-sans text-slate-500">
                      * Indicates mandatory information fields.
                    </span>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange-500 text-black hover:bg-orange-400 font-sans font-extrabold text-xs tracking-wider transition-all disabled:opacity-45 shadow-[0_0_20px_rgba(249,115,22,0.3)] border-0"
                    >
                      {submitting ? "VERIFYING METRICS..." : "TRANSMIT PROJECT BRIEF"}
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Direct Social Media Follow actions */}
            <div className="flex flex-col gap-4 text-left">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                FOLLOW MY VENTURES
              </span>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 px-4.5 py-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 hover:-translate-y-0.5 transition-all text-sm font-sans font-bold text-slate-200"
                  >
                    {getSocialIcon(link.iconName)}
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: FAQs Accordion, Fiverr Action Cards */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Fiverr direct action cluster */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col gap-6 text-left relative overflow-hidden shadow-2xl animate-fade-in">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-[40px] pointer-events-none" />

              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-ping" />
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400 absolute" />
                <span className="font-mono text-[10px] text-orange-400 font-extrabold uppercase tracking-widest pl-4">
                  FAST-TRACK FIVERR ENROLLMENT
                </span>
              </div>

              <h3 className="font-sans font-extrabold text-2xl text-white tracking-tight leading-snug">
                Skip Brief Queue — Contract Solix Pro Securely
              </h3>

              <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed">
                By booking contract milestones on Fiverr, your project funds are held safely in Fiverr Escrow and only disbursed when you review and authorize absolute project completion. 24/7 safe platform guarantees.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch gap-3 pt-4 border-t border-white/5 w-full">
                <a
                  href="https://www.fiverr.com/s/e6zwPw4"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 px-6 py-4 rounded-xl bg-orange-500 text-xs font-black text-black tracking-widest hover:translate-y-0.5 transition-transform shadow-[0_0_20px_rgba(249,115,22,0.35)]"
                >
                  HIRE ME ON FIVERR
                  <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                </a>
                <a
                  href="https://www.fiverr.com/s/e6zwPw4"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-bold text-slate-300 tracking-widest transition-all"
                >
                  VIEW PROFILE
                </a>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="flex flex-col gap-4 text-left">
              <span className="font-mono text-[10px] text-orange-400 uppercase tracking-widest font-bold">
                FREQUENTLY ASKED INQUIRIES
              </span>

              <div className="flex flex-col gap-3.5">
                {FAQS_DATA.map((faq) => {
                  const isOpen = activeFaq === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="backdrop-blur-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg"
                    >
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-sans font-bold text-sm text-white select-none transition-colors"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-white" : ""}`} />
                      </button>

                      <div
                        className={`transition-all duration-500 overflow-hidden ${
                          isOpen ? "max-h-60 border-t border-white/5" : "max-h-0"
                        }`}
                      >
                        <p className="p-6 font-sans text-slate-400 text-xs sm:text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
