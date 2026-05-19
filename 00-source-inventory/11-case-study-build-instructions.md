# Osteóplus — Case Study Build Instructions

> Practical 12-step playbook for designing and implementing the case study page on top of (or alongside) the live Osteóplus product. Use this in tandem with `04-nextjs-build-kit.md` (engineering) and `05-asset-checklist.md` (assets).

---

## The mental model first

You're not writing a blog post. You're designing a **standalone portfolio page** that recruiters scan in 60 seconds and design managers read in 5–10 minutes. Two distinct audiences, same page.

The case study is a **separate route** on your site — not on the live product. It links *to* the product, and the product links *back to* the case study. Two surfaces, one story.

---

## Step 1 — Decide the URL structure (15 min)

You have the live product at `osteoplus-v2-9.vercel.app/es`. Decide where the case study lives:

| Option | Path | Pros | Cons |
|---|---|---|---|
| **A. Same Vercel project, new route** | `/case-study` or `/about` | Single deploy, easy linking | Mixes product with portfolio |
| **B. Separate Vercel project** | `edgarbonilla.com/case-studies/osteoplus` *(recommended)* | Clean portfolio identity, scales to future projects | Two repos to maintain |
| **C. Subdomain** | `portfolio.osteoplus.app` | Keeps product clean, separates concerns | Awkward URL for recruiters |

**Recommendation: B.** Stand up a personal portfolio site (or use your existing one) with this case study as the first entry. The live Osteóplus product becomes a link *from* the case study, not the case study itself.

If you don't have a personal portfolio site yet, you can start with the path-based approach (A) — `osteoplus-v2-9.vercel.app/case-study` — and migrate to your own domain later.

---

## Step 2 — Build the route (1–2 hours scaffolding)

Open `04-nextjs-build-kit.md`. Follow §2–§7 exactly. The summary:

```
app/
├── case-study/             ← or /case-studies/osteoplus
│   ├── page.tsx            ← main page
│   ├── _components/        ← section components
│   │   ├── case-study-hero.tsx
│   │   ├── tldr-card.tsx
│   │   ├── project-snapshot.tsx
│   │   ├── ... (16 total)
│   │   └── impact-chip.tsx
│   └── _data/
│       ├── types.ts        ← typed prop shapes
│       └── index.ts        ← all 16 sections as typed arrays
```

**Critical move.** Put the case study *content* in `_data/index.ts` as typed TypeScript objects — not as MDX or inline JSX. This separates content from layout, makes future edits trivial, and lets you internationalize later if you want a Spanish version of the case study.

### Example content shape

```ts
// _data/index.ts
import type { HeroProps, DecisionRow, ImpactLabel } from "./types";

export const hero: HeroProps = {
  title: "From medical repository to Action Dashboard: a senior-friendly rehab PWA",
  thesis: "A bilingual clinic product for osteopathy, physiotherapy, and rehabilitation in Barcelona — built around guest-first booking and a daily rehab loop for adults 35–85, optimized for users 60+.",
  role: {
    owned: "Strategy, IA, design system, accessibility, visual, flows — every final decision and synthesis.",
    aiAssisted: "Initial research collection and first-draft documentation. Judgment was mine.",
  },
  tools: {
    design: ["Figma", "Adobe CC (Photoshop, Illustrator, Acrobat, Firefly)"],
    ai: ["Claude", "Claude Code", "ChatGPT (Codex)", "Gemini (Antigravity)", "Cursor"],
  },
  timeline: "July 2025 → ongoing",
  status: {
    design: "Concept · ongoing (Edgar's deliverable)",
    product: "Roadmap target: Beta Q2 2026 (documented, not shipped)",
  },
  northStar: "Weekly Adherence Rate",
  primaryCta: { label: "View live product", href: "https://osteoplus-v2-9.vercel.app/es" },
  secondaryCta: { label: "Skim the case in 15 seconds", href: "#tldr" },
  heroImage: { src: "/mockups/osteoplus/hero-01.png", alt: "...", width: 1200, height: 1500 },
};

export const decisions: DecisionRow[] = [
  {
    decision: "Today view as default landing surface",
    why: "The Repository pattern forced too many decisions. The Today view surfaces the next action directly.",
    rejectedAlternatives: ["Plan archive as landing (too cognitive)", "Appointment list as landing (passive)"],
    tradeOff: "Deep medical info is one tap further away.",
    result: { label: "documented" as ImpactLabel, text: "Action Dashboard pattern documented in IA v2.2." },
  },
  // ... 5 more rows from §9 of the case study
];

// ... all 16 sections
```

