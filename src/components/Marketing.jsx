export default function Marketing() {
  return (
    <section className="px-margin-desktop mb-section-gap max-w-container-max mx-auto">
      <div className="flex flex-col mb-12">
        <span className="text-tertiary font-label-md tracking-widest block mb-4 uppercase">Growth</span>
        <h2 className="font-headline-lg text-on-surface">Meta Ads & Digital Marketing</h2>
      </div>
      <div className="bento-grid">
        {/* Main Dashboard Cell */}
        <div className="col-span-12 lg:col-span-8 glass-card rounded-xl p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-8">
              <h4 className="font-headline-md text-lg text-on-surface">Campaign Performance Overview</h4>
              <div className="flex gap-4">
                <span className="text-label-md text-on-surface-variant flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-tertiary"></span> Conversions
                </span>
                <span className="text-label-md text-on-surface-variant flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span> Impressions
                </span>
              </div>
            </div>
            {/* Performance Chart */}
            <div className="relative h-64 w-full flex items-end gap-2 mb-8 px-4">
              <div className="w-full h-full absolute inset-0 flex flex-col justify-between border-l border-b border-white/5 py-2">
                <div className="w-full h-[1px] bg-white/5"></div>
                <div className="w-full h-[1px] bg-white/5"></div>
                <div className="w-full h-[1px] bg-white/5"></div>
                <div className="w-full h-[1px] bg-white/5"></div>
              </div>
              <div className="flex-1 bg-primary/20 h-[40%] rounded-t-sm relative group transition-all duration-500 hover:h-[45%] hover:bg-primary/40"></div>
              <div className="flex-1 bg-tertiary h-[65%] rounded-t-sm relative group transition-all duration-500 hover:h-[70%] shadow-[0_0_15px_rgba(0,218,243,0.3)]"></div>
              <div className="flex-1 bg-primary/20 h-[55%] rounded-t-sm relative group transition-all duration-500 hover:h-[60%]"></div>
              <div className="flex-1 bg-tertiary h-[85%] rounded-t-sm relative group transition-all duration-500 hover:h-[90%] shadow-[0_0_20px_rgba(0,218,243,0.3)]"></div>
              <div className="flex-1 bg-primary/20 h-[70%] rounded-t-sm relative group transition-all duration-500 hover:h-[75%]"></div>
              <div className="flex-1 bg-tertiary h-[95%] rounded-t-sm relative group transition-all duration-500 hover:h-[100%] shadow-[0_0_25px_rgba(0,218,243,0.4)]"></div>
              <div className="flex-1 bg-primary/20 h-[60%] rounded-t-sm relative group transition-all duration-500 hover:h-[65%]"></div>
              <div className="flex-1 bg-tertiary h-[75%] rounded-t-sm relative group transition-all duration-500 hover:h-[80%] shadow-[0_0_20px_rgba(0,218,243,0.3)]"></div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
            <div>
              <p className="text-label-md text-on-surface-variant mb-1">Total ROI</p>
              <p className="text-headline-md font-bold text-tertiary">342%</p>
            </div>
            <div>
              <p className="text-label-md text-on-surface-variant mb-1">CTR</p>
              <p className="text-headline-md font-bold text-primary">4.8%</p>
            </div>
            <div>
              <p className="text-label-md text-on-surface-variant mb-1">Cost per Click</p>
              <p className="text-headline-md font-bold text-on-surface">$0.42</p>
            </div>
          </div>
        </div>
        
        {/* Ad Creative Mockup Cell */}
        <div className="col-span-12 lg:col-span-4 glass-card rounded-xl overflow-hidden flex flex-col">
          <div className="p-6 border-b border-white/5 bg-surface-bright/20">
            <h4 className="font-label-md text-on-surface">Active Creative: "Spring Launch"</h4>
          </div>
          <div className="flex-grow bg-surface-container relative">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsy6M72FyL4HCGQozUJ6b0rxRSBbmfaUfl4roWzUZqXiUV3CwLBCvh9tGhglz3-iLViXSnTVHzJArBppjeSI4e5TKkTk6YOHBWrI1uU-WMRyBAHlYfFwc5vnl8qHxzCzbcwpL5spsLmnr3klJ2ga7PX91hQCfjgLv9BVTiYn0gZ_qbkCrFQMdapMURp5kWnd2SWNsHwW1CQPKzpuXSSyVJE_HnGboGNx-y3uvx5urKapvTB10h6bG4fT_jylJGUlmo9In0iMF_cOL3" alt="Social Media Ad Creative" className="w-full h-full object-cover transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent p-6 flex flex-col justify-end">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                <span className="text-label-md text-white font-bold">Live Campaign</span>
              </div>
              <p className="text-body-md text-white font-medium">Generated 1,200+ leads in 14 days.</p>
            </div>
          </div>
        </div>
        
        {/* Quick Stats Cell 1 */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 glass-card rounded-xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary">ads_click</span>
            </div>
            <h4 className="font-headline-md text-lg text-on-surface">Retargeting Flow</h4>
          </div>
          <p className="font-body-md text-on-surface-variant mb-6">Optimized multi-touch funnels that reduce churn by 28% through precision audience segmentation.</p>
          <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-tertiary w-[82%]"></div>
          </div>
          <p className="text-label-md mt-4 text-on-surface-variant uppercase tracking-wider">Efficiency Goal: 82%</p>
        </div>
        
        {/* Quick Stats Cell 2 */}
        <div className="col-span-12 md:col-span-6 lg:col-span-8 glass-card rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h4 className="font-headline-md text-lg mb-4 text-primary">A/B Testing Methodology</h4>
            <p className="font-body-md text-on-surface-variant">Using data-driven iterations to find the winning combination. Our testing cycles average 48 hours for rapid optimization.</p>
          </div>
          <div className="flex gap-4">
            <div className="w-24 h-24 rounded-lg border border-white/5 flex flex-col items-center justify-center bg-surface-container-low">
              <span className="text-label-md text-on-surface-variant">VAR A</span>
              <span className="font-bold text-xl text-on-surface">1.2%</span>
            </div>
            <div className="w-24 h-24 rounded-lg border border-primary/40 flex flex-col items-center justify-center bg-primary/10 scale-110 shadow-lg shadow-primary/20">
              <span className="text-label-md text-primary font-bold">VAR B</span>
              <span className="font-bold text-xl text-primary">3.8%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
