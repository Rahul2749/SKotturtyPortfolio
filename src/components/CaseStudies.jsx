export default function CaseStudies() {
  return (
    <section className="py-section-gap bg-surface-container-low/30 relative" id="case-studies">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-container-margin relative z-10">
        <div className="case-header mb-16 flex flex-col items-center text-center md:items-start md:text-left">
          <span className="text-primary font-bold tracking-[0.5em] uppercase text-label-sm">Deep Dives</span>
          <h2 className="font-headline-lg text-headline-lg text-white mt-2">Project <span className="italic font-light">Strategies</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          
          {/* Card 1: UI/UX App Case Study */}
          <div className="case-card group relative bg-[#131620] rounded-[2.5rem] p-8 md:p-12 border border-white/5 hover:border-primary/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <span className="text-primary font-bold text-[10px] tracking-wider uppercase border border-primary/20 bg-primary/5 px-4 py-1.5 rounded-full">UI/UX App Case Study</span>
                <span className="text-outline text-label-sm font-semibold tracking-wide">300% Growth</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">OmniFlow: Scaling User Retention</h3>
              
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/5 mb-8">
                <div>
                  <span className="block text-[10px] text-outline uppercase font-black mb-2 tracking-widest">Problem</span>
                  <p className="text-sm md:text-base text-white/80 font-medium">Drop-off on checkout.</p>
                </div>
                <div>
                  <span className="block text-[10px] text-outline uppercase font-black mb-2 tracking-widest">Strategy</span>
                  <p className="text-sm md:text-base text-white/80 font-medium">One-click logic.</p>
                </div>
                <div>
                  <span className="block text-[10px] text-outline uppercase font-black mb-2 tracking-widest">Result</span>
                  <p className="text-sm md:text-base text-white/80 font-medium">+42% Retention.</p>
                </div>
              </div>
              
              <p className="text-on-surface-variant leading-relaxed mb-10 text-base md:text-lg font-light">
                A deep dive into restructuring the SaaS dashboard through intensive user research, iterative wireframing, and performance-led final design.
              </p>
              
              <div className="mt-auto pt-2">
                <a className="inline-flex items-center gap-3 text-white font-bold group/btn px-7 py-3.5 rounded-full border border-white/10 hover:border-primary/40 hover:bg-primary/5 transition-all w-fit text-sm tracking-wide" href="#">
                  Read Full Research <span className="material-symbols-outlined text-[18px] text-primary group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Website Redesign */}
          <div className="case-card group relative bg-[#131620] rounded-[2.5rem] p-8 md:p-12 border border-white/5 hover:border-tertiary/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <span className="text-tertiary font-bold text-[10px] tracking-wider uppercase border border-tertiary/20 bg-tertiary/5 px-4 py-1.5 rounded-full">Website Redesign</span>
                <span className="text-outline text-label-sm font-semibold tracking-wide">+150% Conversion</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Nexus: High-Performance Architecture</h3>
              
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/5 mb-8">
                <div>
                  <span className="block text-[10px] text-outline uppercase font-black mb-2 tracking-widest">Problem</span>
                  <p className="text-sm md:text-base text-white/80 font-medium">Slow load & bounce.</p>
                </div>
                <div>
                  <span className="block text-[10px] text-outline uppercase font-black mb-2 tracking-widest">Strategy</span>
                  <p className="text-sm md:text-base text-white/80 font-medium">Headless Next.js.</p>
                </div>
                <div>
                  <span className="block text-[10px] text-outline uppercase font-black mb-2 tracking-widest">Result</span>
                  <p className="text-sm md:text-base text-white/80 font-medium">Sub-second loads.</p>
                </div>
              </div>
              
              <p className="text-on-surface-variant leading-relaxed mb-10 text-base md:text-lg font-light">
                A complete architectural overhaul and redesign of the corporate site, focusing on technical SEO, accessibility, and frictionless user journeys.
              </p>
              
              <div className="mt-auto pt-2">
                <a className="inline-flex items-center gap-3 text-white font-bold group/btn px-7 py-3.5 rounded-full border border-white/10 hover:border-tertiary/40 hover:bg-tertiary/5 transition-all w-fit text-sm tracking-wide" href="#">
                  Read Case Study <span className="material-symbols-outlined text-[18px] text-tertiary group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Branding Project */}
          <div className="case-card group relative bg-[#131620] rounded-[2.5rem] p-8 md:p-12 border border-white/5 hover:border-secondary/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <span className="text-secondary font-bold text-[10px] tracking-wider uppercase border border-secondary/20 bg-secondary/5 px-4 py-1.5 rounded-full">Branding Project</span>
                <span className="text-outline text-label-sm font-semibold tracking-wide">$2M Seed Raised</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Astra: Kinetic Brand Language</h3>
              
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/5 mb-8">
                <div>
                  <span className="block text-[10px] text-outline uppercase font-black mb-2 tracking-widest">Market</span>
                  <p className="text-sm md:text-base text-white/80 font-medium">Space-tech Entry.</p>
                </div>
                <div>
                  <span className="block text-[10px] text-outline uppercase font-black mb-2 tracking-widest">Visuals</span>
                  <p className="text-sm md:text-base text-white/80 font-medium">Kinetic Type.</p>
                </div>
                <div>
                  <span className="block text-[10px] text-outline uppercase font-black mb-2 tracking-widest">Impact</span>
                  <p className="text-sm md:text-base text-white/80 font-medium">VC Traction.</p>
                </div>
              </div>
              
              <p className="text-on-surface-variant leading-relaxed mb-10 text-base md:text-lg font-light">
                Creating a visual language that communicates speed and sustainability for next-gen aerospace startups. From logo to guidelines.
              </p>
              
              <div className="mt-auto pt-2">
                <a className="inline-flex items-center gap-3 text-white font-bold group/btn px-7 py-3.5 rounded-full border border-white/10 hover:border-secondary/40 hover:bg-secondary/5 transition-all w-fit text-sm tracking-wide" href="#">
                  Read Brand Story <span className="material-symbols-outlined text-[18px] text-secondary group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 4: Meta Ads Campaign */}
          <div className="case-card group relative bg-[#131620] rounded-[2.5rem] p-8 md:p-12 border border-white/5 hover:border-[#4ade80]/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4ade80]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <span className="text-[#4ade80] font-bold text-[10px] tracking-wider uppercase border border-[#4ade80]/20 bg-[#4ade80]/5 px-4 py-1.5 rounded-full">Meta Ads Campaign</span>
                <span className="text-outline text-label-sm font-semibold tracking-wide">4.5x ROAS</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Lumina: Scaling D2C Acquisition</h3>
              
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/5 mb-8">
                <div>
                  <span className="block text-[10px] text-outline uppercase font-black mb-2 tracking-widest">Objective</span>
                  <p className="text-sm md:text-base text-white/80 font-medium">Lowering CPA.</p>
                </div>
                <div>
                  <span className="block text-[10px] text-outline uppercase font-black mb-2 tracking-widest">Strategy</span>
                  <p className="text-sm md:text-base text-white/80 font-medium">UGC & Lookalike.</p>
                </div>
                <div>
                  <span className="block text-[10px] text-outline uppercase font-black mb-2 tracking-widest">Result</span>
                  <p className="text-sm md:text-base text-white/80 font-medium">4.5x Ad Return.</p>
                </div>
              </div>
              
              <p className="text-on-surface-variant leading-relaxed mb-10 text-base md:text-lg font-light">
                Designing high-converting creative assets and deploying a rigorous A/B testing matrix to rapidly scale customer acquisition for a D2C brand.
              </p>
              
              <div className="mt-auto pt-2">
                <a className="inline-flex items-center gap-3 text-white font-bold group/btn px-7 py-3.5 rounded-full border border-white/10 hover:border-[#4ade80]/40 hover:bg-[#4ade80]/5 transition-all w-fit text-sm tracking-wide" href="#">
                  View Campaign Data <span className="material-symbols-outlined text-[18px] text-[#4ade80] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
