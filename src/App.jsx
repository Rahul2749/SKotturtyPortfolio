import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    // Scroll to top on refresh
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    // Scroll trigger for all glass cards
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.glass-card');
      cards.forEach((card) => {
        gsap.fromTo(card, 
          { opacity: 0, y: 50 },
          {
            opacity: 1, 
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, mainRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={mainRef} className="bg-[#0b0d14] text-on-surface min-h-screen font-body overflow-x-hidden selection:bg-[#00d2ff]/30">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
