# Evidence Log

**Project:** Osteóplus UX Case Study
**Document:** `00-source-inventory/evidence-log.md`
**Status:** ✅ Locked (Gate 1)
**Version:** 1.0.0
**Date:** 2026-05-17

---

## Purpose

Map every claim candidate in the case study to its source document, evidence strength, and intended section. Acts as a claim-verification ledger.

**Total claims logged:** 57, organized by case-study section.

---

## Strength legend

| Label | Meaning |
|---|---|
| **S** — Strong | Directly stated in source documentation |
| **M** — Medium | Synthesized across multiple sources |
| **W** — Weak | Plausible but not directly documented |
| **U** — Unsupported | No source — must remain placeholder or recommendation |

---

## 1. Hero / TL;DR / Snapshot

| # | Claim candidate | Source | Strength | Status |
|---|---|---|---|---|
| 1 | Osteóplus is a PWA-first clinic product for osteopathy, physiotherapy, and rehabilitation in Barcelona | DNA §1, DESIGN_SYSTEM §1, brand-kit §1 | S | Approved |
| 2 | Combines guest-first appointment booking with The Loop daily rehab gamification | DNA §4.1–§4.2, brand-kit §1 | S | Approved |
| 3 | Audience: adults 35–85, optimized for 60+ | DNA §3.1, DESIGN_SYSTEM header, brand-kit §1 | S | Approved |
| 4 | Bilingual ES (primary) / EN (secondary) | DNA §6, DESIGN_SYSTEM header, brand-kit §1, deck §1 | S | Approved |
| 5 | Roadmap: Beta target Q2 2026, GA Q3 2026 | DNA §5 | S | Approved (frame as roadmap, not shipped) |
| 6 | Solo end-to-end concept project, AI-augmented workflow (July 2025 → ongoing) | Intake §1 + locked provenance §5 | S | Approved |
| 7 | Documentation AI-drafted; component primitives adapted from open source (shadcn/ui, Radix, Tailwind, Lucide, 21st.dev); brand and copy original; medical claims reviewed by a practicing osteopath | Locked provenance | S | **Approved — disclose in Hero / Reflection / Acknowledgments** |

---

## 2. Problem & Context

| # | Claim candidate | Source | Strength | Status |
|---|---|---|---|---|
| 8 | Older patients face booking friction and rehab-adherence drop-off after the clinic visit | Journey map (Booking + Post-Visit Rehab: High friction) | S | Approved |
| 9 | Tiny fonts and unclear navigation exclude seniors | Journey map (Research stage); research §themes | S | Approved (label snippet as synthesized proxy verbatim) |
| 10 | Phone-call fallback signals product failure at the moment of independence | Persona §pain points; journey Booking stage | M | Approved |
| 11 | Carmen's "thinking" snippets are direct interview quotes | — | U | **Use [Synthesized proxy verbatim] label only** |

---

## 3. Research & Persona

| # | Claim candidate | Source | Strength | Status |
|---|---|---|---|---|
| 12 | Primary archetype: Carmen López, "Proxy-Dependent Senior" | Journey map, persona file | S | Approved |
| 13 | 5 journey stages: Awareness → Research → Booking → Clinic Visit → Post-Visit Rehab | Journey map | S | Approved |
| 14 | Friction is qualitative (Medium / High), not numeric | Journey map | S | Approved (correct earlier framing) |
| 15 | 4 synthesized themes: Booking Friction-Free, Trust Through Reliability, Personalized Exercise Confidence, Digital Literacy & Accessibility | Journey map, research.md | S | Approved |
| 16 | Carmen is AI-assisted synthesis informed by senior-UX literature | Locked provenance | S | Approved — disclose openly |
| 17 | Sample size, recruitment, research dates | — | U | Mark **[Placeholder]** explicitly |

---

## 4. Constraints & Decisions

