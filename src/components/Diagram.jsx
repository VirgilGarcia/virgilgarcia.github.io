// Schémas d'architecture des réalisations, dessinés en SVG dans le style du site.
// Volontairement génériques : ils montrent la logique, sans détail confidentiel.

const W = 600;
const H = 420;
const NODE_H = 56;

const diagrams = {
  integration: {
    nodes: [
      { id: 'apps', x: 95, y: 110, label: 'Applications', sub: 'métiers' },
      { id: 'tiers', x: 95, y: 310, label: 'Systèmes', sub: 'tiers' },
      { id: 'ion', x: 300, y: 110, label: 'Infor ION', sub: 'API · Events' },
      { id: 'mec', x: 300, y: 310, label: 'MEC', sub: 'mapping' },
      { id: 'm3', x: 500, y: 210, label: 'Infor M3', sub: 'CloudSuite', accent: true },
    ],
    edges: [
      { from: 'apps', to: 'ion', label: 'API REST' },
      { from: 'tiers', to: 'mec', label: 'flux' },
      { from: 'ion', to: 'm3', label: 'Data Flows' },
      { from: 'mec', to: 'm3', label: 'Agreements' },
    ],
  },
  wiclo: {
    nodes: [
      { id: 'app', x: 100, y: 210, label: 'App mobile', sub: 'iOS · Android', accent: true },
      { id: 'api', x: 300, y: 210, label: 'Back-end', sub: 'API' },
      { id: 'feed', x: 500, y: 70, label: 'Tenues', sub: 'partage · recherche' },
      { id: 'dm', x: 500, y: 163, label: 'Messages', sub: 'privés' },
      { id: 'call', x: 500, y: 257, label: 'WiCall', sub: 'sondages live' },
      { id: 'pro', x: 500, y: 350, label: 'WiPRO', sub: 'marques' },
    ],
    edges: [
      { from: 'app', to: 'api', label: 'HTTPS' },
      { from: 'api', to: 'feed' },
      { from: 'api', to: 'dm' },
      { from: 'api', to: 'call' },
      { from: 'api', to: 'pro' },
    ],
  },
  migration: {
    nodes: [
      { id: 'src', x: 95, y: 110, label: 'Sources', sub: 'données existantes' },
      { id: 'extract', x: 300, y: 110, label: 'Extraction', sub: 'à grande échelle' },
      { id: 'transform', x: 300, y: 310, label: 'Traitement', sub: 'contrôles · règles' },
      { id: 'm3', x: 500, y: 310, label: 'Infor M3', sub: 'chargement', accent: true },
      { id: 'auto', x: 500, y: 110, label: 'Automatisation', sub: 'traitements' },
    ],
    edges: [
      { from: 'src', to: 'extract' },
      { from: 'extract', to: 'transform', label: 'lots' },
      { from: 'transform', to: 'm3', label: 'API' },
      { from: 'auto', to: 'm3' },
    ],
  },
  portal: {
    nodes: [
      { id: 'users', x: 95, y: 210, label: 'Utilisateurs', sub: 'métiers' },
      { id: 'front', x: 300, y: 90, label: 'Portail', sub: 'React' },
      { id: 'back', x: 300, y: 330, label: 'API', sub: 'Node.js · Java' },
      { id: 'db', x: 500, y: 330, label: 'Base SQL', sub: 'données' },
      { id: 'm3', x: 500, y: 90, label: 'Infor M3', sub: 'ERP', accent: true },
    ],
    edges: [
      { from: 'users', to: 'front' },
      { from: 'front', to: 'back', label: 'REST' },
      { from: 'back', to: 'db' },
      { from: 'back', to: 'm3', label: 'ION API' },
    ],
  },
};

const NODE_W = 136;

const Diagram = ({ type }) => {
  const d = diagrams[type];
  if (!d) return null;
  const byId = Object.fromEntries(d.nodes.map((n) => [n.id, n]));

  return (
    <svg className="diagram" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Schéma d'architecture">
      <defs>
        <pattern id={`grid-${type}`} width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" className="diagram__dot" />
        </pattern>
      </defs>
      <rect width={W} height={H} fill={`url(#grid-${type})`} />

      {d.edges.map((e, i) => {
        const a = byId[e.from];
        const b = byId[e.to];
        // Coude à mi-chemin pour des liaisons orthogonales lisibles
        const midX = (a.x + b.x) / 2;
        const path = a.y === b.y ? `M${a.x},${a.y} L${b.x},${b.y}` : `M${a.x},${a.y} L${midX},${a.y} L${midX},${b.y} L${b.x},${b.y}`;
        return (
          <g key={i}>
            <path d={path} className="diagram__edge" />
            <path d={path} className="diagram__flow" style={{ animationDelay: `${i * -0.6}s` }} />
            {e.label && (
              <text x={midX} y={(a.y + b.y) / 2 - 8} className="diagram__edge-label" textAnchor="middle">
                {e.label}
              </text>
            )}
          </g>
        );
      })}

      {d.nodes.map((n) => (
        <g key={n.id} className={`diagram__node${n.accent ? ' is-accent' : ''}`}>
          <rect x={n.x - NODE_W / 2} y={n.y - NODE_H / 2} width={NODE_W} height={NODE_H} rx="12" />
          <text x={n.x} y={n.y - 3} textAnchor="middle" className="diagram__label">
            {n.label}
          </text>
          <text x={n.x} y={n.y + 15} textAnchor="middle" className="diagram__sub">
            {n.sub}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default Diagram;
