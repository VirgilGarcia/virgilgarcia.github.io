import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/content';
import Magnetic from '../components/Magnetic';

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
        <p className="kicker" data-reveal>
          <span>05</span> Contact
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
