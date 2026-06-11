import { useEffect, useState } from "react";

export default function GetStartedModal({ isOpen, onClose, initialService = "" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    service: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  useEffect(() => {
    if (isOpen && initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [isOpen, initialService]);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "4ac0d40e-c895-4afb-b2dd-359b1fc36d75",
          subject: `New Inquiry from ${formData.fullName} — ${formData.service}`,
          from_name: formData.fullName,
          name: formData.fullName,
          email: formData.email,
          mobile: formData.mobile,
          service: formData.service,
          message: formData.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ fullName: "", email: "", mobile: "", service: "", message: "" });
        setTimeout(() => {
          setStatus("idle");
          onClose();
        }, 2500);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-md md:max-w-lg bg-[#ffffff] rounded-2xl shadow-2xl border border-[#c4cdd9] flex flex-col max-h-full">
        
        {/* Fixed Header */}
        <div className="p-5 md:p-6 pb-3 md:pb-4 flex-shrink-0 relative border-b border-[#c4cdd9]">
          <button 
            onClick={onClose}
            className="absolute top-5 md:top-6 right-5 md:right-6 text-on-surface-variant hover:text-[#1e293b] transition-colors bg-[#eaeff5] p-1.5 rounded-full hover:bg-[#d5dce6] flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
          <h3 id="modal-title" className="text-xl md:text-2xl font-bold text-[#1e293b] pr-10">Get Started</h3>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-5 md:p-6 pt-4 overflow-y-auto flex-1 min-h-0">
          <form className="space-y-3.5" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label htmlFor="gs-fullname" className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider ml-1">Full Name</label>
              <input 
                id="gs-fullname"
                type="text" 
                className="w-full bg-[#eaeff5] border border-[#c4cdd9] rounded-lg px-3 py-2.5 text-sm text-[#1e293b] placeholder:text-[#94a3b8] focus:outline-none focus:border-primary/50 transition-colors"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="gs-email" className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider ml-1">Email</label>
              <input 
                id="gs-email"
                type="email" 
                className="w-full bg-[#eaeff5] border border-[#c4cdd9] rounded-lg px-3 py-2.5 text-sm text-[#1e293b] placeholder:text-[#94a3b8] focus:outline-none focus:border-primary/50 transition-colors"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="gs-mobile" className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider ml-1">Mobile</label>
              <input 
                id="gs-mobile"
                type="tel" 
                className="w-full bg-[#eaeff5] border border-[#c4cdd9] rounded-lg px-3 py-2.5 text-sm text-[#1e293b] placeholder:text-[#94a3b8] focus:outline-none focus:border-primary/50 transition-colors"
                value={formData.mobile}
                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="gs-service" className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider ml-1">Service</label>
              <div className="relative">
                <select 
                  id="gs-service"
                  className="w-full bg-[#eaeff5] border border-[#c4cdd9] rounded-lg px-3 py-2.5 text-sm text-[#1e293b] placeholder:text-[#94a3b8] focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="" disabled>Select a service...</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="SEO Optimization">SEO Optimization</option>
                  <option value="Meta Ads">Meta Ads</option>
                  <option value="Google Ads">Google Ads</option>
                  <option value="Website Design">Website Design</option>
                  <option value="Website Building">Website Building</option>
                  <option value="SEO & Organic Growth">SEO & Organic Growth</option>
                  <option value="Paid Advertising">Paid Advertising</option>
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="Content Marketing">Content Marketing</option>
                  <option value="Brand Identity & Design">Brand Identity & Design</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#64748b] pointer-events-none text-[18px]">expand_more</span>
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="gs-message" className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider ml-1">Message</label>
              <textarea 
                id="gs-message"
                rows="2"
                className="w-full bg-[#eaeff5] border border-[#c4cdd9] rounded-lg px-3 py-2.5 text-sm text-[#1e293b] placeholder:text-[#94a3b8] focus:outline-none focus:border-primary/50 transition-colors resize-none"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={status === "loading" || status === "success"}
              className={`w-full font-bold text-base py-3 rounded-lg flex items-center justify-center gap-2 transition-all mt-5 ${
                status === "success" 
                  ? "bg-green-500 text-white" 
                  : status === "error" 
                  ? "bg-red-500/80 text-white" 
                  : "bg-primary text-white hover:scale-[1.02] shadow-[0_0_15px_rgba(79,140,255,0.15)]"
              } ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {status === "loading" && (
                <><span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span> Sending...</>
              )}
              {status === "success" && (
                <><span className="material-symbols-outlined text-[18px]">check_circle</span> Sent Successfully!</>
              )}
              {status === "error" && (
                <><span className="material-symbols-outlined text-[18px]">error</span> Failed — Try Again</>
              )}
              {status === "idle" && (
                <>Send Message <span className="material-symbols-outlined text-[18px]">arrow_forward</span></>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
