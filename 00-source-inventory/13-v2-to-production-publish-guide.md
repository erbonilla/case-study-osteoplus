# Osteóplus — v2 → Production Publish Guide

> Comprehensive instructions to move the v2 Claude Design case study to publish-ready Vercel/Next.js production. Covers the critical Vercel port, performance optimization, design refinements, remaining bonus features, new stand-out moves, and post-publish iteration.

**Use this file alongside:** `04-nextjs-build-kit.md` (Next.js architecture), `11-case-study-build-instructions.md` (page architecture), `12-case-study-revision-instructions.md` (v1 → v2 history).

---

## Executive summary

**Current state.** v2 is feature-complete as a case study. All 4 high-priority gaps, all 5 medium improvements, 3 of 6 stand-out moves, and 3 bonus features (TweaksPanel, dark mode, three hero layouts) are implemented in Claude Design.

**The remaining work is engineering, not design.** Three pieces remain:

1. **Critical:** Port to Vercel/Next.js (8–12 hours). This is the only thing blocking public publish.
2. **Refinements:** Performance optimization, TweaksPanel framing, default hero layout selection.
3. **Optional polish:** New stand-out moves that elevate above typical first-portfolio work.

**Total time investment to public publish:** 12–20 hours, realistically 1 week part-time.

---

## Part 1 — The Vercel port (critical path)

### 1.1 Architecture decision

The Claude Design bundle is a single-page React app loaded via `text/babel` scripts compiled in-browser. For Vercel, you have three viable architectures:

| Option | Approach | Pros | Cons |
|---|---|---|---|
| **A. Static HTML/CSS port** | Pre-render the React output to static HTML, drop Babel | Smallest bundle (~50 KB), fastest LCP, no JS needed | Loses TweaksPanel, dark mode, locale toggle |
| **B. Next.js with React Server Components** *(recommended)* | Server-render sections, client-only the interactive bits | Best of both — fast LCP + retained interactivity | Most engineering effort |
| **C. Vite + React SPA** | Build the same React app with proper bundling | Direct port from current code | Larger bundle than B, worse SEO |

**Recommendation: B (Next.js App Router with React Server Components).** Best long-term home for your portfolio, retains all v2 features.

### 1.2 File structure on Vercel

```
edgar-portfolio/                                    ← your Next.js project
├── app/
│   ├── case-studies/
│   │   └── osteoplus/
│   │       ├── page.tsx                           ← server component, renders sections
│   │       ├── layout.tsx                         ← metadata, fonts
│   │       ├── _components/                       ← page-scoped client components
│   │       │   ├── top-chrome.tsx                ← topbar with progress, locale, dark mode
│   │       │   ├── floating-toc.tsx
│   │       │   ├── brand-ribbon.tsx
│   │       │   ├── hero/
│   │       │   │   ├── index.tsx
│   │       │   │   ├── asymmetric-layout.tsx
│   │       │   │   ├── centered-layout.tsx
│   │       │   │   └── manifesto-layout.tsx
│   │       │   ├── tldr.tsx
│   │       │   ├── process.tsx
│   │       │   ├── persona.tsx
│   │       │   ├── solution.tsx
│   │       │   ├── decisions.tsx
│   │       │   ├── accessibility.tsx
│   │       │   ├── impact.tsx
│   │       │   ├── reflection.tsx
│   │       │   ├── credits.tsx
│   │       │   └── tweaks-panel.tsx              ← see Part 2 — keep, label, or hide
│   │       ├── _mockups/                          ← all SVG mockups as React components
│   │       │   ├── phone-frame.tsx
│   │       │   ├── today-screen.tsx
│   │       │   ├── booking-screen.tsx
│   │       │   ├── rep-counter-screen.tsx
│   │       │   ├── pain-interrupt-screen.tsx
│   │       │   ├── streak-screen.tsx
│   │       │   ├── privacy-screen.tsx
│   │       │   └── confirmation-screen.tsx
│   │       ├── _data/
│   │       │   ├── types.ts
│   │       │   ├── copy.ts                       ← ES/EN mockup copy
│   │       │   ├── toc.ts
│   │       │   ├── persona-themes.ts
│   │       │   ├── decisions.ts
│   │       │   ├── solutions.ts
│   │       │   ├── impact-metrics.ts
│   │       │   └── reflection.ts
│   │       └── _hooks/
│   │           ├── use-scrollspy.ts
│   │           ├── use-scroll-progress.ts
│   │           └── use-tweaks.ts                 ← if keeping TweaksPanel
│   ├── globals.css                                ← tokens, fonts, base styles
│   └── layout.tsx                                 ← root with Inter, Merriweather
├── public/
│   ├── og/
│   │   └── osteoplus.png                          ← 1200×630
│   └── icons/
│       └── osteoplus-logo-primary-teal.svg
└── package.json
```

