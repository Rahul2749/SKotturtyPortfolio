import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  useEffect(() => {
    // Setup ScrollTrigger for scroll spy on tabs
    const sections = ['uiux', 'web', 'templates', 'brochure', 'flyer', 'magazine', 'animation', 'branding', 'marketing', 'social', 'matte'];
    
    sections.forEach((id) => {
      ScrollTrigger.create({
        trigger: `#${id}`,
        start: 'top center',
        end: 'bottom center',
        onToggle: (self) => {
          if (self.isActive) {
            document.querySelectorAll('.tab-btn').forEach(btn => {
              btn.classList.remove('active', 'border-primary/50', 'text-primary', 'font-bold');
              btn.classList.add('border-white/10', 'text-on-surface-variant');
            });
            const activeBtn = document.querySelector(`.tab-btn[href="#${id}"]`);
            if (activeBtn) {
              activeBtn.classList.add('active', 'border-primary/50', 'text-primary', 'font-bold');
              activeBtn.classList.remove('border-white/10', 'text-on-surface-variant');
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

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (sections.includes(t.trigger?.id)) {
          t.kill();
        }
      });
    };
  }, []);

  return (
    <section className="py-section-gap px-container-margin relative" id="works">
      <div className="max-w-7xl mx-auto">
        <div className="sticky top-[72px] md:top-[80px] z-30 bg-background/90 backdrop-blur-md py-4 mb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 border-b border-white/5 shadow-2xl">
          <div className="portfolio-header">
            <span className="text-primary font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase text-label-sm">Categorized Hub</span>
            <h2 className="font-headline-lg text-[26px] md:text-headline-lg text-white mt-2 leading-tight">Creative <span className="italic font-light text-gradient">Showcase</span></h2>
          </div>
          <div className="portfolio-tabs flex gap-2 overflow-x-auto pb-2 hide-scrollbar flex-nowrap w-full max-w-[calc(100vw-2rem)] md:max-w-full">
            <a href="#uiux" className="tab-btn px-4 md:px-6 py-1.5 md:py-2 rounded-full glass text-[11px] md:text-label-sm transition-all whitespace-nowrap active border-primary/50 text-primary font-bold">
              UI/UX
            </a>
            <a href="#web" className="tab-btn px-4 md:px-6 py-1.5 md:py-2 rounded-full glass text-[11px] md:text-label-sm transition-all whitespace-nowrap border-white/10 text-on-surface-variant hover:text-white">
              Web
            </a>
            <a href="#templates" className="tab-btn px-4 md:px-6 py-1.5 md:py-2 rounded-full glass text-[11px] md:text-label-sm transition-all whitespace-nowrap border-white/10 text-on-surface-variant hover:text-white">
              Website Templates
            </a>
            <a href="#brochure" className="tab-btn px-4 md:px-6 py-1.5 md:py-2 rounded-full glass text-[11px] md:text-label-sm transition-all whitespace-nowrap border-white/10 text-on-surface-variant hover:text-white">
              Brochure
            </a>
            <a href="#flyer" className="tab-btn px-4 md:px-6 py-1.5 md:py-2 rounded-full glass text-[11px] md:text-label-sm transition-all whitespace-nowrap border-white/10 text-on-surface-variant hover:text-white">
              Flyer
            </a>
            <a href="#magazine" className="tab-btn px-4 md:px-6 py-1.5 md:py-2 rounded-full glass text-[11px] md:text-label-sm transition-all whitespace-nowrap border-white/10 text-on-surface-variant hover:text-white">
              Magazine
            </a>
            <a href="#animation" className="tab-btn px-4 md:px-6 py-1.5 md:py-2 rounded-full glass text-[11px] md:text-label-sm transition-all whitespace-nowrap border-white/10 text-on-surface-variant hover:text-white">
              Animation
            </a>
            <a href="#branding" className="tab-btn px-4 md:px-6 py-1.5 md:py-2 rounded-full glass text-[11px] md:text-label-sm transition-all whitespace-nowrap border-white/10 text-on-surface-variant hover:text-white">
              Branding
            </a>
            <a href="#marketing" className="tab-btn px-4 md:px-6 py-1.5 md:py-2 rounded-full glass text-[11px] md:text-label-sm transition-all whitespace-nowrap border-white/10 text-on-surface-variant hover:text-white">
              Marketing
            </a>
            <a href="#social" className="tab-btn px-4 md:px-6 py-1.5 md:py-2 rounded-full glass text-[11px] md:text-label-sm transition-all whitespace-nowrap border-white/10 text-on-surface-variant hover:text-white">
              Social Media
            </a>
            <a href="#matte" className="tab-btn px-4 md:px-6 py-1.5 md:py-2 rounded-full glass text-[11px] md:text-label-sm transition-all whitespace-nowrap border-white/10 text-on-surface-variant hover:text-white">
              Matte Painting
            </a>
          </div>
        </div>

        <div className="space-y-32">
          {/* Section: UI/UX Projects */}
          <div className="portfolio-section scroll-mt-48" id="uiux">
            <h3 className="text-headline-lg font-display-md text-white mb-6 px-2">UI/UX Design</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass rounded-[2.5rem] p-1 overflow-hidden project-card">
              <div className="bg-surface-container rounded-[2.4rem] aspect-video md:aspect-auto md:h-[340px] flex flex-col items-center justify-center relative overflow-hidden group">
                <img alt="Healthy Lifestyle App UI" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-1000" src="/apphome_ui.webp"/>
                <div className="z-10 text-center p-6 bg-background/50 backdrop-blur-sm rounded-2xl m-4 mt-auto w-11/12 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h4 className="text-white font-bold text-headline-sm">FinTech Mobile App</h4>
                  <p className="text-on-surface-variant mt-1 text-xs">Modern banking dashboard and user flows.</p>
                </div>
              </div>
            </div>
            <div className="glass rounded-[2.5rem] p-1 overflow-hidden project-card">
              <div className="bg-surface-container rounded-[2.4rem] aspect-video md:aspect-auto md:h-[340px] flex flex-col items-center justify-center relative overflow-hidden group">
                <img alt="Crypto Website Template" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-1000" src="/crypto_mockup.webp"/>
                <div className="z-10 text-center p-6 bg-background/50 backdrop-blur-sm rounded-2xl m-4 mt-auto w-11/12 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h4 className="text-white font-bold text-headline-sm">Crypto Platform UI</h4>
                  <p className="text-on-surface-variant mt-1 text-xs">Modern Web3 website and app design.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Section: Website Projects */}
          <div className="portfolio-section scroll-mt-48" id="web">
            <h3 className="text-headline-lg font-display-md text-white mb-6 px-2">Web Development</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project: Shape2Real */}
          <div className="glass rounded-[2rem] overflow-hidden group border border-white/10 project-card">
            <div className="aspect-video bg-surface-container overflow-hidden relative group-hover:scale-105 transition-all duration-700">
              <iframe src="https://shape2-real-web.vercel.app/" title="Shape2Real" className="w-[200%] h-[200%] absolute top-0 left-0 origin-top-left scale-50 pointer-events-none border-none bg-white"></iframe>
            </div>
            <div className="p-8">
              <h4 className="text-white font-bold text-headline-md mb-2">Shape2Real</h4>
              <p className="text-on-surface-variant text-body-sm mb-4">A minimalist architectural portfolio with scroll-driven interactions.</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-secondary font-bold text-label-sm uppercase">Premium UX</span>
                <a href="https://shape2-real-web.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white text-xs px-4 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors cursor-pointer">Live Website</a>
              </div>
            </div>
          </div>
          {/* Project: Adenium Heaven */}
          <div className="glass rounded-[2rem] overflow-hidden group border border-white/10 project-card">
            <div className="aspect-video bg-surface-container overflow-hidden relative group-hover:scale-105 transition-all duration-700">
              <iframe src="https://adeniumheaven.in/" title="Adenium Heaven" className="w-[200%] h-[200%] absolute top-0 left-0 origin-top-left scale-50 pointer-events-none border-none bg-white"></iframe>
            </div>
            <div className="p-8">
              <h4 className="text-white font-bold text-headline-md mb-2">Adenium Heaven</h4>
              <p className="text-on-surface-variant text-body-sm mb-4">E-commerce experience for rare botanical collections.</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-tertiary font-bold text-label-sm uppercase">Botanical Store</span>
                <a href="https://adeniumheaven.in/" target="_blank" rel="noopener noreferrer" className="text-white text-xs px-4 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors cursor-pointer">Live Website</a>
              </div>
            </div>
          </div>
          {/* Project: Future Investment Planner */}
          <div className="glass rounded-[2rem] overflow-hidden group border border-white/10 project-card">
            <div className="aspect-video bg-surface-container overflow-hidden relative group-hover:scale-105 transition-all duration-700">
              <iframe src="https://future-investment-planner-iink.vercel.app/" title="Future Investment Planner" className="w-[200%] h-[200%] absolute top-0 left-0 origin-top-left scale-50 pointer-events-none border-none bg-white"></iframe>
            </div>
            <div className="p-8">
              <h4 className="text-white font-bold text-headline-md mb-2">Future Investment Planner</h4>
              <p className="text-on-surface-variant text-body-sm mb-4">Goal: Modernize wealth management for Gen Z with interactive data viz.</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-primary font-bold text-label-sm uppercase">Desktop/Mobile</span>
                <a href="https://future-investment-planner-iink.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white text-xs px-4 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors cursor-pointer">Live Website</a>
              </div>
            </div>
          </div>
          </div>
        </div>

          {/* Section: Website Templates */}
          <div className="portfolio-section scroll-mt-48" id="templates">
            <h3 className="text-headline-lg font-display-md text-white mb-6 px-2">Website Templates</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              <div className="glass rounded-3xl p-1 project-card overflow-hidden">
                <img src="/template_part_1.webp" className="w-full h-auto rounded-[1.3rem] hover:scale-105 transition-transform duration-700" alt="Casino Template Header"/>
              </div>
              <div className="glass rounded-3xl p-1 project-card overflow-hidden">
                <img src="/template_part_2.webp" className="w-full h-auto rounded-[1.3rem] hover:scale-105 transition-transform duration-700" alt="Casino Template Games"/>
              </div>
              <div className="glass rounded-3xl p-1 project-card overflow-hidden">
                <img src="/template_part_3.webp" className="w-full h-auto rounded-[1.3rem] hover:scale-105 transition-transform duration-700" alt="Casino Template History"/>
              </div>
              <div className="glass rounded-3xl p-1 project-card overflow-hidden">
                <img src="/template_part_4.webp" className="w-full h-auto rounded-[1.3rem] hover:scale-105 transition-transform duration-700" alt="Casino Template FAQ"/>
              </div>
              <div className="glass rounded-3xl p-1 project-card overflow-hidden">
                <img src="/template_part_5.webp" className="w-full h-auto rounded-[1.3rem] hover:scale-105 transition-transform duration-700" alt="Casino Template Footer"/>
              </div>
            </div>
          </div>

          {/* Section: Brochure */}
          <div className="portfolio-section scroll-mt-48" id="brochure">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 px-2 gap-4">
              <h3 className="text-headline-lg font-display-md text-white">Brochure Design</h3>
              <a href="/colorful_jewelry_catalog_brochure.pdf" target="_blank" rel="noopener noreferrer" className="bg-primary text-black px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_20px_rgba(165,231,255,0.3)] project-card">
                View PDF Catalog <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="glass rounded-3xl p-1 project-card overflow-hidden w-full aspect-[3/4]">
                  <div className="w-full h-full rounded-[1.3rem] overflow-hidden relative bg-surface-container group flex items-center justify-center">
                    <img src={`/braucher_${num}.png`} alt={`Brochure Page ${num}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Flyer */}
          <div className="portfolio-section scroll-mt-48" id="flyer">
            <h3 className="text-headline-lg font-display-md text-white mb-6 px-2">Flyer Design</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {['10', '20'].map((num) => (
                <div key={num} className="glass rounded-[2.5rem] p-1 project-card overflow-hidden w-full h-[500px] md:h-[600px] flex flex-col">
                  <div className="w-full h-full rounded-[2.4rem] overflow-hidden relative bg-surface-container group flex items-center justify-center">
                    <img src={`/flyer${num}.png`} alt={`Flyer ${num}`} className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Magazine */}
          <div className="portfolio-section scroll-mt-48" id="magazine">
            <h3 className="text-headline-lg font-display-md text-white mb-6 px-2">Magazine Design</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass rounded-[2.5rem] p-1 project-card overflow-hidden w-full h-[500px] md:h-[600px] flex flex-col">
                <div className="w-full h-full rounded-[2.4rem] overflow-hidden relative bg-surface-container group flex items-center justify-center">
                  <img src="/magazine.jpeg" alt="Magazine 1" className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
              <div className="glass rounded-[2.5rem] p-1 project-card overflow-hidden w-full h-[500px] md:h-[600px] flex flex-col">
                <div className="w-full h-full rounded-[2.4rem] overflow-hidden relative bg-surface-container group flex items-center justify-center">
                  <img src="/magazine2_new.png" alt="Magazine 2" className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
            </div>
          </div>

          {/* Section: Animation */}
          <div className="portfolio-section scroll-mt-48" id="animation">
            <h3 className="text-headline-lg font-display-md text-white mb-6 px-2">Animation</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass rounded-[2.5rem] p-1 overflow-hidden project-card">
              <div className="bg-surface-container rounded-[2.4rem] aspect-video md:aspect-auto md:h-[340px] flex flex-col items-center justify-center relative overflow-hidden group">
                <img alt="Kids Animation" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-1000" src="/animation_2.webp"/>
                <div className="z-10 text-center p-6 bg-background/50 backdrop-blur-sm rounded-2xl m-4 mt-auto w-11/12 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h4 className="text-white font-bold text-headline-sm">Kids Animation</h4>
                  <p className="text-on-surface-variant mt-1 text-xs">Vibrant environments and character storytelling.</p>
                </div>
              </div>
            </div>
            <div className="glass rounded-[2.5rem] p-1 overflow-hidden project-card">
              <div className="bg-surface-container rounded-[2.4rem] aspect-video md:aspect-auto md:h-[340px] flex flex-col items-center justify-center relative overflow-hidden group">
                <img alt="Character Animation" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-1000" src="/animation_1.webp"/>
                <div className="z-10 text-center p-6 bg-background/50 backdrop-blur-sm rounded-2xl m-4 mt-auto w-11/12 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h4 className="text-white font-bold text-headline-sm">Character Animation</h4>
                  <p className="text-on-surface-variant mt-1 text-xs">Classic cartoon recreations and concept art.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Section: Branding */}
          <div className="portfolio-section scroll-mt-48" id="branding">
            <h3 className="text-headline-lg font-display-md text-white mb-6 px-2">Branding</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass rounded-[2.5rem] p-1 overflow-hidden project-card">
              <div className="bg-surface-container rounded-[2.4rem] aspect-video md:aspect-auto md:h-[340px] flex flex-col items-center justify-center relative overflow-hidden group">
                <img alt="Business Card Mockups" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-1000" src="/branding_mockup.webp"/>
                <div className="z-10 text-center p-6 bg-background/50 backdrop-blur-sm rounded-2xl m-4 mt-auto w-11/12 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h4 className="text-white font-bold text-headline-sm">Business Card Designs</h4>
                  <p className="text-on-surface-variant mt-1 text-xs">Print media and brand identity mockups.</p>
                </div>
              </div>
            </div>
            <div className="glass rounded-[2.5rem] p-1 overflow-hidden project-card">
              <div className="bg-surface-container rounded-[2.4rem] aspect-video md:aspect-auto md:h-[340px] flex flex-col items-center justify-center relative overflow-hidden group">
                <img alt="Organic Tea Packaging" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-1000" src="/packaging_mockup.webp"/>
                <div className="z-10 text-center p-6 bg-background/50 backdrop-blur-sm rounded-2xl m-4 mt-auto w-11/12 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h4 className="text-white font-bold text-headline-sm">Organic Tea Packaging</h4>
                  <p className="text-on-surface-variant mt-1 text-xs">Matcha green tea product design.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Section: Marketing */}
          <div className="portfolio-section scroll-mt-48" id="marketing">
            <h3 className="text-headline-lg font-display-md text-white mb-6 px-2">Marketing</h3>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 glass rounded-[2.5rem] p-8 space-y-6 project-card">
              <h4 className="text-headline-md text-white">Campaign Analytics</h4>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-label-sm text-outline uppercase">Instagram Engagement</span>
                    <span className="text-primary font-bold">+65%</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[65%] h-full bg-primary shadow-[0_0_15px_#a5e7ff]"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-label-sm text-outline uppercase">ROI for Ad Creatives</span>
                    <span className="text-secondary font-bold">3.5x</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[42%] h-full bg-secondary shadow-[0_0_15px_#ffb3ae]"></div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white/5 p-4 rounded-2xl text-center">
                  <span className="text-xl font-bold text-white">12k+</span>
                  <p className="text-[10px] text-outline uppercase mt-1">Leads</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl text-center">
                  <span className="text-xl font-bold text-white">400%</span>
                  <p className="text-[10px] text-outline uppercase mt-1">Traffic</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 aspect-video md:aspect-auto md:h-full md:min-h-[400px]">
              <div className="glass rounded-[2.5rem] p-1 overflow-hidden project-card h-full w-full relative group">
                <img src="/marketing_mockup.webp" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-700" alt="Social Media Ad Creatives" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                  <h4 className="text-white font-bold text-headline-sm mb-2">Social Media Ad Creatives</h4>
                  <p className="text-on-surface-variant text-sm">High-converting product and lifestyle campaigns.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Section: Social Media */}
          <div className="portfolio-section scroll-mt-48" id="social">
            <h3 className="text-headline-lg font-display-md text-white mb-6 px-2">Social Media</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass rounded-[2.5rem] p-4 flex items-center justify-center project-card bg-[#8ebae4] overflow-hidden">
                <img alt="GRE & GMAT Coaching Ad" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 rounded-[1.5rem] shadow-xl" src="/social_1.webp"/>
              </div>
              <div className="glass rounded-[2.5rem] p-4 flex items-center justify-center project-card bg-white overflow-hidden">
                <img alt="Grow Your Business Meta Ads Graphic" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 rounded-[1.5rem] shadow-xl" src="/social_2.webp"/>
              </div>
              <div className="glass rounded-[2.5rem] p-4 flex items-center justify-center project-card bg-[#0f172a] overflow-hidden">
                <img alt="Website Services Digital Ad" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 rounded-[1.5rem] shadow-xl" src="/social_3.webp"/>
              </div>
            </div>
          </div>

          {/* Section: Matte Painting */}
          <div className="portfolio-section scroll-mt-48" id="matte">
            <h3 className="text-headline-lg font-display-md text-white mb-6 text-center">Matte Painting</h3>
            <div className="glass rounded-[2.5rem] p-1 overflow-hidden project-card w-full max-w-5xl mx-auto">
              <div className="bg-surface-container rounded-[2.4rem] aspect-video flex flex-col items-center justify-center relative overflow-hidden group">
                <img alt="Fantasy Landscape Matte Painting" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-1000" src="/matte_painting.webp"/>
                <div className="z-10 text-center p-8 bg-background/50 backdrop-blur-sm rounded-2xl m-4 md:m-8 mt-auto w-11/12 md:w-3/4 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h4 className="text-white font-bold text-headline-sm mb-2">Fantasy Landscape</h4>
                  <p className="text-on-surface-variant text-sm">Digital matte painting, photo manipulation, and compositing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
