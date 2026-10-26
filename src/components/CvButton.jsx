import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/content';
import { lenis, scrollToTarget } from '../hooks/useSmoothScroll';

const OPEN_EVENT = 'cv:open';

// Bouton CV. Si profile.cv pointe vers un PDF, il le télécharge directement ;
// sinon il ouvre la fenêtre « CV sur demande » (CvModal, montée une seule fois dans App).
export const CvButton = ({ className = 'btn' }) =>
  profile.cv ? (
    <a href={profile.cv} className={className} download>
      Télécharger mon CV <span aria-hidden="true">↓</span>
    </a>
  ) : (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      Télécharger mon CV <span aria-hidden="true">↓</span>
    </button>
  );

export const CvModal = () => {
  const dialog = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const el = dialog.current;
    const open = () => {
      setCopied(false);
      el.showModal();
      lenis?.stop();
    };
    const onClose = () => lenis?.start();
    window.addEventListener(OPEN_EVENT, open);
    el.addEventListener('close', onClose);
    return () => {
      window.removeEventListener(OPEN_EVENT, open);
      el.removeEventListener('close', onClose);
    };
  }, []);

  const close = () => dialog.current.close();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const goToContact = () => {
    close();
    // L'événement « close » arrive après coup : on relance le scroll tout de suite
    lenis?.start();
    scrollToTarget('#contact');
  };

  return (
    <dialog
      ref={dialog}
      className="cv-modal"
      aria-labelledby="cv-modal-title"
      // Clic sur le fond (hors du contenu) : fermeture
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div className="cv-modal__content">
        <button type="button" className="cv-modal__close" onClick={close} aria-label="Fermer">
          ×
        </button>
        <p className="kicker">CV</p>
        <h2 id="cv-modal-title">Mon CV est sur demande</h2>
        <p>Je le mets à jour en ce moment. Écrivez-moi et je vous envoie la dernière version directement.</p>

        <div className="cv-modal__actions">
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent('Demande de CV')}`}
            className="btn"
          >
            Demander mon CV par e-mail <span aria-hidden="true">→</span>
          </a>
          <button type="button" className="contact__email" onClick={copy}>
            {profile.email}
            <span aria-live="polite">{copied ? 'Copié ✓' : 'Copier'}</span>
          </button>
        </div>

        <button type="button" className="cv-modal__link" onClick={goToContact}>
          Voir tous les moyens de me contacter
        </button>
      </div>
    </dialog>
  );
};
