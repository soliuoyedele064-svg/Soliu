import { PROCESS_STEPS } from "../data";
import { ArrowRight, Sparkles, Milestone, Code, Zap, Kanban } from "lucide-react";

export default function Process() {
  const getPhaseIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Kanban className="w-5 h-5 text-orange-400" />;
      case 1:
        return <Code className="w-5 h-5 text-blue-400" />;
      case 2:
        return <Zap className="w-5 h-5 text-orange-450" />;
      default:
        return <Milestone className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="process" className="relative py-24 bg-slate-950 border-t border-white/5">
      {/* Decorative vector overlays */}
      <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-left">
          <span className="font-mono text-xs tracking-[0.3em] text-orange-400 font-bold uppercase mb-2">
            DESIGN TO EXECUTION PIPELINE // THE BLUEPRINT
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-none">
              My Creative Process
            </h2>
            <p className="font-sans text-slate-400 text-sm max-w-sm lg:text-right">
              Delivering repeatable digital success through a modular framework focused on custom narrative alignment and precision-engineered growth vectors.
            </p>
          </div>
        </div>

        {/* Process Timeline steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 p-8 sm:p-10 flex flex-col justify-between text-left transition-all duration-300 hover:border-white/20 hover:bg-white/10 shadow-2xl overflow-hidden"
            >
              {/* Top background number banner */}
              <div className="absolute -top-6 -right-6 text-9xl font-sans font-black text-white/2 select-none pointer-events-none group-hover:text-orange-500/5 transition-all">
                0{idx + 1}
              </div>

              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex justify-between items-center">
                  {/* Phase counter badge */}
                  <span className="font-mono text-[10px] text-orange-400 font-bold tracking-widest bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                    {step.phase}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500/10 group-hover:border-orange-500/20 transition-all">
                    {getPhaseIcon(idx)}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="font-sans font-extrabold text-xl text-white tracking-tight leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-sans text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Step checklist details */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between relative z-10">
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">
                  Milestone Completed
                </span>
                <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <span className="text-[10px] font-bold">✓</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
