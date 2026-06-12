export default function Skills() {
  const tools = [
    { name: "Figma", brandUrl: "https://cdn.simpleicons.org/figma" },
    { name: "Adobe Photoshop", brandUrl: "https://cdn.simpleicons.org/adobephotoshop" },
    { name: "Illustrator", brandUrl: "https://cdn.simpleicons.org/adobeillustrator" },
    { name: "After Effects", brandUrl: "https://cdn.simpleicons.org/adobeaftereffects" },
    { name: "Canva Pro", brandUrl: "https://cdn.simpleicons.org/canva" },
    { name: "Meta Ads Manager", brandUrl: "https://cdn.simpleicons.org/meta" },
    { name: "UI/UX Strategy", icon: "psychology" },
    { name: "Branding Design", icon: "branding_watermark" },
    { name: "Social Media Design", icon: "share" },
    { name: "Website Design", icon: "web" }
  ];

  return (
    <section className="py-section-gap px-container-margin relative overflow-hidden bg-[#edf0f6]" id="toolkit">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdHRlcm4gaWQ9InNtYWxsR3JpZCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMTAgMEwwIDBMMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuMDMpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9InVybCgjc21hbGxHcmlkKSIvPjxwYXRoIGQ9Ik00MCAwTDAgMEwwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMCwwLDAsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50 pointer-events-none"></div>
      
      {/* Ambient Glow */}
      <div className="absolute -top-[20%] right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col gap-16 mb-16">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center">
            <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[11px] mb-4 border border-secondary/20 bg-secondary/5 px-4 py-1.5 rounded-full inline-block">Arsenal</span>
            <h2 className="font-headline-lg text-[40px] md:text-[56px] text-on-surface leading-[1.1] mb-6">
              The <span className="italic font-normal text-gradient">Creative Suite</span>
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
              A strategic blend of UI/UX design, branding, graphic design, and performance marketing crafted to build visually powerful and conversion-focused digital experiences.
            </p>
            
            {/* Tool Pills */}
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {tools.map((tool, idx) => (
                <div key={idx} className="flex items-center gap-2 px-5 py-2.5 bg-[#eaeff5] border border-[#c4cdd9] rounded-full text-xs font-semibold text-[#475569] hover:text-[#1e293b] hover:border-[#93c5fd] hover:bg-[#e2e8f0] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default group">
                  {tool.brandUrl ? (
                    <img src={tool.brandUrl} alt={tool.name} className="w-4 h-4 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                  ) : (
                    <span className="material-symbols-outlined text-[16px] text-[#94a3b8] group-hover:text-primary transition-colors">{tool.icon}</span>
                  )}
                  {tool.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
