# Osteóplus — UX Case Study

> **Final deliverable** · 16 sections · v2 generator template · Phase 5 output
> Author: **Edgar Bonilla G.** · Target role: **UI/UX Designer** · Target sectors: health tech, wellness, sports/fitness
> Last updated: 2026-05-17

---

## 1. Hero

### Goal
Communicate the product, audience, design challenge, and Edgar's role in under 10 seconds.

### Final copy

# From medical repository to Action Dashboard: a senior-friendly rehab PWA

A bilingual clinic product for osteopathy, physiotherapy, and rehabilitation in Barcelona — built around **guest-first booking** and a daily rehab loop for adults 35–85, optimized for users 60+.

**Role**

- **Owned end-to-end.** Strategy, IA, design system, accessibility, visual, flows — every final decision and synthesis.
- **AI-assisted execution.** Initial research collection and first-draft documentation. Judgment was mine.

**Tools**

- **Design.** Figma · Adobe CC (Photoshop, Illustrator, Acrobat, Firefly)
- **AI.** Claude · Claude Code · ChatGPT (Codex) · Gemini (Antigravity) · Cursor

**Timeline.** July 2025 → ongoing
**Status.** Design concept · targeting live launch (product roadmap shows Beta Q2 2026, GA Q3 2026)
**North Star.** Weekly Adherence Rate

> [Primary CTA → View the final solution]
> [Secondary CTA ↓ Skim the case in 15 seconds]

### Visual direction

Full-bleed hero on `bg/secondary` (`#F8FAFC`). Mockup composition: HOME-01 (Today view) mobile frame foreground at ~70% scale, BOOK-02 (date picker) and EXER-03 (rep counter) supporting screens at ~40% scale, slightly rotated behind. Brand teal `#0F766E` on primary CTA. Merriweather serif for the title at display size, sans-serif body at 18px for readability at arm's length.

### Asset placeholders

- **HERO-01** — Composite mockup. **Foreground:** HOME-01 (Today view) mobile, iPhone 14 Pro frame, light theme. **Background:** BOOK-02 (date picker) and EXER-03 (rep counter card) at 40% scale, rotated ±8°. Spacing: 80px gutter. Single hero scene, not a carousel.
- **HERO-02** *(alternate, narrow viewport)* — Single-screen mobile mockup of HOME-01, centered, no rotation, no background screens.

### Evidence notes

- Title approved at Gate 2.
- Role split locked at Gate 4 (Fix F1 applied).
- Tools split locked (Fix F7 applied).
- Status differentiates Edgar's design deliverable from documented product roadmap (Fix F10 applied).

---

## 2. TL;DR / Recruiter Skim Card

### Goal
5-bullet summary readable in 15 seconds, distinct from the hero.

### Final copy

**The 15-second read.**

- **Product.** A PWA-first clinic product for osteopathy, physiotherapy, and rehabilitation in Barcelona. Audience: adults 35–85, optimized for users 60+.
- **Strategic IA shift.** Moved the product from a Medical Repository model to an Action Dashboard, with the **Today view** as the default landing surface.
- **Two pillars.** Guest-first booking (no account barrier) + **The Loop** (Daily Rehab Loop, clinically safe gamification).
- **Accessibility floor.** Built to **WCAG 2.2 AA** with 48px minimum / 56px primary touch targets, plain-language ES-first / EN-secondary copy, visible focus states, reduced motion, non-color-only status.
- **Impact framing.** Pre-launch, so impact is presented as a measurement strategy anchored on **Weekly Adherence Rate** (North Star), with booking completion, exercise completion, retention, and accessibility task success as supporting KPIs.

### Visual direction

Card layout, single column, max-width 720px. Each bullet leads with a Lucide icon (24×24): `target`, `layout-dashboard`, `layers`, `accessibility`, `trending-up`. Slate-50 background, slate-700 text, 4px teal-500 left border.

### Asset placeholders

- **TLDR-01** — Card with 5 bullet rows, Lucide icons at row start, `bg/secondary` background, `radius/lg` corners, 4px `color/border/focus` left border.

### Evidence notes

- Sourced from `osteoplus-project-dna.md`, `Information_Architecture_v2_2.md`, `research.md`, `Success_Metrics_v2_2.md`, `DESIGN_SYSTEM.md`.
- Bullet 3 tightened per Fix F9.

---

## 3. Project Snapshot

### Goal
Scan card with structured fields — recruiter context in one glance.

### Final copy