### 1.3 Step-by-step port sequence

#### Step 1 — Set up the Next.js project shell (1 hour)

```bash
npx create-next-app@latest edgar-portfolio --typescript --tailwind --app --eslint
cd edgar-portfolio
npm install lucide-react
```

In `app/layout.tsx`, set up fonts:

```tsx
import { Inter, Merriweather } from 'next/font/google';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-body',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-display',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

#### Step 2 — Extract OP_DATA into typed TypeScript (1 hour)

Open the Claude Design bundle, copy `OP_DATA` content into separate files under `_data/`. Define types in `types.ts`:

```ts
// app/case-studies/osteoplus/_data/types.ts
export type LabelKind = 'documented' | 'expected' | 'recommended' | 'placeholder' | 'assumption';

export type Decision = {
  title: string;
  label: string;
  labelKind: LabelKind;
  why: string;
  rejected: string;
  tradeoff: string;
};

export type Solution = {
  n: string;
  problem: string;
  title: string;
  decision: string;
  rejected?: string;
  tradeoff?: string;
  label: string;
  labelKind: LabelKind;
  metric: string;
  mockup: string;
  liveUrl?: string;
  annotatedInA11Y?: boolean;
  behind?: {
    source: string;
    screens: string;
    components: string;
  };
};

export type PersonaTheme = {
  name: string;
  blurb: string;
  impl: string;
};

export type Metric = {
  name: string;
  target?: string;
  note?: string;
};

export type ReflectionBlock = {
  title: string;
  body?: string[];
  list?: string[];
  closer?: boolean;
};
```

Then in `_data/decisions.ts`:

```ts
import type { Decision } from './types';

export const DECISIONS: Decision[] = [
  {
    title: 'Today view as default landing surface',
    label: 'Documented strategy',
    labelKind: 'documented',
    why: 'The Repository pattern forced too many decisions. The Today view surfaces the next action directly.',
    rejected: 'Plan archive as landing (too cognitive). Appointment list as landing (passive).',
    tradeoff: 'Deep medical info is one tap further away.',
  },
  // ... 5 more from your v2 bundle
];
```

Repeat for `solutions.ts`, `impact-metrics.ts`, `persona-themes.ts`, `reflection.ts`, `copy.ts`, `toc.ts`.

#### Step 3 — Port the section components (3–4 hours)

Each section in v2 becomes a `.tsx` file. Server components by default; mark `'use client'` only when needed.

**Server components** (no client interactivity needed):
- `tldr.tsx`
- `process.tsx`
- `persona.tsx`
- `decisions.tsx`
- `impact.tsx`
- `reflection.tsx`
- `credits.tsx`

**Client components** (need state or events):
- `top-chrome.tsx` (scrollspy, progress, locale, dark mode)
- `floating-toc.tsx` (active state)
- `hero/index.tsx` (layout switching via tweaks)
- `solution.tsx` (locale switching for mockup copy)
- `accessibility.tsx` (if it uses locale)
- `tweaks-panel.tsx`

Example client component shell:

```tsx
'use client';

import { useState } from 'react';
import { useScrollSpy } from '../_hooks/use-scrollspy';
import { useScrollProgress } from '../_hooks/use-scroll-progress';
import { TOC } from '../_data/toc';

export function TopChrome({ locale, setLocale, dark, setDark }) {
  const active = useScrollSpy(TOC.map(s => s.id));
  const progress = useScrollProgress();

  return (
    <header className="topbar">
      {/* ... port from v2 ... */}
      <div className="topbar-progress" aria-hidden="true">
        <div
          className="topbar-progress-fill"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </header>
  );
}
```

#### Step 4 — Port SVG mockups as React components (2–3 hours)

Each `PhoneFrame`, `TodayScreen`, `BookingScreen`, etc. becomes a React component. Inline the SVG.

```tsx
// _mockups/phone-frame.tsx
type Props = {
  children: React.ReactNode;
  label?: string;
  screenId?: string;
  dark?: boolean;
};

