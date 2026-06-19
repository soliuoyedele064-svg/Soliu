import { useState } from "react";
import { PROJECTS_DATA } from "../data";
import { Project } from "../types";
import { Filter, ArrowUpRight, X, ChevronRight, BarChart2, Eye, Compass, TrendingUp, Sparkles, Check } from "lucide-react";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  const categories = ["All", "Creative Direction", "Crowdfunding", "Website Design", "SEO Ranking"];

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  const getMetricIcon = (category: string) => {
    switch (category) {
      case "Creative Direction":
        return <Compass className="w-4 h-4 text-orange-400" />;
      case "Crowdfunding":
        return <Sparkles className="w-4 h-4 text-orange-400" />;
      case "Website Design":
        return <Eye className="w-4 h-4 text-blue-400" />;
      case "SEO Ranking":
        return <TrendingUp className="w-4 h-4 text-orange-400" />;
      default:
        return <BarChart2 className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="portfolio" className="relative py-24 bg-slate-950 border-t border-white/5">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header section */}
        <div className="flex flex-col mb-16 text-left">
          <span className="font-mono text-xs tracking-[0.3em] text-orange-400 font-bold uppercase mb-2">
            PROOF OF CAPABILITY // PROVEN OUTCOMES
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-none">
              Featured Case Studies
            </h2>
            <p className="font-sans text-slate-400 text-sm max-w-sm lg:text-right">
              Explore actual operational workflows. Click on any case study card to check detailed Challenge, Strategy, Solution, and Outcome structures.
            </p>
          </div>
        </div>

        {/* Modern Filter Ribbon */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs font-bold tracking-wide transition-all duration-300 pointer-events-auto border ${
                selectedCategory === cat
                  ? "bg-orange-500 text-black border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                  : "bg-white/5 text-slate-400 border-white/10 hover:text-white hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveCaseStudy(project)}
              className="group relative rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 overflow-hidden flex flex-col justify-between transition-all duration-500 cursor-pointer shadow-2xl transform hover:-translate-y-1"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85] group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                {/* Category label badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 font-mono text-[9px] tracking-wider text-orange-400 font-bold uppercase">
                  {project.category}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-8 flex flex-col gap-6 text-left">
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-sans font-extrabold text-xl text-white group-hover:text-orange-400 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="font-sans text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Specific metrics ribbon */}
                <div className="grid grid-cols-3 gap-2 bg-slate-950/75 border border-white/5 rounded-2xl p-4">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex flex-col text-left gap-0.5 border-r border-white/5 last:border-0 pr-2">
                      <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider">{metric.label}</span>
                      <span className="font-sans font-black text-white text-sm sm:text-base tracking-tight">{metric.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tags and trigger button */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((t, index) => (
                      <span key={index} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 font-sans text-[10px] text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="flex items-center gap-1.5 font-sans font-bold text-xs text-orange-400 group-hover:text-white transition-colors">
                    READ CASE STUDY
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detailed Modal Overlay */}
      {activeCaseStudy && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl backdrop-blur-2xl bg-black/60 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Header Title with exit trigger */}
            <div className="sticky top-0 bg-black/40 backdrop-blur-md border-b border-white/5 z-20 px-8 py-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] tracking-wider text-orange-400 font-bold uppercase">
                  ACTIVE CASE PROTOCOL //
                </span>
                <span className="font-sans font-extrabold text-white text-sm sm:text-base truncate max-w-sm sm:max-w-md">
                  {activeCaseStudy.title}
                </span>
              </div>
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="p-1 px-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg border border-white/5 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Workspace */}
            <div className="overflow-y-auto p-8 flex flex-col gap-8">
              {/* Image banner inside modal */}
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg shrink-0">
                <img
                  src={activeCaseStudy.image}
                  alt={activeCaseStudy.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                  {activeCaseStudy.tags.map((t, index) => (
                    <span key={index} className="px-3 py-1 rounded bg-white/5 border border-white/10 font-sans text-xs text-orange-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dynamic metrics panel */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {activeCaseStudy.metrics.map((metric, i) => (
                  <div key={i} className="bg-slate-950/50 border border-white/5 rounded-2xl p-5 flex items-center justify-between text-left">
                    <div>
                      <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">{metric.label}</span>
                      <h4 className="font-sans font-black text-2xl text-white tracking-tight mt-1">{metric.value}</h4>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
                      {getMetricIcon(activeCaseStudy.category)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Formal Editorial Steps: Challenge, Strategy, Solution, Outcome */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-4">
                {/* 1. Challenge */}
                <div className="flex flex-col gap-3 p-5 rounded-2xl bg-red-950/10 border border-red-500/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <h4 className="font-sans font-black text-sm text-red-300 tracking-wide uppercase">
                      THE CHALLENGE
                    </h4>
                  </div>
                  <p className="font-sans text-slate-300 text-sm leading-relaxed">
                    {activeCaseStudy.fullCaseStudy.challenge}
                  </p>
                </div>

                {/* 2. Strategy */}
                <div className="flex flex-col gap-3 p-5 rounded-2xl bg-amber-950/10 border border-amber-500/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <h4 className="font-sans font-black text-sm text-amber-300 tracking-wide uppercase">
                      THE STRATEGY
                    </h4>
                  </div>
                  <p className="font-sans text-slate-300 text-sm leading-relaxed">
                    {activeCaseStudy.fullCaseStudy.strategy}
                  </p>
                </div>

                {/* 3. Solution */}
                <div className="flex flex-col gap-3 p-5 rounded-2xl bg-orange-950/10 border border-orange-500/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400" />
                    <h4 className="font-sans font-black text-sm text-orange-400 tracking-wide uppercase">
                      THE SOLUTION
                    </h4>
                  </div>
                  <p className="font-sans text-slate-300 text-sm leading-relaxed">
                    {activeCaseStudy.fullCaseStudy.solution}
                  </p>
                </div>

                {/* 4. Outcome */}
                <div className="flex flex-col gap-3 p-5 rounded-2xl bg-blue-950/10 border border-blue-500/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <h4 className="font-sans font-black text-sm text-blue-400 tracking-wide uppercase">
                      THE OUTCOME
                    </h4>
                  </div>
                  <p className="font-sans text-slate-300 text-sm leading-relaxed">
                    {activeCaseStudy.fullCaseStudy.outcome}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer containing conversion action */}
            <div className="sticky bottom-0 bg-black/40 backdrop-blur-md border-t border-white/5 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-sans text-slate-400 text-xs">Awwwards-quality project outcomes</span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href="https://www.fiverr.com/s/e6zwPw4"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-500 font-sans font-bold text-xs text-black tracking-widest shadow-lg hover:bg-orange-400 transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] w-full sm:w-auto"
                >
                  HIRE SOLIX ON FIVERR
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setActiveCaseStudy(null)}
                  className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all font-sans font-bold text-xs text-slate-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
