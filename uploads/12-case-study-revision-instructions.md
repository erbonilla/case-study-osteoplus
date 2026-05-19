# Osteóplus — Case Study Revision Instructions

> Comprehensive guide to upgrade the v1 Claude Design case study (`Case_Study_-_Osteo_plus__standalone_.html`) into a publish-ready, stand-out portfolio piece. Organized by priority. Includes ready-to-paste HTML snippets, design recommendations, and stand-out moves.

**Use this file alongside:** `01-case-study.md` (source content), `02-visual-design-specs.md` (tokens), `07-figma-annotation-conventions.md` (annotations), `11-case-study-build-instructions.md` (page architecture).

---

## Executive summary

**Current state.** v1 is a strong 6-section recruiter-skim case study. Visual execution is polished — color-coded evidence chips, inline SVG mockups, ARIA tab patterns, Spanish-first patient mockups. It works for the 30–60 second recruiter scan.

**The gap.** v1 is missing 4 high-leverage sections from the 16-section spec that signal *design maturity*. Recruiters won't notice. Design managers and senior designers will.

**The path forward.**

1. **Critical fixes** (1 hour) — must do before any public link.
2. **High-priority gaps** (4–6 hours) — add 4 sections, lifts the case study from "good skim" to "complete portfolio piece."
3. **Medium improvements** (2–3 hours) — module-level depth, fictional-brand ribbon, accessibility polish.
4. **Design recommendations** (ongoing) — typography, rhythm, motion, the credibility test.
5. **Stand-out moves** (4–8 hours, optional) — 6 differentiators that elevate this above typical first-portfolio case studies.

**Total time investment:** 8–18 hours to go from v1 → publish-ready stand-out version.

---

## Part 1 — Critical fixes (block publish)

### Fix 1.1 — TOC links are absolute Claude Design URLs

**Problem.** The floating TOC currently links to `https://7a7c62d4-895e-45c5-aa5b-91f33c0c9d16.claudeusercontent.com/v1/design/projects/.../#hero`. These URLs are tied to the Claude Design session and will break the moment the HTML is hosted anywhere else.

**Fix.** Replace every TOC link with a relative anchor.

**Before:**
```html
<a href="https://7a7c62d4.../#hero">01 Overview</a>
<a href="https://7a7c62d4.../#tldr">02 TL;DR</a>
<a href="https://7a7c62d4.../#process">03 Process &amp; pivot</a>
<a href="https://7a7c62d4.../#solution">04 Final solution</a>
<a href="https://7a7c62d4.../#accessibility">05 Accessibility</a>
<a href="https://7a7c62d4.../#credits">06 Credits</a>
```

**After:**
```html
<a href="#hero">01 Overview</a>
<a href="#tldr">02 TL;DR</a>
<a href="#process">03 Process &amp; pivot</a>
<a href="#solution">04 Final solution</a>
<a href="#accessibility">05 Accessibility</a>
<a href="#credits">06 Credits</a>
```

Verify each `<section>` has the matching `id` attribute (`<section id="hero">`, etc.). Use Find-Replace if you're working in raw HTML.

### Fix 1.2 — Confirm domain and routing

When you port the HTML to Vercel:

- Drop the file into your portfolio project at `/app/case-studies/osteoplus/page.tsx` (or as a static `.html` at `/public/case-studies/osteoplus.html` if you want fastest path).
- Replace any `https://osteoplus-v2-9.vercel.app/es` references that aren't already inline with your final live product URL.
- Add the case study page to your portfolio index page navigation.

---

## Part 2 — High-priority gaps (drafted content ready to paste)

These 4 sections lift the case study from "good skim" to "complete portfolio piece." Each is drafted as ready-to-paste HTML keyed to your existing class system.

### Gap 2.1 — Carmen archetype callout (HIGH)

**Where it goes.** Between §03 *Process & ideation* and §04 *Final solution*. New section: `<section id="persona">`.

**Why it matters.** Without this, Carmen appears only in module quotes. Readers will assume those quotes are from real interviews. The AI-assisted-archetype framing is what defends the case study against the "you didn't do real research" critique in an interview.

**Drafted HTML (paste-ready):**