export function PhoneFrame({ children, label, screenId, dark }: Props) {
  return (
    <div className={`phone-frame ${dark ? 'is-dark' : ''}`}>
      <div className="phone-notch" />
      <div className="phone-screen">{children}</div>
      {(label || screenId) && (
        <div className="phone-label">
          {label && <span>{label}</span>}
          {screenId && <code>{screenId}</code>}
        </div>
      )}
    </div>
  );
}
```

**Mockup optimization tips:**
- Inline SVGs as JSX (no external SVG file requests).
- Remove unused SVG attributes (Figma exports tend to include lots of metadata).
- Set explicit `width` and `height` on every mockup to prevent CLS.
- Use `loading="lazy"` on mockups below the fold (modules 2–7).

#### Step 5 — Port the CSS (1–2 hours)

Move the v2 CSS to `app/globals.css` with these refinements:

```css
/* app/globals.css */

@layer reset, tokens, base, components, utilities;

@layer reset {
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
}

@layer tokens {
  :root {
    /* Brand */
    --brand: #0F766E;
    --brand-hover: #115E59;
    --border-brand: #0D9488;
    --border-focus: #14B8A6;
    --accent: #C2410C;

    /* Surfaces */
    --bg: #F8FAFC;
    --surface: #FFFFFF;
    --surface-raised: #F1F5F9;

    /* Text */
    --text-primary: #0F172A;
    --text-secondary: #475569;
    --text-tertiary: #64748B;

    /* Borders */
    --border: #E2E8F0;
    --border-strong: #CBD5E1;

    /* Evidence chips */
    --chip-documented-bg: #F0FDFA;
    --chip-documented-text: #0F766E;
    --chip-documented-border: #99F6E4;
    --chip-expected-bg: #FFF7ED;
    --chip-expected-text: #9A3412;
    --chip-expected-border: #FED7AA;
    --chip-recommended-bg: #F1F5F9;
    --chip-recommended-text: #334155;
    --chip-recommended-border: #CBD5E1;
    --chip-placeholder-bg: #FEF2F2;
    --chip-placeholder-text: #B91C1C;
    --chip-placeholder-border: #FECACA;

    /* Spacing scale */
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-6: 24px;
    --space-8: 32px;
    --space-12: 48px;
    --space-16: 64px;
    --space-24: 96px;

    /* Typography scale */
    --font-display: var(--font-display);
    --font-body: var(--font-body);
    --fs-display: 48px;
    --fs-h1: 32px;
    --fs-h2: 28px;
    --fs-h3: 20px;
    --fs-body-lg: 18px;
    --fs-body: 16px;
    --fs-caption: 14px;
    --fs-micro: 12px;
  }

  :root[data-theme="dark"] {
    --bg: #0F172A;
    --surface: #1E293B;
    --surface-raised: #334155;
    --text-primary: #F8FAFC;
    --text-secondary: #CBD5E1;
    --text-tertiary: #94A3B8;
    --border: #334155;
    --border-strong: #475569;
  }
}
```

#### Step 6 — Hook up state, navigation, and metadata (1 hour)

`app/case-studies/osteoplus/layout.tsx`:

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Osteóplus — From medical repository to Action Dashboard | Edgar Bonilla G.',
  description: 'UX case study: a senior-friendly PWA for a Barcelona osteopathy and physiotherapy clinic. Guest-first booking, Daily Rehab Loop, WCAG 2.2 AA, bilingual ES/EN.',
  authors: [{ name: 'Edgar Bonilla G.' }],
  openGraph: {
    type: 'article',
    title: 'Osteóplus — From medical repository to Action Dashboard',
    description: 'A senior-friendly PWA for a Barcelona clinic. Guest-first booking + The Loop. UX case study.',
    images: ['/og/osteoplus.png'],
    locale: 'en_US',
    alternateLocale: ['es_ES'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Osteóplus — From medical repository to Action Dashboard',
    description: 'A senior-friendly PWA for a Barcelona clinic. UX case study.',
    images: ['/og/osteoplus.png'],
  },
  alternates: {
    canonical: 'https://edgarbonilla.com/case-studies/osteoplus',
  },
};

export default function Layout({ children }) {
  return children;
}
```

`app/case-studies/osteoplus/page.tsx`:

```tsx
import { CaseStudyClient } from './_components/case-study-client';

export default function OsteoplusCaseStudy() {
  return <CaseStudyClient />;
}
```

`_components/case-study-client.tsx`:

```tsx
'use client';

import { useState } from 'react';
import { BrandRibbon } from './brand-ribbon';
import { TopChrome } from './top-chrome';
import { FloatingTOC } from './floating-toc';
import { Hero } from './hero';
import { TLDR } from './tldr';
import { Process } from './process';
import { Persona } from './persona';
import { Solution } from './solution';
import { Decisions } from './decisions';
import { Accessibility } from './accessibility';
import { Impact } from './impact';
import { Reflection } from './reflection';
import { Credits } from './credits';
import { TweaksPanel } from './tweaks-panel';

export function CaseStudyClient() {
  const [locale, setLocale] = useState<'es' | 'en'>('es');
  const [dark, setDark] = useState(false);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <BrandRibbon />
      <TopChrome locale={locale} setLocale={setLocale} dark={dark} setDark={setDark} />
      <FloatingTOC />
      <main id="main">
        <Hero locale={locale} />
        <TLDR />
        <Process locale={locale} />
        <Persona />
        <Solution locale={locale} />
        <Decisions />
        <Accessibility locale={locale} />
        <Impact />
        <Reflection />
        <Credits />
      </main>
      <TweaksPanel />
    </>
  );
}
```

