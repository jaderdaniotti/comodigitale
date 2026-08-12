# Istruzioni Cursor — Sito Web Agency Como (clone grafico da portfolio jaderweb)

> **Come usare questo file**
> - Copia questo documento nel **progetto clone** (fork/duplicato del repo portfolio).
> - Incollalo come **prompt iniziale** in Cursor **oppure** salvalo come regola persistente in `.cursor/rules/web-agency-como.mdc` con `alwaysApply: true`.
> - **Non applicare queste modifiche al sito portfolio originale** (jaderweb): lavora solo sul clone dedicato all'agenzia.
> - Sostituisci tutti i placeholder `[...]` con i dati reali dell'agenzia prima del deploy.

---

## 1. Obiettivo del progetto

Trasformare il clone del portfolio personale **jaderweb** in un sito per una **web agency con sede a Como, in pieno centro**, gestita da **due soci**.

Il risultato deve essere **visivamente quasi identico** al sito di partenza (stesso mood, stesse animazioni, stesso layout full-page, stesso design system zinc/viola), ma con:

- Identità **agenzia** (noi / team) invece che **freelance singolo**
- Localizzazione **Como (CO), Lombardia**, con SEO locale
- Contenuti orientati a **servizi B2B**, portfolio clienti, processo di lavoro
- Navigazione e sezioni riadattate al modello agency

**Principio guida:** stessa sensazione premium, minimal, tecnica e conversion-oriented — non un redesign creativo diverso.

---

## 2. Stack tecnico (mantieni identico al sorgente)

Non cambiare stack salvo necessità esplicite. Il sito sorgente usa:

| Area | Tecnologia |
|------|------------|
| Framework | **Next.js 16** (App Router) — leggere `node_modules/next/dist/docs/` prima di scrivere codice |
| UI | **React 19**, **TypeScript** |
| Styling | **Tailwind CSS v4** + **DaisyUI** (plugin in `globals.css`) |
| Animazioni | **Framer Motion** (sezioni), **GSAP** (BubbleMenu), **animate.css** (pricing) |
| Carousel full-page | **Swiper 12** (vertical, mousewheel, keyboard, loop) |
| Effetto cursore | **SplashCursor** (WebGL fluid simulation, canvas fullscreen) |
| Icone | **lucide-react** |
| Font | **SF Pro Display** (local), **Horizon** (display), **Brexon** (italic decorative) |
| Deploy | **Vercel** + `@vercel/analytics` |
| Utilità | `clsx` + `tailwind-merge` → helper `cn()` |

**Dipendenze opzionali da valutare per l'agenzia:**
- Rimuovere o non attivare: Supabase projects, toolbox SEO (50+ tools), pagine comuni generate, Chatbase widget — **a meno che non siano richiesti esplicitamente**.
- Mantenere: form contatti (`/api/contact`), pricing page, blog (se utile per content marketing).

---

## 3. Identità brand — placeholder da compilare

```text
Nome agenzia:     [NOME AGENCY]          es. "Studio Como Digital", "Lago Web", ecc.
Dominio:          [https://...]
Tagline:          [es. "Siti web e brand digitali a Como"]
Socio 1:          [Nome Cognome] — ruolo [es. Sviluppo / Strategy]
Socio 2:          [Nome Cognome] — ruolo [es. Design / Growth]
P.IVA:            [numero]
Email:            [info@...]
Telefono/WhatsApp:[+39 ...]
Indirizzo:        [Via ..., Centro, 22100 Como CO]
Orari studio:     [es. Lun–Ven 9:00–18:00, su appuntamento]
LinkedIn:         [url]
Instagram:        [url opzionale]
```

**Tone of voice:** professionale ma diretto, italiano, orientato ai risultati. Evitare gergo eccessivo. Enfatizzare: velocità, codice su misura, SEO, conversioni, supporto locale a Como e Lombardia.

---

## 4. Design system — replica fedele

### 4.1 Palette colori

**Legacy CSS variables** (`app/globals.css` `:root`):

