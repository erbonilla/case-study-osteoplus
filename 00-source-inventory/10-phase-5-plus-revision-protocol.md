# Osteóplus — Phase 5+ Revision Protocol

> The playbook for upgrading the case study from concept-stage to validated-design after you run real usability testing. Use this as a step-by-step guide: test → capture → revise → re-publish.

---

## 0. Why this matters

The case study you have today is **concept-stage with labeled evidence gaps**. After usability testing, you can promote those labels to documented findings — and the case study becomes a meaningfully stronger portfolio piece without rewriting the work, only the evidence.

**The portfolio multiplier.** A case study that includes *"I tested my hypothesis with N users, here's what I learned, here's what I changed"* reads as the work of a designer who can be trusted with real product decisions. That single signal often beats years of unvalidated experience.

**The honesty multiplier.** If testing surfaces that a decision was wrong, document it. *"Decision X failed in testing. I iterated to Y based on evidence Z"* is the strongest possible portfolio move. Recruiters reward designers who adapt to evidence over designers who defend.

---

## 1. The usability test plan

A practical, runnable plan tuned for Osteóplus and your situation (solo, Costa Rica-based, bilingual, target audience 60+).

### 1.1 Participants

**Target.** 5–8 adults 60+. (5 is the documented "good enough" threshold per Nielsen for finding ~85% of usability issues; 8 buys you ~95% and lets you exclude up to 3 if needed.)

**Recruitment criteria.**

