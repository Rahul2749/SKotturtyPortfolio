export default function Skills() {
  const tools = [
    { name: "Figma", brandUrl: "https://img.icons8.com/color/144/figma.png" },
    { name: "Adobe Photoshop", brandUrl: "https://img.icons8.com/color/144/adobe-photoshop--v1.png" },
    { name: "Adobe Illustrator", brandUrl: "https://img.icons8.com/color/144/adobe-illustrator--v1.png" },
    { name: "Adobe After Effects", brandUrl: "https://img.icons8.com/color/144/adobe-after-effects--v1.png" },
    { name: "CorelDraw", brandUrl: "https://img.icons8.com/color/144/coreldraw.png" },
    { name: "Canva Pro", brandUrl: "https://img.icons8.com/color/144/canva.png" },
    { name: "Meta Ads Manager", brandUrl: "https://img.icons8.com/color/144/meta.png" },
    { name: "Google Ads", brandUrl: "https://img.icons8.com/color/144/google-ads.png" }
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
            
            {/* Tool Logos */}
            <div className="grid grid-cols-4 md:flex md:flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center place-items-center max-w-5xl mx-auto">
              {tools.map((tool, idx) => (
                <div key={idx} title={tool.name} className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-[#eaeff5] border border-[#c4cdd9] rounded-2xl hover:border-[#93c5fd] hover:bg-[#e2e8f0] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-help group">
                  <img src={tool.brandUrl} alt={tool.name} className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
