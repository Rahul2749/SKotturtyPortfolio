export default function Testimonials() {
  return (
    <section className="py-section-gap bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-container-margin">
        <div className="testimonial-header text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Client <span className="italic font-normal text-gradient">Praise</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="testimonial-card glass p-12 rounded-[2.5rem] relative">
            <span className="material-symbols-outlined text-primary text-6xl opacity-20 absolute top-8 left-8">format_quote</span>
            <p className="text-body-lg text-[#475569] italic mb-8 relative z-10">"Sahiti brought a level of strategic thinking we hadn't seen before. Our conversion rates improved by 40% within the first month of the new UI launch."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20"></div>
              <div>
                <h5 className="text-[#1e293b] font-bold">Marcus Chen</h5>
                <p className="text-label-sm text-outline uppercase">Founder, TechStack</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card glass p-12 rounded-[2.5rem] relative">
            <span className="material-symbols-outlined text-secondary text-6xl opacity-20 absolute top-8 left-8">format_quote</span>
            <p className="text-body-lg text-[#475569] italic mb-8 relative z-10">"The rebranding was seamless. She captured our vision perfectly and created a design system that our team can actually use to scale."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20"></div>
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
