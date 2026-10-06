import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/content';
import Magnetic from '../components/Magnetic';

const ringText = 'Travaillons ensemble • Let’s build • ';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact__ring" aria-hidden="true">
          <svg viewBox="0 0 200 200">
            <defs>
              <path id="ring-path" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
            </defs>
            <text>
              <textPath href="#ring-path" textLength="488" lengthAdjust="spacing">
                {ringText.repeat(2)}
              </textPath>
            </text>
          </svg>
          <span className="contact__arrow">↘</span>
        </div>

        <p className="kicker" data-reveal>
          <span>06</span> Contact
        </p>
        <h2 className="contact__title" data-reveal>
          Un projet en tête ?
          <br />
          <em>Parlons-en.</em>
        </h2>

        <div className="contact__actions" data-reveal>
          <Magnetic>
            <a href={`mailto:${profile.email}`} className="btn btn--big">
              Écrire un e-mail <span aria-hidden="true">→</span>
            </a>
          </Magnetic>
          <button type="button" className="contact__email" onClick={copy} data-cursor="Copier">
            {profile.email}
            <span aria-live="polite">{copied ? 'Copié ✓' : 'Copier'}</span>
          </button>
        </div>

        <ul className="contact__socials" data-reveal>
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label} <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
