import { useState } from "react";
import GetStartedModal from "./GetStartedModal";

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      title: "Website Building",
      icon: "web",
      desc: "High-performance, conversion-focused websites built with modern technologies to turn visitors into loyal customers.",
      items: ["Custom Web Design", "Responsive Development", "E-commerce Solutions", "Performance Optimization", "CMS Integration"]
    },
    {
      title: "SEO & Organic Growth",
      icon: "search",
      desc: "Rank higher, get found faster. We build sustainable search authority through technical SEO, content strategy, and authority signals.",
      items: ["Technical SEO Audits", "Keyword Research & Strategy", "Content Optimization", "Backlink Building", "Local SEO Optimization"]
    },
    {
      title: "Paid Advertising",
      icon: "campaign",
      desc: "Google, Meta, LinkedIn — precision campaigns that maximize every rupee of ad spend with relentless optimization and data-driven targeting.",
      items: ["Google Ads (SEM)", "Meta Ads (FB & IG)", "LinkedIn Ads", "Retargeting Campaigns", "A/B Testing & Optimization"]
    },
    {
      title: "Social Media Management",
      icon: "smartphone",
      desc: "Content calendars, community building, and platform-native creative that converts followers into fans and fans into loyal customers.",
      items: ["Content Strategy", "Community Management", "Influencer Marketing", "Social Listening", "Platform-Specific Creative"]
    },
    {
      title: "Content Marketing",
      icon: "draw",
      desc: "Blogs, video, email sequences, and thought leadership that build trust at scale and attract the right audiences for your brand.",
      items: ["Blog Writing", "Video Production", "Email Marketing", "Whitepapers & eBooks", "Copywriting"]
    },
    {
      title: "Brand Identity & Design",
      icon: "palette",
      desc: "Logos, visual systems, and brand guidelines that make your company impossible to forget — across every digital and physical touchpoint.",
      items: ["Logo Design", "Visual Identity Systems", "Brand Guidelines", "Marketing Collateral", "UI/UX Design"]
    }
  ];

  return (
    <section className="py-section-gap bg-surface-container-lowest/50" id="services">
      <div className="max-w-7xl mx-auto px-container-margin">
        {/* Header */}
        <div className="services-header text-center mb-16 md:mb-24">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-label-sm">OUR EXPERTISE</span>
          <h2 className="font-headline-lg text-4xl md:text-6xl lg:text-7xl font-black text-white mt-6 mb-6 leading-tight">
            Services Built For <br/><span className="text-primary">Exponential Growth.</span>
          </h2>
          <p className="text-outline text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From visibility to conversion, every service we offer is engineered to compound your brand's momentum in the digital universe.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          {services.map((service, idx) => (
            <div key={idx} className="service-card glass p-8 md:p-10 rounded-[2rem] project-card relative overflow-hidden group flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-3xl text-primary">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-outline leading-relaxed mb-8">{service.desc}</p>
              
              <ul className="space-y-4 mt-auto">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="service-cta bg-primary rounded-[2.5rem] p-12 md:p-16 text-center shadow-[0_0_80px_rgba(165,231,255,0.2)]">
          <h3 className="text-4xl md:text-5xl font-black text-on-primary-fixed-variant mb-6 tracking-tight">Ready to Scale Your Brand?</h3>
          <p className="text-on-primary-fixed-variant/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Let's build a strategy that takes your business from earth to orbit.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-white text-on-primary-fixed-variant font-bold text-lg px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300"
          >
            Get Started Now <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
      
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