```html
<section id="persona" aria-labelledby="persona-title">
  <div class="section-eyebrow">04</div>
  <div class="section-label">User research &amp; persona</div>
  <h2 id="persona-title">Carmen López — the design anchor, honestly framed.</h2>

  <div class="persona-grid">
    <article class="persona-card">
      <div class="persona-avatar" aria-hidden="true">
        <!-- Lucide user icon in slate-200 circle, 96×96 -->
      </div>
      <div class="persona-archetype">Proxy-Dependent Senior</div>
      <h3 class="persona-name">Carmen López</h3>
      <p class="persona-scenario">
        Age 60+. Chronic back pain referred for osteopathy and physiotherapy.
        Low digital confidence, phone-first. Relies on a family member when
        an interface assumes confidence she doesn't have.
      </p>
      <div class="persona-jtbd">
        <span class="evidence-chip evidence-assumption">[Assumption]</span>
        <p>
          <em>"Book without calling. Follow my exercises without asking my daughter."</em>
        </p>
        <p class="persona-jtbd-note">
          Synthesized job-to-be-done, not a direct user quote.
        </p>
      </div>
    </article>

    <div class="persona-method">
      <h3>How Carmen exists</h3>
      <p>
        Carmen is an <strong>AI-assisted synthesized archetype</strong> informed
        by senior-UX literature and project documentation — not a real patient
        and not proof of a multi-participant study.
      </p>
      <p>
        Sample size, recruitment method, validation transcripts, and direct
        interview verbatims are not part of the available evidence. The case
        study is transparent about that boundary.
      </p>
      <p>
        Every user quote in the seven solution modules above
        (<em>"I can't find a slot, so I call"</em>,
        <em>"I forget which exercise to do today"</em>) is a
        <strong>synthesized proxy verbatim</strong>, not a recorded interview.
        They reflect documented friction patterns in the journey map, expressed
        in plausible patient language.
      </p>
      <p>
        <strong>What's next:</strong> moderated usability testing with 5–8 adults 60+
        on booking, Today view, Daily Rehab Loop, Pain Interrupt comprehension,
        and Smart Arrival. The validation roadmap is in the reflection below.
      </p>
    </div>
  </div>

  <div class="persona-themes">
    <h3>Four research themes drove every design response</h3>
    <div class="themes-grid">
      <div class="theme-card">
        <div class="theme-name">Booking friction-free</div>
        <p>Patients need a low-effort path from intent to appointment; phone calls and family help are fallback behaviors.</p>
        <div class="theme-impl">Drives: guest-first booking · large CTAs · confirmation summaries.</div>
      </div>
      <div class="theme-card">
        <div class="theme-name">Trust through reliability</div>
        <p>In healthcare, trust is built through clarity and consistency — not persuasive marketing.</p>
        <div class="theme-impl">Drives: calm confirmation states · visible status feedback · no hype.</div>
      </div>
      <div class="theme-card">
        <div class="theme-name">Personalized exercise confidence</div>
        <p>Rehab adherence depends on knowing what to do today and feeling safe doing it.</p>
        <div class="theme-impl">Drives: Today-first navigation · Daily Rehab Loop · Pain Interrupt.</div>
      </div>
      <div class="theme-card">
        <div class="theme-name">Digital literacy &amp; accessibility</div>
        <p>Low confidence, small targets, dense navigation, and tiny text exclude the 60+ audience.</p>
        <div class="theme-impl">Drives: WCAG 2.2 AA · 48 / 56px targets · 18px body · plain language.</div>
      </div>
    </div>
  </div>
</section>
```

**CSS additions (paste into your `<style>` block):**

```css
.persona-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
  gap: 56px;
  align-items: start;
  margin: 40px 0;
}

.persona-card {
  background: var(--surface-raised);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 32px;
}

.persona-avatar {
  width: 96px;
  height: 96px;
  background: var(--slate-100);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.persona-archetype {
  display: inline-block;
  background: var(--teal-50);
  color: var(--teal-700);
  border: 1px solid var(--teal-200);
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2px;
  margin-bottom: 12px;
}

.persona-name {
  font-size: 28px;
  margin: 0 0 12px;
}

.persona-jtbd {
  background: var(--surface);
  border-left: 3px solid var(--accent);
  padding: 16px 20px;
  margin-top: 20px;
}

.persona-jtbd-note {
  font-size: 13px;
  color: var(--slate-500);
  margin-top: 8px;
}

.evidence-chip {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 9px;
  border-radius: 999px;
  letter-spacing: 0.2px;
  margin-right: 8px;
}

.evidence-assumption {
  background: var(--orange-50);
  color: var(--orange-800);
  border: 1px solid var(--orange-200);
}

.themes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-top: 24px;
}

.theme-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 20px;
}

.theme-name {
  font-weight: 700;
  color: var(--slate-900);
  margin-bottom: 8px;
}

.theme-impl {
  font-size: 13px;
  color: var(--slate-600);
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed var(--border);
}

@media (max-width: 768px) {
  .persona-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
```

---

### Gap 2.2 — Decisions & trade-offs section (HIGH)

**Where it goes.** Between §04 *Final solution* and §05 *Accessibility*. New section: `<section id="decisions">`.

**Why it matters.** The Final Solution shows *what* was decided. The Decisions section shows *how* you decide. Recruiters and design managers explicitly scan for rejected alternatives and named trade-offs — that's the signal of design judgment.

**Drafted HTML:**

