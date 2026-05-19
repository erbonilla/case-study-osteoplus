# Osteóplus — Next.js Build Kit

> For Vercel deployment with Next.js App Router. This is the integration layer between the case study Markdown and a portfolio site that renders as a polished page (not raw Markdown).

---

## 1. Recommended stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 15** App Router (per project DNA baseline) |
| Hosting | Vercel |
| Styling | Tailwind CSS (token sync from Figma → `tailwind.config.ts`) |
| Content | MDX or TypeScript-defined content arrays |
| Components | React Server Components + Client islands for interactives |
| Images | `next/image` with `priority` on hero |
| Icons | `lucide-react` |
| i18n (optional) | `next-intl` if you mirror the product's bilingual approach |
| Analytics | Vercel Web Analytics or Plausible |

---

## 2. Route

```
/app/case-studies/osteoplus/page.tsx
/app/case-studies/osteoplus/metadata.ts   ← optional, can inline
/app/case-studies/osteoplus/_data/        ← typed content arrays
/app/case-studies/osteoplus/_components/  ← page-scoped components
/public/og/osteoplus.png
/public/mockups/osteoplus/                ← screen exports
```

Use ISR (revalidate weekly) or full static (case studies don't need fresh data).

---

## 3. Component map

Each section is a discrete component. Import data from typed arrays in `_data/`.

```tsx
// app/case-studies/osteoplus/page.tsx
import { CaseStudyHero } from "./_components/case-study-hero";
import { TLDRCard } from "./_components/tldr-card";
import { ProjectSnapshot } from "./_components/project-snapshot";
import { ProblemContext } from "./_components/problem-context";
import { PersonaCard } from "./_components/persona-card";
import { ConstraintTable } from "./_components/constraint-table";
import { ProcessTimeline } from "./_components/process-timeline";
import { IABeforeAfter } from "./_components/ia-before-after";
import { DecisionTable } from "./_components/decision-table";
import { VisualSystem } from "./_components/visual-system";
import { SolutionModule } from "./_components/solution-module";
import { AccessibilityCallout } from "./_components/accessibility-callout";
import { MetricCardGrid } from "./_components/metric-card-grid";
import { ReflectionCard } from "./_components/reflection-card";
import { RecruiterSkim } from "./_components/recruiter-skim";
import { Appendix } from "./_components/appendix";

import {
  hero,
  tldr,
  snapshot,
  problem,
  persona,
  constraints,
  process,
  ia,
  decisions,
  visual,
  solutions,
  accessibility,
  impact,
  reflection,
  demonstrates,
  appendix,
} from "./_data";

export default function OsteoplusCaseStudy() {
  return (
    <main className="mx-auto max-w-[1200px] px-6 py-12 lg:px-12 lg:py-24">
      <CaseStudyHero {...hero} />
      <TLDRCard bullets={tldr} />
      <ProjectSnapshot fields={snapshot} />
      <ProblemContext copy={problem.copy} journey={problem.journey} />
      <PersonaCard {...persona} />
      <ConstraintTable rows={constraints} />
      <ProcessTimeline steps={process.steps} pivot={process.pivot} />
      <IABeforeAfter before={ia.before} after={ia.after} />
      <DecisionTable rows={decisions} />
      <VisualSystem {...visual} />
      {solutions.map((s) => (
        <SolutionModule key={s.id} {...s} />
      ))}
      <AccessibilityCallout {...accessibility} />
      <MetricCardGrid
        documented={impact.documented}
        expected={impact.expected}
        recommended={impact.recommended}
        placeholder={impact.placeholder}
      />
      <ReflectionCard items={reflection} />
      <RecruiterSkim bullets={demonstrates} />
      <Appendix sources={appendix.sources} openQuestions={appendix.openQuestions} />
    </main>
  );
}
```

---

## 4. Component prop shapes

Define in `_data/types.ts`:

```ts
export type RoleSplit = {
  owned: string;
  aiAssisted: string;
};

export type HeroProps = {
  title: string;
  thesis: string;
  role: RoleSplit;
  tools: { design: string[]; ai: string[] };
  timeline: string;
  status: { design: string; product: string };
  northStar: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImage: { src: string; alt: string; width: number; height: number };
};

export type ImpactLabel = "documented" | "expected" | "recommended" | "placeholder";

export type DecisionRow = {
  decision: string;
  why: string;
  rejectedAlternatives: string[];
  tradeOff: string;
  result: { label: ImpactLabel; text: string };
};

export type SolutionModuleData = {
  id: string;
  userProblem: string;
  module: string;
  uxDecision: string;
  impact: { label: ImpactLabel; text: string };
  visual: { src: string; alt: string; screenIds: string[] };
};

export type MetricRow = {
  kpi: string;
  definition?: string;
  target?: string;
  source?: string;
};

export type JourneyStage = {
  name: string;
  goal: string;
  friction: "Low" | "Medium" | "High" | "[Placeholder]";
};
```

---

## 5. Impact label chip (reusable)

```tsx
// _components/impact-chip.tsx
import type { ImpactLabel } from "../_data/types";

const styles: Record<ImpactLabel, string> = {
  documented: "bg-teal-50 text-teal-700 border-teal-200",
  expected: "bg-amber-50 text-amber-700 border-amber-200",
  recommended: "bg-slate-50 text-slate-700 border-slate-200",
  placeholder: "bg-red-50 text-red-700 border-red-200",
};

const text: Record<ImpactLabel, string> = {
  documented: "Documented",
  expected: "Expected impact",
  recommended: "Recommended KPI",
  placeholder: "Placeholder",
};

export function ImpactChip({ label }: { label: ImpactLabel }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles[label]}`}
    >
      {text[label]}
    </span>
  );
}
```

---

## 6. Hero component (starter)

```tsx
// _components/case-study-hero.tsx
import Image from "next/image";
import Link from "next/link";
import type { HeroProps } from "../_data/types";

