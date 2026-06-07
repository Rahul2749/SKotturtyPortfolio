export default function CaseStudies() {
  return (
    <section className="py-section-gap bg-surface-container-low/30" id="case-studies">
      <div className="max-w-7xl mx-auto px-container-margin">
        <div className="case-header mb-16">
          <span className="text-primary font-bold tracking-[0.5em] uppercase text-label-sm">Deep Dives</span>
          <h2 className="font-headline-lg text-headline-lg text-white mt-2">Project <span className="italic font-light">Strategies</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Card 1: UI/UX App Case Study */}
          <div className="case-card glass rounded-[3rem] p-12 space-y-8 project-card border border-white/5">
            <div className="flex justify-between items-start">
              <span className="text-primary font-bold text-[10px] uppercase border border-primary/30 px-4 py-1 rounded-full">UI/UX App Case Study</span>
              <span className="text-outline text-label-sm">300% Growth</span>
            </div>
            <h3 className="text-headline-md text-white">OmniFlow: Scaling User Retention</h3>
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/5">
              <div>
                <span className="block text-[10px] text-outline uppercase font-black mb-1">Problem</span>
                <p className="text-body-sm text-on-surface-variant">Drop-off on checkout.</p>
              </div>
              <div>
                <span className="block text-[10px] text-outline uppercase font-black mb-1">Strategy</span>
                <p className="text-body-sm text-on-surface-variant">One-click logic.</p>
              </div>
              <div>
                <span className="block text-[10px] text-outline uppercase font-black mb-1">Result</span>
                <p className="text-body-sm text-on-surface-variant">+42% Retention.</p>
              </div>
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              A deep dive into restructuring the SaaS dashboard through intensive user research, iterative wireframing, and performance-led final design.
            </p>
            <a className="inline-flex items-center gap-2 text-white font-bold group" href="#">
              Read Full Research <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </a>
          </div>

          {/* Card 2: Website Redesign */}
          <div className="case-card glass rounded-[3rem] p-12 space-y-8 project-card border border-white/5">
            <div className="flex justify-between items-start">
              <span className="text-tertiary font-bold text-[10px] uppercase border border-tertiary/30 px-4 py-1 rounded-full">Website Redesign</span>
              <span className="text-outline text-label-sm">+150% Conversion</span>
            </div>
            <h3 className="text-headline-md text-white">Nexus: High-Performance Architecture</h3>
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/5">
              <div>
                <span className="block text-[10px] text-outline uppercase font-black mb-1">Problem</span>
                <p className="text-body-sm text-on-surface-variant">Slow load & bounce.</p>
              </div>
              <div>
                <span className="block text-[10px] text-outline uppercase font-black mb-1">Strategy</span>
                <p className="text-body-sm text-on-surface-variant">Headless Next.js.</p>
              </div>
              <div>
                <span className="block text-[10px] text-outline uppercase font-black mb-1">Result</span>
                <p className="text-body-sm text-on-surface-variant">Sub-second loads.</p>
              </div>
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              A complete architectural overhaul and redesign of the corporate site, focusing on technical SEO, accessibility, and frictionless user journeys.
            </p>
            <a className="inline-flex items-center gap-2 text-white font-bold group" href="#">
              Read Case Study <span className="material-symbols-outlined text-tertiary group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </a>
          </div>

          {/* Card 3: Branding Project */}
          <div className="case-card glass rounded-[3rem] p-12 space-y-8 project-card border border-white/5">
            <div className="flex justify-between items-start">
              <span className="text-secondary font-bold text-[10px] uppercase border border-secondary/30 px-4 py-1 rounded-full">Branding Project</span>
              <span className="text-outline text-label-sm">$2M Seed Raised</span>
            </div>
            <h3 className="text-headline-md text-white">Astra: Kinetic Brand Language</h3>
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/5">
              <div>
                <span className="block text-[10px] text-outline uppercase font-black mb-1">Market</span>
                <p className="text-body-sm text-on-surface-variant">Space-tech Entry.</p>
              </div>
              <div>
                <span className="block text-[10px] text-outline uppercase font-black mb-1">Visuals</span>
                <p className="text-body-sm text-on-surface-variant">Kinetic Type.</p>
              </div>
              <div>
                <span className="block text-[10px] text-outline uppercase font-black mb-1">Impact</span>
                <p className="text-body-sm text-on-surface-variant">VC Traction.</p>
              </div>
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              Creating a visual language that communicates speed and sustainability for next-gen aerospace startups. From logo to guidelines.
            </p>
            <a className="inline-flex items-center gap-2 text-white font-bold group" href="#">
              Read Brand Story <span className="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </a>
          </div>

          {/* Card 4: Meta Ads Campaign */}
          <div className="case-card glass rounded-[3rem] p-12 space-y-8 project-card border border-white/5">
            <div className="flex justify-between items-start">
              <span className="text-[#4ade80] font-bold text-[10px] uppercase border border-[#4ade80]/30 px-4 py-1 rounded-full">Meta Ads Campaign</span>
              <span className="text-outline text-label-sm">4.5x ROAS</span>
            </div>
            <h3 className="text-headline-md text-white">Lumina: Scaling D2C Acquisition</h3>
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/5">
              <div>
                <span className="block text-[10px] text-outline uppercase font-black mb-1">Objective</span>
                <p className="text-body-sm text-on-surface-variant">Lowering CPA.</p>
              </div>
              <div>
                <span className="block text-[10px] text-outline uppercase font-black mb-1">Strategy</span>
                <p className="text-body-sm text-on-surface-variant">UGC & Lookalike.</p>
              </div>
              <div>
                <span className="block text-[10px] text-outline uppercase font-black mb-1">Result</span>
                <p className="text-body-sm text-on-surface-variant">4.5x Ad Return.</p>
              </div>
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              Designing high-converting creative assets and deploying a rigorous A/B testing matrix to rapidly scale customer acquisition for a D2C brand.
            </p>
            <a className="inline-flex items-center gap-2 text-white font-bold group" href="#">
              View Campaign Data <span className="material-symbols-outlined text-[#4ade80] group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