- Age 60+ (some 70+ if possible — they stress-test the floor harder).
- Primary language Spanish. Include 1–2 bilingual ES/EN if available.
- Mixed digital confidence (don't recruit only iPad-native seniors).
- Has a smartphone they use at least weekly.
- Some experience with chronic pain, physiotherapy, or rehab (matches the audience).
- Excludes: anyone in active mental health crisis, anyone currently in acute pain ≥ 7 (ethical safeguard — they're not test subjects for a pain interrupt).

**Where to find them.**

| Source | Notes |
|---|---|
| Your network — family, family of friends, neighbors | Free, fastest, but introduces bias. Diversify across age and tech confidence. |
| Local community centers (Costa Rica or Barcelona via remote video call) | Best representativeness. Approach with a flyer or short presentation. |
| Senior wellness or rehab clinics | Direct match to the audience. May need to partner with one as research site. |
| UserInterviews.com / Respondent.io | Paid recruiting. ~$50–100/participant. Worth it if your network can't deliver. |
| Local Reddit / Facebook senior groups | Free, lower quality, slower response. |

**Compensation.** $25–50 per hour (or local equivalent) is fair. Even friends/family should be acknowledged with a thank-you (coffee, small gift) — it's professional practice.

### 1.2 Test format

**60-minute moderated session** — remote via Zoom or in-person.

**Remote setup** for participants who aren't local:

- Test on their own phone (real-device behavior matters more than fidelity).
- Screen-share from their phone (iOS: built-in, Android: Google Meet phone share or AnyDesk).
- You watch + take notes on a second device. Record only with consent.
- Backup plan: if they can't screen-share, ask them to point a second phone or webcam at the test phone.

**In-person setup**:

- Their phone or your test device (their own is better).
- Quiet space, daylight if possible.
- You sit slightly off to the side, not facing them — reduces performance pressure.
- Record with their phone's camera angled at the screen, plus audio recorder. (Or with a dedicated recording app like Lookback, with consent.)

### 1.3 Tasks (in priority order)

| # | Task | Screens | What you're measuring |
|---|---|---|---|
| **1** | **Book an osteopathy appointment** | BOOK-01 → BOOK-04 | Booking task success rate. Whether guest-first booking removes the phone fallback. |
| **2** | **Complete today's first rehab exercise** | HOME-01 → EXER-01 → EXER-03 → EXER-05 | Whether the Today view + Daily Rehab Loop surface the next action clearly. Rep counter usability. |
| **3** | **Tell me what would happen if you felt strong pain during the exercise** | Show EXER-C05 (Pain Interrupt Modal) directly | Pain Interrupt comprehension. Whether the safety mechanism is *understood*, not just present. |
| **4** | **Find directions to the clinic for your appointment** | HOME-01 Smart Arrival card → maps deep link | Smart Arrival comprehension and completion. |
| **5** | **Switch the app to English, then back to Spanish** | Settings → Language toggle | Language toggle discoverability. |
| **6** | **Find where you'd see your progress this week** | DASH-01 or PROF-01 | Gamification hub discoverability — but don't lead them to it. |

**Ethical safeguard on task 3.** You ask hypothetically. You do **not** induce real pain. Never. The task is comprehension of the safety mechanism, not provocation.

**Task framing language** (Spanish-first, English fallback):

> *"Imagina que tienes una cita pendiente. ¿Cómo reservarías una cita de osteopatía usando esta aplicación?"*
> *"Imagine you have a pending appointment. How would you book an osteopathy appointment using this app?"*

Open prompts — don't tell them which button to tap. Watch them search.

### 1.4 What to measure

**Quantitative.**

| Metric | How |
|---|---|
| Task success rate | Did they complete the task without intervention? Binary per participant per task. |
| Time-on-task | Stopwatch or app timestamps. |
| Error rate | Count of wrong taps, backtracks, dead-ends. |
| Help requests | Count of times they asked you a question mid-task. |
| SUS score | Standard System Usability Scale, 10 questions, scored 0–100. Run at end of session. |

**Qualitative.**

- Verbatim quotes (with consent, recorded).
- Visible hesitation, confusion, frustration — note timestamp and screen.
- What they say they like, find confusing, find calming/safe.
- Their language for the app — do they call it "the app," "the program," "the website"? Carmen-archetype language vs. designer language.
- Whether they say "I'd ask my daughter to help me" — direct test of the proxy-dependency pattern.

**Bilingual review (separate pass).**

- Run 2–3 participants in Spanish only.
- Capture: Does the copy feel respectful? Are any medical or UI words confusing? Is the tone calm or pressuring? Does anything feel like marketing language they distrust?

### 1.5 Consent and ethics

**Required, non-negotiable.**

- Written consent in their primary language, signed before the session.
- Right to withdraw at any moment without explanation. State this verbally at session start.
- Recording consent — separate checkbox. Audio-only is less invasive than video.
- Data retention policy — how long you'll keep recordings, who can access them, when they're deleted.
- GDPR / LOPDGDD compliance if any participants are in the EU (Barcelona scenario).
- No pain provocation — task 3 is hypothetical only.
- Compensation disclosed up front.

**Consent form skeleton** *(adapt to your jurisdiction)*:

```
Project: Osteóplus usability study
Researcher: Edgar Bonilla G.
Date: [date]

Purpose. To understand how this app works for adults 60+. You will
complete a few simple tasks and share your honest reactions. There
are no right or wrong answers — we are testing the app, not you.

What we'll record. [Audio only / audio + screen / audio + video — pick one].
Recordings will be kept until [date] and used only for this study
and the resulting case study. No personal identifiers will be
published. You may request deletion at any time.

Your rights.
- You can stop at any time, with no explanation.
- You can ask for any moment to be deleted from recording.
- You will not be asked to do anything that causes pain.
- Compensation: [amount], paid regardless of completion.

Signature ______________________ Date ______________________
```

---

## 2. The findings capture template

Use this format for every session. One file per participant.

```markdown
# Osteóplus usability — Session [N]

**Participant code:** P[N]   *(no real names in the report)*
**Date:** YYYY-MM-DD
**Duration:** XX min
**Format:** Remote / In-person
**Language:** ES / EN / Both
**Device:** [model, OS version]
**Consent:** Recorded ✓ / Audio only ✓ / No recording

## Background (2–4 lines)
Age range, primary language, digital confidence, relevant health context.

## Per-task notes

### Task 1 — Book an appointment
- **Success:** Yes / No / Partial
- **Time:** mm:ss
- **Errors:** count
- **Help requests:** count
- **Observations:**
  - [Screen ID]: [what happened]
- **Verbatim quotes:** [with timestamp]

### Task 2 — Complete today's first exercise
[same structure]

### Task 3 — Pain Interrupt comprehension
- **Comprehension:** Clear / Partial / Unclear
- **Their interpretation:** [in their own words]
- **Observations:**

### Task 4 — Smart Arrival
[same structure]

### Task 5 — Language toggle
[same structure]

### Task 6 — Progress hub
[same structure]

## SUS score: [0–100]

## Cross-cutting observations
- Things they consistently noticed (positive or negative)
- Their language for the app
- Whether proxy-dependency came up ("I'd ask my daughter…")

## Surprises
What you didn't expect.

## Quotes worth using (with consent)
- "[Verbatim quote]" — P[N], task X
- ...
```

---

## 3. Synthesizing across sessions

After all sessions, build a synthesis report.

```markdown
# Osteóplus usability findings — synthesis (N = [count])

## Quantitative summary
| Task | Success rate | Avg time | Median errors |
|---|---|---|---|
| 1 Book | X/N | mm:ss | n |
| 2 Today + Rehab | X/N | mm:ss | n |
| ...

SUS average: XX (range YY–ZZ)

## Themes (cross-participant, 3–5 themes max)

### Theme 1: [name]
- **Evidence:** N of N participants exhibited this.
- **Observations:** ...
- **Quote:** "[Best verbatim from one participant]"
- **Design implication:** [What this means for the product]
- **Action:** [Iterate / Validate / Document]

### Theme 2: [name]
[same structure]

## Validated decisions
Decisions in the case study that testing supports.

- **56px primary CTAs.** Task success rate XX% for booking. [Confidence: High]
- **Today view as default.** N of N participants located today's exercise within YY seconds. [Confidence: High]
- ...

## Decisions that need iteration
Decisions in the case study that testing surfaced as weak.

- **[Decision name].** Evidence: ... Proposed iteration: ...

## Surfaced gaps not in the original case study
Things the case study didn't anticipate.

- ...

## Recommendations
Concrete design changes informed by testing.

## Next-validate list
What still needs testing.
```

---

## 4. The label-promotion ladder

This is the heart of the revision protocol. Every label in the current case study has a defined evidence threshold for promotion.

| From label | To label | Evidence required |
|---|---|---|
| `[Placeholder]` | (real value) | Source document or direct measurement. Examples: friction scores from journey-map source file; sample sizes from a real recruitment list. |
| `[Assumption]` *(e.g. the JTBD)* | `[Documented from N participants]` | A real participant statement matching the assumption, recorded and consented. |
| `[Synthesized proxy verbatim — source method unconfirmed]` | `[Verbatim from P-N]` | Recorded statement with consent, with participant code. |
| `[Expected impact]` *(designer reasoning)* | `[Documented validation finding]` | Quantitative measurement from testing — task success rate, time-on-task, comprehension level — with sample size. |
| `[Recommended KPI]` *(not committed)* | `[Measured baseline: X% from N participants]` | An actual measurement with sample size disclosed. |
| `[Documented target]` *(target signal, e.g. >90%)* | `[Documented target + early baseline: X%]` | Both the target and an observed early data point. |
| `[Documented guardrail]` *(e.g. Pain Interrupt Modal)* | `[Documented guardrail + validated comprehension: X% of N participants understood]` | Comprehension measurement specifically for the guardrail. |

**Promotion rules.**

1. Sample size must be disclosed every time. `[Measured baseline: 80% task success]` is incomplete. `[Measured baseline: 80% task success (4 of 5 participants)]` is complete.
2. Never promote on insufficient evidence. If only 2 participants completed a task, label as `[Preliminary signal: X% (2 of 2)]` and call out the small sample.
3. Demotion is allowed. If testing surfaces that a `[Documented strategy]` decision *failed*, demote to `[Original strategy, revised after testing]` and document the iteration. Honesty wins.

---

## 5. Section-by-section revision guide

What changes in each of the 16 sections after testing.

### §1 Hero

- **Status field**, `Design concept · targeting live launch` → `Design concept · validated with N adults 60+ · targeting live launch`.
- Tools, timeline, role: unchanged.
- Hero asset: consider adding a small validation badge in the corner (e.g., *"Validated with 6 users 60+ · Aug 2026"*).

### §2 TL;DR / Recruiter Skim

- **Bullet 5**, change from `Impact framing` to:
  > **Validation findings + measurement strategy.** Tested with N adults 60+ — [headline finding, 1 line]. Impact still anchored on Weekly Adherence Rate (North Star) for post-launch tracking.

### §3 Project Snapshot

- **Status — design** row: same update as Hero.
- Optionally add a new row: **Validation** · `N adults 60+ · moderated remote · [Month YYYY]`.

### §4 Problem & Context

- **Friction scores** — `[Placeholder]` → real numbers from the journey map source file (this is a fix you can do *without* testing), and now add a "validation confirmed" or "validation revised" callout per stage if testing changed the picture.

### §5 User Goals, Research & Persona

This is the section with the biggest upgrade.

- **Carmen archetype** — adjust framing:
  > Previously: *"single documented archetype, not as proof of a multi-participant study"*
  > After testing: *"Carmen López remained the design anchor throughout. The archetype was validated against N real participants who match her demographic and digital-confidence profile. Direct verbatims from those participants are included where they reinforce or revise the archetype."*

- **JTBD** — promote `[Assumption]` if a real participant said it.
- **4 themes** — add cross-participant evidence count per theme:
  > Booking friction-free: 5 of 6 participants attempted phone fallback during the test or said they would have without prompting.

- **New subsection**, *"Validation method"*:
  > Moderated remote usability testing, N = [count], Aug 2026. Sessions 60 min, Spanish-language for [count] participants, English for [count]. Tasks: booking, Daily Rehab Loop, Pain Interrupt comprehension, Smart Arrival, language toggle, progress hub. Recorded with consent.

### §6 Constraints & Success Criteria

- Mostly unchanged structurally.
- **Optional add**: a column called *"Validation status"* indicating which constraints were stress-tested in usability testing.

### §7 Process & Ideation

- **The full process** line becomes: `Research → IA → Flows → Wireframes → System → Prototype → Validation.` Add Validation as a 7th phase.
- New 1-sentence callout: *"Validation surfaced [one headline finding]. The case study reflects iteration after testing."*

### §8 Information Architecture & Flow Strategy

- **Smart Arrival before/after table**: add a third column, *"Validation"*, showing task success rate from testing.
- **Daily Rehab Loop**: same — add success rate or comprehension data per step if measured.

### §9 Design Decisions & Trade-offs

This is the section with the most label promotions.

For each of the 6 decisions, update the Result label per the promotion ladder:

| Decision | Likely promotion |
|---|---|
| Today view as default | `[Documented strategy]` → `[Documented strategy + validated: N of N located today's exercise within YY sec]` |
| Guest-first booking | `[Expected impact]` → `[Documented validation finding: N of N completed booking without intervention]` |
| 56px primary CTAs | `[Documented constraint]` → `[Documented constraint + validated: average tap accuracy XX% for primary CTAs]` |
| Pain Interrupt Modal | `[Expected impact]` → `[Documented + validated comprehension: N of N correctly interpreted the safety mechanism]` |
| No punitive streak loss | `[Documented guardrail]` → mostly unchanged (hard to test without longitudinal use), but note: *"Comprehension validated; longitudinal adherence still TBD"* |
| Pain scores encrypted | `[Documented constraint]` → unchanged (not user-testable) |

**Add a new row if testing surfaced a needed change.** Document the iteration honestly:

| Original decision | What testing showed | What I changed |
|---|---|---|
| [Original decision] | [Specific finding] | [New decision + rationale] |

### §10 Visual Design & Design System

- Token shifts: if testing included perception of color/contrast, add validation note.
- 18px senior-surface rule: if testing measured comprehension of body text, add data:
  > *"18px body type validated at arm's length for N of N participants. 16px control rejected by [count] participants as too small."*
- 48/56px targets: add measured tap success rate per target size.

### §11 Final Solution

For each of the 7 solution modules, update the Impact label per the promotion ladder. Examples:

- Module 1 (Guest-first booking): `[Expected impact] Lower booking abandonment` → `[Documented validation finding: N of N completed without phone fallback]`.
- Module 2 (Today view + Daily Rehab Loop): `[Expected impact] Increase Weekly Adherence Rate` → `[Validated: N of N completed today's exercise within YY sec on first attempt; full adherence still TBD post-launch]`.
- Module 3 (Pain Interrupt Modal): `[Documented guardrail]` → `[Validated comprehension: N of N correctly interpreted the modal's intent]`.

### §12 Accessibility, Localization & Trust

- Add usability testing platform/AT used to the testing matrix.
- If you re-ran the a11y audit after testing-driven iterations, update findings.
- **New paragraph** documenting senior-user comprehension findings:
  > *"Senior-user comprehension validated for [touch targets / type size / focus indicators / status communication]. Findings: ..."*

### §13 Impact & Metrics

**Major restructure.** Reorder the section.

1. **New top section: Validation findings** (3–5 headline findings with sample sizes).
2. **Documented targets** (unchanged, still pre-launch).
3. **Expected impact** (shrinks — most rows promote to Validation findings).
4. **Recommended KPIs** (shrinks — measured ones promote).
5. **Guardrails** (unchanged).
6. **Placeholders** (shrinks — friction scores filled in, sample sizes filled in).

The case study's defining intellectual move (evidence hierarchy) is now even stronger because it has a *Validated* tier at the top.

### §14 Reflection & Lessons Learned

- **"What I would validate next"** — shrink. Cross out (or move to "what I learned") the items now validated.
- **New subsection: "What testing surfaced that I didn't expect."** This is the highest-value section for a recruiter — it shows you adapt to evidence rather than defending your priors. Include 2–3 specific surprises and the iterations they prompted.

### §15 What this case study demonstrates

- Add 1–2 bullets:
  > → **Validation discipline.** Ran moderated testing with N adults 60+, surfaced [specific finding], iterated [specific change].
  > → **Adapts to evidence.** Documented at least one decision that testing surfaced as weak, the iteration that followed, and the validation of the new direction.

### §16 Appendix

- New subsection: **Testing artifacts.**
  - Protocol (link or attachment).
  - Consent form template.
  - Synthesis report (link, anonymized).
  - Per-session notes — keep private; don't publish raw with participant identifiers.
- Update source documents list to include testing files.
- Update open questions list — most items shrink, new ones emerge.

---

## 6. Handling the hard case — testing surfaces a fundamental flaw

What if testing shows that the Today view *confused* users more than the Repository pattern would have? Or that 56px primary CTAs were still too small?

**Options:**

1. **Iterate the design and re-test.** Build the change, test it, confirm the iteration works. Update the case study to show both versions and the evidence-driven shift.
2. **Document the finding honestly even if the iteration isn't built yet.** Show that you found the issue, label it clearly, and lay out the iteration plan.
3. **Both — and let the case study show the iteration.**

**Recommended: option (3).** A case study that says *"I tested my hypothesis, it failed, I iterated, here's what I learned"* is FAR stronger than one that pretends the original decision was right.

This is the **honesty multiplier**. A recruiter who sees *"Design decision X was tested, failed, replaced with Y based on evidence Z"* reads it as *"this person can be trusted with real product decisions."*

---

## 7. Re-publish checklist

- [ ] All labels reviewed against new evidence and promoted where supported.
- [ ] All `[Placeholder]` items either filled or kept with explicit reason.
- [ ] New `[Validation method]` subsection added in §5.
- [ ] Status updated throughout — Hero, Project Snapshot, anywhere "Design concept" appeared.
- [ ] Version note added (see §8).
- [ ] Page re-tested in Lighthouse — accessibility score still ≥ 95.
- [ ] OG image still accurate; update if hero composition changed.
- [ ] Cross-references checked — if you removed something from §13, make sure no other section pointed to it.
- [ ] Asset checklist updated (`05-asset-checklist.md`) — new validation-related assets added (e.g., synthesis report card, validation findings card).
- [ ] Open questions updated (`06-open-questions.md`) — what's left to validate.
- [ ] LinkedIn post drafted announcing the update (template in §9 below).
- [ ] Email drafted to anyone who reviewed v1 (template in §9 below).

---

## 8. Version history convention

Add a version note to the case study (footer or appendix).

```markdown
**Version history.**
- v1.0 — Initial publish ([Month YYYY])
- v1.1 — Validation pass with N adults 60+ ([Month YYYY])
- v1.2 — First cohort live, Weekly Adherence Rate baseline ([Month YYYY])
- v2.0 — Major revision after first 90 days of live data ([Month YYYY])
```

This signals to recruiters that the case study is **maintained** — a living artifact, not a one-and-done.

---

## 9. Outreach update after revision

### LinkedIn post template

> Quick update on Osteóplus.
>
> I ran moderated usability testing with [N] adults 60+. [1–2 sentence headline finding — what was validated, what surprised you, what you iterated].
>
> The case study now reflects the testing — labels promoted from "expected" to "documented," one decision iterated based on what testing surfaced, and a new "what I didn't expect" section in the reflection.
>
> Updated case study: [your-domain]/case-studies/osteoplus
>
> Grateful to the participants who gave me their time.

### Direct follow-up to anyone who reviewed v1

> Hi [Name] —
>
> Quick update on the Osteóplus case study you reviewed [date].
>
> I ran moderated usability testing with [N] adults 60+. The major finding: [1 sentence]. The case study now reflects that — section [X] in particular changed substantively.
>
> Updated version: [your-domain]/case-studies/osteoplus
>
> If you have a moment to glance at the new §5 (validation method) or §13 (validation findings), I'd value any reactions.
>
> — Edgar

**Don't.**

- Re-pitch the entire case study. They've seen v1. Just point to what changed.
- Re-ask for a job. Update them. Let them come to you if they're interested.

---

## 10. When *not* to update the case study

Some changes don't justify a re-publish.

- **Single anecdotes.** "One participant said they liked the teal." Wait for the synthesis pass.
- **Edits driven by ego.** If you're tempted to update a section because you want to look better, not because evidence demands it, stop.
- **Updates that don't change a label.** If the evidence base is unchanged, you don't need a re-publish.

A good cadence is **one major revision per validation pass** (e.g., post-usability-testing in Aug 2026, post-first-cohort-launch in Q1 2027, post-90-days-live in Q2 2027). Three updates in a year is healthy; one update per week is noise.

---

## 11. What success looks like

After the v1.1 (post-testing) revision, the case study should:

- Have a top-line **Validation findings** section in §13 with 3–5 measured findings, each with sample size.
- Have a **What I didn't expect** subsection in §14 — the strongest signal you adapt to evidence.
- Show at least **one design iteration driven by testing**. Even if the iteration is small, document it.
- Pass the recruiter test: a senior designer reviewing v1.1 should say *"this person tests their work and adapts."* If they don't say that, you under-emphasized the validation pass.

---

*End of Phase 5+ revision protocol.*
