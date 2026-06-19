import React, { useState, useRef } from "react";
import { SERVICES_DATA } from "../data";
import { Compass, Flame, Layout, TrendingUp, Check, ArrowUpRight, Award, Compass as CompassIcon } from "lucide-react";

export default function Services() {
  const getIcon = (iconName: string) => {
    const props = { className: "w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors" };
    switch (iconName) {
      case "Compass":
        return <Compass {...props} />;
      case "Flame":
        return <Flame {...props} />;
      case "Layout":
        return <Layout {...props} />;
      case "TrendingUp":
        return <TrendingUp {...props} />;
      default:
        return <Compass {...props} />;
    }
  };

  // Custom multi-card Mouse Parallax 3D effect tracker
  const [rotations, setRotations] = useState<{ [key: string]: { rx: number; ry: number; gx: number; gy: number } }>({});

  const handleMouseMove = (id: string, e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rx = ((y - rect.height / 2) / (rect.height / 2)) * -10; // rotateX
    const ry = ((x - rect.width / 2) / (rect.width / 2)) * 10;   // rotateY

    // Glare coordinates
    const gx = (x / rect.width) * 100;
    const gy = (y / rect.height) * 100;

    setRotations((prev) => ({
      ...prev,
      [id]: { rx, ry, gx, gy }
    }));
  };

  const handleMouseLeave = (id: string) => {
    setRotations((prev) => ({
      ...prev,
      [id]: { rx: 0, ry: 0, gx: 50, gy: 50 }
    }));
  };

  return (
    <section id="services" className="relative py-24 bg-slate-950 border-t border-white/5">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="flex flex-col mb-16 text-left">
          <span className="font-mono text-xs tracking-[0.3em] text-orange-400 font-bold uppercase mb-2">
            Pillars of Execution
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-none">
              Services Built to Scale
            </h2>
            <p className="font-sans text-slate-400 text-sm max-w-md lg:text-right">
              Eliminate friction. Connect with a single hyper-focused operator capable of delivering clean premium brand direction and optimized technical setups.
            </p>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {SERVICES_DATA.map((service) => {
            const rot = rotations[service.id] || { rx: 0, ry: 0, gx: 50, gy: 50 };
            return (
              <div
                key={service.id}
                onMouseMove={(e) => handleMouseMove(service.id, e)}
                onMouseLeave={() => handleMouseLeave(service.id)}
                className="relative rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ease-out shadow-2xl overflow-hidden group select-none min-h-[520px] hover:bg-white/10"
                style={{
                  transform: `perspective(1000px) rotateX(${rot.rx}deg) rotateY(${rot.ry}deg)`
                }}
              >
                {/* Embedded Glare effect */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-300 z-10 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at ${rot.gx}% ${rot.gy}%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 60%)`
                  }}
                />

                {/* Service Header */}
                <div className="flex flex-col gap-6 text-left relative z-20">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:bg-orange-500/10 group-hover:border-orange-500/20 transition-all duration-500">
                      {getIcon(service.iconName)}
                    </div>
                    {/* Simulated digital label index */}
                    <span className="font-mono text-[10px] text-slate-500 tracking-wider">
                      PROTOCOL SYSTEM // {service.id.toUpperCase().slice(0, 3)}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="font-sans font-black text-2xl text-white group-hover:text-orange-400 transition-colors tracking-tight">
                      {service.title}
                    </h3>
                    <p className="font-sans text-slate-400 text-sm leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Core Value/Benefits */}
                  <div className="flex flex-col gap-3.5 pt-4 border-t border-white/5">
                    <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                      Key Client Benefits
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-sans text-slate-300">
                          <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Programmatic Deliverables */}
                  <div className="flex flex-col gap-3.5 pt-4 border-t border-white/5">
                    <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                      Your Phase Deliverables
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {service.deliverables.map((del, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 font-sans text-[10.5px] font-semibold text-slate-400 group-hover:text-white group-hover:bg-white/10 transition-colors"
                        >
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Call To Action linking to Fiverr */}
                <div className="pt-8 relative z-20">
                  <a
                    href="https://www.fiverr.com/s/e6zwPw4"
                    target="_blank"
                    rel="noreferrer"
                    className="group/btn w-full flex items-center justify-between px-6 py-4 rounded-xl bg-white/5 border border-white/15 hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all duration-300 font-sans font-bold text-xs text-slate-200 tracking-wider hover:shadow-[0_0_20px_rgba(249,115,22,0.35)]"
                  >
                    SELECT {service.title.toUpperCase()}
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] text-slate-400 group-hover/btn:text-black group-hover/btn:font-bold transition-colors">FIVERR CONTRACT</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
