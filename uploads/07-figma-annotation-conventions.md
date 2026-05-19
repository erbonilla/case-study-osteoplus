# Osteóplus — Figma Annotation Conventions

> Apply these to every annotated mockup in the case study (VIS-01 through VIS-06, SOL-05, SOL-07, A11Y-02, IA-01, PROC-02, PROB-01). Goal: a single coherent annotation language so the case study reads as one piece, not a Frankenstein of styles.

---

## 1. Philosophy (read once, internalize)

- Annotations live on a **different visual layer** from the UI being annotated. They must never compete.
- Use a **restricted palette** — slate only — except for two intentional exceptions: focus-ring references (real teal-500) and hot spots (brand teal). Both reference UI semantics, not decoration.
- Use a **different type family** — sans for prose, mono for token refs. Never Merriweather. The serif belongs to the product, not to its critique.
- Be **precise**: every measurement, ratio, and label is real. Verify at 2× zoom with rulers.
- Be **minimal**: if a viewer can decode the screen without the annotation, remove it. Density kills.

---

## 2. Type system (annotations only)

| Style name | Spec | Use |
|---|---|---|
| `Annotation/Label-14` | 14px · sans · 500 · `#334155` (slate-700) · 1.4 lh | Primary annotation labels |
| `Annotation/Label-12` | 12px · sans · 400 · `#64748B` (slate-500) · 1.4 lh | Secondary / supporting labels |
| `Annotation/Mono-13` | 13px · monospace · `#475569` (slate-600) · 1.4 lh | Token references, hex values, code |
| `Annotation/Section-12` | 12px · sans · 600 · uppercase · 0.05em tracking · `#64748B` | Section labels on busy annotations |
| `Annotation/Number-12` | 12px · sans · 700 · `#FFFFFF` on hot-spot fill | Numbered hot spots (1, 2, 3) |

**Monospace stack.** `'Menlo', 'SF Mono', 'Consolas', 'Courier New', monospace`.

**Legibility halo.** When any label sits over a UI element (not on whitespace), apply a **4px white outline at 80% opacity** OR an **8px white halo with 3px blur**. Pick one and use it consistently per asset.

---

## 3. Color palette (annotations only)

| Token (annotation) | Hex | Use |
|---|---|---|
| `Annotation/Boundary` | `#94A3B8` (slate-400) | Dotted boundary lines |
| `Annotation/Leader` | `#64748B` (slate-500) | Solid leader lines |
| `Annotation/Dimension` | `#475569` (slate-600) | Dimension lines (measurements) |
| `Annotation/Callout-fill` | `#F1F5F9` at 95% opacity | Callout box fill |
| `Annotation/Callout-border` | `#E2E8F0` (slate-200) · 1px | Callout box border |
| `Annotation/Hot-spot-fill` | `#0F766E` (brand teal-700) | Numbered hot spots |
| `Annotation/Hot-spot-ring` | `#14B8A6` (teal-500) at 30% opacity · 4px ring | Hot spot ring |
| `Annotation/Focus-ring` | `#14B8A6` (teal-500) · 2px solid | Real focus ring (matches product UI) |
| `Annotation/Pass` | `#16A34A` (green-600) | Contrast pass badge |
| `Annotation/Fail` | `#DC2626` (red-600) | Contrast fail badge |

**Rule.** No brand teal or brand orange in annotations *except* hot spots (teal) and focus rings (teal-500). Every other annotation element is slate-family.

---

## 4. Lines

| Line type | Spec |
|---|---|
| **Boundary line** | 1px · dotted · `Annotation/Boundary` · 4–2 dash pattern (4px dash, 2px gap) |
| **Leader line** | 1.5px · solid · `Annotation/Leader` · no arrowhead · 4px dot at target end |
| **Dimension line** | 1px · solid · `Annotation/Dimension` · 4px serif caps at both ends |
| **Motion path** | 1.5px · dashed · `Annotation/Dimension` · 6–4 pattern (only when annotating motion direction) |

