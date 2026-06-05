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
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Hero entrance ──
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      heroTl
        .from('.hero-badge', { opacity: 0, x: -40, duration: 0.8, delay: 0.3 })
        .from('.hero-title span', { opacity: 0, y: 60, duration: 1, stagger: 0.2 }, '-=0.5')
        .from('.hero-desc', { opacity: 0, y: 30, duration: 0.8 }, '-=0.5')
        .from('.hero-buttons > *', { opacity: 0, y: 20, scale: 0.95, duration: 0.6, stagger: 0.15 }, '-=0.4')
        .from('.hero-portrait', { opacity: 0, scale: 0.85, rotation: 3, duration: 1.2, ease: 'elastic.out(1, 0.5)' }, '-=0.8');

      // ── About section ──
      gsap.from('.about-heading', {
        scrollTrigger: { trigger: '#about', start: 'top 80%' },
        opacity: 0, x: -60, duration: 0.8
      });
      gsap.from('.about-bar', {
        scrollTrigger: { trigger: '#about', start: 'top 75%' },
        scaleX: 0, transformOrigin: 'left center', duration: 0.8, delay: 0.2
      });
      gsap.from('.about-text', {
        scrollTrigger: { trigger: '#about', start: 'top 70%' },
        opacity: 0, y: 30, duration: 0.8, stagger: 0.2
      });
      gsap.from('.stat-card', {
        scrollTrigger: { trigger: '.stat-card', start: 'top 85%' },
        opacity: 0, y: 50, scale: 0.9, duration: 0.6, stagger: 0.15, ease: 'back.out(1.7)'
      });

      // ── Services section ──
      gsap.from('.services-header', {
        scrollTrigger: { trigger: '#services', start: 'top 80%' },
        opacity: 0, y: 40, duration: 0.8
      });
      gsap.from('.service-card', {
        scrollTrigger: { trigger: '.service-card', start: 'top 85%' },
        opacity: 0, y: 60, duration: 0.7, stagger: 0.2, ease: 'power2.out'
      });

      // ── Portfolio section ──
      gsap.from('.portfolio-header', {
        scrollTrigger: { trigger: '#works', start: 'top 80%' },
        opacity: 0, y: 40, duration: 0.8
      });
      gsap.from('.portfolio-tabs', {
        scrollTrigger: { trigger: '#works', start: 'top 75%' },
        opacity: 0, x: 40, duration: 0.6, delay: 0.3
      });

      // ── Case Studies ──
      gsap.from('.case-header', {
        scrollTrigger: { trigger: '.case-header', start: 'top 85%' },
        opacity: 0, y: 40, duration: 0.8
      });
      gsap.from('.case-card', {
        scrollTrigger: { trigger: '.case-card', start: 'top 85%' },
        opacity: 0, y: 60, x: (i) => (i % 2 === 0 ? -30 : 30), duration: 0.8, stagger: 0.25
      });

      // ── Testimonials ──
      gsap.from('.testimonial-header', {
        scrollTrigger: { trigger: '.testimonial-header', start: 'top 85%' },
        opacity: 0, y: 30, duration: 0.7
      });
      gsap.from('.testimonial-card', {
        scrollTrigger: { trigger: '.testimonial-card', start: 'top 85%' },
        opacity: 0, y: 50, rotation: 2, duration: 0.8, stagger: 0.2, ease: 'power2.out'
      });

      // ── Process section ──
      gsap.from('.process-header', {
        scrollTrigger: { trigger: '#process', start: 'top 80%' },
        opacity: 0, y: 40, duration: 0.8
      });
      gsap.from('.process-step', {
        scrollTrigger: { trigger: '.process-step', start: 'top 90%' },
        opacity: 0, y: 40, scale: 0.85, duration: 0.5, stagger: 0.12, ease: 'back.out(1.5)'
      });

      // ── Skills section ──
      gsap.from('.skills-header', {
        scrollTrigger: { trigger: '.skills-header', start: 'top 85%' },
        opacity: 0, y: 40, duration: 0.8
      });
      gsap.from('.skill-tag', {
        scrollTrigger: { trigger: '.skill-tag', start: 'top 90%' },
        opacity: 0, scale: 0.7, duration: 0.4, stagger: 0.08, ease: 'back.out(2)'
      });
      gsap.from('.skill-card', {
        scrollTrigger: { trigger: '.skill-card', start: 'top 90%' },
        opacity: 0, y: 30, scale: 0.9, duration: 0.5, stagger: 0.1, ease: 'back.out(1.5)'
      });

      // ── Contact CTA ──
      gsap.from('.contact-cta', {
        scrollTrigger: { trigger: '#contact', start: 'top 80%' },
        opacity: 0, y: 60, scale: 0.95, duration: 1, ease: 'power3.out'
      });
      gsap.from('.contact-cta-inner > *', {
        scrollTrigger: { trigger: '#contact', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, stagger: 0.15, delay: 0.3
      });

      // ── Footer ──
      gsap.from('.footer-content', {
        scrollTrigger: { trigger: '.footer-content', start: 'top 95%' },
        opacity: 0, y: 20, duration: 0.6
      });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <CaseStudies />
        <Testimonials />
        <Process />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
