export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0b0d14]/80 backdrop-blur-xl border-b border-white/5 flex justify-between items-center px-8 md:px-16 py-6">
      <div className="text-xl font-body font-medium text-white tracking-tight">
        Sahiti Kotturty
      </div>
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
    </nav>
  );
}
