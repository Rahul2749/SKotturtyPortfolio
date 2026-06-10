export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Strategy",
      desc: "Understanding your brand, audience, goals, and market positioning to build the right growth strategy.",
      color: "text-primary",
    },
    {
      num: "02",
      title: "Design & Branding",
      desc: "Crafting visually striking UI/UX designs, branding assets, and creative experiences aligned with your identity.",
      color: "text-secondary",
    },
    {
      num: "03",
      title: "Marketing & Optimization",
      desc: "Launching SEO strategies, Meta Ads, Google Ads, and performance campaigns optimized for engagement and conversions.",
      color: "text-tertiary",
    },
    {
      num: "04",
      title: "Growth & Scaling",
      desc: "Analyzing performance, improving user experience, and scaling campaigns for long-term business growth.",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-section-gap px-container-margin" id="process">
      <div className="max-w-7xl mx-auto">
        <div className="process-header text-center mb-16 md:mb-20">
          <span className="text-primary font-bold tracking-[0.5em] uppercase text-label-sm">Process</span>
          <h2 className="font-headline-lg text-[32px] md:text-headline-lg text-white mt-4 leading-tight">
            Launch Your <span className="italic font-light text-gradient">Success</span>
          </h2>
          <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            A streamlined creative and marketing process designed to transform ideas into impactful digital results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="process-step glass p-8 md:p-10 rounded-[2.5rem] project-card w-full flex flex-col relative overflow-hidden group">
              <span className={`${step.color} font-black text-5xl md:text-6xl mb-6 block opacity-20 group-hover:opacity-100 transition-opacity duration-500`}>
                {step.num}
              </span>
              <h3 className="text-white font-bold text-headline-sm mb-4 leading-tight">{step.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
