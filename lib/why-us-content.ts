export const whyUsPage = {
  eyebrow: "Perché noi",
  title: "Perché Comodigitale?",
  subtitle: "Tecnologia moderna. Codice proprietario. Un approccio diverso al web.",
  body: "Costruiamo esperienze digitali moderne utilizzando la tecnologia più adatta al progetto, privilegiando quando possibile soluzioni sviluppate su misura.",
} as const;

export const whyUsCompare = {
  title: "Non tutti i siti sono costruiti allo stesso modo.",
  columns: [
    {
      id: "custom",
      name: "Comodigitale",
      caption: "Sviluppo su misura",
    },
    {
      id: "template",
      name: "Template / piattaforme",
      caption: "Sito basato su soluzioni preconfezionate",
    },
  ],
  rows: [
    { label: "Sviluppo su misura", custom: "yes", template: "no" },
    { label: "Codice proprietario", custom: "yes", template: "no" },
    { label: "Performance ottimizzate", custom: "yes", template: "partial" },
    { label: "Design personalizzato", custom: "yes", template: "partial" },
    { label: "Libertà di sviluppo", custom: "yes", template: "no" },
    { label: "Scalabilità", custom: "yes", template: "partial" },
    { label: "Funzionalità personalizzate", custom: "yes", template: "partial" },
    { label: "Dipendenza da template", custom: "no", template: "yes" },
    { label: "Dipendenza da plugin", custom: "no", template: "yes" },
    { label: "Tecnologie moderne", custom: "yes", template: "partial" },
  ],
} as const;

export type CompareMark = "yes" | "no" | "partial";

export const whyUsCode = {
  title: "Il codice cambia tutto.",
  body: "Quando un progetto lo richiede, sviluppiamo direttamente il codice invece di adattare il progetto ai limiti di un template.",
  points: [
    {
      emoji: "⚡",
      title: "Performance",
      body: "Meno elementi inutili. Più controllo sul codice. Esperienza più veloce.",
      image: "/img/pagina-perche-noi/performance.svg",
    },
    {
      emoji: "🎯",
      title: "Personalizzazione",
      body: "Non scegli quello che il template permette. Costruiamo ciò che serve.",
      image: "/img/pagina-perche-noi/personalizzazione.svg",
    },
    {
      emoji: "🚀",
      title: "Scalabilità",
      body: "Il progetto può evolvere insieme alla tua attività, aggiungendo nuove funzionalità senza dover ripartire da zero.",
      image: "/img/pagina-perche-noi/scalabilita.svg",
    },
    {
      emoji: "🧩",
      title: "Libertà",
      body: "Possiamo integrare API, automazioni, database, sistemi esterni e funzionalità personalizzate.",
      image: "/img/pagina-perche-noi/liberta.svg",
    },
    {
      emoji: "🔧",
      title: "Controllo",
      body: "Abbiamo il controllo sull'architettura e sul comportamento del progetto, invece di dipendere completamente da plugin e componenti preconfezionati.",
      image: "/img/pagina-perche-noi/controllo.svg",
    },
  ],
} as const;

export const whyUsVersus = {
  columns: [
    {
      id: "template",
      name: "Template",
      items: [
        { mark: "no", text: "Struttura già definita" },
        { mark: "no", text: "Funzionalità limitate" },
        { mark: "no", text: "Dipendenza da plugin" },
        { mark: "no", text: "Personalizzazione limitata" },
        { mark: "partial", text: "Performance dipendenti dalla struttura" },
      ],
    },
    {
      id: "code",
      name: "Codice",
      items: [
        { mark: "yes", text: "Struttura progettata per il progetto" },
        { mark: "yes", text: "Funzionalità personalizzate" },
        { mark: "yes", text: "Controllo completo" },
        { mark: "yes", text: "Maggiore libertà" },
        { mark: "yes", text: "Ottimizzazione mirata" },
      ],
    },
  ],
  note: "Non significa che utilizziamo sempre il codice.",
  closing: "Significa che sappiamo scegliere quando conviene usarlo.",
} as const;

export const whyUsModern = {
  title: "Siamo nativi del digitale.",
  body: "Siamo una realtà giovane, curiosa e sempre aggiornata sulle tecnologie che stanno cambiando il web.",
  stack: [
    "AI",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Shopify",
    "API",
    "Automation",
  ] as const,
  note: "Non utilizziamo una tecnologia perché è di moda. La utilizziamo quando può migliorare il progetto.",
} as const;

export const whyUsPassion = {
  title: "Facciamo questo perché ci piace farlo.",
  body: "Studiare nuove tecnologie, progettare interfacce, scrivere codice e trasformare idee in prodotti reali non è semplicemente il nostro lavoro. È quello che ci appassiona.",
} as const;

export const whyUsCta = {
  title: "Non cercare un fornitore. Trova qualcuno che costruisca con te.",
  body: "Hai un progetto? Raccontacelo.",
} as const;