| # | Claim candidate | Source | Strength | Status |
|---|---|---|---|---|
| 18 | WCAG 2.2 AA baseline | DNA §8, DESIGN_SYSTEM §1, A11Y audit §1 | S | Approved |
| 19 | Touch targets ≥48dp; primary CTAs ≥56dp | DNA §8, DESIGN_SYSTEM §1 | S | Approved |
| 20 | Body ≥14px; default 16px; 18px preferred for senior content; inputs ≥16px (prevents iOS auto-zoom) | DNA §8, DESIGN_SYSTEM §1 | S | Approved |
| 21 | Plain language, 6th–8th grade reading level | brand-kit §2, style-guide §1, deck purpose | S | Approved |
| 22 | Consent checkbox defaults unchecked (GDPR / LOPDGDD) | DNA §8, DESIGN_SYSTEM §1 | S | Approved |
| 23 | No emoji in UI; gamification via Lucide icons (2px stroke) | DNA §6, §8 | S | Approved |
| 24 | Guest-first booking — HttpOnly cookie session, 2-hour TTL, conversion flow | API Contract §1 | S | Approved |
| 25 | Pain Interrupt Modal triggered at pain ≥7 | DNA §4.2 | S | Approved |
| 26 | Pain scores never transmitted to analytics | DNA §7.1, Success Metrics §guardrails | S | Approved |

---

## 5. IA / Process / Flow

| # | Claim candidate | Source | Strength | Status |
|---|---|---|---|---|
| 27 | IA shift: "Medical Repository" → "Action Dashboard" | IA §1, research.md, project-init §2 | S | Approved (verbatim vocabulary lock) |
| 28 | Tab bar: Today / My Care / Chat / Profile | IA §1.1 | S | Approved |
| 29 | 86 screens documented (56 P0 / 27 P1 / 3 P2) across 13 feature prefixes | Screen ID Registry §summary | S | Approved |
| 30 | Booking is a 3-step wizard (Service → Date/Time → Details), + confirmation screen | Core Flows §4, Deck §booking steps | S | Approved |
| 31 | Daily Rehab Loop = 3–6 exercises, 10–20 min, Today-first dashboard | DNA §4.2, Core Flows §1, IA §A | S | Approved |

---

## 6. Visual Design / Design System

