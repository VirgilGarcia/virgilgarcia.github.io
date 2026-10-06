export const profile = {
  name: 'Virgil Garcia',
  role: ['Software', 'Architect'],
  city: 'Marseille',
  timezone: 'Europe/Paris',
  email: '13viga@gmail.com',
  pitch:
    "Je conçois des SaaS et des architectures logicielles robustes, de l'ERP aux systèmes connectés, de l'idée jusqu'à la mise en production.",
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/virgil-garcia-b58796222' },
    { label: 'GitHub', href: 'https://github.com/VirgilGarcia' },
  ],
};

export const bio = [
  "Passionné par l'IT depuis mon plus jeune âge, tout a commencé à 12 ans avec Minecraft : c'est là que j'ai découvert la programmation, puis créé mon premier site web.",
  "Autodidacte à mes débuts, j'ai exploré HTML, CSS, JavaScript et PHP à travers des projets personnels avant de me former avec Le Wagon en 2023, puis d'être diplômé d'Epitech en architecture logicielle, avec une spécialisation IoT.",
  "Depuis septembre 2023, je travaille chez Baudouin. J'y conçois des SaaS et je fais évoluer l'ERP Infor CloudSuite M3 : des architectures efficaces, pensées pour les besoins métiers et pour durer.",
];

export const experience = [
  {
    title: 'Baudouin',
    place: 'Depuis septembre 2023',
    detail: 'Conception de SaaS et développement autour de l’ERP Infor CloudSuite M3.',
    period: 'En poste',
  },
];

export const education = [
  {
    title: "MSc Pro Architecte Logiciel",
    school: 'Epitech, Marseille',
    detail: "Diplômé en conception d'applications, programmation & réseaux, spécialisation IoT.",
    level: 'Bac +5',
  },
  {
    title: "Concepteur Développeur d'Applications",
    school: 'Le Wagon, Marseille',
    detail: 'Formation intensive full-stack en développement web.',
    level: 'Bac +3',
  },
  {
    title: 'Baccalauréat STMG',
    school: 'Lycée Joliot-Curie, Aubagne',
    detail: 'Spécialité Systèmes d’Information de Gestion.',
    level: 'Bac',
  },
];

const icon = (file) => `/assets/${file}`;

export const skillGroups = [
  {
    label: 'ERP & IA',
    skills: [
      { name: 'Infor CloudSuite M3' },
      { name: 'Conception SaaS' },
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
      { name: 'React', icon: icon('react.svg') },
      { name: 'React Native', icon: icon('react.svg') },
      { name: 'Kotlin', icon: icon('kotlin.svg') },
      { name: 'Flutter', icon: icon('flutter.png') },
    ],
  },
  {
    label: 'Back-end',
    skills: [
      { name: 'Node.js', icon: icon('nodejs.png') },
      { name: 'Ruby', icon: icon('ruby.svg') },
      { name: 'Rails', icon: icon('rails.svg') },
      { name: 'PHP', icon: icon('php.svg') },
      { name: 'Java', icon: icon('java.svg') },
    ],
  },
  {
    label: 'Systèmes',
    skills: [
      { name: 'C++', icon: icon('c++.png') },
      { name: 'C#', icon: icon('csharp.png') },
      { name: 'Python', icon: icon('python.png') },
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

export const projects = [
  {
    name: 'The Convoyor',
    image: '/assets/convoyor.webp',
    description:
      "Architecture d'un nouveau système de convoyage de colis industriel, piloté par application mobile.",
    stack: ['Flutter', 'C++', 'M5Stack', 'MQTT', 'ERP', 'Docker'],
    context: 'Projet Epitech, en groupe',
    tag: 'IoT',
  },
  {
    name: 'Le Monaco VR',
    image: '/assets/casino.webp',
    description: 'Casino de jeux de hasard multijoueur en réalité virtuelle.',
    stack: ['Unity', 'C#', 'Blockchain', 'Docker'],
    context: 'Projet Epitech, en groupe',
    tag: 'VR',
  },
  {
    name: 'Time Manager',
    image: '/assets/timemanager.webp',
    description: "SaaS de gestion du temps de travail avec suivi RH.",
    stack: ['React', 'SCSS', 'Elixir', 'PostgreSQL'],
    context: 'Projet Epitech, en groupe',
    tag: 'SaaS',
  },
  {
    name: 'Mojo',
    image: '/assets/mojo.webp',
    description: 'Application mobile pour scanner, lister et payer ses courses directement depuis son téléphone.',
    stack: ['Kotlin', 'Jetpack Compose', 'Spring Boot', 'PostgreSQL'],
    context: 'Projet Epitech, en groupe',
    tag: 'Mobile',
  },
  {
    name: 'Dev-a-licious',
    image: '/assets/dev-a-licious.webp',
    description: 'Marketplace pour proposer ses services de développeur ou recruter des programmeurs.',
    stack: ['Ruby on Rails', 'PostgreSQL', 'SCSS', 'JavaScript'],
    context: 'Projet Le Wagon, en groupe',
    tag: 'Web',
  },
  {
    name: 'La Musclerie',
    image: '/assets/lamusclerie.webp',
    description: 'Site proposant des articles et des programmes sportifs.',
    stack: ['PHP', 'MySQL', 'SCSS', 'JavaScript'],
    context: 'Projet perso, avec un ami',
    tag: 'Web',
  },
];
