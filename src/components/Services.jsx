export default function Services() {
  return (
    <section className="py-section-gap bg-surface-container-lowest/50 reveal" id="services">
      <div className="max-w-7xl mx-auto px-container-margin">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-[0.5em] uppercase text-label-sm">Expertise</span>
          <h2 className="font-headline-lg text-headline-lg text-white mt-4">Multidisciplinary <span className="italic font-light">Solutions</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Design */}
          <div className="glass p-12 rounded-[2.5rem] project-card relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-primary">design_services</span>
            </div>
            <h3 className="font-headline-md text-white mb-6">Product Design</h3>
            <p className="text-on-surface-variant mb-8 leading-relaxed">Full-cycle UI/UX from research and wireframing to high-fidelity prototyping and design system scaling.</p>
            <ul className="space-y-3 text-label-sm text-outline uppercase tracking-wider">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> SaaS Dashboards</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Mobile Applications</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Design Systems</li>
            </ul>
          </div>
          {/* Brand Identity */}
          <div className="glass p-12 rounded-[2.5rem] project-card relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-secondary">auto_awesome</span>
            </div>
            <h3 className="font-headline-md text-white mb-6">Brand Identity</h3>
            <p className="text-on-surface-variant mb-8 leading-relaxed">Crafting distinct visual worlds including kinetic logos, typography systems, and premium brand collateral.</p>
            <ul className="space-y-3 text-label-sm text-outline uppercase tracking-wider">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Visual Language</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Logo & Motion</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Brand Guidelines</li>
            </ul>
          </div>
          {/* Digital Growth */}
          <div className="glass p-12 rounded-[2.5rem] project-card relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-tertiary">trending_up</span>
            </div>
            <h3 className="font-headline-md text-white mb-6">Digital Growth</h3>
            <p className="text-on-surface-variant mb-8 leading-relaxed">Data-driven marketing creatives, performance-led landing pages, and strategic social campaigns.</p>
            <ul className="space-y-3 text-label-sm text-outline uppercase tracking-wider">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> Conversion Design</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> ROI Focused Ads</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> Content Strategy</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