```html
<section id="decisions" aria-labelledby="decisions-title">
  <div class="section-eyebrow">05</div>
  <div class="section-label">Design decisions &amp; trade-offs</div>
  <h2 id="decisions-title">Six decisions, with what I rejected and what I accepted.</h2>
  <p class="lede">
    Each decision below names the alternative I rejected, the trade-off I accepted,
    and labels the result with documented vs. expected confidence. No fabricated outcomes.
  </p>

  <div class="decisions-stack">

    <article class="decision-row">
      <div class="decision-headline">
        <h3>Today view as default landing surface</h3>
        <span class="evidence-chip" style="background:var(--teal-50);color:var(--teal-700);border:1px solid var(--teal-200);">Documented strategy</span>
      </div>
      <div class="decision-grid">
        <div><div class="decision-label">Why</div><p>The Repository pattern forced too many decisions. The Today view surfaces the next action directly.</p></div>
        <div><div class="decision-label">Rejected</div><p>Plan archive as landing (too cognitive). Appointment list as landing (passive).</p></div>
        <div><div class="decision-label">Trade-off</div><p>Deep medical info is one tap further away.</p></div>
      </div>
    </article>

    <article class="decision-row">
      <div class="decision-headline">
        <h3>Guest-first booking</h3>
        <span class="evidence-chip" style="background:var(--orange-50);color:var(--orange-800);border:1px solid var(--orange-200);">Expected impact</span>
      </div>
      <div class="decision-grid">
        <div><div class="decision-label">Why</div><p>Carmen's phone fallback shows required account creation is the barrier. First booking must work without authentication.</p></div>
        <div><div class="decision-label">Rejected</div><p>Required login. Social SSO (still excludes non-tech-confident users).</p></div>
        <div><div class="decision-label">Trade-off</div><p>Returning users have weaker tracking until they opt in to an account post-booking.</p></div>
      </div>
    </article>

    <article class="decision-row">
      <div class="decision-headline">
        <h3>56px primary CTAs (not 48px)</h3>
        <span class="evidence-chip" style="background:var(--teal-50);color:var(--teal-700);border:1px solid var(--teal-200);">Documented constraint</span>
      </div>
      <div class="decision-grid">
        <div><div class="decision-label">Why</div><p>48px is the WCAG floor. 56px is the target for primary patient actions — tap confidence for tremor and low-vision users.</p></div>
        <div><div class="decision-label">Rejected</div><p>48px throughout. Excludes part of the audience from confident interaction.</p></div>
        <div><div class="decision-label">Trade-off</div><p>Fewer CTAs per screen; more vertical space.</p></div>
      </div>
    </article>

    <article class="decision-row">
      <div class="decision-headline">
        <h3>Pain Interrupt Modal at pain ≥ 7</h3>
        <span class="evidence-chip" style="background:var(--teal-50);color:var(--teal-700);border:1px solid var(--teal-200);">Documented guardrail</span>
      </div>
      <div class="decision-grid">
        <div><div class="decision-label">Why</div><p>Patient safety &gt; engagement. Pushing Carmen through pain is clinically unsafe.</p></div>
        <div><div class="decision-label">Rejected</div><p>Gamified push to continue. Silent logging of pain spikes.</p></div>
        <div><div class="decision-label">Trade-off</div><p>Lower session completion rate by design. Lower completion is the right number.</p></div>
      </div>
    </article>

    <article class="decision-row">
      <div class="decision-headline">
        <h3>No punitive streak loss</h3>
        <span class="evidence-chip" style="background:var(--teal-50);color:var(--teal-700);border:1px solid var(--teal-200);">Documented guardrail</span>
      </div>
      <div class="decision-grid">
        <div><div class="decision-label">Why</div><p>Rehab plans need flexibility for pain fluctuations. Streak loss creates pressure and shame.</p></div>
        <div><div class="decision-label">Rejected</div><p>Streak loss for missed days. Streak freeze tokens (still rewards loss aversion).</p></div>
        <div><div class="decision-label">Trade-off</div><p>Weaker loss-aversion lever. Streak counter shows current state without penalty UI.</p></div>
      </div>
    </article>

    <article class="decision-row">
      <div class="decision-headline">
        <h3>Pain scores stay encrypted between device and database</h3>
        <span class="evidence-chip" style="background:var(--teal-50);color:var(--teal-700);border:1px solid var(--teal-200);">Documented constraint</span>
      </div>
      <div class="decision-grid">
        <div><div class="decision-label">Why</div><p>GDPR / LOPDGDD compliance. Clinical trust. Patients must not feel surveilled.</p></div>
        <div><div class="decision-label">Rejected</div><p>Aggregate pain analytics. Practitioner-visible raw pain.</p></div>
        <div><div class="decision-label">Trade-off</div><p>Practitioner sees adherence and pain-interrupt events, not raw pain values.</p></div>
      </div>
    </article>

  </div>
</section>
```

**CSS additions:**

```css
.decisions-stack {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
}

.decision-row {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 24px 28px;
}

.decision-headline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.decision-headline h3 {
  font-size: 20px;
  margin: 0;
}

.decision-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.decision-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--slate-500);
  margin-bottom: 6px;
}

.decision-grid p {
  font-size: 14px;
  color: var(--slate-700);
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .decision-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
```

---

### Gap 2.3 — Impact & Metrics section (HIGH)

**Where it goes.** Between §05 *Accessibility* and the existing §06 *What this demonstrates*. New section: `<section id="impact">`.

**Why it matters.** This is the case study's defining intellectual move — the evidence hierarchy made explicit as a *section*, not just as chips on individual modules. A reviewer reading only the impact section needs to find the measurement strategy in one place.

**Drafted HTML:**