**Why no arrowheads.** Arrowheads add visual weight and ambiguity ("pointing at what, exactly?"). The 4px dot at the target end is unambiguous and quieter.

---

## 5. Callout boxes

| Callout type | Spec |
|---|---|
| **Standard callout** | Fill `Annotation/Callout-fill` · border `Annotation/Callout-border` 1px · radius 6px · padding 6px 8px |
| **Token callout (compact)** | No fill · `Annotation/Mono-13` text · 1px slate-300 underline beneath |
| **Contrast ratio pill** | Pill: fill `Annotation/Callout-fill` · radius 999px · padding 4px 8px · 12px mono inside |
| **Pass / Fail badge** | Fill `Annotation/Pass` or `Annotation/Fail` · white text · 12px sans weight 600 · radius 4px · padding 2px 6px |

---

## 6. Annotation patterns

Each pattern is a reusable annotation primitive. The per-asset map in §7 says which patterns apply to which mockups.

### Pattern A — Touch target boundary

- Dotted box around the interactive hit area, **1px dotted `Annotation/Boundary`**.
- Label outside the box: `48 × 48 (min)` or `56 × 56 (primary CTA)`.
- Box matches the **computed hit area**, not the visual size — if the visual button is 40px but tap padding extends to 48px, the box is at 48px.

### Pattern B — Token reference

- Leader line from the annotated element to a token callout outside the screen.
- Two-line format (preferred):
  ```
  color/brand/primary
  #0F766E
  ```
  Both lines `Annotation/Mono-13`. Second line in `#64748B`.
- One-line format (when space is tight):
  ```
  color/brand/primary · #0F766E
  ```

### Pattern C — Color contrast ratio

- Contrast pill adjacent to the text being measured.
- Format: `15.8 : 1` with **thin space (U+2009)** around the colon for typographic correctness.
- Pass badge if ≥ 4.5 : 1 (≥ 3 : 1 for large text ≥ 18.66px regular / 24px bold).
- Fail badge otherwise.
- Place beside the text, never overlapping. Connect with a 4px dot if leader line is needed.

### Pattern D — Focus ring demonstration

- Render the actual **2px `Annotation/Focus-ring` (teal-500)** at the proper offset on the element.
- Label outside: `focus-visible: 2px #14B8A6` (`Annotation/Mono-13`).
- Demonstrate on **one element only** per screen — don't ring every focusable item.

### Pattern E — Type specimen row

- Three-column row: token name (mono, left) · spec values (mono, center) · sample sentence (rendered in actual type, right).
- Token / spec format:
  ```
  type/body-lg     18 / 1.6 / sans / 400
  ```
- Sample sentence uses the canonical Spanish-first content. Example:
  ```
  Hoy tienes 3 ejercicios para hacer en casa.
  ```
- Comparison row below (smaller body) when contrasting: e.g. show 18px above 16px to demonstrate the senior-surface rule.

### Pattern F — Hot spot

- Filled circle, **12px diameter**, `Annotation/Hot-spot-fill`.
- 4px ring at `Annotation/Hot-spot-ring` (teal-500 at 30% opacity).
- Numbered (1, 2, 3) when there are multiple hot spots in one screen — use `Annotation/Number-12` style for the number.
- If 3+ hot spots, add a small legend below the screen with the corresponding labels.

### Pattern G — Reduced-motion fallback

- Two-state side-by-side: motion on / motion reduced.
- Both states get the same label format.
- A small badge above the second state: `Reduced motion` — `Annotation/Section-12` style, slate-200 fill, slate-700 text, 4px radius, 4px padding.

### Pattern H — Before / After

- Two-state side-by-side, divided by a vertical 1px slate-200 line.
- Header above left: `Before` (`Annotation/Section-12`). Above right: `After`.
- Annotation row beneath: the design rationale that justifies the shift (1 sentence, `Annotation/Label-14`).

---

## 7. Per-asset application

