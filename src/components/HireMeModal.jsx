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

  const SparkleIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-0.5">
      <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" fill="#A5E7FF" />
    </svg>
  );

  return createPortal(
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#050505]/80 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-[420px] bg-[#161a25] rounded-[24px] shadow-2xl border border-white/5 flex flex-col p-8 md:p-10 animate-fade-in-up">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white rounded-full flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="relative flex h-3 w-3 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22c55e] shadow-[0_0_8px_#22c55e]"></span>
          </div>
          <h3 className="text-[22px] font-bold text-white tracking-tight leading-none">Available for Freelance</h3>
        </div>

        {/* List Items */}
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex items-start gap-3">
            <SparkleIcon />
            <span className="text-white/80 text-[15px] font-medium tracking-wide">Open for Collaborations</span>
          </div>
          <div className="flex items-start gap-3">
            <SparkleIcon />
            <span className="text-white/80 text-[15px] font-medium tracking-wide">Based in India</span>
          </div>
          <div className="flex items-start gap-3">
            <SparkleIcon />
            <span className="text-white/80 text-[15px] font-medium tracking-wide">Currently Taking Projects</span>
          </div>
          <div className="flex items-start gap-3">
            <SparkleIcon />
            <span className="text-white/80 text-[15px] font-medium tracking-wide">24hr Response Time</span>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-4">
          <p className="text-[11px] font-bold tracking-widest text-outline uppercase">Get In Touch</p>
          <a 
            href="mailto:skotturty@gmail.com"
            className="w-full bg-white text-black font-bold text-base h-14 rounded-xl flex items-center justify-center gap-3 hover:scale-[1.02] hover:bg-white/90 transition-all shadow-lg"
          >
            <span className="material-symbols-outlined text-[20px]">mail</span>
            skotturty@gmail.com
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}
