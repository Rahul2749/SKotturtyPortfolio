import { useState } from "react";
import GetStartedModal from "./GetStartedModal";
import ServiceDetailsModal from "./ServiceDetailsModal";

export default function ServicesIOffer() {
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState("");
  const [selectedServiceData, setSelectedServiceData] = useState(null);

  const serviceDetailsData = {
    "UI/UX Design": {
      title: "UI/UX Design",
      icon: "design_services",
      desc: "Designing seamless experiences that users love.",
      subtitle: "Designing seamless experiences that users love.",
      introDesc: "We create modern, intuitive, and visually engaging digital experiences that enhance usability, strengthen brand perception, and help businesses convert visitors into loyal customers.",
      sections: [
        {
          heading: "What You Get",
          listItems: [
            "User-Friendly Interfaces",
            "Modern & Professional Design",
            "Better User Engagement",
            "Improved Customer Experience",
            "Higher Conversion Rates"
          ],
          listIcon: "check_circle"
        }
      ]
    },
    "Graphic Design": {
      title: "Graphic Design",
      icon: "palette",
      desc: "Creating visuals that make your brand stand out.",
      subtitle: "Creating visuals that make your brand stand out.",
      introDesc: "We design impactful and professional graphics that communicate your brand message, capture attention, and create a lasting impression across digital and print platforms.",
      sections: [
        {
          heading: "What You Get",
          listItems: [
            "Strong Brand Identity",
            "Eye-Catching Visuals",
            "Professional Brand Presence",
            "Higher Audience Engagement",
            "Consistent Brand Recognition"
          ],
          listIcon: "check_circle"
        }
      ]
    },
    "SEO Optimization": {
      title: "SEO Optimization",
      icon: "troubleshoot",
      desc: "Helping your business get found where it matters most.",
      subtitle: "Helping your business get found where it matters most.",
      introDesc: "We optimize your website to improve search engine rankings, increase organic traffic, and attract the right audience. Our SEO strategies focus on long-term growth, visibility, and sustainable online success.",
      sections: [
        {
          heading: "What You Get",
          listItems: [
            "Higher Google Rankings",
            "Increased Organic Traffic",
            "Better Online Visibility",
            "More Qualified Leads",
            "Long-Term Business Growth"
          ],
          listIcon: "check_circle"
        }
      ]
    },
    "Meta Ads": {
      title: "Meta Ads",
      icon: "campaign",
      desc: "Turning attention into action through strategic advertising.",
      subtitle: "Turning attention into action through strategic advertising.",
      introDesc: "We create high-performing Facebook and Instagram ad campaigns that help businesses reach the right audience, generate quality leads, and drive measurable growth through data-driven marketing strategies.",
      sections: [
        {
          heading: "What You Get",
          listItems: [
            "Increased Brand Visibility",
            "Quality Lead Generation",
            "Higher Engagement Rates",
            "More Sales & Conversions",
            "Better Return on Ad Spend"
          ],
          listIcon: "check_circle"
        }
      ]
    },
    "Google Ads": {
      title: "Google Ads",
      icon: "ads_click",
      desc: "Reach customers exactly when they're searching for your services.",
      subtitle: "Reach customers exactly when they're searching for your services.",
      introDesc: "We create and manage high-performing Google Ads campaigns that drive targeted traffic, generate quality leads, and increase conversions. From keyword strategy to campaign optimization, we help your business get measurable results and maximize advertising ROI.",
      sections: [
        {
          heading: "What You Get",
          listItems: [
            "More Qualified Leads",
            "Increased Website Traffic",
            "Higher Conversion Rates",
            "Better Online Visibility",
            "Maximum Return on Ad Spend"
          ],
          listIcon: "check_circle"
        }
      ]
    },
    "Website Design": {
      title: "Website Design",
      icon: "devices",
      desc: "Building websites that turn visitors into customers.",
      subtitle: "Building websites that turn visitors into customers.",
      introDesc: "We design modern, responsive, and user-focused websites that not only look great but also deliver seamless experiences, strengthen brand credibility, and support business growth.",
      explorePortfolio: true,
      sections: [
        {
          heading: "What You Get",
          listItems: [
            "Professional Online Presence",
            "Mobile-Friendly Design",
            "Better User Experience",
            "Increased Engagement",
            "Higher Conversion Potential"
          ],
          listIcon: "check_circle"
        }
      ]
    }
  };

  const servicesList = Object.values(serviceDetailsData);

  const handleCardClick = (serviceTitle) => {
    setSelectedServiceData(serviceDetailsData[serviceTitle]);
    setIsDetailsOpen(true);
  };

  const handleGetStartedFromDetails = (serviceTitle) => {
    setSelectedServiceTitle(serviceTitle);
    setIsDetailsOpen(false);
    setIsGetStartedOpen(true);
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
          {servicesList.map((service, idx) => (
            <div 
              key={idx} 
              onClick={() => handleCardClick(service.title)}
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
      
      <ServiceDetailsModal 
        isOpen={isDetailsOpen} 
        onClose={() => setIsDetailsOpen(false)} 
        service={selectedServiceData}
        onGetStarted={handleGetStartedFromDetails}
      />

      <GetStartedModal 
        isOpen={isGetStartedOpen} 
        onClose={() => setIsGetStartedOpen(false)} 
        initialService={selectedServiceTitle} 
      />
    </section>
  );
}
