export default function Contact() {
  return (
    <section className="py-24 md:py-40 px-container-margin relative overflow-hidden" id="contact">
      {/* Subtle Top Divider */}
      <div className="max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12 md:mb-16"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-end relative z-10">
        {/* Left Side: Typography */}
        <div className="md:col-span-7">
          <p className="font-label-lg text-primary tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
            <span className="w-12 h-px bg-primary"></span> Next Steps
          </p>
          <h2 className="font-display-md text-[40px] md:text-[64px] text-on-surface leading-[1.1] mb-8">
            Let's build <br className="hidden md:block"/> something <br/> <span className="italic font-light text-gradient">extraordinary.</span>
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-lg md:text-lg">
            Helping brands grow with modern design, creative storytelling, SEO optimization, and high-converting ad campaigns.
          </p>
        </div>

        {/* Right Side: Action Cards */}
        <div className="md:col-span-5 flex flex-col items-start md:items-end space-y-4 w-full">
          {/* Main Email Card */}
          <a className="group flex items-center justify-between w-full max-w-md glass rounded-3xl p-6 md:p-8 border border-on-surface/10 hover:border-primary/40 transition-all hover:bg-white/[0.03]" href="mailto:skotturty@gmail.com">
            <div className="text-left">
              <span className="block text-xs uppercase tracking-widest text-on-card-variant mb-2">Email Me</span>
              <span className="font-bold text-white text-lg md:text-xl group-hover:text-primary transition-colors">skotturty@gmail.com</span>
            </div>
            <div className="w-14 h-14 rounded-full bg-on-surface/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
              <span className="material-symbols-outlined text-white group-hover:text-black">arrow_outward</span>
            </div>
          </a>

          {/* Secondary Action Row */}
          <div className="flex gap-4 w-full max-w-md">
            <a className="flex-1 glass rounded-3xl py-6 flex flex-col items-center justify-center hover:bg-white/[0.03] transition-all border border-on-surface/10 group" href="https://linkedin.com/in/sahitikotturty" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-white mb-3 group-hover:scale-110 transition-transform">share</span>
              <span className="text-[10px] uppercase tracking-widest text-on-card-variant">Socials</span>
            </a>
            <a className="flex-1 glass rounded-3xl py-6 flex flex-col items-center justify-center hover:bg-white/[0.03] transition-all border border-on-surface/10 group" href="https://calendly.com/sahitikotturty" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-white mb-3 group-hover:scale-110 transition-transform">calendar_month</span>
              <span className="text-[10px] uppercase tracking-widest text-on-card-variant">Book Call</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Background Graphic Element */}
      <div className="absolute bottom-0 right-[-5%] text-[120px] md:text-[250px] font-display-lg font-black text-on-surface/[0.02] tracking-tighter pointer-events-none leading-none select-none">
        SAHITI
      </div>
    </section>
  );
}
