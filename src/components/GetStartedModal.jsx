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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-[#1a1f2f] rounded-3xl p-6 md:p-8 shadow-2xl border border-white/10 max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-on-surface-variant hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Get Started</h3>

        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-outline uppercase tracking-wider">Full Name</label>
            <input 
              type="text" 
              placeholder="Arjun Sharma"
              className="w-full bg-[#25293a] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-outline-variant focus:outline-none focus:border-primary/50 transition-colors"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-bold text-outline uppercase tracking-wider">Email</label>
            <input 
              type="email" 
              placeholder="arjun@company.com"
              className="w-full bg-[#25293a] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-outline-variant focus:outline-none focus:border-primary/50 transition-colors"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-bold text-outline uppercase tracking-wider">Mobile</label>
            <input 
              type="tel" 
              placeholder="+91 99511 12341"
              className="w-full bg-[#25293a] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-outline-variant focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-bold text-outline uppercase tracking-wider">Service</label>
            <div className="relative">
              <select 
                className="w-full bg-[#25293a] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-outline-variant focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                required
              >
                <option value="" disabled selected>Select a service...</option>
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

          <div className="space-y-1">
            <label className="text-[11px] font-bold text-outline uppercase tracking-wider">Message</label>
            <textarea 
              rows="4"
              placeholder="Tell us about your goals..."
              className="w-full bg-[#25293a] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-outline-variant focus:outline-none focus:border-primary/50 transition-colors resize-none"
              required
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-primary text-on-primary-fixed-variant font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mt-6"
          >
            Send Message <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </form>
      </div>
    </div>
  );
}