```html
<section id="impact" aria-labelledby="impact-title">
  <div class="section-eyebrow">06</div>
  <div class="section-label">Impact &amp; metrics</div>
  <h2 id="impact-title">A measurement strategy, not fabricated outcomes.</h2>
  <p class="lede">
    The product is in concept phase. Post-launch analytics do not exist. Impact is presented as a measurement strategy with a labeled evidence hierarchy.
  </p>

  <div class="north-star-card">
    <div class="north-star-label">North Star</div>
    <h3 class="north-star-name">Weekly Adherence Rate</h3>
    <p class="north-star-def">Percent of assigned rehab tasks completed on time within the current week.</p>
  </div>

  <div class="metrics-tier">
    <div class="tier-header">
      <span class="evidence-chip" style="background:var(--teal-50);color:var(--teal-700);border:1px solid var(--teal-200);">Documented targets</span>
      <p>From <code>Success_Metrics_v2.3.0</code>. Targets, not measured outcomes.</p>
    </div>
    <div class="metrics-grid">
      <div class="metric"><div class="metric-name">Booking Success Rate</div><div class="metric-target">&gt; 90%</div><div class="metric-note">No organizational commitment</div></div>
      <div class="metric"><div class="metric-name">Exercise Completion Rate</div><div class="metric-target">&gt; 75%</div></div>
      <div class="metric"><div class="metric-name">DAU / MAU</div><div class="metric-target">&gt; 25%</div></div>
      <div class="metric"><div class="metric-name">3+ day streak retention</div><div class="metric-target">&gt; 40%</div></div>
      <div class="metric"><div class="metric-name">Badge unlock rate</div><div class="metric-target">≥ 1.5 / user / mo</div></div>
      <div class="metric"><div class="metric-name">Late arrival rate</div><div class="metric-target">&lt; 10%</div></div>
    </div>
  </div>

  <div class="metrics-tier">
    <div class="tier-header">
      <span class="evidence-chip" style="background:var(--orange-50);color:var(--orange-800);border:1px solid var(--orange-200);">Expected impact</span>
      <p>Designer reasoning from documented user problems. Not measured.</p>
    </div>
    <ul class="expected-list">
      <li>Guest-first booking lowers booking abandonment for users 60+ (vs. account-required pattern).</li>
      <li>Today view + Daily Rehab Loop increase Weekly Adherence Rate (vs. archive-style "View Plan").</li>
      <li>Smart Arrival reduces direction-related support calls.</li>
      <li>Pain Interrupt Modal trades raw completion rate for safer adherence.</li>
    </ul>
  </div>

  <div class="metrics-tier">
    <div class="tier-header">
      <span class="evidence-chip" style="background:var(--slate-100);color:var(--slate-700);border:1px solid var(--slate-200);">Recommended KPIs</span>
      <p>Proposed for tracking. Not yet committed in analytics taxonomy.</p>
    </div>
    <div class="metrics-grid">
      <div class="metric"><div class="metric-name">Task success rate (60+ users)</div><div class="metric-note">Measured in moderated usability testing</div></div>
      <div class="metric"><div class="metric-name">Time-on-task</div><div class="metric-note">Median time from service selection to confirmation</div></div>
      <div class="metric"><div class="metric-name">Pain interrupt rate</div><div class="metric-note">Safety guardrail</div></div>
      <div class="metric"><div class="metric-name">PWA install acceptance</div></div>
      <div class="metric"><div class="metric-name">7-day &amp; 30-day retention</div></div>
      <div class="metric"><div class="metric-name">Reminder usefulness rating</div><div class="metric-note">Patient-rated 1–5</div></div>
    </div>
  </div>

  <div class="metrics-guardrails">
    <h3>Guardrail metrics</h3>
    <p>Prevent unsafe optimization. Every product team should have these.</p>
    <ul>
      <li>High-pain users completing tasks after warning → minimize, investigate spikes.</li>
      <li>Night-time notification sends (22:00 – 07:00) → zero unless explicitly opted in.</li>
      <li>Accessibility defects on core flows → zero unresolved critical / high before any rollout.</li>
    </ul>
  </div>
</section>
```

**CSS additions:**

```css
.north-star-card {
  background: linear-gradient(135deg, var(--teal-50) 0%, var(--surface) 100%);
  border: 1px solid var(--teal-200);
  border-radius: 18px;
  padding: 32px;
  margin: 32px 0;
  text-align: center;
}

.north-star-label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--teal-700);
  margin-bottom: 8px;
}

.north-star-name {
  font-size: 36px;
  margin: 0 0 8px;
  color: var(--slate-900);
}

.north-star-def {
  color: var(--slate-600);
  margin: 0;
}

.metrics-tier {
  margin: 32px 0;
}

.tier-header {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.tier-header p {
  margin: 0;
  font-size: 14px;
  color: var(--slate-600);
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
}

.metric {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 16px;
}

.metric-name {
  font-weight: 600;
  color: var(--slate-900);
  font-size: 14px;
}

.metric-target {
  font-size: 22px;
  font-weight: 700;
  color: var(--teal-700);
  margin-top: 4px;
}

.metric-note {
  font-size: 12px;
  color: var(--slate-500);
  margin-top: 6px;
}

.expected-list {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 16px 16px 16px 36px;
  margin: 0;
}

.expected-list li {
  margin-bottom: 8px;
  color: var(--slate-700);
}

.metrics-guardrails {
  background: var(--surface-raised);
  border-left: 3px solid var(--accent);
  padding: 20px 24px;
  border-radius: 10px;
  margin-top: 24px;
}

.metrics-guardrails h3 {
  margin: 0 0 8px;
  font-size: 16px;
}
```

---

### Gap 2.4 — Reflection section (HIGH)

**Where it goes.** Between §06 *Impact &amp; metrics* and §07 *What this demonstrates*. New section: `<section id="reflection">`.

