# Osteóplus UX Case Study — Phase 1 Discovery

**Project:** Osteóplus — PWA-first clinic product for osteopathy, physiotherapy, and rehabilitation (Barcelona)
**Workflow:** Generator Prompt v2 (Interactive, 5-phase)
**Phase:** 1 — Discovery
**Gate status:** ✅ PASSED
**Date locked:** May 17, 2026

This document supersedes `osteoplus-case-study-phase0-intake.md` for any conflicting fields (see §1.1).

---

## 1. Locked Intake (updated)

| Field | Value |
|---|---|
| Author name | Edgar Bonilla G. |
| Target role | Junior UI/UX Designer |
| Target company type | Health tech, wellness, sports/fitness — async-first |
| Owned | Osteóplus — end-to-end |
| Collaborated | None — solo project |
| Influenced | None — solo concept project |
| **Timeline (updated)** | **July 2025 → ongoing.** Initial product brief July 2025; v1 → v2 "Gamified Recovery Partner" pivot December 2025; focused design sprint Jan 15 → June 15, 2026 (Month 4 of 6 today). |
| Team size & roles | 1 (solo) with AI augmentation |
| Tools | Claude · ChatGPT · Gemini · Claude Code · Cursor · Figma · Adobe CC (Photoshop, Illustrator, Acrobat, Firefly) |
| Launch status | Concept — may pitch to a real clinic later (disclosed) |
| Documentation location | Project files in this Claude project — authoritative source for Phase 1 |
| Available visuals | Brand kit (5 logo variants + favicon SVG), UI Kit (39 components / 442 variants), Style Guide, Figma `DesignSystemOsteoplus` v2.1, Design System (DESIGN_SYSTEM.md v4.2.0), 86 hi-fi screens (P0+P1+P2), photo/picture assets (mix: AI-generated + other) |
| Portfolio platform | Vercel (Next.js stack) |
| Reference portfolios | None provided |
| Preferred tone | Concise, confident, evidence-based |
| Language | English only |

### 1.1 Timeline framing change from Gate 0

| Field | Phase 0 (locked) | Phase 1 (revised) |
|---|---|---|
| Timeline | Jan 15, 2026 → ongoing (Month 4 of 6) | **July 2025 → ongoing.** v1 brief July 2025; v1 → v2 pivot Dec 2025; design sprint Jan 15 → Jun 15, 2026 (Month 4 of 6 today). |
| Rationale | Original framing only covered the design sprint. | Author confirmed scope includes the v1 → v2 evolution captured in the Project DNA changelog. |

---

## 2. Locked Provenance Disclosures

These will appear verbatim in the case study (Hero, Reflection, Acknowledgments). They reframe potential risks as method honesty.

| Element | Provenance |
|---|---|
| **Workflow** | AI-augmented end-to-end. Claude, ChatGPT, Gemini for documentation drafting; Claude Code for token generation and design scaffolding; Cursor for design-side scripting and component work. Every decision, synthesis, and design judgment is mine. |
| **Documentation (19 files)** | AI-drafted against a structured product-discipline brief I authored. Reviewed, edited, and iterated by me. |
| **Component primitives** | Adapted from open-source libraries: shadcn/ui, Radix UI, Tailwind CSS, Lucide icons, 21st.dev. Cited by name. |
| **Component system** | 39 components / 442 variants composed from those primitives, scaffolded with AI assistance, design judgment mine. |
| **Brand & logos** | Original and fictional. No real clinic affiliation. Five logo SVGs + favicon authored solo. |
| **Copy (ES + EN)** | Original, authored by me, drafted in plain language per the bilingual editorial rules in `style-guide.md` and `brand-kit.md`. |
| **Photo / picture assets** | Mix: AI-generated illustrations + other (sourced as needed). No real patients depicted. |
| **Prototype** | Static frames only. No shipped code, no Vercel deploy, no GitHub repo for the product itself. (The case-study landing page is the only intended Vercel deployment.) |
| **External usability testing** | None conducted. Self-review walkthroughs against the prototype only. External 60+ testing is the recommended next validation step. |
| **Peer / informal review** | One informal review by a peer whose professional role is interviewer; conducted via interviews and phone calls about the project. Not a structured heuristic evaluation. |
| **Medical-claim review** | A practicing osteopath reviewed medical claims and copy. Disclose as a strength. |
| **KPI baselines** | None captured. Targets locked from Success Metrics document; baselines deferred to beta launch. |

---