This pattern is what makes the case study maintainable. When you run usability testing later and need to promote labels per `10-phase-5-plus-revision-protocol.md`, you edit a single `_data/index.ts` file — not the markup of 16 components.

---

## Step 3 — Section design priorities (the visual work)

Not all sections deserve the same design effort. Here's the priority budget:

### High design effort (these sections drive recruiter conversion)

| § | Section | Why it gets the most design care |
|---|---|---|
| 1 | **Hero** | The 5-second decision. Get this wrong and nothing else gets read. |
| 7 | **Process & Ideation** *(IA pivot)* | The strategic centerpiece. The before/after IA visual is the single most important diagram in the case study. |
| 11 | **Final Solution** | The proof of the work. 7 solution modules with screenshots = the visual climax. |
| 12 | **Accessibility** | The annotated HOME-01 (A11Y-02) with tap-target overlays and contrast ratios is where senior reviewers stop and notice. |

### Medium design effort

| § | Section | Notes |
|---|---|---|
| 5 | Persona | Carmen card needs to feel grounded but not faked — no stock photo, Lucide user icon |
| 8 | IA & Flow Strategy | Sitemap diagram + Smart Arrival before/after |
| 9 | Decisions table | Result label chips need consistent treatment |
| 10 | Visual Design | Token-shift swatches + 3 component deep-dives |

### Low design effort (text-heavy, can be mostly prose layout)

| § | Section | Notes |
|---|---|---|
| 2, 3 | TL;DR + Project Snapshot | Card layouts, no custom illustrations |
| 4 | Problem & Context | Prose + the friction map (PROB-01) |
| 6 | Constraints | Table |
| 13 | Impact & Metrics | Tables + cards, evidence-hierarchy color coding |
| 14, 15, 16 | Reflection + What this demonstrates + Appendix | Mostly prose |

**Apply the 80/20 rule:** spend 80% of your design time on the High sections (Hero, Process, Final Solution, Accessibility). The rest can be solid-but-restrained.

---

## Step 4 — Page layout & rhythm

A long case study fails when it reads as one continuous wall. Build **visual rhythm** by alternating section densities:

```
Hero                            ← image-heavy, hero photo
TL;DR card                      ← compact, scannable
Project Snapshot table          ← dense info, tabular
Problem & Context               ← prose + journey map (visual relief)
Persona card                    ← image-like, anchored visual
Constraints table               ← dense
Process timeline + pivot        ← strategic centerpiece, visual relief
IA sitemap + flow before/after  ← visual diagrams
Decisions table                 ← dense
Visual design                   ← visual relief (swatches, components)
Final Solution × 7 modules      ← image-heavy
Accessibility                   ← annotated screen, dense data
Impact & Metrics                ← tables, evidence-hierarchy chips
Reflection                      ← prose, pull quote
What this demonstrates          ← compact card
Appendix                        ← dense, optional reading
```

**Rule of thumb:** every 2–3 dense sections, give the eye a visual break (an image, a diagram, a pull quote).

---

## Step 5 — Container & typography

Inherit the design tokens from your existing product, but make case study reading **wider and more generous**:

```css
/* Case study page */
max-width: 1200px       /* wider than product (800px) for visual layouts */
prose-max-width: 720px  /* but constrain body text to this */
section-padding-y: 96px /* desktop */, 48px /* mobile */

/* Type rhythm */
h1: Merriweather 56px / 1.1   /* hero only */
h2: Merriweather 32px / 1.25  /* section headings */
h3: Sans 20px / 1.4           /* subsection */
body-lg: Sans 18px / 1.6      /* default reading body — yes, 18px even on desktop */
caption: Sans 14px / 1.4

/* Section heading pattern */
- Eyebrow label (slate-500, 14px sans, uppercase, 0.05em tracking)
- H2 (Merriweather 32px, slate-900)
- 1-line subtitle (slate-600, 18px, italic optional)
```

**Why 18px body on desktop.** The case study itself is *about* designing for users 60+. Walking the talk — using a senior-friendly type scale on the case study page — is a subtle but powerful credibility signal.