**Why it matters.** Design managers explicitly scan for this section to assess maturity — "can this person learn?" Without it, the case study feels presentational, not introspective. The reflection is also where the AI disclosure gets *narrative* treatment, not just bullet treatment.

**Drafted HTML:**

```html
<section id="reflection" aria-labelledby="reflection-title">
  <div class="section-eyebrow">07</div>
  <div class="section-label">Reflection &amp; lessons learned</div>
  <h2 id="reflection-title">What designing for adults 60+ actually taught me.</h2>

  <blockquote class="pull-quote">
    Designing a clinical product for adults 60+ taught me that what you don't
    measure matters as much as what you do.
  </blockquote>

  <div class="reflection-grid">
    <article class="reflection-block">
      <h3>The hardest decision</h3>
      <p>
        Designing motivation without pressure. Most gamification patterns that
        work for fitness apps — loss aversion via streak loss, leaderboard
        pressure, deadline urgency — are clinically unsafe for rehab patients.
        A streak loss after Carmen had a pain flare is not just an unfriendly
        UI moment; it's a design failure that can push a real patient through
        pain they shouldn't be pushed through.
      </p>
      <p>
        The trade-off is honest: session completion rate will be lower than it
        would be with pressure mechanics. <strong>That lower number is the right number.</strong>
      </p>
    </article>

    <article class="reflection-block">
      <h3>The biggest IA trade-off</h3>
      <p>
        Choosing the Today view as the default landing surface trades
        discoverability of deep medical information for clarity of next
        action. Carmen can find her full plan in two taps, but she sees
        today's task first. For a patient who forgets exercises between visits,
        that ordering matters more than any deep-feature inventory.
      </p>
    </article>

    <article class="reflection-block">
      <h3>What I'd validate next</h3>
      <ul class="validation-list">
        <li>Moderated usability testing with 5–8 adults 60+ on the booking flow — task success, time-on-task, error rate, support dependency.</li>
        <li>Pain interrupt rate as a live safety guardrail with the first patient cohort.</li>
        <li>Bilingual content review with senior Spanish-speaking users — comprehension, tone, sense of safety.</li>
        <li>PWA install acceptance rate vs. browser-only retention delta.</li>
        <li>Weekly Adherence Rate baseline once the first cohort is live, then a band defined with clinical ops.</li>
      </ul>
    </article>

    <article class="reflection-block">
      <h3>The lesson I'll carry forward</h3>
      <p class="reflection-closer">
        In a senior healthcare product, accessibility, evidence discipline, and
        ethical guardrails aren't three workstreams — they're one decision,
        made at the token level, the IA level, and the copy level, every time.
      </p>
    </article>
  </div>
</section>
```

**CSS additions:**

```css
.pull-quote {
  font-family: var(--font-display);
  font-size: 28px;
  font-style: italic;
  font-weight: 500;
  line-height: 1.3;
  color: var(--slate-700);
  border-left: 4px solid var(--teal-600);
  padding: 16px 0 16px 32px;
  margin: 32px 0 48px;
}

.reflection-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.reflection-block {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 28px;
}

.reflection-block h3 {
  font-size: 18px;
  margin: 0 0 12px;
  color: var(--slate-900);
}

.reflection-block p {
  color: var(--slate-700);
  margin: 0 0 12px;
}

.reflection-block p:last-child {
  margin-bottom: 0;
}

.validation-list {
  padding-left: 20px;
  margin: 0;
}

.validation-list li {
  color: var(--slate-700);
  margin-bottom: 8px;
}

.reflection-closer {
  font-weight: 500;
  color: var(--slate-800) !important;
}

@media (max-width: 768px) {
  .reflection-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .pull-quote {
    font-size: 22px;
    padding-left: 20px;
  }
}
```

---

## Part 3 — Medium-priority improvements

### 3.1 — Fictional-brand ribbon above the Hero (HIGH visibility)

**Why.** A bouncing recruiter who doesn't scroll to the footer might assume Osteóplus is a real clinic. The disclaimer needs to be visible above the fold.

**Drafted HTML — paste immediately inside `<body>`, before the Hero section:**

```html
<div class="brand-ribbon" role="note">
  <span class="ribbon-pill">UX case study · concept project</span>
  <span class="ribbon-text">
    Osteóplus is an <strong>original fictional brand</strong> for a Barcelona clinic context.
    Solo concept project, not a client engagement.
  </span>
</div>
```

**CSS:**

```css
.brand-ribbon {
  background: var(--slate-50);
  border-bottom: 1px solid var(--border);
  padding: 10px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 13px;
  color: var(--slate-700);
}

.ribbon-pill {
  background: var(--teal-700);
  color: white;
  padding: 4px 12px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.3px;
}

.ribbon-text strong {
  color: var(--slate-900);
}
```

### 3.2 — Module text depth

**Current.** Each module has 1–2 sentences. The chips are present but the modules don't show *trade-off thinking* at module level.

**Improvement.** Add one micro-line per module: rejected alternative + trade-off, formatted as a small footnote-style line below the main description.

**Drafted HTML pattern (apply to all 7 modules):**

```html
<!-- Inside existing .solution-copy, after the main paragraph and before .solution-meta -->
<div class="module-tradeoff">
  <strong>Rejected:</strong> [alternative]. <strong>Trade-off:</strong> [accepted cost].
</div>
```