| # | Claim candidate | Source | Strength | Status |
|---|---|---|---|---|
| 32 | 39 components / 442 variants; 79 icons across 7 sets | UI Kit §0 | S | Approved |
| 33 | Primary CTA = Teal-700 (#0F766E); accent = Orange-700 (#C2410C); focus ring = Teal-500 (#14B8A6) | DESIGN_SYSTEM v4.2 §2, brand-kit §0, ui-kit §0 | S | Approved |
| 34 | 81 Primitive + 67 Semantic tokens; designs reference Semantics only | DESIGN_SYSTEM §2, ods §1 | S | Approved |
| 35 | Dark mode first-class; every screen ships dark variant | DNA §9.2, DESIGN_SYSTEM §2.6; Intake (every screen) | S | Approved |
| 36 | Component maturity (snapshot 2026-05-07): 14 Stable / 11 Beta / 7 Candidate / 0 Deprecated | UI Kit §0 | S | Approved |
| 37 | Fonts: Merriweather (display, local variable) + Inter (UI) + Roboto Mono (data) | DNA §6.1 | S | Approved |

---

## 7. Accessibility

| # | Claim candidate | Source | Strength | Status |
|---|---|---|---|---|
| 38 | A11Y audit dates: 2026-02-09 initial, 2026-03-20 re-audit | A11Y Audit header | S | Approved |
| 39 | 14 findings; 0 open Critical / 0 open High after re-audit; 4 Medium + 3 Low open | A11Y Audit §summary | S | Approved (genuine outcome data) |
| 40 | Lighthouse a11y 82–95/100 on tested screens | A11Y Audit §3.1 | S | Approved |
| 41 | WCAG criteria tested: 2.5.8, 2.4.11, 2.4.12, 3.3.8, 1.4.3 | A11Y Audit §1 | S | Approved |
| 42 | Audit scope: Onboarding (ONBR-01..04) + Gamification (GAME-01..04 + modals) | A11Y Audit §scope | S | Approved — acknowledge it's not full-product |
| 43 | Sign-off pending (QA Lead, UX Designer, PM, A11y Specialist) | A11Y Audit §9 | S | Approved — disclose honestly |

---

## 8. Impact / Metrics

| # | Claim candidate | Source | Strength | Status |
|---|---|---|---|---|
| 44 | North Star = Weekly Adherence Rate | Success Metrics §NSM, research §NSM rationale | S | Approved |
| 45 | KPI **targets** (not outcomes): booking >90%, exercise >75%, DAU/MAU >25%, 3+ day streak >40%, badge unlock 1.5+, cheat <5% | Success Metrics §KPI set | S | Approved as **targets**, never as measured outcomes |
| 46 | Booking abandonment rate, baseline appointment success — current-state metrics | — | U | None captured. Mark **[Placeholder]**; frame Impact as measurement strategy |
| 47 | Guardrails: zero night notifications (22:00–07:00); zero unresolved critical/high a11y defects pre-rollout | Success Metrics §guardrails | S | Approved |

---

## 9. Voice / Localization

| # | Claim candidate | Source | Strength | Status |
|---|---|---|---|---|
| 48 | Spanish is primary; English secondary; copy written ES-first | brand-kit §2.4, DNA §9.3, deck §purpose | S | Approved |
| 49 | Sentence case in-app; Title Case only for marketing display | DNA §8, ods §0, style-guide | S | Approved |
| 50 | Banned words: revolutionary, seamless, cutting-edge, simply, just, easily | brand-kit §2.1, style-guide §2.3 | S | Approved |

---

## 10. Tech / Privacy

| # | Claim candidate | Source | Strength | Status |
|---|---|---|---|---|
| 51 | Stack: Next.js 15 (App Router, React 19), Tailwind v4, shadcn/ui + Radix, Supabase, next-pwa, next-intl, Framer Motion, Vercel EU | DNA §6, DESIGN_SYSTEM §1 | S | Approved |
| 52 | EU hosting (Frankfurt / Paris) for GDPR; Ley 41/2002 Art. 17 medical-record retention (7 years) | DNA §7.1 | S | Approved |

---

## 11. Process / Methodology

| # | Claim candidate | Source | Strength | Status |
|---|---|---|---|---|
| 53 | Self-review walkthroughs against the prototype using my own questionnaire; surfaced improvements for the 60+ flow | Locked provenance | S | Approved — frame as method honesty, not usability testing |
| 54 | Informal peer review by a peer whose professional role is interviewer; conducted via interviews and phone calls | Locked provenance | S | Approved — disclose accurately, not a structured heuristic eval |
| 55 | Medical-claim review by a practicing osteopath | Locked provenance | S | **Approved — disclose as a strength** |

---

## 12. What's Unsupported

| # | Claim candidate | Source | Strength | Status |
|---|---|---|---|---|
| 56 | External usability test results | — | U | Frame as recommended validation plan |
| 57 | A/B test results, before/after retention / adherence / conversion lifts, sample size, recruitment, research dates, direct interview verbatims | — | U | All marked **[Placeholder]** or **[Recommended KPI]** |

---

## Evidence summary

| Strength | Count | % of total |
|---|---:|---:|
| **S** — Strong | 47 | 82.5% |
| **M** — Medium | 2 | 3.5% |
| **W** — Weak | 0 | 0.0% |
| **U** — Unsupported | 8 | 14.0% |
| **Total** | 57 | 100% |

---

## Forbidden claims (for self-audit at Phase 4 Critique)

The case study must not assert any of the following without source:

- Specific user-quoted direct interview verbatims attributed to Carmen
- Sample sizes, recruitment criteria, research dates
- A/B test results or comparative flow performance
- Before/after retention, adherence, or conversion lifts
- Measured product outcomes (the product is pre-launch)
- Outcomes from a multi-participant usability study (none was conducted)
- "Users loved X" / "The redesign increased Y" / "Adherence rose by Z%"

Any such claim must be downgraded to:

- `[Synthesized proxy verbatim]` for quote-like content
- `[Placeholder]` for missing factual data
- `[Recommended KPI]` for measurement aspiration
- Measurement-strategy framing in Impact section

---

## Version history

| Version | Date | Changes |
|---|---|---|
| **1.0.0** | **2026-05-17** | Initial evidence log of 57 claim candidates at Phase 1 Discovery |
