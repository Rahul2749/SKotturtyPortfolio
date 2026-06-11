import { useState } from 'react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "A standard website or branding project typically takes 2-4 weeks from initial strategy to final hand-off. However, this depends heavily on the project's complexity, the number of revisions, and how quickly feedback is provided."
    },
    {
      question: "Do you only design, or do you also code?",
      answer: "I am a multidisciplinary designer. While my primary expertise lies in UI/UX and visual strategy, I also have strong frontend development skills (React, Tailwind, Webflow) to bring my designs to life flawlessly."
    },
    {
      question: "What are your payment terms?",
      answer: "I typically require a 50% deposit to secure your spot in my schedule and officially kick off the project. The remaining 50% is tied to project milestones or final delivery."
    },
    {
      question: "Can you work with my existing branding?",
      answer: "Absolutely! I love helping established businesses refine, modernize, and expand upon their existing brand identities without losing their core essence."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-section-gap px-container-margin" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="faq-header text-center mb-16">
          <span className="text-primary font-bold tracking-[0.5em] uppercase text-label-sm">Got Questions?</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-4">Frequently Asked <span className="italic font-light text-gradient">Questions</span></h2>
        </div>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item glass rounded-3xl overflow-hidden transition-all duration-500 border ${isOpen ? 'border-primary/30 bg-primary/5' : 'border-on-surface/10 cursor-pointer hover:bg-white/[0.02]'}`}
              >
                <div 
                  className="p-6 md:p-8 flex justify-between items-center gap-4"
                  role="button"
                  aria-expanded={isOpen}
                  tabIndex={0}
                  onClick={() => toggleFaq(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleFaq(index);
                    }
                  }}
                >
                  <h3 className={`font-headline-md text-lg md:text-xl font-bold ${isOpen ? 'text-on-surface' : 'text-on-card-variant'}`}>
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 ${isOpen ? 'bg-primary text-on-primary rotate-180' : 'bg-white/10 text-white'}`}>
                    <span className="material-symbols-outlined text-sm font-bold">keyboard_arrow_down</span>
                  </div>
                </div>
                <div 
                  className={`px-6 md:px-8 transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-6 md:pb-8 opacity-100' : 'max-h-0 opacity-0 pb-0'}`}
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <p className={`text-body-lg leading-relaxed ${isOpen ? 'text-on-surface-variant' : 'text-on-card-variant'}`}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
