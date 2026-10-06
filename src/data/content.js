export const profile = {
  name: 'Virgil Garcia',
  role: ['Technical', 'Architect'],
  title: 'Expert Infor M3 CloudSuite',
  city: 'Auriol',
  timezone: 'Europe/Paris',
  email: '13viga@gmail.com',
  pitch:
    "Architecte technique spécialisé Infor M3 CloudSuite et intégration des systèmes d'information. Je conçois des solutions fiables, maintenables et adaptées aux besoins métiers.",
  malt: 'https://www.malt.fr/profile/virgilgarcia',
  socials: [
    { label: 'Malt', href: 'https://www.malt.fr/profile/virgilgarcia' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/virgil-garcia-b58796222' },
    { label: 'GitHub', href: 'https://github.com/VirgilGarcia' },
  ],
};

// Sert au calcul des années d'expérience affichées
export const careerStart = new Date(2023, 8, 1);

export const bio = [
  "Architecte technique spécialisé dans l'écosystème Infor M3 CloudSuite et l'intégration des systèmes d'information.",
  "Chez Baudouin depuis septembre 2023, je conçois les échanges entre l'ERP, les applications métiers et les systèmes tiers : flux de données, API, outils de migration, mais aussi des SaaS et portails métiers, de la conception à la mise en production.",
  "En parallèle, j'ai fondé Wiclo, un réseau social dédié à la mode sur iOS et Android, dont je pilote l'architecture et le développement.",
  "Tout a commencé à 12 ans avec Minecraft. L'objectif, lui, n'a pas changé : construire des solutions fiables, maintenables et utiles.",
];

export const experience = [
  {
    title: 'IT Technical Architect',
    place: 'Moteurs Baudouin · Cassis',
    detail: 'Intégration Infor M3 CloudSuite, flux inter-applicatifs, migration de données, SaaS et portails métiers.',
    period: 'Depuis 2023',
  },
  {
    title: 'Fondateur & Lead Developer',
    place: 'Wiclo · Auriol',
    detail: 'Réseau social mode sur iOS et Android : architecture, backend, application mobile et mise en production.',
    period: 'Depuis 2026',
  },
];

export const education = [
  {
    title: 'MSc Architecte Logiciel',
    place: 'Epitech · 2025',
    detail: "Conception d'applications, programmation et réseaux, spécialisation IoT.",
    period: 'Bac +5',
  },
  {
    title: "Concepteur Développeur d'Applications",
    place: 'Le Wagon · 2023',
    detail: 'Formation intensive full stack en développement web.',
    period: 'Bac +3',
  },
];

const icon = (file) => `/assets/${file}`;

export const skillGroups = [
  {
    label: 'ERP Infor',
    skills: [
      { name: 'Infor CloudSuite M3' },
      { name: 'Infor ION / ION API' },
      { name: 'Mapping MEC' },
      { name: 'Data Lake / Compass' },
      { name: 'Infor OS / Mongoose' },
    ],
  },
  {
    label: 'Architecture & IA',
    skills: [
      { name: 'Conception SaaS' },
      { name: 'MQTT / IoT' },
      { name: 'IA générative' },
    ],
  },
  {
    label: 'Front & mobile',
    skills: [
      { name: 'HTML', icon: icon('html.svg') },
      { name: 'CSS', icon: icon('css.svg') },
      { name: 'SCSS', icon: icon('sass.svg') },
      { name: 'JavaScript', icon: icon('javascript.svg') },
      { name: 'TypeScript' },
      { name: 'React', icon: icon('react.svg') },
      { name: 'React Native', icon: icon('react.svg') },
      { name: 'Kotlin', icon: icon('kotlin.svg') },
      { name: 'Flutter', icon: icon('flutter.png') },
    ],
  },
  {
    label: 'Back-end & systèmes',
    skills: [
      { name: 'Node.js', icon: icon('nodejs.png') },
      { name: 'Java', icon: icon('java.svg') },
      { name: 'PHP', icon: icon('php.svg') },
      { name: 'Ruby / Rails', icon: icon('rails.svg') },
      { name: 'Python', icon: icon('python.png') },
      { name: 'C#', icon: icon('csharp.png') },
      { name: 'C++', icon: icon('c++.png') },
    ],
  },
  {
    label: 'Données',
    skills: [
      { name: 'PostgreSQL', icon: icon('postgresql.svg') },
      { name: 'MySQL', icon: icon('mysql.svg') },
      { name: 'SQLite', icon: icon('sqlite.jpeg') },
    ],
  },
  {
    label: 'DevOps & outils',
    skills: [
      { name: 'Docker', icon: icon('docker.svg') },
      { name: 'Podman' },
      { name: 'Git / GitHub', icon: icon('git.svg') },
      { name: 'GitLab', icon: icon('gitlab.svg') },
      { name: 'Nginx / Apache', icon: icon('server.png') },
      { name: 'Bash', icon: icon('bash.svg') },
    ],
  },
];

export const process = [
  {
    title: 'Planification & Analyse',
    text: 'Comprendre le métier, cadrer les besoins et les contraintes avant d’écrire la moindre ligne.',
  },
  {
    title: 'Conception & Architecture',
    text: 'Choisir les bons outils, découper le système et poser des fondations qui tiennent la charge.',
  },
  {
    title: 'Développement & Intégration',
    text: 'Un code lisible, testé et versionné, intégré en continu avec le reste du système.',
  },
  {
    title: 'Tests, Sécurité & Validation',
    text: 'Vérifier, durcir, mesurer. Rien ne part en production sans avoir été éprouvé.',
  },
  {
    title: 'Déploiement & Scalabilité',
    text: 'Conteneuriser, automatiser et préparer le système à grandir sereinement.',
  },
];

export const services = [
  {
    title: 'Intégration Infor M3 CloudSuite',
    text: "Faire dialoguer M3 avec vos applications métiers et vos systèmes tiers, de façon fiable et traçable.",
    tags: ['Infor ION', 'MEC', 'API REST', 'Events', 'Agreements'],
  },
  {
    title: 'Architecture SI & intégration',
    text: "Choix d'architecture, flux inter-applicatifs, microservices et modernisation de solutions existantes.",
    tags: ['Architecture IT', 'Microservices', 'Data Flows'],
  },
  {
    title: 'Migration & traitement de données',
    text: 'Outils de migration et de traitement à grande échelle, automatisation des traitements autour de M3.',
    tags: ['Migration', 'SQL', 'Automatisation'],
  },
  {
    title: 'SaaS & applications full stack',
    text: 'Portails métiers, SaaS et applications mobiles, de la conception à la mise en production.',
    tags: ['Java', 'Node.js', 'React', 'Mobile'],
  },
];

// Les visuels sont des schémas d'architecture dessinés en SVG (voir components/Diagram.jsx)
export const cases = [
  {
    name: 'Intégration Infor M3',
    client: 'Moteurs Baudouin',
    tag: 'Intégration SI',
    diagram: 'integration',
    description:
      "Architecture des échanges entre l'ERP Infor M3 CloudSuite, les applications métiers et les systèmes tiers.",
    points: [
      "Conception des architectures d'intégration et des flux inter-applicatifs",
      'Mise en œuvre avec Infor ION, MEC, API REST et intégrations point à point',
      'Échanges pilotés par Events, Agreements et Data Flows',
    ],
    stack: ['Infor M3', 'ION', 'MEC', 'API REST', 'Events'],
  },
  {
    name: 'Wiclo',
    client: 'Fondateur & Lead Developer',
    tag: 'Produit',
    diagram: 'wiclo',
    description: 'Réseau social dédié à la mode et au partage de tenues, disponible sur iOS et Android.',
    points: [
      "Architecture technique, backend et application mobile, jusqu'à la mise en production",
      'Partage de tenues, recherche par pièce et messages privés',
      'WiCall, des sondages en temps réel, et WiPRO, l’espace des marques et créateurs',
    ],
    stack: ['iOS', 'Android', 'Back-end', 'SaaS'],
  },
  {
    name: 'Migration de données',
    client: 'Moteurs Baudouin',
    tag: 'Data',
    diagram: 'migration',
    description: 'Outils de migration et de traitement de données à grande échelle autour de M3.',
    points: [
      'Conception d’outils de migration et de traitement à grande échelle',
      'Automatisation des traitements et de la gestion des données M3',
    ],
    stack: ['Infor M3', 'SQL', 'Java', 'Node.js'],
  },
  {
    name: 'SaaS & portails métiers',
    client: 'Moteurs Baudouin',
    tag: 'Full stack',
    diagram: 'portal',
    description: 'Applications web et portails métiers connectés au système d’information.',
    points: [
      'Conception et développement full stack, de la conception à la mise en production',
      'Participation aux choix d’architecture et à la modernisation de l’existant',
    ],
    stack: ['React', 'Node.js', 'Java', 'SQL'],
  },
];

export const archive = [
  {
    name: 'The Convoyor',
    description: 'Architecture IoT d’un système de convoyage de colis piloté par application.',
    stack: 'Flutter, C++, M5Stack, MQTT, Docker',
    context: 'Epitech',
  },
  {
    name: 'Le Monaco VR',
    description: 'Casino multijoueur en réalité virtuelle.',
    stack: 'Unity, C#, Blockchain',
    context: 'Epitech',
  },
  {
    name: 'Time Manager',
    description: 'SaaS de gestion du temps de travail avec suivi RH.',
    stack: 'React, Elixir, PostgreSQL',
    context: 'Epitech',
  },
  {
    name: 'Mojo',
    description: 'Application mobile pour scanner et payer ses courses.',
    stack: 'Kotlin, Spring Boot, PostgreSQL',
    context: 'Epitech',
  },
  {
    name: 'Dev-a-licious',
    description: 'Marketplace de mise en relation avec des développeurs.',
    stack: 'Ruby on Rails, PostgreSQL',
    context: 'Le Wagon',
  },
];
