import { profile } from '../data/content';
import { handleAnchor } from '../hooks/useSmoothScroll';

const Footer = () => (
  <footer className="footer">
    <span>© {new Date().getFullYear()} {profile.name}</span>
    <span className="footer__joke">Fait main, avec un Minitel</span>
    <a href="#top" onClick={handleAnchor}>
      Retour en haut ↑
    </a>
  </footer>
);

export default Footer;