## 3. Source Map

19 project files classified. 16 are usable evidence; 3 are meta/governance.

| # | File | Type | Key sections | Facts extracted | Confidence | Primary use in case study |
|---|---|---|---|---|---|---|
| 1 | `osteoplus-project-dna.md` v2.4.0 | Meta / product context | Elevator pitch, KPI targets, audience, 3 pillars, tech stack, non-negotiables, roadmap, changelog | Mission, vision, values; booking >90% / completion >75% targets; 35–85 audience optimized for 60+; Pain Interrupt at pain ≥7; Daily Rehab Loop = 3–6 exercises, 10–20 min; Beta Q2 2026, GA Q3 2026; v1 (July 2025) → v2 (Dec 2025) evolution | Strong | Hero · Snapshot · Problem · Final Solution · Reflection |
| 2 | `persona.md` | Research / persona | Carmen López archetype, JTBD, journey stages, pain points, emotional signature, design implications, claim audit | "Proxy-Dependent Senior", 60+, low digital confidence, chronic back pain, family-proxy dependency; sample size, age, occupation, device, dates, quotes all flagged as gaps | Strong (with explicit gap flags) | Persona · Research Synthesis · Reflection |
| 3 | `Mapping_Senior_Digital_Health_Journey.md` | Research / journey map | 5 stages, touchpoints, synthesized "thinking" quotes, emotional signatures, friction scores, themes | Friction is qualitative (Medium/High), not numeric; 4 themes: Booking Friction-Free, Trust Through Reliability, Personalized Exercise Confidence, Digital Literacy & Accessibility | Medium — source method (real interviews vs synthesis) unconfirmed | Persona · Problem · Process |
| 4 | `research.md` | Research / synthesis foundation | Evidence posture, themes, IA insight, NSM rationale, gamification risk framing, validation plan, claim audit | Explicit list of documented vs missing; IA shift Medical Repository → Action Dashboard; portfolio copy guidance | Strong (framing strategy) | Research Synthesis · IA · Impact · Reflection |
| 5 | `Information_Architecture_v2_2.md` v2.2.1 (Feb 11, 2026) | IA / sitemap | Tab bar, sitemap, key flows, deep linking | 4-tab model (Today / My Care / Chat / Profile); 86 screens; "Action Dashboard" shift | Strong | IA & Flow Strategy · Process · Final Solution |
| 6 | `Core_Flows_V2_2.md` v2.2.0 (Jan 27, 2026) | Flows | Daily Rehab Loop, Smart Arrival, Emergency Triage, Booking 4-step | BOOK-01..04 with components; Pain Interrupt at EXER-04a | Strong | Process · Final Solution · Decisions |
| 7 | `Success_Metrics_v2_2.md` v2.3.0 (Mar 7, 2026) | Analytics / metrics | NSM, primary KPIs, guardrails, event taxonomy, reporting cadence | NSM = Weekly Adherence Rate; targets: booking >90%, exercise >75%, DAU/MAU >25%, 3+ day streak >40%, badge unlock 1.5+, cheat <5%; guardrails: zero night notifications, zero a11y defects | Strong (targets); Unsupported (actual outcomes) | Impact · Constraints · Snapshot |
| 8 | `A11Y_Audit_Report.md` v1.1.0 (Feb 9 / Mar 20, 2026) | QA / a11y | Scope, summary, automated + manual results, issue log, per-screen checklists | 14 findings · 0 open Critical · 0 open High · 4 Medium · 3 Low; Lighthouse 82–95; WCAG 2.5.8 / 1.4.3 / 2.4.11 / 2.4.12 / 3.3.8; scoped to ONBR-01..04 + GAME-01..04 | **Strong — only documented quantitative outcomes** | Accessibility · Impact · Process |
| 9 | `Deck_Complete_ES_EN.md` v1.1 (Dec 18, 2025) | Content / copy | Bilingual UI strings for booking, errors, empty states, notifications, a11y strings | Plain language 6th–8th grade; consent default unchecked; specified error/empty/escalation copy | Strong | Constraints · Localization · Design Decisions |
| 10 | `API_Contract.md` v2.6 | Engineering / API | Auth strategies, guest sessions, bookings | Guest session = HttpOnly cookie, 2-hour TTL; guest → authenticated conversion flow | Strong (guest-first justification) | Decisions · Final Solution |
| 11 | `Screen_ID_Registry_v1_0.md` v1.1.0 (Feb 11, 2026) | Meta / inventory | Naming convention, 86-screen registry, priority labels | 86 screens (56 P0 / 27 P1 / 3 P2) across 13 feature prefixes | Strong | Snapshot · Process · Final Solution |
| 12 | `DESIGN_SYSTEM.md` v4.2.0 (May 8, 2026) | Design system / canonical SSOT | Tokens, components, accessibility, reconciliation log, changelog | Primary CTA Teal-700; accent Orange-700; focus ring Teal-500; 81 primitives + 67 semantic tokens; Light + Dark first-class | Strong | Visual Design · Constraints |
| 13 | `osteoplus-design-system.md` v4.1.0 (Apr 23, 2026) | Design system / impl mirror | Implementation tokens, Tailwind classes, component inventory | Mirrors SSOT for engineering reference | Strong | Visual Design (cross-reference) |
| 14 | `ui-kit.md` v1.1.0 (May 8, 2026) | Design system / component catalog | 39 components, maturity status, prop contracts | 14 Stable / 11 Beta / 7 Candidate / 0 Deprecated; 79 icons across 7 sets | Strong | Visual Design · Snapshot |
| 15 | `style-guide.md` v1.1.0 (May 8, 2026) | Content / voice + visual rules | Voice, tone shifts by context, what-we-don't-do | No exclamations, no shame, no hype; sentence case; 6th–8th grade plain language | Strong | Voice · Decisions · A11y |
| 16 | `brand-kit.md` v4.2.0 (May 8, 2026) | Brand governance | Positioning, voice, logo system, color application, do/don't | "Warm middle: clinical authority without clinical coldness"; 5 logo SVGs; bilingual parity | Strong | Hero · Visual Design · Voice |
| 17 | `Goals.md` | Author / career meta | Author North Star, 30/90/365 plans, priorities | Author-side context only | Out of scope as case-study evidence | Not used as evidence |
| 18 | `osteoplus-case-study-project-initialization.md` | Meta / build governance | Project structure, recommended narrative, QA checklists | Build guidance for the case study itself | Out of scope as evidence; governance only | Workflow shaping |
| 19 | `osteoplus-case-study-generator-prompt-v2.md` | Meta / workflow | The v2 prompt itself | Workflow definition | Out of scope | Workflow only |

