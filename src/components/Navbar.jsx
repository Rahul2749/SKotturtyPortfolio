import { useState } from "react";
import HireMeModal from "./HireMeModal";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-[100] bg-background/50 backdrop-blur-2xl border-b border-white/5 shadow-2xl">
      <div className="flex justify-between items-center px-container-margin py-5 max-w-7xl mx-auto">
        <a className="flex items-center gap-2 md:gap-3 text-[18px] md:text-[20px] text-white font-black tracking-tighter" href="#">
          <img src="/skotturty_logo.png" alt="Logo" className="h-7 md:h-8 mix-blend-screen contrast-200 object-contain" />
          <span className="mt-1 leading-none">SAHITI<span className="text-primary">.K</span></span>
        </a>
        <nav className="hidden lg:flex gap-10 items-center">
          <a className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary font-bold" href="#works">Works</a>
          <a className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors" href="#about">About</a>
          <a className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors" href="#services">Expertise</a>
          <a className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors" href="#process">Process</a>
          <a className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors" href="#contact">Contact</a>
        </nav>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-primary px-5 py-2 md:px-8 md:py-2.5 rounded-full text-sm md:font-label-lg text-on-primary font-bold hover:scale-105 transition-all shadow-[0_0_30px_rgba(165,231,255,0.2)] whitespace-nowrap"
        >
          Hire Me
        </button>
      </div>
      
      <HireMeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}
