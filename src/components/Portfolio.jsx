export default function Portfolio() {
  return (
    <section id="work" className="px-8 md:px-16 mb-32 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
        <div>
          <p className="text-[10px] font-bold text-on-surface-variant tracking-widest uppercase mb-4">Portfolio</p>
          <h2 className="flex items-center gap-3">
            <span className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tighter">Selected</span>
            <span className="font-display font-extrabold text-3xl md:text-5xl tracking-tighter gradient-text-v2">Works</span>
          </h2>
        </div>
        <a href="#work" className="text-xs font-bold text-white flex items-center gap-2 group hover:text-primary transition-colors">
          Explore all (14) <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Large Card */}
        <div className="glass-card rounded-3xl overflow-hidden group relative h-[400px] lg:h-[480px]">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" 
            alt="Project Neuro" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d14] via-[#0b0d14]/40 to-transparent p-8 flex flex-col justify-end">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border border-white/10">
                AI Branding
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">Project Neuro</h3>
            <p className="text-sm text-on-surface-variant max-w-sm">Designing the future of cognitive interfaces through motion and light.</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 h-[400px] lg:h-[480px]">
          {/* Top Wide Card */}
          <div className="glass-card rounded-3xl overflow-hidden group relative flex-1">
            <img 
              src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80" 
              alt="Retro Cyber" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d14] to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-display font-bold text-2xl text-white mb-1">Retro Cyber</h3>
              <p className="text-sm text-on-surface-variant">Hardware UI & Interaction Design</p>
            </div>
          </div>
          
          {/* Bottom Split Cards */}
          <div className="flex gap-6 flex-1">
            {/* Left Square */}
            <div className="glass-card rounded-3xl overflow-hidden group relative flex-1">
              <img 
                src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&w=800&q=80" 
                alt="Vivid Dreams" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d14] to-transparent p-6 flex flex-col justify-end">
                <h3 className="font-display font-bold text-lg text-white">Vivid Dreams</h3>
              </div>
            </div>
            
            {/* Right Square */}
            <div className="glass-card rounded-3xl group relative flex-1 p-6 flex flex-col justify-between hover:bg-white/5 transition-colors">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-white">bolt</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white mb-2">Open Source</h3>
                <p className="text-xs text-on-surface-variant">Contributing to the global design ecosystem.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
