# Osteóplus — Mock Recruiter Questions & Answers

> Interview prep for UI/UX Designer roles in health tech, wellness, and sports/fitness. Built around the Osteóplus case study as your one strong piece of work. Every model answer is specific — adapt the wording, but keep the substance.

---

## 0. Strategy (read once, internalize)

**What recruiters and design managers are actually testing.** They already have your case study. The interview tests three things the case study can't: how you *think out loud*, how you *handle pressure*, and whether your stated process matches your real one.

**The five truths to anchor on.**

1. **The case study earns the interview. The interview converts it.** Different deliverables, different jobs.
2. **Specificity beats theory.** "I chose 56px for primary CTAs because Carmen's tap confidence requires it" beats "accessibility is important to me."
3. **The AI question is the most important question.** Prep your answer cold. Vagueness here kills the offer.
4. **What you don't know matters as much as what you do.** Labeling gaps is design maturity, not weakness.
5. **Senior interviewers reward honesty about being early-career.** Pretending to be senior is the worst possible move.

**Three behaviors that lose interviews.**

- Defending decisions instead of explaining trade-offs.
- Saying "passionate" or "I love design" anywhere in any answer.
- Filling silence with filler. Pause, then answer. Pauses read as thoughtful, not lost.

---

## 1. The AI question (the most important question)

This is going to come up. It will be phrased differently each time. The wrong answer is vague; the wrong answer is also overclaiming. Prep the *exact sentence* below and adapt the prefix to the phrasing.

### Q1.1 — "Tell me honestly, how much of this was AI?"

**What they're testing.** Whether you can be specific about your contribution. Recruiters in 2026 are not anti-AI — they're anti-vagueness.

**Model answer.**

> I used AI tools — Claude, ChatGPT, Gemini, Cursor — for research collection and initial documentation drafts. The strategic decisions were mine: the IA pivot from a medical repository to an action dashboard, the no-punitive-streak-loss call, the 56px primary CTA decision for senior tap confidence, the design system token architecture, the choice to default to Spanish, and every trade-off I documented in the decision table. The case study itself labels what I don't know — sample sizes I don't have, validation I didn't run — rather than fabricating confidence. I think being specific about that is more useful to you than a generic "AI helped a little."

**Don't.**

- Hedge ("I mean, I used it but, you know, just a little").
- Overclaim ("I did everything myself, AI was just a spell-checker").
- Pretend AI wasn't involved.

### Q1.2 — "Walk me through one decision you made *without* AI."

**What they're testing.** Whether you can defend a single decision in detail.

**Model answer.**

> The Today view as the default landing surface. Early IA work followed a repository pattern — appointments archive as the landing screen, deep menus for resources and account. I tested it mentally against the Carmen archetype: she couldn't tell from the landing surface what she should do next. So I made the call to invert the model: surface the next meaningful action — book, attend, start today's exercise — and push deep medical info one tap deeper. The trade-off is honest: less feature inventory visible, more clarity of next action. For a patient who forgets exercises between visits, that ordering matters more than discoverability of the full plan. The case study documents it as "the pivot that defined the product."

**Don't.** Give multiple decisions. One, in depth, beats five at the surface.

### Q1.3 — "How would you defend this case study against the claim that it was entirely AI-generated?"

**What they're testing.** Whether you can speak about your judgment specifically.

**Model answer.**

> Two ways. First — I can walk you through any single decision in the case study and tell you the alternatives I rejected, the trade-off I accepted, and what I'd change with more time. AI doesn't produce that kind of grounded specificity unless a human guided it. Second — the case study labels its own evidence gaps. AI tends to confidently fill gaps rather than name them. The choice to label uncertainty is a human judgment about portfolio integrity, not an AI output. Try me on any decision in the case study and I'll show you.

**Then stop talking and let them test you.**

---

## 2. Case study walkthrough (the centerpiece)

### Q2.1 — "Walk me through your case study."

**What they're testing.** Whether you can frame your own work without rambling.

**The 60-second model walkthrough.**

> Osteóplus is a PWA-first clinic product I designed for osteopathy, physiotherapy, and rehab in Barcelona — audience adults 35–85, optimized for users 60+.
>
> The central problem: senior patients couldn't reliably find their next action in what behaved like a passive medical archive. They fell back to phone calls and asked family for help with rehab.
>
> My core decision was to shift the IA from a medical repository model to an action dashboard, with the Today view as the default landing surface.
>
> Built to WCAG 2.2 AA, 48 and 56 pixel touch targets, bilingual Spanish-first, and a Daily Rehab Loop with clinically safe gamification — no punitive streak loss, pain interrupt modal at pain 7 or above.
>
> Because it's pre-launch, I framed impact as a measurement strategy anchored on Weekly Adherence Rate rather than fabricating outcomes I can't prove.