**Coverage notes:**
- 16 usable evidence files, 3 governance.
- All 19 are accessible — no permission gaps.
- All references to "Owner: DesignOps / Product + Engineering / Brand + DesignOps" in the source files are treated as role-bucket scaffolding inside the AI-drafted documentation, **not** as evidence of a real multi-person team. See §2 Provenance.

---

## 4. Evidence Log

57 claim candidates organized by case-study section.
**Strength:** S = Strong (directly stated) · M = Medium (synthesized) · W = Weak (plausible, undocumented) · U = Unsupported (placeholder only).

### 4.1 Hero / TL;DR / Snapshot

| # | Claim candidate | Source | Strength | Status |
|---|---|---|---|---|
| 1 | Osteóplus is a PWA-first clinic product for osteopathy, physiotherapy, and rehabilitation in Barcelona | DNA §1, DESIGN_SYSTEM §1, brand-kit §1 | S | Approved |
| 2 | Combines guest-first appointment booking with The Loop daily rehab gamification | DNA §4.1–§4.2, brand-kit §1 | S | Approved |
| 3 | Audience: adults 35–85, optimized for 60+ | DNA §3.1, DESIGN_SYSTEM header, brand-kit §1 | S | Approved |
| 4 | Bilingual ES (primary) / EN (secondary) | DNA §6, DESIGN_SYSTEM header, brand-kit §1, deck §1 | S | Approved |
| 5 | Roadmap: Beta target Q2 2026, GA Q3 2026 | DNA §5 | S | Approved (frame as roadmap, not shipped) |
| 6 | Solo end-to-end concept project, AI-augmented workflow (July 2025 → ongoing) | Intake (author) + locked provenance §2 | S | Approved |
| 7 | Documentation AI-drafted; component primitives adapted from open source (shadcn/ui, Radix, Tailwind, Lucide, 21st.dev); brand and copy original; medical claims reviewed by a practicing osteopath | Locked provenance §2 | S | Approved — disclose in Hero / Reflection / Acknowledgments |

### 4.2 Problem & Context

