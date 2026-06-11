import { useEffect } from "react";

export default function ServiceDetailsModal({ isOpen, onClose, onGetStarted, service }) {
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

  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="service-modal-title">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-2xl md:max-w-4xl bg-[#ffffff] rounded-[2rem] shadow-2xl border border-[#d5dce6] flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Fixed Header */}
        <div className="p-6 md:p-8 flex-shrink-0 relative border-b border-[#d5dce6] bg-gradient-to-r from-primary/10 to-transparent">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 md:top-8 md:right-8 text-[#64748b] hover:text-[#0f172a] transition-colors bg-[#e4eaf2] p-2 rounded-full flex items-center justify-center z-10"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#dfeafc] flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-2xl text-primary">{service.icon}</span>
            </div>
            <div>
              <h2 id="service-modal-title" className="text-2xl md:text-4xl font-black text-[#0f172a]">{service.title}</h2>
            </div>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 md:p-10 overflow-y-auto flex-1 custom-scrollbar">
          
          <div className="space-y-10">
            {/* Intro */}
            <div>
              <p className="text-xl md:text-2xl font-light text-[#0f172a] leading-relaxed mb-4">
                {service.subtitle}
              </p>
              <p className="text-[#64748b] leading-relaxed">
                {service.introDesc}
              </p>
            </div>

            {/* Sections Loop */}
            {service.sections && service.sections.map((section, idx) => (
              <div key={idx} className="bg-[#eff2f8] rounded-[1.5rem] p-6 md:p-8 border border-[#d5dce6]">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary/50"></span>
                  {section.heading}
                </h3>
                
                {/* Paragraphs */}
                {section.paragraphs && (
                  <div className="space-y-4">
                    {section.paragraphs.map((para, i) => (
                      <p key={i} className="text-[#64748b] leading-relaxed">{para}</p>
                    ))}
                  </div>
                )}
                
                {/* Process Steps */}
                {section.processSteps && (
                  <div className="mt-6 space-y-6">
                    {section.processSteps.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <span className="text-primary font-black text-2xl opacity-50">{step.num}</span>
                        <div>
                          <h4 className="text-[#0f172a] font-bold mb-1">{step.title}</h4>
                          <p className="text-[#64748b] text-sm">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* List Items */}
                {section.listItems && (
                  <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {section.listItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#334155]">
                        <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">
                          {section.listIcon || "check_circle"}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {/* Tools Grid */}
                {section.tools && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {section.tools.map((tool, i) => (
                      <span key={i} className="px-4 py-2 rounded-full bg-[#eff2f8] border border-[#d5dce6] text-[#64748b] text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {service.explorePortfolio && (
              <div className="flex justify-center mt-10">
                <a 
                  href="#web" 
                  onClick={onClose}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#eff2f8] hover:bg-primary/10 border border-[#d5dce6] hover:border-primary/50 text-[#0f172a] hover:text-primary transition-all font-bold text-base md:text-lg group"
                >
                  <span className="material-symbols-outlined group-hover:scale-110 transition-transform">web</span>
                  Explore Website Design Projects
                </a>
              </div>
            )}
          </div>

        </div>

        {/* Fixed Footer with Get Started Button */}
        <div className="p-6 md:p-8 flex-shrink-0 border-t border-[#d5dce6] bg-[#ffffff] backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-[#0f172a] font-bold text-lg">Ready to elevate your {service.title}?</h4>
            <p className="text-[#94a3b8] text-sm mt-1">Let's discuss how we can achieve your goals.</p>
          </div>
          <button 
            onClick={() => onGetStarted(service.title)}
            className="w-full sm:w-auto bg-primary text-white font-bold text-base px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(165,231,255,0.2)]"
          >
            Get Started <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
        
      </div>
    </div>
  );
}
