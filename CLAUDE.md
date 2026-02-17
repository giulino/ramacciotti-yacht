# CLAUDE.md — Ramacciotti Yachts

Read this file at the start of every session. It is the single source of truth for the project.

---

## Project Overview

**Ramacciotti Yachts** is a boutique yacht advisory and charter brokerage house based on the Italian Riviera. Founded by Tommaso and Francesca Ramacciotti, the firm operates a founder-led, low-volume model — intentionally limiting the number of charters each season to preserve quality, focus, and personal involvement.

- **Core services:** Charter Advisory & Yacht Selection, Bespoke Itinerary Design, Corporate & Executive Chartering, Yacht Management & Compliance
- **Fleet focus:** Mid-range motor yachts (20–40m) — currently featuring Mangusta 92, Ferretti 860, Folgore 88 (Space Cowboy), Casagnola Heritage (Brigitte), Van Dutch 40 (Pilar), Magnum 40 (Ulisse), Pershing
- **Operating regions:** Mediterranean (Ligurian Riviera, Sardinia/Costa Smeralda) and Caribbean (St. Barth, Antigua, Bahamas, Cayman Islands)
- **Differentiator:** Not a high-volume brokerage platform. Every charter is personally overseen by the founders. Clients don't just book a voyage — they enter a long-term advisory relationship. The firm operates under CYBA and MYBA charter standards.
- **The Ramacciotti Club:** A private membership circle for returning clients — access to exclusive events, priority bookings, partner benefits, and a dedicated founder relationship. Membership by invitation or through chartering.
- **Design inspiration:** [benettiyachts.com](https://benettiyachts.com/) — understated, cinematic, editorially rich

---

## Brand Voice

The tone is **warm, cinematic, editorial, and emotionally luxurious** — never corporate, never salesy, never loud. Think a founder writing a personal letter, not a marketing team writing ad copy.

### Key phrases from brand documents (use these verbatim or adapt closely):
- "You sail, we handle the detail"
- "The Art of Yacht Chartering"
- "Journeys defined by elegance, intention, and thoughtful detail"
- "What we create is more than a charter. It's a way of belonging where you feel seen, welcomed, and part of a circle that continues beyond the sea." — Tommaso Ramacciotti
- "Belonging begins when the voyage ends."
- "Every journey is limited in number but unlimited in care."
- "In every detail, professionalism meets grace."
- "Begin your journey"

### Voice principles:
- **Founder-led warmth** — speak as if Tommaso or Francesca are addressing the reader directly
- **Understated confidence** — never boastful; let quality speak through restraint
- **Italian sensibility** — references to light, sea, teak, linen, golden hour, espresso, slow rhythms
- **Discretion as a value** — privacy and confidentiality are woven into the language, not bolted on
- **Continuity over transactions** — every touchpoint implies a long-term relationship, not a one-off booking

### Words to use: curate, bespoke, refined, discreet, intention, belonging, continuity, advisory, elegance, care
### Words to avoid: luxury (overused), exclusive (too corporate), deal, package, discount, cheap, affordable

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | SvelteKit | 2.x |
| UI | Svelte | 5.x (runes only) |
| Styling | Tailwind CSS | 4.x (CSS-based config via `@theme`) |
| Animation | GSAP + ScrollTrigger | 3.x |
| Language | TypeScript | 5.x |
| Build | Vite | 7.x |

### Conventions established:
- **No `tailwind.config.ts`** — Tailwind v4 uses CSS-based configuration in `src/app.css` via `@theme` block
- **Vite config** includes `@tailwindcss/vite` plugin before `sveltekit()` in `vite.config.ts`
- **Global styles** live in `src/app.css`, imported in `+layout.svelte`
- **GSAP plugins** registered in `src/lib/utils/animations.ts` via `registerPlugins()`

---

## Design System

### Fonts

Two font families are available in `/static/fonts/`:

| Font | Role | Weights Available |
|------|------|-------------------|
| **Avenir** | Primary — all body text, navigation, UI, captions | Light (300), Regular (400), Medium (500), DemiBold (600), Bold (700) |
| **ClashDisplay** | Display — hero headlines, section titles, large-format text | Extralight, Light, Regular, Medium, Semibold, Bold, Variable |

**Usage rules:**
- Body copy, navigation, buttons, labels, captions → **Avenir** (font-sans, already the Tailwind default)
- Hero headlines (`text-5xl` and above), section titles → **ClashDisplay** (requires adding `@font-face` declarations and a `font-display` Tailwind class when first used)
- The nav wordmark "RAMACCIOTTI YACHTS" uses Avenir Light (300), uppercase, `tracking-[0.25em]`

**Font stack (CSS):** `'Avenir', 'Avenir Next', system-ui, -apple-system, 'Helvetica Neue', sans-serif`

### Color Palette

Defined in `src/app.css` `@theme` block and mirrored as CSS custom properties in `:root`.

| Token | Hex | Usage |
|-------|-----|-------|
| `navy` | `#0B1D33` | Primary dark background, nav solid state, hero overlays |
| `navy-light` | `#142D4C` | Secondary dark backgrounds, hover states on navy |
| `cream` | `#F5F0EB` | Light section backgrounds, text on dark backgrounds |
| `gold` | `#C9A96E` | Accents, CTAs, hover highlights, decorative lines, quotes |
| `gold-light` | `#D4BC8E` | Secondary gold — subtle accents, borders |
| `white` | `#FFFFFF` | Text on dark backgrounds |
| `charcoal` | `#2C2C2C` | Body text on light backgrounds |
| `slate` | `#6B7B8D` | Secondary text, captions, muted labels |

**Tailwind usage:** `bg-navy`, `text-gold`, `border-gold-light`, etc. — all available as utilities.

### Typography Scale

| Element | Classes |
|---------|---------|
| Hero headline | `text-5xl md:text-7xl lg:text-8xl` · tracking tight · ClashDisplay Light or Regular |
| Section title | `text-3xl md:text-4xl lg:text-5xl` · tracking tight · ClashDisplay |
| Subsection title | `text-xl md:text-2xl` · Avenir Medium (500) |
| Body text | `text-base md:text-lg` · leading relaxed · Avenir Regular (400) |
| Caption / label | `text-xs md:text-sm` · uppercase · `tracking-[0.2em]` · Avenir |
| Nav links | `text-xs` · uppercase · `tracking-[0.2em]` · Avenir |
| Wordmark | `text-sm md:text-base` · uppercase · `tracking-[0.25em]` · Avenir Light (300) |

### Spacing

| Context | Classes |
|---------|---------|
| Section vertical padding | `py-24 md:py-32 lg:py-40` |
| Content container | `max-w-7xl mx-auto px-6 md:px-12` |
| Between major elements | `gap-12 md:gap-16 lg:gap-20` |
| Between text blocks | `gap-6 md:gap-8` |

---

## Project Structure

```
src/
├── app.css                              # Design system: @font-face, @theme, CSS vars, base styles
├── app.html                             # HTML shell
├── app.d.ts                             # SvelteKit type declarations
├── routes/
│   ├── +layout.svelte                   # Global layout: Navigation + Footer wrapping content
│   └── +page.svelte                     # Landing page: all sections stacked
└── lib/
    ├── index.ts                         # Barrel exports
    ├── components/
    │   ├── layout/
    │   │   ├── Navigation.svelte        # Transparent→solid navbar, scroll-aware, responsive
    │   │   ├── MobileMenu.svelte        # Full-screen cinematic overlay menu
    │   │   └── Footer.svelte            # Dark navy footer with links and legal
    │   ├── sections/
    │   │   ├── Hero.svelte              # Full-screen cinematic hero
    │   │   ├── BrandStory.svelte        # Founder quote + brand introduction
    │   │   ├── FleetShowcase.svelte     # Yacht cards/carousel
    │   │   ├── Services.svelte          # Service pillars (Charter, Itinerary, Corporate, Club)
    │   │   ├── FeaturedYacht.svelte     # Spotlight on a single yacht
    │   │   ├── Destinations.svelte      # Three destination cards (Caribbean, Sardinia, Liguria)
    │   │   └── ContactCTA.svelte        # Enquiry form + subscribe
    │   └── ui/                          # Shared UI components (buttons, cards, etc.)
    ├── types/
    │   └── index.ts                     # NavLink, SocialLink interfaces
    └── utils/
        └── animations.ts               # GSAP + ScrollTrigger registration

static/
├── fonts/                               # Avenir (.woff2/.woff) + ClashDisplay (.woff2/.woff)
└── robots.txt

reference/                               # (gitignored) Source files from client
├── COMPANY PROFILE/                     # Brand PDFs
├── FONTS/                               # Original font source files
└── WEBSITE/                             # Photos, text content, setup docs
```

---

## Landing Page Structure

The landing page (`+page.svelte`) stacks these sections in order. Each section alternates between dark (navy) and light (cream) backgrounds to create visual rhythm.

### 1. Hero (navy, full viewport)
- Full-screen cinematic background (video or high-res still — yacht wake, sunrise on water, teak deck reflection)
- Overlay: "RAMACCIOTTI YACHTS" wordmark + "Boutique Yacht Advisory & Charter Brokerage"
- Tagline: "Journeys defined by elegance, intention, and thoughtful detail."
- Subtle scroll indicator at bottom
- Consider: ambient slow Ken Burns zoom on background image

### 2. BrandStory (cream)
- Founder quote: *"What we create is more than a charter. It's a way of belonging where you feel seen, welcomed, and part of a circle that continues beyond the sea."* — Tommaso Ramacciotti
- Brief paragraph: advisory-led, founder-driven, Italian Riviera roots, CYBA/MYBA certified
- CTA: "Begin your journey" → smooth scroll to ContactCTA
- Possibly accompanied by a founder portrait (see assets below)

### 3. FleetShowcase (navy)
- Section title: "The Collection" or "Our Fleet"
- Cards or horizontal scroll of featured yachts:
  - **Mangusta 92** — hero yacht, 26 photos available
  - **Ferretti 860** — 5 photos + spec sheet PDF
  - **Folgore 88 "Space Cowboy"** — 6 dramatic photos
  - **Casagnola Heritage "Brigitte"** — 6 photos
  - **Van Dutch 40 "Pilar"** — 2 photos
  - **Magnum 40 "Ulisse"** — 1 photo
  - **Pershing** — 2 photos
- Each card: yacht image, name, brief spec line
- CTA: "View the Full Fleet"

### 4. Services (cream)
- Four pillars displayed as a grid or horizontal cards:
  1. **Charter Advisory & Yacht Selection** — "We present selected yachts chosen for quality, crew professionalism, and overall character."
  2. **Bespoke Itinerary Design** — "Routes shaped around seasonality, rhythm, and personal objectives."
  3. **Corporate & Executive Chartering** — "From private yacht meetings to immersive multi-day voyages."
  4. **The Ramacciotti Club** — "A private circle where each voyage deepens the connection."
- Philosophy grid option: Boutique / Tailored / Discreet / Italian Elegance

### 5. FeaturedYacht (navy)
- Spotlight section for the hero yacht — likely **Mangusta 92** or **Ferretti 860**
- Large cinematic image with specs overlay
- "Discover this yacht" CTA

### 6. Destinations (navy-light → cream gradient or alternating)
- Three destination blocks:
  - **Caribbean** — "Where winter finds its calm." Season: Dec–Apr. St. Barth, Antigua, Bahamas, Cayman.
  - **Sardinia & Costa Smeralda** — "Where summer becomes an art form." Season: Jun–Sep. Porto Cervo, La Maddalena.
  - **Ligurian Riviera** — "Where color meets calm." Season: May–Oct. Portofino, Camogli, Cinque Terre.
- Each block: full-bleed image + copy + season + CTA button

### 7. ContactCTA (cream)
- Headline: "Begin your journey — request a private consultation."
- Form: Name, Email, Message (3 lines), consent checkbox
- "We reply personally within 24 hours."
- Social links: Instagram, LinkedIn
- Optional newsletter subscribe toggle

---

## Content & Assets

All reference materials are in `/reference/` (gitignored).

### Company Profile PDFs
| File | Description |
|------|-------------|
| `reference/COMPANY PROFILE/COMPANY PROFILE RAMACCIOTTI WEB.pdf` | 11-page brand book — Who We Are, Team, Vision/Mission, Services, The Club, Why Us, Journal |
| `reference/COMPANY PROFILE/COMPANY PROFILE RAMACCIOTTI WEB SINGOLE PAG.pdf` | Same content, single-page layout |
| `reference/COMPANY PROFILE/COMPANY PROFILE RAMACCIOTTI CMYK 3MM ABBONDANZA.pdf` | Print-ready version with bleed |

### Website Content Docs
| File | Description |
|------|-------------|
| `reference/WEBSITE/TESTI/Ramacciotti Yachts.docx` | **Master content document** — full section-by-section website copy for Home, About, Fleet, Destinations, The Club, Corporate, Journal, Contact |
| `reference/WEBSITE/SET UP/website guidlines set up.docx` | CMS and deployment instructions (Netlify + GitHub) |
| `reference/WEBSITE/SET UP/COMPANIES INSPIRING.docx` | Design inspiration links: Benetti Yachts, Pardo Yachts, ExecuJet, Four Seasons, Amrit Palace, House of Corto |

### Founder Portraits
| File | Description |
|------|-------------|
| `FOTO PROFESSIONALI personali/tommaso 9.JPG` | Tommaso Ramacciotti — main portrait (12MB) |
| `FOTO PROFESSIONALI personali/IMG_6653.JPG` | Tommaso — secondary (4.3MB) |
| `FOTO PROFESSIONALI personali/5bcc8932-d30f-42f4-9ae2-00a7bc155808.JPG` | Tommaso — casual (225KB) |
| `FOTO PROFESSIONALI personali/Francesca .jpg` | Francesca Ramacciotti — color portrait (2.1MB) |
| `FOTO PROFESSIONALI personali/francesca.jpg` | Francesca — color variant (1.3MB) |
| `FOTO PROFESSIONALI personali/francesca B&W.jpg` | Francesca — black & white (1.2MB) |
| `FOTO PROFESSIONALI personali/francesca B&W(1).jpg` | Francesca — B&W variant (1.8MB) |

All in: `reference/WEBSITE/PHOTOS to use on website/FOTO PROFESSIONALI personali/`

### Yacht Photos — General
All in: `reference/WEBSITE/PHOTOS to use on website/GENERAL PHOTOS YACHT/`

| Yacht | Files | Notes |
|-------|-------|-------|
| **Casagnola Heritage "Brigitte"** | `Heritage Brigitte00001.jpeg` through `00035.jpeg` (6 images) | Exterior shots, 2.6–6.1MB each |
| **Folgore 88 "Space Cowboy"** | `Folgore99 (Space cowboy)_1.jpg` through `_43.jpg` (6 images) | Dramatic exterior, 9.8–13.7MB each |
| **Ferretti 860** | `Ferretti 860_5.jpg`, `Ferretti 860_34.jpg` | 5.4–11.3MB |
| **Van Dutch 40 "Pilar"** | `Van Dutch 40 (Pilar)3.jpg`, `Van Dutch 40 (Pilar)15.jpg` | 7.8–12.5MB |
| **Magnum 40 "Ulisse"** | `Magnum 40 (Ulisse)2.jpg` | 9.5MB |
| **Pershing** | `Pershing_35.jpg`, `Pershing_36.jpg` | 9.9–12.8MB |

### Yacht Photos — The Collection (detailed gallery sets)
All in: `reference/WEBSITE/THE COLLECTION/`

| Yacht | Files | Notes |
|-------|-------|-------|
| **Ferretti 860** | `Ferretti 860_16.jpg`, `_17.jpg`, `_29.jpg` + `FERRETTI 860.pdf` (spec sheet) | 5–7.5MB per image |
| **Mangusta 92** | `Mangusta92-0.jpg` through `Mangusta92-25.jpg` (26 images) | Full gallery, 130–272KB each (web-ready) |

### Font Files
| Location | Content |
|----------|---------|
| `reference/FONTS/AVENIR/Avenir.ttc` | Avenir TrueType Collection (12 styles) |
| `reference/FONTS/AVENIR/Avenir Next.ttc` | Avenir Next TrueType Collection (12 styles) |
| `reference/FONTS/ClashDisplay_Complete/` | Full ClashDisplay package (OTF, TTF, WEB) |
| `reference/FONTS/Screenshot 2026-01-05 alle 15.08.05.png` | Font reference screenshot |

**Production fonts** are already converted and in `static/fonts/` (woff2 + woff).

---

## Code Conventions

### Svelte 5 Runes Only
- Use `$state()`, `$derived()`, `$effect()`, `$props()` for all reactivity
- **Never** use legacy `$:` reactive statements or `let` reactivity
- Component props use `interface Props` + `$props()`
- Events use callback props (`onclose`, `onclick`), not `createEventDispatcher`

### Styling
- **Tailwind utilities first** — avoid `@apply` unless extracting a component class for repeated patterns
- Use the design system tokens: `bg-navy`, `text-gold`, `text-cream`, etc.
- Responsive: mobile-first — base styles are mobile, override with `md:` and `lg:` prefixes
- Spacing follows the established scale: `py-24 md:py-32 lg:py-40` for sections

### Animations (GSAP)
- Register plugins once in layout: `gsap.registerPlugin(ScrollTrigger)`
- Always clean up GSAP instances in `$effect` return function or `onMount` return
- **Only animate `transform` and `opacity`** — never animate layout properties (width, height, top, left, margin, padding)
- Use `will-change: transform` sparingly and only on elements that will animate
- ScrollTrigger: prefer `scrub: true` for scroll-linked animations, `toggleActions` for triggered animations
- Stagger animations for lists/grids: 80–150ms between items
- Easing: `power2.out` for entrances, `power2.inOut` for transitions

### Performance
- Images: use `loading="lazy"` and `decoding="async"` for below-fold images
- Fonts: `font-display: swap` (already configured)
- Prefer CSS transitions for simple state changes (nav scroll, hover effects)
- Reserve GSAP for complex, scroll-driven, or sequenced animations

### File Organization
- Components in `src/lib/components/{layout,sections,ui}/`
- Types in `src/lib/types/`
- Utilities in `src/lib/utils/`
- One component per file, named in PascalCase matching the filename

---

## Build Plan

Ordered implementation sessions after scaffolding:

1. **Hero Section** — Full-screen cinematic background, animated text overlay, scroll indicator. GSAP entrance animations.
2. **BrandStory Section** — Founder quote with gold accent, intro paragraph, scroll-triggered fade-in.
3. **FleetShowcase Section** — Yacht cards with images from `/reference/`, horizontal scroll or grid, hover effects.
4. **Services Section** — Four service pillars in a responsive grid, subtle hover animations.
5. **FeaturedYacht Section** — Full-width spotlight with large image, specs overlay, parallax scroll.
6. **Destinations Section** — Three destination blocks with full-bleed images, alternating layout, season badges.
7. **ContactCTA Section** — Enquiry form, social links, newsletter toggle, form validation.
8. **Image Pipeline** — Optimize all reference photos (resize, compress, convert to WebP), move to `static/images/`.
9. **Polish Pass** — Scroll animations, page transitions, loading states, SEO meta tags, performance audit.
10. **Additional Pages** — About, Fleet detail, Destinations detail, The Club, Corporate, Journal (future sessions).

---

## Important Notes

- The `reference/` directory is **gitignored** — it contains large source files from the client. Never commit it.
- All images in `/reference/` are high-resolution originals. They **must be optimized** (resized, compressed, WebP) before being used in the site. Copy optimized versions to `static/images/`, never serve originals.
- The Mangusta 92 images are already web-sized (130–272KB). Other yacht images are 5–13MB originals that need processing.
- The company operates under the name "Ramacciotti Yachts" (not "Ramacciotti Yacht" singular).
- The founders are **Tommaso Ramacciotti** (Founder & Managing Director) and **Francesca Ramacciotti** (Co-Founder & Client Experience & Marketing Director).
