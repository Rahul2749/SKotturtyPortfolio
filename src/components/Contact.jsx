export default function Contact() {
  return (
    <section className="py-section-gap px-container-margin reveal" id="contact">
      <div className="max-w-5xl mx-auto glass rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center group border border-white/10 shadow-[0_0_80px_rgba(165,231,255,0.05)]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-tertiary/10 opacity-50"></div>
        <div className="relative z-10 space-y-10">
          <h2 className="font-display-md text-display-md text-white leading-tight">
            Ready to build <br/> something <span className="italic font-light text-gradient">extraordinary?</span>
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Currently accepting selective partnerships for Q1 2025. Let's discuss how we can elevate your brand's digital footprint.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a className="bg-primary text-black px-12 py-6 rounded-full font-label-lg font-bold hover:scale-105 transition-all shadow-2xl flex items-center gap-3" href="mailto:hello@sahiti.com">
              Start a Conversation <span className="material-symbols-outlined">mail</span>
            </a>
            <div className="flex gap-4">
              <a className="w-16 h-16 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all border border-white/10" href="#"><span className="material-symbols-outlined text-white">share</span></a>
              <a className="w-16 h-16 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all border border-white/10" href="#"><span className="material-symbols-outlined text-white">call</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
