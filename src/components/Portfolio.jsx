import { useState } from 'react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('uiux');

  return (
    <section className="py-section-gap px-container-margin" id="works">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="portfolio-header">
            <span className="text-primary font-bold tracking-[0.5em] uppercase text-label-sm">Categorized Hub</span>
            <h2 className="font-headline-lg text-headline-lg text-white mt-2">Creative <span className="italic font-light text-gradient">Showcase</span></h2>
          </div>
          <div className="portfolio-tabs flex flex-wrap gap-2 overflow-x-auto pb-4">
            <button 
              className={`tab-btn px-6 py-2 rounded-full glass text-label-sm transition-all ${activeTab === 'uiux' ? 'active border-primary/50 text-primary font-bold' : 'border-white/10 text-on-surface-variant hover:text-white'}`}
              onClick={() => setActiveTab('uiux')}
            >
              UI/UX
            </button>
            <button 
              className={`tab-btn px-6 py-2 rounded-full glass text-label-sm transition-all ${activeTab === 'web' ? 'active border-primary/50 text-primary font-bold' : 'border-white/10 text-on-surface-variant hover:text-white'}`}
              onClick={() => setActiveTab('web')}
            >
              Web
            </button>
            <button 
              className={`tab-btn px-6 py-2 rounded-full glass text-label-sm transition-all ${activeTab === 'branding' ? 'active border-primary/50 text-primary font-bold' : 'border-white/10 text-on-surface-variant hover:text-white'}`}
              onClick={() => setActiveTab('branding')}
            >
              Branding
            </button>
            <button 
              className={`tab-btn px-6 py-2 rounded-full glass text-label-sm transition-all ${activeTab === 'marketing' ? 'active border-primary/50 text-primary font-bold' : 'border-white/10 text-on-surface-variant hover:text-white'}`}
              onClick={() => setActiveTab('marketing')}
            >
              Marketing
            </button>
          </div>
        </div>

        {/* Tab Content: UI/UX Projects */}
        <div className={`tab-content space-y-12 ${activeTab === 'uiux' ? 'active' : ''}`} id="uiux">
          <div className="glass rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 group border border-white/10 project-card">
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <span className="text-primary font-bold text-[10px] uppercase tracking-widest mb-4">Mobile App, Dashboard & User Flows</span>
              <h3 className="text-headline-lg text-white mb-6">FinStream Ecosystem</h3>
              <p className="text-on-surface-variant text-body-lg mb-4">Problem: Fragmented financial data causing user drop-off in SME management platforms.</p>
              <p className="text-body-sm text-outline mb-8">Solution: A unified design system bridging wireframes to high-fidelity Figma prototypes.</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-3 py-1 bg-white/5 rounded-md border border-white/10 text-[10px] text-outline uppercase">Figma</span>
                <span className="px-3 py-1 bg-white/5 rounded-md border border-white/10 text-[10px] text-outline uppercase">Wireframes</span>
                <span className="px-3 py-1 bg-white/5 rounded-md border border-white/10 text-[10px] text-outline uppercase">React</span>
              </div>
              <a className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all" href="#">View Case Study <span className="material-symbols-outlined">east</span></a>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-surface-container overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <img alt="UI/UX Preview" className="w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjKf_p1bAdux21iUlbOuByNSoutG_-Yn6eCcfVkLGmwg-JOqJqoZ_10pqYhriRrKWJRkPJ-qZOhR1SR4XDOJATZV1nIBwE8jfc-JDcw1q122z6d_6s8QpkYMT3wx7R451yZaEJGfL6Gcf3SNBIdVepVi-CJUPEBphGYOew3J6UIsq2_QrKpAv60FZoT91FJS_nMJL_Y7Uo7Ej2e5_7hOYC3sWqqPK4otjuwZ_5OqfpLec0ll-pV_Xsb16r8uwTTIkm1sdjaY36OOQR"/>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content: Website Projects */}
        <div className={`tab-content grid-cols-1 md:grid-cols-3 gap-8 ${activeTab === 'web' ? 'active grid' : 'hidden'}`} id="web">
          {/* Project: Future Investment Planner */}
          <div className="glass rounded-[2rem] overflow-hidden group border border-white/10 project-card">
            <div className="aspect-video bg-surface-container overflow-hidden">
              <img alt="Future Investment" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZJl3yFZL3mK5tzSlD-0qRHl7mlLscfl46P4IrVRnBOR8lH_V8SH5SOj-5mkZsrSogwKQXa3XhMOPqVcgPZu-ZkzcKSeCPoDn5Oe3gg6Ph2hpEXHBn9E9n25VsFA8tBiZZvA9xEz1-w2-g0y2GQfu2FLuXeB9YBK1M6H5suW4JlOkCRIdZM_MnFQMev0E5wdNdaUWXvTh7ncoRFhkNp3O500oIYz-QmNM1ZgVl9w4vJNqsKb3dF1wncK2xtEtotTKTkgGE7bRfKX4j"/>
            </div>
            <div className="p-8">
              <h4 className="text-white font-bold text-headline-md mb-2">Future Investment Planner</h4>
              <p className="text-on-surface-variant text-body-sm mb-4">Goal: Modernize wealth management for Gen Z with interactive data viz.</p>
              <div className="flex justify-between items-center">
                <span className="text-primary font-bold text-label-sm uppercase">Desktop/Mobile</span>
                <button className="text-white text-xs px-4 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors">Live Website</button>
              </div>
            </div>
          </div>
          {/* Project: Shape2Real */}
          <div className="glass rounded-[2rem] overflow-hidden group border border-white/10 project-card">
            <div className="aspect-video bg-surface-container overflow-hidden flex items-center justify-center bg-gradient-to-tr from-secondary/20 to-background">
              <h5 className="text-secondary font-bold text-headline-md">Shape2Real</h5>
            </div>
            <div className="p-8">
              <h4 className="text-white font-bold text-headline-md mb-2">Shape2Real</h4>
              <p className="text-on-surface-variant text-body-sm mb-4">A minimalist architectural portfolio with scroll-driven interactions.</p>
              <div className="flex justify-between items-center">
                <span className="text-secondary font-bold text-label-sm uppercase">Premium UX</span>
                <button className="text-white text-xs px-4 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors">Live Website</button>
              </div>
            </div>
          </div>
          {/* Project: Adenium Heaven */}
          <div className="glass rounded-[2rem] overflow-hidden group border border-white/10 project-card">
            <div className="aspect-video bg-surface-container overflow-hidden flex items-center justify-center bg-gradient-to-tr from-tertiary/20 to-background">
              <h5 className="text-tertiary font-bold text-headline-md">Adenium Heaven</h5>
            </div>
            <div className="p-8">
              <h4 className="text-white font-bold text-headline-md mb-2">Adenium Heaven</h4>
              <p className="text-on-surface-variant text-body-sm mb-4">E-commerce experience for rare botanical collections.</p>
              <div className="flex justify-between items-center">
                <span className="text-tertiary font-bold text-label-sm uppercase">Botanical Store</span>
                <button className="text-white text-xs px-4 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors">Live Website</button>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content: Branding */}
        <div className={`tab-content space-y-12 ${activeTab === 'branding' ? 'active' : ''}`} id="branding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass rounded-[2.5rem] p-1 overflow-hidden project-card">
              <div className="bg-surface-container rounded-[2.4rem] aspect-square flex flex-col items-center justify-center relative overflow-hidden">
                <img alt="Astra Brand Kit" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCa4rBjUby4QJU6qi3OBVvpGF4a6hWL0ruND_CiW2KnVW8oBjDMjtzehxQHNeBBkVu5zwVdolbCU9gS7OcVBM9lK_hErOgbOuvd0iEE7p6XM7eb23pPxswdiCi8WxO44RY99YvF8YIdQIs_CdjU5UNCB-SAM_mAk2sw-vHgwU4lhMHiubO3dK0ecwLlEuD8IZx0GtQgg14k6ex8Gr4b2L92YE6Wmv8KFuIvEehuaCI2fzxn0DT66PW5-zLu8a0xMdCHwuHcvtoRRrc"/>
                <div className="z-10 text-center p-8">
                  <span className="material-symbols-outlined text-6xl text-secondary mb-4">rocket_launch</span>
                  <h4 className="text-white font-bold text-headline-lg">Astra Identity</h4>
                  <p className="text-on-surface-variant max-w-xs mx-auto mt-2">Full Brand Kit & Guidelines for Space-Tech.</p>
                </div>
              </div>
            </div>
            <div className="glass rounded-[2.5rem] p-12 flex flex-col justify-center project-card">
              <h3 className="text-headline-md text-white mb-6">Luxury Packaging Concepts</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">High-end 3D mockups for premium cosmetics and sustainable tech gadgets.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-outline">inventory_2</span>
                </div>
                <div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-outline">shopping_bag</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content: Marketing */}
        <div className={`tab-content ${activeTab === 'marketing' ? 'active' : ''}`} id="marketing">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 glass rounded-[2.5rem] p-12 space-y-8 project-card">
              <h4 className="text-headline-md text-white">Campaign Analytics</h4>
              <div className="space-y-6">
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
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white/5 p-6 rounded-2xl text-center">
                  <span className="text-2xl font-bold text-white">12k+</span>
                  <p className="text-[10px] text-outline uppercase mt-1">Leads</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl text-center">
                  <span className="text-2xl font-bold text-white">400%</span>
                  <p className="text-[10px] text-outline uppercase mt-1">Traffic</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="masonry-grid">
                <div className="masonry-item glass p-4 rounded-3xl project-card h-64 flex flex-col justify-end bg-gradient-to-t from-primary/20 to-transparent">
                  <span className="text-[10px] text-primary uppercase font-black">Carousel Ad</span>
                </div>
                <div className="masonry-item glass p-4 rounded-3xl project-card h-80 flex flex-col justify-end bg-gradient-to-t from-secondary/20 to-transparent">
                  <span className="text-[10px] text-secondary uppercase font-black">Stories Pack</span>
                </div>
                <div className="masonry-item glass p-4 rounded-3xl project-card h-48 flex flex-col justify-end bg-gradient-to-t from-tertiary/20 to-transparent">
                  <span className="text-[10px] text-tertiary uppercase font-black">Pinterest Grid</span>
                </div>
                <div className="masonry-item glass p-4 rounded-3xl project-card h-96 flex flex-col justify-end bg-gradient-to-t from-primary/20 to-transparent">
                  <span className="text-[10px] text-primary uppercase font-black">Reels Cover</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
