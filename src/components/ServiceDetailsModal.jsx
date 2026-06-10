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
      <div className="relative w-full max-w-2xl md:max-w-4xl bg-[#1a1f2f] rounded-[2rem] shadow-2xl border border-white/10 flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Fixed Header */}
        <div className="p-6 md:p-8 flex-shrink-0 relative border-b border-white/5 bg-gradient-to-r from-primary/10 to-transparent">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 md:top-8 md:right-8 text-on-surface-variant hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10 flex items-center justify-center z-10"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-2xl text-primary">{service.icon}</span>
            </div>
            <div>
              <h2 id="service-modal-title" className="text-2xl md:text-4xl font-black text-white">{service.title}</h2>
            </div>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 md:p-10 overflow-y-auto flex-1 custom-scrollbar">
          
          <div className="space-y-10">
            {/* Intro */}
            <div>
              <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed mb-4">
                {service.subtitle}
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                {service.introDesc}
              </p>
            </div>

            {/* Sections Loop */}
            {service.sections && service.sections.map((section, idx) => (
              <div key={idx} className="glass rounded-[1.5rem] p-6 md:p-8 border border-white/5">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary/50"></span>
                  {section.heading}
                </h3>
                
                {/* Paragraphs */}
                {section.paragraphs && (
                  <div className="space-y-4">
                    {section.paragraphs.map((para, i) => (
                      <p key={i} className="text-on-surface-variant leading-relaxed">{para}</p>
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
                          <h4 className="text-white font-bold mb-1">{step.title}</h4>
                          <p className="text-on-surface-variant text-sm">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* List Items */}
                {section.listItems && (
                  <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {section.listItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-on-surface-variant">
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
                      <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* Fixed Footer with Get Started Button */}
        <div className="p-6 md:p-8 flex-shrink-0 border-t border-white/5 bg-surface-container/50 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold text-lg">Ready to elevate your {service.title}?</h4>
            <p className="text-on-surface-variant text-sm mt-1">Let's discuss how we can achieve your goals.</p>
          </div>
          <button 
            onClick={() => onGetStarted(service.title)}
            className="w-full sm:w-auto bg-primary text-on-primary-fixed-variant font-bold text-base px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(165,231,255,0.2)]"
          >
            Get Started <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
        
      </div>
    </div>
  );
}
