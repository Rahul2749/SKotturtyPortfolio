export default function CaseStudies() {
  return (
    <section className="py-section-gap bg-[#edf0f6] relative" id="case-studies">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-container-margin relative z-10">
        <div className="case-header mb-16 flex flex-col items-center text-center md:items-start md:text-left">
          <span className="text-primary font-bold tracking-[0.5em] uppercase text-label-sm">Case Studies</span>
          <h2 className="font-headline-lg text-[40px] md:text-[64px] text-on-surface mt-2 leading-[1.1]">Real <span className="italic font-normal text-gradient">Results</span></h2>
        </div>
        
        {/* BENTO GRID CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* CARD 1: Shape2Real — Immersive Web Experience (Wide - 8 Cols) */}
          <div className="case-card md:col-span-8 group relative bg-[#eaeff5] rounded-[2.5rem] p-8 md:p-12 border border-[#c4cdd9] hover:border-primary/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col shadow-2xl min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex-1 flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="text-primary font-bold text-[10px] tracking-widest uppercase border border-primary/20 bg-primary/5 px-4 py-1.5 rounded-full">Architecture Portfolio</span>
                  <span className="text-[#64748b] text-label-sm font-semibold tracking-wide border border-[#c4cdd9] px-4 py-1 rounded-full glass">Immersive UX</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-[#1e293b] mb-6 leading-tight max-w-lg">Shape2Real: Immersive Web Experience</h3>
                <p className="text-[#334155] leading-relaxed mb-10 text-lg md:text-xl max-w-xl">
                  Transformed a static architectural portfolio into a dynamic, scroll-driven experience that showcases 3D concepts with immersive interactions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mt-auto">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <span className="block text-[10px] text-outline uppercase font-black mb-1 tracking-widest">Challenge</span>
                    <p className="text-sm text-[#334155] font-medium">Static portfolios lack engagement.</p>
                  </div>
                  <div>
                    <span className="block text-[10px] text-outline uppercase font-black mb-1 tracking-widest">Solution</span>
                    <p className="text-sm text-[#334155] font-medium">Scroll-driven 3D interactions.</p>
                  </div>
                  <div>
                    <span className="block text-[10px] text-outline uppercase font-black mb-1 tracking-widest">Outcome</span>
                    <p className="text-sm text-primary font-bold">Higher user engagement.</p>
                  </div>
                </div>
                <a className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#c4cdd9] group-hover:border-primary/40 group-hover:bg-primary text-[#1e293b] group-hover:text-white transition-all shrink-0" href="https://shape2-real-web.vercel.app/" target="_blank" rel="noreferrer">
                  <span className="material-symbols-outlined text-[24px] group-hover:-rotate-45 transition-transform duration-300">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* CARD 2: Brand Growth Strategy (Narrow - 4 Cols) */}
          <div className="case-card md:col-span-4 group relative bg-[#eaeff5] rounded-[2.5rem] p-8 md:p-10 border border-[#c4cdd9] hover:border-tertiary/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col shadow-2xl min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex-1 flex flex-col h-full">
              <span className="text-tertiary font-bold text-[10px] tracking-widest uppercase mb-6 inline-block w-fit border border-tertiary/20 bg-tertiary/5 px-4 py-1.5 rounded-full">Brand & Marketing</span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-4">360° Brand Growth Strategy</h3>
              <p className="text-[#334155] leading-relaxed mb-8 text-base">
                Unified brand identity with targeted social media ads and performance marketing for measurable business growth.
              </p>
              
              <div className="mt-auto space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-[#c4cdd9]">
                  <span className="text-[10px] text-outline uppercase font-black tracking-widest">Challenge</span>
                  <span className="text-sm text-[#334155]">Fragmented brand identity.</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-[#c4cdd9]">
                  <span className="text-[10px] text-outline uppercase font-black tracking-widest">Outcome</span>
                  <span className="text-sm text-tertiary font-bold">Unified presence & leads.</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3: Adenium Heaven E-Commerce (Narrow - 5 Cols) */}
          <div className="case-card md:col-span-5 group relative bg-[#eaeff5] rounded-[2.5rem] p-8 md:p-10 border border-[#c4cdd9] hover:border-secondary/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col shadow-2xl min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex-1 flex flex-col h-full">
              <div className="flex justify-between items-start mb-8">
                <span className="text-secondary font-bold text-[10px] tracking-widest uppercase border border-secondary/20 bg-secondary/5 px-4 py-1.5 rounded-full">E-Commerce</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-4">Adenium Heaven: Botanical Sales Platform</h3>
              <p className="text-[#334155] leading-relaxed mb-8 text-base">
                Built a conversion-optimized e-commerce experience for rare botanical collections with mobile-first design.
              </p>
              
              <div className="mt-auto space-y-4">
                 <div className="flex justify-between items-center pb-3 border-b border-[#c4cdd9]">
                  <span className="text-[10px] text-outline uppercase font-black tracking-widest">Focus</span>
                  <span className="text-sm text-[#334155]">Visual commerce & conversions.</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-[#c4cdd9]">
                  <span className="text-[10px] text-outline uppercase font-black tracking-widest">Outcome</span>
                  <span className="text-sm text-secondary font-bold">Mobile-first sales growth.</span>
                </div>
                <a href="https://adeniumheaven.in/" target="_blank" rel="noreferrer" className="pt-4 flex justify-between items-center cursor-pointer group">
                   <span className="text-sm text-[#1e293b] font-bold tracking-wide">Visit Live Store</span>
                   <span className="material-symbols-outlined text-secondary group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* CARD 4: Future Investment Planner FinTech (Wide - 7 Cols) */}
          <div className="case-card md:col-span-7 group relative bg-[#eaeff5] rounded-[2.5rem] p-8 md:p-12 border border-[#c4cdd9] hover:border-[#4ade80]/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col shadow-2xl min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4ade80]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex-1 flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[#4ade80] font-bold text-[10px] tracking-widest uppercase border border-[#4ade80]/20 bg-[#4ade80]/5 px-4 py-1.5 rounded-full">FinTech Web App</span>
                  <span className="text-[#64748b] text-label-sm font-semibold tracking-wide border border-[#c4cdd9] px-4 py-1 rounded-full glass">GenZ Audience</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-[#1e293b] mb-6 leading-tight max-w-lg">Future Investment Planner</h3>
                <p className="text-[#334155] leading-relaxed mb-10 text-lg max-w-xl">
                  Modernized wealth management for Gen Z with interactive data visualization and gamified financial planning tools.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mt-auto">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <span className="block text-[10px] text-outline uppercase font-black mb-1 tracking-widest">Objective</span>
                    <p className="text-sm text-[#334155] font-medium">Youth engagement.</p>
                  </div>
                  <div>
                    <span className="block text-[10px] text-outline uppercase font-black mb-1 tracking-widest">Strategy</span>
                    <p className="text-sm text-[#334155] font-medium">Interactive data viz.</p>
                  </div>
                  <div>
                    <span className="block text-[10px] text-outline uppercase font-black mb-1 tracking-widest">Outcome</span>
                    <p className="text-sm text-[#4ade80] font-bold">High user retention.</p>
                  </div>
                </div>
                <a className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#c4cdd9] group-hover:border-[#4ade80]/40 group-hover:bg-[#4ade80] group-hover:text-black text-[#1e293b] transition-all shrink-0" href="https://future-investment-planner-iink.vercel.app/" target="_blank" rel="noreferrer">
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
