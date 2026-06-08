export default function Skills() {
  const tools = [
    { name: "Figma", icon: "draw" },
    { name: "Adobe Photoshop", icon: "photo_camera" },
    { name: "Illustrator", icon: "brush" },
    { name: "After Effects", icon: "movie_edit" },
    { name: "Canva Pro", icon: "design_services" },
    { name: "Meta Ads Manager", icon: "campaign" },
    { name: "UI/UX Strategy", icon: "psychology" },
    { name: "Branding Design", icon: "branding_watermark" },
    { name: "Social Media Design", icon: "share" },
    { name: "Website Design", icon: "web" }
  ];

  return (
    <section className="py-section-gap px-container-margin relative overflow-hidden" id="toolkit">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdHRlcm4gaWQ9InNtYWxsR3JpZCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMTAgMEwwIDBMMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9InVybCgjc21hbGxHcmlkKSIvPjxwYXRoIGQ9Ik00MCAwTDAgMEwwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50 pointer-events-none"></div>
      
      {/* Ambient Glow */}
      <div className="absolute -top-[20%] right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col gap-16 mb-16">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center">
            <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[11px] mb-4 border border-secondary/20 bg-secondary/5 px-4 py-1.5 rounded-full inline-block">Arsenal</span>
            <h2 className="font-headline-lg text-[40px] md:text-[56px] text-white leading-[1.1] mb-6">
              The <span className="italic font-light text-gradient">Creative Suite</span>
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto">
              A strategic blend of UI/UX design, branding, graphic design, and performance marketing crafted to build visually powerful and conversion-focused digital experiences.
            </p>
            
            {/* Tool Pills */}
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {tools.map((tool, idx) => (
                <div key={idx} className="flex items-center gap-2 px-5 py-2.5 bg-[#131620] border border-white/10 rounded-full text-xs font-semibold text-white/80 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all cursor-default group">
                  <span className="material-symbols-outlined text-[16px] text-white/40 group-hover:text-white transition-colors">{tool.icon}</span>
                  {tool.name}
                </div>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* UI/UX Design */}
            <div className="group relative bg-[#131620] rounded-[24px] p-8 border border-white/5 hover:border-primary/40 hover:-translate-y-1 transition-all duration-500 overflow-hidden shadow-2xl flex flex-col h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col gap-5 flex-1">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <span className="material-symbols-outlined text-[28px]">draw</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-3">UI/UX Design</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-light">Designing intuitive, user-centered interfaces that combine aesthetics, usability, and seamless digital experiences.</p>
                </div>
              </div>
            </div>

            {/* Graphic Design */}
            <div className="group relative bg-[#131620] rounded-[24px] p-8 border border-white/5 hover:border-secondary/40 hover:-translate-y-1 transition-all duration-500 overflow-hidden shadow-2xl flex flex-col h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col gap-5 flex-1">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                  <span className="material-symbols-outlined text-[28px]">palette</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-3">Graphic Design</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-light">Creating premium visual identities, social media creatives, branding assets, brochures, posters, and marketing materials.</p>
                </div>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="group relative bg-[#131620] rounded-[24px] p-8 border border-white/5 hover:border-tertiary/40 hover:-translate-y-1 transition-all duration-500 overflow-hidden shadow-2xl flex flex-col h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col gap-5 flex-1">
                <div className="w-14 h-14 rounded-2xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center text-tertiary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <span className="material-symbols-outlined text-[28px]">campaign</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-3">Digital Marketing</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-light">Running high-converting Meta ad campaigns, growth strategies, content marketing, and performance-driven digital promotions.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