---

## Step 6 — Color & evidence hierarchy

Your case study has the most important typographic move in the deliverable set: the **evidence labels**. Make them visually unmistakable.

Define a chip component with 4 variants — `[Documented]`, `[Expected impact]`, `[Recommended KPI]`, `[Placeholder]`. Color-code consistently:

| Label | Background | Border | Text |
|---|---|---|---|
| Documented | `teal-50` `#F0FDFA` | `teal-200` | `teal-700` `#0F766E` |
| Expected impact | `amber-50` `#FFFBEB` | `amber-200` | `amber-700` |
| Recommended KPI | `slate-50` `#F8FAFC` | `slate-200` | `slate-700` |
| Placeholder | `red-50` `#FEF2F2` | `red-200` | `red-700` |

A reviewer scanning the case study sees a teal chip and reads it as *"validated"*; sees red and reads it as *"author is honest about gap."* That visual hierarchy is the case study's defining intellectual move — make it visible.

The starter code is in `04-nextjs-build-kit.md` §5 (`<ImpactChip />`).

---

## Step 7 — Critical UX moves for the case study page itself

These earn the case study credibility independent of its content:

| Move | Why |
|---|---|
| **Skip-to-content link** (visible on focus) | Keyboard nav fundamental |
| **Sticky table of contents** on desktop (16 anchors) | Recruiters jump to "Decisions" or "Impact" — make it instant |
| **Section progress bar** at top (1px teal, fills on scroll) | Subtle "you're 40% through" signal |
| **All targets 48px minimum, 56px on primary CTAs** | Walks the talk |
| **Focus rings 2px teal-500** on every interactive | Walks the talk |
| **Body text 18px** | Walks the talk |
| **Images with explicit width/height** | Prevents CLS (matters for Lighthouse) |
| **`next/image` with `priority` on hero only** | Performance |
| **Open Graph + Twitter card metadata** | Per `03-seo-meta-block.md` |
| **No motion that violates `prefers-reduced-motion`** | Walks the talk |
| **Lighthouse a11y ≥ 95** | Self-audit before publish |

**The credibility test.** A senior designer reviewing the case study should be able to keyboard-navigate the entire thing, hit "skip to content," tab through every interactive element, see clear focus rings, read at 18px without zooming, and notice nothing accessibility-wise that contradicts the case study's claims. If they notice anything off, the case study's accessibility section becomes a lie.

---

## Step 8 — The Hero section — design it first, ship it last

Spend disproportionate time here. The Hero is what gets a recruiter to scroll or close the tab.

### Layout (desktop)

```
┌────────────────────────────────────────────────────────────────┐
│  EYEBROW: UX Case Study · 2026                                 │
│                                                                │
│  H1: From medical repository to Action                         │
│      Dashboard: a senior-friendly rehab                        │
│      PWA                                                       │
│                                                                │
│  Thesis paragraph (max 2 lines, 18px slate-700)                │
│                                                                │
│  ┌──────────────┬──────────────┐                              │
│  │ Role         │ Tools        │                              │
│  │ Owned: …     │ Design: …    │                              │
│  │ AI: …        │ AI: …        │                              │
│  └──────────────┴──────────────┘    [HERO MOCKUP COMPOSITION] │
│                                                                │
│  ┌──────────────┬──────────────┐                              │
│  │ Timeline     │ North Star   │                              │
│  │ Jul 2025 → … │ Weekly … …   │                              │
│  └──────────────┴──────────────┘                              │
│                                                                │
│  Status: Concept · roadmap Beta Q2 2026                        │
│                                                                │
│  [View live product →]  [Skim in 15s ↓]                       │
└────────────────────────────────────────────────────────────────┘
```

**Mobile:** stack everything, mockup goes between thesis and dl-block.

**Hero mockup (HERO-01).** This is the single highest-impact visual asset. Three mockups composed: HOME-01 in foreground (mobile frame, ~70% scale), BOOK-02 + EXER-03 in background (~40% scale, rotated ±8°). Use a soft slate-50 background. **Do not** use the product photography from your live site — that's the clinic site's job. Your case study hero should show *your product UI*.

---

## Step 9 — Connect the two URLs

Bidirectional linking between case study and live product is required.

### On the case study page