*~130 words. 60 seconds at conversational pace.*

**Practice this until you can deliver it without notes.** Then forget the script and let it become natural.

### Q2.2 — "What's the single most important decision in this work?"

**Model answer.**

> The IA shift from a medical repository model to an action dashboard. Everything else in the case study cascades from that one call. The Today view, the Daily Rehab Loop, the soft re-engagement after missed days, the privacy posture — they all answer "what action should Carmen take right now?" instead of "where in the menu can Carmen find this?" If I'd built the same surfaces inside a repository model, none of them would work.

### Q2.3 — "What's the weakest part of this case study?"

**What they're testing.** Self-awareness. Don't pretend nothing's weak.

**Model answer.**

> The validation. Carmen is a single documented archetype, not proof of a multi-participant study. I haven't run usability testing with adults 60+ on the booking flow. I haven't validated bilingual comprehension with senior Spanish-speaking users. The case study labels those gaps in section 5 and section 13, and the validation roadmap in section 14 specifies exactly what I'd run next. But the gap is real — I'd rather own it than fake interview transcripts I don't have.

**Don't.** Pick a weakness so small it's actually a flex ("my weakness is that I care too much about pixel precision"). Recruiters smell it.

### Q2.4 — "What would you change if you started over?"

**Model answer.**

> Run usability testing with 5–8 adults 60+ before locking the booking flow. The case study assumes Carmen's friction points based on the documented journey map, but real testing would either confirm the 48/56 px targets are enough or reveal something I didn't anticipate. I'd also establish a Weekly Adherence Rate baseline before launch — without it, I can't know whether the action dashboard model actually moves the metric or just feels like it should.

---

## 3. About the work — decisions and trade-offs

### Q3.1 — "Why 56 pixels for primary CTAs instead of 48?"

**Model answer.**

> 48 is the WCAG-aligned floor. 56 is the target for primary patient actions. The distinction matters because Carmen's tap confidence isn't only about hitting the target — it's about not having to *aim*. At 48 pixels, a tremor or low-vision user can hit the target but spends cognitive effort doing it. At 56, the action feels confident. The trade-off is honest: I use vertical space more aggressively. Fewer CTAs per screen, but the ones I show are unmistakable.

### Q3.2 — "Why guest-first booking? Most apps require accounts."

**Model answer.**

> Because requiring an account is what pushes Carmen back to the phone. The documented journey map shows phone fallback as her primary failure mode at the booking stage. A required login wall recreates that failure. I rejected social SSO too — it still excludes non-tech-confident users. The trade-off is honest: returning users have weaker tracking until they opt in to an account post-booking. I accepted that. The first booking has to work.

### Q3.3 — "Why no punitive streak loss? Loss aversion is well-documented."

**Model answer.**

> Loss aversion works for fitness apps because the loss is symbolic — you broke a streak, you feel bad, you try harder. In rehab, the loss isn't symbolic. A streak loss after Carmen had a pain flare creates pressure to push through pain that's clinically unsafe. The Pain Interrupt Modal at pain 7 or above already removes her from the session by design. Punishing her for not finishing it would contradict the safety mechanism on the same screen. So I kept the streak counter — current state visible, no penalty UI. The trade-off is a weaker motivation lever. I accepted it.

### Q3.4 — "Why a pain threshold of 7, specifically?"

**Honest model answer.**

> Honestly, the threshold is a designer judgment, not a clinically validated cutoff. The case study labels it as a documented guardrail, but the *value* of 7 is something I'd want clinical sign-off on before any real launch. In a real clinical product, the pain threshold would be defined by a physiotherapist or clinical operations lead, not a designer. If hired, the first thing I'd want to do is sit with a real clinician and validate that number.

**Don't.** Make up clinical evidence you don't have.

### Q3.5 — "Why Spanish first, not English?"

**Model answer.**

> The audience is in Barcelona. Spanish is the primary language; English is secondary. Defaulting to English with a translation layer creates a UX where the bilingual user has to *change* something to get to their natural language. That's an exclusion pattern. ES-first means the audience sees their language on first paint, no toggling required. The trade-off is real — two parallel copy decks to maintain, locale persistence required — and I documented it in the constraints table.

---

