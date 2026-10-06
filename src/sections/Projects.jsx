import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import { projects } from '../data/content';
import { handleAnchor } from '../hooks/useSmoothScroll';
import SectionHeading from '../components/SectionHeading';

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
        gsap.utils.toArray('.project__media img').forEach((img) => {
          gsap.fromTo(
            img,
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: 'none',
              scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
            }
          );
        });
      });
    },
    { scope: root }
  );

  return (
    <section className="section projects" id="projects" ref={root}>
      <div className="container">
        <SectionHeading index="04" kicker="Projets sélectionnés">
          Ce que j’ai construit,
          <br />
          <em>seul ou en équipe.</em>
        </SectionHeading>

        <div className="projects__list">
          {projects.map((p, i) => (
            <article className="project" key={p.name} style={{ '--i': i }}>
              <div className="project__card">
                <div className="project__media">
                  <img src={p.image} alt={`Aperçu du projet ${p.name}`} loading="lazy" />
                </div>
                <div className="project__body">
                  <div className="project__top">
                    <span>
                      {pad(i + 1)} / {pad(projects.length)}
                    </span>
                    <span className="tag">{p.tag}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p className="project__desc">{p.description}</p>
                  <ul className="chips" aria-label="Technologies">
                    {p.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <p className="project__context">{p.context}</p>
                </div>
              </div>
            </article>
          ))}

          <article className="project project--cta" style={{ '--i': projects.length }}>
            <div className="project__card">
              <div className="project__body">
                <p className="kicker">Prochain projet</p>
                <h3>
                  Et bien d’autres…
                  <br />
                  <em>peut-être le vôtre ? 👀</em>
                </h3>
                <a href="#contact" className="btn" onClick={handleAnchor}>
                  Démarrer un projet <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
