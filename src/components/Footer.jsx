export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-8 md:px-16 mt-16 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col">
          <span className="font-body font-bold text-white uppercase tracking-widest text-sm mb-1">
            SAHITI KOTTURTY
          </span>
          <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">
            © 2024 SAHITI KOTTURTY — DESIGNED IN THE NOIR
          </span>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-[10px] font-bold text-on-surface-variant hover:text-white transition-colors">Dribbble</a>
          <a href="#" className="text-[10px] font-bold text-on-surface-variant hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-[10px] font-bold text-on-surface-variant hover:text-white transition-colors">Instagram</a>
          <a href="#" className="text-[10px] font-bold text-on-surface-variant hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
