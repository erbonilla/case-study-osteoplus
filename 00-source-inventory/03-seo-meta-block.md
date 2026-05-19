# Osteóplus — SEO + Meta Block

> Drop-in values for Next.js App Router `metadata.tsx` and structured data. Paste into `/app/case-studies/osteoplus/page.tsx` or your equivalent.

---

## 1. Primary metadata

```ts
export const metadata = {
  title: "Osteóplus — From medical repository to Action Dashboard | Edgar Bonilla G.",
  description:
    "UX case study: a senior-friendly PWA for a Barcelona osteopathy and physiotherapy clinic. Guest-first booking, Daily Rehab Loop, WCAG 2.2 AA, bilingual ES/EN.",
  keywords: [
    "UX case study",
    "UI/UX portfolio",
    "healthcare UX",
    "senior-friendly design",
    "WCAG 2.2 AA",
    "PWA design",
    "rehab adherence",
    "guest-first booking",
    "clinical gamification",
    "bilingual design",
    "Barcelona healthcare",
    "Edgar Bonilla",
  ],
  authors: [{ name: "Edgar Bonilla G." }],
  alternates: {
    canonical: "https://[your-domain]/case-studies/osteoplus",
    languages: {
      "es-ES": "https://[your-domain]/es/case-studies/osteoplus",
      "en-US": "https://[your-domain]/case-studies/osteoplus",
    },
  },
};
```

**Title character count.** 90 chars — within Google's ~60-character display range; the suffix may truncate but the leading product + thesis will show.

**Description character count.** 188 chars — slightly above Google's ~155 sweet spot. Optional shorter variant: *"Senior-friendly PWA for a Barcelona clinic. Guest-first booking, Daily Rehab Loop, WCAG 2.2 AA, bilingual ES/EN. UX case study by Edgar Bonilla G."* (149 chars).

---

## 2. Open Graph (social share preview)

```ts
openGraph: {
  type: "article",
  locale: "es_ES",
  alternateLocale: ["en_US"],
  url: "https://[your-domain]/case-studies/osteoplus",
  title: "Osteóplus — From medical repository to Action Dashboard",
  description:
    "A senior-friendly PWA for a Barcelona osteopathy and physiotherapy clinic. Guest-first booking + The Loop daily rehab. UX case study.",
  siteName: "Edgar Bonilla G. — Portfolio",
  images: [
    {
      url: "https://[your-domain]/og/osteoplus.png",
      width: 1200,
      height: 630,
      alt: "Osteóplus case study cover — Today view mockup on mobile with brand teal accent.",
    },
  ],
  publishedTime: "2026-06-XX",  // fill final publish date
  authors: ["Edgar Bonilla G."],
  tags: ["UX", "UI", "Healthcare", "PWA", "Accessibility", "Bilingual"],
},
```

### OG image spec

- **Filename.** `osteoplus.png`
- **Path.** `/public/og/osteoplus.png`
- **Dimensions.** 1200 × 630px (exact; required by all major social platforms).
- **Format.** PNG (acceptable: JPG ≥ 85% quality).
- **File size.** Target < 300 KB.
- **Design.** Left 60%: mobile mockup of HOME-01 (Today view) on `bg/secondary` (`#F8FAFC`). Right 40%: title in Merriweather 56px `text-slate-900`, subtitle in 24px `text-slate-600`, author byline in 18px. Brand teal `#0F766E` accent bar at left edge (8px).
- **Safe zone.** Keep critical content within the center 1080 × 540px (margin: 60px all sides) to avoid clipping on platforms that crop.

---

## 3. Twitter / X card

```ts
twitter: {
  card: "summary_large_image",
  title: "Osteóplus — From medical repository to Action Dashboard",
  description:
    "Senior-friendly PWA for a Barcelona clinic. Guest-first booking + Daily Rehab Loop. WCAG 2.2 AA, bilingual ES/EN.",
  images: ["https://[your-domain]/og/osteoplus.png"],
  creator: "@[your-twitter]",  // optional
},
```

---

## 4. Schema.org JSON-LD

Add as a `<Script type="application/ld+json">` block in the page.

```json
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Osteóplus — From medical repository to Action Dashboard",
  "description": "A senior-friendly PWA case study for a Barcelona osteopathy and physiotherapy clinic. Covers guest-first booking, the Daily Rehab Loop, WCAG 2.2 AA accessibility, and bilingual ES/EN design.",
  "url": "https://[your-domain]/case-studies/osteoplus",
  "author": {
    "@type": "Person",
    "name": "Edgar Bonilla G.",
    "jobTitle": "UI/UX Designer",
    "url": "https://[your-domain]"
  },
  "inLanguage": ["es-ES", "en-US"],
  "datePublished": "2026-06-XX",
  "dateModified": "2026-06-XX",
  "keywords": "UX case study, healthcare UX, senior-friendly design, WCAG 2.2 AA, PWA, guest-first booking, rehab adherence, bilingual design, Barcelona",
  "about": [
    { "@type": "Thing", "name": "Healthcare UX" },
    { "@type": "Thing", "name": "Accessibility design (WCAG 2.2 AA)" },
    { "@type": "Thing", "name": "Progressive Web App" },
    { "@type": "Thing", "name": "Clinical gamification" }
  ],
  "audience": {
    "@type": "Audience",
    "audienceType": "Adults 35–85, optimized for 60+"
  }
}
```

---

## 5. Robots & indexing

```ts
robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},
```

---

## 6. Performance & web vitals (target)

These don't go in metadata, but should be hit by the page to qualify for the Lighthouse target documented in the project DNA.

| Metric | Target | Notes |
|---|---|---|
| LCP | < 2.5s | Hero mockup needs `priority` flag on the `next/image` |
| INP | < 200ms | Avoid heavy client-side JS on first paint |
| CLS | < 0.1 | Reserve space for hero mockup with explicit `width`/`height` |
| Lighthouse a11y | ≥ 95 | Per project DNA definition of done |
| Lighthouse perf | ≥ 90 | Per project DNA Lighthouse vitals target |

---

## 7. Anchor IDs (for in-page navigation)

Used by section components in the build kit. Slug pattern: lowercase, hyphens, no special chars.

| Section | Anchor |
|---|---|
| Hero | `#hero` |
| TL;DR | `#tldr` |
| Project Snapshot | `#snapshot` |
| Problem & Context | `#problem` |
| User Goals & Research | `#research` |
| Constraints | `#constraints` |
| Process | `#process` |
| IA & Flow Strategy | `#ia` |
| Design Decisions | `#decisions` |
| Visual Design | `#visual` |
| Final Solution | `#solution` |
| Accessibility | `#accessibility` |
| Impact & Metrics | `#impact` |
| Reflection | `#reflection` |
| What this demonstrates | `#demonstrates` |
| Appendix | `#appendix` |

---

## 8. Author profile (for Person schema, if separate)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Edgar Bonilla G.",
  "jobTitle": "UI/UX Designer",
  "url": "https://[your-domain]",
  "sameAs": [
    "https://www.linkedin.com/in/[your-handle]",
    "https://github.com/[your-handle]",
    "https://dribbble.com/[your-handle]"
  ],
  "knowsAbout": [
    "UX Design",
    "UI Design",
    "Healthcare UX",
    "Accessibility (WCAG 2.2 AA)",
    "Design Systems",
    "Progressive Web Apps",
    "Bilingual Product Design"
  ]
}
```

---

*End of SEO + meta block.*
