import { useRef } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "The attention to detail in the investment planner website was remarkable. Sahiti translated our complex requirements into a seamless user experience.",
    initials: "AS",
    name: "Ananya Sharma",
    title: "CEO, FinForecast",
    color: "primary"
  },
  {
    id: 2,
    quote: "Our Meta Ad performance saw an immediate 3x jump in ROAS. The combination of creative strategy and technical web optimization is where Sahiti truly shines.",
    initials: "MT",
    name: "Marcus Thorne",
    title: "Marketing Director, Adenium Heaven",
    color: "tertiary"
  },
  {
    id: 3,
    quote: "Shape2Real needed a sophisticated look to match our architectural renders. Sahiti delivered a site that feels like a digital gallery.",
    initials: "VS",
    name: "Vikram Seth",
    title: "Founder, Shape2Real",
    color: "secondary-fixed"
  }
];

export default function Testimonials() {
  const trackRef = useRef(null);

  const scrollTestimonials = (direction) => {
    if (trackRef.current) {
      const scrollAmount = 482 * direction;
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="px-margin-desktop mb-section-gap overflow-hidden">
      <div className="max-w-container-max mx-auto mb-12">
        <span className="text-tertiary font-label-md tracking-widest block mb-4 uppercase">Trust</span>
        <h2 className="font-headline-lg text-on-surface">Client Voices</h2>
      </div>
      <div 
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 max-w-container-max mx-auto" 
        ref={trackRef}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((t) => (
          <div key={t.id} className="min-w-[90%] md:min-w-[450px] snap-center glass-card p-10 rounded-xl relative overflow-hidden flex-shrink-0">
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${t.color} to-transparent`}></div>
            <div className="flex text-tertiary mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <p className="font-body-lg italic text-on-surface mb-8 leading-relaxed">"{t.quote}"</p>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full bg-${t.color}/20 border border-${t.color}/20 flex items-center justify-center text-${t.color} font-bold`}>
                {t.initials}
              </div>
              <div>
                <p className="font-bold text-on-surface">{t.name}</p>
                <p className="text-label-md text-on-surface-variant">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button 
          onClick={() => scrollTestimonials(-1)}
          className="w-12 h-12 rounded-full border border-outline flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-300"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button 
          onClick={() => scrollTestimonials(1)}
          className="w-12 h-12 rounded-full border border-outline flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-300"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </section>
  );
}
