import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AdsStats from './components/AdsStats';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

// ── Global GSAP performance config ──
gsap.config({ force3D: true, nullTargetWarn: false });
ScrollTrigger.config({ limitCallbacks: true, ignoreMobileResize: true });

function animateIn(selector, vars) {
  gsap.set(selector, { autoAlpha: 0, y: 40, ...vars.from });
  ScrollTrigger.batch(selector, {
    onEnter: (batch) => {
      gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.1,
        overwrite: true,
        force3D: true,
        ...vars.to,
      });
    },
    start: 'top 88%',
    fastScrollEnd: true,
  });
}

export default function App() {
  const mainRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    // Force scroll to top on refresh and clear hash
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo(0, 0);
    requestAnimationFrame(() => window.scrollTo(0, 0));

    const ctx = gsap.context(() => {

      // ── Hero: immediate entrance (no scroll needed) ──
      gsap.set(['.hero-badge', '.hero-title', '.hero-desc', '.hero-buttons', '.hero-portrait'], { autoAlpha: 0 });

      const heroTl = gsap.timeline({ delay: 0.15, defaults: { ease: 'power3.out', duration: 0.7, force3D: true } });
      heroTl
        .to('.hero-badge', { autoAlpha: 1, x: 0, duration: 0.5 })
        .to('.hero-title', { autoAlpha: 1, y: 0, duration: 0.8 }, '-=0.35')
        .to('.hero-desc', { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.35')
        .to('.hero-buttons', { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.25')
        .to('.hero-portrait', { autoAlpha: 1, scale: 1, duration: 0.9 }, '-=0.4');

      // Set initial hidden states for hero
      gsap.set('.hero-badge', { x: -30 });
      gsap.set('.hero-title', { y: 40 });
      gsap.set('.hero-desc', { y: 25 });
      gsap.set('.hero-buttons', { y: 20 });
      gsap.set('.hero-portrait', { scale: 0.92 });

      // ── About section ──
      animateIn('.about-heading', { from: { y: 20 }, to: {} });
      animateIn('.about-bar', { from: { scaleX: 0, y: 0 }, to: { scaleX: 1, transformOrigin: 'left center' } });
      animateIn('.about-text', { from: { y: 25 }, to: { stagger: 0.15 } });
      animateIn('.stat-card', { from: { y: 40, scale: 0.92 }, to: { scale: 1, stagger: 0.1, ease: 'back.out(1.4)' } });

      // ── Services ──
      animateIn('.services-header', { from: { y: 30 }, to: {} });
      animateIn('.service-card', { from: { y: 50 }, to: { stagger: 0.12 } });

      // ── Portfolio ──
      animateIn('.portfolio-header', { from: { y: 30 }, to: {} });
      animateIn('.portfolio-tabs', { from: { x: 30, y: 0 }, to: {} });
      
      // Unique animations per portfolio category (GPU-friendly transforms only)
      const portfolioAnimations = {
        'uiux': { from: { y: 80, opacity: 0, scale: 0.88 }, to: { y: 0, opacity: 1, scale: 1, ease: 'expo.out' } },
        'web': { from: { x: -60, opacity: 0 }, to: { x: 0, opacity: 1, ease: 'back.out(1.4)' } },
        'templates': { from: { scale: 0.7, opacity: 0 }, to: { scale: 1, opacity: 1, ease: 'power3.out' } },
        'animation': { from: { y: -60, opacity: 0 }, to: { y: 0, opacity: 1, ease: 'bounce.out' } },
        'branding': { from: { opacity: 0, scale: 1.08 }, to: { opacity: 1, scale: 1, ease: 'power2.out' } },
        'marketing': { from: { x: 60, opacity: 0 }, to: { x: 0, opacity: 1, ease: 'expo.out' } },
        'social': { from: { scale: 1.15, opacity: 0 }, to: { scale: 1, opacity: 1, ease: 'circ.out' } },
        'matte': { from: { y: 80, opacity: 0, scale: 0.92 }, to: { y: 0, opacity: 1, scale: 1, ease: 'power4.out' } },
        'default': { from: { y: 50, opacity: 0 }, to: { y: 0, opacity: 1, ease: 'power2.out' } }
      };

      gsap.utils.toArray('.portfolio-section').forEach(section => {
        const id = section.id;
        const animConfig = portfolioAnimations[id] || portfolioAnimations['default'];
        const cards = section.querySelectorAll('.project-card');
        
        if(cards.length > 0) {
          gsap.set(cards, { ...animConfig.from });
          ScrollTrigger.batch(cards, {
            onEnter: (batch) => {
              gsap.to(batch, {
                ...animConfig.to,
                duration: 1,
                stagger: 0.1,
                overwrite: true,
                force3D: true,
              });
            },
            start: 'top 85%',
            fastScrollEnd: true,
          });
        }
      });

      // ── Case Studies ──
      animateIn('.case-header', { from: { y: 30 }, to: {} });
      animateIn('.case-card', { from: { y: 50 }, to: { stagger: 0.15 } });

      // ── Testimonials ──
      animateIn('.testimonial-header', { from: { y: 25 }, to: {} });
      animateIn('.testimonial-card', { from: { y: 40 }, to: { stagger: 0.12 } });

      // ── Process ──
      animateIn('.process-header', { from: { y: 30 }, to: {} });
      animateIn('.process-step', { from: { y: 30, scale: 0.92 }, to: { scale: 1, stagger: 0.08, ease: 'back.out(1.3)' } });

      // ── Skills ──
      animateIn('.skills-header', { from: { y: 30 }, to: {} });
      animateIn('.skill-tag', { from: { scale: 0.85, y: 15 }, to: { scale: 1, stagger: 0.04, ease: 'back.out(1.5)' } });
      animateIn('.skill-card', { from: { y: 30, scale: 0.92 }, to: { scale: 1, stagger: 0.06 } });

      // ── Experience ──
      animateIn('.experience-header', { from: { y: 30 }, to: {} });
      animateIn('.experience-card', { from: { y: 50, opacity: 0 }, to: { stagger: 0.15 } });

      // ── FAQ ──
      animateIn('.faq-header', { from: { y: 30 }, to: {} });
      animateIn('.faq-item', { from: { y: 30, scale: 0.95 }, to: { stagger: 0.08 } });

      // ── Contact ──
      animateIn('.contact-cta', { from: { y: 50, scale: 0.97 }, to: { scale: 1, duration: 0.9 } });

      // ── Footer ──
      animateIn('.footer-content', { from: { y: 20 }, to: { duration: 0.5 } });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      <div className="noise-bg"></div>
      <div ref={mainRef} className="overflow-x-hidden w-full relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Portfolio />
          <AdsStats />
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
