import { profile, services } from '../data/content';
import { handleAnchor } from '../hooks/useSmoothScroll';
import SectionHeading from '../components/SectionHeading';
import Magnetic from '../components/Magnetic';

const Expertise = () => (
  <section className="section expertise" id="expertise">
    <div className="container">
      <SectionHeading index="02" kicker="Expertise">
        Ce que je peux faire
        <br />
        <em>pour votre SI.</em>
      </SectionHeading>

      <div className="expertise__grid">
        {services.map((s, i) => (
          <article className="service" key={s.title} data-reveal>
            <span className="service__num">0{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <ul className="chips">
              {s.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="expertise__cta" data-reveal>
        <p>
          <span className="pulse" aria-hidden="true" /> Ouvert aux missions freelance, notamment sur site
          jusqu’à 50 km autour d’{profile.city}.
        </p>
        <div className="expertise__actions">
          <Magnetic>
            <a href={profile.malt} className="btn" target="_blank" rel="noopener noreferrer">
              Me proposer une mission sur Malt <span aria-hidden="true">↗</span>
            </a>
          </Magnetic>
          <a href="#contact" className="expertise__link" onClick={handleAnchor}>
            Ou m’écrire directement
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Expertise;