| Token | Hex | Uso |
|-------|-----|-----|
| `--scuro` | `#0a0a0a` | Testi forti, CTA dark |
| `--scuro-2` | `#171717` | Sfondi scuri, gradienti |
| `--chiaro` | `#7c3aed` | Accento viola primario |
| `--chiaro-2` | `#5b21b6` | Viola scuro, hover, gradienti |
| `--bianco` | `#fafafa` | Sfondo chiaro |
| `--grigio` | `#a1a1aa` | Testi secondari |

**Tailwind / zinc scale (uso dominante nelle sezioni):**
- Sfondo chiaro sezioni: `bg-zinc-50`, `bg-white`
- Sfondo scuro (progetti): `bg-zinc-950`
- Testi: `text-zinc-900`, `text-zinc-600`, `text-zinc-400`
- Dark mode: `dark:bg-zinc-950`, `dark:text-zinc-100`, toggle via classe `.dark` su `<html>`

**Primary OKLCH** (shadcn-style): `oklch(0.45 0.22 290)` — viola coerente con brand.

**Gradienti custom** (classi in globals.css):
- `.bg-gradient-chiaro` → 135deg chiaro → chiaro-2
- `.titolo-bianco` → gradient text bianco → viola
- `.glass` → rgba viola + backdrop-blur

### 4.2 Tipografia

| Ruolo | Font | Classe / CSS |
|-------|------|--------------|
| Body | SF Pro Display | `style={{ fontFamily: "var(--font-sf-pro)" }}` su body |
| Watermark gigante layout | Horizon Bold | `.horizon`, `text-[clamp(4rem,24vw,22rem)]`, opacity ~6% |
| Hero decorativo italic | Brexon Italic | `.brexon`, `text-[16vw]`, zinc-300 |
| Label sezione | SF Pro semibold | `text-xs uppercase tracking-widest text-zinc-500` |
| H1 hero | SF Pro bold | `text-[clamp(2.2rem,8.2vh,5.6rem)] leading-[1.02] tracking-tight` |
| H2 sezione | SF Pro bold | `text-[clamp(1.9rem,5.1vh,3rem)]` |
| Body copy | SF Pro regular | `text-[clamp(0.95rem,2.2vh,1.2rem)] leading-relaxed text-zinc-600` |

**Letter-spacing globale body:** `-0.02em`

### 4.3 Spacing e layout

- **Padding sezioni:** `px-6 lg:px-24`, `py-[clamp(0.75rem,2dvh,1.5rem)]` (hero leggermente più alto)
- **Max-width contenuti:** `max-w-6xl` (hero/about), `max-w-5xl` (tech/skills), `max-w-7xl` (contact/projects)
- **Altezza sezioni desktop:** `h-full` dentro Swiper slide → viewport intero (`md:h-dvh`)
- **Border radius:** card `rounded-2xl` / `rounded-3xl`, pill `rounded-full`, input `rounded-xl`
- **Ombre:** soft `shadow-sm`, card hover `shadow-[0_24px_80px_-24px_rgba(109,40,217,0.25)]` (BentoCard)

### 4.4 Pattern UI ricorrenti (OBBLIGATORI)

Ogni sezione deve includere la **label decorativa**:

```tsx
<div className="flex items-center gap-3">
  <span className="h-px w-8 bg-zinc-900 dark:bg-zinc-200" />
  <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
    {LABEL}
  </span>
</div>
```

Variante centrata (tech): linee su entrambi i lati.

**Blob decorativi sfondo:**
```tsx
<div className="pointer-events-none absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-zinc-200/50 blur-[100px] dark:bg-zinc-800/40" />
```

**Dot grid** (tech section):
```tsx
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
```

### 4.5 Componenti CTA

**Primary button (hero, pricing):**
```tsx
className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900"
```

**Secondary button:**
```tsx
className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 px-6 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900"
```

**CTA legacy `.cta`** (skew, box-shadow nero): disponibile in globals.css — usare solo se coerente con sottopagine, non nelle sezioni swiper principali.