- Hero primary CTA → live product URL (so recruiters can poke at the real thing)
- Final Solution section → screenshot + caption: *"See it live →"* with link to product
- Footer → "View live product" link

### On the live product

Add a small ribbon or footer line:

> *"Osteóplus is a UI/UX concept project by Edgar Bonilla G. → Read the case study"*

The ribbon serves two functions: it disclaims the fictional-brand status (protecting you from "wait, is this a real clinic?" confusion), and it captures inbound traffic from anyone who landed on the product first.

---

## Step 10 — The pre-publish QA loop

Before you make the case study URL public, walk this checklist.

### Self-audit (you do this)

- [ ] Open every section. Read it. Out loud is best — catches awkward phrasing.
- [ ] Click every link. Every one. Including footer.
- [ ] Tab through the page with keyboard only. Can you reach every interactive? Are focus rings visible everywhere?
- [ ] Open on your phone. Read for 60 seconds. Is the Hero readable without zoom?
- [ ] Run Lighthouse: target ≥ 95 accessibility, ≥ 90 performance.
- [ ] Run axe DevTools or WAVE: zero violations.
- [ ] Test in dark mode if you support it.
- [ ] Test ES locale rendering if you build a bilingual case study.
- [ ] Toggle `prefers-reduced-motion: reduce` in DevTools — does the page still work?
- [ ] Verify OG image renders on https://www.opengraph.xyz/

### External audit (friend / mentor)

- [ ] Give the URL to one friend (any friend). Ask: *"Skim for 30 seconds. What do you remember?"* They should remember: senior-friendly, PWA, Barcelona, accessibility, the IA shift. If they remember none of those, the Hero is broken.
- [ ] Give the URL to one designer (if you have one in your network). Ask for one specific piece of feedback.

Don't publish until both audits clear.

---

## Step 11 — A reasonable timeline

A first case study page, built from scratch, with assets, on Vercel:

| Stage | Time | Notes |
|---|---|---|
| Scaffolding (Step 2) | 2–4 hours | Component shells, routing, data file |
| Hero design + mockup (Step 8) | 4–6 hours | Highest-leverage asset, do it well |
| Phase A assets — PROB-01, PERS-01, PROC-02, VIS-06, SOL-01–07 | 8–12 hours | Per `05-asset-checklist.md` |
| Section components (16 sections) | 10–14 hours | Some sections (TL;DR, Snapshot, Constraints) take 20 min; others (Final Solution × 7 modules, A11Y annotated) take longer |
| Annotation pass on annotated screens | 2–4 hours | Per `07-figma-annotation-conventions.md` |
| Polish, dark mode, responsive | 4–6 hours | The last mile |
| QA + pre-publish review | 2–3 hours | Don't skip |
| **Total** | **32–50 hours** | Realistically 2–3 weeks part-time |

If you're sprinting, you can compress this to a long weekend (HERO + 3 high-priority sections only, ship a "minimum viable case study," iterate). But the QA can't be compressed.

---

## Step 12 — What can come next

If any of these would help, ask:

- **Wireframe each section in ASCII** — a layout sketch for every one of the 16 sections so you don't have to invent layouts from scratch.
- **Hero copy variations** — alternate Hero titles, theses, and CTA phrasings if you want to A/B feel.
- **Component-by-component React starter code** — go beyond the `<CaseStudyHero />` starter in `04-nextjs-build-kit.md` and provide working code for all 16 components.
- **Tailwind class recipes** — specific class combinations for the evidence chips, section headings, callouts, etc.
- **Dark-mode token mapping** — extend the existing token system to a dark theme for the case study.
- **A bilingual case study version** — Spanish + English routing, content arrays for both locales.

---

## Immediate next move

1. Pick where the case study lives (Step 1).
2. Scaffold the route (Step 2).
3. Design and ship the Hero first (Step 8) — share it for feedback before committing to the rest.

---

## Related files in the deliverable set

| File | When to consult |
|---|---|
| `01-case-study.md` | Source of all content — paste into `_data/index.ts` |
| `02-visual-design-specs.md` | Token reference for typography, color, spacing |
| `03-seo-meta-block.md` | Metadata for `page.tsx` |
| `04-nextjs-build-kit.md` | Component map, prop types, starter code |
| `05-asset-checklist.md` | Asset production sequencing |
| `07-figma-annotation-conventions.md` | When annotating mockups |

---

*End of case study build instructions.*
