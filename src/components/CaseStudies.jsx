export default function CaseStudies() {
  return (
    <section className="py-section-gap bg-surface-container-low/30 relative" id="case-studies">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-container-margin relative z-10">
        <div className="case-header mb-16 flex flex-col items-center text-center md:items-start md:text-left">
          <span className="text-primary font-bold tracking-[0.5em] uppercase text-label-sm">Deep Dives</span>
          <h2 className="font-headline-lg text-[40px] md:text-[64px] text-white mt-2 leading-[1.1]">Project <span className="italic font-light">Strategies</span></h2>
        </div>
        
        {/* BENTO GRID CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* CARD 1: OmniFlow (Wide - 8 Cols) */}
          <div className="md:col-span-8 group relative bg-[#131620] rounded-[2.5rem] p-8 md:p-12 border border-white/5 hover:border-primary/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col shadow-2xl min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* Oversized Background Number */}
            <div className="absolute -bottom-10 -right-10 text-[180px] font-black text-white/[0.02] group-hover:text-primary/[0.05] transition-colors duration-700 pointer-events-none tracking-tighter">
              300%
            </div>
            
            <div className="relative z-10 flex-1 flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="text-primary font-bold text-[10px] tracking-widest uppercase border border-primary/20 bg-primary/5 px-4 py-1.5 rounded-full">UI/UX App Case Study</span>
                  <span className="text-outline text-label-sm font-semibold tracking-wide border border-white/10 px-4 py-1 rounded-full glass">300% Growth</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-lg">OmniFlow: Scaling User Retention</h3>
                <p className="text-on-surface-variant leading-relaxed mb-10 text-lg md:text-xl font-light max-w-xl">
                  A deep dive into restructuring the SaaS dashboard through intensive user research, iterative wireframing, and performance-led final design.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mt-auto">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <span className="block text-[10px] text-outline uppercase font-black mb-1 tracking-widest">Problem</span>
                    <p className="text-sm text-white/90 font-medium">Checkout drop-off.</p>
                  </div>
                  <div>
                    <span className="block text-[10px] text-outline uppercase font-black mb-1 tracking-widest">Strategy</span>
                    <p className="text-sm text-white/90 font-medium">One-click logic.</p>
                  </div>
                  <div>
                    <span className="block text-[10px] text-outline uppercase font-black mb-1 tracking-widest">Result</span>
                    <p className="text-sm text-primary font-bold">+42% Retention.</p>
                  </div>
                </div>
                <a className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-white/10 group-hover:border-primary/40 group-hover:bg-primary text-white transition-all shrink-0" href="#">
                  <span className="material-symbols-outlined text-[24px] group-hover:-rotate-45 transition-transform duration-300">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* CARD 2: Website Redesign (Narrow - 4 Cols) */}
          <div className="md:col-span-4 group relative bg-[#131620] rounded-[2.5rem] p-8 md:p-10 border border-white/5 hover:border-tertiary/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col shadow-2xl min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* Oversized Background Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-tertiary/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="relative z-10 flex-1 flex flex-col h-full">
              <span className="text-tertiary font-bold text-[10px] tracking-widest uppercase mb-6 inline-block w-fit border border-tertiary/20 bg-tertiary/5 px-4 py-1.5 rounded-full">Website Redesign</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Nexus: High-Performance Architecture</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8 text-base font-light">
                Complete architectural overhaul focusing on technical SEO and frictionless user journeys.
              </p>
              
              <div className="mt-auto space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <span className="text-[10px] text-outline uppercase font-black tracking-widest">Problem</span>
                  <span className="text-sm text-white/90">Slow load & bounce.</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <span className="text-[10px] text-outline uppercase font-black tracking-widest">Result</span>
                  <span className="text-sm text-tertiary font-bold">Sub-second loads.</span>
                </div>
                <div className="pt-4 flex justify-between items-center">
                   <span className="text-sm text-white font-bold tracking-wide">Read Case Study</span>
                   <span className="material-symbols-outlined text-tertiary group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3: Branding Project (Narrow - 5 Cols) */}
          <div className="md:col-span-5 group relative bg-[#131620] rounded-[2.5rem] p-8 md:p-10 border border-white/5 hover:border-secondary/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col shadow-2xl min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex-1 flex flex-col h-full">
              <div className="flex justify-between items-start mb-8">
                <span className="text-secondary font-bold text-[10px] tracking-widest uppercase border border-secondary/20 bg-secondary/5 px-4 py-1.5 rounded-full">Branding Project</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Astra: Kinetic Brand Language</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8 text-base font-light">
                Visual language communicating speed and sustainability for next-gen aerospace startups.
              </p>
              
              <div className="mt-auto space-y-4">
                 <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <span className="text-[10px] text-outline uppercase font-black tracking-widest">Market</span>
                  <span className="text-sm text-white/90">Space-tech Entry.</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <span className="text-[10px] text-outline uppercase font-black tracking-widest">Impact</span>
                  <span className="text-sm text-secondary font-bold">VC Traction.</span>
                </div>
                <div className="pt-4 flex justify-between items-center cursor-pointer">
                   <span className="text-sm text-white font-bold tracking-wide">Read Brand Story</span>
                   <span className="material-symbols-outlined text-secondary group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 4: Meta Ads Campaign (Wide - 7 Cols) */}
          <div className="md:col-span-7 group relative bg-[#131620] rounded-[2.5rem] p-8 md:p-12 border border-white/5 hover:border-[#4ade80]/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col shadow-2xl min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4ade80]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* Oversized Background Number */}
            <div className="absolute -bottom-10 right-0 text-[180px] font-black text-white/[0.02] group-hover:text-[#4ade80]/[0.05] transition-colors duration-700 pointer-events-none tracking-tighter">
              4.5x
            </div>
            
            <div className="relative z-10 flex-1 flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[#4ade80] font-bold text-[10px] tracking-widest uppercase border border-[#4ade80]/20 bg-[#4ade80]/5 px-4 py-1.5 rounded-full">Meta Ads Campaign</span>
                  <span className="text-outline text-label-sm font-semibold tracking-wide border border-white/10 px-4 py-1 rounded-full glass">4.5x ROAS</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-lg">Lumina: Scaling D2C Acquisition</h3>
                <p className="text-on-surface-variant leading-relaxed mb-10 text-lg font-light max-w-xl">
                  Designing high-converting creative assets and deploying a rigorous A/B testing matrix to rapidly scale customer acquisition.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mt-auto">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <span className="block text-[10px] text-outline uppercase font-black mb-1 tracking-widest">Objective</span>
                    <p className="text-sm text-white/90 font-medium">Lower CPA.</p>
                  </div>
                  <div>
                    <span className="block text-[10px] text-outline uppercase font-black mb-1 tracking-widest">Strategy</span>
                    <p className="text-sm text-white/90 font-medium">UGC + LALs.</p>
                  </div>
                  <div>
                    <span className="block text-[10px] text-outline uppercase font-black mb-1 tracking-widest">Result</span>
                    <p className="text-sm text-[#4ade80] font-bold">4.5x Ad Return.</p>
                  </div>
                </div>
                <a className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-white/10 group-hover:border-[#4ade80]/40 group-hover:bg-[#4ade80] group-hover:text-black text-white transition-all shrink-0" href="#">
                  <span className="material-symbols-outlined text-[24px] group-hover:-rotate-45 transition-transform duration-300">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