## 4. About the work — missing pieces (honest framing for gaps)

### Q4.1 — "Why didn't you do user research?"

**Model answer.**

> I worked from a documented archetype — Carmen López, framed as a Proxy-Dependent Senior — and a journey map built from desk research on senior digital health literacy. I didn't run primary user interviews. The case study is transparent about that: section 5 explicitly labels Carmen as a single documented archetype, not proof of a multi-participant study. The validation roadmap in section 14 lists what I'd run next: moderated usability testing with 5–8 adults 60+, bilingual content review with senior Spanish-speaking users, pain interrupt rate as a safety guardrail with the first cohort. I'd rather label the gap than fake it.

### Q4.2 — "This is concept-stage. How do I know your decisions would survive contact with real users?"

**Model answer.**

> You don't yet. That's the honest answer. What you can know is whether my decisions are defensible — meaning I can tell you what alternatives I rejected, what trade-offs I accepted, and what would falsify each one. If usability testing showed that the Today view confused users 60+ more than the repository pattern, I'd know which decision had failed and why. That's different from a designer who can't defend any decision at all. I'm betting that defensible-but-untested beats undefendable-and-shipped.

### Q4.3 — "You haven't worked on a team. How do I know you can?"

**Model answer.**

> I haven't shipped a product with a team. That's a real gap. What I have done is make decisions, defend them with rationale, accept trade-offs, document rejected alternatives, and label what I don't know — those are the muscles I'd use in collaboration. I'd add: I want feedback. The validation roadmap in section 14 names specific things I want to validate, which means I'm explicitly looking for a team that will help me run those validations. I'm not pretending to know what I don't.

### Q4.4 — "No metrics, no shipped work, no users tested. What *should* I take from this?"

**The honest reframe.**

> Three things. One — strategic judgment: the IA pivot wasn't a feature decision, it was the product's central design call, and I named it. Two — accessibility as a token-level discipline, not appended QA. Three — evidence discipline: the entire impact section is framed as a measurement strategy with documented vs. expected vs. recommended labels, instead of inventing numbers. If you're hiring a designer who will fabricate confidence to make a portfolio look stronger, I'm not that person. If you want someone who'll label what they don't know and design rigor into the labeling itself, this case study is what that looks like.

---

## 5. About your process

### Q5.1 — "Walk me through how you started this project."

**Model answer.**

> I started with desk research on senior digital health literacy and journey mapping around the Carmen archetype. The journey map surfaced four research themes — booking friction, trust through reliability, exercise confidence, digital literacy and accessibility. From those themes I drafted the initial IA, which at first followed a repository pattern. When I tested the IA against the Carmen archetype, the repository pattern failed — she couldn't find her next action. That triggered the Repository → Action Dashboard shift. From there: flows, wireframes, design system, then high-fidelity. Each phase was documented as a source file before moving on.

### Q5.2 — "How do you decide what to design first?"

**Model answer.**

> I work from the user's highest-friction moment. The journey map showed booking and post-visit rehab as the two highest-friction stages for Carmen. So booking flow and the Daily Rehab Loop got designed first. Smart Arrival and the Today view came next because they connect the two. Gamification came last because reward systems only matter if the core actions work.

### Q5.3 — "How do you handle competing constraints?"

**Model answer.**

> I make them explicit, then design responses that don't compromise the non-negotiables. WCAG 2.2 AA and the 48/56 px touch targets are non-negotiable in this product — they set the design floor. Spanish-first is non-negotiable. Clinically safe gamification is non-negotiable. The constraints table in section 6 maps each non-negotiable to its design response. When constraints competed, I documented the trade-off and labeled the result. I never resolved a constraint by softening another.

---

## 6. About you (motivation, growth, weaknesses)

### Q6.1 — "Why healthcare? Why senior-friendly design?"

**This needs *your* real motivation.** Generic answers fail.

**Model answer template (rewrite with your specifics).**

> [Personal hook — a family member, a moment of frustration with a clinic product, a specific patient you watched struggle with technology, your own experience navigating healthcare. One sentence.]
>
> Beyond that, I'm drawn to design problems where the floor — the lowest-confidence user — sets the bar for everyone. In senior healthcare, that floor is high: tremor, low vision, low digital confidence, real safety stakes. It rules out lazy patterns. Every decision has to be defensible. That kind of discipline is what I want to build my craft around.

**Don't.** Say "I'm passionate about helping people." Everyone says it.

### Q6.2 — "What's your biggest weakness?"

**Model answer.**

