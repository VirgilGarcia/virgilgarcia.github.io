import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '../lib/gsap';
import { process } from '../data/content';
import SectionHeading from '../components/SectionHeading';

const Process = () => {
  const root = useRef(null);
  const track = useRef(null);

  useGSAP(
    () => {
      // Apparition du titre, déclenchée par la section (le titre est dans le bloc sticky)
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.process [data-reveal]', {
          autoAlpha: 0,
          y: 40,
          duration: 1,
          ease: 'expo.out',
          stagger: 0.08,
          scrollTrigger: { trigger: root.current, start: 'top 75%', once: true },
        });
      });

      // Défilement horizontal sur grand écran. Pas de pin GSAP : le bloc est en
      // position sticky (CSS), la section est juste assez haute pour parcourir la piste.
      gsap
        .matchMedia()
        .add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
          const distance = () => track.current.scrollWidth - window.innerWidth;
          const setHeight = () => {
            root.current.style.height = `${window.innerHeight + distance()}px`;
          };
          setHeight();
          ScrollTrigger.addEventListener('refreshInit', setHeight);

          gsap
            .timeline({
              defaults: { ease: 'none' },
              scrollTrigger: {
                trigger: root.current,
                start: 'top top',
                end: 'bottom bottom',
                // Lenis lisse déjà le scroll : on suit la position 1:1
                scrub: true,
                invalidateOnRefresh: true,
              },
            })
            .to(track.current, { x: () => -distance() }, 0)
            .fromTo('.process__bar span', { scaleX: 0 }, { scaleX: 1 }, 0);

          return () => {
            ScrollTrigger.removeEventListener('refreshInit', setHeight);
            root.current.style.height = '';
          };
        });
    },
    { scope: root }
  );

  return (
    <section className="process" id="process" ref={root}>
      <div className="process__sticky">
        <div className="container">
          <SectionHeading index="05" kicker="Méthode">
            Comment je construis
            <br />
            <em>un système qui dure.</em>
          </SectionHeading>
        </div>

        <div className="process__track" ref={track}>
          {process.map((step, i) => (
            <article className="step" key={step.title}>
              <span className="step__num">0{i + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="container">
          <div className="process__bar" aria-hidden="true">
            <span />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
