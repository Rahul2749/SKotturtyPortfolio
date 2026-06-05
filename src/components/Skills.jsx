export default function Skills() {
  return (
    <section className="py-section-gap px-container-margin">
      <div className="max-w-7xl mx-auto">
        <div className="skills-header flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <h2 className="font-headline-lg text-headline-lg text-white">The <span className="italic font-light text-gradient">Toolkit</span></h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="skill-tag px-6 py-2 glass rounded-full text-label-sm text-outline uppercase border border-white/5">Figma</div>
            <div className="skill-tag px-6 py-2 glass rounded-full text-label-sm text-outline uppercase border border-white/5">Adobe CC</div>
            <div className="skill-tag px-6 py-2 glass rounded-full text-label-sm text-outline uppercase border border-white/5">Webflow</div>
            <div className="skill-tag px-6 py-2 glass rounded-full text-label-sm text-outline uppercase border border-white/5">After Effects</div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div className="skill-card glass p-8 rounded-3xl flex flex-col items-center gap-4 group hover:bg-primary/10 transition-colors project-card">
            <span className="material-symbols-outlined text-3xl text-primary">draw</span>
            <span className="text-label-sm font-bold text-white uppercase">UI Design</span>
          </div>
          <div className="skill-card glass p-8 rounded-3xl flex flex-col items-center gap-4 group hover:bg-secondary/10 transition-colors project-card">
            <span className="material-symbols-outlined text-3xl text-secondary">psychology</span>
            <span className="text-label-sm font-bold text-white uppercase">UX Research</span>
          </div>
          <div className="skill-card glass p-8 rounded-3xl flex flex-col items-center gap-4 group hover:bg-tertiary/10 transition-colors project-card">
            <span className="material-symbols-outlined text-3xl text-tertiary">code</span>
            <span className="text-label-sm font-bold text-white uppercase">Frontend Dev</span>
          </div>
          <div className="skill-card glass p-8 rounded-3xl flex flex-col items-center gap-4 group hover:bg-primary/10 transition-colors project-card">
            <span className="material-symbols-outlined text-3xl text-primary">animation</span>
            <span className="text-label-sm font-bold text-white uppercase">Motion</span>
          </div>
          <div className="skill-card glass p-8 rounded-3xl flex flex-col items-center gap-4 group hover:bg-secondary/10 transition-colors project-card">
            <span className="material-symbols-outlined text-3xl text-secondary">data_thresholding</span>
            <span className="text-label-sm font-bold text-white uppercase">Analytics</span>
          </div>
          <div className="skill-card glass p-8 rounded-3xl flex flex-col items-center gap-4 group hover:bg-tertiary/10 transition-colors project-card">
            <span className="material-symbols-outlined text-3xl text-tertiary">campaign</span>
            <span className="text-label-sm font-bold text-white uppercase">Strategy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
