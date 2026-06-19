/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import InteractiveScene from "./components/InteractiveScene";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SeoStructuredData from "./components/SeoStructuredData";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "services", "portfolio", "testimonials", "process", "contact"];
    const activeObservers: { observer: IntersectionObserver; el: HTMLElement }[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.15, rootMargin: "-20% 0px -50% 0px" }
      );
      
      observer.observe(el);
      activeObservers.push({ observer, el });
    });

    return () => {
      activeObservers.forEach((obs) => {
        obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-orange-500 selection:text-black relative overflow-x-hidden antialiased">
      {/* Technical Schema Rich Snippet Meta Header Injections */}
      <SeoStructuredData />

      {/* Premium Mouse-Reactive Particle Canvas Scene */}
      <InteractiveScene />

      {/* Sticky Floating Glass Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Structural Layout Sections */}
      <main className="relative z-10 w-full flex flex-col">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Process />
        <Contact />
      </main>

      {/* Footer Pointers Section */}
      <Footer />
    </div>
  );
}