---

## Part 2 — TweaksPanel decision (the 30-minute call)

The TweaksPanel is genuinely sophisticated but ambiguous. Pick one of three options.

### Option A — Keep visible with explicit framing

Add a small label above the panel:

```tsx
<div className="tweaks-frame">
  <div className="tweaks-frame-label">
    🛠 Designer mode — explore palette and layout. Default theme ships to production.
  </div>
  <TweaksPanel>...</TweaksPanel>
</div>
```

**Pros:** Recruiters and design managers see the panel and understand its purpose immediately.
**Cons:** Adds visual noise. The label itself can read as defensive.

### Option B — Hide behind a keyboard shortcut *(recommended)*

```tsx
'use client';

import { useEffect, useState } from 'react';

export function TweaksPanel() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.shiftKey && (e.key === 'T' || e.key === 't')) {
        setVisible(v => !v);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  if (!visible) return null;

  return (
    <div className="tweaks-panel" role="region" aria-label="Design tweaks">
      {/* ... rest of panel ... */}
    </div>
  );
}
```

Add a small footer hint:

```tsx
<small className="tweaks-hint">Press <kbd>Shift + T</kbd> for designer mode.</small>
```

**Pros:** Clean default experience for recruiters. Power-users (design managers, fellow designers) discover the Easter egg and remember it.
**Cons:** Many viewers never know it exists.

### Option C — Remove from production

Keep TweaksPanel only in the Claude Design playground version. Strip it from Vercel deploy.

**Pros:** Cleanest production experience.
**Cons:** Loses a sophisticated differentiator.

**My recommendation:** **Option B.** It's the elegant move — clean default, discoverable depth, and it demonstrates the same product-thinking the case study advocates (don't burden the primary user with power-user controls; let them be earned).

---

## Part 3 — Hero default layout selection

You have three layouts (asymmetric, centered, manifesto). Pick one as default with a 30-minute test.

### The 5-second test

1. Take screenshots of all 3 layouts at desktop (1440px) and mobile (375px).
2. Ask 3 non-designer friends: "Look at this for 5 seconds, then tell me what the product is and who it's for."
3. Score each layout 0–2 based on how clearly they communicate:
   - Audience (adults 60+ / seniors)
   - Domain (rehab / clinic / healthcare)
   - Type of product (app / PWA / digital)

### Decision matrix

| Layout | Density | Mobile fit | First-scan clarity | Recommended for |
|---|---|---|---|---|
| **Asymmetric** | High | Tight | Visually interesting; can fragment attention | Design manager audience |
| **Centered** | Medium | Excellent | Cleanest first scan, most conventional | Recruiter audience |
| **Manifesto** | Low | Excellent | Highest emphasis on thesis, lowest info density | Highest-emphasis statement |

**My default recommendation:** **Centered.** It scans fastest, works on mobile without compromise, and lets the mockup composition carry the visual weight without competing with the meta data. Keep asymmetric and manifesto as TweaksPanel options.

---

## Part 4 — Performance optimization

The Claude Design bundle is 3.2 MB. On Vercel with Next.js, target a 90% reduction.

### 4.1 Bundle size targets

| Resource | Current (Claude Design) | Vercel target |
|---|---|---|
| HTML | 75 KB | 5 KB (server-rendered shell) |
| JavaScript | 1.3 MB (Babel runtime + JSX) | 100–200 KB (Next.js client bundle) |
| Fonts | 800 KB (23 subsets) | 80–120 KB (2–3 subsets) |
| SVG mockups | 800 KB (inline base64) | 80 KB (inline JSX, compressed) |
| **Total initial** | **3.2 MB** | **~300 KB** |

### 4.2 Font optimization

Don't load 23 woff2 subsets. With `next/font/google`, only the subsets you declare get bundled.

```tsx
// app/layout.tsx
const inter = Inter({
  subsets: ['latin', 'latin-ext'],  // ES/EN coverage; drop cyrillic, greek, vietnamese
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});
```

This drops from 23 files to ~4 files.

### 4.3 SVG mockup optimization