**Form submit:** `rounded-xl bg-zinc-900 h-11 w-full`

### 4.6 BentoCard (card con glow al mouse)

File: `components/bento-card.tsx`
- `rounded-3xl border border-zinc-200/90 bg-white/70 backdrop-blur-xl`
- Hover: radial gradient viola `rgba(109,40,217,0.14)` segue il cursore via CSS vars `--spot-x`, `--spot-y`
- Usare per: card servizi, card team, card processo

---

## 5. Architettura UX — full-page experience

### 5.1 Shell homepage (`components/home-page-shell.tsx`)

Struttura da mantenere:

```
<div min-h-dvh overflow>
  <SplashCursor DENSITY_DISSIPATION={4.5} PRESSURE={0.7} />
  <BubbleMenu items={...} useFixedPosition menuBg="#ffffff" />
  <FloatingQuickActions />   // theme toggle + WhatsApp
  <HomeFullpageSwiper />
</div>
```

- `body { overflow: hidden }` su homepage desktop
- Mobile (`max-width: 767px`): **no Swiper**, sezioni stack verticali scrollabili (`useIsMobile` hook)

### 5.2 Swiper verticale (`components/home-fullpage-swiper.tsx`)

**Comportamento desktop:**
- `direction: "vertical"`, `slidesPerView: 1`, `loop: true`, `speed: 700`
- `mousewheel: { forceToAxis: true }`, `keyboard: enabled`
- Hash URL sync: `history.replaceState` su cambio slide
- Pagination bullets verticali a destra (CSS `.swiper-pagination-vertical` in globals.css)
  - Inactive: `rgb(161 161 170 / 0.4)`
  - Active: `rgb(109 40 217)`, altezza 1.5rem

**Slide hashes per AGENCY (nuova mappa):**

| Index | Hash | Sezione |
|-------|------|---------|
| 0 | `#hero` | Hero |
| 1 | `#chi-siamo` | About / Team (ex chi-sono) |
| 2 | `#servizi` | Servizi (nuova o skills adattata) |
| 3 | `#progetti` | Portfolio (RIATTIVARE) |
| 4 | `#tecnologia` | Stack tech |
| 5 | `#testimonianze` | Recensioni |
| 6 | `#tariffe` | Pricing teaser |
| 7 | `#contatti` | Form contatti |

Aggiornare `SLIDE_HASHES`, `BubbleMenu` hrefs, `footerHomeLinks`, `site-nav-items`.

### 5.3 BubbleMenu (`components/bubble-menu.tsx`)

Menu hamburger → overlay fullscreen con **pill giganti** animate GSAP:
- Stagger `scale: 0 → 1`, ease `back.out(1.5)`, duration `0.5`, stagger `0.12`
- Desktop: pill ruotate (`rotation: ±8deg`), hover colorati per voce
- Mobile: colonna verticale, scrollable

**Voci menu agency (esempio):**

```tsx
const navItems: MenuItem[] = [
  { label: "servizi", href: "/#servizi", rotation: 8, hoverStyles: { bgColor: "#0ea5e9", textColor: "#fff" } },
  { label: "portfolio", href: "/#progetti", rotation: -8, hoverStyles: { bgColor: "#ca8a04", textColor: "#fff" } },
  { label: "tariffe", href: "/pricing", rotation: 8, hoverStyles: { bgColor: "#10b981", textColor: "#fff" } },
  { label: "contatti", href: "/#contatti", rotation: -8, hoverStyles: { bgColor: "#8b5cf6", textColor: "#fff" } },
  { label: "blog", href: "/blog", target: "_blank", rotation: 8, hoverStyles: { bgColor: "#111827", textColor: "#fff" } },
];
```

Toggle button: cerchio bianco `w-12 h-12`, shadow `0_4px_16px_rgba(0,0,0,0.12)`, hamburger → X animato.

### 5.4 SplashCursor (`components/splash-cursor.tsx`)

