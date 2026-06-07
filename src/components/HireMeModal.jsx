import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function HireMeModal({ isOpen, onClose }) {
  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-md bg-[#1a1f2f] rounded-3xl shadow-2xl border border-white/10 flex flex-col p-8 md:p-10 animate-fade-in-up">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-on-surface-variant hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10 flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Header & Status Indicator */}
        <div className="flex items-center gap-3 mb-6">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Available for Freelance</h3>
        </div>

        {/* Bullet Points */}
        <div className="space-y-4 mb-10 mt-2">
          <div className="flex items-center gap-3 text-on-surface-variant text-lg">
            <span className="text-primary text-xl">✦</span>
            <span>Open for Collaborations</span>
          </div>
          <div className="flex items-center gap-3 text-on-surface-variant text-lg">
            <span className="text-primary text-xl">✦</span>
            <span>Based in India</span>
          </div>
          <div className="flex items-center gap-3 text-on-surface-variant text-lg">
            <span className="text-primary text-xl">✦</span>
            <span>Currently Taking Projects</span>
          </div>
          <div className="flex items-center gap-3 text-on-surface-variant text-lg">
            <span className="text-primary text-xl">✦</span>
            <span>24hr Response Time</span>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
          <p className="text-sm font-bold tracking-widest text-outline uppercase mb-1">Get In Touch</p>
          <a 
            href="mailto:skotturty@gmail.com"
            className="w-full bg-white text-black font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <span className="material-symbols-outlined">mail</span>
            skotturty@gmail.com
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}
