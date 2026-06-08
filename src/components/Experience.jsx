export default function Experience() {
  const experiences = [
    {
      year: "2024 - Present",
      role: "UI/UX Designer",
      company: "Creative Studio Agency",
      description: "Leading the design team in creating scalable digital products for global tech startups. Driving UX strategy and maintaining comprehensive design systems."
    },
    {
      year: "2024 - Present",
      role: "Freelance Multidisciplinary Designer",
      company: "Self-Employed",
      description: "Collaborated directly with over 30+ clients across e-commerce, real estate, and healthcare to deliver comprehensive branding and web design solutions."
    },
    {
      year: "2023 - Present",
      role: "Digital Marketer",
      company: "Freelance",
      description: "Masterminded data-driven digital marketing campaigns and scalable growth strategies, catapulting brand visibility and driving an impressive 45% surge in high-converting user engagement."
    }
  ];

  return (
    <section className="py-section-gap px-container-margin" id="experience">
      <div className="max-w-5xl mx-auto">
        <div className="experience-header text-center mb-12 md:mb-16">
          <span className="text-primary font-bold tracking-[0.5em] uppercase text-label-sm">My Journey</span>
          <h2 className="font-headline-lg text-headline-lg text-white mt-4">Professional <span className="italic font-light text-gradient">Experience</span></h2>
        </div>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-white/10 to-transparent transform md:-translate-x-1/2"></div>
          
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`experience-card relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16 w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-[7px] md:-translate-x-1/2 mt-6 md:mt-0 shadow-[0_0_15px_rgba(165,231,255,0.6)] z-10"></div>
                
                {/* Content */}
                <div className="w-full md:w-[45%] pl-12 md:pl-0">
                  <div className={`glass p-8 rounded-[2rem] project-card border border-white/5 hover:border-primary/30 transition-colors ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-primary text-xs font-bold tracking-widest uppercase mb-4 border border-white/10">
                      {exp.year}
                    </span>
                    <h3 className="text-2xl text-white font-headline-md font-bold mb-1">{exp.role}</h3>
                    <h4 className="text-on-surface-variant font-medium text-sm uppercase tracking-widest mb-4">{exp.company}</h4>
                    <p className="text-body-md text-on-surface-variant leading-relaxed opacity-80">
                      {exp.description}
                    </p>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