> I haven't shipped a product in a real team yet. I haven't had a senior PM push back on a design call I made. I haven't run a usability test in person. I haven't presented to stakeholders who could veto my work. These are real gaps. I'm seeking a first role specifically to build them, and I'm not going to pretend I already have them.

### Q6.3 — "What do you want to learn?"

**Model answer.**

> Three things, specifically. One — how senior designers run usability testing in practice, especially with audiences who have low digital confidence. Two — how design systems evolve under real cross-functional pressure, not just designer-led decisions. Three — how to balance accessibility rigor with shipping velocity in a real org. The case study shows the framework; I want to see it operate.

### Q6.4 — "Where do you want to be in three years?"

**Model answer.**

> Mid-level designer at a company doing serious work in healthcare or accessibility, with a portfolio of two or three shipped products I can defend the same way I defend Osteóplus. I'm not chasing a title. I'm chasing the experience that lets the next case study include real validation, real metrics, and real cross-functional trade-offs instead of just documented intent.

---

## 7. Behavioral / hypothetical

### Q7.1 — "Tell me about a time you handled ambiguity."

**Model answer.**

> The entire Osteóplus project was an exercise in ambiguity. I didn't have a real client, real users, real metrics, or a real product team. I had to decide what to design for, who to design for, what success would look like, and where the safety guardrails should live — without external pressure forcing those choices. I handled it by documenting every decision: rejected alternatives, trade-off, what would falsify it. The decision table in section 9 is the artifact of that discipline. Ambiguity doesn't go away by ignoring it; it goes away by labeling it and choosing in the open.

### Q7.2 — "Tell me about a time you disagreed with feedback."

**Honest model answer (since solo work limits this).**

> I haven't had a stakeholder push back on a real decision yet — solo work doesn't generate that experience. The closest I have: I used AI tools as collaborators for parts of the work, and there were moments where the AI's suggested framing — usually more confident, more polished — conflicted with what I thought the integrity of the work required. I overrode it. The clearest case is the impact section. AI drafts tend to fill in plausible-sounding metrics. I rewrote that section entirely as a measurement strategy with documented vs. expected vs. recommended labels because fabricating numbers a recruiter could fact-check is a worse outcome than labeling the gap.

### Q7.3 — "Tell me about a mistake you made on this project."

**Model answer.**

> Early on, I had too much in the design system inventory section. I listed 10 color tokens, 8 type styles, 39 components — it read as documentation, not as design judgment. A senior reviewer would have skipped it. I rewrote that section in a Phase 5 review pass to focus on three things: the audit-driven token shift (where I made a contrast decision), the senior-surface 18 px body rule (where I made an accessibility-at-the-token-level decision), and three components in depth instead of fourteen at the surface. The mistake was treating the design system as inventory rather than evidence. Catching it taught me that for portfolio readers, *judgment is what compresses, inventory is what bloats.*

### Q7.4 — "How do you handle critique?"

**Model answer.**

> Listen first, defend second, and only defend if I disagree with the substance, not the delivery. The reflection section of my case study ends on "what I'd validate next" — that list exists because I want feedback on every assumption in the work. If a senior designer reviewed the case study and said "your Carmen archetype is weak because you didn't interview anyone," I wouldn't argue. I'd ask what method they'd use to fix it. Critique that lands is information I didn't have.

### Q7.5 — "What would you do in your first 30 days here?"

**Model answer.**

> Listen, mostly. Understand the design system's actual state, not just the documented one. Sit with one researcher and one engineer to understand how decisions actually get made. Read the last six months of design Slack so I understand context. Then take on one bounded, lower-stakes design problem so I can ship something quickly and demonstrate that I work the way I say I do. The longer plan depends on what the team needs — but the first 30 days are for understanding, not for proving.

---

## 8. Technical / craft

### Q8.1 — "How do you build accessibility into a product from day one?"

**Model answer.**

> At the token level, not as a final QA layer. Three concrete moves from Osteóplus: I baked WCAG 2.2 AA contrast into the color tokens — so a designer using `color/brand/primary` can't accidentally ship insufficient contrast. I made 48 pixel the minimum interactive size and 56 pixel the primary patient action target in the spacing tokens themselves. And I built `prefers-reduced-motion` fallbacks into the motion tokens — XP ring fills instantly, level-up modal fades only, no decorative animation. If the easiest path for any designer using the system produces accessible UI, accessibility stops being a heroic effort.

### Q8.2 — "How do you decide what to put in a design system vs. what stays as a one-off?"

**Model answer.**

