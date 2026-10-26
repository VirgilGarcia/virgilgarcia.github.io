import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from './lib/gsap';
import useSmoothScroll from './hooks/useSmoothScroll';
import Cursor from './components/Cursor';
import { CvModal } from './components/CvButton';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Expertise from './sections/Expertise';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const App = () => {
  const root = useRef(null);
  useSmoothScroll();

  // Les polices changent la hauteur des sections : on recalcule les déclencheurs une fois chargées
  useEffect(() => {
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
  }, []);

  // Apparition générique de tous les éléments marqués [data-reveal]
  useGSAP(
    () => {
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        const targets = gsap.utils.toArray('[data-reveal]');
        gsap.set(targets, { autoAlpha: 0, y: 40 });
        ScrollTrigger.batch(targets, {
          start: 'top 88%',
          once: true,
          onEnter: (els) =>
            gsap.to(els, { autoAlpha: 1, y: 0, duration: 1, ease: 'expo.out', stagger: 0.08 }),
        });
      });
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <Cursor />
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <CvModal />
    </div>
  );
};

export default App;