**Example for Module 1 (Guest-first booking):**

```html
<div class="module-tradeoff">
  <strong>Rejected:</strong> Required login (recreates phone fallback).
  <strong>Trade-off:</strong> Weaker tracking for returning users until they opt in.
</div>
```

**CSS:**

```css
.module-tradeoff {
  background: var(--surface-raised);
  border-left: 2px solid var(--slate-300);
  padding: 8px 12px;
  font-size: 13px;
  color: var(--slate-600);
  margin-top: 12px;
}

.module-tradeoff strong {
  color: var(--slate-800);
}
```

### 3.3 — Inline "See it live" links in solution modules

**Where.** Inside each of the 7 solution modules, add a link below the impact chip that points to the matching screen on the live product.

**Why.** Recruiters reading the Final Solution section want to verify it works on the real product. Don't make them search.

```html
<a class="see-live" href="https://osteoplus-v2-9.vercel.app/es/booking" target="_blank" rel="noopener">
  See it live ↗
</a>
```

```css
.see-live {
  font-size: 13px;
  color: var(--teal-700);
  font-weight: 600;
  text-decoration: none;
  margin-left: 12px;
  border-bottom: 1px dashed var(--teal-300);
}

.see-live:hover {
  border-bottom-style: solid;
}
```

### 3.4 — Use the annotated screen (A11Y-02) only once

**Current issue.** The annotated HOME-01 with contrast labels appears twice — once in module 5 and again in §05 Accessibility.

**Fix.** Anchor the annotated screen in §05 Accessibility only. In module 5, use a clean (non-annotated) HOME-01 with a small inline link: *"Annotated version in Accessibility →"*.

This prevents visual repetition and makes the annotated screen feel like a genuine reference, not a duplicated asset.

### 3.5 — Add live product link inline within Accessibility section

```html
<p class="inline-cta">
  Want to verify? <a href="https://osteoplus-v2-9.vercel.app/es" target="_blank" rel="noopener">Open the live product</a> and run Lighthouse yourself.
</p>
```

---

## Part 4 — Design recommendations

### 4.1 — Typography hierarchy

The case study is about senior-friendly design. Walk the talk on the case study page itself.

| Element | Spec |
|---|---|
| Display (Hero H1) | Merriweather 48–56px / 1.1 / 700 |
| H2 (section heading) | Merriweather 32px / 1.2 / 700 |
| H3 (subsection) | Sans 20–22px / 1.3 / 700 |
| Body | Sans **18px** / 1.6 / 400 — yes, 18px even on desktop |
| Caption / metadata | Sans 13–14px / 1.4 / 500 |
| Code / token reference | Mono 13px / 1.4 |

**Why 18px body.** If a senior designer can't read the case study comfortably at arm's length, the credibility of the senior-friendly design claim collapses.

### 4.2 — Spacing rhythm

Use a consistent vertical rhythm to avoid the "wall of text" feeling.

| Spacing | Use |
|---|---|
| `48px` | Inside a section, between subsections |
| `96px` | Between major sections (desktop) |
| `48px` | Between sections (mobile) |
| `24px` | Between cards in a grid |
| `16px` | Between related lines of text |

**Rule of thumb:** every 2–3 dense sections need a visual break — pull quote, image, callout card, North Star card.

### 4.3 — Color & evidence hierarchy

You already nailed this with the chip system. Don't dilute it. Keep all evidence labels as chips, never as inline text alone.

**Reinforce the hierarchy** by using the same chip colors elsewhere:

- Section dividers that contain "Documented" content → subtle teal accent.
- Section dividers that contain "Expected" content → subtle orange accent.
- Section dividers that contain "Recommended" content → neutral slate.

This makes the evidence hierarchy a visual *system*, not just a chip style.

### 4.4 — Motion discipline

Every animation on the case study page must respect `prefers-reduced-motion`.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Acceptable motion:**
- Subtle fade-in of mockups on scroll (200ms ease-out).
- TOC progress fill (transform only, no jitter).
- Hover transitions on links (150ms).

**Unacceptable motion:**
- Auto-playing animations.
- Parallax scrolling.
- Bouncy spring animations.
- Anything that violates reduced-motion preferences.

### 4.5 — Mockup treatment consistency

Across all 7 solution modules, use the same:

- Device frame (current "9:41" iPhone frame is good — keep it).
- Background fill (currently `surface-raised` — keep it).
- Mockup label position (currently bottom-left with screen ID like `BOOK-01` — keep it).
- Frame border-radius (currently consistent — keep it).

**One thing to add.** A subtle drop shadow under each mockup to lift it off the background:

```css
.mockup-frame {
  box-shadow:
    0 1px 2px rgba(15, 23, 42, 0.04),
    0 8px 24px rgba(15, 23, 42, 0.06);
}
```

### 4.6 — The credibility test

Before publish, the case study page itself must pass the test it talks about.

| Test | Method | Target |
|---|---|---|
| Lighthouse accessibility | DevTools Lighthouse | ≥ 95 |
| Keyboard navigation | Tab through page | Every interactive reachable, visible focus |
| Screen reader | VoiceOver or NVDA | Sections announce correctly, headings hierarchical |
| Contrast | axe DevTools | Zero violations |
| Touch targets | Manual measure | All ≥ 48px, primary CTAs ≥ 56px |
| Reduced motion | Toggle in DevTools | Page still works, no required animation |
| Mobile (320–375px width) | Chrome DevTools | Readable, no horizontal scroll |
| Dark mode | OS toggle | Either supported cleanly or explicitly disabled |

