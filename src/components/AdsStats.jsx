import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AdsStats() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in the section and cards
      gsap.from('.ads-header', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.ads-header',
          start: 'top 90%',
        }
      });

      gsap.from('.ads-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      // Number count up animation
      const numbers = gsap.utils.toArray('.count-up');
      numbers.forEach(num => {
        const targetValue = parseFloat(num.getAttribute('data-value'));
        const suffix = num.getAttribute('data-suffix') || '';
        const prefix = num.getAttribute('data-prefix') || '';
        
        gsap.to(num, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
          innerHTML: targetValue,
          duration: 2.5,
          ease: 'power3.out',
          snap: { innerHTML: 0.1 },
          onUpdate: function() {
            const val = Number(this.targets()[0].innerHTML);
            const isFloat = targetValue % 1 !== 0;
            this.targets()[0].innerHTML = prefix + (isFloat ? val.toFixed(1) : Math.round(val)) + suffix;
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f8f9fb] min-h-[90vh] flex flex-col justify-center py-16 md:py-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10" id="ads-stats">
      <div className="text-center mb-10 md:mb-14 ads-header">
        <h2 className="text-headline-sm md:text-headline-lg font-display-md text-on-surface mb-3">
          Marketing <span className="text-primary italic">Performance</span>
        </h2>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Delivering high-converting campaigns and maximizing ROI across top-tier digital advertising networks.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

        
        {/* Meta Ads Card */}
        <div className="glass rounded-[2.5rem] p-6 md:p-8 relative overflow-hidden ads-card border-t border-[#c4cdd9] group">
          <div className="absolute top-[-50%] left-[-20%] w-[150%] h-[150%] bg-gradient-to-br from-[#f09433]/10 via-[#e6683c]/10 to-[#bc1888]/20 blur-3xl rounded-full z-0 pointer-events-none group-hover:opacity-100 opacity-70 transition-opacity duration-700"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-white text-2xl">campaign</span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-display-md text-[#1e293b]">Meta Ads</h3>
                <p className="text-xs text-on-surface-variant uppercase tracking-wider font-bold">Instagram & Facebook</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel rounded-2xl p-5 bg-[#eaeff5] border border-[#c4cdd9]">
                <p className="text-xs text-on-surface-variant mb-1">Avg. ROAS</p>
                <div className="text-3xl md:text-4xl font-display-md text-[#1e293b] count-up" data-value="450" data-suffix="%">0%</div>
                <p className="text-[10px] md:text-xs text-primary mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">trending_up</span> Top 10% Industry</p>
              </div>
              <div className="glass-panel rounded-2xl p-5 bg-[#eaeff5] border border-[#c4cdd9]">
                <p className="text-xs text-on-surface-variant mb-1">Impressions</p>
                <div className="text-3xl md:text-4xl font-display-md text-[#1e293b] count-up" data-value="12.5" data-suffix="M+">0M+</div>
                <p className="text-[10px] md:text-xs text-primary mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">visibility</span> High Reach</p>
              </div>
              <div className="glass-panel rounded-2xl p-5 bg-[#eaeff5] border border-[#c4cdd9]">
                <p className="text-xs text-on-surface-variant mb-1">Avg. CTR</p>
                <div className="text-3xl md:text-4xl font-display-md text-[#1e293b] count-up" data-value="3.8" data-suffix="%">0%</div>
                <p className="text-[10px] md:text-xs text-on-surface-variant mt-1">Highly Engaging</p>
              </div>
              <div className="glass-panel rounded-2xl p-5 bg-[#eaeff5] border border-[#c4cdd9]">
                <p className="text-xs text-on-surface-variant mb-1">Conversions</p>
                <div className="text-3xl md:text-4xl font-display-md text-[#1e293b] count-up" data-value="85" data-suffix="K+">0K+</div>
                <p className="text-[10px] md:text-xs text-on-surface-variant mt-1">Direct Actions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Ads Card */}
        <div className="glass rounded-[2.5rem] p-6 md:p-8 relative overflow-hidden ads-card border-t border-[#c4cdd9] group">
          <div className="absolute top-[-50%] right-[-20%] w-[150%] h-[150%] bg-gradient-to-bl from-[#4285F4]/20 via-[#34A853]/10 to-[#FBBC05]/10 blur-3xl rounded-full z-0 pointer-events-none group-hover:opacity-100 opacity-70 transition-opacity duration-700"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#4285F4] to-[#1A73E8] flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-white text-2xl">ads_click</span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-display-md text-[#1e293b]">Google Ads</h3>
                <p className="text-xs text-on-surface-variant uppercase tracking-wider font-bold">Search & Display</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel rounded-2xl p-5 bg-[#eaeff5] border border-[#c4cdd9]">
                <p className="text-xs text-on-surface-variant mb-1">Conversion Rate</p>
                <div className="text-3xl md:text-4xl font-display-md text-[#1e293b] count-up" data-value="12.4" data-suffix="%">0%</div>
                <p className="text-[10px] md:text-xs text-primary mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">trending_up</span> Optimized Funnel</p>
              </div>
              <div className="glass-panel rounded-2xl p-5 bg-[#eaeff5] border border-[#c4cdd9]">
                <p className="text-xs text-on-surface-variant mb-1">CPA Reduction</p>
                <div className="text-3xl md:text-4xl font-display-md text-[#1e293b] count-up" data-value="40" data-prefix="-" data-suffix="%">0%</div>
                <p className="text-[10px] md:text-xs text-primary mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">savings</span> Cost Efficient</p>
              </div>
              <div className="glass-panel rounded-2xl p-5 bg-[#eaeff5] border border-[#c4cdd9]">
                <p className="text-xs text-on-surface-variant mb-1">Search Volume</p>
                <div className="text-3xl md:text-4xl font-display-md text-[#1e293b] count-up" data-value="5.2" data-suffix="M+">0M+</div>
                <p className="text-[10px] md:text-xs text-on-surface-variant mt-1">Targeted Traffic</p>
              </div>
              <div className="glass-panel rounded-2xl p-5 bg-[#eaeff5] border border-[#c4cdd9]">
                <p className="text-xs text-on-surface-variant mb-1">ROI Growth</p>
                <div className="text-3xl md:text-4xl font-display-md text-[#1e293b] count-up" data-value="320" data-suffix="%">0%</div>
                <p className="text-[10px] md:text-xs text-on-surface-variant mt-1">Year over Year</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
