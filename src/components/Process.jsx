export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Research",
      desc: "Understanding your brand, audience, goals, and competitors to build the right foundation.",
      color: "text-primary",
    },
    {
      num: "02",
      title: "Strategy Planning",
      desc: "Defining the roadmap, channels, and tactics tailored to your business objectives.",
      color: "text-primary",
    },
    {
      num: "03",
      title: "Design & Prototype",
      desc: "Crafting visually stunning UI/UX designs and interactive prototypes for validation.",
      color: "text-primary",
    },
    {
      num: "04",
      title: "Development",
      desc: "Building fast, responsive, and SEO-optimized websites ready for launch.",
      color: "text-primary",
    },
    {
      num: "05",
      title: "Launch & Optimization",
      desc: "Going live with continuous monitoring, testing, and performance improvements.",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-section-gap px-container-margin bg-[#f8f9fb]" id="process">
      <div className="max-w-7xl mx-auto">
        <div className="process-header text-center mb-16 md:mb-20">
          <span className="text-primary font-bold tracking-[0.5em] uppercase text-label-sm">Process</span>
          <h2 className="font-headline-lg text-[32px] md:text-headline-lg text-on-surface mt-4 leading-tight">
            My <span className="italic font-normal text-gradient">Process</span>
          </h2>
          <p className="text-[#64748b] mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            A proven workflow designed to take your project from concept to measurable success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="process-step bg-[#eaeff5] border border-[#c4cdd9] p-8 md:p-10 rounded-[2.5rem] project-card w-full flex flex-col relative overflow-hidden group">
              <span className={`${step.color} font-black text-5xl md:text-6xl mb-6 block opacity-70 group-hover:opacity-100 transition-opacity duration-500`}>
                {step.num}
              </span>
              <h3 className="text-[#1e293b] font-bold text-headline-sm mb-4 leading-tight">{step.title}</h3>
              <p className="text-[#475569] text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
