# Report SEO — comodigitale

**Data:** 15 agosto 2026  
**Stack:** Next.js 16.3 App Router  
**Dominio canonico:** `https://www.comodigitale.com`  
**Nota indicizzazione (16 ago 2026):** in produzione Vercel reindirizza l’apex `comodigitale.com` → `www`. Canonical, sitemap, OG e robots devono usare `www` per evitare conflitto con il redirect 308. 
**Stato validazione:** `npm run lint` (0 errori) · `tsc --noEmit` · `next build` OK (37 route, 19 servizi SSG)

---

## Summary

Il sito è tecnicamente indicizzabile. Ogni pagina pubblica ha title, meta description e canonical su `comodigitale.com`. Esistono `robots.ts`, `sitemap.ts` (24 URL reali), Open Graph, Twitter Card, icone e manifest. Le 19 schede servizio hanno metadata unici, JSON-LD (Organization + Service + BreadcrumbList) e tre servizi correlati.

Design, slug e copy commerciale non sono stati riscritti. Non sono state create route finte (`/portfolio`, `/chi-siamo`): restano ancore in homepage (`/#portfolio`, `/#chi-siamo`).

| Indicatore | Valore |
| --- | --- |
| Pagine indexabili | 26 (7 core/legali + 19 servizi) |
| URL in sitemap | 24 |
| Title/description servizi unici | 19 / 19 |
| Schema sulle schede servizio | Organization, Service, BreadcrumbList |
| Dominio `.vercel.app` nel markup | assente |

---

## Testo visibile modificato

Modifiche esplicite al copy in pagina (non metadata):

1. Breadcrumb schede servizio: aggiunto il segmento **Home**.
2. Blocco correlati: etichetta **Servizi correlati** e titolo **Soluzioni collegate.**
3. Attributi `alt` (non visibili come testo di pagina): descrizioni più naturali al posto di etichette generiche.

Nessun headline, CTA o body commerciale esistente è stato riscritto.

---

## Files modified

### Nuovi

- `lib/seo.ts`, `lib/service-seo.ts`, `lib/json-ld.ts`
- `lib/opengraph-card.tsx`, `lib/social-image.tsx`, `lib/legal-pages.ts`
- `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts`
- `app/opengraph-image.tsx`, `app/twitter-image.tsx`
- `app/servizi/[slug]/opengraph-image.tsx`, `app/servizi/[slug]/twitter-image.tsx`
- `app/privacy/page.tsx`, `app/cookie/page.tsx`
- `app/favicon.ico`, `app/apple-icon.png`, `public/icons/icon-192.png`, `public/icons/icon-512.png`
- `components/json-ld.tsx`, `components/cookie-consent.tsx`, `components/sections/legal-page-content.tsx`, `components/whatsapp-fab.tsx`

### Aggiornati (estratto)

- `app/layout.tsx` e tutte le `page.tsx` indexabili
- `app/servizi/[slug]/page.tsx` (`generateMetadata` + JSON-LD)
- Header, footer, menu, breadcrumb e correlati in `service-detail-content.tsx`
- Performance: `site-preview-frame.tsx`, `scroll-expand.tsx`, `next.config.ts` (`images.formats`)
- Server Components: `home-page-shell.tsx`, `inner-page-shell.tsx`, sezioni statiche

---

## SEO improvements

- `metadataBase` sul dominio di produzione, non su Vercel.
- Canonical per pagina (mai ereditato dal root layout su `/`).
- Robots aperto + sitemap assoluta.
- OG locale `it_IT`, `siteName` Comodigitale, Twitter `summary_large_image`.
- Immagini social generate (home e per servizio).
- Favicon ICO, Apple touch icon PNG, icone 192/512, web manifest (`display: browser`).
- Un H1 commerciale per pagina; gerarchia heading ripulita (menu “Contatti” non è più heading).
- Link crawlabili: Home su `/`, `Button` interni con `next/link`, `nav` con `aria-label`.
- Linking interno tra servizi (3 correlati + breadcrumb + CTA contatti).

---

## Metadata improvements

Ogni pagina indexabile espone:

- `title` unico
- `description` unica
- `alternates.canonical` assoluto su `https://comodigitale.com…`
- Open Graph (`url`, `title`, `description`, locale, siteName)
- Twitter Card

Le 19 schede usano `lib/service-seo.ts`, non il pattern `${name} — comodigitale`.

Le pagine core mantengono i title esistenti (es. `Servizi — comodigitale`), più corti rispetto agli esempi lunghi del prompt YAML: scelta voluta per non riscrivere il tono già in produzione.

