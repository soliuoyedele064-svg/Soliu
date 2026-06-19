import { useEffect, useState, useRef } from "react";
import { SOCIAL_LINKS } from "../data";
import { Star, Linkedin, Instagram, Twitter, ChevronRight, ArrowDownLeft, ShieldCheck, Award } from "lucide-react";

export default function Hero() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [activeTitle, setActiveTitle] = useState(0);
  const titles = [
    "Creative Director",
    "Crowdfunding Specialist",
    "Website Designer",
    "SEO Growth Expert"
  ];

  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 30;
      const y = (e.clientY - rect.top - rect.height / 2) / 30;
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Cycle titles for premium organic motion
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Star":
        return <Star className="w-5 h-5 text-emerald-400 group-hover:scale-120 transition-transform" />;
      case "Linkedin":
        return <Linkedin className="w-5 h-5 text-blue-400 group-hover:scale-120 transition-transform" />;
      case "Instagram":
        return <Instagram className="w-5 h-5 text-pink-400 group-hover:scale-120 transition-transform" />;
      case "Twitter":
        return <Twitter className="w-5 h-5 text-sky-400 group-hover:scale-120 transition-transform" />;
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

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950/40"
    >
      {/* 3D Parallax Ambient Background Elements */}
      <div
        className="absolute top-1/4 right-[20%] w-72 h-72 rounded-full border border-orange-500/10 pointer-events-none transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${coords.x * 0.8}px, ${coords.y * 0.8}px, 0) rotate(${coords.x * 2}deg)`
        }}
      />
      <div
        className="absolute bottom-1/4 left-[15%] w-96 h-96 rounded-full border border-blue-500/5 pointer-events-none transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${coords.x * -0.5}px, ${coords.y * -0.5}px, 0)`
        }}
      />
      <div
        className="absolute top-[20%] left-[10%] w-[12px] h-[12px] rounded-full bg-orange-400/30 animate-pulse pointer-events-none"
        style={{
          transform: `translate3d(${coords.x * 1.5}px, ${coords.y * 1.5}px, 0)`
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16">
        {/* Left Side: Brand presentation and value hooks */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          {/* Tag badge with micro animated radar point */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/5 border border-orange-500/30 backdrop-blur-sm self-start">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="font-mono text-[10px] tracking-wider text-orange-400 uppercase font-bold">
              Available For Custom Studio Gigs
            </span>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-slate-500 text-xs tracking-[0.3em] font-medium uppercase">
              REVOLUTIONIZING BUSINESS VALUATIONS
            </span>
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-8xl text-white tracking-tighter leading-none select-none">
              SOLIX PRO
            </h1>
          </div>

          {/* Service Carousel Label Slider */}
          <div className="h-10 overflow-hidden relative w-full flex items-center border-l-2 border-orange-500 pl-4 bg-gradient-to-r from-orange-500/5 to-transparent py-2.5">
            <div
              className="flex flex-col transition-all duration-700 ease-in-out"
              style={{ transform: `translateY(-${activeTitle * 40}px)` }}
            >
              {titles.map((title, idx) => (
                <div
                  key={idx}
                  className="h-10 flex items-center text-lg sm:text-xl md:text-2xl font-bold tracking-wide bg-gradient-to-r from-orange-400 to-amber-300 text-transparent bg-clip-text font-display"
                >
                  {title}
                </div>
              ))}
            </div>
          </div>

          {/* Solid Core Value Proposition */}
          <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
            I architect premium high-converting digital legacies. By combining **avant-garde creative direction**, **multi-million dollar crowdfunding campaign frameworks**, **bespoke custom websites**, and **technical SEO ranking dominance**, I scale startup valuations and build magnetic online brands that effortlessly turn clicks into high-value paying customers.
          </p>

          {/* Social Icons Ribbon Showcase */}
          <div className="flex items-center gap-3 py-2">
            <span className="text-[11px] font-mono tracking-wider text-slate-500 uppercase mr-1">
              Active Handles
            </span>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="group w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 shadow-md"
                title={`Connect via ${link.name}`}
              >
                {getSocialIcon(link.iconName)}
              </a>
            ))}
          </div>

          {/* Triple Call-to-Actions (Fiverr primary, profile secondary, Contact tertiary) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-4">
            <a
              href="https://www.fiverr.com/s/e6zwPw4"
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange-500 font-display font-black text-sm text-black tracking-widest shadow-xl shadow-orange-500/20 hover:bg-orange-400 transition-all duration-300 hover:-translate-y-0.5 text-center"
            >
              HIRE ME ON FIVERR
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              {/* Pulsing indicator to capture premium conversion */}
              <span className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-orange-400 animate-ping" />
              <span className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-orange-400" />
            </a>

            <a
              href="https://www.fiverr.com/s/e6zwPw4"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-1.5 px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 font-sans font-bold text-xs text-slate-200 tracking-widest transition-all duration-300 text-center"
            >
              VIEW MY FIVERR PROFILE
              <ArrowDownLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 group-hover:translate-y-0.5 transition-transform text-slate-400" />
            </a>

            <button
              onClick={() => smoothScrollTo("#contact")}
              className="font-sans font-semibold text-xs text-slate-400 hover:text-white tracking-wider hover:underline transition-all duration-200 py-3 sm:py-0 text-center"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Side: Floating Interactive 3D Mock & Stats Badge */}
        <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
          {/* Luxury Frame Container */}
          <div
            className="relative w-72 sm:w-80 h-[430px] rounded-2.5xl bg-white/5 border border-white/15 backdrop-blur-xl p-5 shadow-2xl transition-transform duration-300 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${coords.y}deg) rotateY(${-coords.x}deg)`
            }}
          >
            {/* Top decorative digital frame notch */}
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
              <span className="text-[10px] font-mono text-slate-500 tracking-wider">CREATIVE PROTOCOL // V2.0</span>
              <div className="flex gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                <span className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
              </div>
            </div>

            {/* Simulated 3D display modules */}
            <div className="flex flex-col gap-4">
              {/* Module 1: Crowdfunding Launch Tracker */}
              <div className="bg-[#050505]/80 backdrop-blur-xl rounded-xl border border-white/10 p-4 flex flex-col gap-1.5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-xl pointer-events-none" />
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-orange-400 font-bold tracking-wider">KICKSTARTER CAMPAIGNS</span>
                  <Award className="w-4 h-4 text-orange-400 animate-pulse" />
                </div>
                <div className="text-2xl font-display font-black text-white tracking-tight">$482,000</div>
                <div className="w-full bg-white/5 rounded-full h-1.5 mt-1 overflow-hidden">
                  <div className="bg-orange-500 h-full w-[96.4%]" />
                </div>
                <span className="text-[10px] text-slate-500 align-middle">964% of backing target funded</span>
              </div>

              {/* Module 2: SEO Growth Chart */}
              <div className="bg-[#050505]/80 backdrop-blur-xl rounded-xl border border-white/10 p-4 flex flex-col gap-1.5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full blur-lg pointer-events-none" />
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-blue-400 font-bold tracking-wider">SEO RANKING SURGE</span>
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-2xl font-display font-black text-white tracking-tight">140,000+</div>
                <span className="text-[10px] text-slate-500">Monthly organic visitors on competitive terms</span>
              </div>

              {/* Module 3: Micro Agency Badge */}
              <div className="bg-gradient-to-r from-[#050505]/90 to-[#050505]/40 rounded-xl border border-orange-500/15 p-3.5 flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-bold text-white text-xs tracking-wide">FIVERR PRO VERIFIED</h4>
                  <p className="text-[9px] text-slate-400">Escrow-secure multi-disciplinary orders</p>
                </div>
                <div className="flex items-center gap-0.5 bg-orange-500/10 px-2 py-1 rounded text-orange-400 font-bold text-xs">
                  <span>5.0</span>
                  <Star className="w-3 h-3 fill-orange-400 text-orange-400" />
                </div>
              </div>
            </div>

            {/* Glow backdrop inside the glass card */}
            <div className="absolute bottom-4 left-4 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Floating client proof node bubble */}
          <div
            className="absolute -bottom-6 -left-6 sm:-left-3 bg-[#050505]/95 border border-white/10 rounded-2xl p-4 flex items-center gap-3 backdrop-blur-md shadow-xl select-none max-w-[210px]"
            style={{
              transform: `translate3d(${coords.x * -1.2}px, ${coords.y * -1.2}px, 0)`
            }}
          >
            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0 font-display font-black text-sm">
              100%
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[9px] text-orange-400 font-bold uppercase tracking-wider">Verified Rating</span>
              <span className="font-sans font-semibold text-white text-xs leading-tight">Elite Backer Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Futuristic Scroll Prompt Widget */}
      <button
        onClick={() => smoothScrollTo("#about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors group cursor-pointer"
      >
        <span className="font-mono text-[9px] tracking-[0.2em] uppercase">Scroll to Discover</span>
        <div className="w-6 h-10 rounded-full border-2 border-slate-700 p-1 flex justify-center group-hover:border-orange-400 transition-colors">
          <div className="w-1.5 h-2 bg-orange-400 rounded-full animate-bounce" />
        </div>
      </button>
    </section>
  );
}
