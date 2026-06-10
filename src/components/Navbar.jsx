import { useState } from "react";
import GetStartedModal from "./GetStartedModal";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <header className="fixed top-0 w-full z-[100] bg-background/50 backdrop-blur-2xl border-b border-white/5 shadow-2xl">
      <div className="flex justify-between items-center px-container-margin py-5 max-w-7xl mx-auto">
        <a className="flex items-center gap-2 md:gap-3 text-[18px] md:text-[20px] text-white font-black tracking-tighter" href="#">
          <img src="/skotturty_logo.png" alt="Logo" className="h-7 md:h-8 mix-blend-screen contrast-200 object-contain" />
          <span className="mt-1 leading-none">SAHITI<span className="text-primary">.K</span></span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-10 items-center" role="navigation" aria-label="Main navigation">
          <a className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary font-bold" href="#works">Works</a>
          <a className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors" href="#about">About</a>
          <a className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors" href="#services-i-offer">Services</a>
          <a className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors" href="#process">Process</a>
          <a className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors" href="#contact">Contact</a>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="ml-4 bg-primary text-on-primary-fixed-variant font-bold text-xs uppercase tracking-widest px-6 py-2.5 rounded-full hover:scale-105 transition-transform shadow-[0_0_15px_rgba(165,231,255,0.15)]"
          >
            Get Started
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white hover:text-primary transition-colors flex items-center justify-center p-2"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="material-symbols-outlined text-[28px]">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0a0a0f] border-b border-white/10 shadow-2xl">
          <nav className="flex flex-col py-6 px-8 gap-6" role="navigation" aria-label="Mobile navigation">
            <a onClick={() => setIsMobileMenuOpen(false)} className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary font-bold" href="#works">Works</a>
            <a onClick={() => setIsMobileMenuOpen(false)} className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-white hover:text-primary transition-colors" href="#about">About</a>
            <a onClick={() => setIsMobileMenuOpen(false)} className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-white hover:text-primary transition-colors" href="#services-i-offer">Services</a>
            <a onClick={() => setIsMobileMenuOpen(false)} className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-white hover:text-primary transition-colors" href="#process">Process</a>
            <a onClick={() => setIsMobileMenuOpen(false)} className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-white hover:text-primary transition-colors" href="#contact">Contact</a>
            <button 
              onClick={() => { setIsMobileMenuOpen(false); setIsModalOpen(true); }}
              className="mt-2 bg-primary text-on-primary-fixed-variant font-bold text-sm uppercase tracking-widest px-6 py-3.5 rounded-full text-center shadow-[0_0_15px_rgba(165,231,255,0.15)]"
            >
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
    <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
