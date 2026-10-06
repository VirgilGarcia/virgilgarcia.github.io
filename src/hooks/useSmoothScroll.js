import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/gsap';

// Lenis est exposé globalement pour que les liens d'ancre puissent l'utiliser
export let lenis = null;

export const scrollToTarget = (target) => {
  if (lenis) lenis.scrollTo(target, { offset: 0, duration: 1.4 });
  else document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
};

const useSmoothScroll = () => {
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    lenis = new Lenis({ lerp: 0.1 });
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenis = null;
    };
  }, []);
};

export default useSmoothScroll;

// onClick pour les liens d'ancre internes (#section)
export const handleAnchor = (e) => {
  const href = e.currentTarget.getAttribute('href');
  if (!href?.startsWith('#')) return;
  e.preventDefault();
  scrollToTarget(href);
};
