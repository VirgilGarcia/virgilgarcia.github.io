# virgilgarcia.github.io

Portfolio de Virgil Garcia, architecte logiciel full-stack & IoT.
En ligne : https://virgilgarcia.github.io/

## Stack

- **React 19** + **Vite**
- **GSAP / ScrollTrigger** pour les animations au scroll, **Lenis** pour le smooth scroll
- **three.js** (shader maison) pour la sphère de particules du hero, chargée en différé
- **Sass** pour les styles (`src/styles`)

## Scripts

```bash
npm install
npm run dev      # serveur de dev sur http://localhost:5173
npm run build    # build de production dans build/
npm run deploy   # build + publication sur la branche gh-pages
```

## Modifier le contenu

Tout le texte (bio, formations, stack, méthode, projets) est centralisé dans
[`src/data/content.js`](src/data/content.js). Les images sont dans `public/assets/`
(préférer le format WebP, ~1600 px de large max).

Les animations respectent `prefers-reduced-motion`.
