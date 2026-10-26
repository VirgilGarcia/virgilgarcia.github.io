import { lazy, Suspense, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import { profile } from '../data/content';
import { CvButton } from '../components/CvButton';

// three.js est chargé à part pour ne pas retarder l'affichage du texte
const Sphere = lazy(() => import('../components/Sphere'));

const splitChars = (word) =>
  [...word].map((c, i) => (
    <span className="char" key={i}>
      {c}
    </span>
  ));

const Hero = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        gsap
          .timeline({ defaults: { ease: 'expo.out' } })
          .from('.char', { yPercent: 115, duration: 1.4, stagger: 0.045 }, 0.2)
          .from('.hero__fade', { autoAlpha: 0, y: 24, duration: 1.2, stagger: 0.12 }, 0.9);

        // Le titre s'éloigne pendant que l'on quitte le hero
        gsap.to('.hero__title', {
          yPercent: -20,
          autoAlpha: 0.15,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        });
      });
    },
    { scope: root }
  );

  return (
    <section className="hero" id="top" ref={root}>
      <Suspense fallback={null}>
        <Sphere />
      </Suspense>
      <div className="hero__inner container">
        <p className="hero__eyebrow hero__fade">
          {profile.name}
        </p>

        <h1 className="hero__title">
          <span className="sr-only">{profile.name}, </span>
          <span className="hero__line">{splitChars(profile.role[0])}</span>
          <span className="hero__line hero__line--outline">{splitChars(profile.role[1])}</span>
        </h1>

        <div className="hero__bottom">
          <div className="hero__intro hero__fade">
            <p className="hero__status">
              <span className="pulse" aria-hidden="true" /> {profile.availability}
            </p>
            <p className="hero__pitch">{profile.pitch}</p>
          </div>
          <div className="hero__cta hero__fade">
            <CvButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
