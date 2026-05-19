# Open Questions

**Project:** Osteóplus UX Case Study
**Document:** `00-source-inventory/open-questions.md`
**Status:** ✅ All resolved at Gate 1
**Version:** 1.0.0
**Date:** 2026-05-17

---

## Purpose

Track every gap surfaced during Phase 1 Discovery and how each was resolved. Items still flagged as `[Placeholder]`, `[Recommended KPI]`, or `[Needs validation]` will appear with those labels in the case-study draft.

**Status:** All 20 working questions resolved. 5 residual placeholders carried into the draft with explicit labels.

---

## Resolution index

### A. Role & ownership

| # | Question | Resolution |
|---|---|---|
| 1 | Document "Owner:" labels (DesignOps, Product + Engineering, Brand + DesignOps) conflict with "solo project" framing | **Resolved.** Labels are role-bucket scaffolding inside AI-drafted documentation. No real team. Disclosed in `intake.md` §5 (Provenance) and §9.2 (Ownership framing). |
| 2 | Case study scope: v1 → v2 evolution vs Jan 15, 2026 design sprint only | **Resolved.** Scope expanded to cover July 2025 → ongoing (v1 brief → v2 pivot → design sprint). See `intake.md` §3. |
| 3 | v1 → v2 "Gamified Recovery Partner" pivot — author's strategic call? | **Resolved.** AI-aided, owned by author. Locked in provenance disclosures. |

### B. Timeline & milestones

| # | Question | Resolution |
|---|---|---|
| 4 | What concretely shipped by today (May 17, 2026, Month 4 of 6)? | **Resolved.** Brand kit + design system locked (May 8, 2026); 86 hi-fi screens in Figma (all priorities); A11Y audit complete (Feb 9 + Mar 20 re-audit); static prototype only. No external usability testing. |
| 5 | Plan for remaining ~4 weeks (May 17 → Jun 15) | Deferred to the Reflection / "Next Validation" section of the draft. Not blocking Phase 2. |

### C. Tools

| # | Question | Resolution |
|---|---|---|
| 6 | Cursor / Claude Code usage | **Resolved.** Documentation generation + Figma scaffolding + design-side scripting. No shipped product code. |
| 7 | Adobe CC apps | **Resolved.** Photoshop, Illustrator, Acrobat, Firefly. |

### D. Research methods & validation

| # | Question | Resolution |
|---|---|---|
| 8 | Carmen López provenance: real interviews / desk research / synthesis | **Resolved.** AI-assisted synthesis informed by senior-UX literature. Disclosed in `intake.md` §5. |
| 9 | Any informal usability testing (friend, family, senior contact)? | **Resolved.** Self-review only — no external testing. Frame as method honesty; recommend external 60+ testing as next validation step. |
| 10 | Heuristic eval / expert review / peer review documented? | **Resolved.** Informal review by a peer (professional interviewer) via interviews and phone calls. Not a structured heuristic evaluation. Disclosed accurately. |
| 11 | Research artifacts beyond the journey map (interview scripts, recruitment notes)? | **Resolved.** None. |

### E. Actual metrics

| # | Question | Resolution |
|---|---|---|
| 12 | Quantitative outcomes beyond the A11Y audit (Lighthouse 82–95)? | **Resolved.** None. A11Y audit is the only documented quantitative outcome. |
| 13 | KPI baselines captured (current-state booking abandonment, etc.)? | **Resolved.** None captured. Targets locked from Success Metrics; baselines deferred to beta launch. Frame Impact as measurement strategy. |

### F. Visual assets

| # | Question | Resolution |
|---|---|---|
| 14 | Hi-fi screen coverage (of 86 total) | **Resolved.** All 86 screens hi-fi. |
| 15 | Live prototype URL | **Resolved.** Static frames only. No coded prototype, no Vercel deploy, no GitHub repo for the product. |
| 16 | ES + EN specimens per screen | **Resolved.** Every screen has ES + EN specimens. |
| 17 | Dark-mode specimens | **Resolved.** Every screen has dark variant. |
| 18 | Photo / picture assets | **Resolved.** Mix — AI-generated illustrations + other sources. No real patients depicted. |

### G. Launch status

| # | Question | Resolution |
|---|---|---|
| 19 | June 15 handoff plan | **Resolved.** Portfolio artifact; may pitch to a real clinic later (disclosed as a possibility, not a commitment). |
| 20 | Clinical / medical reviewer | **Resolved.** Real practicing osteopath reviewed medical claims. **Disclose as a credibility strength** in Reflection and Acknowledgments. |

---

## Residual placeholders carried into the draft

These five items remain unresolved by intent — they're honest gaps the case study discloses with explicit labels.

| Element | Label | Where it appears |
|---|---|---|
| Carmen sample size, recruitment, dates | `[Placeholder]` — n/a, AI-synthesized archetype | Persona card, Research Synthesis |
| External usability test results | `[Placeholder]` — not conducted; recommended next validation | Process, Reflection, Impact |
| Booking abandonment, time-on-task, support-dependency baselines | `[Placeholder]` — to be captured at beta launch | Impact (measurement strategy) |
| Post-launch adherence, retention, conversion outcomes | `[Recommended KPI]` — measurement plan only | Impact |
| Structured heuristic evaluation (Nielsen 10) | `[Needs validation]` — not conducted; informal peer review only | Process, Reflection |

---

## Disclosures queued for the draft

To convert these gaps and the AI-augmented workflow into method honesty (not weakness), the case study must disclose the following clearly. Suggested home per disclosure:

| Disclosure | Where in case study |
|---|---|
| AI-augmented workflow (Claude, ChatGPT, Gemini, Claude Code, Cursor) | Hero · Reflection · Acknowledgments |
| Open-source primitives adapted (shadcn/ui, Radix, Tailwind, Lucide, 21st.dev) | Design System section · Acknowledgments |
| Original fictional brand — no real clinic affiliation | Hero footnote · About |
| Self-review only — no external usability testing | Process · Reflection · Next Validation |
| Pre-launch concept — no measured product outcomes | Impact (frame as measurement strategy) |
| **Real practicing osteopath reviewed medical claims** | Acknowledgments · Reflection (strength) |
| Carmen is an AI-synthesized archetype | Persona card · Research Synthesis |
| Photo assets include AI-generated illustrations | Visual Design section footnote |

---

## Phase 4 critique reminder

At Phase 4 (self-audit), confirm:

- [ ] Every placeholder above appears with its explicit label in the final draft
- [ ] No claim asserts a measured outcome the product cannot back
- [ ] Carmen's "thinking" snippets carry `[Synthesized proxy verbatim]` labels
- [ ] No "users loved X" / "adherence rose by Y%" language anywhere
- [ ] AI-augmented workflow is disclosed in the Hero or first scroll
- [ ] Real osteopath reviewer is foregrounded in Acknowledgments
- [ ] Open-source primitives are credited by name

---

## Version history

| Version | Date | Changes |
|---|---|---|
| **1.0.0** | **2026-05-17** | Initial resolution index of 20 working questions at Phase 1 Discovery |
