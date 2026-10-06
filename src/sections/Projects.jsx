import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '../lib/gsap';
import { archive, cases } from '../data/content';
import SectionHeading from '../components/SectionHeading';
import Diagram from '../components/Diagram';

const pad = (n) => String(n).padStart(2, '0');

const Projects = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        const cards = gsap.utils.toArray('.project');
        // Chaque carte recule quand la suivante vient s'empiler dessus
        cards.slice(0, -1).forEach((card, i) => {
          gsap.to(card.querySelector('.project__card'), {
            scale: 0.92,
            '--dim': 0.7,
            ease: 'none',
            scrollTrigger: { trigger: cards[i + 1], start: 'top bottom', end: 'top 20%', scrub: true },
          });
        });
      });

      // Position collante de chaque carte : si elle est plus haute que l'écran, elle
      // défile jusqu'à montrer son bas avant de se figer, pour ne rien masquer de son contenu.
      gsap.matchMedia().add('(min-width: 901px)', () => {
        const cards = gsap.utils.toArray('.project');
        const setTops = () => {
          cards.forEach((card, i) => {
            const ideal = 96 + i * 16;
            card.style.top = `${Math.min(ideal, window.innerHeight - card.offsetHeight - 24)}px`;
          });
        };
        setTops();
        ScrollTrigger.addEventListener('refreshInit', setTops);
        return () => {
          ScrollTrigger.removeEventListener('refreshInit', setTops);
          cards.forEach((card) => (card.style.top = ''));
        };
      });
    },
    { scope: root }
  );

  return (
    <section className="section projects" id="projects" ref={root}>
      <div className="container">
        <SectionHeading index="03" kicker="Réalisations">
          Des systèmes en production,
          <br />
          <em>pas des maquettes.</em>
        </SectionHeading>

        <div className="projects__list">
          {cases.map((p, i) => (
            <article className="project" key={p.name} style={{ '--i': i }}>
              <div className="project__card">
                <div className="project__media">
                  <Diagram type={p.diagram} />
                </div>
                <div className="project__body">
                  <div className="project__top">
                    <span>
                      {pad(i + 1)} / {pad(cases.length)} · {p.client}
                    </span>
                    <span className="tag">{p.tag}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p className="project__desc">{p.description}</p>
                  <ul className="project__points">
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <ul className="chips" aria-label="Technologies">
                    {p.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="archive">
          <p className="kicker" data-reveal>
            Avant Baudouin · projets de formation
          </p>
          <ul>
            {archive.map((p) => (
              <li className="archive__row" key={p.name} data-reveal>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <span className="archive__stack">{p.stack}</span>
                <span className="archive__context">{p.context}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