| # | Claim candidate | Source | Strength | Status |
|---|---|---|---|---|
| 8 | Older patients face booking friction and rehab-adherence drop-off after the clinic visit | Journey map (Booking + Post-Visit Rehab: High friction) | S | Approved |
| 9 | Tiny fonts and unclear navigation exclude seniors | Journey map (Research stage); research §themes | S | Approved (label snippet as synthesized proxy verbatim) |
| 10 | Phone-call fallback signals product failure at the moment of independence | Persona §pain points; journey map Booking stage | M | Approved |
| 11 | Carmen's "thinking" snippets are direct interview quotes | — | U | **Use [Synthesized proxy verbatim] label only** |

### 4.3 Research & Persona

| # | Claim candidate | Source | Strength | Status |
|---|---|---|---|---|
| 12 | Primary archetype: Carmen López, "Proxy-Dependent Senior" | Journey map, persona file | S | Approved |
| 13 | 5 journey stages: Awareness → Research → Booking → Clinic Visit → Post-Visit Rehab | Journey map | S | Approved |
| 14 | Friction is qualitative (Medium / High), not numeric | Journey map | S | Approved (correct earlier framing) |
| 15 | 4 synthesized themes: Booking Friction-Free, Trust Through Reliability, Personalized Exercise Confidence, Digital Literacy & Accessibility | Journey map, research.md | S | Approved |
| 16 | Carmen is AI-assisted synthesis informed by senior-UX literature | Locked provenance §2 | S | Approved — disclose openly |
| 17 | Sample size, recruitment, research dates | — | U | Mark **[Placeholder]** explicitly |

### 4.4 Constraints & Decisions

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

### 4.5 IA / Process / Flow

| # | Claim candidate | Source | Strength | Status |
|---|---|---|---|---|
| 27 | IA shift: "Medical Repository" → "Action Dashboard" | IA §1, research.md, project-init §2 | S | Approved (verbatim vocabulary lock) |
| 28 | Tab bar: Today / My Care / Chat / Profile | IA §1.1 | S | Approved |
| 29 | 86 screens documented (56 P0 / 27 P1 / 3 P2) across 13 feature prefixes | Screen ID Registry §summary | S | Approved |
| 30 | Booking is a 3-step wizard (Service → Date/Time → Details), + confirmation screen | Core Flows §4, Deck §booking steps | S | Approved |
| 31 | Daily Rehab Loop = 3–6 exercises, 10–20 min, Today-first dashboard | DNA §4.2, Core Flows §1, IA §A | S | Approved |

### 4.6 Visual Design / Design System

