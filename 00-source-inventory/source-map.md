# Source Map

**Project:** Osteóplus UX Case Study
**Document:** `00-source-inventory/source-map.md`
**Status:** ✅ Locked (Gate 1)
**Version:** 1.0.0
**Date:** 2026-05-17

---

## Purpose

Classify every project knowledge file by type, content, and intended use in the case study. Acts as the index for which file feeds which case-study section.

**Coverage:** 19 files total — 16 usable evidence sources, 3 governance / meta.

---

## Source map

| # | File | Type | Key sections | Facts extracted | Confidence | Primary use in case study |
|---|---|---|---|---|---|---|
| 1 | `osteoplus-project-dna.md` v2.4.0 | Meta / product context | Elevator pitch · KPI targets · audience · 3 pillars · tech stack · non-negotiables · roadmap · changelog | Mission, vision, values; booking >90% / completion >75% targets; 35–85 audience optimized for 60+; Pain Interrupt at pain ≥7; Daily Rehab Loop = 3–6 exercises, 10–20 min; Beta Q2 2026, GA Q3 2026; v1 (July 2025) → v2 (Dec 2025) evolution | Strong | Hero · Snapshot · Problem · Final Solution · Reflection |
| 2 | `persona.md` | Research / persona | Carmen López archetype · JTBD · journey stages · pain points · emotional signature · design implications · claim audit | "Proxy-Dependent Senior" archetype, 60+, low digital confidence, chronic back pain, family-proxy dependency; sample size, age, occupation, device, dates, quotes all flagged as gaps | Strong (with explicit gap flags) | Persona · Research Synthesis · Reflection |
| 3 | `Mapping_Senior_Digital_Health_Journey.md` | Research / journey map | 5 stages · touchpoints · synthesized "thinking" quotes · emotional signatures · friction scores · themes | Friction is qualitative (Medium / High), not numeric; 4 themes: Booking Friction-Free, Trust Through Reliability, Personalized Exercise Confidence, Digital Literacy & Accessibility | Medium — source method (real interviews vs synthesis) unconfirmed | Persona · Problem · Process |
| 4 | `research.md` | Research / synthesis foundation | Evidence posture · themes · IA insight · NSM rationale · gamification risk framing · validation plan · claim audit | Explicit list of documented vs missing items; IA shift Medical Repository → Action Dashboard; portfolio copy guidance | Strong (framing strategy) | Research Synthesis · IA · Impact · Reflection |
| 5 | `Information_Architecture_v2_2.md` v2.2.1 (2026-02-11) | IA / sitemap | Tab bar · sitemap · key flows · deep linking | 4-tab model (Today / My Care / Chat / Profile); 86 screens documented; "Action Dashboard" shift documented as IA principle | Strong | IA & Flow Strategy · Process · Final Solution |
| 6 | `Core_Flows_V2_2.md` v2.2.0 (2026-01-27) | Flows | Daily Rehab Loop · Smart Arrival · Emergency Triage · Booking 4-step | BOOK-01..04 with components named; Pain Interrupt deferred to EXER-04a | Strong | Process · Final Solution · Decisions |
| 7 | `Success_Metrics_v2_2.md` v2.3.0 (2026-03-07) | Analytics / metrics | NSM · primary KPIs · guardrails · event taxonomy · reporting cadence | NSM = Weekly Adherence Rate; targets: booking >90%, exercise >75%, DAU/MAU >25%, 3+ day streak >40%, badge unlock 1.5+, cheat <5%; guardrails: zero night notifications, zero a11y defects pre-rollout | Strong (targets); Unsupported (actual outcomes) | Impact · Constraints · Snapshot |
| 8 | `A11Y_Audit_Report.md` v1.1.0 (2026-02-09 / 2026-03-20) | QA / a11y | Scope · summary · automated + manual results · issue log · per-screen checklists | 14 findings · 0 open Critical · 0 open High · 4 Medium · 3 Low; Lighthouse 82–95; specific WCAG 2.5.8 / 1.4.3 / 2.4.11 / 2.4.12 / 3.3.8 violations and fixes; scoped to ONBR-01..04 + GAME-01..04 | **Strong — only documented quantitative outcomes** | Accessibility · Impact · Process |
| 9 | `Deck_Complete_ES_EN.md` v1.1 (2025-12-18) | Content / copy | Bilingual UI strings for booking · errors · empty states · notifications · a11y strings | Plain language 6th–8th grade reading level; consent default unchecked; error/empty/escalation copy specified | Strong | Constraints · Localization · Design Decisions |
| 10 | `API_Contract.md` v2.6 | Engineering / API | Auth strategies · guest sessions · bookings · exercises · gamification | Guest session = HttpOnly cookie, 2-hour TTL; guest → authenticated conversion flow; design rationale for guest-first | Strong (guest-first justification) | Decisions & Trade-offs · Final Solution |
| 11 | `Screen_ID_Registry_v1_0.md` v1.1.0 (2026-02-11) | Meta / inventory | Naming convention · 86-screen registry by feature · priority labels | 86 screens (56 P0 / 27 P1 / 3 P2) across 13 feature prefixes | Strong | Snapshot · Process · Final Solution |
| 12 | `DESIGN_SYSTEM.md` v4.2.0 (2026-05-08) | Design system / canonical SSOT | Tokens (color, type, spacing, radius) · components (39 / 442 variants) · accessibility · reconciliation log · changelog | Primary CTA = Teal-700 (#0F766E); accent = Orange-700 (#C2410C); focus ring = Teal-500 (#14B8A6); 81 primitives + 67 semantic tokens; Light + Dark first-class | Strong | Visual Design & Design System · Constraints |
| 13 | `osteoplus-design-system.md` v4.1.0 (2026-04-23) | Design system / impl mirror | Implementation tokens · Tailwind classes · component inventory | Mirrors `DESIGN_SYSTEM.md` for engineering reference | Strong | Visual Design (cross-reference) |
| 14 | `ui-kit.md` v1.1.0 (2026-05-08) | Design system / component catalog | 39 components · maturity status · prop contracts | 14 Stable / 11 Beta / 7 Candidate / 0 Deprecated; 79 icons across 7 sets; Storybook + Figma `DesignSystemOsteoplus` v2.1 | Strong | Visual Design · Snapshot |
| 15 | `style-guide.md` v1.1.0 (2026-05-08) | Content / voice + visual rules | Voice · tone shifts by context · what-we-don't-do · sentence case | No exclamations, no shame, no hype; 6th–8th grade plain language; Pain Interrupt has firm / protective / clinical tone | Strong | Voice · Decisions · A11y |
| 16 | `brand-kit.md` v4.2.0 (2026-05-08) | Brand governance | Positioning · voice · logo system (5 variants + favicon) · color application · do/don't | "Warm middle: clinical authority without clinical coldness"; 5 documented logo SVGs; bilingual parity | Strong | Hero · Visual Design · Voice |
| 17 | `Goals.md` | Author / career meta | Author North Star · 30/90/365 plans · priorities | Author-side context only; not source for the case study | Out of scope as case-study evidence | Not used as evidence |
| 18 | `osteoplus-case-study-project-initialization.md` | Meta / build governance | Project structure · recommended narrative · QA checklists | Build guidance, not source material | Out of scope as evidence; governance only | Workflow shaping |
| 19 | `osteoplus-case-study-generator-prompt-v2.md` | Meta / workflow | The v2 prompt itself | Workflow definition | Out of scope | Workflow only |

---

## Coverage notes

- All 19 files accessible — no permission gaps.
- 16 usable evidence sources, 3 governance / meta.
- "Owner:" labels inside the source files (e.g., "DesignOps + Frontend Architecture", "Product + Engineering", "Brand + DesignOps") are role-bucket scaffolding inside AI-drafted documentation, **not** evidence of a real multi-person team. See `intake.md` §5 (Provenance) and §9.2 (Ownership framing).

---

## File-to-section mapping at a glance

| Case-study section | Files used |
|---|---|
| Hero / Snapshot | 1, 7, 8, 11, 12, 14, 16 |
| Problem & Context | 1, 2, 3, 4 |
| Research & Persona | 2, 3, 4 |
| Constraints | 1, 7, 9, 10, 12 |
| IA & Flow | 1, 5, 6, 11 |
| Design Decisions & Trade-offs | 4, 6, 7, 9, 10, 12, 15, 16 |
| Visual Design & Design System | 12, 13, 14, 15, 16 |
| Final Solution | 1, 5, 6, 11, 12 |
| Accessibility | 8, 12, 15 |
| Impact & Measurement Plan | 7, 8, 4 |
| Voice / Localization | 9, 15, 16 |
| Tech / Privacy | 1, 10, 12 |
| Reflection | 1, 2, 4, 8 |
| Acknowledgments / Appendix | All evidence sources cited |

---

## Version history

| Version | Date | Changes |
|---|---|---|
| **1.0.0** | **2026-05-17** | Initial classification of 19 project files at Phase 1 Discovery |
