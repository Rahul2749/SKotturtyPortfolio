import HeroBackground3D from './HeroBackground3D';

export default function Hero() {
  return (
    <section className="relative pt-[120px] pb-16 md:min-h-screen md:flex md:items-center md:pt-24 md:pb-0 px-container-margin overflow-hidden">
      <HeroBackground3D />
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-8 space-y-8">
          <div className="hero-badge flex flex-col gap-3 mb-6 mt-4">
            <div className="flex items-center gap-2 md:gap-4">
              <span className="w-8 md:w-12 h-px bg-[#4F8CFF]"></span>
              <span className="font-label-lg text-[10px] md:text-label-lg text-[#4F8CFF] tracking-[0.2em] md:tracking-[0.4em] uppercase font-bold">UI/UX Designer & Digital Marketing Specialist</span>
            </div>
          </div>
          <div className="relative">
            <h1 className="hero-title font-display-lg font-black tracking-tighter text-[40px] sm:text-[55px] md:text-[72px] lg:text-[90px] leading-[1] text-[#1e293b]">
              Designing Websites That{' '}
              <span className="bg-gradient-to-r from-[#4F8CFF] via-[#4F8CFF] to-[#28467a] text-transparent bg-clip-text">Convert Visitors</span>{' '}
              Into{' '}
              <span className="bg-gradient-to-r from-[#0055FF] to-[#4F8CFF] text-transparent bg-clip-text">Customers</span>
            </h1>
          </div>
          <p className="hero-desc font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            <span className="text-on-surface font-semibold">UI/UX Designer</span>, <span className="text-on-surface font-semibold">Website Developer</span> & <span className="text-primary font-semibold">Digital Marketing Specialist</span> helping brands grow through design, SEO, and paid advertising.
          </p>
          <div className="hero-buttons flex flex-col md:flex-row gap-3 pt-4 w-full md:w-auto">
            <a className="group w-full md:w-auto md:flex-1 bg-on-surface text-background py-4 md:py-5 px-6 md:px-10 rounded-full text-[14px] md:text-label-lg font-bold shadow-2xl flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-3xl transition-all duration-300" href="#works">
              View My Work <span className="material-symbols-outlined text-[20px] md:text-[24px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">arrow_outward</span>
            </a>
            <a className="w-full md:w-auto md:flex-1 bg-primary/[0.05] backdrop-blur-sm py-4 md:py-5 px-6 md:px-10 rounded-full text-[14px] md:text-label-lg text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 border border-primary/30 shadow-[0_0_15px_rgba(79,140,255,0.08)] flex items-center justify-center text-center" href="https://calendly.com/sahitikotturty" target="_blank" rel="noopener noreferrer">
              Book a Free Consultation
            </a>
          </div>
        </div>
        <div className="hero-portrait md:col-span-4 relative mt-4 md:mt-0 max-w-[220px] sm:max-w-xs mx-auto md:max-w-none">
          <div className="aspect-[4/5] glass rounded-[3rem] overflow-hidden relative group shadow-2xl border border-on-surface/10">
            <img alt="Sahiti Kotturty portrait" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" src="/sahiti-portrait.jpeg"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
