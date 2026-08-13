export const site = {
  name: "comodigitale",
  tagline: "Digital solutions for ambitious businesses.",
  location: "Como, Italia",
  email: "info@comodigitale.it",
  whatsapp: "390000000000",
  phoneDisplay: "+39 000 000 0000",
  piva: "00000000000",
  year: 2026,
} as const;

export const navItems = [
  { label: "Home", href: "/#hero" },
  { label: "Servizi", href: "/#servizi" },
  // { label: "Portfolio", href: "/#portfolio" },
  { label: "Processo", href: "/#processo" },
  { label: "Chi siamo", href: "/#chi-siamo" },
  { label: "Contatti", href: "/#contatti" },
] as const;

export const hero = {
  eyebrow: "WEB AGENCY · COMO",
  headline: "Costruiamo esperienze digitali che fanno crescere il tuo business.",
  subheadline:
    "Progettiamo e sviluppiamo siti web, e-commerce e soluzioni digitali su misura per aziende e professionisti.",
  ctaPrimary: "Inizia un progetto",
  ctaSecondary: "Scopri cosa facciamo",
} as const;

/** Max 3 projects. Screens: desktop 1440×900 (16:10), mobile 390×844. */
export const heroMockups = [
  {
    name: "Como Private Driver",
    desktopSrc: "/img/projects/comoprivatedriverpc.png",
    mobileSrc: "/img/projects/comoprivatedrivermobile.png",
  },
  {
    name: "Spazio AC",
    desktopSrc: "/img/projects/spazioacpc.png",
    mobileSrc: "/img/projects/spazioacmobile.png",
  },
  {
    name: "jaderweb",
    desktopSrc: "/img/projects/jaderwebpc.png",
    mobileSrc: "/img/projects/jaderwebmobile.png",
  },
] as const;

export const authorityStrip = {
  marqueeText: "WEB ✦ E-COMMERCE ✦ DEVELOPMENT ✦ AUTOMATION ✦ ",
  tagline: "Dalla prima idea al progetto online.",
} as const;

export const scrollExpandSection = {
  title: "un unico partner digitale",
  scrollHint: "Scroll",
  imageSrcLight: "/img/sezione2bgchiaro.jpg",
  imageSrcDark: "/img/sezione2bgscuro.jpg",
  imageAlt: "Partner digitale comodigitale",
  services: [
    { label: "Siti web", icon: "/img/svg/sitiweb.svg" },
    { label: "Ecommerce", icon: "/img/svg/ecommerce.svg" },
    { label: "Automazioni", icon: "/img/svg/automazioni.svg" },
    { label: "Brand identity", icon: "/img/svg/brandidentity.svg" },
    { label: "Ads", icon: "/img/svg/ads.svg" },
  ],
} as const;

export const serviceCategories = [
  {
    number: "01",
    title: "Siti Web",
    description:
      "Siti web progettati per rappresentare il tuo brand e trasformare visitatori in clienti.",
    items: [
      "Siti vetrina",
      "Landing page",
      "Blog",
      "Siti corporate",
      "Sviluppo custom",
    ],
  },
  {
    number: "02",
    title: "E-commerce",
    description:
      "Costruiamo e-commerce pensati per vendere, semplici da gestire e pronti a crescere.",
    items: [
      "Shopify",
      "E-commerce custom",
      "Pagamenti online",
      "Automazioni",
      "Integrazioni",
    ],
  },
  {
    number: "03",
    title: "Web Development",
    description:
      "Quando un template non basta, sviluppiamo la soluzione da zero.",
    items: [
      "Next.js",
      "React",
      "Node.js",
      "API",
      "Web application",
      "Database",
      "Integrazioni",
    ],
  },
  {
    number: "04",
    title: "Automazioni",
    description:
      "Riduciamo le attività manuali trasformandole in processi automatici.",
    items: ["Bot", "Automazioni", "API", "Workflow", "Integrazione tra servizi"],
  },
] as const;

export const portfolioProjects = [
  {
    title: "Hospitality Lago di Como",
    tags: "WEB DESIGN · NEXT.JS",
    size: "large" as const,
    accent: true,
  },
  {
    title: "Boat Experience",
    tags: "LANDING · BRAND",
    size: "small" as const,
    accent: false,
  },
  {
    title: "Retail Lombardo",
    tags: "E-COMMERCE · SHOPIFY",
    size: "small" as const,
    accent: false,
  },
  {
    title: "Studio Professionale",
    tags: "CORPORATE · SEO",
    size: "large" as const,
    accent: false,
  },
] as const;

export const differentiation = {
  title: "Non siamo qui per venderti un sito.",
  body: "Partiamo dal tuo business, dagli obiettivi e dalle persone che vuoi raggiungere. Progettiamo quindi la tecnologia e l'esperienza digitale intorno alle tue esigenze.",
  points: [
    {
      title: "Strategia",
      description: "Prima capiamo il problema.",
      icon: "/img/svg/strategia.svg",
    },
    {
      title: "Design",
      description: "Costruiamo un'esperienza coerente con il brand.",
      icon: "/img/svg/design.svg",
    },
    {
      title: "Development",
      description: "Trasformiamo il progetto in un prodotto digitale reale.",
      icon: "/img/svg/development.svg",
    },
    {
      title: "Crescita",
      description: "Ti accompagniamo anche dopo la pubblicazione.",
      icon: "/img/svg/crescita.svg",
    },
  ],
} as const;