Effetto fluido WebGL a schermo intero, **sotto** il contenuto (z-index basso).
- Default homepage: `DENSITY_DISSIPATION={4.5}`, `PRESSURE={0.7}`, `RAINBOW_MODE={true}`
- Non rimuovere: è parte distintiva del brand visivo
- Performance: caricare solo client-side (già in shell client component)

### 5.5 FloatingQuickActions

- **Bottom-left:** toggle dark/light (`localStorage` key `theme-preference`, classe `.dark` su html)
- **Bottom-right:** WhatsApp floating button verde `#67C15E`, `h-14 w-14`, border bianco
- Stile: `rounded-full border shadow-lg backdrop-blur`

### 5.6 Root layout watermark

In `app/layout.tsx`, sfondo fisso con testo Horizon gigante in basso:

```tsx
<span className="horizon text-[clamp(4rem,24vw,22rem)] font-bold text-zinc-900/6">
  [NOME AGENCY IN MAIUSCOLO — max 12 char]
</span>
```

Posizione: `fixed inset-0 -z-10`, `bottom: -12dvh`, centrato.

---

## 6. Sezioni — specifiche e copy agency

### 6.1 Hero (`components/sections/hero-section.tsx`)

**Layout:** identico al sorgente.
- Sfondo `bg-zinc-50 dark:bg-zinc-950`
- Logo agency piccolo + linea + label geo
- H1 grande left-aligned
- 2 CTA: primary scroll `#contatti`, secondary link (es. `/#progetti` o pagina servizi)
- Watermark Brexon italic "COMO" o nome agency in basso a destra (desktop)
- Scroll indicator animato (solo xl+)

**Copy suggerito:**

```
Label:    Web Agency • Como, IT — Centro città
H1:       Siti web e digital strategy
          per brand che crescono sul Lago di Como
Body:     Siamo [NOME AGENCY], studio digitale in pieno centro a Como.
          Progettiamo siti veloci, SEO-ready e orientati alle conversioni
          per PMI, professionisti e hospitality in Lombardia.
CTA 1:    Richiedi un preventivo → #contatti
CTA 2:    Vedi i nostri lavori → #progetti
```

**Animazione:** Framer Motion `initial={{ opacity: 0, y: 30 }}` → `whileInView`.

### 6.2 Chi siamo (`about-section.tsx` → rinominare mentalmente)

**Trasformazione:** da profilo singolo a **team di 2 soci**.

**Layout:** grid 2 colonne lg — sinistra visual, destra testo.

**Sinistra — opzioni visual:**
- Foto team (preferito) in `rounded-3xl aspect-square` con bordo interno decorativo
- Oppure composizione 2 avatar/foto affiancate
- Oppure logo agency grande (fallback come sorgente)

**Destra:**
```
Label: Chi Siamo
H2:    Due competenze, un unico obiettivo: risultati misurabili.
Body:  [NOME AGENCY] nasce a Como dal incontro tra [Socio1] e [Socio2].
       Uniamo design, sviluppo e strategia digitale per accompagnare
       aziende locali e brand che vogliono distinguersi online.
Stats (2 colonne):
  - "50+" Progetti consegnati  (o dato reale)
  - "100%" Codice su misura — no template pesanti
  - oppure: "5★" Media recensioni + "Como" Sede in centro
```

### 6.3 Servizi (nuova sezione o `skills-section.tsx` adattata)

**Id:** `#servizi`

**Layout:** titolo + griglia 2x2 o 3 colonne di **BentoCard** / card semplici.

**Servizi tipici agency (6 voci):**

| Servizio | Descrizione breve |
|----------|-------------------|
| Siti web su misura | Next.js, performance, SEO tecnica |
| E-commerce | Catalogo, pagamenti, gestione ordini |
| Brand & UI Design | Identità, design system, Figma |
| SEO & Content | On-page, local SEO Como/Lombardia |
| Automazioni & AI | Chatbot, integrazioni, workflow |
| Manutenzione | Hosting, aggiornamenti, supporto |