---

## Service pages

19 slug **invariati**:

`matrimoni`, `sagre-eventi`, `ristoranti`, `bb-case-vacanza`, `professionisti`, `associazioni-sportive`, `band-eventi`, `agenzie-immobiliari`, `eventi-privati`, `artigiani`, `landing-ads`, `one-page`, `sito-48h`, `palestre`, `preventivi-online`, `prenotazioni`, `cv-portfolio`, `eventi-locali`, `digitalizzazione`.

Ogni scheda ha:

- title e description unici
- keyword primaria
- JSON-LD con description = `heroBody` visibile (niente testo inventato)
- breadcrumb UI + schema
- 3 servizi correlati verso slug reali

---

## Internal linking

| Origine | Destinazioni |
| --- | --- |
| Header / footer | `/`, `/servizi`, `/processo`, `/perche-noi`, `/contatti`, `/#portfolio`, `/#chi-siamo` |
| Home | CTA `/contatti`, `/servizi` |
| `/servizi` | indice verso i 19 slug, CTA `/contatti` |
| Scheda servizio | Home → Servizi → pagina; 3 correlati; CTA `/contatti` |
| Pagine interne | CTA finale `/contatti` |
| Footer legale | `/privacy`, `/cookie` |

Non esistono URL `/portfolio` o `/chi-siamo` come route: i crawler seguono le ancore in homepage.

---

## Structured data

Presente **solo** sulle schede `/servizi/[slug]`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://comodigitale.com/#organization" },
    { "@type": "Service" },
    { "@type": "BreadcrumbList" }
  ]
}
```

Dati reali: email, telefono, Instagram, LinkedIn, GitHub, logo `/img/logo/logonerosubianco.svg`. Nessun rating, indirizzo civico, prezzo o recensione inventati.

**Manca** Organization / WebSite JSON-LD sulla homepage.

---

## Sitemap

File: `app/sitemap.ts` → `https://comodigitale.com/sitemap.xml`

24 URL unici:

- `/` (priority 1, weekly)
- `/servizi` (0.9, weekly)
- `/processo`, `/perche-noi` (0.7, monthly)
- `/contatti` (0.8, monthly)
- 19× `/servizi/{slug}` (0.8, monthly)

Assenti di proposito: `/portfolio`, `/chi-siamo`.  
Assenti ma indexabili: `/privacy`, `/cookie` (link nel footer).

---

## Robots

File: `app/robots.ts` → `https://comodigitale.com/robots.txt`

```
User-Agent: *
Allow: /

Sitemap: https://comodigitale.com/sitemap.xml
```

Nessun `Disallow` sulle route pubbliche. Nessun `noindex` nel metadata.

---

## Canonical

Helper: `pageSeo(path)` in `lib/seo.ts`.

Esempi:

- Home → `https://comodigitale.com`
- Servizi → `https://comodigitale.com/servizi`
- Matrimoni → `https://comodigitale.com/servizi/matrimoni`

Mai `comodigitale.vercel.app`. Il canonical di `/` non sta nel root layout (evita l’ereditarietà sui figli).

---

## Open Graph

- `metadataBase`: `https://comodigitale.com`
- `og:type`: website
- `og:locale`: `it_IT`
- `og:site_name`: Comodigitale
- `twitter:card`: `summary_large_image`
- Immagini: `app/opengraph-image.tsx` / `app/twitter-image.tsx` e varianti per slug

---

## Image SEO

- Screenshot hero/portfolio: `next/image` con AVIF/WebP (prima erano PNG non ottimizzati fino a 6,3 MB).
- Prima slide desktop: `fetchPriority="high"` (LCP).
- Iframe del sito live dopo il load dello screenshot.
- SVG logo: `unoptimized` (corretto).
- Alt informativi, alt vuoto sulle decorative.
- `width`/`height` sullo sfondo scroll-expand (resta `<img>` per il ref delle transform).

---

## Accessibility

- `lang="it"`
- Un H1 per pagina
- `nav aria-label="Navigazione"` (menu e footer)
- Breadcrumb `nav aria-label="Percorso"`
- Logo menu: alt `comodigitale`, link a `/`
- Toggle tema e menu con `aria-label`

---

## Performance

- Font Poppins + Unbounded via `next/font` con `display: "swap"`
- Formati immagine AVIF/WebP in `next.config.ts`
- Header/footer/tema/cookie/WhatsApp nel layout (un solo provider)
- Pagine e sezioni statiche come Server Component
- Restano client: hero carousel, menu, form, Reveal, SplitText, scroll-expand, sezioni che leggono il tema
- Animazioni non rimosse

