import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Setup ScrollTrigger for scroll spy on tabs
    const sections = ['uiux', 'web', 'templates', 'brochure', 'flyer', 'magazine', 'logo', 'animation', 'branding', 'marketing', 'social', 'matte'];
    
    sections.forEach((id) => {
      ScrollTrigger.create({
        trigger: `#${id}`,
        start: 'top center',
        end: 'bottom center',
        onToggle: (self) => {
          if (self.isActive) {
            document.querySelectorAll('.tab-btn').forEach(btn => {
              btn.classList.remove('active', 'bg-on-surface', 'text-background', 'font-bold', 'shadow-md');
              btn.classList.add('bg-on-surface/[0.03]', 'text-on-surface-variant');
            });
            const activeBtn = document.querySelector(`.tab-btn[href="#${id}"]`);
            if (activeBtn) {
              activeBtn.classList.add('active', 'bg-on-surface', 'text-background', 'font-bold', 'shadow-md');
              activeBtn.classList.remove('bg-on-surface/[0.03]', 'text-on-surface-variant');
              // Automatically scroll the tab container to keep the active tab centered without affecting vertical scroll
              const tabsContainer = document.querySelector('.portfolio-tabs');
              if (tabsContainer) {
                const containerRect = tabsContainer.getBoundingClientRect();
                const btnRect = activeBtn.getBoundingClientRect();
                const scrollLeft = activeBtn.offsetLeft - (containerRect.width / 2) + (btnRect.width / 2);
                tabsContainer.scrollTo({ left: scrollLeft, behavior: 'smooth' });
              }
            }
          }
        }
      });
    });

    
    const tabsContainer = document.querySelector('.portfolio-tabs');
    const handleWheel = (e) => {
      // Only capture vertical scrolls to translate to horizontal
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        tabsContainer.scrollLeft += e.deltaY;
      }
    };
    if (tabsContainer) {
      tabsContainer.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (tabsContainer) {
        tabsContainer.removeEventListener('wheel', handleWheel);
      }

      ScrollTrigger.getAll().forEach(t => {
        if (sections.includes(t.trigger?.id)) {
          t.kill();
        }
      });
    };
  }, []);

  return (
    <section className="bg-[#edf0f6] py-section-gap px-container-margin relative" id="works">
      <div className="max-w-7xl mx-auto">
        <div className="sticky top-[72px] md:top-[80px] z-30 bg-background/80 backdrop-blur-xl py-4 md:py-6 px-6 md:px-8 mb-16 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 border border-on-surface/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] rounded-[2rem] mt-8 w-full">
          <div className="portfolio-header">
            <span className="text-primary font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase text-label-sm">Categorized Hub</span>
            <h2 className="font-headline-lg text-[26px] md:text-headline-lg text-on-surface mt-2 leading-tight">Creative <span className="italic font-light text-gradient">Showcase</span></h2>
          </div>
          <div className="portfolio-tabs flex gap-2 overflow-x-auto pb-2 hide-scrollbar flex-nowrap w-full xl:w-auto flex-1 min-w-0 items-center">
            <a href="#uiux" className="tab-btn shrink-0 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[11px] md:text-label-sm transition-all whitespace-nowrap active bg-on-surface text-background font-bold shadow-md">
              UI/UX
            </a>
            <a href="#web" className="tab-btn shrink-0 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[11px] md:text-label-sm transition-all whitespace-nowrap border-transparent bg-on-surface/[0.03] text-on-surface-variant hover:bg-on-surface/5 hover:text-on-surface">
              Web
            </a>
            <a href="#templates" className="tab-btn shrink-0 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[11px] md:text-label-sm transition-all whitespace-nowrap border-transparent bg-on-surface/[0.03] text-on-surface-variant hover:bg-on-surface/5 hover:text-on-surface">
              Website Templates
            </a>
            <a href="#brochure" className="tab-btn shrink-0 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[11px] md:text-label-sm transition-all whitespace-nowrap border-transparent bg-on-surface/[0.03] text-on-surface-variant hover:bg-on-surface/5 hover:text-on-surface">
              Brochure
            </a>
            <a href="#flyer" className="tab-btn shrink-0 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[11px] md:text-label-sm transition-all whitespace-nowrap border-transparent bg-on-surface/[0.03] text-on-surface-variant hover:bg-on-surface/5 hover:text-on-surface">
              Flyer
            </a>
            <a href="#magazine" className="tab-btn shrink-0 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[11px] md:text-label-sm transition-all whitespace-nowrap border-transparent bg-on-surface/[0.03] text-on-surface-variant hover:bg-on-surface/5 hover:text-on-surface">
              Magazine
            </a>
            <a href="#logo" className="tab-btn shrink-0 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[11px] md:text-label-sm transition-all whitespace-nowrap border-transparent bg-on-surface/[0.03] text-on-surface-variant hover:bg-on-surface/5 hover:text-on-surface">
              Logo
            </a>
            <a href="#animation" className="tab-btn shrink-0 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[11px] md:text-label-sm transition-all whitespace-nowrap border-transparent bg-on-surface/[0.03] text-on-surface-variant hover:bg-on-surface/5 hover:text-on-surface">
              Animation
            </a>
            <a href="#branding" className="tab-btn shrink-0 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[11px] md:text-label-sm transition-all whitespace-nowrap border-transparent bg-on-surface/[0.03] text-on-surface-variant hover:bg-on-surface/5 hover:text-on-surface">
              Branding
            </a>
            <a href="#marketing" className="tab-btn shrink-0 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[11px] md:text-label-sm transition-all whitespace-nowrap border-transparent bg-on-surface/[0.03] text-on-surface-variant hover:bg-on-surface/5 hover:text-on-surface">
              Marketing
            </a>
            <a href="#social" className="tab-btn shrink-0 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[11px] md:text-label-sm transition-all whitespace-nowrap border-transparent bg-on-surface/[0.03] text-on-surface-variant hover:bg-on-surface/5 hover:text-on-surface">
              Social Media
            </a>
            <a href="#matte" className="tab-btn shrink-0 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[11px] md:text-label-sm transition-all whitespace-nowrap border-transparent bg-on-surface/[0.03] text-on-surface-variant hover:bg-on-surface/5 hover:text-on-surface">
              Matte Painting
            </a>
          </div>
        </div>

        <div className="space-y-16">
          {/* Section: UI/UX Projects */}
          <div className="portfolio-section scroll-mt-48" id="uiux">
            <h3 className="text-headline-lg font-display-md text-on-surface mb-6 px-2">UI/UX Design</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass rounded-[2.5rem] p-1 overflow-hidden project-card">
              <div className="bg-surface-container rounded-[2.4rem] aspect-video md:aspect-auto md:h-[340px] flex flex-col items-center justify-center relative overflow-hidden group">
                <img alt="UI/UX Design 1" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-1000" src="/uiux_1.jpeg" loading="lazy"/>
                <div className="z-10 text-center p-6 bg-background/50 backdrop-blur-sm rounded-2xl m-4 mt-auto w-11/12 border border-on-surface/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h4 className="text-[#1e293b] font-bold text-headline-sm">FinTech Mobile App</h4>
                  <p className="text-on-card-variant mt-1 text-xs">Modern banking dashboard and user flows.</p>
                </div>
              </div>
            </div>
            <div className="glass rounded-[2.5rem] p-1 overflow-hidden project-card">
              <div className="bg-surface-container rounded-[2.4rem] aspect-video md:aspect-auto md:h-[340px] flex flex-col items-center justify-center relative overflow-hidden group">
                <img alt="UI/UX Design 2" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-1000" src="/uiux_2.jpeg" loading="lazy"/>
                <div className="z-10 text-center p-6 bg-background/50 backdrop-blur-sm rounded-2xl m-4 mt-auto w-11/12 border border-on-surface/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h4 className="text-[#1e293b] font-bold text-headline-sm">Crypto Platform UI</h4>
                  <p className="text-on-card-variant mt-1 text-xs">Modern Web3 website and app design.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Section: Website Projects */}
          <div className="portfolio-section scroll-mt-48" id="web">
            <h3 className="text-headline-lg font-display-md text-on-surface mb-6 px-2">Web Development</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project: Shape2Real */}
          <div className="glass rounded-[2rem] overflow-hidden group border border-on-surface/10 project-card">
            <div className="aspect-video bg-surface-container overflow-hidden relative group-hover:scale-105 transition-all duration-700">
              <iframe src="https://shape2-real-web.vercel.app/" title="Shape2Real" loading="lazy" className="w-[200%] h-[200%] absolute top-0 left-0 origin-top-left scale-50 pointer-events-none border-none bg-white"></iframe>
            </div>
            <div className="p-8">
              <h4 className="text-[#1e293b] font-bold text-headline-md mb-2">Shape2Real</h4>
              <p className="text-on-card-variant text-body-sm mb-4">A minimalist architectural portfolio with scroll-driven interactions.</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-secondary font-bold text-label-sm uppercase">Premium UX</span>
                <a href="https://shape2-real-web.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#1e293b] text-xs px-4 py-2 border border-[#c4cdd9] rounded-full hover:bg-[#d5dce6] transition-colors cursor-pointer">Live Website</a>
              </div>
            </div>
          </div>
          {/* Project: Adenium Heaven */}
          <div className="glass rounded-[2rem] overflow-hidden group border border-on-surface/10 project-card">
            <div className="aspect-video bg-surface-container overflow-hidden relative group-hover:scale-105 transition-all duration-700">
              <iframe src="https://adeniumheaven.in/" title="Adenium Heaven" loading="lazy" className="w-[200%] h-[200%] absolute top-0 left-0 origin-top-left scale-50 pointer-events-none border-none bg-white"></iframe>
            </div>
            <div className="p-8">
              <h4 className="text-[#1e293b] font-bold text-headline-md mb-2">Adenium Heaven</h4>
              <p className="text-on-card-variant text-body-sm mb-4">E-commerce experience for rare botanical collections.</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-tertiary font-bold text-label-sm uppercase">Botanical Store</span>
                <a href="https://adeniumheaven.in/" target="_blank" rel="noopener noreferrer" className="text-[#1e293b] text-xs px-4 py-2 border border-[#c4cdd9] rounded-full hover:bg-[#d5dce6] transition-colors cursor-pointer">Live Website</a>
              </div>
            </div>
          </div>
          {/* Project: Future Investment Planner */}
          <div className="glass rounded-[2rem] overflow-hidden group border border-on-surface/10 project-card">
            <div className="aspect-video bg-surface-container overflow-hidden relative group-hover:scale-105 transition-all duration-700">
              <iframe src="https://future-investment-planner-iink.vercel.app/" title="Future Investment Planner" loading="lazy" className="w-[200%] h-[200%] absolute top-0 left-0 origin-top-left scale-50 pointer-events-none border-none bg-white"></iframe>
            </div>
            <div className="p-8">
              <h4 className="text-[#1e293b] font-bold text-headline-md mb-2">Future Investment Planner</h4>
              <p className="text-on-card-variant text-body-sm mb-4">Goal: Modernize wealth management for Gen Z with interactive data viz.</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-primary font-bold text-label-sm uppercase">Desktop/Mobile</span>
                <a href="https://future-investment-planner-iink.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#1e293b] text-xs px-4 py-2 border border-[#c4cdd9] rounded-full hover:bg-[#d5dce6] transition-colors cursor-pointer">Live Website</a>
              </div>
            </div>
          </div>
          </div>
        </div>

          {/* Section: Website Templates */}
          <div className="portfolio-section scroll-mt-48" id="templates">
            <h3 className="text-headline-lg font-display-md text-on-surface mb-6 px-2">Website Templates</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              <div className="glass rounded-3xl p-1 project-card overflow-hidden">
                <img src="/template_part_1.webp" className="w-full h-auto rounded-[1.3rem] hover:scale-105 transition-transform duration-700" alt="Casino Template Header" loading="lazy"/>
              </div>
              <div className="glass rounded-3xl p-1 project-card overflow-hidden">
                <img src="/template_part_2.webp" className="w-full h-auto rounded-[1.3rem] hover:scale-105 transition-transform duration-700" alt="Casino Template Games" loading="lazy"/>
              </div>
              <div className="glass rounded-3xl p-1 project-card overflow-hidden">
                <img src="/template_part_3.webp" className="w-full h-auto rounded-[1.3rem] hover:scale-105 transition-transform duration-700" alt="Casino Template History" loading="lazy"/>
              </div>
              <div className="glass rounded-3xl p-1 project-card overflow-hidden">
                <img src="/template_part_4.webp" className="w-full h-auto rounded-[1.3rem] hover:scale-105 transition-transform duration-700" alt="Casino Template FAQ" loading="lazy"/>
              </div>
              <div className="glass rounded-3xl p-1 project-card overflow-hidden">
                <img src="/template_part_5.webp" className="w-full h-auto rounded-[1.3rem] hover:scale-105 transition-transform duration-700" alt="Casino Template Footer" loading="lazy"/>
              </div>
            </div>
          </div>

          {/* Section: Brochure */}
          <div className="portfolio-section scroll-mt-48" id="brochure">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 px-2 gap-4">
              <h3 className="text-headline-lg font-display-md text-on-surface">Brochure Design</h3>
              <a href="/colorful_jewelry_catalog_brochure.pdf" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_4px_16px_rgba(79,140,255,0.12)] project-card">
                View PDF Catalog <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {['boucher_11.jpeg', 'boucher_12.jpeg', 'boucher_13.jpeg', 'boucher_14.jpeg'].map((brochure, idx) => (
                <div onClick={() => setSelectedImage(`/${brochure}`)} key={idx} className="glass rounded-[2.5rem] p-1 project-card overflow-hidden w-full aspect-[4/3] flex flex-col group cursor-pointer">
                  <div className="w-full h-full rounded-[2.4rem] overflow-hidden relative bg-surface-container flex items-center justify-center">
                    <img src={`/${brochure}`} alt={`Brochure Page ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-4xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">open_in_new</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Flyer */}
          <div className="portfolio-section scroll-mt-48" id="flyer">
            <h3 className="text-headline-lg font-display-md text-on-surface mb-6 px-2">Flyer Design</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {['10', '20'].map((num) => (
                <div key={num} className="glass rounded-[2.5rem] p-1 project-card overflow-hidden w-full h-[500px] md:h-[600px] flex flex-col">
                  <div className="w-full h-full rounded-[2.4rem] overflow-hidden relative bg-surface-container group flex items-center justify-center">
                    <img src={`/flyer${num}.png`} alt={`Flyer ${num}`} className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Magazine */}
          <div className="portfolio-section scroll-mt-48" id="magazine">
            <h3 className="text-headline-lg font-display-md text-on-surface mb-6 px-2">Magazine Design</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass rounded-[2.5rem] p-1 project-card overflow-hidden w-full h-auto flex flex-col">
                <div className="w-full h-full rounded-[2.4rem] overflow-hidden relative bg-surface-container group flex items-center justify-center">
                  <img src="/magazine.jpeg" alt="Magazine 1" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
              </div>
              <div className="glass rounded-[2.5rem] p-1 project-card overflow-hidden w-full h-auto flex flex-col">
                <div className="w-full h-full rounded-[2.4rem] overflow-hidden relative bg-surface-container group flex items-center justify-center">
                  <img src="/magazine2_new.jpeg" alt="Magazine 2" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
              </div>
            </div>
          </div>

          {/* Section: Logo */}
          <div className="portfolio-section scroll-mt-48" id="logo">
            <h3 className="text-headline-lg font-display-md text-on-surface mb-6 px-2">Logo Design</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {['pawanJew_logo2.jpeg', 'logo_12.jpeg', 'logo_aden.jpeg', 'logo_14.jpeg', 'unique_logo2.jpeg'].map((logo, idx) => (
                <div onClick={() => setSelectedImage(`/${logo}`)} key={idx} className="glass rounded-[1.5rem] md:rounded-[2.5rem] p-1 project-card overflow-hidden w-full aspect-[4/3] flex flex-col group cursor-pointer">
                  <div className="w-full h-full rounded-[1.4rem] md:rounded-[2.4rem] overflow-hidden relative bg-surface-container flex items-center justify-center">
                    <img src={`/${logo}`} alt={`Logo ${idx+1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-4xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">open_in_new</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Animation */}
          <div className="portfolio-section scroll-mt-48" id="animation">
            <h3 className="text-headline-lg font-display-md text-on-surface mb-6 px-2">Animation</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass rounded-[2.5rem] p-1 overflow-hidden project-card">
              <div className="bg-surface-container rounded-[2.4rem] aspect-video md:aspect-auto md:h-[340px] flex flex-col items-center justify-center relative overflow-hidden group">
                <img alt="Kids Animation" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-1000" src="/animation_2.webp" loading="lazy"/>
                <div className="z-10 text-center p-6 bg-background/50 backdrop-blur-sm rounded-2xl m-4 mt-auto w-11/12 border border-on-surface/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h4 className="text-[#1e293b] font-bold text-headline-sm">Kids Animation</h4>
                  <p className="text-on-card-variant mt-1 text-xs">Vibrant environments and character storytelling.</p>
                </div>
              </div>
            </div>
            <div className="glass rounded-[2.5rem] p-1 overflow-hidden project-card">
              <div className="bg-surface-container rounded-[2.4rem] aspect-video md:aspect-auto md:h-[340px] flex flex-col items-center justify-center relative overflow-hidden group">
                <img alt="Character Animation" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-1000" src="/animation_1.webp" loading="lazy"/>
                <div className="z-10 text-center p-6 bg-background/50 backdrop-blur-sm rounded-2xl m-4 mt-auto w-11/12 border border-on-surface/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h4 className="text-[#1e293b] font-bold text-headline-sm">Character Animation</h4>
                  <p className="text-on-card-variant mt-1 text-xs">Classic cartoon recreations and concept art.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Section: Branding */}
          <div className="portfolio-section scroll-mt-48" id="branding">
            <h3 className="text-headline-lg font-display-md text-on-surface mb-6 px-2">Branding</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass rounded-[2.5rem] p-1 overflow-hidden project-card">
              <div className="bg-surface-container rounded-[2.4rem] aspect-video md:aspect-auto md:h-[340px] flex flex-col items-center justify-center relative overflow-hidden group">
                <img alt="Business Card Mockups" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-1000" src="/branding_mockup.webp" loading="lazy"/>
                <div className="z-10 text-center p-6 bg-background/50 backdrop-blur-sm rounded-2xl m-4 mt-auto w-11/12 border border-on-surface/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h4 className="text-[#1e293b] font-bold text-headline-sm">Business Card Designs</h4>
                  <p className="text-on-card-variant mt-1 text-xs">Print media and brand identity mockups.</p>
                </div>
              </div>
            </div>
            <div className="glass rounded-[2.5rem] p-1 overflow-hidden project-card">
              <div className="bg-surface-container rounded-[2.4rem] aspect-video md:aspect-auto md:h-[340px] flex flex-col items-center justify-center relative overflow-hidden group">
                <img alt="Lumina Branding Design" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-1000" src="/branding_lumina.jpeg" loading="lazy"/>
                <div className="z-10 text-center p-6 bg-background/50 backdrop-blur-sm rounded-2xl m-4 mt-auto w-11/12 border border-on-surface/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h4 className="text-[#1e293b] font-bold text-headline-sm">Lumina Creative</h4>
                  <p className="text-on-card-variant mt-1 text-xs">Complete brand identity and visual language.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Section: Marketing */}
          <div className="portfolio-section scroll-mt-48" id="marketing">
            <h3 className="text-headline-lg font-display-md text-on-surface mb-6 px-2">Marketing</h3>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 glass rounded-[2.5rem] p-8 space-y-6 project-card">
              <h4 className="text-headline-md text-[#1e293b]">Campaign Analytics</h4>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-label-sm text-outline uppercase">Instagram Engagement</span>
                    <span className="text-primary font-bold">+65%</span>
                  </div>
                  <div className="w-full h-2 bg-[#d5dce6] rounded-full overflow-hidden">
                    <div className="w-[65%] h-full bg-primary shadow-[0_4px_16px_rgba(79,140,255,0.12)]"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-label-sm text-outline uppercase">ROI for Ad Creatives</span>
                    <span className="text-secondary font-bold">3.5x</span>
                  </div>
                  <div className="w-full h-2 bg-[#d5dce6] rounded-full overflow-hidden">
                    <div className="w-[42%] h-full bg-secondary shadow-[0_4px_16px_rgba(255,100,100,0.12)]"></div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-[#d5dce6] p-4 rounded-2xl text-center">
                  <span className="text-xl font-bold text-[#1e293b]">12k+</span>
                  <p className="text-[10px] text-outline uppercase mt-1">Leads</p>
                </div>
                <div className="bg-[#d5dce6] p-4 rounded-2xl text-center">
                  <span className="text-xl font-bold text-[#1e293b]">400%</span>
                  <p className="text-[10px] text-outline uppercase mt-1">Traffic</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 aspect-video md:aspect-auto md:h-full md:min-h-[400px]">
              <div className="glass rounded-[2.5rem] p-1 overflow-hidden project-card h-full w-full relative group">
                <img src="/marketing_mockup.webp" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-700" alt="Social Media Ad Creatives" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                  <h4 className="text-[#1e293b] font-bold text-headline-sm mb-2">Social Media Ad Creatives</h4>
                  <p className="text-on-card-variant text-sm">High-converting product and lifestyle campaigns.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Section: Social Media */}
          <div className="portfolio-section scroll-mt-48" id="social">
            <h3 className="text-headline-lg font-display-md text-on-surface mb-6 px-2">Social Media</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass rounded-[2.5rem] p-4 flex items-center justify-center project-card bg-[#8ebae4] overflow-hidden">
                <img alt="GRE & GMAT Coaching Ad" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 rounded-[1.5rem] shadow-xl" src="/social_1.webp" loading="lazy"/>
              </div>
              <div className="glass rounded-[2.5rem] p-4 flex items-center justify-center project-card bg-white overflow-hidden">
                <img alt="Grow Your Business Meta Ads Graphic" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 rounded-[1.5rem] shadow-xl" src="/social_2.webp" loading="lazy"/>
              </div>
              <div className="glass rounded-[2.5rem] p-4 flex items-center justify-center project-card bg-[#eaeff5] overflow-hidden">
                <img alt="Website Services Digital Ad" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 rounded-[1.5rem] shadow-xl" src="/social_3.webp" loading="lazy"/>
              </div>
            </div>
          </div>

          {/* Section: Matte Painting */}
          <div className="portfolio-section scroll-mt-48" id="matte">
            <h3 className="text-headline-lg font-display-md text-on-surface mb-6 text-center">Matte Painting</h3>
            <div className="glass rounded-[2.5rem] p-1 overflow-hidden project-card w-full max-w-5xl mx-auto">
              <div className="bg-surface-container rounded-[2.4rem] aspect-video flex flex-col items-center justify-center relative overflow-hidden group">
                <img alt="Fantasy Landscape Matte Painting" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-1000" src="/matte_painting.webp" loading="lazy"/>
                <div className="z-10 text-center p-8 bg-background/50 backdrop-blur-sm rounded-2xl m-4 md:m-8 mt-auto w-11/12 md:w-3/4 border border-on-surface/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h4 className="text-[#1e293b] font-bold text-headline-sm mb-2">Fantasy Landscape</h4>
                  <p className="text-on-card-variant text-sm">Digital matte painting, photo manipulation, and compositing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md" role="dialog" aria-modal="true" aria-label="Image preview" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-primary transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm flex items-center justify-center" aria-label="Close preview" onClick={() => setSelectedImage(null)}>
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Fullscreen view" className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl" loading="lazy" />
          </div>
        </div>
      )}
    </section>
  );
}
