# Osteóplus — Open Questions Resolved

> Resolve before publishing the case study. Grouped by category per v2 prompt §13.2.  
> Status: locked against the current evidence rules and ready to sync with `01-case-study.md`.

---

## Evidence rule locked for publish

Do not invent missing research or product metrics. Carmen is an AI-assisted synthesized archetype, not a real patient. No external usability testing has been conducted. No post-launch product metrics exist. The case study should frame impact as a measurement strategy, with documented targets and recommended KPIs clearly separated from actual outcomes.

**Important correction:** Journey-map friction data is qualitative, not numeric. Use Medium / High labels unless a future source document provides exact numeric friction scores.

---

## 1. Role & ownership

| # | Question | Locked answer | Case-study action |
|---|---|---|---|
| 1.1 | Are you comfortable defending the role split (Owned end-to-end / AI-assisted execution) in a 30-minute interview? | Yes. Use the locked framing: **Owned end-to-end. AI-assisted execution.** Defend with three specific decisions: Today view as default, 56px primary CTAs, and no punitive streak loss. | Keep §1 Role as written. Prepare the three examples for interviews. |
| 1.2 | Will you list AI tools by name on a public portfolio? | Yes. Keep the AI tools visible but precise: **Claude, Claude Code, ChatGPT, Gemini, Cursor** for documentation drafting, token generation, scaffolding, and component work. Final decisions, synthesis, and design judgment were the author's. | Update §1 Tools and Appendix tool list. |

---

## 2. Timeline & team

| # | Question | Locked answer | Case-study action |
|---|---|---|---|
| 2.1 | Final timeline label — keep "July 2025 → June 2026 · ongoing" or change to a specific status string? | Keep: **July 2025 → ongoing** until launch. It covers the July 2025 brief, December 2025 v1→v2 pivot, and Jan 15 → Jun 15, 2026 focused design sprint. | Keep Hero / Snapshot timeline consistent. |
| 2.2 | Confirm the solo framing — no collaborators? | Confirm as: **solo end-to-end concept project with AI augmentation.** Mention one informal peer review only if needed, and label it as informal feedback, not a structured heuristic evaluation. | Keep solo framing; do not imply a product team or client team. |

---

## 3. Tools

| # | Question | Locked answer | Case-study action |
|---|---|---|---|
| 3.1 | Is the tool list complete? Any missing tools? | Use: **Figma, Adobe CC (Photoshop, Illustrator, Acrobat, Firefly), Claude, Claude Code, ChatGPT, Gemini, Cursor.** Add only tools that materially shaped the design output. | Update §1 Tools and Appendix. |
| 3.2 | Specify Figma plan? | Drop this question. The Figma plan is not relevant for a portfolio case study. | No case-study mention needed. |

---

## 4. Research methods & validation

| # | Question | Locked answer | Case-study action |
|---|---|---|---|
| 4.1 | Insert exact numeric friction scores from `Mapping_Senior_Digital_Health_Journey.md`? | No. Replace the numeric-score instruction. Use qualitative labels only: **Awareness — Medium, Research — High, Booking — High, Clinic Visit — Medium, Post-Visit Rehab — High.** | Update §4 PROB-01, §13 placeholders, §14 reflection, and Appendix claims. |
| 4.2 | Is Carmen López a real patient, a composite based on practitioner observations, or a desk-research synthesis? | Carmen López is an **AI-assisted synthesized archetype informed by senior-UX literature and project documentation**, not a real patient and not proof of a multi-participant study. | Tighten §5 persona framing. |
| 4.3 | Will you conduct usability testing before launch? | Current answer: **not yet.** External usability testing has not been conducted. Recommended next validation: 5–8 adults 60+ on booking, Today view, Daily Rehab Loop, Pain Interrupt comprehension, and Smart Arrival. | Keep validation as next step unless testing is actually run. |
| 4.4 | Direct quotes — are any Carmen verbatims real? | No. Treat all quote-like Carmen content as **`[Synthesized proxy verbatim]`**, not direct user quotes. Promote only if real participant or stakeholder evidence exists. | Keep all quote-like content labeled. |

---

## 5. Actual metrics