Each mockup screen contains 100+ rect/path elements. Optimize:

1. **Run SVGO** on each mockup: `npx svgo screens/*.svg --multipass`
2. **Remove unused attributes**: Figma exports include `id`, `data-name`, etc. Strip them.
3. **Group repeated elements**: if 6 buttons have the same fill, use a CSS class or a single defs/use pattern.
4. **Lazy-load below the fold**: mockups in modules 4–7 use `loading="lazy"` and `decoding="async"`.

Expected reduction: 800 KB → 80–120 KB.

### 4.4 Critical CSS inlining

Next.js does this automatically with App Router. Verify no CSS is render-blocking by running Lighthouse.

### 4.5 Image optimization for the OG image

```bash
# Generate optimized OG image
npx sharp public/og/osteoplus-source.png \
  --resize 1200x630 \
  --format webp \
  --quality 85 \
  -o public/og/osteoplus.webp

# Keep PNG fallback for compatibility
npx sharp public/og/osteoplus-source.png \
  --resize 1200x630 \
  --format png \
  --quality 90 \
  -o public/og/osteoplus.png
```

### 4.6 Lighthouse targets

| Metric | Target | Why |
|---|---|---|
| **Performance** | ≥ 85 | Realistic with mockup-heavy page |
| **Accessibility** | ≥ 95 | Non-negotiable — the case study is *about* accessibility |
| **Best Practices** | ≥ 95 | |
| **SEO** | 100 | All meta tags should pass |
| LCP | ≤ 2.5s | Hero mockup with `priority` |
| INP | ≤ 200ms | Avoid heavy client-side JS on first paint |
| CLS | ≤ 0.1 | Explicit dimensions on all mockups |

### 4.7 Performance budget JSON

Add `performance-budget.json` to your project to track regressions:

```json
{
  "budgets": [
    {
      "resourceSizes": [
        { "resourceType": "script", "budget": 200 },
        { "resourceType": "stylesheet", "budget": 80 },
        { "resourceType": "image", "budget": 150 },
        { "resourceType": "font", "budget": 120 },
        { "resourceType": "total", "budget": 600 }
      ],
      "timings": [
        { "metric": "first-contentful-paint", "budget": 1500 },
        { "metric": "largest-contentful-paint", "budget": 2500 },
        { "metric": "interactive", "budget": 3500 }
      ]
    }
  ]
}
```

---

## Part 5 — Design refinements

### 5.1 Typography audit

Walk through every text element and verify against the senior-friendly type rules.

| Element | Spec | Verify |
|---|---|---|
| Hero H1 | Merriweather 48px / 1.1 / 700 | Does not break at mobile (340px width) |
| Section H2 | Merriweather 28–32px / 1.2 / 700 | Consistent across all 10 sections |
| Body text | Sans 18px / 1.6 / 400 | **Especially patient-facing copy** |
| Module problem quote | Italic, slate-700, 18px+ | Reads as a quote, not a header |
| Module decision | Sans 16px / 1.6 / 400 | Module text density is consistent |
| Caption / mockup label | Sans 13px / 1.4 / 500 | Doesn't go below 12px anywhere |
| Code / token references | Mono 13px / 1.4 | All `code` elements styled consistently |

**Critical rule:** Body text is **18px on the case study page itself**, not 16px. The case study is about senior-friendly design. Walk the talk.

### 5.2 Spacing rhythm audit

Each section should follow a consistent vertical rhythm. Audit:

| Spacing | Use | Verify across sections |
|---|---|---|
| Section padding (desktop) | 96px top / bottom | Same across all 10 sections |
| Section padding (mobile) | 48px | Tighter but consistent |
| Card padding | 32px desktop / 20px mobile | All `.solution-row`, `.decision-row`, `.reflection-block` consistent |
| Grid gap between cards | 16–24px | Consistent |
| Heading-to-body gap | 16px | Same after every H2 and H3 |

### 5.3 Mobile responsiveness checklist

Test on 3 widths: 375px (iPhone SE), 414px (iPhone Pro), 768px (iPad).

