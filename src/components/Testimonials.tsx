import { TESTIMONIALS_DATA } from "../data";
import { Star, Shield, Quote, MessageSquare, Heart, Sparkles, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="testimonials" className="relative py-24 bg-slate-950 border-t border-white/5 overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-left">
          <span className="font-mono text-xs tracking-[0.3em] text-orange-400 font-bold uppercase mb-2">
            TRUSTED BY WORLD-CLASS BRANDS // SOCIAL PROOF
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-none">
              Client Success Stories
            </h2>
            <p className="font-sans text-slate-400 text-sm max-w-sm lg:text-right">
              Read authentic feedback representing our client success track. All reviews are fully verified and completed on Fiverr.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Static Visual Verification & Trust Badges */}
          <div className="lg:col-span-4 flex flex-col gap-6 text-left">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col gap-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-orange-400" />
                <span className="font-mono text-[10px] text-orange-400 tracking-wider font-bold">
                  VERIFIED FIVERR SELLER
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <span className="font-sans text-5xl font-black text-white tracking-tight">5.0</span>
                  <div className="flex items-center text-amber-400">
                    <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                    <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                    <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                    <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                    <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                  </div>
                </div>
                <p className="text-slate-400 text-xs">Based on continuous 5-star customer ratings</p>
              </div>

              <div className="flex flex-col gap-3 pt-6 border-t border-white/5">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4.5 h-4.5 text-orange-400" />
                  <span>$5M+ Campaign launches cleared secured</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4.5 h-4.5 text-orange-400" />
                  <span>100% On-time contract milestones delivery</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4.5 h-4.5 text-orange-400" />
                  <span>24/7 Escrow-backed customer communication</span>
                </div>
              </div>

              <a
                href="https://www.fiverr.com/s/e6zwPw4"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-orange-500 font-display font-bold text-xs text-black tracking-widest hover:-translate-y-0.5 shadow-lg shadow-orange-500/20 transition-all duration-300"
              >
                BOOK SECURELY ON FIVERR
                <Sparkles className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-black animate-pulse" />
              </a>
            </div>

            {/* Micro client happiness statistics box */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col gap-2">
              <span className="font-mono text-[10px] text-slate-500 tracking-wider">HAPPINESS COEFFICIENT</span>
              <div className="text-3xl font-sans font-black text-white tracking-tight">99.8%</div>
              <p className="text-[11px] text-slate-400">Continuous post-order client satisfaction metrics.</p>
            </div>
          </div>

          {/* Right Column: Carousel grid with tab controls */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TESTIMONIALS_DATA.map((t, idx) => (
                <div
                  key={t.id}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-left relative overflow-hidden group hover:border-orange-500/30 transition-all duration-500 shadow-xl"
                >
                  {/* Background quote decor */}
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-white/2 pointer-events-none group-hover:text-orange-500/5 transition-colors" />

                  <div className="flex flex-col gap-5">
                    {/* Stars bar */}
                    <div className="flex items-center gap-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed italic relative z-10">
                      "{t.review}"
                    </p>
                  </div>

                  {/* Client Bio footer */}
                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/5 relative z-10">
                    <div className="flex items-center gap-3">
                      {/* Decorative Initial avatar */}
                      <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center font-mono font-black text-black text-sm shadow-md italic">
                        {t.clientName.charAt(0)}{t.clientName.split(" ").pop()?.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-sans font-black text-white text-xs">{t.clientName}</span>
                        <span className="text-[10px] text-slate-400 font-semibold">{t.clientRole}, {t.companyName}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 text-[10px]">
                      {t.tags.slice(0, 1).map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-slate-400 font-mono text-[9px] uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
