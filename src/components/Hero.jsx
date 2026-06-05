import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const blobs = document.querySelectorAll('.glow-blob');
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      
      blobs.forEach((blob, index) => {
        const factor = (index + 1) * 0.15;
        blob.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 px-container-margin overflow-hidden">
      <div className="glow-blob w-[600px] h-[600px] bg-primary/20 top-[-10%] left-[-10%] rounded-full"></div>
      <div className="glow-blob w-[500px] h-[500px] bg-tertiary/20 bottom-[-10%] right-[-10%] rounded-full" style={{ animationDelay: '-5s' }}></div>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-8 space-y-8 reveal active">
          <div className="flex items-center gap-2 md:gap-4">
            <span className="w-8 md:w-12 h-px bg-primary"></span>
            <span className="font-label-lg text-[10px] md:text-label-lg text-primary tracking-[0.2em] md:tracking-[0.4em] uppercase">Multidisciplinary Designer & Artist</span>
          </div>
          <h1 className="font-display-lg text-[50px] sm:text-display-lg md:text-[110px] leading-[0.9] tracking-tighter">
            <span className="font-light italic text-on-surface-variant opacity-50">Sahiti</span><br/>
            <span className="font-black text-gradient">Kotturty</span>
          </h1>
          <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            Bridging the gap between <span className="text-white font-semibold">human intuition</span> and <span className="text-primary font-semibold">technical precision</span>. Designing digital ecosystems that scale and visual identities that resonate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a className="bg-white text-black px-6 md:px-10 py-4 md:py-5 rounded-full font-label-lg font-bold shadow-2xl flex items-center justify-center gap-3 hover:translate-y-[-4px] transition-all" href="#works">
              View Portfolio <span className="material-symbols-outlined">arrow_outward</span>
            </a>
            <button className="glass px-6 md:px-10 py-4 md:py-5 rounded-full font-label-lg text-on-surface font-semibold hover:bg-white/10 transition-all border border-white/10">
              The Strategy
            </button>
          </div>
        </div>
        <div className="md:col-span-4 relative reveal active mt-12 md:mt-0" style={{ transitionDelay: '0.2s' }}>
          <div className="aspect-[4/5] glass rounded-[3rem] overflow-hidden relative group shadow-2xl border border-white/10">
            <img alt="Sahiti Kotturty portrait" className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVKpv9lx7C71-MCDyce9AfUKHjWJJB_Z1qE9IvloUszipwJ9zaEuxSRsTshqHH9q86zBj0jEQ6MhO-Fv6Qs7jSDusYmbuNAnlKbOPW-voDW8M7kDcD5ZZrndJ98nf-5e8JEFcTtpxgl76KY5rvcuLFeN437tput-utx99rau2XBqFoSbBMp-9nA1MdYPJpU1jcPNpdM4qcxdDxfQevh_qBGAHjetPbd4OW9AqvniOoNUfIGbwOCIf5FwmzlQFWNLtNz1hD2D3Gm0L_Odg"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
