import { bio, education, experience, profile, skillGroups } from '../data/content';
import SectionHeading from '../components/SectionHeading';

const techCount = skillGroups.reduce((n, g) => n + g.skills.length, 0);

const stats = [
  { value: '12', unit: ' ans', label: 'Mes premières lignes de code' },
  { value: String(techCount), unit: '+', label: 'Technologies pratiquées' },
  { value: 'Bac', unit: '+5', label: 'Diplômé architecte logiciel, Epitech' },
];

const Timeline = ({ label, items }) => (
  <div className="education">
    <p className="kicker education__label" data-reveal>
      {label}
    </p>
    <ol>
      {items.map((e, i) => (
        <li className="education__row" key={e.title} data-reveal>
          <span className="education__index">0{i + 1}</span>
          <div>
            <h3>{e.title}</h3>
            <p>{e.sub}</p>
          </div>
          <p className="education__detail">{e.detail}</p>
          <span className="education__level">{e.badge}</span>
        </li>
      ))}
    </ol>
  </div>
);

const About = () => (
  <section className="section about" id="about">
    <div className="container">
      <SectionHeading index="01" kicker="À propos">
        Du premier bloc Minecraft
        <br />
        <em>à l’architecture logicielle.</em>
      </SectionHeading>

      <div className="about__grid">
        <figure className="about__photo" data-reveal>
          <img src="/assets/moi.webp" alt={`Portrait de ${profile.name}`} width="1000" height="1000" />
          <figcaption>
            {profile.name} <span>· {profile.city}</span>
          </figcaption>
        </figure>

        <div className="about__bio" data-reveal>
          {bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <ul className="about__stats">
          {stats.map((s) => (
            <li key={s.label} data-reveal>
              <strong>
                {s.value}
                <span>{s.unit}</span>
              </strong>
              {s.label}
            </li>
          ))}
        </ul>
      </div>

      <Timeline label="Expérience" items={experience.map((e) => ({ ...e, sub: e.place, badge: e.period }))} />
      <Timeline label="Formation" items={education.map((e) => ({ ...e, sub: e.school, badge: e.level }))} />
    </div>
  </section>
);

export default About;
