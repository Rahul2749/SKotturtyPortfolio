import { useEffect } from 'react';

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

export default function App() {
  useEffect(() => {
    // Scroll Reveal Interaction
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
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
    </>
  );
}
