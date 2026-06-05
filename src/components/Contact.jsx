export default function Contact() {
  return (
    <section id="contact" className="px-8 md:px-16 mb-32 max-w-7xl mx-auto">
      <div className="glass-card rounded-[3rem] py-24 px-8 flex flex-col items-center text-center bg-[#0d121c]/50">
        <h2 className="flex flex-col md:flex-row items-center gap-3 mb-6">
          <span className="font-display font-extrabold text-4xl md:text-5xl text-white tracking-tighter">Ready to start</span>
          <span className="font-display italic font-light text-4xl md:text-5xl text-on-surface-variant tracking-tight">a project together?</span>
        </h2>
        
        <p className="font-body text-sm text-on-surface-variant max-w-xl mx-auto mb-10 leading-relaxed">
          Currently accepting new creative partnerships for Q4 2024. Let's build something that stands outside the ordinary.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="pill-button bg-white text-[#0b0d14] hover:bg-[#a5e7ff] transition-colors">
            Send an inquiry
          </button>
          <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors group">
            <span className="material-symbols-outlined text-white text-sm group-hover:scale-110 transition-transform">mail</span>
          </button>
          <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors group">
            <span className="material-symbols-outlined text-white text-sm group-hover:scale-110 transition-transform">share</span>
          </button>
        </div>
      </div>
    </section>
  );
}