> Three tests. Repetition — has this pattern shown up three times across flows? Constraint — does the pattern enforce a non-negotiable, like senior-friendly tap targets? Variance risk — if different designers built this independently, would the result drift? If any one of those is yes, it goes in the system. The Pain Interrupt Modal is in the system because it enforces a safety constraint; the Smart Arrival Maps deep-link is *not* in the system because it's specific to one flow and doesn't generalize.

### Q8.3 — "Walk me through one component in depth."

**Pick `RepCounterCard`. Model answer.**

> The RepCounterCard is the active exercise card in the Daily Rehab Loop. Large numeric counter at `type/h1` — 32 px Merriweather, weight 700 — because it has to be readable at arm's length for a 60-plus user. Plus and minus buttons at 56 by 56 with 16 px gaps, never crowded. The decision I'm proudest of in this component isn't the type or the buttons — it's the placement of the pain slider. The pain slider sits directly below the rep counter, in the active exercise screen. Not in a settings tray. Not after the exercise. The position is the safety guardrail: pain is recorded *during* the exercise, not after. When it crosses 7, the Pain Interrupt Modal triggers. The component's anatomy enforces the safety policy.

### Q8.4 — "How do you handle prototyping for senior users?"

**Honest model answer.**

> For Osteóplus, prototyping was Figma high-fidelity with click-through flows. For real senior usability testing, I'd want a tested prototype on the actual target device — not a desktop simulation, since touch behavior on iOS Safari on a real phone is different from a Figma click on a laptop. The validation roadmap in section 14 lists in-person moderated testing as the next step. I haven't run it yet, but I know that what I have today wouldn't survive that test without a device prototype.

---

## 9. The hard / unfair questions

### Q9.1 — "Why should I hire you over a designer with three years of shipped work?"

**Model answer.**

> You probably shouldn't, if shipping volume is what you're optimizing for. But if you're hiring for design judgment, accessibility discipline, and the ability to label gaps instead of fabricating confidence — those are the things this case study demonstrates, and they don't require three years to develop. The right comparison isn't "Edgar versus a senior." It's "Edgar with one strong case study, hireable for first roles, versus another candidate with one mediocre case study at the same level." I'm asking to be judged in *that* pool, not against people with three more years.

### Q9.2 — "Your case study is too clean. Real projects are messy. Where's the mess?"

**Model answer.**

> Fair. The mess is in the appendix and the open questions. The friction scores in the journey map are labeled as placeholders. Sample sizes are placeholders. Direct user quotes are labeled as synthesized proxies. Two medium-priority accessibility issues remain open in the audit. The reflection section names the validation I haven't run. The reason the body of the case study doesn't *look* messy is that I separated the polished decision-making narrative from the unresolved gaps — instead of mixing them — so a reader can find both. I'd rather show the mess in a labeled appendix than hide it inside the body copy.

### Q9.3 — "If we hired you and you had to redo this case study, what would you cut?"

**Model answer.**

> Section 10, the visual design section, would still be the first to compress further. I already tightened it once — went from a 39-component inventory to three components in depth — but I think a recruiter would still skim it. If I had to cut more, I'd keep only the Pain Interrupt Modal as the hero component, because it's the only component that uniquely demonstrates the no-pressure ethic. Everything else lives in the design specs file. The case study would be tighter and the design specs file would do more work.

### Q9.4 — "What's a piece of feedback you'd push back on?"

**Model answer.**

> If a reviewer said "your case study is too long, cut the constraints table" — I'd push back. The constraints table is the section that proves accessibility, plain language, ES-first, and clinically safe gamification weren't decorative — they shaped every downstream design response. Cutting it would make the case study faster to read and weaker to defend. I'd ask the reviewer which constraint they didn't think was important, and we'd argue at that level instead of at the table level.

### Q9.5 — "Be honest — do you think you're ready for this role?"

**Model answer.**

> For a first UI/UX role at a company that has a senior designer or design manager who'll mentor me — yes. For a role where I'd be the only designer making decisions in production without senior support — no, and I wouldn't take it even if offered. I know what I don't know, which is part of why I'm here.

---

## 10. Questions to ask the recruiter back

The interview ends when you ask questions back. Asking nothing reads as no interest. These earn you signal and signal seriousness.

### About the role
- What does success in this role look like at the 6-month mark?
- Will I be the only designer on my project, or is there a senior designer I'd partner with?
- How are design decisions made here — designer-led, PM-led, or consensus?

