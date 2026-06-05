export default function Services() {
  return (
    <section id="services" className="px-8 md:px-16 mb-32 max-w-7xl mx-auto">
      <div className="flex justify-center mb-16">
        <h2 className="flex items-center gap-2">
          <span className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tighter">Core</span>
          <span className="font-display italic font-light text-3xl md:text-4xl text-on-surface-variant tracking-tight">Expertise</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="glass-card p-10 rounded-3xl flex flex-col">
          <div className="w-12 h-12 rounded-xl bg-surface-bright flex items-center justify-center mb-8 border border-white/5">
            <span className="material-symbols-outlined text-primary">hexagon</span>
          </div>
          <h3 className="font-display font-bold text-xl text-white mb-4">Digital Branding</h3>
          <p className="text-sm text-on-surface-variant mb-10 leading-relaxed flex-grow">
            Defining identities that pulse with purpose. From kinetic logos to comprehensive design systems that scale.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-xs text-on-surface-variant uppercase tracking-wider font-bold">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              Visual Identity
            </li>
            <li className="flex items-center gap-3 text-xs text-on-surface-variant uppercase tracking-wider font-bold">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
              Brand Strategy
            </li>
            <li className="flex items-center gap-3 text-xs text-on-surface-variant uppercase tracking-wider font-bold">
              <div className="w-1.5 h-1.5 rounded-full bg-tertiary"></div>
              Motion Design
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="glass-card p-10 rounded-3xl flex flex-col">
          <div className="w-12 h-12 rounded-xl bg-surface-bright flex items-center justify-center mb-8 border border-white/5">
            <span className="material-symbols-outlined text-secondary">design_services</span>
          </div>
          <h3 className="font-display font-bold text-xl text-white mb-4">Product Design</h3>
          <p className="text-sm text-on-surface-variant mb-10 leading-relaxed flex-grow">
            Architecting complex ecosystems into seamless user journeys. Where technical logic meets human-centric craft.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-xs text-on-surface-variant uppercase tracking-wider font-bold">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              UX/UI Systems
            </li>
            <li className="flex items-center gap-3 text-xs text-on-surface-variant uppercase tracking-wider font-bold">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
              Rapid Prototyping
            </li>
            <li className="flex items-center gap-3 text-xs text-on-surface-variant uppercase tracking-wider font-bold">
              <div className="w-1.5 h-1.5 rounded-full bg-tertiary"></div>
              Data Viz
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="glass-card p-10 rounded-3xl flex flex-col">
          <div className="w-12 h-12 rounded-xl bg-surface-bright flex items-center justify-center mb-8 border border-white/5">
            <span className="material-symbols-outlined text-white">brush</span>
          </div>
          <h3 className="font-display font-bold text-xl text-white mb-4">Creative Direction</h3>
          <p className="text-sm text-on-surface-variant mb-10 leading-relaxed flex-grow">
            Orchestrating visual stories that resonate. Guiding the aesthetic soul of projects from concept to final execution.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-xs text-on-surface-variant uppercase tracking-wider font-bold">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              Art Direction
            </li>
            <li className="flex items-center gap-3 text-xs text-on-surface-variant uppercase tracking-wider font-bold">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
              3D Visualization
            </li>
            <li className="flex items-center gap-3 text-xs text-on-surface-variant uppercase tracking-wider font-bold">
              <div className="w-1.5 h-1.5 rounded-full bg-tertiary"></div>
              Narrative Craft
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
