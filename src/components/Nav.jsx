import { useEffect, useState } from 'react';
import { profile } from '../data/content';
import { handleAnchor } from '../hooks/useSmoothScroll';

const links = [
  { href: '#about', label: 'À propos' },
  { href: '#stack', label: 'Stack' },
  { href: '#process', label: 'Méthode' },
  { href: '#projects', label: 'Projets' },
];

const formatTime = () =>
  new Intl.DateTimeFormat('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: profile.timezone,
  }).format(new Date());

const Nav = () => {
  const [time, setTime] = useState(formatTime);

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime()), 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="nav">
      <a href="#top" className="nav__logo" onClick={handleAnchor} aria-label="Retour en haut">
        VG<span>.</span>
      </a>
      <nav className="nav__links" aria-label="Navigation principale">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={handleAnchor}>
            {l.label}
          </a>
        ))}
      </nav>
      <div className="nav__meta">
        <span className="nav__time">
          {profile.city} · {time}
        </span>
        <a href="#contact" className="btn btn--small" onClick={handleAnchor}>
          Contact
        </a>
      </div>
    </header>
  );
};

export default Nav;
