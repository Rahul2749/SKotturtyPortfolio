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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-md md:max-w-lg bg-[#1a1f2f] rounded-[2rem] shadow-2xl border border-white/10 flex flex-col max-h-full">
        
        {/* Fixed Header */}
        <div className="p-6 md:p-8 pb-4 md:pb-6 flex-shrink-0 relative border-b border-white/5">
          <button 
            onClick={onClose}
            className="absolute top-6 md:top-8 right-6 md:right-8 text-on-surface-variant hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10 flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
          <h3 className="text-2xl md:text-3xl font-bold text-white pr-10">Get Started</h3>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-6 md:p-8 pt-6 overflow-y-auto flex-1 min-h-0">
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-outline uppercase tracking-wider ml-1">Full Name</label>
              <input 
                type="text" 
                placeholder="Arjun Sharma"
                className="w-full bg-[#25293a] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-outline-variant focus:outline-none focus:border-primary/50 transition-colors"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-outline uppercase tracking-wider ml-1">Email</label>
              <input 
                type="email" 
                placeholder="arjun@company.com"
                className="w-full bg-[#25293a] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-outline-variant focus:outline-none focus:border-primary/50 transition-colors"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-outline uppercase tracking-wider ml-1">Mobile</label>
              <input 
                type="tel" 
                placeholder="+91 99511 12341"
                className="w-full bg-[#25293a] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-outline-variant focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-outline uppercase tracking-wider ml-1">Service</label>
              <div className="relative">
                <select 
                  className="w-full bg-[#25293a] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-outline-variant focus:outline-none focus:border-primary/50 transition-colors appearance-none"
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
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-outline uppercase tracking-wider ml-1">Message</label>
              <textarea 
                rows="3"
                placeholder="Tell us about your goals..."
                className="w-full bg-[#25293a] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-outline-variant focus:outline-none focus:border-primary/50 transition-colors resize-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-primary text-on-primary-fixed-variant font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform mt-8 shadow-[0_0_20px_rgba(165,231,255,0.15)]"
            >
              Send Message <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