| # | Question | Locked answer | Case-study action |
|---|---|---|---|
| 5.1 | No post-launch metrics exist yet. Is it OK for Impact to be a measurement strategy? | Yes. This is the correct framing. No post-launch metrics and no KPI baselines exist; the only documented quantitative outcome is the accessibility audit. | Keep §13 as measurement strategy. |
| 5.2 | After launch, will you update the case study with real metrics? | Recommended: yes. Schedule a post-Beta refresh. Four weeks after Beta, replace `[Expected impact]` rows with `[Documented post-launch]` only where real data exists. | Add to post-publish refresh checklist. |
| 5.3 | Booking Success Rate target `>90%` — organizational commitment or designer aspiration? | Treat it as a **documented target**, not a measured outcome or organizational commitment. Use: **`[Documented target from Success Metrics — no organizational commitment]`**. | Update §13 target table. |

---

## 6. Visual assets

| # | Question | Locked answer | Case-study action |
|---|---|---|---|
| 6.1 | Will all Phase A assets be ready before publish? | They must be ready before public publish. Minimum Phase A: HERO-01, OG-01, PROB-01, PERS-01, PROC-02, VIS-06, and SOL-01 through SOL-07. | Do not publish without these assets. |
| 6.2 | Spanish copy or English placeholders in mockups? | Use canonical **Spanish-first copy** on patient-facing mockups. English-only mockups weaken the Spanish-first / English-secondary claim. | Apply to all patient-facing mockups. |
| 6.3 | Lucide icon rights? | Keep Lucide, but credit it with the other adapted open-source primitives: **Lucide, shadcn/ui, Radix UI, Tailwind CSS, and 21st.dev**. | Update Appendix and footer credits. |

---

## 7. Launch status

| # | Question | Locked answer | Case-study action |
|---|---|---|---|
| 7.1 | Will the product reach Beta Q2 2026 as the roadmap states, or is this aspirational? | Treat it as **roadmap / target**, not shipped status. Use: **Product roadmap target: Beta Q2 2026, GA Q3 2026.** | Do not imply the product is live. |
| 7.2 | Is there a real Barcelona clinic stakeholder? | Current documentation says **no real clinic affiliation**. Frame Osteóplus as an **original fictional brand / solo concept project for a Barcelona clinic context**. It may be pitched to a real clinic later, but it is not a client engagement. | Update Snapshot, Problem, and Appendix. |

---

## 8. Portfolio publication

| # | Question | Locked answer | Case-study action |
|---|---|---|---|
| 8.1 | URL slug for the case study page? | Use **`/case-studies/osteoplus`**. | Apply in Next.js route and metadata. |
| 8.2 | Public or behind a password? | Public, with the option to restrict appendix details or specific assets if needed. | Publish public by default. |
| 8.3 | Link from a portfolio index page or standalone? | Use a standalone case study page linked from the portfolio index. | Do not bury the page in a card grid only. |
| 8.4 | Print/PDF version? | Not required for launch. Add later only if recruiters ask. | No launch blocker. |

---

## 9. Pre-publish checklist

- [ ] All `[Placeholder]` markers in the case study Markdown are either filled or explicitly retained as evidence labels.
- [ ] Friction is shown as qualitative Medium / High labels, not numeric scores.
- [ ] Hero asset HERO-01 produced and exported.
- [ ] OG asset OG-01 produced at 1200×630.
- [ ] Minimum Phase A visuals are ready: HERO-01, OG-01, PROB-01, PERS-01, PROC-02, VIS-06, SOL-01–07.
- [ ] Domain set in metadata; replace `[your-domain]` in `03-seo-meta-block.md`.
- [ ] Personal social links set in author schema if used.
- [ ] Open-source primitives credited: shadcn/ui, Radix UI, Tailwind CSS, Lucide, 21st.dev.
- [ ] Original fictional brand / no real clinic affiliation disclosed.
- [ ] Case study reviewed end-to-end on mobile width 320–375px.
- [ ] Case study reviewed in dark mode if the portfolio supports it.
- [ ] Accessibility check: keyboard navigation, screen reader announcement on the hero, visible focus rings.
- [ ] Lighthouse score recorded: target ≥90 performance, ≥95 accessibility.
- [ ] Page load tested on slow 3G simulation.
- [ ] Recruiter test: ask a friend to skim for 30 seconds and report what they remember. Target recall: senior-friendly · PWA · Barcelona · WCAG 2.2 AA · Today view / Action Dashboard.

---

## 10. Post-publish

- [ ] Add the case study to the LinkedIn featured section.
- [ ] Share with 3 design managers and ask for focused feedback.
- [ ] Schedule a 4-week post-Beta refresh; replace `[Expected impact]` with real numbers only where data exists.
- [ ] Track which sections drive the most time-on-page if Vercel Web Analytics is enabled.

---

*End of resolved open questions.*