| Asset | Patterns | Notes |
|---|---|---|
| **VIS-01** token shift | B, H | Three before/after pairs. H header for each. B token callouts under each chip. |
| **VIS-02** type specimen | E | Two rows minimum: `type/body-lg` (18px) and `type/body` (16px) to demonstrate the senior-surface rule. |
| **VIS-03** PainInterruptModal | A, B | A on the 56×56 primary CTA. B on the `shield-alert` icon (`color/accent/default`) and copy (`color/text/primary`). |
| **VIS-04** RepCounterCard | A, B, F | A on the +/– 56×56 buttons. B on the counter type style. F (hot spot 1) on the pain slider with legend: *"Pain captured during the exercise, not after — safety guardrail."* |
| **VIS-05** XPRing | B, G | B on the ring fill (`color/brand/primary`). G two-state showing animated fill vs. instant fill for reduced motion. |
| **VIS-06** HOME-01 light/dark | None | Side-by-side comparison; no annotation overlay needed. |
| **SOL-05** HOME-01 with target overlays | A, E | A on every interactive element (48px dotted, 56px primary in solid). Mini E pattern for the body-text specimen. |
| **SOL-07** HOME-01 + maps | F | Numbered hot spots 1 (Smart Arrival card), 2 (Maps deep link). Legend below. |
| **A11Y-02** HOME-01 annotated | A, C, D | A on all interactives. C on every text element (with pass/fail badge). D on one focused element only. |
| **IA-01** sitemap | None | Use structural diagram conventions (see §8). |
| **PROC-02** IA pivot before/after | H | The strategic decision visualization. Header + rationale row are non-negotiable. |
| **PROB-01** Carmen journey | None | Use journey-map friction conventions (see §8). |

---

## 8. Non-annotation asset conventions

A few assets aren't annotations on UI — they're structural diagrams. They have their own conventions.

### Sitemap (IA-01)

- Root node: **brand teal-700 fill**, white text, `radius/md`, 12px padding, `Annotation/Label-14`.
- Tab nodes (Today / My Care / Chat / Profile): **slate-100 fill**, slate-900 text, `radius/md`, 8px padding.
- Leaf nodes (screen IDs like HOME-01): **white fill, slate-200 border 1px**, slate-700 mono text 13px, `radius/sm`, 4px 6px padding.
- Connections: 1.5px solid `Annotation/Leader`, no arrowheads, 4px dot at child end.

### Friction map (PROB-01)

- 5 horizontal stage cards on a track.
- Stage card: white fill, slate-200 border 1px, `radius/md`, 12px padding.
- Friction indicator (Low / Medium / High):
  - **Low**: pill, `#DCFCE7` (green-50) fill, `#15803D` text.
  - **Medium**: pill, `#FEF3C7` (amber-100) fill, `#A16207` text.
  - **High**: pill, `#FEE2E2` (red-100) fill, `#B91C1C` text.
- Connecting track: 2px solid `#E2E8F0` running horizontally through the centers.

### Process timeline (PROC-01)

- 6 phase nodes on a horizontal track.
- Node: brand teal-700 filled circle, 16px diameter, white number inside.
- Connecting track: 2px solid `Annotation/Boundary` (slate-400).
- Phase label below each node: `Annotation/Label-14`, 8px above the date in `Annotation/Label-12`.

### Daily Rehab Loop 3-step (IA-03)

- 3 cards in a row: Trigger → Action → Reward.
- Each card: white fill, slate-200 border 1px, `radius/md`, 16px padding.
- Lucide icon at top (24px, slate-700).
- Title below icon: `Annotation/Section-12`.
- Description: `Annotation/Label-14`, max 2 lines.
- Connecting arrow between cards: 1.5px solid slate-400, no arrowhead, 8px dot at target end (this is a flow arrow, not a leader — exception to the no-arrowhead rule).

### Validation roadmap (REF-02)

- 5 cards in a row.
- Each card: white fill, slate-200 border 1px, `radius/md`, 12px padding.
- Target stage badge at top: pill with slate-100 fill, `Annotation/Section-12` text. Values: `Before Beta`, `First Cohort`, `Ongoing`.
- Item description below: `Annotation/Label-14`, max 3 lines.