---

## Potential remaining issues

1. Nessun JSON-LD Organization/WebSite sulla home.
2. `/privacy` e `/cookie` non sono in sitemap.
3. Title core più corti degli esempi YAML (tono esistente conservato).
4. Warning ESLint preesistenti in `button.tsx` e `flowing-menu.tsx` (non errori).
5. Recensioni, NAP completo e FAQ non inseriti: non esistevano dati verificabili, e il prompt vieta di inventarli.

---

## Changes requiring manual action

### Vercel

1. Dominio primario: `comodigitale.com`.
2. Redirect 301 da `comodigitale.vercel.app` (e `www` se usato) verso `https://comodigitale.com`.
3. Verificare che le env di produzione non espongano l’host `.vercel.app`.

### Google Search Console

1. Proprietà dominio (o prefisso URL `https://comodigitale.com`).
2. Inviare `https://comodigitale.com/sitemap.xml`.
3. Ispezionare home, `/servizi` e 2–3 schede (es. matrimoni, ristoranti, digitalizzazione).
4. Controllare canonical, mobile usability, rich result Service/Breadcrumb.
5. Richiedere indicizzazione se i nuovi URL non compaiono.

### Google Business Profile

1. Categoria coerente (agenzia web design / servizi internet).
2. Località Como, telefono `+39 351 315 2008`, sito `https://comodigitale.com`.
3. Stessi social del footer (Instagram, LinkedIn).
4. Non pubblicare recensioni o rating inventati.

---

## Recommended Google Search Console actions

Dopo il deploy in produzione:

1. Confermare la proprietà e lo stato HTTPS.
2. Inviare la sitemap e attendere la scoperta.
3. Usare Controllo URL sulle 19 schede servizio (nuove o con metadata cambiati).
4. Monitorare Coverage: escludere eventuali URL `vercel.app` se restano in circolo.
5. Non aspettarsi FAQ/Review rich result: lo schema non li include di proposito.

---

## Tabella pagine

