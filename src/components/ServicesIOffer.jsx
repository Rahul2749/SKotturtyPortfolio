import { useState } from "react";
import GetStartedModal from "./GetStartedModal";

export default function ServicesIOffer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const services = [
    {
      title: "UI/UX Design",
      icon: "design_services",
      desc: "Designing intuitive mobile apps and websites with modern user experiences that improve engagement and conversion."
    },
    {
      title: "Graphic Design",
      icon: "palette",
      desc: "Creating premium visual designs for brands, social media, packaging, and marketing campaigns."
    },
    {
      title: "SEO Optimization",
      icon: "troubleshoot",
      desc: "Optimizing websites for better Google rankings, visibility, traffic, and organic growth."
    },
    {
      title: "Meta Ads",
      icon: "campaign",
      desc: "Running high-converting Facebook & Instagram ad campaigns focused on leads, sales, and brand awareness."
    },
    {
      title: "Google Ads",
      icon: "ads_click",
      desc: "Creating strategic Google ad campaigns that drive targeted traffic and maximize ROI."
    },
    {
      title: "Website Design",
      icon: "devices",
      desc: "Building modern responsive websites optimized for performance, branding, and conversion."
    }
  ];

  const handleOpenModal = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  return (
    <section className="py-section-gap bg-surface-container-lowest/50" id="services-i-offer">
      <div className="max-w-7xl mx-auto px-container-margin">
        {/* Header */}
        <div className="services-header text-center mb-12 md:mb-16">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-label-sm">Services I Offer</span>
          <h2 className="font-headline-lg text-4xl md:text-6xl lg:text-7xl font-black text-white mt-6 mb-6 leading-tight">
            Services I <span className="text-primary">Offer.</span>
          </h2>
          <p className="text-outline text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From visual branding to performance marketing, I create digital experiences that attract, engage, and convert.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              onClick={() => handleOpenModal(service.title)}
              className="service-card glass p-8 md:p-10 rounded-[2rem] project-card relative overflow-hidden group flex flex-col h-full border border-white/5 hover:border-primary/30 transition-colors cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-3xl text-primary">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-outline leading-relaxed flex-grow">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} initialService={selectedService} />
    </section>
  );
}
