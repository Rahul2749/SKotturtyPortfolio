export default function About() {
  return (
    <section className="py-section-gap px-container-margin bg-[#edf0f6]" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <h2 className="about-heading font-headline-lg text-[26px] md:text-headline-lg text-on-surface leading-tight">The <span className="italic font-light">Mind</span> Behind</h2>
            <div className="about-bar w-20 h-1 bg-primary"></div>
            <p className="about-text text-body-lg text-on-surface-variant leading-relaxed">
              I am Sahiti, a designer who lives at the intersection of aesthetics and functionality. With a background spanning across UI/UX, branding, and digital marketing, I help businesses transform complex ideas into intuitive visual narratives.
            </p>
            <p className="about-text text-body-lg text-on-surface-variant leading-relaxed">
              My philosophy is simple: Design is not just how it looks, but how it <span className="text-primary">works and grows</span>. Every pixel is a calculated step toward solving a business challenge.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="stat-card glass p-8 rounded-3xl border-l-4 border-primary">
              <h4 className="text-display-md text-on-surface font-bold">2+</h4>
              <p className="text-label-sm uppercase tracking-widest text-outline">Years Experience</p>
            </div>
            <div className="stat-card glass p-8 rounded-3xl border-l-4 border-secondary">
              <h4 className="text-display-md text-on-surface font-bold">25+</h4>
              <p className="text-label-sm uppercase tracking-widest text-outline">Projects Delivered</p>
            </div>
            <div className="stat-card glass p-8 rounded-3xl border-l-4 border-tertiary">
              <h4 className="text-display-md text-on-surface font-bold">15+</h4>
              <p className="text-label-sm uppercase tracking-widest text-outline">Happy Clients</p>
            </div>
            <div className="stat-card glass p-8 rounded-3xl border-l-4 border-primary">
              <h4 className="text-display-md text-on-surface font-bold">99%</h4>
              <p className="text-label-sm uppercase tracking-widest text-outline">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
