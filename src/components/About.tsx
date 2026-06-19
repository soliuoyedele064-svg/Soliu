import { useEffect, useState, useRef } from "react";
const avatarImg = "/src/assets/images/solix_pro_profile_new_1781866097725.jpg";
import { SOCIAL_LINKS } from "../data";
import { Star, Linkedin, Instagram, Twitter, Award, CheckCircle2, Bookmark, Target, Sparkles, Send } from "lucide-react";

export default function About() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 25;
      const y = (e.clientY - rect.top - rect.height / 2) / 25;
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Star":
        return <Star className="w-4 h-4 text-orange-400" />;
      case "Linkedin":
        return <Linkedin className="w-4 h-4 text-blue-400" />;
      case "Instagram":
        return <Instagram className="w-4 h-4 text-orange-500" />;
      case "Twitter":
        return <Twitter className="w-4 h-4 text-blue-400" />;
      default:
        return null;
    }
  };

  const skills = [
    { name: "Brand Strategy & Creative Direction", percentage: 95, color: "from-orange-500 to-amber-500" },
    { name: "Crowdfunding Launch & Funnel Optimization", percentage: 98, color: "from-orange-500 to-orange-400" },
    { name: "Website UI/UX & High-Definition Design", percentage: 92, color: "from-blue-500 to-cyan-400" },
    { name: "Technical SEO & Organic Authority Ranking", percentage: 94, color: "from-orange-500 to-red-500" }
  ];

  const highlights = [
    { title: "Bespoke Architecting", desc: "No ready-made templates. Every project layout is structured around custom client sales vectors." },
    { title: "Crowdfunding Escrow Proofs", desc: "$5M+ raised. Backed by certified, multi-phase Kickstarter reservation funnel mechanics." },
    { title: "Full-Stack SEO Stacks", desc: "Solving indexation bottlenecks and restructuring keyword pillars for lifetime compounding traffic." }
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-950 border-t border-white/5 overflow-hidden">
      {/* Decorative vector background pattern */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-blue-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Headings */}
        <div className="flex flex-col mb-16 text-left">
          <span className="font-mono text-xs tracking-[0.3em] text-orange-400 font-bold uppercase mb-2">
            PERSONAL BRAND ARCHITECTURE
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-none">
              Meet Solix Pro
            </h2>
            <p className="font-sans text-slate-400 text-sm max-w-md lg:text-right">
              A high-yield multi-disciplinary digital producer bridging the gap between artistic luxury layouts and hard conversion analytics.
            </p>
          </div>
        </div>

        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start" ref={containerRef}>
          {/* Left Column: Interactive 3D Frame holding Solix Pro Profile Image */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div
              className="relative w-72 sm:w-85 h-[390px] rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 p-3 shadow-2xl overflow-hidden transition-all duration-300 ease-out group"
              style={{
                transform: `perspective(1000px) rotateX(${-coords.y * 0.7}deg) rotateY(${coords.x * 0.7}deg)`
              }}
            >
              {/* Outer glass highlight overlays */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

              {/* Realistic Picture Wrapper */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner border border-white/5">
                <img
                  src={avatarImg}
                  alt="Solix Pro - Professional Headshot"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Overlaid Info Badge on the Picture */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/80 backdrop-blur-md border border-white/10 p-3 rounded-xl">
                  <div>
                    <h4 className="font-sans font-bold text-white text-xs leading-none">SOLIUDEEN OYEDELE</h4>
                    <span className="text-[9px] font-mono text-orange-400 font-bold uppercase tracking-wider mt-1 block">Solix Pro Owner</span>
                  </div>
                  <div className="flex gap-1">
                    {SOCIAL_LINKS.map((link) => (
                      <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-7 h-7 rounded-lg bg-white/5 border border-white/5 hover:bg-white/15 hover:border-white/10 flex items-center justify-center transition-all group/social"
                        title={link.name}
                      >
                        <div className="group-hover/social:scale-115 transition-transform">
                          {getSocialIcon(link.iconName)}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Behind Ambient Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-[34px] blur-xl opacity-80 pointer-events-none -z-10" />

            {/* Small decorative digital metadata readout */}
            <div className="mt-6 flex items-center gap-3 font-mono text-[9px] text-slate-500 tracking-wider">
              <span>LOC: NIGERIA / REMOTE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              <span>LANGS: EN, CORE WEB PROTOCOLS</span>
            </div>
          </div>

          {/* Right Column: Copy & Skills Optimization */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-4 text-left">
              <span className="font-mono text-[10px] text-orange-400 font-extrabold uppercase tracking-[0.2em] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                FOUNDER'S VALUE PROPOSITION
              </span>
              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                Structuring digital journeys where luxury art meets technical conversion dominance
              </h3>
              <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
                As a freelancer on Fiverr and digital consultant, I watched brands suffer between two extremes: boring offshore template factories, or overly bloated artsy agencies who designed pretty sites that failed to load or convert visitors.
              </p>
              <p className="font-sans text-slate-400 text-sm leading-relaxed">
                I built **Solix Pro** to break that bottleneck. I serve as your high-value production partner, executing complete creative assets, optimization matrices, and technical launch funnels directly inside a single unified dashboard model.
              </p>
            </div>

            {/* Interactive Percentage Skills Indicator */}
            <div className="flex flex-col gap-4 backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span className="font-mono text-[10px] text-slate-400 tracking-wider uppercase text-left block">
                TECHNICAL SKILLS BENCHMARKS
              </span>
              <div className="flex flex-col gap-4.5">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 relative text-left group cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-sans font-bold text-slate-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-mono font-bold text-orange-400">{skill.percentage}%</span>
                    </div>
                    {/* Outer Bar */}
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden border border-white/5">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: hoveredSkill === index || hoveredSkill === null ? `${skill.percentage}%` : "15%"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Career highlights checklist */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {highlights.map((h, i) => (
                <div key={i} className="flex flex-col gap-2 p-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                    <h4 className="font-sans font-bold text-white text-xs tracking-wide">
                      {h.title}
                    </h4>
                  </div>
                  <p className="font-sans text-slate-400 text-[11px] leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
