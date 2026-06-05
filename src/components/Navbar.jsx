import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#0b0d14]/80 backdrop-blur-xl border-b border-white/5 flex justify-between items-center px-8 md:px-16 py-6">
        <div className="text-xl font-body font-medium text-white tracking-tight z-50">
          Sahiti Kotturty
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#work" className="text-xs font-bold text-white uppercase tracking-widest border-b border-white pb-1">Works</a>
          <a href="#about" className="text-xs font-bold text-on-surface-variant hover:text-white uppercase tracking-widest transition-colors">About</a>
          <a href="#process" className="text-xs font-bold text-on-surface-variant hover:text-white uppercase tracking-widest transition-colors">Process</a>
          <a href="#lab" className="text-xs font-bold text-on-surface-variant hover:text-white uppercase tracking-widest transition-colors">Lab</a>
          <a href="#contact" className="text-xs font-bold text-on-surface-variant hover:text-white uppercase tracking-widest transition-colors">Contact</a>
          <button className="pill-button pill-button-primary ml-4">
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl transition-transform duration-300">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#0b0d14] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <a href="#work" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-white uppercase tracking-widest">Works</a>
        <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-on-surface-variant hover:text-white uppercase tracking-widest">About</a>
        <a href="#process" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-on-surface-variant hover:text-white uppercase tracking-widest">Process</a>
        <a href="#lab" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-on-surface-variant hover:text-white uppercase tracking-widest">Lab</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-on-surface-variant hover:text-white uppercase tracking-widest">Contact</a>
        <button className="pill-button pill-button-primary mt-6 text-lg px-10 py-3">
          Hire Me
        </button>
      </div>
    </>
  );
}