### About the team
- How many designers are on the team? How is the team structured — by product area, by platform, by phase?
- Who would be my manager? Are they a designer or a generalist?
- Is there a design critique cadence?

### About accessibility / design system
- Is there a design system today? Who owns it?
- Is accessibility an active commitment, a backlog item, or a launch gate?
- How do design decisions get validated with users before launch?

### About growth
- What does the path from this role to mid-level look like here?
- Is there a mentor I'd be paired with for the first 6 months?
- What development resources are available — conferences, courses, mentorship?

### About culture
- What's something hard about working here that you wish you'd known earlier?
- Tell me about a design decision the team made that you disagreed with — what happened?

**Don't ask, in the first interview.**

- Compensation (let them bring it up).
- Vacation policy.
- Remote work specifics (unless they already raised it).
- Anything you could have found on their website in 30 seconds.

---

## 11. Compensation discussion prep

### Q11.1 — "What are your salary expectations?"

**The right move.** Don't anchor first. Let them put a number.

**Model answer.**

> I'd rather understand the role and the team scope before I anchor a number. What's the band you have in mind for this position?

**If they insist on you going first.**

> Based on my research for [UI/UX designer first-role positions in your market], I'd expect a range of [your researched range]. But I'm flexible if the role, growth path, and team are the right fit.

**Do your research before any interview.** Glassdoor, Levels.fyi, Built In, local design Slack communities. Have a researched range ready for: target country (US / EU / LATAM / remote-from-Costa Rica), target sector (health tech tends to pay above wellness, below pure tech), target seniority (first role).

### Q11.2 — Specific to Costa Rica / remote work

> I'm based in Costa Rica and looking for remote roles, willing to align to your team's working hours within reason. My target range reflects [remote-from-LATAM market rates / parity-with-your-team rates — pick the framing that matches what their job posting implied].

**Don't.** Quote a number lower than your researched range because you're nervous. Companies don't reward self-deflation; they pay what they think you're worth based on the signal you give.

---

## 12. Red flags to watch for in the interview

Treat the interview as two-way. These signals mean *you* should be careful, not them.

| Signal | What it suggests |
|---|---|
| "We're looking for someone who can wear many hats" | No design budget; you'll do everything and grow nothing. |
| No mention of research or user testing budget | Design is decoration, not strategy. |
| No senior designer or design manager on the team | No mentorship; first-role acceleration won't happen. |
| "We move fast and break things" in healthcare context | Bad. Healthcare requires deliberation, not speed. |
| Interviewer can't articulate the design team's current biggest problem | Disconnected leadership. |
| Vague answers about accessibility ("we care about it, of course") with no specifics | Lip service. |
| Pressure to accept the offer within 24 hours | Bad-faith negotiation tactic. |
| They mention you'd "own" the design but no senior reviewer exists | Setup for failure as a first-role hire. |
| Asks for free design work as part of the interview | Hard no. Take-home challenges with reasonable scope and time are fine; spec work on real product problems is not. |

---

## 13. Pre-interview checklist

- [ ] Re-read your case study end-to-end the morning of the interview.
- [ ] Practice the 60-second walkthrough out loud, three times.
- [ ] Have the AI question answer memorized — not the words, but the substance.
- [ ] Research the company: latest product launches, design team leads, recent design-team posts.
- [ ] Have 3 questions ready to ask the interviewer (different for each interviewer if you're in a panel).
- [ ] Have your researched compensation range ready.
- [ ] Have a glass of water nearby. A pause to sip is a legitimate way to slow your answer.
- [ ] Test your camera, microphone, and internet connection 10 minutes early if remote.
- [ ] Open the case study tab and the company's site tab before the call starts.

---

## 14. After the interview

### Same-day follow-up (within 4 hours)

> Hi [Name] —
>
> Thanks for the conversation today. The point about [a specific thing they said] is one I'll be thinking about — [brief reflection, 1 sentence].
>
> A couple of things from my side I wanted to add or correct:
>
> - [If you flubbed an answer: clarify in 1–2 sentences. Don't redo the whole answer.]
> - [If they asked something you couldn't answer: answer it here.]
>
> If there's anything else you'd like to see from my work, I'm happy to share. Otherwise I'll wait to hear from you.
>
> — Edgar

### If you don't hear back in 7 days

> Hi [Name] — checking in on next steps for the [Role Title] role. Happy to wait if the process is in motion; let me know if there's anything else I can share.
>
> — Edgar

After 14 days with no response on a specific role: **assume it's a no** and move on. Don't follow up a third time on the same role.

---

*End of mock recruiter questions & answers.*