Ogni card: icona lucide, titolo bold, 2 righe descrizione, hover glow BentoCard.

**Alternativa:** mantenere struttura `skillGroups` ma rinominare gruppi in "Cosa costruiamo" / "Come lavoriamo".

### 6.4 Portfolio (`projects-section.tsx` — RIATTIVARE)

Attualmente commentata nello swiper sorgente — **riattivare** per l'agenzia.

**Layout:** sezione scura `bg-zinc-950`, scroll orizzontale snap.
- Card progetto: `min-w-[85vw] md:min-w-[400px]`, `rounded-3xl`, immagine cover + gradient overlay
- Hover: scale immagine, descrizione slide-up su desktop
- Badge role: es. "E-commerce", "Landing", "Restyling"

**Dati:** array in `lib/home-content.ts` o CMS; minimo 4 progetti con cover, title, description, projectUrl.

**Copy header:**
```
Label: Portfolio
H2:    Progetti che parlano da soli.
Sub:   Una selezione di lavori per clienti a Como, Lombardia e in tutta Italia.
```

### 6.5 Tecnologie (`tech-section.tsx`)

Mantenere quasi identica. Stack pills con colori per tech:
- Next.js → bg-zinc-900 text-white
- React → sky, TypeScript → blue, Tailwind → teal, Framer Motion → fuchsia, ecc.

**Copy:**
```
Label: Stack
H2:    Tecnologie per l'eccellenza.
Body:  Sviluppiamo con strumenti moderni per garantire velocità, sicurezza e scalabilità.
```

Aggiungere eventuali tech agency-specific (Shopify, WordPress headless, ecc.) se usati.

### 6.6 Testimonianze (`testimonials-section.tsx`)

Mantenere carousel orizzontale con frecce, card bianche `rounded-2xl`, stelle lucide.

**Dati:** `recensioni.json` — filtrare/prioritizzare recensioni menzionanti **Como** e Lombardia (es. recensione Marilena Mastaglio — suites Como).

Schema JSON invariato:
```json
{ "nome": "...", "recensione": "...", "valutazione": 5 }
```

### 6.7 Tariffe teaser (`pricing-teaser-section.tsx`)

Mantenere griglia 3 pacchetti (Basic / Pro / Business) + link `/pricing`.

**Adattamento agency:** testi orientati a "soluzioni per startup, PMI, brand"
- Basic → "Start" / "Essential"
- Pro → "Growth" (highlighted)
- Business → "Scale"

Extras checklist: stesse bullet (codice su misura, chatbot opzionale, manutenzione annuale).

### 6.8 Contatti (`contact-section.tsx`)

Layout 2 colonne: copy sinistra, form destra in card `rounded-3xl bg-zinc-50`.

**Copy sinistra:**
```
Label: Iniziamo
H2:    Hai un progetto in mente?
       Parliamone a Como.
Body:  Raccontaci obiettivi, tempi e budget. Ti rispondiamo entro 24 ore lavorative.
Link:  email + opzionale "Vieni in studio — [Indirizzo Como]"
```

**Form fields** (invariati): nome, telefono, email, messaggio, checkbox GDPR.

**API:** `POST /api/contact` — aggiornare destinatario email in env/config.

---

## 7. Pagine secondarie

### 7.1 Pricing (`app/pricing/page.tsx`)

Layout scroll classico con `SiteHeader` + `SiteFooter` (vedi `app/pricing/layout.tsx`).

**Struttura PricingPage:**
- Header centrato con label uppercase tracking `[0.22em]`
- Griglia 3 piani con prezzi `formatEuro()`, badge "Più scelto" su Pro
- Tabella comparativa feature (Check/Minus icons)
- Sezione chatbot opzionale (Standard/Premium) — mantenere se offrite AI
- CTA ogni piano → `/contatti`

**Prezzi:** definire in `lib/pricing-content.ts` — possono differire dal portfolio personale.

### 7.2 Contatti standalone (`app/contatti/`)

Layout con header/footer, gradient radiale top, pagina form estesa.

