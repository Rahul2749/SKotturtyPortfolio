export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-[100] bg-background/50 backdrop-blur-2xl border-b border-white/5 shadow-2xl">
      <div className="flex justify-between items-center px-container-margin py-5 max-w-7xl mx-auto">
        <a className="text-[20px] text-white font-black tracking-tighter" href="#">SAHITI<span className="text-primary">.K</span></a>
        <nav className="hidden lg:flex gap-10 items-center">
          <a className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary font-bold" href="#works">Works</a>
          <a className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors" href="#about">About</a>
          <a className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors" href="#services">Expertise</a>
          <a className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors" href="#process">Process</a>
          <a className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors" href="#contact">Contact</a>
        </nav>
        <button className="bg-primary px-8 py-2.5 rounded-full font-label-lg text-on-primary font-bold hover:scale-105 transition-all shadow-[0_0_30px_rgba(165,231,255,0.2)]">
          Hire Me
        </button>
      </div>
    </header>
  );
}