- [ ] Hero composite mockup scales without overflow.
- [ ] TweaksPanel either hides on mobile or moves to a bottom sheet.
- [ ] FloatingTOC hides on mobile (it's desktop-only navigation).
- [ ] Decision rows collapse the 3-column grid to 1 column.
- [ ] Module rows alternate left/right on desktop but stack on mobile.
- [ ] Topbar collapses navigation into a hamburger or scrollable strip.
- [ ] No horizontal scrolling on any section.
- [ ] All touch targets remain ≥ 48px on mobile.

### 5.4 Focus ring audit

Tab through the entire page. Every interactive must have a visible 2px teal-500 focus ring.

Specific places to verify:
- Topbar locale toggle (ES/EN buttons)
- Topbar dark mode toggle
- Topbar live link
- FloatingTOC items
- Skip-to-content link (visible on focus only)
- Hero CTAs
- Every "See it live" link
- Every "Behind the design" `<details>` summary
- Every section heading anchor (if you add anchor copy buttons — see §7.3)
- TweaksPanel controls (if visible)

### 5.5 Color contrast verification — especially across 4 palettes

If you keep the TweaksPanel palette swap (Clinical teal, Quiet blue, Warm rust, Deep clinic), verify **each palette passes 4.5:1 contrast** for body text.

```js
// Quick verification script
const palettes = [
  { name: 'Clinical teal', brand: '#0F766E', bg: '#F8FAFC', text: '#0F172A' },
  { name: 'Quiet blue', brand: '#1E3A8A', bg: '#F8FAFC', text: '#0F172A' },
  { name: 'Warm rust', brand: '#7C2D12', bg: '#FFF7ED', text: '#1C0F0F' },
  { name: 'Deep clinic', brand: '#134E4A', bg: '#F1FBF7', text: '#08221F' },
];

// For each palette, run: bg vs text, brand vs bg, brand vs surface
// Use https://webaim.org/resources/contrastchecker/ or axe DevTools
```

If any palette fails, drop it from the TweaksPanel options.

---

## Part 6 — Remaining bonus features worth adding

### 6.1 Print stylesheet

Some recruiters print case studies. Don't ship a broken print experience.

```css
/* app/globals.css */
@media print {
  .topbar,
  .floating-toc,
  .brand-ribbon,
  .tweaks-panel,
  .skip-link,
  .behind-design,
  .see-live,
  .hero-ctas {
    display: none !important;
  }

  body {
    font-size: 11pt;
    color: #000;
    background: #fff;
  }

  .section {
    page-break-inside: avoid;
    padding: 1cm 0;
  }

  h1, h2, h3 {
    page-break-after: avoid;
  }

  a[href^="http"]::after {
    content: " (" attr(href) ")";
    font-size: 9pt;
    color: #666;
  }

  .phone-frame {
    max-width: 60mm;
  }
}
```

### 6.2 JSON-LD schema markup

Add structured data so the case study appears properly in Google search:

```tsx
// app/case-studies/osteoplus/layout.tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Osteóplus — From medical repository to Action Dashboard',
    author: {
      '@type': 'Person',
      name: 'Edgar Bonilla G.',
      jobTitle: 'UI/UX Designer',
    },
    description: 'A senior-friendly PWA case study for a Barcelona osteopathy and physiotherapy clinic.',
    url: 'https://edgarbonilla.com/case-studies/osteoplus',
    datePublished: '2026-XX-XX',
    inLanguage: ['en', 'es'],
    keywords: 'UX case study, healthcare UX, senior-friendly design, WCAG 2.2 AA, PWA, accessibility',
  })
}} />
```

### 6.3 "Last updated" timestamp + version

Recruiters who see a maintained case study trust it more than a one-shot.

```tsx
// In Credits or footer
<div className="meta-stamp">
  <span>Last updated: 2026-XX-XX</span>
  <span>·</span>
  <span>Version 2.0</span>
  <span>·</span>
  <a href="#version-history">Changelog</a>
</div>
```

Add a small `<details>` changelog:

```tsx
<details className="version-history" id="version-history">
  <summary>Version history</summary>
  <ul>
    <li><strong>v2.0</strong> · YYYY-MM-DD — Added Persona, Decisions, Impact, Reflection sections. TweaksPanel for designer mode.</li>
    <li><strong>v1.0</strong> · YYYY-MM-DD — Initial 6-section recruiter-skim publish.</li>
  </ul>
  <p className="version-next">
    Next planned: <strong>v1.1 post-usability-testing</strong> — label promotions from Expected → Documented per the validation roadmap.
  </p>
</details>
```

### 6.4 Skip-to-content link visibility

The skip link exists in v2 but verify it's visible on focus:

```css
.skip-link {
  position: absolute;
  top: -100px;
  left: 0;
  background: var(--brand);
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  z-index: 1000;
  border-radius: 0 0 8px 0;
}

.skip-link:focus {
  top: 0;
}
```

### 6.5 Reduced motion verification

Test by enabling `prefers-reduced-motion: reduce` in DevTools:

- Scroll progress bar: should still animate (transform-only, low CPU cost — acceptable).
- Section fade-ins: become instant.
- TweaksPanel transitions: instant.
- Dark mode toggle: instant.
- Mockup `.phone-frame` hover effects: disabled.

---

## Part 7 — New stand-out moves

These are differentiators that elevate v2 above polished-but-typical first-portfolio case studies. Pick 2–3.

### 7.1 — "Made with" technology pill in the footer

```tsx
<div className="tech-stack-pill">
  <Icon n="hammer" s={14} sw={2} />
  <span>Built with</span>
  <code>Next.js</code>
  <span>·</span>
  <code>React Server Components</code>
  <span>·</span>
  <code>TypeScript</code>
  <span>·</span>
  <code>Tailwind</code>
  <span>·</span>
  <code>Vercel</code>
</div>
```

**Why it works.** Signals modern stack literacy. Subtle credibility.

### 7.2 — Time-to-read estimate per section

Add a small `~2 min read` badge next to each section heading:

```tsx
<div className="section-meta">
  <Icon n="clock" s={13} sw={2} />
  <span>{readTime} min read</span>
</div>
```

Calculate at build time: ~200 words/min average reading speed.

**Why it works.** Respects the reader's time. Lets recruiters allocate budget per section.

### 7.3 — Anchor copy buttons on section headings

Hover any H2 → a small link icon appears. Click → copies the anchor URL to clipboard with a toast.

```tsx
function SectionHeading({ id, children }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <h2 className="section-heading">
      {children}
      <button
        className="anchor-copy"
        onClick={copy}
        aria-label={`Copy link to ${children}`}
      >
        <Icon n={copied ? 'check' : 'link'} s={16} sw={2} />
      </button>
    </h2>
  );
}
```

**Why it works.** Lets a reader share a specific section ("Look at the Decisions section here →"). Demonstrates fluency with linkable content.

### 7.4 — A "case study at a glance" floating side card

On desktop, a small floating card that appears after the Hero, summarizing:

```tsx
<aside className="at-a-glance">
  <div className="ag-title">At a glance</div>
  <dl>
    <dt>Read time</dt><dd>~10 min</dd>
    <dt>Sections</dt><dd>10</dd>
    <dt>Live product</dt><dd><a href="...">View →</a></dd>
    <dt>Last updated</dt><dd>2026-XX-XX</dd>
  </dl>
</aside>
```

Positioned `sticky` to the side, fades out when scrolling past the TL;DR section.

**Why it works.** Gives recruiters the meta-context up front: "Is this worth my next 10 minutes?"

### 7.5 — Subtle scroll-locked sections

When a reader scrolls to a section like Persona or Decisions, the page briefly slows the scroll velocity (50ms) at the section start to give the eye a moment to land.

```js
// Subtle scroll-snap-like behavior
const sections = document.querySelectorAll('section[id]');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (Math.abs(top) < 5 && window.scrollY !== lastScrollY) {
      // Soft scroll pause
      document.documentElement.style.scrollBehavior = 'smooth';
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'auto';
      }, 50);
    }
  });
  lastScrollY = window.scrollY;
}, { passive: true });
```

**Why it works.** Adds a sense of intentionality to section transitions without crossing into intrusive scroll-jacking.

### 7.6 — Inline live-product preview iframe (the one stand-out 5.2 not yet done)

Embed a small live preview in the Final Solution section:

```tsx
<div className="live-preview-card">
  <div className="live-preview-header">
    <span className="live-dot" />
    Live product preview
  </div>
  <iframe
    src="https://osteoplus-v2-9.vercel.app/es"
    title="Osteóplus live product"
    loading="lazy"
    sandbox="allow-same-origin allow-scripts"
  />
  <a
    href="https://osteoplus-v2-9.vercel.app/es"
    target="_blank"
    rel="noopener"
    className="live-preview-cta"
  >
    Open in new tab <Icon n="arrow-up-right" s={14} sw={2.4} />
  </a>
</div>
```

**Why it works.** Bidirectional case study → product. Most case studies are read-only. Yours becomes interactive.

---

## Part 8 — Pre-publish QA checklist (v2 → production)

Walk every item before pushing to your domain.

### Content integrity

- [ ] All 10 sections render correctly on desktop and mobile.
- [ ] TweaksPanel decision made (Option A / B / C from Part 2).
- [ ] Default hero layout chosen and tested (Part 3).
- [ ] Live product URL replaced where placeholder remains.
- [ ] All `[your-domain]` placeholders replaced with actual domain.
- [ ] Author name correct everywhere.
- [ ] Fictional-brand ribbon visible above the Hero.
- [ ] All Carmen quotes labeled as `[Synthesized proxy verbatim]` or via the Persona section disclosure.
- [ ] No fabricated metrics, sample sizes, or post-launch claims.

### Technical / accessibility

- [ ] `<html lang="en">` set.
- [ ] Skip-to-content link visible on focus.
- [ ] All TOC links use relative anchors (`#hero`, not absolute URLs).
- [ ] All interactives meet 48px minimum / 56px primary CTAs.
- [ ] Focus rings visible on every interactive (2px teal-500).
- [ ] Tab order logical end-to-end.
- [ ] Body text 18px on desktop, not 16px.
- [ ] All SVG mockups have meaningful `alt` text or `aria-hidden="true"`.
- [ ] Reduced motion respected (test with DevTools).
- [ ] Lighthouse accessibility ≥ 95.
- [ ] axe DevTools: zero violations.
- [ ] Page renders correctly at 320px width.
- [ ] Page works on slow 3G simulation.
- [ ] Dark mode renders correctly across all sections.

### Performance

- [ ] Lighthouse Performance ≥ 85.
- [ ] LCP ≤ 2.5s on simulated 4G.
- [ ] CLS ≤ 0.1 (verify hero composite doesn't shift on font load).
- [ ] All mockups below the fold use `loading="lazy"`.
- [ ] Fonts subset to latin + latin-ext only.
- [ ] Bundle size ≤ 300 KB initial JavaScript.
- [ ] No console errors or warnings in production build.

### SEO & sharing

- [ ] `<title>` and meta description present.
- [ ] Open Graph image (1200×630) renders on https://www.opengraph.xyz/.
- [ ] Twitter card preview works.
- [ ] JSON-LD schema added (§6.2).
- [ ] Canonical URL set.
- [ ] Robots: index, follow.
- [ ] Sitemap.xml includes the case study URL.

### External validation

- [ ] One friend reads the page for 30 seconds. Asks what they remember.
- [ ] One designer gives one piece of feedback.
- [ ] Self-read out loud — catches awkward phrasing.

---

## Part 9 — Post-publish iteration plan

### Week 1 after publish

- Set up Vercel Web Analytics or Plausible.
- Track: time on page per section, scroll depth, "See it live" click-through, dark mode toggle rate.
- Send the URL to 3 design managers in your network. Ask for one piece of feedback each.

### Month 1 after publish

- Begin recruiter outreach per `08-recruiter-outreach-toolkit.md`.
- Schedule a v1.1 timeline: when will you run usability testing? Per `10-phase-5-plus-revision-protocol.md`.
- Refine any sections that don't get scrolled to (suggests they're not earning their position).

### Month 3 after publish

- Run the planned usability testing (5–8 adults 60+).
- Promote `[Expected impact]` chips to `[Documented validation finding]` where evidence supports.
- Update version stamp to v1.1.
- Send a re-share message to anyone who reviewed v1.

### Month 6 after publish

- If Osteóplus has shipped Beta, add real metrics where available.
- If not, consider whether the case study is the strongest piece in your portfolio or whether a new project should take its place.

---

## Part 10 — The single sentence to keep visible

Whatever else changes, keep this line in the Reflection section. It's the most quotable, recruiter-memorable sentence in the entire case study:

> *"In a senior healthcare product, accessibility, evidence discipline, and ethical guardrails aren't three workstreams — they're one decision, made at the token level, the IA level, and the copy level, every time."*

If a recruiter remembers nothing else, they should remember this. Don't bury it. Don't shorten it. Let it land.

---

## Part 11 — Honest final reminder

**Don't over-engineer.**

The current v2 case study is genuinely stronger than 95% of first-portfolio work. Parts 1 and 2 (Vercel port + TweaksPanel decision) are required. Everything else is improvement, not requirement.

If you spend more than **20 hours** on this entire guide, you're optimizing past the point of return. Ship something good now. Iterate after real feedback.

**Three-line prioritization rule:**

1. **Must:** Port to Vercel (Part 1).
2. **Should:** Pick default hero layout (Part 3), TweaksPanel framing (Part 2).
3. **Could:** Everything else — gradient improvement, not blocking publish.

---

## Related files in the deliverable set

| File | When to consult |
|---|---|
| `01-case-study.md` | Source of all section content |
| `04-nextjs-build-kit.md` | Next.js component map and starter code |
| `08-recruiter-outreach-toolkit.md` | After publish — outreach templates |
| `09-mock-recruiter-questions.md` | Before interviews |
| `10-phase-5-plus-revision-protocol.md` | After usability testing — v1.1 revision |
| `11-case-study-build-instructions.md` | If starting from scratch |
| `12-case-study-revision-instructions.md` | v1 → v2 history (what got us to here) |

---

*End of v2 → production publish guide.*