### 7.3 Blog (`app/blog/`)

Layout: header sticky, gradient viola top `rgba(139,92,246,0.22)`, footer completo.

**Contenuti agency:** articoli su web design Como, SEO locale Lago di Como, case study clienti.

### 7.4 SiteHeader (`components/site-header.tsx`)

Per pagine interne (non homepage swiper):
- Sticky, `backdrop-blur-xl`, border bottom zinc
- Logo + nome agency
- Nav da `lib/site-nav-items.ts`

**Nav items agency:**
```ts
{ label: "Servizi", href: "/#servizi" }
{ label: "Portfolio", href: "/#progetti" }
{ label: "Tariffe", href: "/pricing" }
{ label: "Blog", href: "/blog" }
{ label: "Contatti", href: "/contatti" }
```

### 7.5 SiteFooter (`components/site-footer.tsx`)

Footer ricco multi-colonna con:
- Info agency (nome, P.IVA, email, WhatsApp, **indirizzo Como**)
- Link homepage sections
- Link servizi
- Blog recenti (se attivo)
- **RIMUOVERE o semplificare:** directory comuni italiani, toolbox SEO — sostituire con:
  - "Zone servite": Como, Cernobbio, Moltrasio, Cantù, Erba, Milano (optional)
  - Link pagine local landing se create

---

## 8. Animazioni — regole precise

| Elemento | Libreria | Parametri |
|----------|----------|-----------|
| Sezioni on scroll | Framer Motion | `whileInView`, `viewport: { once: true }`, duration 0.6–0.8 |
| Hero entrance | Framer Motion | `y: 30 → 0`, ease `easeOut` |
| Tech pills | Framer Motion | stagger `delay: i * 0.05`, `whileHover: { y: -5, scale: 1.05 }` |
| Skills tags | Framer Motion | stagger `j * 0.1 + i * 0.2` |
| Menu overlay | GSAP | `back.out(1.5)`, stagger pills |
| Pricing page | animate.css | `ViewportAnimate` + `animate__fadeInDown` |
| Scroll indicator | Framer Motion | line animata `top: -100% → 100%`, infinite |

**Non usare** animazioni eccessive o nuovi library — coerenza col sorgente.

---

## 9. SEO e metadata

### 9.1 `lib/site-config.ts`

```ts
export const siteConfig = {
  name: "[NOME AGENCY]",
  personName: "[Socio1] & [Socio2]", // o nome legale società
  vatNumber: "[P.IVA]",
  title: "Agenzia web a Como | Siti su misura | [NOME AGENCY]",
  description: "Web agency in centro a Como: siti web su misura, SEO e brand digitali per PMI e professionisti in Lombardia e sul Lago di Como.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://...",
  locale: "it_IT",
  keywords: [
    "agenzia web Como",
    "creazione siti web Como",
    "web agency Lago di Como",
    "siti web Lombardia",
    "agenzia digitale Como centro",
    "sviluppo siti Next.js Como",
    // ...
  ],
  author: { name: "[NOME AGENCY]", url: "..." },
  links: { email, calendar, linkedin, github?, instagram? },
};
```

### 9.2 JSON-LD (`components/json-ld.tsx`)

Cambiare `@type: Person` → **`Organization`** o **`LocalBusiness`**:

```json
{
  "@type": "LocalBusiness",
  "name": "[NOME AGENCY]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Via ...]",
    "addressLocality": "Como",
    "postalCode": "22100",
    "addressRegion": "Lombardia",
    "addressCountry": "IT"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 45.8081, "longitude": 9.0852 },
  "areaServed": ["Como", "Lombardia", "Lago di Como"],
  "priceRange": "€€"
}
```

Aggiungere `founder` array con i due soci se utile.

### 9.3 Pagine local SEO (opzionale ma consigliato)

Riprendere pattern `comune-hero-section` + `comune-fullpage-swiper` ma **solo per zone target**:
- `/como` o `/zone-servite/como`
- `/zone-servite/cernobbio`, `/milano`, ecc.

