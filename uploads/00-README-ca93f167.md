# Osteóplus — Phase 5 Final Deliverables

> **Author:** Edgar Bonilla G. · **Target role:** UI/UX Designer
> **Platform:** Vercel + Next.js · **Status:** Phase 5 complete, ready for asset production + publish
> **Hero title:** *From medical repository to Action Dashboard: a senior-friendly rehab PWA*

---

## What's in this folder

| # | File | What it is | Use it for |
|---|---|---|---|
| 01 | `01-case-study.md` | Full 16-section case study, polished portfolio copy | Paste into MDX or feed to `_data/` content arrays for the Next.js page |
| 02 | `02-visual-design-specs.md` | Design tokens, type scale, motion, breakpoints, component spec | Reference doc for Figma → code token sync and for the §10 Visual Design section |
| 03 | `03-seo-meta-block.md` | Next.js `metadata` export, OG image spec, Schema.org JSON-LD | Drop into `app/case-studies/osteoplus/page.tsx` |
| 04 | `04-nextjs-build-kit.md` | Component map, prop types, starter code, Tailwind config | Scaffold the Next.js page |
| 05 | `05-asset-checklist.md` | 40-asset production table with status, priority, conventions | Plan and execute the asset production sprint |
| 06 | `06-open-questions.md` | Pre-publish checklist + remaining gaps | Resolve before going public |
| 07 | `07-figma-annotation-conventions.md` | Annotation type, color, lines, callouts, per-asset patterns | Apply when annotating VIS-*, SOL-05, SOL-07, A11Y-02, and the structural diagrams |
| 08 | `08-recruiter-outreach-toolkit.md` | Connection requests, DMs, cold emails, LinkedIn post, follow-ups, response handling, tracking | Use after the case study is live to share it with recruiters and design managers |
| 09 | `09-mock-recruiter-questions.md` | Interview prep — 14 sections, model answers to AI questions, case study walkthrough, technical and behavioral, hard questions, compensation, red flags | Prep before any interview where the case study is on the table |
| 10 | `10-phase-5-plus-revision-protocol.md` | Usability test plan, findings template, label-promotion ladder, section-by-section revision guide, re-publish checklist, version history convention | Use after running real usability testing to upgrade the case study from concept-stage to validated-design |
| 11 | `11-case-study-build-instructions.md` | 12-step playbook for designing and implementing the case study page on top of the live product | Use after the live product is shipped, to build the portfolio case study page itself |
| 12 | `12-case-study-revision-instructions.md` | Comprehensive revision guide for the v1 case study — critical fixes, missing sections drafted as paste-ready HTML, design recommendations, stand-out moves | Use to revise v1 Claude Design case study into publish-ready stand-out portfolio piece |
| 13 | `13-v2-to-production-publish-guide.md` | v2 → production guide — Vercel/Next.js port, TweaksPanel framing, hero layout selection, performance optimization, design refinements, new stand-out moves, pre-publish QA, post-publish iteration plan | Use when you have v2 done in Claude Design and need to ship it to public Vercel domain |

---

## Read order

1. **`01-case-study.md`** — the case study itself, the actual portfolio content.
2. **`06-open-questions.md`** — what you still need to decide or fill before publishing.
3. **`05-asset-checklist.md`** — the asset production plan, sequenced by priority.
4. **`07-figma-annotation-conventions.md`** — apply when you start annotating mockups (Phase A asset work).
5. **`02-visual-design-specs.md`** — the design system reference, mainly for §10.
6. **`04-nextjs-build-kit.md`** — when you're ready to scaffold the page on Vercel.
7. **`03-seo-meta-block.md`** — last, when you're ready to publish.
8. **`08-recruiter-outreach-toolkit.md`** — after the case study is live, when you start sharing it.
9. **`09-mock-recruiter-questions.md`** — before any interview. Re-read sections 1, 2, and the 60-second walkthrough the morning of every interview.
10. **`10-phase-5-plus-revision-protocol.md`** — only when you're ready to run usability testing. Don't read until you have participants lined up.
11. **`11-case-study-build-instructions.md`** — read if you're about to build the case study page from scratch.
12. **`12-case-study-revision-instructions.md`** — read if you have a v1 case study built and want to upgrade it to publish-ready.
13. **`13-v2-to-production-publish-guide.md`** — **read now if you have v2 done in Claude Design and need to ship to production.** Covers Vercel port, performance, design refinements, bonus features, pre-publish QA.

---

## Quality bar applied

All 13 critique fixes from Gate 4 have been integrated:

- **F1** Role line reframed (Owned + AI-assisted execution, with human judgment explicit) — §1 Hero
- **F2** Decision table Result column uses explicit `[Documented]` / `[Expected impact]` / `[Recommended KPI]` labels — §9
- **F3** Synthesized verbatims labeled — §5, §4
- **F4** Friction-score placeholders flagged with action note — §4, §5
- **F5** Reflection lead rewritten to frame evidence discipline as design choice, not apology — §14
- **F6** Visual placeholders use specific screen IDs throughout — all sections
- **F7** Tools split into Design / AI — §1 Hero
- **F8** Full type scale with px values — §10 Visual Design + `02-visual-design-specs.md`
- **F9** TL;DR bullet 3 tightened — §2
- **F10** Status differentiates design deliverable from product roadmap — §1, §3
- **F11** OG image dimensions + filename specified — `03-seo-meta-block.md`
- **F12** 7-day and 30-day retention added — §13 + `01-case-study.md` Impact section
- **F13** Anchor IDs in component map — `04-nextjs-build-kit.md` + `03-seo-meta-block.md`

---

## What this represents

A v2-prompt-compliant portfolio case study for a first-portfolio designer with senior-grade work, honest AI tooling disclosure, evidence-disciplined claims, and a measurement strategy in lieu of post-launch metrics. The case study trades fabricated impact for transparent evidence labeling — which is what 2026 recruiters and design managers actually scan for.

The most distinctive moves:

- Naming the IA shift (Medical Repository → Action Dashboard) as the case study's centerpiece, with a before/after artifact.
- Disclosing AI-assisted execution honestly without overclaiming or apologizing.
- Building accessibility into the token system, not appended as a final QA layer.
- Refusing to fabricate metrics — and instead presenting a rigorous measurement strategy tied to the documented Weekly Adherence Rate North Star.
- Choosing patient safety (Pain Interrupt Modal at pain ≥ 7) over engagement metrics, and labeling the trade-off honestly.

---

*Phase 5 complete. Workflow exited at Gate 5 — final delivery.*
