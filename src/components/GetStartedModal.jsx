import { useEffect, useState } from "react";

export default function GetStartedModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    service: "",
    message: ""
  });

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

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-md md:max-w-lg bg-[#1a1f2f] rounded-2xl shadow-2xl border border-white/10 flex flex-col max-h-full">
        
        {/* Fixed Header */}
        <div className="p-5 md:p-6 pb-3 md:pb-4 flex-shrink-0 relative border-b border-white/5">
          <button 
            onClick={onClose}
            className="absolute top-5 md:top-6 right-5 md:right-6 text-on-surface-variant hover:text-white transition-colors bg-white/5 p-1.5 rounded-full hover:bg-white/10 flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
          <h3 className="text-xl md:text-2xl font-bold text-white pr-10">Get Started</h3>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-5 md:p-6 pt-4 overflow-y-auto flex-1 min-h-0">
          <form className="space-y-3.5" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-outline uppercase tracking-wider ml-1">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-[#25293a] border border-white/5 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-outline-variant focus:outline-none focus:border-primary/50 transition-colors"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-outline uppercase tracking-wider ml-1">Email</label>
              <input 
                type="email" 
                className="w-full bg-[#25293a] border border-white/5 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-outline-variant focus:outline-none focus:border-primary/50 transition-colors"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-outline uppercase tracking-wider ml-1">Mobile</label>
              <input 
                type="tel" 
                className="w-full bg-[#25293a] border border-white/5 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-outline-variant focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-outline uppercase tracking-wider ml-1">Service</label>
              <div className="relative">
                <select 
                  className="w-full bg-[#25293a] border border-white/5 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-outline-variant focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>Select a service...</option>
                  <option value="website">Website Building</option>
                  <option value="seo">SEO & Organic Growth</option>
                  <option value="ads">Paid Advertising</option>
                  <option value="social">Social Media Management</option>
                  <option value="content">Content Marketing</option>
                  <option value="branding">Brand Identity & Design</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">expand_more</span>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-outline uppercase tracking-wider ml-1">Message</label>
              <textarea 
                rows="2"
                className="w-full bg-[#25293a] border border-white/5 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-outline-variant focus:outline-none focus:border-primary/50 transition-colors resize-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-primary text-on-primary-fixed-variant font-bold text-base py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform mt-5 shadow-[0_0_15px_rgba(165,231,255,0.15)]"
            >
              Send Message <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