Non generare 8000 comuni — max 10–20 landing locali strategiche.

---

## 10. Mappa file da modificare nel clone

| File | Azione |
|------|--------|
| `lib/site-config.ts` | Brand, SEO, contatti Como |
| `lib/home-content.ts` | Progetti portfolio, servizi, team |
| `lib/site-nav-items.ts` | Nav header |
| `lib/footer-nav.ts` | Footer links agency |
| `lib/pricing-content.ts` | Prezzi e copy pacchetti |
| `lib/seo-*.ts` | Metadata per pagine |
| `recensioni.json` | Recensioni (priorità Como) |
| `app/layout.tsx` | Watermark nome agency |
| `app/page.tsx` | Metadata homepage |
| `components/home-page-shell.tsx` | BubbleMenu items |
| `components/home-fullpage-swiper.tsx` | Slides + hashes + riattiva Projects |
| `components/sections/hero-section.tsx` | Copy agency Como |
| `components/sections/about-section.tsx` | Team 2 soci |
| `components/sections/skills-section.tsx` | → Servizi |
| `components/sections/projects-section.tsx` | Riattivare |
| `components/sections/contact-section.tsx` | Copy + email |
| `components/floating-quick-actions.tsx` | WhatsApp number |
| `components/json-ld.tsx` | LocalBusiness |
| `components/site-header.tsx` | Logo + nome |
| `components/site-footer.tsx` | Indirizzo Como, semplifica link |
| `src/images/` | Logo agency (sostituire logopurple.png ecc.) |
| `.env` | SITE_URL, email API, analytics |

**File da rimuovere/disabilitare (consigliato per MVP agency):**
- `app/tools/**` (intero catalogo tool)
- `scripts/generate-comuni-*.mjs`
- `components/chatbase-widget.tsx` (se non usate chatbot esterno)
- Supabase fetch in `app/page.tsx` (usare array statico o CMS dedicato)

---

## 11. Cosa NON fare

1. **Non** ridisegnare from scratch — stesso linguaggio visivo zinc/viola/minimal.
2. **Non** sostituire Swiper con scroll nativo su desktop.
3. **Non** rimuovere SplashCursor o BubbleMenu — sono signature del design.
4. **Non** usare font diversi (Google Fonts generici) — mantieni SF Pro + Horizon + Brexon.
5. **Non** copiare testi jaderweb/Jader Daniotti/Udine — tutto localizzato Como + agency.
6. **Non** lasciare riferimenti a "freelance", "jaderweb", Udine, Friuli nel copy/meta.
7. **Non** aggiungere CMS pesanti o WordPress — stack Next.js come sorgente.
8. **Non** modificare il repository portfolio originale — solo il clone.

---

## 12. Contenuti testuali completi (boilerplate pronti)

### Hero meta title
`Agenzia web Como | Siti su misura & SEO | [NOME AGENCY]`

### Meta description
`Web agency in centro a Como: creiamo siti veloci, moderni e ottimizzati SEO per PMI, hotel e professionisti in Lombardia. Preventivo gratuito.`

### Sezione servizi H2
`Soluzioni digitali chiavi in mano.`

### Sezione processo (opzionale, nuova slide o sotto-servizi)
```
1. Discovery — call gratuita, obiettivi e target
2. Design — wireframe e UI su Figma
3. Sviluppo — codice su misura, test performance
4. Launch — go-live, SEO base, formazione
5. Cura — manutenzione e aggiornamenti
```

### Email form success message
`Messaggio inviato. Ti ricontattiamo entro 24 ore lavorative.`

---

## 13. Responsive checklist

| Breakpoint | Comportamento |
|------------|---------------|
| `< 768px` | No vertical swiper; sezioni `min-h-dvh` stack; BubbleMenu pills in colonna |
| `768px–1024px` | Swiper attivo; padding `px-6`; typography clamp ridotto |
| `> 1024px` | `lg:px-24`, grid 2 col, scroll indicator visibile |
| `xl+` | Scroll hint hero visibile |

