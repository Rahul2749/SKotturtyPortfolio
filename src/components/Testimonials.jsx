export default function Testimonials() {
  return (
    <section className="py-section-gap bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-container-margin">
        <div className="testimonial-header text-center mb-16">
          <span className="text-primary font-bold tracking-[0.5em] uppercase text-label-sm">Testimonials</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-4">Client <span className="italic font-normal text-gradient">Praise</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="testimonial-card glass p-12 rounded-[2.5rem] relative">
            <span className="material-symbols-outlined text-primary text-6xl opacity-20 absolute top-8 left-8">format_quote</span>
            <p className="text-body-lg text-[#475569] italic mb-8 relative z-10">"Professional, responsive, and delivered exactly what we needed. The new design elevated our brand and the results speak for themselves."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-xl">person</span>
              </div>
              <div>
                <h5 className="text-[#1e293b] font-bold">Marcus Chen</h5>
                <p className="text-label-sm text-outline uppercase">Founder, TechStack</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card glass p-12 rounded-[2.5rem] relative">
            <span className="material-symbols-outlined text-secondary text-6xl opacity-20 absolute top-8 left-8">format_quote</span>
            <p className="text-body-lg text-[#475569] italic mb-8 relative z-10">"Our website now looks premium and converts much better. She understood our vision perfectly and created a design system our team loves using."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-xl">person</span>
              </div>
              <div>
                <h5 className="text-[#1e293b] font-bold">Elena Rodriguez</h5>
                <p className="text-label-sm text-outline uppercase">CMO, Lumina FinTech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