export function CaseStudyHero({
  title,
  thesis,
  role,
  tools,
  timeline,
  status,
  northStar,
  primaryCta,
  secondaryCta,
  heroImage,
}: HeroProps) {
  return (
    <section id="hero" className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:py-12">
      <div className="flex flex-col gap-6">
        <h1 className="font-serif text-[40px] font-bold leading-[1.2] text-slate-900 lg:text-[56px]">
          {title}
        </h1>
        <p className="text-[18px] leading-[1.6] text-slate-700">{thesis}</p>

        <dl className="grid gap-4 text-[16px] text-slate-700">
          <div>
            <dt className="font-semibold text-slate-900">Role</dt>
            <dd className="mt-1">
              <strong>Owned end-to-end (final decisions + human judgment):</strong> {role.owned}
            </dd>
            <dd className="mt-1">
              <strong>AI-assisted execution:</strong> {role.aiAssisted}
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">Tools</dt>
            <dd className="mt-1">
              <strong>Design.</strong> {tools.design.join(" · ")}
            </dd>
            <dd className="mt-1">
              <strong>AI.</strong> {tools.ai.join(" · ")}
            </dd>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <dt className="font-semibold text-slate-900">Timeline</dt>
              <dd className="mt-1">{timeline}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">North Star</dt>
              <dd className="mt-1">{northStar}</dd>
            </div>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">Status</dt>
            <dd className="mt-1">Design: {status.design}</dd>
            <dd className="mt-1">Product: {status.product}</dd>
          </div>
        </dl>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href={primaryCta.href}
            className="inline-flex h-14 items-center rounded-md bg-teal-700 px-6 text-[16px] font-semibold text-white hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="inline-flex h-14 items-center rounded-md border border-slate-300 bg-white px-6 text-[16px] font-semibold text-slate-900 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>

      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-50">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          width={heroImage.width}
          height={heroImage.height}
          priority
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
```

---

## 7. Tailwind config (token mapping)

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0F766E",
          hover: "#115E59",
          active: "#134E4A",
          border: "#0D9488",
        },
        accent: {
          DEFAULT: "#C2410C",
          hover: "#9A3412",
        },
        focus: "#14B8A6",
      },
      fontFamily: {
        serif: ["Merriweather", "Georgia", "serif"],
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      fontSize: {
        display: ["40px", { lineHeight: "1.2", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
      },
      borderRadius: {
        chip: "16px",
      },
      ringWidth: {
        DEFAULT: "2px",
      },
    },
  },
  plugins: [],
} satisfies Config;
```

---

## 8. Accessibility checklist (apply to the case study page itself)

The case study page should meet the same standard it documents.

- [ ] All tap targets meet 48px minimum (CTAs at 56px).
- [ ] Headings in logical order (single `<h1>`, then `<h2>` per section).
- [ ] Each section has a unique anchor ID.
- [ ] All images have meaningful `alt` text.
- [ ] Focus rings visible on all interactive elements (`focus-visible:ring-2 focus-visible:ring-teal-500`).
- [ ] Body text 18px on primary reading surfaces.
- [ ] Color contrast ≥ 4.5 : 1 on body text.
- [ ] Status communicated by icon + label, not color alone.
- [ ] Tables responsive (collapse to cards under `md` breakpoint).
- [ ] Hero `next/image` has `priority` and explicit `width`/`height` (prevents CLS).
- [ ] No motion that violates `prefers-reduced-motion`.
- [ ] Skip-to-content link in the page shell.

---

## 9. Asset path conventions

```
/public/
├── og/
│   └── osteoplus.png                    1200×630
└── mockups/osteoplus/
    ├── hero-01.png                      composite mockup
    ├── prob-01-journey-map.svg          friction map
    ├── pers-01-carmen-card.svg          persona card
    ├── proc-01-timeline.svg             6-phase timeline
    ├── proc-02-ia-pivot.svg             before/after IA
    ├── ia-01-sitemap.svg                4-tab sitemap
    ├── dec-01-decision-table.png        decision table (or use HTML)
    ├── vis-01-color-tokens.png
    ├── vis-02-type-scale.png
    ├── vis-03-component-grid.png
    ├── vis-04-light-dark.png
    ├── sol-01-booking.png               BOOK-01 + BOOK-04
    ├── sol-02-today.png                 HOME-01 + EXER-03
    ├── sol-03-pain-interrupt.png        EXER-C05
    ├── sol-04-streak.png                GAME-14.2
    ├── sol-05-targets.png               HOME-01 annotated
    ├── sol-06-privacy.png               ES home + consent
    ├── sol-07-smart-arrival.png         HOME-01 card + maps
    ├── a11y-01-audit-summary.svg
    ├── a11y-02-annotated-home.png       HOME-01 annotated
    └── a11y-03-callouts.svg
```

Use SVG for diagrams (sitemap, journey map, callouts) and PNG/WebP for screen mockups.

---

## 10. Deployment notes

- **Build target.** Static export OK if no dynamic data; otherwise ISR with weekly `revalidate`.
- **Image optimization.** Vercel handles automatically; use `next/image` for all mockups.
- **Fonts.** Merriweather via `next/font/google` to avoid layout shift.
- **Vercel Web Analytics.** Add `@vercel/analytics` for traffic insight without tracking.
- **Preview deployments.** Use preview branches to share drafts with recruiters before publish.

---

## 11. Bilingual page (optional, future)

If you mirror the product's bilingual approach for the portfolio:

```
/app/[locale]/case-studies/osteoplus/page.tsx
/messages/es.json
/messages/en.json
```

Use `next-intl` for locale-aware routing. Spanish as default (`es-ES`), English secondary. Same as the product itself — it would let the case study reinforce its own thesis.

---

*End of Next.js build kit.*