**If any of these fail, the case study's accessibility claims become a lie.**

---

## Part 5 — Stand-out moves (optional, high-impact)

These are differentiators that elevate the case study above typical first-portfolio work. Pick 2–3 that resonate.

### 5.1 — "Behind the design" expandable sections

For each of the 7 modules, add an expandable `<details>` with the deeper context — the source documentation, the related screen IDs, the related component classes.

```html
<details class="behind-design">
  <summary>Behind the design</summary>
  <div class="behind-content">
    <p><strong>Source:</strong> <code>Core_Flows_V2_2.md §1</code></p>
    <p><strong>Related screens:</strong> HOME-01, EXER-01, EXER-03, EXER-05</p>
    <p><strong>Related components:</strong> <code>SessionProgressHeader</code>, <code>RepCounterCard</code>, <code>MoodPicker</code></p>
    <p><strong>Design system version:</strong> v4.2.0</p>
  </div>
</details>
```

**Why it works.** Recruiters get the surface story. Design managers who want depth click to expand. Same page, two audiences.

### 5.2 — Live product preview iframe (small)

Embed a small live preview of the product home page inside the Final Solution section:

```html
<div class="live-preview">
  <div class="live-preview-header">
    <span class="live-dot"></span>
    Live product
  </div>
  <iframe
    src="https://osteoplus-v2-9.vercel.app/es"
    title="Osteóplus live product"
    loading="lazy"
    sandbox="allow-same-origin allow-scripts"
  ></iframe>
  <a class="live-preview-cta" href="https://osteoplus-v2-9.vercel.app/es" target="_blank" rel="noopener">
    Open in new tab ↗
  </a>
</div>
```

**Why it works.** The case study and product become *bidirectional*. Most case studies are read-only artifacts. Yours is interactive.

### 5.3 — Scroll-driven Weekly Adherence Rate progress

The page scroll progress bar (top of viewport) uses the Weekly Adherence Rate visual metaphor — a fillable ring or bar that fills as the reader progresses.

This is a subtle but powerful move: the *act of reading the case study* mimics the North Star metric. It's metacognitive design.

```html
<div class="reading-progress" aria-hidden="true">
  <div class="progress-fill" id="progressFill"></div>
</div>
```

```css
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: transparent;
  z-index: 100;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--teal-500), var(--teal-700));
  width: 0%;
  transition: width 60ms linear;
}
```

```javascript
// Subtle, respects reduced-motion
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const fill = document.getElementById('progressFill');
  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = (window.scrollY / max) * 100;
    fill.style.width = pct + '%';
  }, { passive: true });
}
```

### 5.4 — The "validated vs. assumed" before/after

Add a small note above the Solution section:

> *"Once usability testing runs (planned, see Reflection), the impact chips below will promote from `Expected impact` to `Documented validation finding` where evidence supports them. Read the case study in 6 months — the chips will tell the story."*

**Why it works.** It signals that this is a *living case study*, not a one-shot artifact. It also tees up the v1.1 revision (file 10) as a planned event, not an afterthought.

### 5.5 — Hidden recruiter command (delight)

Add a keyboard shortcut that toggles a "recruiter mode" — emphasizes only the highest-leverage sections (Hero, TL;DR, IA Pivot, Final Solution highlights, What this demonstrates) and visually dims the rest.

```javascript
document.addEventListener('keydown', (e) => {
  if (e.shiftKey && e.key === 'R') {
    document.body.classList.toggle('recruiter-mode');
  }
});
```

```css
body.recruiter-mode .non-essential {
  opacity: 0.3;
  filter: saturate(0.5);
  transition: all 200ms;
}
```

Apply `.non-essential` to sections like Decisions, Impact tier details, etc. Add a small footer note: *"Press Shift+R for recruiter mode."*

**Why it works.** It demonstrates user-flow thinking ON the case study itself. Recruiters who discover it will remember.

### 5.6 — A "deep dive" companion page

The cleanest stand-out move. Publish two pages:

| Page | URL | Length | Audience |
|---|---|---|---|
| **Recruiter skim** *(what you have)* | `/case-studies/osteoplus` | 6 sections, ~1500 words | Recruiters, hiring managers, first-pass scanners |
| **Deep dive** *(new)* | `/case-studies/osteoplus/deep-dive` | 16 sections from the spec, ~5000 words | Design managers, senior designers, technical interviews |

Link from skim → deep dive at the bottom: *"Want the full 10-minute read? Read the deep dive →"*

Link from deep dive → skim at the top: *"Just need the highlights? Read the 60-second skim →"*

**Why it works.** It's a portfolio design decision that itself demonstrates audience-aware UX. Most portfolios don't think about reader segmentation. This one does.

---

## Part 6 — Updated pre-publish QA checklist

Before pushing the case study public, walk every item.

### Content integrity

