import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

// Curseur personnalisé, uniquement sur les appareils à pointeur précis
const Cursor = () => {
  const dot = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;
    const el = dot.current;
    document.documentElement.classList.add('has-cursor');

    const xTo = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3' });

    const move = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      const interactive = e.target.closest('a, button, [data-cursor]');
      el.classList.toggle('is-hover', Boolean(interactive));
      el.dataset.label = interactive?.dataset.cursor ?? '';
    };
    const leave = () => el.classList.add('is-hidden');
    const enter = () => el.classList.remove('is-hidden');

    window.addEventListener('pointermove', move);
    document.addEventListener('pointerleave', leave);
    document.addEventListener('pointerenter', enter);
    return () => {
      document.documentElement.classList.remove('has-cursor');
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
      document.removeEventListener('pointerenter', enter);
    };
  }, []);

  return <div className="cursor" ref={dot} aria-hidden="true" />;
};

export default Cursor;
