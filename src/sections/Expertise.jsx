import { services } from '../data/content';
import SectionHeading from '../components/SectionHeading';

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
    </div>
  </section>
);

export default Expertise;
