export default function WhyChooseMe() {
  const items = [
    { icon: "design_services", title: "Modern UI/UX Design" },
    { icon: "bolt", title: "Fast & Responsive Websites" },
    { icon: "search", title: "SEO Optimized Structure" },
    { icon: "ads_click", title: "Google & Meta Ads Management" },
    { icon: "trending_up", title: "Conversion-Focused Strategy" },
  ];

  return (
    <section className="py-section-gap px-container-margin bg-[#f8f9fb]" id="why-choose-me">
      <div className="max-w-7xl mx-auto">
        <div className="why-header text-center mb-16 md:mb-20">
          <span className="text-primary font-bold tracking-[0.5em] uppercase text-label-sm">Why Me</span>
          <h2 className="font-headline-lg text-[32px] md:text-headline-lg text-on-surface mt-4 leading-tight">
            Why Clients <span className="italic font-normal text-gradient">Choose Me</span>
          </h2>
          <p className="text-[#64748b] mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            I combine design expertise with marketing strategy to deliver real business results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="why-card bg-[#eaeff5] border border-[#c4cdd9] rounded-[2.5rem] p-8 project-card flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <span className="material-symbols-outlined text-[28px] text-primary">{item.icon}</span>
              </div>
              <h3 className="text-[#1e293b] font-bold text-sm leading-snug">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
