# Osteóplus — Visual Design Specs

> Companion to the case study. Pull values directly from `DESIGN_SYSTEM.md` v4.2.0 (canonical SSOT). This file is a portfolio-facing summary, not the implementation source.

---

## 1. Token architecture

Two-collection: **primitives + semantic**.

- **Primitives** — raw values (`color/teal/700`, `space/16`, `radius/md`).
- **Semantic** — usage-mapped tokens (`color/brand/primary`, `color/bg/secondary`, `color/border/focus`).
- **Rule.** Designs reference semantic only. Never apply a primitive directly to a fill or stroke.

### v4.2.0 audit migration (breaking but aliased)

| Token | Before | After | Reason |
|---|---|---|---|
| `color/brand/primary` (filled CTA) | `#0D9488` (teal-600) | **`#0F766E` (teal-700)** | Contrast tightening |
| `color/border/brand` | (didn't exist as canonical) | `#0D9488` (teal-600) | Former primary repositioned for borders + icon emphasis |
| `color/accent/default` | `#FF6B00` (orange-500) | **`#C2410C` (orange-700)** | Tightens accent text legibility |
| `color/border/focus` | (varied) | **`#14B8A6` (teal-500)** | Tightens focus-ring contrast against teal-700 fills |

Legacy aliases in `colors_and_type.css` (`--brand`, `--accent`) point to new canonical values; existing UI kit picks up the migration.

---

## 2. Color tokens (light theme, selected)

| Token | Hex | Tailwind | Usage |
|---|---|---|---|
| `color/brand/primary` | `#0F766E` | `bg-teal-700` | Primary CTA fill |
| `color/brand/primary-hover` | `#115E59` | `bg-teal-800` | CTA hover |
| `color/brand/primary-active` | `#134E4A` | `bg-teal-900` | CTA pressed |
| `color/border/brand` | `#0D9488` | `border-teal-600` | Borders, icon emphasis |
| `color/border/focus` | `#14B8A6` | `ring-teal-500` | Focus rings (2px) |
| `color/accent/default` | `#C2410C` | `bg-orange-700` | Accent highlights, gamification |
| `color/accent/hover` | `#9A3412` | `bg-orange-800` | Accent hover |
| `color/bg/primary` | `#FFFFFF` | `bg-white` | Main bg |
| `color/bg/secondary` | `#F8FAFC` | `bg-slate-50` | Secondary bg |
| `color/bg/tertiary` | `#F1F5F9` | `bg-slate-100` | Inset bg |
| `color/surface/card` | `#FFFFFF` | `bg-white` | Cards |
| `color/text/primary` | `#0F172A` | `text-slate-900` | Headings, primary text |
| `color/text/secondary` | `#475569` | `text-slate-600` | Body text |
| `color/text/tertiary` | `#64748B` | `text-slate-500` | Captions (min body on white) |
| `color/border/default` | `#E2E8F0` | `border-slate-200` | Borders, separators |
| `color/feedback/success` | `#16A34A` | `text-green-600` | Success states |
| `color/feedback/warning` | `#EAB308` | `text-yellow-500` | Warning states |
| `color/feedback/error` | `#DC2626` | `text-red-600` | Error states |
| `color/feedback/info` | `#0D9488` | `text-teal-600` | Info states (uses brand teal) |

### Dark theme (selected)

| Token | Hex | Usage |
|---|---|---|
| `color/bg/primary` (dark) | `#0F172A` | Dark mode bg |
| `color/bg/secondary` (dark) | `#1E293B` | Dark surfaces / cards |
| `color/brand/primary` (dark) | `#2DD4BF` | CTA in dark mode |
| `color/text/primary` (dark) | `#F8FAFC` | Primary text in dark |

---

## 3. Type scale

**Families.** Merriweather (serif) for headings · Sans-serif system stack for body.

| Token | Family | Size | Weight | Line-height | Use |
|---|---|---|---|---|---|
| `type/display` | Merriweather | 40px | 700 | 1.2 | Hero title |
| `type/h1` | Merriweather | 32px | 700 | 1.25 | Page heading |
| `type/h2` | Merriweather | 24px | 700 | 1.3 | Section heading |
| `type/h3` | Sans-serif | 20px | 600 | 1.4 | Card heading |
| `type/body-lg` | Sans-serif | **18px** | 400 | 1.6 | **Senior-facing body — default on patient surfaces** |
| `type/body` | Sans-serif | 16px | 400 | 1.6 | Body |
| `type/caption` | Sans-serif | 14px | 500 | 1.4 | Captions, metadata |
| `type/micro` | Sans-serif | 12px | 500 | 1.4 | Legal, footnotes (avoid on patient surfaces) |

**Senior surface rule.** `type/body-lg` (18px) is the default body size on any patient-facing surface. `type/body` (16px) is for practitioner dashboard and operational UI.

---

## 4. Spacing scale

4px base unit. Use named tokens, not raw values.

| Token | Value | Common use |
|---|---|---|
| `space/4` | 4px | Icon-to-text |
| `space/8` | 8px | Tight padding |
| `space/12` | 12px | Form field padding |
| `space/16` | 16px | Card padding (compact) |
| `space/24` | 24px | Card padding (default) |
| `space/32` | 32px | Section spacing |
| `space/48` | 48px | Major section spacing |
| `space/64` | 64px | Page padding (desktop) |
| `space/96` | 96px | Hero padding (desktop) |

---

## 5. Radius scale

| Token | Value | Use |
|---|---|---|
| `radius/none` | 0 | Hard edges |
| `radius/sm` | 4px | Small chips, inputs |
| `radius/md` | 8px | Cards, buttons |
| `radius/lg` | 12px | Modals, large cards |
| `radius/chip` | 16px | Pills, chips |
| `radius/pill` | 999px | Fully rounded (CTAs in some patterns) |

---

## 6. Elevation

| Token | Use |
|---|---|
| `elevation/sm` | Subtle card lift |
| `elevation/md` | Default card |
| `elevation/lg` | Modals, sheets |
| `elevation/xl` | Floating action, top-layer toasts |

---

## 7. Sizing & touch targets

- **Minimum interactive size.** 48 × 48px.
- **Primary patient action.** 56 × 56px (or 56px height for button rows).
- **Icon-sm.** 20px (note: increased from 16px in v4.2.0).
- **Icon-md.** 24px.
- **Icon-lg.** 32px.
- **Tap target padding.** Always confirm computed hit area, not just visual size (e.g., pagination dots need a 48×48 invisible touch wrapper).

---

## 8. Motion

- Respect `prefers-reduced-motion: reduce` everywhere.
- **Default durations.** 150ms (micro-interactions) · 250ms (transitions) · 400ms (modal open).
- **Easing.** `ease-out` for entrances, `ease-in` for exits, `ease-in-out` for state changes.
- **Reduced-motion fallbacks.**
  - XP bar fill → instant.
  - Streak flame → static.
  - Level-up confetti → suppressed (modal fades only).
  - Slide transitions → instant cuts.
  - No auto-play on video.

---

## 9. Breakpoints

Mobile-first PWA.

| Token | Value | Use |
|---|---|---|
| `bp/sm` | 640px | Small phones → large phones |
| `bp/md` | 768px | Phones → tablets |
| `bp/lg` | 1024px | Tablets → desktop |
| `bp/xl` | 1280px | Desktop |

Most patient surfaces optimized for `sm` and `md`. Practitioner dashboard optimized for `lg` and `xl`.

---

## 10. Component highlights (selected from 39)

| Component | Screen ID | Notes |
|---|---|---|
| `VideoPlayer` | EXER-C03 | 16:9, captions on by default, speed 0.75/1/1.25, no auto-play, respects reduced motion |
| `SessionProgressHeader` | EXER-C01 | Title + "3 of 6 exercises" + linear progress bar |
| `RepCounterCard` | EXER-C02 | Large numeric counter, +/– at 56×56, pain slider |
| `PainInterruptModal` | EXER-C05 | Triggers at pain ≥ 7; primary CTA "Call clinic", secondary "Pause session" |
| `ControlDock` | EXER-C04 | Play/pause · rewind 10s · forward 10s · captions · speed. 56×56 controls, 16px gaps |
| `XPRing` | GAME-14.1 | 80×80 SVG ring, animated fill on XP gain |
| `StreakCounter` | GAME-14.2 | Lucide `flame` + day count. Orange-500 live, slate-400 broken |
| `BadgeCard` | GAME-14.3 | 120×120 tile, Lucide `trophy` / `medal` / `award`. Locked = grayscale |
| `LevelUpModal` | GAME-14.4 | Full-screen, single icon, no animation beyond fade |
| `LanguageTogglePill` | — | ES/EN segmented, persists to `next-intl` cookie |
| `PillSegmentedToggle` | — | 2–4 segments, `radius/chip`, active = teal-600 fill + white text |
| `DateStrip` | — | Horizontal 7-day strip, today highlighted, swipe weeks |
| `MoodPicker` | EXER-C09 | 5-face Lucide picker (not emoji). `mood` column. Never transmitted to analytics |
| `SafetyCalloutCard` | EXER-C07 | Left-aligned Lucide `shield-alert` in orange-500. Pain warnings + clinic escape hatches |

---

## 11. Accessibility annotations (apply on every patient surface)

- Tap targets meet 48px minimum (56px for primary patient actions).
- Body text 18px on patient surfaces.
- Color contrast ≥ 4.5 : 1 on text below 18.66px regular / 24px bold.
- Focus rings: 2px `color/border/focus` (`#14B8A6`) with sufficient offset.
- Status never communicated by color alone — always icon + label.
- All animations have reduced-motion fallbacks.
- Form labels always visible (no placeholder-only labels).
- Error states use icon + color + text.
- Keyboard navigation: logical tab order, escape closes modals/sheets.

---

## 12. Tooling

- **Source.** Figma library `DesignSystemOsteoplus` v2.1, snapshot 2026-05-07.
- **Token sync.** Figma → JSON → Tailwind config.
- **Audit cadence.** Quarterly + on major release.
- **CI gates.** axe-core green · Lighthouse ≥ 95 on vitals.

---

*End of visual design specs.*