| # | Claim candidate | Source | Strength | Status |
|---|---|---|---|---|
| 32 | 39 components / 442 variants; 79 icons across 7 sets | UI Kit §0 | S | Approved |
| 33 | Primary CTA = Teal-700 (#0F766E); accent = Orange-700 (#C2410C); focus ring = Teal-500 (#14B8A6) | DESIGN_SYSTEM v4.2 §2, brand-kit §0, ui-kit §0 | S | Approved |
| 34 | 81 Primitive + 67 Semantic tokens; designs reference Semantics only | DESIGN_SYSTEM §2, ods §1 | S | Approved |
| 35 | Dark mode first-class; every screen ships dark variant | DNA §9.2, DESIGN_SYSTEM §2.6; Intake §1 (every screen) | S | Approved |
| 36 | Component maturity (snapshot 2026-05-07): 14 Stable / 11 Beta / 7 Candidate / 0 Deprecated | UI Kit §0 | S | Approved |
| 37 | Fonts: Merriweather (display, local variable) + Inter (UI) + Roboto Mono (data) | DNA §6.1 | S | Approved |

### 4.7 Accessibility

| # | Claim candidate | Source | Strength | Status |
|---|---|---|---|---|
| 38 | A11Y audit dates: 2026-02-09 initial, 2026-03-20 re-audit | A11Y Audit header | S | Approved |
| 39 | 14 findings; 0 open Critical / 0 open High after re-audit; 4 Medium + 3 Low open | A11Y Audit §summary | S | Approved (genuine outcome data) |
| 40 | Lighthouse a11y 82–95/100 on tested screens | A11Y Audit §3.1 | S | Approved |
| 41 | WCAG criteria tested: 2.5.8, 2.4.11, 2.4.12, 3.3.8, 1.4.3 | A11Y Audit §1 | S | Approved |
| 42 | Audit scope: Onboarding (ONBR-01..04) + Gamification (GAME-01..04 + modals) | A11Y Audit §scope | S | Approved — acknowledge it's not full-product |
| 43 | Sign-off pending (QA Lead, UX Designer, PM, A11y Specialist) | A11Y Audit §9 | S | Approved — disclose honestly |

### 4.8 Impact / Metrics

| # | Claim candidate | Source | Strength | Status |
|---|---|---|---|---|
| 44 | North Star = Weekly Adherence Rate | Success Metrics §NSM, research §NSM rationale | S | Approved |
| 45 | KPI **targets** (not outcomes): booking >90%, exercise >75%, DAU/MAU >25%, 3+ day streak >40%, badge unlock 1.5+, cheat <5% | Success Metrics §KPI set | S | Approved as **targets**, never as measured outcomes |
| 46 | Booking abandonment rate, baseline appointment success — current-state metrics | — | U | None captured. Mark **[Placeholder]**; frame Impact as measurement strategy |
| 47 | Guardrails: zero night notifications (22:00–07:00); zero unresolved critical/high a11y defects pre-rollout | Success Metrics §guardrails | S | Approved |

### 4.9 Voice / Localization

| # | Claim candidate | Source | Strength | Status |
|---|---|---|---|---|
| 48 | Spanish is primary; English secondary; copy written ES-first | brand-kit §2.4, DNA §9.3, deck §purpose | S | Approved |
| 49 | Sentence case in-app; Title Case only for marketing display | DNA §8, ods §0, style-guide | S | Approved |
| 50 | Banned words: revolutionary, seamless, cutting-edge, simply, just, easily | brand-kit §2.1, style-guide §2.3 | S | Approved |

### 4.10 Tech / Privacy

| # | Claim candidate | Source | Strength | Status |
|---|---|---|---|---|
| 51 | Stack: Next.js 15 (App Router, React 19), Tailwind v4, shadcn/ui + Radix, Supabase, next-pwa, next-intl, Framer Motion, Vercel EU | DNA §6, DESIGN_SYSTEM §1 | S | Approved |
| 52 | EU hosting (Frankfurt / Paris) for GDPR; Ley 41/2002 Art. 17 medical-record retention (7 years) | DNA §7.1 | S | Approved |

### 4.11 Process / Methodology

| # | Claim candidate | Source | Strength | Status |
|---|---|---|---|---|
| 53 | Self-review walkthroughs against the prototype using my own questionnaire; surfaced improvements for the 60+ flow | Locked provenance §2 | S | Approved — frame as method honesty, not usability testing |
| 54 | Informal peer review by a peer whose professional role is interviewer; conducted via interviews and phone calls | Locked provenance §2 | S | Approved — disclose accurately, not a structured heuristic eval |
| 55 | Medical-claim review by a practicing osteopath | Locked provenance §2 | S | **Approved — disclose as a strength** |

### 4.12 What's Unsupported

| # | Claim candidate | Source | Strength | Status |
|---|---|---|---|---|
| 56 | External usability test results | — | U | Frame as recommended validation plan |
| 57 | A/B test results, before/after retention/adherence/conversion lifts, sample size, recruitment, research dates, direct interview verbatims | — | U | All marked **[Placeholder]** or **[Recommended KPI]** |

---

## 5. Open Questions — Resolution Index

All 20 open questions from the Phase 1 working set are now resolved.

| # | Question | Resolution |
|---|---|---|
| 1 | Doc-owner labels vs solo project | **Resolved.** AI-drafted documentation uses role-bucket scaffolding; no real team. Disclosed in §2 Provenance. |
| 2 | Scope: v1 → v2 evolution vs Jan 15 onward | **Resolved.** Scope expanded to cover July 2025 → ongoing (§1.1). |
| 3 | v1 → v2 pivot ownership | **Resolved.** AI-aided strategic decision, owned by me. |
| 4 | Concrete milestones by today | **Resolved.** Brand kit + design system locked (May 8, 2026); 86 screens hi-fi in Figma; A11Y audit complete (Feb 9 + Mar 20 re-audit); static prototype. No external usability test. |
| 5 | Remaining ~4 weeks plan | Deferred to Reflection / "Next Validation" section. |
| 6 | Cursor / Claude Code usage | **Resolved.** Documentation generation + Figma scaffolding + design-side scripting. No shipped product code. |
| 7 | Adobe CC usage | **Resolved.** Photoshop, Illustrator, Acrobat, Firefly. |
| 8 | Carmen provenance | **Resolved.** AI-assisted synthesis informed by senior-UX literature. Disclosed. |
| 9 | Informal usability testing | **Resolved.** Self-review only — no external testing. Disclosed honestly. |
| 10 | Heuristic eval / peer review | **Resolved.** Informal review by peer (professional interviewer) via interviews + phone calls. Disclosed accurately. |
| 11 | Research artifacts beyond journey map | **Resolved.** None. |
| 12 | Quantitative outcomes beyond A11Y audit | **Resolved.** None. A11Y audit is the only documented quantitative outcome. |
| 13 | KPI baselines | **Resolved.** None captured. Targets only. Frame Impact as measurement strategy. |
| 14 | Hi-fi screen coverage | **Resolved.** All 86 screens hi-fi. |
| 15 | Prototype URL | **Resolved.** Static frames only. No coded prototype. |
| 16 | ES + EN specimens | **Resolved.** Every screen ES + EN. |
| 17 | Dark-mode specimens | **Resolved.** Every screen dark variant. |
| 18 | Photo/picture assets | **Resolved.** Mix — AI-generated + other. No real patients depicted. |
| 19 | June 15 handoff plan | **Resolved.** Portfolio artifact + may pitch to clinic later (disclosed as a possibility, not a commitment). |
| 20 | Clinical reviewer | **Resolved.** Real practicing osteopath reviewed medical claims. Disclose as a strength. |

### 5.1 Residual placeholders in the case study

These will appear with explicit labels in the draft:

| Element | Label |
|---|---|
| Carmen sample size, recruitment, dates | `[Placeholder]` — n/a, AI-synthesized archetype |
| External usability test results | `[Placeholder]` — not conducted; recommended next validation |
| Booking abandonment, time-on-task, support dependency baselines | `[Placeholder]` — to be captured at beta launch |
| Post-launch adherence, retention, conversion outcomes | `[Recommended KPI]` — measurement plan only |
| Heuristic evaluation against Nielsen 10 | `[Needs validation]` — not conducted as a structured eval |

---

## 6. Risks & Disclosures Surface

Items the case study must disclose clearly to protect credibility:

| Disclosure | Where in case study |
|---|---|
| AI-augmented workflow (Claude, ChatGPT, Gemini, Claude Code, Cursor) | Hero · Reflection · Acknowledgments |
| Open-source primitives adapted (shadcn/ui, Radix, Tailwind, Lucide, 21st.dev) | Design System section · Acknowledgments |
| Original fictional brand — no real clinic affiliation | Hero footnote · About |
| Self-review only — no external usability testing | Process · Reflection · Next validation |
| Pre-launch concept — no measured product outcomes | Impact (frame as measurement strategy) |
| Real practicing osteopath reviewed medical claims | Acknowledgments · Reflection (strength) |
| Carmen is an AI-synthesized archetype | Persona card · Research Synthesis |
| Photo assets include AI-generated illustrations | Visual Design section footnote |

---

## 7. Panel Notes Going into Phase 2

| Reviewer | Note |
|---|---|
| Senior UX Portfolio Reviewer | Source corpus is enterprise-grade. With provenance disclosed up front, the case study converts every potential weakness into method honesty. The IA shift (Medical Repository → Action Dashboard) is the clearest narrative spine. |
| Product Design Lead | Pre-launch concept means Impact = measurement strategy. The real osteopath reviewer is the case study's most credible asset and should be foregrounded. |
| UX Research Synthesizer | Carmen as AI-synthesized archetype is publishable because the persona file already labels its gaps. Carry the `[Synthesized proxy verbatim]` pattern into the draft. |
| Senior Visual / UI Designer | Design system (442 variants, full token architecture, dark mode, a11y baked in) is the strongest visible asset and the most defensible deliverable for a Junior portfolio. Lead the Visual Design section with it. |

---

## 8. Workflow Status

| Phase | Status |
|---|---|
| 0 — Intake | ✅ Complete |
| 1 — Discovery | ✅ Complete (this document) |
| 2 — Outline review | ⏭ Next |
| 3 — Draft | Pending |
| 4 — Critique | Pending |
| 5 — Final | Pending |

---

## 9. Next Action

Author replies **Continue** to start Phase 2 — Outline review. Phase 2 will deliver:

- 16-section landing-page outline with one-line summary per section
- Hero title options (3 candidates)
- Narrative arc selection (problem-led / decision-led / outcome-led — given the pre-launch status, decision-led is the strongest fit)
- Asset placement plan (where each visual goes)

Gate 2 will require explicit author approval before drafting begins in Phase 3.
