import { skillGroups } from '../data/content';
import SectionHeading from '../components/SectionHeading';

// Logo si disponible, sinon un simple repère
const SkillIcon = ({ skill, size }) =>
  skill.icon ? (
    <img src={skill.icon} alt="" loading="lazy" width={size} height={size} />
  ) : (
    <span className="skill-dot" aria-hidden="true" />
  );

const Skills = () => (
  <section className="section skills" id="stack">
    <div className="container">
      <SectionHeading index="04" kicker="Stack technique">
        Les outils que j’utilise
        <br />
        <em>(et bien plus encore).</em>
      </SectionHeading>

      <div className="skills__grid">
        {skillGroups.map((g) => (
          <div className="skills__group" key={g.label} data-reveal>
            <h3>{g.label}</h3>
            <ul>
              {g.skills.map((s) => (
                <li key={s.name}>
                  <SkillIcon skill={s} size="20" />
                  {s.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
