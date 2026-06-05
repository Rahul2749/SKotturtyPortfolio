import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-element', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="px-8 md:px-16 pt-32 pb-20 min-h-screen max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 relative">
      <div className="absolute top-20 left-0 w-96 h-96 bg-glow-v2 -z-10 blur-3xl"></div>
      
      <div className="flex-1 w-full">
        <p className="hero-element text-[10px] font-bold text-on-surface-variant tracking-[0.2em] uppercase mb-8">
          Multidisciplinary Designer & Artist
        </p>
        <h1 className="hero-element flex flex-col mb-8">
          <span className="font-display italic font-light text-5xl md:text-7xl text-white tracking-tight -mb-4">Sahiti</span>
          <span className="font-display font-extrabold text-6xl md:text-8xl tracking-tighter gradient-text-v2">Kotturty</span>
        </h1>
        <p className="hero-element font-body text-sm md:text-base text-on-surface-variant max-w-md mb-10 leading-relaxed">
          Bridging the gap between <span className="text-white font-medium">human intuition</span> and <span className="text-white font-medium">technical precision</span>.<br/>
          Crafting digital experiences that feel alive.
        </p>
        <div className="hero-element flex flex-wrap gap-4">
          <button className="pill-button pill-button-primary flex items-center gap-2 group">
            View Folio 
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_outward</span>
          </button>
          <button className="pill-button pill-button-secondary">
            The Process
          </button>
        </div>
      </div>
      
      <div className="flex-1 w-full flex md:justify-end justify-center hero-element mt-12 md:mt-0">
        <div className="relative w-full max-w-[340px] rounded-3xl overflow-hidden glass-card p-2 aspect-[4/5]">
           <img 
             src="/skotturty.jpeg" 
             alt="Sahiti Kotturty" 
             className="w-full h-full object-cover rounded-2xl transition-all duration-700"
             onError={(e) => {
               // Fallback if image fails
               e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
             }}
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d14] via-transparent to-transparent opacity-60"></div>
        </div>
      </div>
    </section>
  );
}
