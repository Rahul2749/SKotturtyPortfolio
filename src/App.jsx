import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function animateIn(selector, vars, triggerEl) {
  const trigger = triggerEl || selector;
  gsap.set(selector, { autoAlpha: 0, y: 40, ...vars.from });
  ScrollTrigger.batch(selector, {
    onEnter: (batch) => {
      gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        overwrite: true,
        ...vars.to,
      });
    },
    start: 'top 90%',
  });
}

export default function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    // Force scroll to top on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {

      // ── Hero: immediate entrance (no scroll needed) ──
      gsap.set(['.hero-badge', '.hero-title', '.hero-desc', '.hero-buttons', '.hero-portrait'], { autoAlpha: 0 });

      const heroTl = gsap.timeline({ delay: 0.2, defaults: { ease: 'power3.out', duration: 0.8 } });
      heroTl
        .to('.hero-badge', { autoAlpha: 1, x: 0, duration: 0.6 })
        .to('.hero-title', { autoAlpha: 1, y: 0, duration: 0.9 }, '-=0.4')
        .to('.hero-desc', { autoAlpha: 1, y: 0, duration: 0.7 }, '-=0.4')
        .to('.hero-buttons', { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.3')
        .to('.hero-portrait', { autoAlpha: 1, scale: 1, duration: 1 }, '-=0.5');

      // Set initial hidden states for hero
      gsap.set('.hero-badge', { x: -30 });
      gsap.set('.hero-title', { y: 40 });
      gsap.set('.hero-desc', { y: 25 });
      gsap.set('.hero-buttons', { y: 20 });
      gsap.set('.hero-portrait', { scale: 0.9 });

      // ── About section ──
      animateIn('.about-heading', { from: { y: 20 }, to: {} });
      animateIn('.about-bar', { from: { scaleX: 0, y: 0 }, to: { scaleX: 1, transformOrigin: 'left center' } });
      animateIn('.about-text', { from: { y: 25 }, to: { stagger: 0.2 } });
      animateIn('.stat-card', { from: { y: 40, scale: 0.92 }, to: { scale: 1, stagger: 0.12, ease: 'back.out(1.4)' } });

      // ── Services ──
      animateIn('.services-header', { from: { y: 30 }, to: {} });
      animateIn('.service-card', { from: { y: 50 }, to: { stagger: 0.18 } });

      // ── Portfolio ──
      animateIn('.portfolio-header', { from: { y: 30 }, to: {} });
      animateIn('.portfolio-tabs', { from: { x: 30, y: 0 }, to: {} });
      
      // Unique animations per portfolio category
      const portfolioAnimations = {
        'uiux': { from: { y: 100, opacity: 0, scale: 0.85, rotationX: 15 }, to: { y: 0, opacity: 1, scale: 1, rotationX: 0, ease: 'expo.out' } },
        'web': { from: { x: -80, opacity: 0 }, to: { x: 0, opacity: 1, ease: 'back.out(1.4)' } },
        'templates': { from: { scale: 0.6, opacity: 0, rotationY: 45 }, to: { scale: 1, opacity: 1, rotationY: 0, ease: 'power3.out' } },
        'animation': { from: { y: -80, opacity: 0, rotationZ: 5 }, to: { y: 0, opacity: 1, rotationZ: 0, ease: 'bounce.out' } },
        'branding': { from: { opacity: 0, filter: 'blur(15px)', scale: 1.1 }, to: { opacity: 1, filter: 'blur(0px)', scale: 1, ease: 'power2.out' } },
        'marketing': { from: { x: 80, opacity: 0, rotationY: -30 }, to: { x: 0, opacity: 1, rotationY: 0, ease: 'expo.out' } },
        'social': { from: { scale: 1.2, opacity: 0 }, to: { scale: 1, opacity: 1, ease: 'circ.out' } },
        'matte': { from: { y: 100, opacity: 0, scale: 0.9, rotationX: -15 }, to: { y: 0, opacity: 1, scale: 1, rotationX: 0, ease: 'power4.out' } },
        'default': { from: { y: 50, opacity: 0 }, to: { y: 0, opacity: 1, ease: 'power2.out' } }
      };

      gsap.utils.toArray('.portfolio-section').forEach(section => {
        const id = section.id;
        const animConfig = portfolioAnimations[id] || portfolioAnimations['default'];
        const cards = section.querySelectorAll('.project-card');
        
        if(cards.length > 0) {
          gsap.set(cards, { ...animConfig.from, transformPerspective: 1000 });
          ScrollTrigger.batch(cards, {
            onEnter: (batch) => {
              gsap.to(batch, {
                ...animConfig.to,
                duration: 1.2,
                stagger: 0.15,
                overwrite: true
              });
            },
            start: 'top 85%',
          });
        }
      });

      // ── Case Studies ──
      animateIn('.case-header', { from: { y: 30 }, to: {} });
      animateIn('.case-card', { from: { y: 50 }, to: { stagger: 0.2 } });

      // ── Testimonials ──
      animateIn('.testimonial-header', { from: { y: 25 }, to: {} });
      animateIn('.testimonial-card', { from: { y: 40 }, to: { stagger: 0.18 } });

      // ── Process ──
      animateIn('.process-header', { from: { y: 30 }, to: {} });
      animateIn('.process-step', { from: { y: 30, scale: 0.9 }, to: { scale: 1, stagger: 0.1, ease: 'back.out(1.3)' } });

      // ── Skills ──
      animateIn('.skills-header', { from: { y: 30 }, to: {} });
      animateIn('.skill-tag', { from: { scale: 0.8, y: 15 }, to: { scale: 1, stagger: 0.06, ease: 'back.out(1.5)' } });
      animateIn('.skill-card', { from: { y: 30, scale: 0.92 }, to: { scale: 1, stagger: 0.08 } });

      // ── Experience ──
      animateIn('.experience-header', { from: { y: 30 }, to: {} });
      animateIn('.experience-card', { from: { y: 50, opacity: 0 }, to: { stagger: 0.2 } });

      // ── FAQ ──
      animateIn('.faq-header', { from: { y: 30 }, to: {} });
      animateIn('.faq-item', { from: { y: 30, scale: 0.95 }, to: { stagger: 0.1 } });

      // ── Contact ──
      animateIn('.contact-cta', { from: { y: 50, scale: 0.97 }, to: { scale: 1, duration: 1 } });

      // ── Footer ──
      animateIn('.footer-content', { from: { y: 20 }, to: { duration: 0.6 } });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="noise-bg"></div>
      <div ref={mainRef} className="overflow-x-hidden w-full relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Portfolio />
          <Services />
          <CaseStudies />
          <Testimonials />
          <Process />
          <Skills />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
