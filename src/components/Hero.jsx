import HeroBackground3D from './HeroBackground3D';

export default function Hero() {
  return (
    <section className="relative pt-[120px] pb-16 md:min-h-screen md:flex md:items-center md:pt-24 md:pb-0 px-container-margin overflow-hidden">
      <HeroBackground3D />
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-8 space-y-8">
          <div className="hero-badge flex items-center gap-2 md:gap-4">
            <span className="w-8 md:w-12 h-px bg-primary"></span>
            <span className="font-label-lg text-[10px] md:text-label-lg text-primary tracking-[0.2em] md:tracking-[0.4em] uppercase">Multidisciplinary Designer & Artist</span>
          </div>
          <h1 className="hero-title font-display-lg text-[42px] sm:text-display-lg md:text-[110px] leading-[0.9] tracking-tighter">
            <span className="font-light italic text-on-surface-variant opacity-50">Sahiti</span><br/>
            <span className="font-black text-gradient">Kotturty</span>
          </h1>
          <p className="hero-desc font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            Bridging the gap between <span className="text-on-surface font-semibold">human intuition</span> and <span className="text-primary font-semibold">technical precision</span>. Designing digital ecosystems that scale and visual identities that resonate.
          </p>
          <div className="hero-buttons flex flex-col md:flex-row gap-3 pt-4 w-full md:w-auto">
            <a className="group w-full md:w-auto md:flex-1 bg-on-surface text-background py-4 md:py-5 px-6 md:px-10 rounded-full text-[14px] md:text-label-lg font-bold shadow-2xl flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-3xl transition-all duration-300" href="#works">
              View Portfolio <span className="material-symbols-outlined text-[20px] md:text-[24px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">arrow_outward</span>
            </a>
            <a className="w-full md:w-auto md:flex-1 bg-primary/[0.05] backdrop-blur-sm py-4 md:py-5 px-6 md:px-10 rounded-full text-[14px] md:text-label-lg text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 border border-primary/30 shadow-[0_0_15px_rgba(79,140,255,0.08)] flex items-center justify-center text-center" href="#services-i-offer">
              View Services
            </a>
          </div>
        </div>
        <div className="hero-portrait md:col-span-4 relative mt-4 md:mt-0 max-w-[220px] sm:max-w-xs mx-auto md:max-w-none">
          <div className="aspect-[4/5] glass rounded-[3rem] overflow-hidden relative group shadow-2xl border border-on-surface/10">
            <img alt="Sahiti Kotturty portrait" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVKpv9lx7C71-MCDyce9AfUKHjWJJB_Z1qE9IvloUszipwJ9zaEuxSRsTshqHH9q86zBj0jEQ6MhO-Fv6Qs7jSDusYmbuNAnlKbOPW-voDW8M7kDcD5ZZrndJ98nf-5e8JEFcTtpxgl76KY5rvcuLFeN437tput-utx99rau2XBqFoSbBMp-9nA1MdYPJpU1jcPNpdM4qcxdDxfQevh_qBGAHjetPbd4OW9AqvniOoNUfIGbwOCIf5FwmzlQFWNLtNz1hD2D3Gm0L_Odg"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