- [ ] All `[Placeholder]` markers filled with real content or kept with clear reason.
- [ ] Carmen archetype framing present (Gap 2.1) — labels her as AI-assisted synthesized archetype.
- [ ] All "user quotes" labeled as `[Synthesized proxy verbatim]` or visibly framed as paraphrase.
- [ ] Evidence chip colors consistent across modules and the new Impact section.
- [ ] No fabricated metrics, sample sizes, or post-launch claims.
- [ ] Fictional-brand ribbon above the Hero (Section 3.1).
- [ ] Live product link reachable from at least 3 places (Hero, modules, footer).

### Technical / accessibility

- [ ] TOC links use relative anchors (`#hero`), not absolute Claude Design URLs.
- [ ] `<html lang="en">` set.
- [ ] Skip-to-content link visible on focus.
- [ ] All interactives meet 48px minimum, primary CTAs 56px.
- [ ] Focus rings visible on every interactive (2px teal-500).
- [ ] Tab order is logical end-to-end.
- [ ] Body text 18px on desktop.
- [ ] All images / SVGs have meaningful `alt` text or `aria-hidden="true"`.
- [ ] Reduced motion respected (test with DevTools toggle).
- [ ] Lighthouse accessibility ≥ 95.
- [ ] axe DevTools or WAVE: zero violations.
- [ ] Page renders correctly at 320px width (no horizontal scroll).
- [ ] Page works without JavaScript (graceful degradation).

### SEO & sharing

- [ ] Page `<title>` matches the spec.
- [ ] Meta description, OG tags, Twitter card present.
- [ ] OG image at 1200×630, hosted on a stable URL.
- [ ] OG preview verified at https://www.opengraph.xyz/.
- [ ] Canonical URL set.
- [ ] Robots: index, follow.

### External validation

- [ ] One friend reads the page for 30 seconds. Asks: what do you remember?
- [ ] One designer (if available) gives one piece of feedback.
- [ ] Self-read out loud — catches awkward phrasing.

---

## Part 7 — Suggested execution order

If you're working through this in phases:

### Phase 1 — Block-publish fixes (1–2 hours)

1. Fix TOC absolute links → relative anchors.
2. Add fictional-brand ribbon above Hero (Section 3.1).
3. Run Lighthouse on what you have. Aim for ≥ 95 accessibility before adding new content.

### Phase 2 — High-priority additions (4–6 hours)

4. Add Carmen archetype callout section (Gap 2.1).
5. Add Decisions & trade-offs section (Gap 2.2).
6. Add Impact & metrics section (Gap 2.3).
7. Add Reflection section (Gap 2.4).
8. Update TOC: now has 9 anchors (Hero, TL;DR, Process, Persona, Solution, Decisions, A11y, Impact, Reflection, Demonstrates, Credits).

### Phase 3 — Medium improvements (2–3 hours)

9. Add module-level trade-off lines (Section 3.2).
10. Add inline "see it live" links (Section 3.3).
11. De-duplicate the annotated screen (Section 3.4).
12. Add inline live-product CTA in Accessibility (Section 3.5).

### Phase 4 — Design polish (2–3 hours)

13. Audit typography against the senior-friendly type rules (Section 4.1).
14. Audit spacing rhythm (Section 4.2).
15. Add mockup drop shadows (Section 4.5).
16. Run the credibility test (Section 4.6).

### Phase 5 — Stand-out moves (4–8 hours, pick 2–3)

17. Choose from §5.1 through §5.6. The "deep dive companion page" (§5.6) is the highest-leverage of the six.

### Phase 6 — Final QA & publish

18. Walk the pre-publish QA checklist (Part 6).
19. Push to Vercel.
20. Verify OG preview, test all links, run final Lighthouse.

---

## Final notes

**The risk to avoid.** Don't over-engineer. The current v1 is already a stronger case study than 90% of first-portfolio work. The Phase 1 + Phase 2 work (block-publish fixes + high-priority gaps) is non-negotiable. Everything else is improvement, not requirement.

**The biggest leverage move.** Add the Reflection section (Gap 2.4). It's the single highest-impact addition for design-manager readers. Skipping it leaves the case study feeling presentational, not introspective.

**The honesty multiplier.** Every section you add must label what you don't know. Don't promote chips to "Documented validation finding" until usability testing actually runs (per file 10). The evidence discipline is the case study's defining intellectual move — strengthening it by *adding* more labeled gaps is more credible than smoothing them over.

**The single sentence to keep visible.** Somewhere on the page, ideally as a pull quote or a footer note:

> *"In a senior healthcare product, accessibility, evidence discipline, and ethical guardrails aren't three workstreams — they're one decision, made at the token level, the IA level, and the copy level, every time."*

It's the most memorable line in the entire case study. Don't bury it.

---

## Related files in the deliverable set

| File | When to consult |
|---|---|
| `01-case-study.md` | Source of all section content. Re-read §5, §9, §13, §14 when implementing Gaps 2.1, 2.2, 2.3, 2.4. |
| `02-visual-design-specs.md` | Token reference. Match colors, type, spacing to the existing system. |
| `07-figma-annotation-conventions.md` | When annotating screens (A11Y-02 etc.). |
| `09-mock-recruiter-questions.md` | Interview prep — reviewers will ask about the additions, especially the Reflection. |
| `10-phase-5-plus-revision-protocol.md` | After usability testing, follow this protocol to promote chip labels. |
| `11-case-study-build-instructions.md` | Page architecture and Next.js patterns. |

---

*End of case study revision instructions.*
