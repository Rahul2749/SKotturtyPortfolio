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
      desc: "Designing intuitive mobile apps and websites with modern user experiences that improve engagement and conversion.",
      subtitle: "Crafting digital experiences that users love.",
      introDesc: "Our UI/UX design service focuses on creating user-centric, aesthetically pleasing, and highly functional interfaces. We bridge the gap between user needs and business goals through research-driven design.",
      sections: [
        {
          heading: "What We Do",
          listItems: ["User Research & Personas", "Wireframing & Prototyping", "User Interface Design", "User Experience Optimization", "Usability Testing", "Design Systems"],
          listIcon: "check"
        },
        {
          heading: "Our Process",
          processSteps: [
            { num: "01", title: "Research & Discovery", desc: "Understanding the user and business requirements." },
            { num: "02", title: "Wireframing", desc: "Creating the structural blueprint of the application." },
            { num: "03", title: "Visual Design", desc: "Applying branding, colors, and typography." },
            { num: "04", title: "Prototyping & Testing", desc: "Building interactive models and testing with real users." }
          ]
        },
        {
          heading: "Tools We Use",
          tools: ["Figma", "Adobe XD", "Sketch", "InVision", "Framer"]
        }
      ]
    },
    "Graphic Design": {
      title: "Graphic Design",
      icon: "palette",
      desc: "Creating premium visual designs for brands, social media, packaging, and marketing campaigns.",
      subtitle: "Visually communicating your brand's unique story.",
      introDesc: "We create stunning, high-quality visual assets that capture attention and communicate your brand's message effectively across all mediums.",
      sections: [
        {
          heading: "What We Do",
          listItems: ["Logo & Identity Design", "Social Media Graphics", "Marketing Collateral", "Packaging Design", "Illustration", "Brand Guidelines"],
          listIcon: "check"
        },
        {
          heading: "Why It Matters",
          paragraphs: ["Great design is more than just looking good. It builds brand recognition, establishes trust, and helps you stand out in a crowded market."]
        },
        {
          heading: "Tools We Use",
          tools: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Canva Pro", "CorelDRAW"]
        }
      ]
    },
    "SEO Optimization": {
      title: "SEO Optimization",
      icon: "troubleshoot",
      desc: "Optimizing websites for better Google rankings, visibility, traffic, and organic growth.",
      subtitle: "Optimizing your digital presence for higher visibility and organic growth.",
      introDesc: "We help businesses improve their search engine rankings through strategic SEO techniques that drive traffic, increase visibility, and generate long-term results.",
      sections: [
        {
          heading: "What is SEO Optimization?",
          paragraphs: [
            "SEO (Search Engine Optimization) is the process of improving a website’s visibility on search engines like Google. It helps your business appear in front of the right audience when they search for products or services related to your brand.",
            "A strong SEO strategy increases organic traffic, builds trust, and improves online growth."
          ]
        },
        {
          heading: "What We Do",
          listItems: [
            "On-Page SEO", "Off-Page SEO", "Technical SEO", "Keyword Research", 
            "Website SEO Audit", "Competitor Analysis", "Content Optimization", 
            "Local SEO", "Speed Optimization", "Google Search Console Setup", 
            "Meta Tags Optimization", "SEO Strategy Planning"
          ],
          listIcon: "check"
        },
        {
          heading: "Why SEO Matters",
          paragraphs: ["Good SEO helps businesses:"],
          listItems: [
            "Rank higher on Google", "Increase organic website traffic", "Reach the right audience",
            "Improve online visibility", "Generate quality leads", "Build long-term brand trust",
            "Increase conversions and sales"
          ],
          listIcon: "trending_up"
        },
        {
          heading: "Our SEO Process",
          processSteps: [
            { num: "01", title: "Website Audit", desc: "Analyzing your website performance and SEO health." },
            { num: "02", title: "Keyword Research", desc: "Finding high-performing and relevant search keywords." },
            { num: "03", title: "Optimization", desc: "Improving website structure, content, and technical SEO." },
            { num: "04", title: "Strategy Implementation", desc: "Building effective SEO strategies for growth." },
            { num: "05", title: "Monitoring & Growth", desc: "Tracking rankings, traffic, and ongoing improvements." }
          ]
        },
        {
          heading: "Tools We Use",
          tools: ["Google Analytics", "Google Search Console", "SEMrush", "Ahrefs", "Ubersuggest", "Screaming Frog"]
        },
        {
          heading: "Results You Can Expect",
          listItems: [
            "Higher Google Rankings", "Increased Organic Traffic", "Better Online Visibility", 
            "Quality Lead Generation", "Long-Term Business Growth"
          ],
          listIcon: "done_all"
        }
      ]
    },
    "Meta Ads": {
      title: "Meta Ads",
      icon: "campaign",
      desc: "Running high-converting Facebook & Instagram ad campaigns focused on leads, sales, and brand awareness.",
      subtitle: "Targeted social advertising to scale your business.",
      introDesc: "We design, execute, and manage highly profitable Meta (Facebook & Instagram) ad campaigns tailored to your specific business objectives.",
      sections: [
        {
          heading: "What We Do",
          listItems: ["Campaign Strategy & Setup", "Audience Targeting", "Ad Creative & Copywriting", "A/B Testing", "Pixel Setup & Tracking", "Retargeting Campaigns"],
          listIcon: "check"
        },
        {
          heading: "Our Process",
          processSteps: [
            { num: "01", title: "Strategy", desc: "Defining goals, budgets, and target audiences." },
            { num: "02", title: "Creation", desc: "Developing compelling ad creatives and copy." },
            { num: "03", title: "Launch & Test", desc: "Deploying campaigns and testing variations." },
            { num: "04", title: "Scale", desc: "Optimizing top performers for maximum ROI." }
          ]
        }
      ]
    },
    "Google Ads": {
      title: "Google Ads",
      icon: "ads_click",
      desc: "Creating strategic Google ad campaigns that drive targeted traffic and maximize ROI.",
      subtitle: "Capture high-intent traffic precisely when they search.",
      introDesc: "We manage Google Ads campaigns that place your business at the top of search results, driving high-quality traffic that is ready to convert.",
      sections: [
        {
          heading: "What We Do",
          listItems: ["Search Network Campaigns", "Display Ads", "Performance Max", "Shopping Campaigns", "YouTube Video Ads", "Keyword Optimization"],
          listIcon: "check"
        },
        {
          heading: "Results You Can Expect",
          listItems: ["Lower Cost-Per-Click (CPC)", "Higher Conversion Rates", "Increased ROI", "Predictable Lead Generation"],
          listIcon: "done_all"
        }
      ]
    },
    "Website Design": {
      title: "Website Design",
      icon: "devices",
      desc: "Building modern responsive websites optimized for performance, branding, and conversion.",
      subtitle: "Your digital storefront, engineered for success.",
      introDesc: "We build fast, secure, and fully responsive websites that serve as the foundation of your digital marketing efforts.",
      sections: [
        {
          heading: "What We Do",
          listItems: ["Custom Web Development", "E-Commerce Solutions", "Landing Page Design", "CMS Integration (WordPress, etc.)", "Website Maintenance", "Performance Optimization"],
          listIcon: "check"
        },
        {
          heading: "Our Process",
          processSteps: [
            { num: "01", title: "Planning", desc: "Sitemaps and technical architecture." },
            { num: "02", title: "Design", desc: "High-fidelity mockups and visual direction." },
            { num: "03", title: "Development", desc: "Clean coding and CMS integration." },
            { num: "04", title: "Launch", desc: "Quality assurance, testing, and deployment." }
          ]
        },
        {
          heading: "Tools We Use",
          tools: ["React", "Next.js", "Tailwind CSS", "WordPress", "Webflow", "Shopify"]
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