Hook: `useIsMobile()` → `(max-width: 767px)`

---

## 14. Accessibilità e performance

- Mantenere `aria-label` su navigazione, carousel, bottoni
- Form: label associati, `role="status"` su feedback
- Immagini: `alt` descrittivi, `priority` solo su logo hero
- SplashCursor: decorativo, non bloccare interazione (`pointer-events-none` sul canvas)
- Lazy load sezioni pesanti con `dynamic(..., { ssr: false })` come HomeFullpageSwiper
- Target Lighthouse: Performance > 90, Accessibility > 95

---

## 15. Ordine di implementazione consigliato per Cursor

Esegui in questo ordine per minimizzare conflitti:

1. **Config brand** — `site-config.ts`, `.env`, logo assets
2. **Layout globale** — watermark, metadata, JSON-LD LocalBusiness
3. **Copy sezioni** — hero, about team, contact (Como)
4. **Swiper hashes** — aggiorna mappa slide + riattiva portfolio
5. **BubbleMenu + nav** — voci agency
6. **Servizi** — adatta skills → servizi con BentoCard
7. **Portfolio** — popola progetti in home-content
8. **Pricing** — adatta prezzi e copy
9. **Footer/Header** — semplifica link, indirizzo Como
10. **Pulizia** — rimuovi tools/comuni non necessari
11. **QA visivo** — confronto side-by-side col portfolio sorgente (desktop + mobile + dark mode)
12. **SEO** — sitemap, robots, Open Graph images

---

## 16. Prompt operativo (copia-incolla in Cursor)

```
Sei nel progetto clone del portfolio jaderweb. Devi trasformarlo nel sito della web agency [NOME AGENCY] con sede in centro a Como (CO), Lombardia, gestita da due soci: [Socio1] e [Socio2].

OBIETTIVO: stessa identità visiva del sito sorgente (zinc/viola, full-page Swiper desktop, SplashCursor, BubbleMenu GSAP, Framer Motion, SF Pro + Horizon fonts, dark mode toggle, WhatsApp floating) ma contenuti e struttura da agenzia.

REGOLE:
- Leggi WEB-AGENCY-COMO-CURSOR-ISTRUZIONI.md e seguilo integralmente.
- Non ridisegnare: replica pattern UI (label uppercase + linea, blob blur, rounded-3xl card, CTA rounded-full zinc-900).
- Aggiorna site-config, SEO Como, JSON-LD LocalBusiness.
- Homepage slides: hero → chi-siamo → servizi → progetti → tecnologia → testimonianze → tariffe → contatti.
- Riattiva ProjectsSection nello swiper.
- About: 2 soci, non profilo singolo.
- Rimuovi riferimenti jaderweb/Udine/freelance.
- Rimuovi o disabilita tools SEO e directory comuni (MVP).
- Mantieni pricing page e form contatti funzionante.
- Testa mobile (no swiper) e desktop (swiper + hash URL).

Output: codice production-ready, copy in italiano, placeholder marcati [ ] dove mancano dati reali.
```

---

## 17. Riferimenti visivi chiave nel repo sorgente

Per ispezione durante lo sviluppo nel clone, consultare questi file del portfolio originale:

| Pattern | File |
|---------|------|
| Design tokens | `app/globals.css` |
| Font loading | `app/layout.tsx` |
| Homepage shell | `components/home-page-shell.tsx` |
| Swiper + hashes | `components/home-fullpage-swiper.tsx` |
| Menu animato | `components/bubble-menu.tsx` |
| Fluid cursor | `components/splash-cursor.tsx` |
| Hero layout | `components/sections/hero-section.tsx` |
| About grid | `components/sections/about-section.tsx` |
| Dark projects | `components/sections/projects-section.tsx` |
| Pricing UI | `components/pricing/pricing-page.tsx` |
| Footer | `components/site-footer.tsx` |

---

*Documento generato dall'analisi del portfolio jaderweb — Agosto 2026.*
*Versione: 1.0 — Web Agency Como*