| Pagina | URL | Keyword primaria | Title | Meta description | Canonical | Schema | Indexable | Internal links |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Home | `/` | siti web Como | comodigitale — Realizzazione siti web a Como | Web agency a Como: siti internet, e-commerce, brand, SEO locale, social e contenuti per PMI, professionisti e hospitality. | https://comodigitale.com | — | Sì · sitemap | Nav, /servizi, /contatti, /#portfolio, /#chi-siamo |
| Servizi | `/servizi` | servizi web Como | Servizi — comodigitale | Siti verticali, landing, prenotazioni, preventivi e digitalizzazione per aziende e professionisti a Como. Dal matrimonio al ristorante, dal B&B all’artigiano. | https://comodigitale.com/servizi | — | Sì · sitemap | Nav, indice 19 slug, /contatti |
| Processo | `/processo` | processo web agency | Processo — comodigitale | Da un'idea a qualcosa di reale. Discovery, strategy, design, sviluppo, lancio e supporto: un processo chiaro dal primo contatto alla consegna. | https://comodigitale.com/processo | — | Sì · sitemap | Nav, /contatti |
| Perché noi | `/perche-noi` | web agency Como | Perché noi — comodigitale | Tecnologia moderna e codice proprietario, quando serve. Scegliamo la soluzione più adatta al progetto: sviluppo su misura o piattaforma. | https://comodigitale.com/perche-noi | — | Sì · sitemap | Nav, /contatti |
| Contatti | `/contatti` | contatti web agency Como | Contatti — comodigitale | Hai un'idea? Parliamone. Raccontaci il progetto: siti web, e-commerce, automazioni e digitalizzazione a Como. | https://comodigitale.com/contatti | — | Sì · sitemap | Nav, form, WhatsApp, email |
| Privacy | `/privacy` | informativa privacy | Privacy — comodigitale | Informativa privacy di comodigitale: come trattiamo i dati personali raccolti tramite sito, form e canali di contatto. | https://comodigitale.com/privacy | — | Sì · non in sitemap | Footer, /contatti, /cookie |
| Cookie | `/cookie` | informativa cookie | Cookie — comodigitale | Informativa cookie di comodigitale: tipi di cookie, finalità e come gestire le preferenze sul sito. | https://comodigitale.com/cookie | — | Sì · non in sitemap | Footer, banner, /privacy |
| Siti per matrimoni | `/servizi/matrimoni` | sito matrimonio | Sito matrimonio \| RSVP e info per gli invitati \| Comodigitale | Sito dedicato al matrimonio con conferma presenza, location, lista nozze e galleria. Un unico spazio per accompagnare gli invitati prima e dopo il giorno. | https://comodigitale.com/servizi/matrimoni | Organization + Service + BreadcrumbList | Sì · sitemap | Home, Servizi, Eventi privati, Prenotazioni, Portfolio CV, Contatti |
| Sagre ed eventi comunali | `/servizi/sagre-eventi` | sito per sagra | Sito per sagra \| Programma ed eventi comunali \| Comodigitale | Sito per sagre, feste patronali e manifestazioni comunali: programma, mappa, espositori, menù e informazioni pratiche, anche da smartphone. | https://comodigitale.com/servizi/sagre-eventi | Organization + Service + BreadcrumbList | Sì · sitemap | Home, Servizi, Eventi locali, Eventi privati, Landing ads, Contatti |
| Ristoranti con prenotazione | `/servizi/ristoranti` | sito web ristorante | Sito web ristorante \| Menù digitale e prenotazione \| Comodigitale | Sito per ristoranti con menù digitale, prenotazione tavoli, galleria ed eventi. Pensato per far trovare il locale e prenotare in modo semplice. | https://comodigitale.com/servizi/ristoranti | Organization + Service + BreadcrumbList | Sì · sitemap | Home, Servizi, Prenotazioni, Landing ads, Digitalizzazione, Contatti |
| B&B e case vacanza | `/servizi/bb-case-vacanza` | sito web b&b | Sito web B&B \| Camere, galleria e prenotazioni \| Comodigitale | Sito per B&B, appartamenti e case vacanza: camere, galleria, disponibilità, prenotazioni e informazioni sul territorio per chi sta scegliendo dove soggiornare. | https://comodigitale.com/servizi/bb-case-vacanza | Organization + Service + BreadcrumbList | Sì · sitemap | Home, Servizi, Prenotazioni, Ristoranti, Landing ads, Contatti |
| Siti per professionisti | `/servizi/professionisti` | sito per professionisti | Sito per professionisti \| Servizi, portfolio e contatti \| Comodigitale | Sito professionale costruito intorno al tuo settore: servizi, portfolio, richiesta appuntamento e contatti per studi e liberi professionisti. | https://comodigitale.com/servizi/professionisti | Organization + Service + BreadcrumbList | Sì · sitemap | Home, Servizi, Portfolio CV, Prenotazioni, One page, Contatti |
| Associazioni sportive | `/servizi/associazioni-sportive` | sito associazione sportiva | Sito associazione sportiva \| Calendario, rosa e iscrizioni \| Comodigitale | Sito per società e associazioni sportive: calendario, risultati, rosa, staff, sponsor e iscrizioni in un unico spazio accessibile da smartphone. | https://comodigitale.com/servizi/associazioni-sportive | Organization + Service + BreadcrumbList | Sì · sitemap | Home, Servizi, Palestre, Eventi locali, Prenotazioni, Contatti |
| Band ed eventi musicali | `/servizi/band-eventi` | sito web band | Sito web band \| Media, calendario e booking \| Comodigitale | Sito per musicisti, DJ e band: biografia, media, calendario eventi e booking per presentarti in modo professionale e ricevere richieste. | https://comodigitale.com/servizi/band-eventi | Organization + Service + BreadcrumbList | Sì · sitemap | Home, Servizi, Eventi privati, Landing ads, Portfolio CV, Contatti |
| Agenzie immobiliari | `/servizi/agenzie-immobiliari` | sito agenzia immobiliare | Sito agenzia immobiliare \| Schede, ricerca e appuntamenti \| Comodigitale | Sito per agenzie immobiliari con schede complete, ricerca avanzata, planimetrie, video e richiesta di appuntamento. | https://comodigitale.com/servizi/agenzie-immobiliari | Organization + Service + BreadcrumbList | Sì · sitemap | Home, Servizi, Preventivi, Landing ads, Digitalizzazione, Contatti |
| Eventi privati | `/servizi/eventi-privati` | sito evento | Sito evento \| Compleanni, lauree e feste private \| Comodigitale | Pagina dedicata a compleanni, lauree, battesimi e feste: RSVP, location, programma e informazioni utili per gli invitati. | https://comodigitale.com/servizi/eventi-privati | Organization + Service + BreadcrumbList | Sì · sitemap | Home, Servizi, Matrimoni, Sagre, Landing ads, Contatti |
| Siti per artigiani | `/servizi/artigiani` | sito web artigiano | Sito web artigiano \| Portfolio lavori e preventivi \| Comodigitale | Sito per artigiani e imprese locali: portfolio lavori, zona di intervento e richiesta preventivo, con WhatsApp e mappe. | https://comodigitale.com/servizi/artigiani | Organization + Service + BreadcrumbList | Sì · sitemap | Home, Servizi, Preventivi, Professionisti, One page, Contatti |
| Landing per campagne ads | `/servizi/landing-ads` | landing page | Landing page \| Campagne ads e conversione \| Comodigitale | Landing page per campagne Google, Instagram e Facebook: un obiettivo, una call to action e tracking, senza distrazioni. | https://comodigitale.com/servizi/landing-ads | Organization + Service + BreadcrumbList | Sì · sitemap | Home, Servizi, One page, Sito 48h, Digitalizzazione, Contatti |
| OnePage Start | `/servizi/one-page` | sito one page | Sito one page \| Presenza essenziale e professionale \| Comodigitale | Sito one page essenziale: presentazione, servizi, contatti, WhatsApp e posizione. Una presenza digitale chiara e responsive. | https://comodigitale.com/servizi/one-page | Organization + Service + BreadcrumbList | Sì · sitemap | Home, Servizi, Sito 48h, Landing ads, Professionisti, Contatti |
| Sito in 48/72 ore | `/servizi/sito-48h` | sito web veloce | Sito web veloce \| Online in 48/72 ore \| Comodigitale | Sito professionale in 48/72 ore per chi ha già logo, foto e testi. Struttura pronta, personalizzazione visiva e pubblicazione. | https://comodigitale.com/servizi/sito-48h | Organization + Service + BreadcrumbList | Sì · sitemap | Home, Servizi, One page, Landing ads, Professionisti, Contatti |
| Palestre e personal trainer | `/servizi/palestre` | sito web palestra | Sito web palestra \| Corsi, clienti e prenotazioni \| Comodigitale | Sistema digitale per palestre e personal trainer: prenotazione corsi, calendario, abbonamenti e comunicazioni con i clienti. | https://comodigitale.com/servizi/palestre | Organization + Service + BreadcrumbList | Sì · sitemap | Home, Servizi, Prenotazioni, Associazioni sportive, Digitalizzazione, Contatti |
| Sistema preventivi online | `/servizi/preventivi-online` | preventivo online | Preventivo online \| Richieste complete e organizzate \| Comodigitale | Sistema di preventivo online: il cliente sceglie il servizio, inserisce dati e foto, tu ricevi una richiesta già organizzata. | https://comodigitale.com/servizi/preventivi-online | Organization + Service + BreadcrumbList | Sì · sitemap | Home, Servizi, Artigiani, Agenzie immobiliari, Digitalizzazione, Contatti |
| Portali di prenotazione | `/servizi/prenotazioni` | prenotazioni online | Prenotazioni online \| Calendario, conferme e promemoria \| Comodigitale | Prenotazioni online per attività su appuntamento: calendario, disponibilità, conferme e promemoria, senza dipendere solo dal telefono. | https://comodigitale.com/servizi/prenotazioni | Organization + Service + BreadcrumbList | Sì · sitemap | Home, Servizi, Ristoranti, Palestre, Professionisti, Contatti |
| Portfolio e CV online | `/servizi/cv-portfolio` | portfolio online | Portfolio online \| Progetti, competenze e CV \| Comodigitale | Portfolio e CV online per freelance e creativi: progetti, competenze, esperienze e download del curriculum in un sito personale. | https://comodigitale.com/servizi/cv-portfolio | Organization + Service + BreadcrumbList | Sì · sitemap | Home, Servizi, Professionisti, Band, One page, Contatti |
| Portali per eventi locali | `/servizi/eventi-locali` | portale eventi | Portale eventi \| Calendario e schede del territorio \| Comodigitale | Portale eventi locali per sagre, concerti e manifestazioni: calendario, mappa e schede evento per scoprire cosa succede in zona. | https://comodigitale.com/servizi/eventi-locali | Organization + Service + BreadcrumbList | Sì · sitemap | Home, Servizi, Sagre, Band, Landing ads, Contatti |
| Digitalizzazione dell’azienda | `/servizi/digitalizzazione` | digitalizzazione aziendale | Digitalizzazione aziendale \| Sito, automazioni e CRM \| Comodigitale | Digitalizzazione aziendale: sito, email, CRM, automazioni e manutenzione in un unico sistema, non solo una vetrina online. | https://comodigitale.com/servizi/digitalizzazione | Organization + Service + BreadcrumbList | Sì · sitemap | Home, Servizi, Preventivi, Prenotazioni, Landing ads, Contatti |