---

## 9. Figma file setup

Create a dedicated annotation library inside the case study Figma file.

**Local styles to create:**

```
TEXT STYLES
  Annotation/Label-14
  Annotation/Label-12
  Annotation/Mono-13
  Annotation/Section-12
  Annotation/Number-12

COLOR STYLES
  Annotation/Boundary       #94A3B8
  Annotation/Leader         #64748B
  Annotation/Dimension      #475569
  Annotation/Callout-fill   #F1F5F9 95%
  Annotation/Callout-border #E2E8F0
  Annotation/Hot-spot-fill  #0F766E
  Annotation/Hot-spot-ring  #14B8A6 30%
  Annotation/Focus-ring     #14B8A6
  Annotation/Pass           #16A34A
  Annotation/Fail           #DC2626
```

**Component set to create:** `Annotations / *` with these components:

- `Annotations / Boundary` — variant: 48px · 56px · custom
- `Annotations / Leader` — variant: short · medium · long
- `Annotations / Token-callout` — slot for token name + hex
- `Annotations / Contrast-pill` — variant: pass · fail
- `Annotations / Hot-spot` — variant: 1 · 2 · 3 · numberless
- `Annotations / Focus-ring` — sized to wrap any child
- `Annotations / Before-After-header` — variant: before · after

**Layer hierarchy.** Keep all annotations in a dedicated top-level frame named `[ANNOTATIONS]` per mockup frame, so they can be toggled off for clean exports.

---

## 10. Export conventions

- **Annotated assets:** export at 2× pixel density, PNG. Filename pattern: `{ASSET-ID}-annotated.png` (e.g., `VIS-03-annotated.png`).
- **Clean variants:** also export each annotated mockup *without* the `[ANNOTATIONS]` layer. Filename: `{ASSET-ID}-clean.png`. Both files for portfolio flexibility.
- **SVG assets** (structural diagrams): export as SVG with text outlined for cross-browser font safety. Filename: `{ASSET-ID}.svg`.
- **Dark mode variants** (where applicable): suffix `-dark`. E.g., `VIS-06-dark.png`.

---

## 11. Quality bar

Before shipping any annotated asset:

- [ ] Every measurement is real (verify at 2× zoom with rulers).
- [ ] Every leader line ends with a 4px dot at the target — never an arrowhead.
- [ ] Every annotation label uses the defined text style (no custom one-offs).
- [ ] Every annotation color is from the annotation palette (no brand colors except hot spots and focus rings).
- [ ] All labels are readable at 50% zoom (test by zooming out in Figma).
- [ ] Annotations don't obscure the UI being annotated (check leader-line paths).
- [ ] Halo / outline applied consistently within one asset.
- [ ] `[ANNOTATIONS]` layer can be toggled off cleanly (no orphaned annotation elements).
- [ ] Dark mode variants exist where the case study shows a dark UI.

---

## 12. What to avoid

| Don't | Why |
|---|---|
| Color-only annotation (e.g., red dot meaning "issue" with no label) | Color-only fails accessibility; pair with shape, line style, or text. |
| Arrowheads on leader lines | Visual noise; the 4px dot is cleaner. |
| Annotations that obscure the UI | The annotation should orbit the UI, not crash into it. |
| Mixed label formats in one asset | Pick one and use it. "48 × 48" for boundaries, "48px min" for floor mentions, "56 × 56" for primary CTAs. |
| Multiple annotation styles in one asset | Pick the right pattern from §6 and stick to it. |
| Tiny labels that require zoom | Anything below 12px sans or 13px mono is too small. |
| Brand colors in annotation chrome | Brand teal and brand orange are product semantics, not annotation decoration. Exceptions: hot spots, focus rings. |
| Long annotation labels | If the label is more than ~8 words, it's commentary, not annotation. Move commentary to the case study prose. |

---

*End of Figma annotation conventions.*