export const processSection = {
  title: "Dal primo messaggio al lancio.",
  body: "Un percorso chiaro, trasparente e collaborativo: dalla prima conversazione al go-live, e oltre.",
} as const;

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Parliamo del progetto e degli obiettivi.",
  },
  {
    number: "02",
    title: "Strategia",
    description: "Definiamo struttura, funzionalità e direzione.",
  },
  {
    number: "03",
    title: "Design",
    description: "Creiamo l'esperienza visiva.",
  },
  {
    number: "04",
    title: "Development",
    description: "Sviluppiamo il progetto.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Testiamo, ottimizziamo e pubblichiamo.",
  },
  {
    number: "06",
    title: "Support",
    description: "Continuiamo a seguirti dopo il lancio.",
  },
] as const;

export const technologies = {
  title: "La tecnologia dietro i nostri progetti.",
  body: "Utilizziamo tecnologie moderne per creare prodotti digitali veloci, scalabili e facilmente mantenibili.",
  stack: [
    "Next.js",
    "Node.js",
    "Shopify",
    "Linux",
    "Vercel",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "MySQL",
  ] as const,
} as const;

export const testimonialsSection = {
  label: "Testimonianze",
  title: "Le parole dei nostri clienti.",
  body: "Collaborazioni concrete, risultati misurabili e relazioni che continuano nel tempo.",
  items: [
    {
      quote:
        "Professionisti, disponibili e attenti ai dettagli. Hanno trasformato la nostra presenza online in uno strumento che porta contatti reali.",
      name: "Marco R.",
      role: "PMI · Lombardia",
    },
    {
      quote:
        "Dal primo incontro al go-live tutto è stato chiaro. Il sito riflette davvero il nostro brand e funziona benissimo anche da mobile.",
      name: "Elena B.",
      role: "Hospitality · Como",
    },
    {
      quote:
        "Volevamo un e-commerce semplice da gestire: l'abbiamo ottenuto, con un'esperienza di acquisto fluida e un supporto costante.",
      name: "Giulia T.",
      role: "Retail · Milano",
    },
    {
      quote:
        "Non solo design: ci hanno aiutato a capire obiettivi e priorità. Oggi riceviamo richieste più qualificate.",
      name: "Andrea P.",
      role: "Studio professionale · Como",
    },
    {
      quote:
        "Tempi rispettati, comunicazione trasparente e un risultato che ci rappresenta. Li consigliamo senza esitazione.",
      name: "Sofia M.",
      role: "Startup · Lombardia",
    },
  ],
} as const;

export const caseStudy = {
  title: "Da un'idea a un e-commerce pronto a vendere.",
  client: "Cliente retail",
  sector: "Fashion & lifestyle",
  solution: "Shopify",
  services: "Design · Development · E-commerce · Automazioni",
  result:
    "Un percorso completo: dalla struttura del catalogo al go-live, con un'esperienza di acquisto semplice e coerente con il brand.",
} as const;

export const localSection = {
  title: "Una web agency a Como.",
  titleLine2: "Progetti digitali ovunque.",
  body: "Siamo una web agency con base a Como e lavoriamo con aziende, professionisti e realtà che vogliono costruire una presenza digitale realmente efficace.",
  areas: ["Como", "Milano", "Lombardia", "Italia"] as const,
} as const;

export const finalCta = {
  title: "Hai un progetto in mente?",
  body: "Raccontaci cosa vuoi costruire. Ti risponderemo con una prima valutazione del progetto.",
  cta: "Raccontaci il tuo progetto",
  alt: "Oppure scrivici direttamente",
} as const;

export const contactForm = {
  tabs: {
    privato: "Privato",
    azienda: "Azienda",
  },
  optionalHint: "facoltativo",
  fields: {
    fullName: "Nome e cognome",
    companyName: "Nome azienda",
    contactPerson: "Nome referente",
    vat: "Partita IVA",
    phone: "Telefono",
    email: "Email",
    website: "Sito web attuale",
    service: "Tipo di servizio",
    budget: "Budget",
    message: "Raccontaci il progetto",
    privacy: "Ho letto e accetto l'informativa sulla privacy.",
  },
  placeholders: {
    service: "Seleziona un servizio",
    budget: "Seleziona un range",
  },
  services: [
    "Siti Web",
    "E-commerce",
    "Web Development",
    "Automazioni",
    "Brand identity",
    "Ads",
    "Altro",
  ],
  budgets: [
    "Da definire",
    "Fino a 2.000 €",
    "2.000 – 5.000 €",
    "5.000 – 10.000 €",
    "Oltre 10.000 €",
  ],
} as const;

export const footerLinks = {
  services: [
    { label: "Siti Web", href: "/#servizi" },
    { label: "E-commerce", href: "/#servizi" },
    { label: "Web Development", href: "/#servizi" },
    { label: "Automazioni", href: "/#servizi" },
  ],
  agency: [
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Processo", href: "/#processo" },
    { label: "Chi siamo", href: "/#chi-siamo" },
    { label: "Contatti", href: "/#contatti" },
  ],
} as const;
