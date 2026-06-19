import { useState, useEffect } from "react";
import { SOCIAL_LINKS } from "../data";
import { Star, Linkedin, Instagram, Twitter, Menu, X, ChevronRight } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" }
  ];

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Star":
        return <Star className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />;
      case "Linkedin":
        return <Linkedin className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform duration-300" />;
      case "Instagram":
        return <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform duration-300" />;
      case "Twitter":
        return <Twitter className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform duration-300" />;
      default:
        return null;
    }
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      id="navbar-root"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-white/5 ${
        scrolled
          ? "py-4 bg-slate-950/85 backdrop-blur-xl shadow-2xl"
          : "py-6 bg-black/20 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo and Brand Title */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
          className="group flex items-center gap-2"
        >
          <div className="relative w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center font-display font-black text-black text-sm italic shadow-[0_0_15px_rgba(249,115,22,0.4)]">
            <span className="relative z-10">S</span>
          </div>
          <span className="font-display font-black text-xl tracking-tighter text-white group-hover:text-orange-400 transition-colors duration-300">
            SOLIX PRO
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 px-1.5 py-1 rounded-full backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`relative px-4 py-2 rounded-full font-sans text-xs font-bold tracking-wide transition-all duration-300 ${
                  isActive
                    ? "text-orange-400 bg-white/10"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls & Social Indicators */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 border-r border-white/10 pr-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="group w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 border border-white/5 transition-all duration-300"
                title={`Visit Solix Pro on ${link.name}`}
              >
                {getSocialIcon(link.iconName)}
              </a>
            ))}
          </div>

          <a
            href="https://www.fiverr.com/s/e6zwPw4"
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center gap-1.5 px-6 py-2 rounded-full font-display font-bold text-xs text-black tracking-wider bg-orange-500 hover:bg-orange-400 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:-translate-y-0.5"
          >
            HIRE ON FIVERR
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-orange-400 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-orange-400" />
          </a>
        </div>

        {/* Mobile Navigation Toggle Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="https://www.fiverr.com/s/e6zwPw4"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 px-4 py-2 rounded-full bg-orange-500 font-display font-bold text-[10px] text-black tracking-widest shadow-lg shadow-orange-500/20"
          >
            FIVERR
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm transition-all"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dynamic Slide Panel */}
      <div
        className={`fixed top-[73px] left-0 w-full h-[calc(100vh-73px)] z-40 bg-slate-950/98 backdrop-blur-2xl border-t border-white/5 transition-all duration-500 flex flex-col justify-between p-8 lg:hidden ${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-5 pt-4">
          <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
            Menu Navigation
          </span>
          <nav className="flex flex-col gap-4">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`relative font-sans text-2xl font-bold tracking-tight transition-all duration-300 flex items-center justify-between py-1 group ${
                    isActive ? "text-orange-400 pl-4 border-l-2 border-orange-500" : "text-white"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.label}
                  <ChevronRight className="w-5 h-5 text-slate-600 group-hover:translate-x-1 group-hover:text-white transition-all" />
                </a>
              );
            })}
          </nav>
        </div>

        <div className="flex flex-col gap-6 pt-6 border-t border-white/5">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
              Primary Call-To-Action
            </span>
            <a
              href="https://www.fiverr.com/s/e6zwPw4"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-orange-500 text-sm font-bold text-black tracking-widest shadow-xl shadow-orange-500/10"
            >
              HIRE SOLIX PRO ON FIVERR
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[11px] font-sans text-slate-400">Connect with me:</span>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:bg-white/10 hover:border-white/20"
                  title={`Social profile: ${link.name}`}
                >
                  {getSocialIcon(link.iconName)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
