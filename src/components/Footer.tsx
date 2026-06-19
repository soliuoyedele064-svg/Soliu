import { SOCIAL_LINKS } from "../data";
import { Star, Linkedin, Instagram, Twitter, ChevronRight, Heart } from "lucide-react";

export default function Footer() {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Star":
        return <Star className="w-4 h-4 text-orange-400 group-hover:scale-115 transition-transform" />;
      case "Linkedin":
        return <Linkedin className="w-4 h-4 text-blue-400 group-hover:scale-115 transition-transform" />;
      case "Instagram":
        return <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-115 transition-transform" />;
      case "Twitter":
        return <Twitter className="w-4 h-4 text-sky-400 group-hover:scale-115 transition-transform" />;
      default:
        return null;
    }
  };

  const smoothScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-root" className="relative bg-slate-950 border-t border-white/5 pt-20 pb-8 overflow-hidden">
      {/* Background glow node */}
      <div className="absolute bottom-0 right-[15%] w-72 h-72 rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col gap-12">
        {/* Foot top layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-left">
          {/* Logo brand */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-600 to-orange-400 flex items-center justify-center font-mono font-bold text-black text-xs">
                S
              </div>
              <span className="font-sans font-black text-white text-base tracking-tight">SOLIX PRO</span>
            </div>
            <p className="font-sans text-slate-400 text-xs leading-relaxed max-w-xs">
              Architecting high-converting digital environments where luxury artistic layouts meet technical compound search optimization.
            </p>
            <div className="flex items-center gap-2 mt-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group w-8 h-8 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 flex items-center justify-center transition-all shadow-sm"
                  title={link.name}
                >
                  {getSocialIcon(link.iconName)}
                </a>
              ))}
            </div>
          </div>

          {/* Map links */}
          <div className="md:col-span-3 flex flex-col items-start gap-4">
            <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-widest">
              Quick Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <button onClick={() => smoothScrollTo("#home")} className="font-sans text-xs text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Back to Home
                </button>
              </li>
              <li>
                <button onClick={() => smoothScrollTo("#about")} className="font-sans text-xs text-slate-400 hover:text-white transition-colors cursor-pointer">
                  About Creator
                </button>
              </li>
              <li>
                <button onClick={() => smoothScrollTo("#services")} className="font-sans text-xs text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => smoothScrollTo("#portfolio")} className="font-sans text-xs text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => smoothScrollTo("#testimonials")} className="font-sans text-xs text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Client Proof
                </button>
              </li>
              <li>
                <button onClick={() => smoothScrollTo("#process")} className="font-sans text-xs text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Process Workflow
                </button>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="md:col-span-2 flex flex-col items-start gap-4">
            <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-widest">
              My Core Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <button onClick={() => smoothScrollTo("#services")} className="font-sans text-xs text-slate-400 hover:text-white text-left transition-colors cursor-pointer">
                  Creative Direction
                </button>
              </li>
              <li>
                <button onClick={() => smoothScrollTo("#services")} className="font-sans text-xs text-slate-400 hover:text-white text-left transition-colors cursor-pointer">
                  Crowdfunding Specialist
                </button>
              </li>
              <li>
                <button onClick={() => smoothScrollTo("#services")} className="font-sans text-xs text-slate-400 hover:text-white text-left transition-colors cursor-pointer">
                  Website Design
                </button>
              </li>
              <li>
                <button onClick={() => smoothScrollTo("#services")} className="font-sans text-xs text-slate-400 hover:text-white text-left transition-colors cursor-pointer">
                  SEO Ranking
                </button>
              </li>
            </ul>
          </div>

          {/* Fiverr CTA panel */}
          <div className="md:col-span-3 flex flex-col items-start gap-4">
            <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-widest">
              Hire Operator
            </h4>
            <p className="font-sans text-slate-400 text-xs leading-relaxed">
              Start an escrow-guaranteed contract with Solix Pro on Fiverr.
            </p>
            <a
              href="https://www.fiverr.com/s/e6zwPw4"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-1.5 w-full py-3.5 rounded-xl bg-orange-500 text-black font-sans font-extrabold text-xs tracking-wider shadow-lg shadow-orange-500/20 hover:translate-y-0.5 transition-all border-0"
            >
              HIRE SECURELY ON FIVERR
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Foot Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] text-slate-500">
            &copy; {currentYear} SOLIX PRO. All rights reserved. Secure contracts executed under verified Fiverr terms.
          </p>
          <div className="flex items-center gap-1 font-mono text-[9px] text-slate-500 uppercase tracking-widest">
            <span>Crafted for absolute conversions</span>
            <Heart className="w-3 h-3 text-red-500/60 fill-red-500/30" />
            <span>By Solix Pro Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