| Field | Value |
|---|---|
| **Product** | Osteóplus — original fictional brand for a Barcelona clinic context (osteopathy, physiotherapy, rehabilitation). Solo concept project, not a client engagement. |
| **Platform** | PWA-first (installable, offline-capable, Lighthouse target ≥ 95) |
| **Audience** | Adults 35–85, optimized for users 60+ · mixed digital confidence |
| **Market** | Barcelona · Spanish-first / English-secondary |
| **Key flows** | Guest-first booking (3-step) · Daily Rehab Loop · Pain Interrupt · Smart Arrival · Emergency Triage |
| **Accessibility** | WCAG 2.2 AA · 48px min / 56px primary targets · focus-visible · reduced-motion · non-color-only status |
| **Localization** | Full ES/EN copy deck for navigation, booking, consent, home, exercises |
| **North Star** | Weekly Adherence Rate (% of assigned rehab tasks completed on time within the current week) |
| **Status — design** | Concept · ongoing · July 2025 → ongoing (Edgar's deliverable) |
| **Status — product** | Roadmap target: **Beta Q2 2026** · GA Q3 2026 (documented, not shipped) |

### Visual direction

Two-column key/value card on desktop, stacked on mobile. White card on `bg/secondary`. Field labels in slate-500, values in slate-700. 16px row padding, 24px between rows. Section anchor: `#snapshot`.

### Asset placeholders

- **SNAP-01** — Snapshot card with all 10 rows above. No icons. Tabular alignment.

### Evidence notes

- Platform, accessibility, localization, North Star: `DESIGN_SYSTEM.md` v4.2.0, `Success_Metrics_v2_2.md` v2.3.0, `osteoplus-project-dna.md` v2.4.0.
- Flows: `Core_Flows_V2_2.md`.
- Audience: documented per project DNA §3.

---

## 4. Problem & Context

### Goal
Make the patient and business problem specific to Osteóplus — not generic healthcare UX.

### Final copy

**Patient problem.** A senior patient with chronic back pain wants to book treatment and follow her home exercises — but the digital surfaces around her care behave like a passive archive. She can't find an open slot in the app, so she calls. She forgets which exercise to do today, so she asks her daughter. She drops out of rehab and loses ground.

This pattern is documented in the journey map around **Carmen López** *(documented archetype: Proxy-Dependent Senior; see §5)*. Across awareness, research, booking, clinic visit, and post-visit rehab, the highest-friction stages were research, booking, and post-visit rehab — exactly where independence breaks down.

**Business problem.** The clinic loses retention when patients abandon rehab. Bookings depend on phone reception, which creates staffing bottlenecks and lost slots. Care continuity breaks at the moment the patient walks out of the clinic and goes home.

*Context.* Osteóplus is an **original fictional brand** for a Barcelona clinic context — a solo concept project, not a client engagement. The product roadmap, audience, and constraints are designed against a realistic clinic scenario but no clinic is currently affiliated. The project may be pitched to a real clinic in the future.

**Why it's hard.**

- The audience floor is set by the **lowest-confidence user**, not the average user. Designing for adults 60+ rules out most conventional health-app patterns.
- Healthcare requires trust through reliability — calm, confirmed, consistent. No hype, no growth-hacky copy, no manipulative urgency.
- Bilingual ES/EN with cultural fit for Barcelona, primary in Spanish.
- Gamification has to motivate without pressure. In rehab, pressured persistence through pain is clinically unsafe.
- PWA-first means the product has to work offline, install cleanly, and run on older devices.

### Visual direction

Two-part layout. **Left:** prose. **Right:** friction map of the Carmen journey — 5 stages on a horizontal track with friction scores. Use slate-600 for low friction, accent orange-700 for high. Each stage shows: stage name, goal, friction level (Low/Medium/High), short pain note.

### Asset placeholders

- **PROB-01** — Carmen journey friction map. 5 horizontal stages (Awareness · Research · Booking · Clinic Visit · Post-Visit Rehab). Each stage: title, 1-line goal, friction indicator. **Friction levels (qualitative, per documented journey map):** Awareness — Medium · **Research — High** · **Booking — High** · Clinic Visit — Medium · **Post-Visit Rehab — High**. Friction data is qualitative; the journey map source does not provide numeric scores.
- **PROB-02** — Inline callout: *"Adherence drops because the system behaves like a passive archive."* Slate-600, italics, no quotation marks.

### Evidence notes

- Journey stages and pain points: `Mapping_Senior_Digital_Health_Journey.md`.
- "Why it's hard" constraints: `osteoplus-project-dna.md`, `DESIGN_SYSTEM.md`, `research.md`.
- Friction labels are qualitative (Medium / High), not numeric — per the journey map source. No numeric scores exist to insert.

---

## 5. User Goals, Research Synthesis & Persona

### Goal
Anchor the case study in Carmen López as a documented archetype, with transparent labeling of research validation gaps.

### Final copy

**Primary archetype.** Carmen López — **Proxy-Dependent Senior**. Age 60+. Chronic back pain referred for osteopathy / physiotherapy. Low digital confidence, phone-first, relies on a family member for digital tasks when the interface assumes confidence.

Carmen is presented here as an **AI-assisted synthesized archetype** informed by senior-UX literature and project documentation — not a real patient and not proof of a multi-participant study. Sample size, recruitment method, validation method, and direct interview transcripts are not part of the available documentation. The case study is transparent about that boundary.

**Core job to be done.** *[Assumption — synthesized JTBD, not a direct user quote]*

> Book without calling. Follow my exercises without asking my daughter.

**Research method.** Journey mapping around the Carmen archetype, with affinity clustering into four research themes:

| Theme | What it means | Design consequence |
|---|---|---|
| **Booking friction-free** | Patients need a low-effort path from intent to appointment; phone calls and family help are fallback behaviors. | Guest-first booking · clear availability · large CTAs · confirmation summaries · minimal account friction. |
| **Trust through reliability** | In healthcare, trust is built through clarity, confirmation, and consistency — not persuasive marketing. | Calm confirmation states · visible status feedback · no hype language. |
| **Personalized exercise confidence** | Rehab adherence depends on knowing what to do today and feeling safe doing it. | Today-first navigation · Daily Rehab Loop · pain interrupt · reminders. |
| **Digital literacy & accessibility** | Low confidence, small targets, dense navigation, and tiny text exclude the 60+ audience. | WCAG 2.2 AA · 48px min targets · 56px primary CTAs · 16–18px body type · plain language · non-color-only status. |

**Design implications.** These four themes drove every IA, flow, and component decision downstream.

### Visual direction

Persona card on the left, themes table on the right. Card structure: header strip with name + archetype label · scenario · JTBD (with `[Assumption]` label visible) · 3 pain points · 4 design implications. Two-column on desktop, stacked on mobile.

### Asset placeholders

- **PERS-01** — Carmen López persona card. Header: name + "Proxy-Dependent Senior" tag in `color/bg/brand` pill. No portrait photo (avoids stock-image bias); use a Lucide `user` icon in a slate-200 avatar circle. Sections: Scenario · JTBD `[Assumption]` · Pain points · Design implications.
- **PERS-02** — Themes table styled as `SNAP-01` (alternating row backgrounds, slate-500 labels).

### Evidence notes

- Carmen archetype: `persona.md` and `Mapping_Senior_Digital_Health_Journey.md`.
- 4 themes: `research.md`.
- JTBD labeled `[Assumption]` per evidence rules (Fix F3 applied).
- Friction scores carry `[Placeholder]` label (Fix F4 applied).
- No direct quotes used. Any user-voice content is labeled `[Synthesized proxy verbatim — source method unconfirmed]` in subsequent sections.

---

## 6. Constraints & Success Criteria

### Goal
Map each non-negotiable to a specific design response. Show that constraints shaped the design, not the other way around.

### Final copy

| Constraint | Why it mattered | Design response |
|---|---|---|
| **WCAG 2.2 AA** | Sets the senior-friendly baseline. Accessibility is a design constraint, not a final QA layer. | Token system built for AA contrast · `prefers-reduced-motion` support · visible focus rings · semantic markup audited against axe-core. |
| **48px min / 56px primary touch targets** | Tap confidence for low-vision and tremor users. Pagination dots and small links exclude older patients. | All interactive sizes verified in design system. 56px reserved for primary patient actions (booking confirm, start session). |
| **Plain language over jargon** | Medical labels create anxiety and reduce comprehension. Carmen needs to recognize the next action without translating it. | 6–8th grade reading level. Service names tested for plain recognition. No shame copy. No urgency triggers. |
| **Spanish-first / English-secondary** | Barcelona patient base. Spanish is the primary language; English secondary, not the default. | Full ES/EN copy deck for navigation, booking, consent, home, exercises. Locale persists via `next-intl` cookie. |
| **PWA-first** | Older devices, intermittent connectivity, low install friction. Native apps add a barrier. | Installable PWA · offline behavior defined · Lighthouse ≥ 95 across vitals · axe-core CI green · Playwright happy path green. |
| **Guest-first booking** | Required accounts push Carmen back to the phone. The first booking must work without authentication. | 3-step wizard: Service → Date & Time → Patient Details. Optional account post-booking. |
| **Clinically safe gamification** | Rehab is not a fitness app. Pressured persistence through pain is unsafe. Shame is harmful. | No punitive streak loss · no shame copy · Pain Interrupt Modal at pain ≥ 7 · soft re-engagement after missed days. |
| **Privacy: pain scores stay encrypted between device and database** | GDPR / LOPDGDD compliance · clinical trust · patients must not feel surveilled. | Pain data never transmitted to analytics. Practitioners see adherence, not raw pain values. Night-time notifications (22:00–07:00) blocked by default. |

### Visual direction

Three-column table. On mobile, stack as cards: each row becomes a card with the constraint as the heading, why and response below. Use `radius/md` cards, slate-200 borders, hover lift on desktop only.

### Asset placeholders

- **CONST-01** — 8-row constraints table, responsive to stacked cards under 768px.

### Evidence notes

- All 8 constraints sourced from `DESIGN_SYSTEM.md` v4.2.0, `osteoplus-project-dna.md` v2.4.0, `research.md`.

---

## 7. Process & Ideation

### Goal
Show the full design process and call out the Medical Repository → Action Dashboard pivot as the strategic turning point.

### Final copy

**The pivot that defined the product.** Early IA work followed a Medical Repository pattern: plan archive as the landing surface, deep menus for appointments, resources, and account. Carmen could not reliably locate her next action.

The shift was structural, not visual: from a passive archive that required Carmen to *browse, remember, interpret, and decide* — to an Action Dashboard that *surfaces the next meaningful action.*

The Today view became the default landing surface. The Daily Rehab Loop replaced "View Plan." Quick actions replaced deep navigation. Reminders replaced generic notifications.

This is documented across the project's strategy materials as the major turning point.

**The full process.** Research → IA → Flows → Wireframes → System → Prototype. Each phase fed the next; each phase was documented as an artifact in the project's source files.

### Visual direction

Horizontal process timeline at the top with 6 phase stops. Below the timeline, a single before/after callout that visualizes the IA pivot — Repository pattern on the left, Action Dashboard pattern on the right, with the strategic shift labeled between them.

### Asset placeholders

- **PROC-01** — Process timeline: 6 nodes connected by a horizontal track. Each node shows phase name, dates *(July 2025 → June 2026, distribute proportionally)*, and 1-line artifact reference.
- **PROC-02** — Before/after IA pivot. **Before:** vertical list nav (Plan · Appointments · Resources · Account). **After:** 4-tab bottom nav (Today · My Care · Chat · Profile) with Today highlighted as default. Annotation between them: *"From browsing to acting."*

### Evidence notes

- Pivot framing and rationale: `research.md` IA Insight section · `Information_Architecture_v2_2.md` v2.2.1.
- Documented as "major turning point" per `research.md`.

---

## 8. Information Architecture & Flow Strategy

### Goal
Show the navigation model, screen-ID anchoring, and rationale for older users.

### Final copy

**Tab model (mobile).** Four bottom tabs, with Today as the default landing surface:

- **Today** — `DASH-01`, `HOME-01`. Agenda + daily habits + quick actions.
- **My Care** — `EXER-01` → `EXER-06`. Rehab plan, daily session, progress.
- **Chat** — `CHAT-01` → `CHAT-04`. Clinic Assistant (with `CHAT-02a` human handoff and `CHAT-03a` safety escalation).
- **Profile** — `PROF-01`. Gamification stats, settings, account.

**Why Today as default.** The Today view trades discoverability of deep medical information for clarity of next action. For Carmen, "what should I do right now" is a higher-value answer than "where is my plan." Deep info remains reachable in two taps — but it's not the first thing she sees.

**Key flow shift (Smart Arrival).**

| | Old flow | New flow |
|---|---|---|
| **Steps** | Open app → search appointment list → view details → look for address | Open app → "Next Up" card at top → one-tap "Get Directions" |
| **Decisions Carmen makes** | 4 | 1 |
| **Outcome** | Phone fallback risk | Maps deep link + parking code copied to clipboard |

**Daily Rehab Loop.** Replaces the passive "View Plan" flow.

1. **Trigger** — push notification or app open.
2. **Action** — land on Dashboard (not appointment list); tap specific task; watch 15s video loop; perform exercise; tap Complete.
3. **Reward** — checkbox animation + haptic + Toast (+10 XP); progress ring fills; if `tasks_remaining == 0`, "Daily Goal Achieved" modal.

### Visual direction

Sitemap diagram on the left showing the 4-tab structure with screen IDs as leaf nodes. Smart Arrival before/after side-by-side comparison on the right. Daily Rehab Loop as a 3-step horizontal flow at the bottom.

### Asset placeholders

- **IA-01** — Sitemap. Root `Osteóplus` → 4 tab nodes → screen-ID leaves (DASH-01, HOME-01, EXER-01–06, CHAT-01–04, CHAT-02a, CHAT-03a, PROF-01, BOOK-01–04).
- **IA-02** — Smart Arrival before/after table styled as `CONST-01`.
- **IA-03** — Daily Rehab Loop 3-step flow: Trigger → Action → Reward. Each step is a card with title, 1-line description, and a Lucide icon (`bell` → `play` → `award`).

### Evidence notes

- Tab model and screen IDs: `Information_Architecture_v2_2.md` v2.2.1.
- Smart Arrival flow: `Core_Flows_V2_2.md` v2.2.0 §2.
- Daily Rehab Loop: `Core_Flows_V2_2.md` v2.2.0 §1.

---

## 9. Design Decisions & Trade-offs

### Goal
Show design judgment through concrete decisions, rejected alternatives, trade-offs, and labeled results.

### Final copy

| Decision | Why | Alternatives rejected | Trade-off | Result label |
|---|---|---|---|---|
| **Today view as default landing surface** | The Repository pattern forced too many decisions. The Today view surfaces the next action directly. | Plan archive as landing (too cognitive). · Appointment list as landing (passive). | Deep medical info is one tap further away. | `[Documented strategy]` Action Dashboard pattern documented in IA v2.2. |
| **Guest-first booking** | Carmen's phone fallback shows that required account creation is a barrier. The first booking must work without authentication. | Required login (adds friction). · Login wall with social SSO only (still excludes non-tech-confident users). | Returning users have weaker tracking until they opt in to an account post-booking. | `[Expected impact]` Lower booking abandonment for 60+ users. |
| **56px primary CTAs (not 48px)** | Carmen's tap confidence requires a larger primary target. 48px is the floor, not the target for high-priority actions. | 48px throughout (excludes tremor and low-vision users from confident interaction). | Fewer CTAs per screen; more vertical space used. | `[Documented constraint]` 56px specified across primary patient actions. |
| **Pain Interrupt Modal at pain ≥ 7** | Patient safety > engagement. Pushing Carmen through pain is clinically unsafe. | Gamified push to continue ("just one more rep"). · Silent logging of pain spikes. | Lower session completion rate by design. | `[Expected impact]` Higher *safe* adherence; tracked via `pain_interrupt_triggered` event. |
| **No punitive streak loss** | Rehab plans need flexibility for pain fluctuations. Streak loss creates pressure and shame. | Streak loss for missed days (industry default). · Streak freeze tokens (still rewards loss aversion). | Weaker "loss aversion" motivation. Streak counter shows current state without penalty UI. | `[Documented guardrail]` Clinically safe motivation, no shame copy. |
| **Pain scores stay encrypted between device and database** | GDPR / LOPDGDD compliance · clinical trust · patients must not feel surveilled. | Aggregate pain analytics (rejected for raw pain). · Practitioner-visible raw pain (rejected). | Practitioner sees adherence and pain interrupt events, not raw pain values. | `[Documented constraint]` Privacy-by-design; pain values stay in encrypted channel. |

### Visual direction

Wide table. Sticky first column on mobile/scroll. Result labels color-coded: blue for `[Documented]`, amber for `[Expected impact]`, slate for `[Recommended]`. Each label uses a small pill chip at the start of the cell.

### Asset placeholders

- **DEC-01** — 6-row trade-off table. Mobile: each row collapses into a card with the decision as the heading, fields stacked below.

### Evidence notes

- All decisions sourced from `osteoplus-project-dna.md`, `DESIGN_SYSTEM.md`, `Core_Flows_V2_2.md`, `Success_Metrics_v2_2.md`, `research.md`.
- Result column uses explicit labels (Fix F2 applied).
- Trimmed from 8 to 6 rows: removed Lucide-icon decision (tactical, not strategic) and Spanish-first row (already covered in §6 Constraints).

---

## 10. Visual Design & Design System Application

### Goal
Show how the visual system was built to enforce senior-friendly interaction — tokens, type scale, components, motion, accessibility annotations.

### Final copy

The design system (canonical source: `DESIGN_SYSTEM.md` v4.2.0 · Figma library v2.1 · snapshot 2026-05-07) is a two-collection token architecture — **primitives + semantic** — sized at 39 components and 442 variants.

**The audit-driven token shift (v4.2.0).** Three token migrations reconciled the Figma library with the implemented UI kit. Each shift was a contrast or legibility decision, not a style preference.

| Token | Before | After | Why |
|---|---|---|---|
| `color/brand/primary` (CTA fill) | `#0D9488` (teal-600) | **`#0F766E` (teal-700)** | Tighter text-on-fill contrast |
| `color/accent/default` | `#FF6B00` (orange-500) | **`#C2410C` (orange-700)** | Tighter accent legibility |
| `color/border/focus` | (varied) | **`#14B8A6` (teal-500)** | Higher focus-ring contrast against teal-700 fills |

**Senior-surface rule.** Patient-facing surfaces default to **18px body type** (`type/body-lg`). Practitioner and operational UI uses 16px. This is a token-level enforcement, not a copy decision — designers can't accidentally ship 14px body on a patient surface.

**Touch target floor.** 48px minimum interactive size · 56px for primary patient actions (booking confirm, start session, pain interrupt CTAs). 48px is the floor, not the target.

**Motion discipline.** All animations respect `prefers-reduced-motion`. No auto-play video. The XP ring fills instantly. The streak flame is static. The level-up modal fades only — no confetti.

**Three components that earn their pixels.**

These three components carry the most weight in shaping how Carmen experiences the product. The rest of the system — full token reference and the remaining 36 components — lives in the companion **Visual Design Specs** file.

`PainInterruptModal` *(EXER-C05)*. Triggers when the pain slider crosses 7. Auto-stops the session. Primary CTA at 56×56 — *Call clinic*. Secondary — *Pause session*. Uses `color/accent/default` (`#C2410C`) on the leading Lucide `shield-alert` icon and `color/text/primary` for the calm copy. No celebratory or urgency motion. The component is the case study's clearest visible expression of the no-pressure ethic.

`RepCounterCard` *(EXER-C02)*. The active exercise card. Large numeric counter at `type/h1` (32px Merriweather, weight 700). +/– buttons at 56×56 with 16px gaps — never crowded. Pain slider directly below the counter (not buried in a settings tray). The position of the pain slider is itself the safety guardrail: pain is recorded *during* the exercise, not after.

`XPRing` *(GAME-14.1)*. 80×80 SVG ring around the gamification hub avatar. Fills on XP gain — instant when `prefers-reduced-motion: reduce`, animated otherwise. Uses `color/brand/primary` (`#0F766E`) for the fill, `color/border/default` for the track. No leaderboard, no comparison with other users. Reward is intrinsic — your ring against itself.

### Visual direction

Three-panel layout. Panel 1: v4.2.0 token shift before/after — 3 swatch pairs with the "why" annotation between each. Panel 2: senior-surface 18px body specimen with Spanish sample sentence. Panel 3: 3-component deep-dive — each component rendered at scale with token references and screen ID, stacked vertically with the rationale on the right.

### Asset placeholders

- **VIS-01** — v4.2.0 token shift visualization. 3 before/after swatch pairs (teal-600 → teal-700, orange-500 → orange-700, focus ring). Annotation under each: "Why" reason from the table.
- **VIS-02** — Senior-surface type specimen: 18px body with Spanish sample ("Hoy tienes 3 ejercicios para hacer en casa") and 16px body comparison.
- **VIS-03** — `PainInterruptModal` rendered at full mobile scale with annotation callouts on icon color, primary CTA size, copy treatment.
- **VIS-04** — `RepCounterCard` rendered at full mobile scale with annotation callouts on counter type style, button size, pain slider position.
- **VIS-05** — `XPRing` rendered at scale with annotation on fill token and reduced-motion fallback.
- **VIS-06** — Light/dark mode comparison of HOME-01 side-by-side.

### Evidence notes

- All tokens, type, motion sourced from `DESIGN_SYSTEM.md` v4.2.0 and `ui-kit.md`.
- Compressed from full inventory to 3 hero components + token-shift audit (Phase 5 review, tightening #4 applied).
- Full token reference and component catalog: see `02-visual-design-specs.md` companion file.

---

## 11. Final Solution

### Goal
Map every solution module to a documented user problem, the UX decision, and expected impact.

### Final copy

**Seven solution modules.** Each module ties a Carmen-documented problem to a specific product surface, the UX decision behind it, and a labeled expected impact.

| User problem | Module | UX decision | Impact label |
|---|---|---|---|
| "I can't find a slot in the app, so I call." | **Guest-first 3-step booking wizard** (BOOK-01 → BOOK-04) | No account required. Service → Date & Time → Patient Details → Confirmation. ICS file + calendar deep link. | `[Expected impact]` Lower booking abandonment for 60+ users · `[Recommended KPI]` Booking task success rate. |
| "I forget which exercise to do today." | **Today view + Daily Rehab Loop** (HOME-01 → EXER-01 → EXER-05) | Today's session at the top of Today view. 3–6 exercises, 10–20 min, video + rep counter + pain slider + mood picker. | `[Expected impact]` Increase Weekly Adherence Rate (North Star). |
| "What if it hurts?" | **Pain Interrupt Modal** (EXER-C05) | Triggers at pain ≥ 7. Auto-stops the session. Calm copy: *We want to keep you safe. Pause this exercise and contact your physio.* | `[Documented guardrail]` Safety event tracked via `pain_interrupt_triggered`. |
| "I missed yesterday." | **No punitive streak loss + soft re-engagement** (GAME-14.2) | Streak counter shows current state without penalty UI. Re-engagement messaging emphasizes consistency, not catch-up. | `[Documented guardrail]` Clinically safe motivation, no shame copy. |
| "The text is too small." | **Senior-facing type scale + 48/56px targets** | 18px body for patient surfaces. 48px minimum touch target. 56px for primary patient CTAs. | `[Recommended KPI]` Task success rate for users 60+ in usability test. |
| "I don't trust web apps with my health data." | **Privacy posture + plain language + ES-first** | Pain scores stay encrypted between device and database. No analytics on raw pain. Practitioners see adherence, not raw pain values. Night-time notifications blocked. | `[Documented constraint]` Trust through reliability theme. |
| "Where do I park?" | **Smart Arrival flow** (Dashboard card → Maps deep link) | "Get Directions" copies parking code to clipboard and launches native maps with destination pre-loaded. "I'm Here" check-in on return. | `[Documented target]` Late arrival rate target `<10%` per Success Metrics v2.3.0. |

**Companion flows.** Emergency Triage (Quick Actions → red modal → one-tap 112/911 call) remains available at all times but never positions the product as an emergency channel.

### Visual direction

Vertical sequence of 7 solution module cards. Each card: 60/40 split — left side prose (user problem · UX decision · impact label as a chip), right side a labeled screenshot of the relevant screen at mobile scale. Cards separated by 32px. Use the Result label chip system from §9.

### Asset placeholders

- **SOL-01** — Module 1: BOOK-01 (service selection) and BOOK-04 (confirmation), side-by-side at mobile scale.
- **SOL-02** — Module 2: HOME-01 (Today view, "Today's exercises" section highlighted) and EXER-03 (rep counter active).
- **SOL-03** — Module 3: EXER-C05 (Pain Interrupt Modal active, slider at 8).
- **SOL-04** — Module 4: GAME-14.2 (StreakCounter card) + soft re-engagement Toast message.
- **SOL-05** — Module 5: HOME-01 annotated with 48px / 56px target overlays and 18px body specimen.
- **SOL-06** — Module 6: ES-first home greeting + consent card from booking flow, with privacy callout.
- **SOL-07** — Module 7: HOME-01 Smart Arrival card + maps deep-link screenshot composition.

### Evidence notes

- All 7 modules sourced from `Core_Flows_V2_2.md`, `Information_Architecture_v2_2.md`, `osteoplus-project-dna.md`, `ui-kit.md`.
- Impact labels apply Fix F2 framework.

---

## 12. Accessibility, Localization & Trust

### Goal
Show accessibility integrated into the narrative with concrete audit data — not appended as a checklist.

### Final copy

Accessibility was a **design constraint at the token level**, not a final QA layer. The system was built so that the easiest path for any designer or developer working with it produces accessible UI by default.

**Audit summary** *(per `A11Y_Audit_Report.md` v1.1.0, re-audit 2026-03-20)*.

| Metric | Value |
|---|---|
| Total findings | 14 |
| Critical open | 0 (2 closed) |
| High open | 0 (5 closed) |
| Medium open | 4 (XP bar label contrast, locked badge contrast, XP progress context, toggle role) |
| Low open | 3 (backlog) |
| Lighthouse a11y score (Onboarding screens) | 82–94 / 100 |
| Lighthouse a11y score (Gamification screens) | 91–95 / 100 |

**Testing matrix.**

- **Platforms.** iOS 17.3 Safari · Android 14 Chrome · macOS Sonoma Chrome · Windows 11 Edge.
- **Assistive tech.** VoiceOver (iOS, macOS) · TalkBack (Android) · NVDA (Windows).
- **Automated.** Lighthouse 11.4 · axe DevTools 4.8 · Stark (Figma) · WebAIM contrast checker.

**Touch targets.** 48px minimum confirmed across audited screens (ONBR-02, ONBR-03 after fix, ONBR-04 after fix, GAME-01 through GAME-04). 56px reserved for primary patient actions.

**Color contrast.** All primary text passes 4.5:1 minimum. Two medium-priority contrast issues remain open in v1.1.0 (XP bar label and locked badge text) — both have documented remediation in design backlog.

**Focus visibility.** 2px teal-500 ring on all interactive elements. Confirmed across keyboard navigation tests on ONBR-02, ONBR-03, ONBR-04, GAME-01 through GAME-04.

**Reduced motion.** All animations have static alternatives. XP bar fill becomes instant. Streak flame becomes static. Level-up confetti is suppressed. Slide transitions become instant cuts.

**Localization.** Full ES/EN copy deck shipped for navigation, language toggle, home screen, and the booking + consent flow. Plain language at 6–8th grade reading level. Locale persists via `next-intl` cookie. ES is the primary language; EN is secondary, not the default.

**Trust & privacy.**

- Pain scores never leave the device-to-DB encrypted channel.
- Practitioner dashboard shows adherence, not raw pain.
- Night-time notifications (22:00–07:00) blocked by default; opt-in required.
- GDPR / LOPDGDD compliance baseline.
- No dark patterns. No urgency triggers. No persuasive marketing language on patient surfaces.

### Visual direction

Three-row layout. Row 1: audit summary cards (4 cards: findings · critical/high · Lighthouse range · platforms tested). Row 2: annotated screen showing tap targets, focus ring, contrast ratios printed inline on a HOME-01 specimen. Row 3: localization + trust callouts with Lucide icons (`languages`, `shield`, `moon`).

### Asset placeholders

- **A11Y-01** — Audit summary: 4 metric cards laid out as a 4-column grid (or 2×2 on mobile).
- **A11Y-02** — Annotated HOME-01. Overlays: 48px target boundary (dotted), 56px primary CTA boundary, 2px teal-500 focus ring on the active CTA, contrast ratio labels (e.g. "15.8 : 1") printed beside the title.
- **A11Y-03** — Three callout cards: Localization (ES/EN) · Trust (encrypted pain) · Quiet hours (no night notifications).

### Evidence notes

- All audit numbers sourced from `A11Y_Audit_Report.md` v1.1.0 (2026-03-20 re-audit).
- Open medium and low findings disclosed honestly; no claim of "100% pass."

---

## 13. Impact & Metrics

### Goal
Present impact as a measurement strategy with an explicit evidence hierarchy. No fabricated outcomes.

### Final copy

The product is in design / concept phase. Post-launch analytics are not yet available. Impact is therefore framed as a **measurement strategy**, anchored on the documented North Star metric and supported by a labeled KPI family.

**North Star (documented).**

- **Weekly Adherence Rate** — % of assigned rehab tasks completed on time within the current week. *(`Success_Metrics_v2_2.md` v2.3.0)*

**Documented targets** *(from Success Metrics v2.3.0, not yet measured against real users).*

| KPI | Target signal | Source |
|---|---|---|
| Weekly Adherence Rate | Upward trend; band defined with clinical ops | Documented North Star |
| Booking Success Rate | `>90%` | Documented target from Success Metrics — no organizational commitment |
| Exercise Completion Rate | `>75%` | Documented primary KPI |
| DAU / MAU | `>25%` | Documented |
| 3+ day streak retention | `>40%` | Documented |
| Badge unlock rate | `1.5+` per user per month | Documented |
| Late arrival rate | `<10%` | Documented |
| Cheat / integrity rate | `<5%` | Documented guardrail |

**Expected impact** *(designer reasoning from documented user problems and design responses; not measured).*

- Guest-first booking lowers booking abandonment for users 60+ (vs. account-required pattern).
- Today view + Daily Rehab Loop increase Weekly Adherence Rate (vs. archive-style "View Plan").
- Smart Arrival flow reduces direction-related support calls (currently tracked qualitatively).
- Pain Interrupt Modal trades raw completion rate for safer adherence.

**Recommended KPIs** *(proposed for tracking; not yet committed in analytics taxonomy).*

| KPI | Definition |
|---|---|
| Task success rate (60+ users) | % of users 60+ completing booking without assistance — measured in moderated usability testing |
| Time-on-task | Median time from service selection to confirmation |
| Pain interrupt rate | % of sessions where the patient triggers the pain interrupt — safety guardrail |
| PWA install acceptance | % of eligible users who accept the install prompt |
| PWA install-to-retention lift | 7-day and 30-day retention delta between installed PWA and browser-only users |
| 7-day retention | Cohort retention 7 days post-first-session |
| 30-day retention | Cohort retention 30 days post-first-session |
| Reminder usefulness | Patient-rated helpfulness of reminders (1–5) |

**Guardrail metrics** *(prevent unsafe optimization).*

- High-pain users completing tasks after warning → minimize, investigate spikes.
- Night-time notification sends (22:00–07:00) → zero unless explicitly opted in.
- Accessibility defects on core flows → zero unresolved critical/high before any rollout.

**Placeholders requiring author validation before publish.**

- Sample sizes for any future usability tests.
- Direct user quotes.
- Post-launch baseline metrics.
- A/B test results.
- Numeric friction scores from `Mapping_Senior_Digital_Health_Journey.md`.

### Visual direction

Vertical stack. Card 1: North Star with definition. Card 2: Documented targets table. Card 3: Expected impact bullets with `[Expected impact]` chips. Card 4: Recommended KPIs table. Card 5: Guardrails callout with `shield` icon. Card 6: Placeholders list with `circle-help` icon. Use evidence-hierarchy color coding (blue documented / amber expected / slate recommended / red placeholder).

### Asset placeholders

- **IMP-01** — North Star card. Large display: "Weekly Adherence Rate" with one-line definition below.
- **IMP-02** — Documented targets table (8 rows).
- **IMP-03** — Expected impact bullets (4 items, with chip labels).
- **IMP-04** — Recommended KPIs table (8 rows).
- **IMP-05** — Guardrails callout card.
- **IMP-06** — Placeholders list.

### Evidence notes

- All documented targets sourced from `Success_Metrics_v2_2.md` v2.3.0.
- Recommended KPIs sourced from `research.md` validation plan.
- Retention KPIs added per Fix F12.

---

## 14. Reflection & Lessons Learned

### Goal
Reflect specifically on senior-friendly healthcare UX; show maturity through trade-off thinking, not generic lessons.

### Final copy

Designing a clinical product for adults 60+ taught me that **what you don't measure matters as much as what you do**. I chose to label evidence gaps rather than fabricate confidence. Research method, sample size, validation status, friction scores — every claim with weak documentation got a `[Placeholder]` or `[Assumption]` label instead of a confident sentence.

**The hardest decision.** Designing motivation without pressure. Most gamification patterns that work for fitness apps — loss aversion via streak loss, leaderboard pressure, deadline urgency — are clinically unsafe for rehab patients. A streak loss after Carmen had a pain flare is not just an unfriendly UI moment; it's a design failure that can push a real patient through pain they shouldn't be pushed through.

The Loop had to reward consistency without punishing interruption. That meant no punitive streak loss, no shame copy, no urgency triggers, soft re-engagement after missed days, and a Pain Interrupt Modal that *removes Carmen from the session* the moment her pain crosses a threshold. The trade-off is honest: session completion rate will be lower than it would be with pressure mechanics. That lower number is the right number.

**The biggest IA trade-off.** Choosing the Today view as the default landing surface trades discoverability of deep medical information for clarity of next action. Carmen can find her full plan in two taps, but she sees today's task first. For a patient who forgets exercises between visits, that ordering matters more than any deep-feature inventory.

**What I would validate next.**

- Moderated usability testing with 5–8 adults 60+ on the booking flow — measuring task success rate, time-on-task, error rate, and support dependency.
- Pain interrupt rate as a live safety guardrail once the product reaches a first patient cohort.
- Bilingual content review with senior ES-speaking users — comprehension, tone, sense of safety.
- PWA install acceptance rate vs. browser-only retention delta.
- A Weekly Adherence Rate baseline once the first cohort is live, then a band defined with clinical ops.

**The lesson I'll carry forward.** In a senior healthcare product, accessibility, evidence discipline, and ethical guardrails aren't three workstreams — they're one decision, made at the token level, the IA level, and the copy level, every time.

### Visual direction

Long-form reading layout. Max-width 680px. Each subsection has a small leading Lucide icon: `compass` (hardest decision) · `layers` (IA trade-off) · `flask-conical` (what I'd validate) · `lightbulb` (lesson). Pull quote treatment for the lead sentence — Merriweather italic, slate-700, 24px.

### Asset placeholders

- **REF-01** — Pull quote card with the lead sentence.
- **REF-02** — Validation roadmap visual: 5 horizontal cards listing the next-validate items, each with a target stage badge (e.g. "Before Beta", "First Cohort", "Ongoing").

### Evidence notes

- Reflection rewritten per Fix F5 — frames evidence discipline as a design choice, not an apology.
- Validation roadmap sourced from `research.md` recommended validation plan.

---

## 15. What this case study demonstrates

### Goal
Recruiter-facing 5–7 bullets that name the specific capabilities visible in the work.

### Final copy

**For recruiters and hiring managers.**

- **Strategic IA judgment.** Identified and named the Medical Repository → Action Dashboard shift as the product's central design decision, and let that one IA call cascade into navigation, flows, and surface design.
- **Accessibility as a design constraint, not a QA step.** Built WCAG 2.2 AA, 48/56px touch targets, focus visibility, reduced motion, and non-color-only status into the token system — so accessibility is the default, not a remediation pass.
- **Evidence discipline.** Separated documented / expected / recommended / placeholder across every claim. Labeled what I don't know rather than fabricating outcomes.
- **Design system thinking.** Worked from a two-collection token architecture (primitives + semantic), light/dark themes, 39 components / 442 variants, and applied an audit-driven token migration (v4.2.0 brand teal `#0F766E`, accent orange-700 `#C2410C`, tighter focus-ring contrast).
- **Ethics of motivation.** Designed clinically safe gamification — no shame copy, no punitive streak loss, Pain Interrupt Modal at pain ≥ 7. Chose patient safety over engagement metrics, and labeled the trade-off honestly.
- **Bilingual product design.** Built a Spanish-first / English-secondary product with a full ES/EN copy deck for navigation, booking, and consent. ES is the default; EN is secondary by design choice, not omission.
- **Trade-off literacy.** Documented decisions with rejected alternatives, named trade-offs, and labeled results (documented / expected / recommended).

### Visual direction

7-bullet card with Lucide icons (`compass`, `accessibility`, `clipboard-check`, `layers-3`, `shield-check`, `languages`, `scale`). Light card background, slate-200 border, sticky on desktop sidebar if portfolio layout supports it.

### Asset placeholders

- **DEMO-01** — 7-bullet card with leading icons.

### Evidence notes

- All 7 bullets backed by sections 5–13 of this case study.

---

## 16. Appendix

### Goal
Make the evidence base, open questions, and unverified claims transparent.

### Final copy

**Source documents** *(all read from project knowledge during Phase 1 Discovery).*

| File | Type | Key content used |
|---|---|---|
| `osteoplus-case-study-generator-prompt-v2.md` | Meta | 5-phase workflow, 16-section template, quality gate |
| `osteoplus-case-study-project-initialization.md` | Meta | Narrative strategy, source-inventory rules, impact framing |
| `DESIGN_SYSTEM.md` v4.2.0 | Design system | Canonical tokens, type, components, audit-driven migration |
| `osteoplus-design-system.md` | Design system | Implementation-focused mirror |
| `osteoplus-project-dna.md` v2.4.0 | Product | Audience, three pillars, roadmap, definition of done |
| `ui-kit.md` | Components | Component catalog (39 components / 442 variants) |
| `brand-kit.md` | Brand | Voice, logo, bilingual content |
| `style-guide.md` | Content | Writer-facing tone + visual style guide |
| `Information_Architecture_v2_2.md` v2.2.1 | IA | Tab model, screen IDs, sitemap, IA shift |
| `Core_Flows_V2_2.md` v2.2.0 | Flows | Daily Rehab Loop, Smart Arrival, Emergency Triage |
| `Success_Metrics_v2_2.md` v2.3.0 | Metrics | North Star, KPI family, guardrails, event taxonomy |
| `Goals.md` | Product | Product goals |
| `Mapping_Senior_Digital_Health_Journey.md` | Research | Carmen López journey map, 5 stages, friction signatures |
| `persona.md` | Research | Carmen persona card, archetype, design implications |
| `research.md` | Research | Method, themes, IA insight, North Star rationale, validation plan |
| `A11Y_Audit_Report.md` v1.1.0 | A11Y | 14 findings, Lighthouse scores, AT testing matrix |
| `Screen_ID_Registry_v1_0.md` | IA | Canonical screen IDs |
| `Deck_Complete_ES_EN.md` | Content | ES/EN copy deck for booking + consent |
| `API_Contract.md` | Backend | Supabase schemas (referenced for context, not directly cited) |

**Adapted open-source primitives.** This project adapts and credits the following open-source projects: **Lucide** (icon system, ISC license) · **shadcn/ui** (component primitives, MIT license) · **Radix UI** (accessibility primitives, MIT license) · **Tailwind CSS** (utility framework, MIT license) · **21st.dev** (component patterns). Branding, design system tokens, content, and final composition are original to this project.

**Open questions requiring author validation.**

*Role & ownership.* — Confirmed: locked framing per §1. Owned end-to-end; AI-assisted execution for research collection and initial drafts.

*Timeline & team.* — Confirmed: July 2025 → ongoing. Solo project with AI augmentation.

*Tools.* — Confirmed: Figma · Adobe CC (Photoshop, Illustrator, Acrobat, Firefly) · Claude · Claude Code · ChatGPT (Codex) · Gemini (Antigravity) · Cursor.

*Research methods & validation.*

- Friction data is **qualitative (Medium / High)** per `Mapping_Senior_Digital_Health_Journey.md`. No numeric scores exist.
- Carmen López is an **AI-assisted synthesized archetype** informed by senior-UX literature and project documentation — not a real patient and not proof of a multi-participant study.
- No external usability testing has been conducted. Future validation: 5–8 adults 60+ on booking, Today view, Daily Rehab Loop, Pain Interrupt comprehension, and Smart Arrival (see `10-phase-5-plus-revision-protocol.md`).

*Actual metrics.* — All current metrics are documented targets, expected impact, or recommended KPIs. No post-launch baselines exist. The only documented quantitative outcome is the accessibility audit (`A11Y_Audit_Report.md` v1.1.0).

*Visual assets.* — See `05-asset-checklist.md` for status of each visual.

*Launch status.* — **Roadmap target only**: Beta Q2 2026, GA Q3 2026. Product is not shipped. Osteóplus is an original fictional brand for a Barcelona clinic context — not a client engagement.

**Claims that remain labeled before publishing.**

- JTBD direct-quote framing — `[Assumption — synthesized JTBD, not a direct user quote]`.
- Any user-voice content from the Carmen journey — `[Synthesized proxy verbatim]`. No promotion to "real verbatim" unless a future participant or stakeholder source exists.
- Sample size and recruitment method for any future usability testing — to be filled when testing is run.

---

*End of case study.*
