"use client";

import React from "react";
import * as LucideIcons from "lucide-react";

// Osteóplus case study — content data + ES/EN strings for mockup copy
// English on the page; Spanish-first on patient mockups (toggleable)

const COPY = {
  es: {
    greeting: "Buenas, Carme",
    homeTitle: "¿Cómo está la espalda hoy?",
    nextAppt: "Próxima cita",
    confirmed: "Confirmada",
    drName: "Dra. Sarah Mitchell",
    drRole: "Osteopatía · 45 min",
    apptTime: "Jueves, 14 abr · 10:30 – 11:15",
    getDirections: "Cómo llegar",
    parkingCode: "Parking · código 4729",
    todaysExercises: "Ejercicios de hoy",
    sessionMeta: "3 ejercicios · 15 min",
    startSession: "Empezar sesión",
    quickActions: "Acciones rápidas",
    book: "Reservar",
    chat: "Chatear",
    plan: "Mi plan",
    help: "Ayuda",
    today: "Hoy",
    myCare: "Mi cuidado",
    chatTab: "Chat",
    profile: "Perfil",
    // Booking flow
    bookAppt: "Reservar cita",
    chooseService: "Elige un servicio",
    osteo: "Osteopatía",
    osteoDesc: "Tratamiento manual suave para aliviar el dolor.",
    physio: "Fisioterapia",
    physioDesc: "Rehabilitación dirigida con un fisioterapeuta.",
    rehab: "Rehabilitación",
    rehabDesc: "Programas guiados para recuperar movilidad.",
    next: "Siguiente",
    // Confirmation
    allSet: "Todo listo, Carme.",
    confirmSent: "Hemos enviado la confirmación a tu correo.",
    addToCal: "Añadir al calendario",
    callClinic: "Llamar a la clínica",
    // Exercise / rep counter
    exerciseTitle: "Inclinación de pelvis",
    exerciseProgress: "Ejercicio 2 de 3",
    reps: "Repeticiones",
    target: "Objetivo: 10",
    painLevel: "Nivel de dolor",
    painHint: "Desliza si sientes molestias",
    complete: "Marcar como hecho",
    // Pain interrupt
    painPause: "Vamos a pausar aquí",
    painCopy: "Queremos cuidarte. Pausa este ejercicio y avisa a tu fisio si el dolor sigue.",
    callPhysio: "Llamar a la clínica",
    pauseSession: "Pausar sesión",
    // Streak / gamification
    streakDays: "días seguidos",
    streakTitle: "Buen ritmo, Carme",
    streakSub: "Has hecho ejercicio 4 de los últimos 7 días.",
    toastTitle: "¿Hacemos uno hoy?",
    toastSub: "Empezamos con algo suave. Sin prisa.",
    startNow: "Empezar ahora",
    later: "Más tarde",
    // Smart arrival
    smartArrival: "Llegando a la clínica",
    inMinutes: "En 12 min",
    iAmHere: "Ya he llegado",
    // Notifications
    notifBell: "Notificaciones",
  },
  en: {
    greeting: "Good morning, Carme",
    homeTitle: "How's the back today?",
    nextAppt: "Next appointment",
    confirmed: "Confirmed",
    drName: "Dr. Sarah Mitchell",
    drRole: "Osteopathy · 45 min",
    apptTime: "Thu, Apr 14 · 10:30 – 11:15 AM",
    getDirections: "Get directions",
    parkingCode: "Parking · code 4729",
    todaysExercises: "Today's exercises",
    sessionMeta: "3 exercises · 15 min",
    startSession: "Start session",
    quickActions: "Quick actions",
    book: "Book",
    chat: "Chat",
    plan: "My plan",
    help: "Help",
    today: "Today",
    myCare: "My care",
    chatTab: "Chat",
    profile: "Profile",
    bookAppt: "Book appointment",
    chooseService: "Choose a service",
    osteo: "Osteopathy",
    osteoDesc: "Gentle manual treatment to relieve pain.",
    physio: "Physiotherapy",
    physioDesc: "Targeted rehab with a physiotherapist.",
    rehab: "Rehabilitation",
    rehabDesc: "Guided programs to regain mobility.",
    next: "Next",
    allSet: "You're all set, Carme.",
    confirmSent: "We sent the confirmation to your email.",
    addToCal: "Add to calendar",
    callClinic: "Call the clinic",
    exerciseTitle: "Pelvic tilt",
    exerciseProgress: "Exercise 2 of 3",
    reps: "Repetitions",
    target: "Target: 10",
    painLevel: "Pain level",
    painHint: "Slide if you feel discomfort",
    complete: "Mark as done",
    painPause: "Let's pause here",
    painCopy: "We want to keep you safe. Pause this exercise and call your physio if pain continues.",
    callPhysio: "Call the clinic",
    pauseSession: "Pause session",
    streakDays: "days in a row",
    streakTitle: "Good rhythm, Carme",
    streakSub: "You've moved 4 of the last 7 days.",
    toastTitle: "Want to do one today?",
    toastSub: "We'll start with something gentle. No rush.",
    startNow: "Start now",
    later: "Later",
    smartArrival: "Arriving at the clinic",
    inMinutes: "In 12 min",
    iAmHere: "I'm here",
    notifBell: "Notifications",
  },
};

// Process timeline phases
const PHASES = [
  { n: "01", label: "Research",   date: "Jul – Sep 2025", artifact: "research.md · Carmen journey map" },
  { n: "02", label: "IA",         date: "Sep – Nov 2025", artifact: "Information Architecture v2.2" },
  { n: "03", label: "Flows",      date: "Nov 2025 – Jan 2026", artifact: "Core Flows v2.2" },
  { n: "04", label: "Wireframes", date: "Jan – Feb 2026", artifact: "Wireframe set v1" },
  { n: "05", label: "System",     date: "Feb – Apr 2026", artifact: "Design System v4.2.0" },
  { n: "06", label: "Prototype",  date: "Apr – ongoing",  artifact: "Hi-fi mocks · usability prep" },
];

// Solution modules (Final Solution §11)
const SOLUTIONS = [
  {
    n: "01",
    problem: "I can't find a slot in the app, so I call.",
    title: "Guest-first 3-step booking",
    decision: "No account required. Service → Date & Time → Patient Details → Confirmation. ICS file plus calendar deep link.",
    rejected: "Required login (recreates the phone fallback). Social SSO (still excludes non-tech-confident users).",
    tradeoff: "Weaker tracking for returning users until they opt in to an account post-booking.",
    label: "Expected impact",
    labelKind: "expected",
    metric: "Booking task success rate · 60+ users",
    mockup: "Booking",
    liveUrl: "https://osteoplus-v2-9.vercel.app/es/booking",
    behind: { source: "Core_Flows_V2_2.md §3 · osteoplus-project-dna.md", screens: "BOOK-01 → BOOK-04", components: "ServicePicker, DateStrip, ConfirmationCard" },
  },
  {
    n: "02",
    problem: "I forget which exercise to do today.",
    title: "Today view + Daily Rehab Loop",
    decision: "Today's session sits at the top of the home view. 3–6 exercises, 10–20 min, video + rep counter + pain slider + mood check.",
    rejected: "Generic 'View Plan' archive. Push-only reminders without an in-app surface.",
    tradeoff: "Deep medical info is one tap further from the landing surface.",
    label: "Expected impact",
    labelKind: "expected",
    metric: "Increase Weekly Adherence Rate (North Star)",
    mockup: "Today",
    liveUrl: "https://osteoplus-v2-9.vercel.app/es",
    behind: { source: "Core_Flows_V2_2.md §1 · Information_Architecture_v2_2.md", screens: "HOME-01, EXER-01 → EXER-05", components: "SessionProgressHeader, RepCounterCard, MoodPicker" },
  },
  {
    n: "03",
    problem: "What if it hurts?",
    title: "Pain Interrupt Modal",
    decision: "Triggers when the pain slider crosses 7. Auto-stops the session. Primary CTA calls the clinic. Calm copy, no urgency triggers.",
    rejected: "Gamified 'just one more rep' nudge. Silent logging of pain spikes for later review.",
    tradeoff: "Lower raw session completion rate by design — the lower number is the right number.",
    label: "Documented guardrail",
    labelKind: "documented",
    metric: "Safety event tracked via pain_interrupt_triggered",
    mockup: "PainInterrupt",
    liveUrl: "https://osteoplus-v2-9.vercel.app/es",
    behind: { source: "Core_Flows_V2_2.md §4 · A11Y_Audit_Report.md", screens: "EXER-C05", components: "PainInterruptModal, PainSlider" },
  },
  {
    n: "04",
    problem: "I missed yesterday.",
    title: "Streaks without punishment",
    decision: "No streak loss, no shame copy. Re-engagement messaging emphasizes consistency, not catch-up. Soft toast invites a gentle session.",
    rejected: "Streak loss for missed days (industry default). Streak freeze tokens (still trades on loss aversion).",
    tradeoff: "Weaker loss-aversion motivation. Streak counter shows current state without penalty UI.",
    label: "Documented guardrail",
    labelKind: "documented",
    metric: "Clinically safe motivation",
    mockup: "Streak",
    liveUrl: "https://osteoplus-v2-9.vercel.app/es",
    behind: { source: "Core_Flows_V2_2.md §2 · research.md (Themes)", screens: "GAME-14.2, GAME-14.3", components: "StreakCounter, ReEngagementToast" },
  },
  {
    n: "05",
    problem: "The text is too small.",
    title: "Senior-facing type scale + 48 / 56 targets",
    decision: "18px body for patient surfaces. 48px minimum touch target. 56px for primary patient CTAs. Token-enforced, not optional.",
    rejected: "Per-screen scale overrides for visual density. 44px iOS-default targets.",
    tradeoff: "Fewer items per screen; more vertical scroll on small devices.",
    label: "Recommended KPI",
    labelKind: "recommended",
    metric: "Task success rate for users 60+",
    mockup: "TodayClean",
    annotatedInA11Y: true,
    liveUrl: "https://osteoplus-v2-9.vercel.app/es",
    behind: { source: "DESIGN_SYSTEM.md v4.2.0 · token migration notes", screens: "HOME-01 · annotated A11Y-02", components: "Type tokens type/body-lg, Touch tokens touch/min, touch/lg" },
  },
  {
    n: "06",
    problem: "I don't trust web apps with my health data.",
    title: "Privacy posture + plain language",
    decision: "Pain scores stay encrypted device-to-DB. Practitioners see adherence, not raw pain. Night-time notifications blocked by default.",
    rejected: "Aggregate pain analytics. Practitioner-visible raw pain values.",
    tradeoff: "Practitioner sees adherence and pain-interrupt events, not raw pain.",
    label: "Documented constraint",
    labelKind: "documented",
    metric: "Trust through reliability",
    mockup: "Privacy",
    liveUrl: "https://osteoplus-v2-9.vercel.app/es",
    behind: { source: "API_Contract.md · Deck_Complete_ES_EN.md (consent)", screens: "BOOK-03", components: "ConsentCard, QuietHoursToggle" },
  },
  {
    n: "07",
    problem: "Where do I park?",
    title: "Smart Arrival",
    decision: "\"Get directions\" copies the parking code and launches native maps with the destination pre-loaded. \"I'm here\" check-in on return.",
    rejected: "Address-only display (Carmen still calls). In-app embedded map (adds load, harder for screen readers).",
    tradeoff: "Relies on the OS map app; on-glass embedded directions are out of scope.",
    label: "Documented target",
    labelKind: "documented",
    metric: "Late arrival rate < 10%",
    mockup: "SmartArrival",
    liveUrl: "https://osteoplus-v2-9.vercel.app/es",
    behind: { source: "Core_Flows_V2_2.md §2 (Smart Arrival)", screens: "HOME-01b · Maps deep link", components: "SmartArrivalCard, ParkingCodeChip" },
  },
];

// A11Y audit numbers
const AUDIT = [
  { value: "14", label: "Total findings", sub: "Audit v1.1.0 · 2026-03-20" },
  { value: "0",  label: "Critical open",  sub: "2 closed" },
  { value: "0",  label: "High open",      sub: "5 closed" },
  { value: "82–95", label: "Lighthouse a11y", sub: "Across audited screens" },
];

const A11Y_CALLOUTS = [
  { icon: "languages", title: "Bilingual ES / EN",   body: "Full Spanish-first copy deck for navigation, booking, consent, home, and exercises. Locale persists via cookie." },
  { icon: "shield",    title: "Encrypted pain data", body: "Pain scores stay between device and DB. Practitioners see adherence, not raw pain. No analytics on pain values." },
  { icon: "moon",      title: "Quiet hours",         body: "Night-time notifications (22:00 – 07:00) blocked by default. Opt-in required. No urgency triggers anywhere." },
];

// TOC sections — updated to 10 anchors after the v2 revision pass
const TOC = [
  { id: "hero",          label: "Overview" },
  { id: "tldr",          label: "TL;DR" },
  { id: "process",       label: "Process" },
  { id: "persona",       label: "Persona" },
  { id: "solution",      label: "Solution" },
  { id: "decisions",     label: "Decisions" },
  { id: "accessibility", label: "A11y" },
  { id: "impact",        label: "Impact" },
  { id: "reflection",    label: "Reflection" },
  { id: "credits",       label: "Credits" },
];

// Persona — 4 research themes
const PERSONA_THEMES = [
  { name: "Booking friction-free",       blurb: "Patients need a low-effort path from intent to appointment; phone calls and family help are fallback behaviors.", impl: "Guest-first booking · large CTAs · confirmation summaries" },
  { name: "Trust through reliability",   blurb: "In healthcare, trust is built through clarity and consistency — not persuasive marketing.",                         impl: "Calm confirmation states · visible status feedback · no hype" },
  { name: "Personalized exercise confidence", blurb: "Rehab adherence depends on knowing what to do today and feeling safe doing it.",                              impl: "Today-first navigation · Daily Rehab Loop · Pain Interrupt" },
  { name: "Digital literacy & accessibility", blurb: "Low confidence, small targets, dense navigation, and tiny text exclude the 60+ audience.",                     impl: "WCAG 2.2 AA · 48 / 56px targets · 18px body · plain language" },
];

// Decisions & trade-offs (6 rows)
const DECISIONS = [
  {
    title: "Today view as default landing surface",
    label: "Documented strategy", labelKind: "documented",
    why: "The Repository pattern forced too many decisions. The Today view surfaces the next action directly.",
    rejected: "Plan archive as landing (too cognitive). Appointment list as landing (passive).",
    tradeoff: "Deep medical info is one tap further away.",
  },
  {
    title: "Guest-first booking",
    label: "Expected impact", labelKind: "expected",
    why: "Carmen's phone fallback shows required account creation is the barrier. First booking must work without authentication.",
    rejected: "Required login. Social SSO (still excludes non-tech-confident users).",
    tradeoff: "Returning users have weaker tracking until they opt in to an account post-booking.",
  },
  {
    title: "56px primary CTAs (not 48px)",
    label: "Documented constraint", labelKind: "documented",
    why: "48px is the WCAG floor. 56px is the target for primary patient actions — tap confidence for tremor and low-vision users.",
    rejected: "48px throughout. Excludes part of the audience from confident interaction.",
    tradeoff: "Fewer CTAs per screen; more vertical space.",
  },
  {
    title: "Pain Interrupt Modal at pain ≥ 7",
    label: "Documented guardrail", labelKind: "documented",
    why: "Patient safety > engagement. Pushing Carmen through pain is clinically unsafe.",
    rejected: "Gamified push to continue. Silent logging of pain spikes.",
    tradeoff: "Lower session completion rate by design. Lower completion is the right number.",
  },
  {
    title: "No punitive streak loss",
    label: "Documented guardrail", labelKind: "documented",
    why: "Rehab plans need flexibility for pain fluctuations. Streak loss creates pressure and shame.",
    rejected: "Streak loss for missed days. Streak freeze tokens (still rewards loss aversion).",
    tradeoff: "Weaker loss-aversion lever. Streak counter shows current state without penalty UI.",
  },
  {
    title: "Pain scores stay encrypted between device and database",
    label: "Documented constraint", labelKind: "documented",
    why: "GDPR / LOPDGDD compliance. Clinical trust. Patients must not feel surveilled.",
    rejected: "Aggregate pain analytics. Practitioner-visible raw pain.",
    tradeoff: "Practitioner sees adherence and pain-interrupt events, not raw pain values.",
  },
];

// Impact metrics
const NORTH_STAR = {
  label: "North Star",
  name: "Weekly Adherence Rate",
  def: "Percent of assigned rehab tasks completed on time within the current week.",
};
const DOCUMENTED_TARGETS = [
  { name: "Booking Success Rate",     target: "> 90%",           note: "No organizational commitment" },
  { name: "Exercise Completion Rate", target: "> 75%",           note: null },
  { name: "DAU / MAU",                target: "> 25%",           note: null },
  { name: "3+ day streak retention",  target: "> 40%",           note: null },
  { name: "Badge unlock rate",        target: "≥ 1.5 / user / mo", note: null },
  { name: "Late arrival rate",        target: "< 10%",           note: null },
];
const EXPECTED_IMPACT = [
  "Guest-first booking lowers booking abandonment for users 60+ (vs. account-required pattern).",
  "Today view + Daily Rehab Loop increase Weekly Adherence Rate (vs. archive-style \"View Plan\").",
  "Smart Arrival reduces direction-related support calls.",
  "Pain Interrupt Modal trades raw completion rate for safer adherence.",
];
const RECOMMENDED_KPIS = [
  { name: "Task success rate (60+ users)", note: "Measured in moderated usability testing" },
  { name: "Time-on-task",                  note: "Median time from service selection to confirmation" },
  { name: "Pain interrupt rate",           note: "Safety guardrail" },
  { name: "PWA install acceptance",        note: null },
  { name: "7-day & 30-day retention",      note: null },
  { name: "Reminder usefulness rating",    note: "Patient-rated 1–5" },
];
const GUARDRAILS = [
  "High-pain users completing tasks after warning → minimize, investigate spikes.",
  "Night-time notification sends (22:00 – 07:00) → zero unless explicitly opted in.",
  "Accessibility defects on core flows → zero unresolved critical / high before any rollout.",
];

// Reflection
const REFLECTION = {
  pullQuote: "Designing a clinical product for adults 60+ taught me that what you don't measure matters as much as what you do.",
  blocks: [
    {
      title: "The hardest decision",
      body: [
        "Designing motivation without pressure. Most gamification patterns that work for fitness apps — loss aversion via streak loss, leaderboard pressure, deadline urgency — are clinically unsafe for rehab patients. A streak loss after Carmen had a pain flare is not just an unfriendly UI moment; it's a design failure that can push a real patient through pain they shouldn't be pushed through.",
        "The trade-off is honest: session completion rate will be lower than it would be with pressure mechanics. <strong>That lower number is the right number.</strong>",
      ],
    },
    {
      title: "The biggest IA trade-off",
      body: [
        "Choosing the Today view as the default landing surface trades discoverability of deep medical information for clarity of next action. Carmen can find her full plan in two taps, but she sees today's task first. For a patient who forgets exercises between visits, that ordering matters more than any deep-feature inventory.",
      ],
    },
    {
      title: "What I'd validate next",
      list: [
        "Moderated usability testing with 5–8 adults 60+ on the booking flow — task success, time-on-task, error rate, support dependency.",
        "Pain interrupt rate as a live safety guardrail with the first patient cohort.",
        "Bilingual content review with senior Spanish-speaking users — comprehension, tone, sense of safety.",
        "PWA install acceptance rate vs. browser-only retention delta.",
        "Weekly Adherence Rate baseline once the first cohort is live, then a band defined with clinical ops.",
      ],
    },
    {
      title: "The lesson I'll carry forward",
      body: [
        "In a senior healthcare product, accessibility, evidence discipline, and ethical guardrails aren't three workstreams — they're <strong>one decision</strong>, made at the token level, the IA level, and the copy level, every time.",
      ],
      closer: true,
    },
  ],
};

const OP_DATA = { COPY, PHASES, SOLUTIONS, AUDIT, A11Y_CALLOUTS, TOC, PERSONA_THEMES, DECISIONS, NORTH_STAR, DOCUMENTED_TARGETS, EXPECTED_IMPACT, RECOMMENDED_KPIS, GUARDRAILS, REFLECTION };


// Osteóplus case study — phone frame + shared mockup primitives
// All mockups render at 375x812 (iPhone-ish) inside a soft bezel.

function Icon({ n, s = 20, c, sw = 1.75, style }) {
  const iconName = String(n || "circle")
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
  const LucideIcon = LucideIcons[iconName] || LucideIcons.Circle;
  return <LucideIcon size={s} color={c || "currentColor"} strokeWidth={sw} style={style} aria-hidden="true" />;
}

// Phone bezel — soft, calm, doesn't compete with content.
// `scale` lets the parent shrink it; we render at native 375 internal width.
function PhoneFrame({ children, scale = 1, label, screenId, tint = false, dark = false, style }) {
  const W = 320, H = 660;
  const themeBg = dark ? "var(--slate-900)" : (tint ? "var(--slate-50)" : "#fff");
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 14, ...style }}>
      <div
        style={{
          width: W, height: H,
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          marginBottom: scale !== 1 ? (H * (scale - 1)) : 0,
          borderRadius: 36,
          background: dark ? "#0B1220" : "#0F172A",
          padding: 6,
          boxShadow: dark
            ? "0 30px 60px -30px rgba(15,118,110,0.18), 0 12px 30px -12px rgba(0,0,0,0.55)"
            : "0 30px 60px -30px rgba(15,23,42,0.45), 0 12px 30px -12px rgba(15,23,42,0.15)",
          position: "relative",
          flex: "none",
        }}
      >
        <div style={{
          width: "100%", height: "100%",
          borderRadius: 30,
          background: themeBg,
          overflow: "hidden",
          position: "relative",
          color: dark ? "var(--slate-100)" : "var(--slate-900)",
          fontFamily: "var(--font-body)",
        }}>
          {/* Status bar */}
          <div style={{
            height: 28, display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "0 18px", fontSize: 11, fontWeight: 700,
            color: dark ? "var(--slate-200)" : "var(--slate-900)",
          }}>
            <span>9:41</span>
            <span style={{ width: 60, height: 16, background: dark ? "#000" : "#0F172A", borderRadius: 999, opacity: 0.92 }}></span>
            <span style={{ display: "inline-flex", gap: 4, alignItems: "center" }}>
              <Icon n="signal" s={11} sw={2.2} />
              <Icon n="wifi" s={12} sw={2.2} />
              <Icon n="battery-full" s={14} sw={2.2} />
            </span>
          </div>
          {children}
        </div>
      </div>
      {(label || screenId) && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          {label && <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{label}</div>}
          {screenId && <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>{screenId}</div>}
        </div>
      )}
    </div>
  );
}

// Bottom tab bar — used on every full-screen mockup
function TabBar({ active = "today", dark = false, t }) {
  const tabs = [
    { id: "today",   icon: "house",       label: t.today },
    { id: "care",    icon: "stethoscope", label: t.myCare },
    { id: "chat",    icon: "message-circle", label: t.chatTab },
    { id: "profile", icon: "user-round",  label: t.profile },
  ];
  return (
    <div style={{
      borderTop: `1px solid ${dark ? "var(--slate-800)" : "var(--slate-200)"}`,
      background: dark ? "var(--slate-900)" : "#fff",
      height: 62, display: "flex", paddingBottom: 6,
    }}>
      {tabs.map(tab => {
        const on = tab.id === active;
        const activeColor = dark ? "var(--teal-300)" : "var(--teal-700)";
        return (
          <div key={tab.id} style={{
            flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            position: "relative", gap: 3, paddingTop: 6,
          }}>
            <span style={{
              position: "absolute", top: 0, width: 26, height: 3, borderRadius: 2,
              background: activeColor, opacity: on ? 1 : 0,
            }} />
            <Icon n={tab.icon} s={20} sw={on ? 2 : 1.6} c={on ? activeColor : (dark ? "var(--slate-400)" : "var(--slate-500)")} />
            <span style={{
              fontSize: 10, fontWeight: on ? 700 : 500,
              color: on ? activeColor : (dark ? "var(--slate-400)" : "var(--slate-500)"),
            }}>{tab.label}</span>
          </div>
        );
      })}
    </div>
  );
}

// Compact top bar (back chevron + title + action)
function TopBar({ title, dark = false, onBack = true, action }) {
  return (
    <div style={{
      height: 44, padding: "0 8px",
      display: "flex", alignItems: "center", gap: 6,
      borderBottom: `1px solid ${dark ? "var(--slate-800)" : "var(--slate-100)"}`,
      background: dark ? "var(--slate-900)" : "#fff",
    }}>
      {onBack && (
        <div style={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", color: dark ? "var(--slate-300)" : "var(--slate-700)" }}>
          <Icon n="chevron-left" s={22} sw={2} />
        </div>
      )}
      <div style={{ flex: 1, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, textAlign: "center", color: dark ? "var(--slate-50)" : "var(--slate-900)" }}>{title}</div>
      <div style={{ width: 36 }}>{action}</div>
    </div>
  );
}

// Status pill (Confirmed, Upcoming, etc.)
function StatusPill({ kind = "confirmed", children }) {
  const styles = {
    confirmed: { bg: "var(--teal-700)", fg: "#fff" },
    upcoming:  { bg: "var(--slate-200)", fg: "var(--slate-700)" },
    safe:      { bg: "var(--orange-700)", fg: "#fff" },
  };
  const s = styles[kind] || styles.confirmed;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      fontSize: 10, fontWeight: 700, padding: "3px 8px",
      borderRadius: 999, background: s.bg, color: s.fg,
      letterSpacing: 0.2,
    }}>{children}</span>
  );
}



// Osteóplus case study — hi-fi mobile mockup screens.
// All screens render inside <PhoneFrame>. Copy comes from OP_DATA.COPY[locale].
// Dark mode swaps surface tokens. Senior-friendly type: 16–18px body, big touch targets.

const C = (dark) => ({
  bg:        dark ? "var(--slate-900)" : "#fff",
  bgTinted:  dark ? "#0B1220" : "var(--slate-50)",
  card:      dark ? "var(--slate-800)" : "#fff",
  border:    dark ? "var(--slate-700)" : "var(--slate-200)",
  text:      dark ? "var(--slate-50)"  : "var(--slate-900)",
  textSec:   dark ? "var(--slate-300)" : "var(--slate-700)",
  textMute:  dark ? "var(--slate-400)" : "var(--slate-500)",
  brand:     dark ? "var(--teal-400)"  : "var(--teal-700)",
  brandBg:   dark ? "rgba(20,184,166,0.12)" : "var(--teal-50)",
  brandBorder: dark ? "var(--teal-400)" : "var(--teal-600)",
  accent:    dark ? "var(--orange-400)" : "var(--orange-700)",
  accentBg:  dark ? "rgba(255,107,0,0.12)" : "var(--orange-50)",
});

// ─────────────────────────────────────────────────────────────
// HOME-01 — Today view
// Used by: Hero composite, Solution module 2, Solution module 5 (annotated)
// ─────────────────────────────────────────────────────────────
function TodayScreen({ dark = false, locale = "es", variant = "default", showAnnotations = false }) {
  const t = OP_DATA.COPY[locale];
  const c = C(dark);
  // variant: "default" | "smartArrival"
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: c.bgTinted }}>
      {/* Header */}
      <div style={{ padding: "10px 16px 14px", background: c.bg, borderBottom: `1px solid ${c.border}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--teal-700)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13 }}>CL</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: c.textMute }}>{t.greeting}</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: c.text, marginTop: 1, lineHeight: 1.25 }}>{t.homeTitle}</div>
          </div>
          <div style={{ width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: c.textSec, position: "relative" }}>
            <Icon n="bell" s={20} sw={1.75} />
            <span style={{ position: "absolute", top: 8, right: 8, width: 7, height: 7, borderRadius: "50%", background: "var(--orange-500)" }} />
          </div>
        </div>
      </div>

      <div style={{ flex: 1, overflow: "hidden", padding: "12px 14px 8px", display: "flex", flexDirection: "column", gap: 10 }}>
        {/* Next-up / Smart Arrival card */}
        {variant === "smartArrival" ? (
          <div style={{
            border: `1.5px solid ${c.brandBorder}`,
            background: c.brandBg,
            borderRadius: 12, padding: 12, display: "flex", flexDirection: "column", gap: 8,
            position: "relative",
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: c.brand }}>{t.smartArrival}</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: c.text }}>{t.drName}</div>
            <div style={{ fontSize: 12, color: c.textSec, display: "flex", alignItems: "center", gap: 6 }}>
              <Icon n="clock" s={13} sw={2} c={c.textMute} />
              {t.inMinutes} · {t.parkingCode}
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
              <div style={{ flex: 1, height: 44, background: "var(--teal-700)", color: "#fff", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontWeight: 700, fontSize: 13 }}>
                <Icon n="map-pin" s={15} sw={2.2} /> {t.getDirections}
              </div>
              <div style={{ height: 44, padding: "0 12px", background: c.card, color: c.textSec, border: `1px solid ${c.border}`, borderRadius: 8, display: "flex", alignItems: "center", gap: 6, fontWeight: 700, fontSize: 12 }}>
                <Icon n="check" s={15} sw={2.2} c={c.brand} /> {t.iAmHere}
              </div>
            </div>
          </div>
        ) : (
          <div style={{
            border: `1.5px solid ${c.brandBorder}`,
            background: c.brandBg,
            borderRadius: 12, padding: 12, display: "flex", flexDirection: "column", gap: 8,
            position: "relative",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: c.brand }}>{t.nextAppt}</div>
              <StatusPill kind="confirmed">{t.confirmed}</StatusPill>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: c.text, lineHeight: 1.2 }}>{t.drName}</div>
              <div style={{ fontSize: 11, color: c.textMute, marginTop: 1 }}>{t.drRole}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: c.textSec }}>
              <Icon n="calendar" s={13} sw={2} c={c.textMute} />
              {t.apptTime}
            </div>
            <div style={{ display: "flex", gap: 6, marginTop: 2 }}>
              <button data-tap="56" style={{ flex: 1, height: 40, background: "var(--teal-700)", color: "#fff", border: 0, borderRadius: 8, fontWeight: 700, fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 5, cursor: "pointer" }}>
                <Icon n="map-pin" s={13} sw={2.2} /> {t.getDirections}
              </button>
            </div>
          </div>
        )}

        {/* Today's exercises */}
        <div style={{
          background: c.card, border: `1px solid ${c.border}`, borderRadius: 12, padding: 12,
          display: "flex", flexDirection: "column", gap: 8,
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: c.text }}>{t.todaysExercises}</div>
            <div style={{ fontSize: 11, color: c.textMute }}>{t.sessionMeta}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {[
              { name: locale === "es" ? "Inclinación de pelvis" : "Pelvic tilt", reps: "10×", done: true },
              { name: locale === "es" ? "Estiramiento gato-vaca" : "Cat-cow stretch", reps: "8×", done: false },
              { name: locale === "es" ? "Puente glúteo" : "Glute bridge", reps: "10×", done: false },
            ].map((ex, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 8px", borderRadius: 8, background: ex.done ? c.brandBg : "transparent", border: ex.done ? `1px solid ${c.brandBg}` : "1px solid transparent" }}>
                <span style={{ width: 18, height: 18, borderRadius: "50%", border: `1.5px solid ${ex.done ? c.brand : c.border}`, background: ex.done ? c.brand : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {ex.done && <Icon n="check" s={11} sw={3} c="#fff" />}
                </span>
                <span style={{ fontSize: 13, color: c.text, flex: 1, textDecoration: ex.done ? "line-through" : "none", opacity: ex.done ? 0.7 : 1 }}>{ex.name}</span>
                <span style={{ fontSize: 11, color: c.textMute, fontFamily: "var(--font-mono)" }}>{ex.reps}</span>
              </div>
            ))}
          </div>
          <button data-tap="56" style={{ marginTop: 4, height: 44, background: "var(--teal-700)", color: "#fff", border: 0, borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <Icon n="play" s={15} sw={2.5} /> {t.startSession}
          </button>
        </div>

        {/* Quick actions */}
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: c.textMute, marginBottom: 6 }}>{t.quickActions}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6 }}>
            {[
              { icon: "calendar-plus", label: t.book },
              { icon: "message-circle", label: t.chat },
              { icon: "clipboard-list", label: t.plan },
              { icon: "life-buoy", label: t.help },
            ].map((q, i) => (
              <div key={i} style={{ background: c.card, border: `1px solid ${c.border}`, borderRadius: 10, padding: "10px 4px", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <Icon n={q.icon} s={18} sw={1.75} c={c.brand} />
                <span style={{ fontSize: 10, fontWeight: 600, color: c.textSec }}>{q.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TabBar active="today" dark={dark} t={t} />

      {/* Annotation overlay */}
      {showAnnotations && <AnnotationOverlay />}
    </div>
  );
}

// Annotation overlay for A11Y-02 — drawn over the Today screen
function AnnotationOverlay() {
  // Box around the primary "Start session" CTA, focus ring on it,
  // and a contrast pill near the home title.
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--slate-700)" }}>
      {/* Contrast pill near home title */}
      <div style={{ position: "absolute", top: 38, right: 50, padding: "2px 6px", background: "rgba(241,245,249,0.96)", border: "1px solid var(--slate-200)", borderRadius: 999, fontSize: 8 }}>
        15.8 : 1
      </div>
      {/* 56px touch boundary around the Start session button */}
      <div style={{
        position: "absolute", left: 18, right: 18, bottom: 90, height: 50,
        border: "1px dashed var(--slate-400)", borderRadius: 10,
      }}>
        <span style={{ position: "absolute", top: -14, left: 0, background: "rgba(241,245,249,0.96)", padding: "1px 4px", borderRadius: 3, fontSize: 8, border: "1px solid var(--slate-200)" }}>
          56 × 56 primary CTA
        </span>
      </div>
      {/* Focus ring on appointment card */}
      <div style={{
        position: "absolute", left: 11, right: 11, top: 73, height: 116,
        border: "2px solid var(--teal-500)", borderRadius: 14, boxShadow: "0 0 0 2px rgba(20,184,166,0.30)",
      }}>
        <span style={{ position: "absolute", top: -18, right: 0, background: "rgba(241,245,249,0.96)", padding: "1px 4px", borderRadius: 3, fontSize: 8, border: "1px solid var(--slate-200)" }}>
          focus-visible · #14B8A6
        </span>
      </div>
      {/* 18px body type marker */}
      <div style={{
        position: "absolute", left: 60, top: 38, fontSize: 8,
        background: "rgba(241,245,249,0.96)", padding: "1px 4px", borderRadius: 3, border: "1px solid var(--slate-200)",
      }}>
        type/body-lg · 18 / 1.6
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// BOOK-01 — Service selection
// ─────────────────────────────────────────────────────────────
function BookingScreen({ dark = false, locale = "es" }) {
  const t = OP_DATA.COPY[locale];
  const c = C(dark);
  const services = [
    { id: "osteo", icon: "person-standing", title: t.osteo, desc: t.osteoDesc, selected: true },
    { id: "physio", icon: "stethoscope", title: t.physio, desc: t.physioDesc },
    { id: "rehab", icon: "activity", title: t.rehab, desc: t.rehabDesc },
  ];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: c.bg }}>
      <TopBar title={t.bookAppt} dark={dark} />
      {/* Stepper */}
      <div style={{ padding: "12px 16px 8px", display: "flex", alignItems: "center", gap: 6 }}>
        {[1,2,3].map(s => (
          <span key={s} style={{
            flex: 1, height: 3, borderRadius: 2,
            background: s === 1 ? "var(--teal-700)" : c.border,
          }} />
        ))}
      </div>
      <div style={{ padding: "4px 16px 6px", fontSize: 10, color: c.textMute, fontWeight: 700, letterSpacing: ".05em", textTransform: "uppercase" }}>
        {locale === "es" ? "Paso 1 de 3" : "Step 1 of 3"}
      </div>

      <div style={{ padding: "8px 16px 16px", flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: c.text, lineHeight: 1.2 }}>{t.chooseService}</div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
          {services.map(s => (
            <div key={s.id} style={{
              border: s.selected ? `1.5px solid var(--teal-600)` : `1px solid ${c.border}`,
              background: s.selected ? c.brandBg : c.card,
              borderRadius: 12, padding: 12, display: "flex", gap: 10, alignItems: "flex-start",
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: s.selected ? "var(--teal-700)" : c.bgTinted,
                color: s.selected ? "#fff" : c.brand,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon n={s.icon} s={18} sw={1.75} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: c.text }}>{s.title}</div>
                  {s.selected && <Icon n="check-circle-2" s={16} sw={2} c="var(--teal-700)" />}
                </div>
                <div style={{ fontSize: 12, color: c.textSec, marginTop: 2, lineHeight: 1.4 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "8px 16px 16px", borderTop: `1px solid ${c.border}`, background: c.bg }}>
        <button data-tap="56" style={{ width: "100%", height: 50, background: "var(--teal-700)", color: "#fff", border: 0, borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
          {t.next} <Icon n="arrow-right" s={16} sw={2.5} />
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// BOOK-04 — Confirmation
// ─────────────────────────────────────────────────────────────
function ConfirmationScreen({ dark = false, locale = "es" }) {
  const t = OP_DATA.COPY[locale];
  const c = C(dark);
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: c.bg }}>
      <TopBar title={t.bookAppt} dark={dark} />
      <div style={{ flex: 1, padding: "24px 18px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{
          width: 56, height: 56, borderRadius: "50%",
          background: c.brandBg, border: `1.5px solid var(--teal-600)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          alignSelf: "flex-start",
        }}>
          <Icon n="check" s={28} sw={2.5} c="var(--teal-700)" />
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: c.text, lineHeight: 1.2 }}>{t.allSet}</div>
          <div style={{ fontSize: 14, color: c.textSec, marginTop: 6, lineHeight: 1.5 }}>{t.confirmSent}</div>
        </div>

        <div style={{
          background: c.bgTinted, border: `1px solid ${c.border}`,
          borderRadius: 12, padding: 14, display: "flex", flexDirection: "column", gap: 6,
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: c.brand }}>{t.confirmed}</div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: c.text }}>{t.drName}</div>
          <div style={{ fontSize: 12, color: c.textSec, display: "flex", alignItems: "center", gap: 6 }}>
            <Icon n="calendar" s={13} sw={2} c={c.textMute} /> {t.apptTime}
          </div>
          <div style={{ fontSize: 12, color: c.textSec, display: "flex", alignItems: "center", gap: 6 }}>
            <Icon n="map-pin" s={13} sw={2} c={c.textMute} /> Carrer de Mallorca, 234 · Barcelona
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: "auto" }}>
          <button data-tap="56" style={{ height: 50, background: "var(--teal-700)", color: "#fff", border: 0, borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <Icon n="calendar-plus" s={16} sw={2.5} /> {t.addToCal}
          </button>
          <button data-tap="48" style={{ height: 44, background: c.card, color: c.textSec, border: `1px solid ${c.border}`, borderRadius: 8, fontWeight: 600, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <Icon n="phone" s={14} sw={2} /> {t.callClinic}
          </button>
        </div>
      </div>
    </div>
  );
}



// Osteóplus case study — exercise + gamification + privacy + IA pivot mockups

// ─────────────────────────────────────────────────────────────
// EXER-03 — Rep counter (active exercise)
// ─────────────────────────────────────────────────────────────
function RepCounterScreen({ dark = false, locale = "es", painLevel = 3, modal = false }) {
  const t = OP_DATA.COPY[locale];
  const c = C(dark);
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: c.bg, position: "relative" }}>
      <TopBar title={t.exerciseTitle} dark={dark} action={
        <div style={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", color: c.textSec }}>
          <Icon n="x" s={20} sw={2} />
        </div>
      } />
      {/* Progress */}
      <div style={{ padding: "10px 16px 4px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ fontSize: 11, color: c.textMute, fontWeight: 600 }}>{t.exerciseProgress}</span>
          <span style={{ fontSize: 11, color: c.textMute, fontFamily: "var(--font-mono)" }}>2 / 3</span>
        </div>
        <div style={{ height: 5, background: c.border, borderRadius: 999, overflow: "hidden" }}>
          <div style={{ width: "66%", height: "100%", background: "var(--teal-700)" }} />
        </div>
      </div>

      {/* Video placeholder */}
      <div style={{ margin: "10px 14px 0", borderRadius: 12, overflow: "hidden", background: "var(--slate-900)", position: "relative", aspectRatio: "16 / 10", border: `1px solid ${c.border}` }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.92)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon n="play" s={20} sw={2.5} c="var(--slate-900)" />
          </div>
        </div>
        <div style={{ position: "absolute", left: 8, bottom: 8, fontSize: 9, color: "#fff", background: "rgba(0,0,0,0.5)", padding: "2px 6px", borderRadius: 4, fontFamily: "var(--font-mono)" }}>0:15</div>
        <div style={{ position: "absolute", right: 8, bottom: 8, fontSize: 9, color: "#fff", background: "rgba(0,0,0,0.5)", padding: "2px 6px", borderRadius: 4 }}>CC</div>
      </div>

      {/* Rep counter */}
      <div style={{ padding: "12px 16px 6px", display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: c.textMute }}>{t.reps}</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button data-tap="56" style={{ width: 44, height: 44, borderRadius: 8, background: c.bgTinted, border: `1px solid ${c.border}`, color: c.text, fontSize: 22, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon n="minus" s={20} sw={2.5} />
          </button>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 44, color: c.text, lineHeight: 1 }}>6</div>
            <div style={{ fontSize: 10, color: c.textMute, marginTop: 2 }}>{t.target}</div>
          </div>
          <button data-tap="56" style={{ width: 44, height: 44, borderRadius: 8, background: "var(--teal-700)", color: "#fff", border: 0, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon n="plus" s={20} sw={2.5} />
          </button>
        </div>
      </div>

      {/* Pain slider */}
      <div style={{ padding: "10px 16px 6px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
          <span style={{ fontSize: 11, color: c.textSec, fontWeight: 600 }}>{t.painLevel}</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, color: painLevel >= 7 ? "var(--orange-700)" : c.text }}>{painLevel} / 10</span>
        </div>
        <div style={{ position: "relative", height: 22, display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", left: 0, right: 0, height: 4, borderRadius: 999, background: "linear-gradient(90deg, var(--teal-200) 0%, var(--teal-400) 40%, var(--orange-300) 70%, var(--orange-700) 100%)" }} />
          <div style={{ position: "absolute", left: `${painLevel * 10}%`, transform: "translateX(-50%)", width: 18, height: 18, borderRadius: "50%", background: "#fff", border: "2px solid var(--teal-700)", boxShadow: "0 1px 4px rgba(15,23,42,0.18)" }} />
        </div>
        <div style={{ fontSize: 10, color: c.textMute, marginTop: 4 }}>{t.painHint}</div>
      </div>

      <div style={{ padding: "8px 14px 14px", marginTop: "auto" }}>
        <button data-tap="56" style={{ width: "100%", height: 46, background: "var(--teal-700)", color: "#fff", border: 0, borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
          <Icon n="check" s={15} sw={2.5} /> {t.complete}
        </button>
      </div>

      {modal && <PainInterruptModalOverlay dark={dark} locale={locale} />}
    </div>
  );
}

// Pain Interrupt Modal overlay — sits on top of an active exercise screen
function PainInterruptModalOverlay({ dark = false, locale = "es" }) {
  const t = OP_DATA.COPY[locale];
  const c = C(dark);
  return (
    <div style={{ position: "absolute", inset: 0, background: "rgba(15,23,42,0.55)", zIndex: 2, display: "flex", alignItems: "flex-end" }}>
      <div style={{
        width: "100%", background: c.bg, borderTopLeftRadius: 18, borderTopRightRadius: 18,
        padding: "18px 18px 20px", display: "flex", flexDirection: "column", gap: 10,
        boxShadow: "0 -12px 30px rgba(0,0,0,0.18)",
      }}>
        <div style={{ width: 36, height: 4, borderRadius: 2, background: c.border, alignSelf: "center" }} />
        <div style={{
          width: 44, height: 44, borderRadius: 10, background: c.accentBg,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Icon n="shield-alert" s={22} sw={2} c="var(--orange-700)" />
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: c.text, lineHeight: 1.2 }}>{t.painPause}</div>
          <div style={{ fontSize: 13, color: c.textSec, marginTop: 6, lineHeight: 1.5 }}>{t.painCopy}</div>
        </div>
        <button data-tap="56" style={{ marginTop: 4, height: 50, background: "var(--orange-700)", color: "#fff", border: 0, borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
          <Icon n="phone" s={15} sw={2.5} /> {t.callPhysio}
        </button>
        <button data-tap="48" style={{ height: 44, background: c.card, color: c.textSec, border: `1px solid ${c.border}`, borderRadius: 8, fontWeight: 600, fontSize: 13, cursor: "pointer" }}>
          {t.pauseSession}
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Pain Interrupt — standalone screen (modal active)
// ─────────────────────────────────────────────────────────────
function PainInterruptScreen({ dark = false, locale = "es" }) {
  return <RepCounterScreen dark={dark} locale={locale} painLevel={8} modal={true} />;
}

// ─────────────────────────────────────────────────────────────
// GAME — Streak + soft re-engagement toast
// ─────────────────────────────────────────────────────────────
function StreakScreen({ dark = false, locale = "es" }) {
  const t = OP_DATA.COPY[locale];
  const c = C(dark);
  const days = locale === "es"
    ? ["L","M","X","J","V","S","D"]
    : ["M","T","W","T","F","S","S"];
  // Pattern: 4 of last 7 done. No streak loss for the 3 missed days.
  const pattern = [true, false, true, true, false, true, false];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: c.bg }}>
      <TopBar title={t.profile} dark={dark} onBack={false} />
      <div style={{ padding: "16px 16px 8px", display: "flex", flexDirection: "column", gap: 14 }}>
        {/* Hero streak card */}
        <div style={{
          background: c.brandBg, border: `1.5px solid var(--teal-600)`,
          borderRadius: 14, padding: 16, display: "flex", flexDirection: "column", gap: 8,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 44, height: 44, borderRadius: "50%",
              background: "var(--orange-700)", color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Icon n="flame" s={22} sw={2.2} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: c.text, lineHeight: 1 }}>4 <span style={{ fontSize: 12, color: c.textSec, fontWeight: 500, fontFamily: "var(--font-body)" }}>{t.streakDays}</span></div>
              <div style={{ fontSize: 11, color: c.textMute, marginTop: 2 }}>{t.streakTitle}</div>
            </div>
          </div>
          <div style={{ fontSize: 12, color: c.textSec, lineHeight: 1.5 }}>{t.streakSub}</div>
          {/* 7-day strip */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, marginTop: 4 }}>
            {pattern.map((on, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                <span style={{ fontSize: 9, color: c.textMute, fontWeight: 600 }}>{days[i]}</span>
                <span style={{
                  width: 22, height: 22, borderRadius: "50%",
                  background: on ? "var(--teal-700)" : c.bgTinted,
                  border: on ? "none" : `1px dashed ${c.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {on && <Icon n="check" s={11} sw={3} c="#fff" />}
                </span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 10, color: c.textMute, fontStyle: "italic", marginTop: 2 }}>
            {locale === "es" ? "Sin penalización por días en blanco." : "Missed days don't break the streak."}
          </div>
        </div>

        {/* Soft re-engagement toast */}
        <div style={{
          background: c.card, border: `1px solid ${c.border}`,
          borderRadius: 12, padding: 12, display: "flex", gap: 10, alignItems: "flex-start",
          boxShadow: dark ? "none" : "0 1px 2px rgba(15,23,42,0.04), 0 4px 12px -4px rgba(15,23,42,0.08)",
        }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: c.brandBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon n="heart" s={16} sw={1.75} c={c.brand} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: c.text }}>{t.toastTitle}</div>
            <div style={{ fontSize: 11, color: c.textSec, marginTop: 2, lineHeight: 1.4 }}>{t.toastSub}</div>
            <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
              <button data-tap="48" style={{ height: 36, padding: "0 12px", background: "var(--teal-700)", color: "#fff", border: 0, borderRadius: 6, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>{t.startNow}</button>
              <button data-tap="48" style={{ height: 36, padding: "0 12px", background: "transparent", color: c.textSec, border: 0, borderRadius: 6, fontWeight: 600, fontSize: 12, cursor: "pointer" }}>{t.later}</button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "auto" }}>
        <TabBar active="profile" dark={dark} t={t} />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Privacy / consent screen (mini)
// ─────────────────────────────────────────────────────────────
function PrivacyScreen({ dark = false, locale = "es" }) {
  const t = OP_DATA.COPY[locale];
  const c = C(dark);
  const lines = locale === "es"
    ? [
        { icon: "lock", title: "Tus datos de dolor están cifrados", body: "Solo viajan entre tu móvil y la base de datos. No se envían a analítica." },
        { icon: "user-round-check", title: "El fisio ve tu constancia", body: "Adherencia y eventos de seguridad, no tus valores de dolor en crudo." },
        { icon: "moon", title: "Sin notificaciones de noche", body: "Bloqueadas de 22:00 a 07:00 salvo que las actives." },
      ]
    : [
        { icon: "lock", title: "Your pain data is encrypted", body: "It stays between your phone and the database. Never sent to analytics." },
        { icon: "user-round-check", title: "Your physio sees adherence", body: "Adherence and safety events, never raw pain values." },
        { icon: "moon", title: "Quiet hours by default", body: "Notifications blocked 22:00 – 07:00 unless you turn them on." },
      ];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: c.bg }}>
      <TopBar title={locale === "es" ? "Privacidad" : "Privacy"} dark={dark} />
      <div style={{ padding: "16px 16px", flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: c.text, lineHeight: 1.25 }}>
          {locale === "es" ? "Tu información se queda contigo." : "Your information stays with you."}
        </div>
        <div style={{ fontSize: 13, color: c.textSec, lineHeight: 1.5 }}>
          {locale === "es"
            ? "GDPR · LOPDGDD. Sin patrones oscuros. Sin urgencia artificial."
            : "GDPR · LOPDGDD compliant. No dark patterns. No urgency triggers."}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 6 }}>
          {lines.map((line, i) => (
            <div key={i} style={{ display: "flex", gap: 10, padding: 10, background: c.bgTinted, border: `1px solid ${c.border}`, borderRadius: 10 }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: c.brandBg, display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                <Icon n={line.icon} s={16} sw={1.75} c={c.brand} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 12, color: c.text }}>{line.title}</div>
                <div style={{ fontSize: 11, color: c.textSec, marginTop: 2, lineHeight: 1.45 }}>{line.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: "10px 16px 16px", borderTop: `1px solid ${c.border}` }}>
        <button data-tap="56" style={{ width: "100%", height: 48, background: "var(--teal-700)", color: "#fff", border: 0, borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
          {locale === "es" ? "Acepto y continúo" : "I agree, continue"}
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// IA Pivot — "Before" (Medical Repository) and "After" (Action Dashboard)
// Two small framed screens for the §process before/after.
// ─────────────────────────────────────────────────────────────
function RepositoryScreen({ dark = false }) {
  const c = C(dark);
  const items = [
    { icon: "folder-open", label: "Mi plan",         meta: "Plan archive" },
    { icon: "calendar",    label: "Citas",           meta: "Appointment list" },
    { icon: "book-open",   label: "Recursos",        meta: "Articles · videos" },
    { icon: "user",        label: "Mi cuenta",       meta: "Profile · settings" },
    { icon: "message-circle", label: "Mensajes",     meta: "Inbox" },
    { icon: "file-text",   label: "Historial",       meta: "Past sessions" },
  ];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: c.bg }}>
      <div style={{ padding: "10px 14px 8px", borderBottom: `1px solid ${c.border}`, display: "flex", alignItems: "center", gap: 8 }}>
        <Icon n="menu" s={18} sw={1.75} c={c.textSec} />
        <div style={{ flex: 1, fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: c.text }}>Osteóplus</div>
        <Icon n="search" s={16} sw={1.75} c={c.textSec} />
      </div>
      <div style={{ padding: "10px 14px", flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ fontSize: 10, color: c.textMute, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 4 }}>
          Menu
        </div>
        {items.map((item, i) => (
          <div key={i} style={{
            padding: "10px 8px", display: "flex", alignItems: "center", gap: 10,
            borderBottom: `1px solid ${c.border}`,
          }}>
            <Icon n={item.icon} s={18} sw={1.5} c={c.textSec} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, color: c.text, fontWeight: 600 }}>{item.label}</div>
              <div style={{ fontSize: 10, color: c.textMute }}>{item.meta}</div>
            </div>
            <Icon n="chevron-right" s={14} sw={2} c={c.textMute} />
          </div>
        ))}
      </div>
      {/* No tab bar — Repository pattern was a hamburger menu */}
    </div>
  );
}



// Osteóplus case study — section components
// Hero, TL;DR + Project Snapshot, Process & IA Pivot, Final Solution, Accessibility

// ─────────────────────────────────────────────────────────────
// Shared bits
// ─────────────────────────────────────────────────────────────
function Eyebrow({ children, n }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)", letterSpacing: ".08em", textTransform: "uppercase" }}>
      {n && <span style={{ color: "var(--brand)", fontWeight: 700 }}>{n}</span>}
      {n && <span style={{ width: 28, height: 1, background: "var(--border)" }} />}
      <span>{children}</span>
    </div>
  );
}

// Reading times per section (rough — calibrated ~230 wpm)
const READ_TIMES = {
  hero: 1, tldr: 1, process: 1, persona: 2,
  solution: 3, decisions: 2, accessibility: 2,
  impact: 2, reflection: 2, credits: 1,
};

function SectionHead({ n, eyebrow, title, sub, anchor }) {
  const [copied, setCopied] = React.useState(false);
  const readMin = anchor ? READ_TIMES[anchor] : null;

  const copyAnchor = () => {
    if (!anchor) return;
    try {
      const url = `${window.location.origin}${window.location.pathname}#${anchor}`;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url);
      } else {
        // Fallback for file:// or insecure contexts
        const ta = document.createElement("textarea");
        ta.value = url; document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); } catch (e) {}
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {}
  };

  return (
    <header style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 760 }}>
      <div className="section-head-meta">
        <Eyebrow n={n}>{eyebrow}</Eyebrow>
        {readMin && (
          <div className="read-time" aria-label={`Estimated reading time ${readMin} minute${readMin === 1 ? "" : "s"}`}>
            <Icon n="clock" s={12} sw={2} />
            <span>{readMin} min read</span>
          </div>
        )}
      </div>
      <h2 className="section-h2" style={{
        fontFamily: "var(--font-display)", fontWeight: 700,
        fontSize: "clamp(28px, 3.6vw, 42px)", lineHeight: 1.15,
        color: "var(--text)", margin: 0, letterSpacing: "-0.01em",
        display: "inline-flex", alignItems: "baseline", gap: 10, flexWrap: "wrap",
      }}>
        <span>{title}</span>
        {anchor && (
          <button
            type="button"
            className={`anchor-copy ${copied ? "is-copied" : ""}`}
            onClick={copyAnchor}
            aria-label={copied ? "Link copied" : `Copy link to ${title}`}
            title={copied ? "Copied" : "Copy link to section"}
          >
            <Icon n={copied ? "check" : "link"} s={15} sw={2.2} />
          </button>
        )}
      </h2>
      {sub && <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--text-secondary)", margin: 0, maxWidth: 680 }}>{sub}</p>}
    </header>
  );
}

function LabelChip({ kind = "documented", children, compact = false }) {
  const styles = {
    documented:  { bg: "var(--teal-50)",   border: "var(--teal-200)",  fg: "var(--teal-700)" },
    expected:    { bg: "var(--orange-50)", border: "var(--orange-200)", fg: "var(--orange-800)" },
    recommended: { bg: "var(--slate-100)", border: "var(--slate-300)", fg: "var(--slate-700)" },
    placeholder: { bg: "#FEF2F2",          border: "#FECACA",          fg: "#B91C1C" },
  };
  const s = styles[kind] || styles.documented;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      padding: compact ? "2px 7px" : "3px 9px",
      borderRadius: 999, background: s.bg, color: s.fg,
      border: `1px solid ${s.border}`,
      fontSize: compact ? 10 : 11, fontWeight: 700,
      letterSpacing: 0.2,
      whiteSpace: "normal",
      overflowWrap: "anywhere",
      maxWidth: "100%",
    }}>
      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "currentColor", opacity: 0.7 }} />
      {children}
    </span>
  );
}

// At-a-glance meta strip — shows under the hero thesis (centered layout)
function AtAGlance() {
  return (
    <div className="at-a-glance" aria-label="Case study at a glance">
      <div className="ag-item">
        <Icon n="clock" s={14} sw={2} c="var(--text-muted)" />
        <span className="ag-label">Read time</span>
        <span className="ag-value">~10 min</span>
      </div>
      <div className="ag-sep" />
      <div className="ag-item">
        <Icon n="layout-list" s={14} sw={2} c="var(--text-muted)" />
        <span className="ag-label">Sections</span>
        <span className="ag-value">10</span>
      </div>
      <div className="ag-sep" />
      <div className="ag-item">
        <Icon n="languages" s={14} sw={2} c="var(--text-muted)" />
        <span className="ag-label">Locale</span>
        <span className="ag-value">ES · EN</span>
      </div>
      <div className="ag-sep" />
      <div className="ag-item">
        <Icon n="accessibility" s={14} sw={2} c="var(--text-muted)" />
        <span className="ag-label">A11y</span>
        <span className="ag-value">WCAG 2.2 AA</span>
      </div>
      <div className="ag-sep" />
      <div className="ag-item">
        <Icon n="calendar" s={14} sw={2} c="var(--text-muted)" />
        <span className="ag-label">Updated</span>
        <span className="ag-value">May 2026</span>
      </div>
    </div>
  );
}

// Animated number counter triggered on scroll
function AnimatedNumber({ value, duration = 1200, suffix = "" }) {
  const [display, setDisplay] = React.useState(0);
  const ref = React.useRef(null);
  const fired = React.useRef(false);
  // Parse value — could be "82–95" or "0" or "14"
  const num = typeof value === "number" ? value : parseInt(String(value).replace(/[^\d]/g, ""), 10) || 0;
  const isRange = typeof value === "string" && /[\-–]/.test(value);

  React.useEffect(() => {
    if (isRange) { setDisplay(value); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !fired.current) {
        fired.current = true;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setDisplay(num); return;
        }
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(Math.round(num * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [num, duration, isRange, value]);

  return <span ref={ref}>{isRange ? display : `${display}${suffix}`}</span>;
}

// ─────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────
function Hero({ locale, dark, tweaks }) {
  const t = OP_DATA.COPY[locale];
  const layout = tweaks.heroLayout; // "asymmetric" | "centered" | "manifesto"

  const compositeRight = (
    <div style={{
      position: "relative",
      width: "100%",
      height: 640,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      {/* soft halo */}
      <div style={{
        position: "absolute",
        width: "85%", height: "70%",
        background: "radial-gradient(ellipse at center, var(--teal-50) 0%, transparent 70%)",
        filter: "blur(8px)",
        zIndex: 0,
      }} />
      {/* Back-left: Booking */}
      <div style={{ position: "absolute", left: "4%", top: 30, transform: "rotate(-8deg) scale(0.62)", transformOrigin: "top left", zIndex: 1, opacity: 0.92 }}>
        <PhoneFrame dark={dark}>
          <BookingScreen dark={dark} locale={locale} />
        </PhoneFrame>
      </div>
      {/* Back-right: RepCounter */}
      <div style={{ position: "absolute", right: "2%", top: 60, transform: "rotate(8deg) scale(0.62)", transformOrigin: "top right", zIndex: 1, opacity: 0.92 }}>
        <PhoneFrame dark={dark}>
          <RepCounterScreen dark={dark} locale={locale} />
        </PhoneFrame>
      </div>
      {/* Foreground: Today */}
      <div style={{ position: "relative", zIndex: 2, transform: "scale(1.05)" }}>
        <PhoneFrame dark={dark}>
          <TodayScreen dark={dark} locale={locale} />
        </PhoneFrame>
      </div>
    </div>
  );

  const meta = (
    <div className="hero-meta">
      <div>
        <dt>Role</dt>
        <dd><strong>Owned end-to-end.</strong> Strategy, IA, design system, accessibility, visual, flows.</dd>
        <dd className="muted">AI-assisted execution for research collection &amp; first drafts. Judgment was mine.</dd>
      </div>
      <div>
        <dt>Tools</dt>
        <dd>Figma · Adobe CC · Claude · Claude Code · ChatGPT · Gemini · Cursor</dd>
      </div>
      <div>
        <dt>Timeline</dt>
        <dd>July 2025 → ongoing</dd>
      </div>
      <div>
        <dt>North Star</dt>
        <dd>Weekly Adherence Rate</dd>
      </div>
      <div>
        <dt>Status</dt>
        <dd>Design concept · Product roadmap target Beta Q2 2026</dd>
      </div>
    </div>
  );

  const ctas = (
    <div className="hero-ctas">
      <a href="https://osteoplus-v2-9.vercel.app/es" target="_blank" rel="noreferrer" className="btn btn-primary">
        View live product <Icon n="arrow-up-right" s={16} sw={2.2} />
      </a>
      <a href="#tldr" className="btn btn-ghost">
        Skim in 15 seconds <Icon n="arrow-down" s={16} sw={2.2} />
      </a>
    </div>
  );

  if (layout === "manifesto") {
    return (
      <section id="hero" data-screen-label="01 Hero" className="hero hero-manifesto">
        <Eyebrow n="01">UX Case Study · 2026</Eyebrow>
        <h1 className="hero-title hero-title-xl">
          From medical repository to <em>Action Dashboard</em>: a senior-friendly rehab&nbsp;PWA.
        </h1>
        <p className="hero-thesis">
          A bilingual clinic product for osteopathy, physiotherapy, and rehabilitation in Barcelona —
          built around <strong>guest-first booking</strong> and a daily rehab loop for adults 35–85, optimized for users 60+.
        </p>
        <AtAGlance />
        {meta}
        {ctas}
      </section>
    );
  }

  if (layout === "centered") {
    return (
      <section id="hero" data-screen-label="01 Hero" className="hero hero-centered">
        <Eyebrow n="01">UX Case Study · 2026</Eyebrow>
        <h1 className="hero-title hero-title-lg" style={{ textAlign: "center", maxWidth: 980 }}>
          From medical repository to <em>Action Dashboard</em>: a senior-friendly rehab PWA.
        </h1>
        <p className="hero-thesis" style={{ textAlign: "center", maxWidth: 720 }}>
          A bilingual clinic product for osteopathy, physiotherapy, and rehabilitation in Barcelona —
          built around <strong>guest-first booking</strong> and a daily rehab loop for adults 35–85, optimized for users 60+.
        </p>
        <AtAGlance />
        {ctas}
        <div style={{ marginTop: 36, width: "100%", display: "flex", justifyContent: "center" }}>
          <PhoneFrame dark={dark}>
            <TodayScreen dark={dark} locale={locale} />
          </PhoneFrame>
        </div>
        <div style={{ marginTop: 44, width: "100%" }}>{meta}</div>
      </section>
    );
  }

  // Default: asymmetric split
  return (
    <section id="hero" data-screen-label="01 Hero" className="hero hero-split">
      <div className="hero-left">
        <Eyebrow n="01">UX Case Study · 2026</Eyebrow>
        <h1 className="hero-title hero-title-lg">
          From medical repository to <em>Action Dashboard</em>: a senior-friendly rehab&nbsp;PWA.
        </h1>
        <p className="hero-thesis">
          A bilingual clinic product for osteopathy, physiotherapy, and rehabilitation in Barcelona —
          built around <strong>guest-first booking</strong> and a daily rehab loop for adults 35–85, optimized for users 60+.
        </p>
        <AtAGlance />
        {meta}
        {ctas}
      </div>
      <div className="hero-right">
        {compositeRight}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// TL;DR + Project Snapshot
// ─────────────────────────────────────────────────────────────
function TLDR() {
  const bullets = [
    { icon: "target",            title: "Product",       body: "A PWA-first clinic product for osteopathy, physiotherapy, and rehabilitation in Barcelona. Audience: adults 35–85, optimized for users 60+." },
    { icon: "layout-dashboard",  title: "Strategic IA shift", body: "Moved from a Medical Repository model to an Action Dashboard, with the Today view as the default landing surface." },
    { icon: "layers",            title: "Two pillars",   body: "Guest-first booking (no account barrier) and The Loop — Daily Rehab Loop with clinically safe gamification." },
    { icon: "accessibility",     title: "Accessibility floor", body: "Built to WCAG 2.2 AA with 48px minimum / 56px primary touch targets, plain-language ES-first / EN-secondary copy." },
    { icon: "trending-up",       title: "Impact framing", body: "Pre-launch, so impact is presented as a measurement strategy anchored on Weekly Adherence Rate (North Star)." },
  ];
  const snap = [
    ["Platform", "PWA-first · installable · Lighthouse target ≥ 95"],
    ["Audience", "Adults 35–85 · optimized for users 60+ · mixed digital confidence"],
    ["Market", "Barcelona · Spanish-first / English-secondary"],
    ["Key flows", "Guest booking · Daily Rehab Loop · Pain Interrupt · Smart Arrival · Emergency Triage"],
    ["Accessibility", "WCAG 2.2 AA · 48 / 56px targets · focus-visible · reduced-motion"],
    ["North Star", "Weekly Adherence Rate"],
    ["Status — design", "Concept · ongoing · July 2025 → ongoing"],
    ["Status — product", "Roadmap target Beta Q2 2026 · GA Q3 2026 (documented, not shipped)"],
  ];
  return (
    <section id="tldr" data-screen-label="02 TL;DR" className="section section-tldr">
      <SectionHead n="02" anchor="tldr" eyebrow="The 15-second read" title="TL;DR for the recruiter skim." sub="If you only read this section, here's the case." />
      <div className="tldr-grid">
        <div className="tldr-bullets">
          {bullets.map((b, i) => (
            <div key={i} className="tldr-row">
              <div className="tldr-icon"><Icon n={b.icon} s={20} sw={1.75} c="var(--brand)" /></div>
              <div>
                <div className="tldr-title">{b.title}</div>
                <div className="tldr-body">{b.body}</div>
              </div>
            </div>
          ))}
        </div>
        <aside className="snapshot">
          <div className="snapshot-head">Project snapshot</div>
          <dl>
            {snap.map(([k, v]) => (
              <div key={k} className="snap-row">
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}



// Osteóplus case study — Process & Pivot, Final Solution, Accessibility, Footer

// ─────────────────────────────────────────────────────────────
// Process & IA Pivot
// ─────────────────────────────────────────────────────────────
function Process({ locale, dark }) {
  const phases = OP_DATA.PHASES;
  const [showAfter, setShowAfter] = React.useState(true);

  return (
    <section id="process" data-screen-label="03 Process" className="section section-process">
      <SectionHead
        n="03"
        anchor="process"
        eyebrow="Process & ideation"
        title="One IA decision shaped the entire product."
        sub="Early work followed a Medical Repository pattern — plan archive as the landing surface, deep menus for everything else. Carmen couldn't reliably locate her next action. The shift was structural, not visual: from a passive archive to a surface that surfaces the next meaningful action."
      />

      {/* Process timeline */}
      <div className="process-timeline" aria-label="Six-phase design process">
        <div className="process-track" />
        {phases.map((p, i) => (
          <div key={p.n} className="process-node">
            <div className="process-dot" aria-hidden="true">
              <span>{p.n}</span>
            </div>
            <div className="process-meta">
              <div className="process-label">{p.label}</div>
              <div className="process-date">{p.date}</div>
              <div className="process-artifact">{p.artifact}</div>
            </div>
          </div>
        ))}
      </div>

      {/* IA Pivot — before / after */}
      <div className="pivot">
        <div className="pivot-head">
          <div>
            <Eyebrow>The pivot that defined the product</Eyebrow>
            <h3 className="pivot-title">Medical Repository → Action Dashboard</h3>
          </div>
          <div className="pivot-toggle" role="tablist" aria-label="Toggle before / after">
            <button role="tab" aria-selected={!showAfter} className={!showAfter ? "on" : ""} onClick={() => setShowAfter(false)}>Before</button>
            <button role="tab" aria-selected={showAfter} className={showAfter ? "on" : ""} onClick={() => setShowAfter(true)}>After</button>
          </div>
        </div>

        <div className="pivot-grid">
          {/* BEFORE */}
          <article className={`pivot-card pivot-before ${!showAfter ? "is-active" : "is-faded"}`}>
            <header>
              <span className="pivot-tag pivot-tag-before">Before · v1 IA</span>
              <h4>Medical Repository</h4>
              <p>Plan archive as the landing surface. Deep menus for appointments, resources, and account. Carmen had to <em>browse, remember, interpret, and decide</em> before she could act.</p>
            </header>
            <div className="pivot-frame">
              <PhoneFrame dark={dark}>
                <RepositoryScreen dark={dark} />
              </PhoneFrame>
            </div>
            <ul className="pivot-list">
              <li><Icon n="x" s={14} sw={2.5} c="#B91C1C" /> Hamburger menu — primary nav hidden</li>
              <li><Icon n="x" s={14} sw={2.5} c="#B91C1C" /> No "next action" surfaced</li>
              <li><Icon n="x" s={14} sw={2.5} c="#B91C1C" /> Carmen calls the clinic instead</li>
            </ul>
          </article>

          {/* Connector */}
          <div className="pivot-arrow" aria-hidden="true">
            <div className="pivot-arrow-line" />
            <div className="pivot-arrow-label">From browsing to acting</div>
          </div>

          {/* AFTER */}
          <article className={`pivot-card pivot-after ${showAfter ? "is-active" : "is-faded"}`}>
            <header>
              <span className="pivot-tag pivot-tag-after">After · v2.2 IA</span>
              <h4>Action Dashboard</h4>
              <p>Today view as the default landing surface. Four bottom tabs: Today · My Care · Chat · Profile. The next meaningful action is always one tap away.</p>
            </header>
            <div className="pivot-frame">
              <PhoneFrame dark={dark}>
                <TodayScreen dark={dark} locale={locale} />
              </PhoneFrame>
            </div>
            <ul className="pivot-list">
              <li><Icon n="check" s={14} sw={2.5} c="var(--teal-700)" /> Next appointment at the top</li>
              <li><Icon n="check" s={14} sw={2.5} c="var(--teal-700)" /> Today's exercises within reach</li>
              <li><Icon n="check" s={14} sw={2.5} c="var(--teal-700)" /> Decisions Carmen makes: 1, not 4</li>
            </ul>
          </article>
        </div>

        <div className="pivot-footer">
          Documented as the major turning point across <code>research.md</code> and <code>Information_Architecture_v2_2.md</code>.
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Final Solution — 7 modules
// ─────────────────────────────────────────────────────────────
function SolutionMockup({ name, locale, dark }) {
  switch (name) {
    case "Booking":
      return (
        <div style={{ display: "flex", gap: 18, alignItems: "flex-start", flexWrap: "wrap", justifyContent: "center" }}>
          <PhoneFrame dark={dark} label="Service selection" screenId="BOOK-01"><BookingScreen dark={dark} locale={locale} /></PhoneFrame>
          <PhoneFrame dark={dark} label="Confirmation" screenId="BOOK-04"><ConfirmationScreen dark={dark} locale={locale} /></PhoneFrame>
        </div>
      );
    case "Today":
      return (
        <div style={{ display: "flex", gap: 18, alignItems: "flex-start", flexWrap: "wrap", justifyContent: "center" }}>
          <PhoneFrame dark={dark} label="Today view" screenId="HOME-01"><TodayScreen dark={dark} locale={locale} /></PhoneFrame>
          <PhoneFrame dark={dark} label="Rep counter" screenId="EXER-03"><RepCounterScreen dark={dark} locale={locale} /></PhoneFrame>
        </div>
      );
    case "TodayClean":
      return <PhoneFrame dark={dark} label="HOME-01 — patient surface" screenId="HOME-01"><TodayScreen dark={dark} locale={locale} /></PhoneFrame>;
    case "PainInterrupt":
      return <PhoneFrame dark={dark} label="Pain Interrupt Modal" screenId="EXER-C05"><PainInterruptScreen dark={dark} locale={locale} /></PhoneFrame>;
    case "Streak":
      return <PhoneFrame dark={dark} label="Streak + soft re-engagement" screenId="GAME-14.2"><StreakScreen dark={dark} locale={locale} /></PhoneFrame>;
    case "Annotated":
      return <PhoneFrame dark={dark} label="HOME-01 with target overlays" screenId="A11Y-02"><TodayScreen dark={dark} locale={locale} showAnnotations={true} /></PhoneFrame>;
    case "Privacy":
      return <PhoneFrame dark={dark} label="Privacy & consent" screenId="BOOK-03"><PrivacyScreen dark={dark} locale={locale} /></PhoneFrame>;
    case "SmartArrival":
      return <PhoneFrame dark={dark} label="Smart Arrival on Today" screenId="HOME-01b"><TodayScreen dark={dark} locale={locale} variant="smartArrival" /></PhoneFrame>;
    default:
      return null;
  }
}

function Solution({ locale, dark }) {
  const mods = OP_DATA.SOLUTIONS;
  return (
    <section id="solution" data-screen-label="05 Final Solution" className="section section-solution">
      <SectionHead
        n="05"
        anchor="solution"
        eyebrow="Final solution"
        title="Seven modules. One Carmen-documented problem each."
        sub="Each module ties a documented user problem to a specific product surface, the UX decision behind it, the rejected alternative, and a labeled expected impact. No fabricated outcomes."
      />

      <div className="solution-validation-note">
        <Icon n="flask-conical" s={14} sw={2} c="var(--brand)" />
        Once usability testing runs (planned — see <a href="#reflection">Reflection</a>), <LabelChip kind="expected" compact>Expected impact</LabelChip> chips below will promote to <LabelChip kind="documented" compact>Documented validation finding</LabelChip> only where evidence supports them.
      </div>

      <div className="solution-list">
        {mods.map((m, i) => (
          <article
            key={m.n}
            className={`solution-row ${i % 2 === 0 ? "row-left" : "row-right"}`}
            data-screen-label={`05.${m.n} ${m.title}`}
          >
            <div className="solution-copy">
              <div className="solution-num">{m.n}</div>
              <blockquote className="solution-problem">"{m.problem}"</blockquote>
              <h3 className="solution-title">{m.title}</h3>
              <p className="solution-decision">{m.decision}</p>
              {(m.rejected || m.tradeoff) && (
                <div className="module-tradeoff">
                  {m.rejected && <span><strong>Rejected:</strong> {m.rejected}</span>}
                  {m.rejected && m.tradeoff && <span className="trade-sep"> · </span>}
                  {m.tradeoff && <span><strong>Trade-off:</strong> {m.tradeoff}</span>}
                </div>
              )}
              <div className="solution-meta">
                <LabelChip kind={m.labelKind}>{m.label}</LabelChip>
                <span className="solution-metric">{m.metric}</span>
              </div>
              <div className="solution-links">
                {m.liveUrl && (
                  <a className="see-live" href={m.liveUrl} target="_blank" rel="noreferrer">
                    See it live <Icon n="arrow-up-right" s={12} sw={2.4} />
                  </a>
                )}
                {m.annotatedInA11Y && (
                  <a className="see-live ghost" href="#accessibility">
                    Annotated version in Accessibility <Icon n="arrow-down" s={12} sw={2.4} />
                  </a>
                )}
              </div>
              {m.behind && (
                <details className="behind-design">
                  <summary><Icon n="chevron-right" s={14} sw={2.4} /> Behind the design</summary>
                  <div className="behind-content">
                    <div><span className="behind-label">Source</span><code>{m.behind.source}</code></div>
                    <div><span className="behind-label">Related screens</span><code>{m.behind.screens}</code></div>
                    <div><span className="behind-label">Related components</span><code>{m.behind.components}</code></div>
                  </div>
                </details>
              )}
            </div>
            <div className="solution-art">
              <SolutionMockup name={m.mockup} locale={locale} dark={dark} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Accessibility
// ─────────────────────────────────────────────────────────────
function Accessibility({ locale, dark }) {
  const audit = OP_DATA.AUDIT;
  const callouts = OP_DATA.A11Y_CALLOUTS;

  return (
    <section id="accessibility" data-screen-label="07 Accessibility" className="section section-a11y">
      <SectionHead
        n="07"
        anchor="accessibility"
        eyebrow="Accessibility, localization & trust"
        title="Accessibility was a design constraint at the token level — not a final QA pass."
        sub="The system was built so the easiest path for any designer or developer produces accessible UI by default. Audit data is from A11Y_Audit_Report v1.1.0 (re-audit 2026-03-20)."
      />

      {/* Audit summary cards with animated counters */}
      <div className="a11y-audit">
        {audit.map((a, i) => (
          <div key={i} className="audit-card">
            <div className="audit-value">
              {typeof a.value === "string" && /[\-–]/.test(a.value)
                ? a.value
                : <AnimatedNumber value={a.value} />}
            </div>
            <div className="audit-label">{a.label}</div>
            <div className="audit-sub">{a.sub}</div>
          </div>
        ))}
      </div>

      {/* Annotated screen + spec list */}
      <div className="a11y-screen">
        <div className="a11y-frame">
          <PhoneFrame dark={dark} label="Annotated Today view" screenId="A11Y-02">
            <TodayScreen dark={dark} locale={locale} showAnnotations={true} />
          </PhoneFrame>
        </div>
        <div className="a11y-specs">
          <Eyebrow>Per-surface accessibility floor</Eyebrow>
          <ul>
            <li>
              <Icon n="square" s={16} sw={1.75} c="var(--brand)" />
              <div>
                <strong>Touch targets.</strong> 48 × 48 minimum confirmed across audited screens. 56 × 56 reserved for primary patient actions.
              </div>
            </li>
            <li>
              <Icon n="contrast" s={16} sw={1.75} c="var(--brand)" />
              <div>
                <strong>Color contrast.</strong> All primary text passes 4.5 : 1. Two medium-priority issues open (XP bar label, locked badge) — both have documented remediation in backlog.
              </div>
            </li>
            <li>
              <Icon n="focus" s={16} sw={1.75} c="var(--brand)" />
              <div>
                <strong>Focus visibility.</strong> 2px <code>#14B8A6</code> teal-500 ring on every interactive. Verified across keyboard nav on ONBR-02, ONBR-03, ONBR-04, GAME-01 — GAME-04.
              </div>
            </li>
            <li>
              <Icon n="zap-off" s={16} sw={1.75} c="var(--brand)" />
              <div>
                <strong>Reduced motion.</strong> Every animation has a static alternative. XP bar fill becomes instant. Streak flame becomes static. Level-up confetti suppressed.
              </div>
            </li>
            <li>
              <Icon n="type" s={16} sw={1.75} c="var(--brand)" />
              <div>
                <strong>Senior surface rule.</strong> 18px body type token-enforced on patient-facing surfaces. Designers can't accidentally ship 14px body on a patient screen.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Localization / trust / quiet hours callouts */}
      <div className="a11y-callouts">
        {callouts.map((c, i) => (
          <div key={i} className="callout-card">
            <div className="callout-icon"><Icon n={c.icon} s={22} sw={1.75} c="var(--brand)" /></div>
            <div className="callout-title">{c.title}</div>
            <div className="callout-body">{c.body}</div>
          </div>
        ))}
      </div>

      {/* Testing matrix */}
      <div className="a11y-matrix">
        <Eyebrow>Testing matrix</Eyebrow>
        <div className="matrix-grid">
          <div>
            <span className="matrix-label">Platforms</span>
            <span>iOS 17.3 Safari · Android 14 Chrome · macOS Sonoma Chrome · Windows 11 Edge</span>
          </div>
          <div>
            <span className="matrix-label">Assistive tech</span>
            <span>VoiceOver (iOS, macOS) · TalkBack (Android) · NVDA (Windows)</span>
          </div>
          <div>
            <span className="matrix-label">Automated</span>
            <span>Lighthouse 11.4 · axe DevTools 4.8 · Stark (Figma) · WebAIM contrast checker</span>
          </div>
        </div>
        <p className="inline-cta">
          Want to verify? <a href="https://osteoplus-v2-9.vercel.app/es" target="_blank" rel="noreferrer">Open the live product</a> and run Lighthouse yourself.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Credits / Footer
// ─────────────────────────────────────────────────────────────
function Credits({ dark = false }) {
  return (
    <section id="credits" data-screen-label="10 Credits" className="section section-credits">
      <SectionHead
        n="10"
        anchor="credits"
        eyebrow="What this demonstrates"
        title="A short list, for the recruiter who scrolled."
        sub={null}
      />
      <div className="demo-grid">
        {[
          { icon: "compass",        title: "Strategic IA judgment",        body: "Identified and named the Medical Repository → Action Dashboard shift as the central design decision." },
          { icon: "accessibility",  title: "Accessibility as a constraint", body: "Built WCAG 2.2 AA, 48 / 56px targets, focus visibility, reduced motion into the token system itself." },
          { icon: "clipboard-check", title: "Evidence discipline",          body: "Separated documented / expected / recommended / placeholder across every claim. Labeled what I don't know." },
          { icon: "layers",         title: "Design system thinking",       body: "Two-collection token architecture · 39 components / 442 variants · audit-driven v4.2.0 migration." },
          { icon: "shield-check",   title: "Ethics of motivation",         body: "Clinically safe gamification — no shame copy, no punitive streak loss, Pain Interrupt Modal at pain ≥ 7." },
          { icon: "languages",      title: "Bilingual product design",     body: "Spanish-first / English-secondary, with full ES/EN copy deck for navigation, booking, and consent." },
          { icon: "scale",          title: "Trade-off literacy",           body: "Documented decisions with rejected alternatives, named trade-offs, and labeled results." },
        ].map((d, i) => (
          <div key={i} className="demo-card">
            <Icon n={d.icon} s={20} sw={1.75} c="var(--brand)" />
            <div className="demo-title">{d.title}</div>
            <div className="demo-body">{d.body}</div>
          </div>
        ))}
      </div>

      <footer className="case-footer">
        <div className="footer-left">
          <img
            src={dark ? "/assets/logo-svg/osteoplus-logo-teal-300.svg" : "/assets/logo-svg/osteoplus-logo-primary-teal.svg"}
            alt="Osteóplus logomark"
            height="22"
            className="footer-logo"
          />
          <div>
            <div className="footer-author">UX case study by <strong>Edgar Bonilla G.</strong></div>
            <div className="footer-meta">Osteóplus is an original fictional brand for a Barcelona clinic context. Solo concept project, not a client engagement.</div>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-credits">
            <span className="footer-label">Adapted open-source</span>
            <span>Lucide · shadcn/ui · Radix · Tailwind · 21st.dev</span>
          </div>
          <a className="btn btn-primary footer-cta" href="https://osteoplus-v2-9.vercel.app/es" target="_blank" rel="noreferrer">
            View live product <Icon n="arrow-up-right" s={15} sw={2.2} />
          </a>
        </div>
      </footer>

      <div className="footer-meta-strip">
        <div className="version-stamp">
          <Icon n="git-commit-horizontal" s={13} sw={2} c="var(--text-muted)" />
          <span><strong>v2.0</strong></span>
          <span className="dot">·</span>
          <span>Last updated 18 May 2026</span>
          <span className="dot">·</span>
          <a href="#version-history">Changelog</a>
        </div>

        <div className="tech-stack-pill" aria-label="Built with">
          <Icon n="hammer" s={13} sw={2} c="var(--text-muted)" />
          <span className="ts-label">Built with</span>
          <code>Next.js</code>
          <span className="dot">·</span>
          <code>React</code>
          <span className="dot">·</span>
          <code>CSS tokens</code>
          <span className="dot">·</span>
          <code>lucide-react</code>
        </div>
      </div>

      <details className="version-history" id="version-history">
        <summary>
          <Icon n="chevron-right" s={14} sw={2.4} />
          <span>Version history</span>
        </summary>
        <div className="vh-content">
          <ol>
            <li>
              <div className="vh-tag">v2.0</div>
              <div>
                <div className="vh-date">18 May 2026</div>
                <p>Added Persona, Decisions, Impact, Reflection sections. Per-module Rejected/Trade-off lines, "See it live" links, "Behind the design" expandables. Fictional-brand ribbon. Honesty-multiplier note above the Solution list. Anchor-copy buttons on H2s. At-a-glance hero strip. Read-time badges. Tech-stack pill.</p>
              </div>
            </li>
            <li>
              <div className="vh-tag">v1.0</div>
              <div>
                <div className="vh-date">May 2026</div>
                <p>Initial 6-section recruiter-skim publish: Hero, TL;DR, Process &amp; pivot, Final Solution, Accessibility, Credits. Inline hi-fi mockups, ES/EN locale toggle, dark mode, animated audit counters, design Tweaks (palette, hero layout, density).</p>
              </div>
            </li>
          </ol>
          <p className="vh-next">
            <Icon n="flask-conical" s={14} sw={2} c="var(--brand)" />
            <span>Next planned: <strong>v2.1 post-usability-testing</strong>. Promote <LabelChip kind="expected" compact>Expected impact</LabelChip> chips to <LabelChip kind="documented" compact>Documented validation finding</LabelChip> where evidence supports, per the validation roadmap in <a href="#reflection">Reflection</a>.</span>
          </p>
        </div>
      </details>
    </section>
  );
}



// Osteóplus case study — v2 revision sections
// Persona (Carmen), Decisions & trade-offs, Impact & Metrics, Reflection

// ─────────────────────────────────────────────────────────────
// PERSONA — Carmen archetype + 4 research themes
// ─────────────────────────────────────────────────────────────
function Persona() {
  const themes = OP_DATA.PERSONA_THEMES;
  return (
    <section id="persona" data-screen-label="04 Persona" className="section section-persona">
      <SectionHead
        n="04"
        anchor="persona"
        eyebrow="User research & persona"
        title="Carmen López — the design anchor, honestly framed."
        sub="Without this framing, every user quote in the Final Solution would feel like an interview transcript. It isn't. Here's what Carmen is, and what she isn't."
      />

      <div className="persona-grid">
        <article className="persona-card">
          <div className="persona-avatar" aria-hidden="true">
            <Icon n="user-round" s={40} sw={1.5} c="var(--text-secondary)" />
          </div>
          <div className="persona-archetype">Proxy-Dependent Senior</div>
          <h3 className="persona-name">Carmen López</h3>
          <p className="persona-scenario">
            Age 60+. Chronic back pain referred for osteopathy and physiotherapy.
            Low digital confidence, phone-first. Relies on a family member when an
            interface assumes confidence she doesn't have.
          </p>
          <div className="persona-jtbd">
            <LabelChip kind="placeholder" compact>Assumption</LabelChip>
            <blockquote>
              "Book without calling. Follow my exercises without asking my daughter."
            </blockquote>
            <div className="persona-jtbd-note">Synthesized job-to-be-done. Not a direct user quote.</div>
          </div>
        </article>

        <div className="persona-method">
          <h3>How Carmen exists</h3>
          <p>
            Carmen is an <strong>AI-assisted synthesized archetype</strong> informed by
            senior-UX literature and project documentation — not a real patient and
            not proof of a multi-participant study.
          </p>
          <p>
            Sample size, recruitment method, validation transcripts, and direct
            interview verbatims are not part of the available evidence. The case
            study is transparent about that boundary.
          </p>
          <p>
            Every user quote in the seven solution modules below
            (<em>"I can't find a slot, so I call"</em>, <em>"I forget which exercise to do today"</em>)
            is a <strong>synthesized proxy verbatim</strong>, not a recorded interview.
            They reflect documented friction patterns in the journey map, expressed
            in plausible patient language.
          </p>
          <p className="persona-next">
            <Icon n="flask-conical" s={15} sw={2} c="var(--brand)" />
            <span><strong>What's next.</strong> Moderated usability testing with 5–8 adults 60+ on booking, Today view, Daily Rehab Loop, Pain Interrupt comprehension, and Smart Arrival. The validation roadmap is in <a href="#reflection">Reflection</a>.</span>
          </p>
        </div>
      </div>

      <div className="persona-themes">
        <Eyebrow>Four research themes drove every design response</Eyebrow>
        <div className="themes-grid">
          {themes.map((t, i) => (
            <div key={i} className="theme-card">
              <div className="theme-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="theme-name">{t.name}</div>
              <p className="theme-blurb">{t.blurb}</p>
              <div className="theme-impl"><span>Drives</span>{t.impl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// DECISIONS — 6 design decisions with rejected + trade-offs
// ─────────────────────────────────────────────────────────────
function Decisions() {
  const rows = OP_DATA.DECISIONS;
  return (
    <section id="decisions" data-screen-label="06 Decisions" className="section section-decisions">
      <SectionHead
        n="06"
        anchor="decisions"
        eyebrow="Design decisions & trade-offs"
        title="Six decisions, with what I rejected and what I accepted."
        sub="The Final Solution shows what was decided. This section shows how I decided. Each row names the rejected alternative, the trade-off, and the result label."
      />
      <div className="decisions-stack">
        {rows.map((d, i) => (
          <article key={i} className="decision-row" data-screen-label={`06.${String(i + 1).padStart(2, "0")} ${d.title}`}>
            <div className="decision-headline">
              <div className="decision-num">{String(i + 1).padStart(2, "0")}</div>
              <h3>{d.title}</h3>
              <LabelChip kind={d.labelKind}>{d.label}</LabelChip>
            </div>
            <div className="decision-grid">
              <div>
                <div className="decision-label">Why</div>
                <p>{d.why}</p>
              </div>
              <div>
                <div className="decision-label">Rejected</div>
                <p>{d.rejected}</p>
              </div>
              <div>
                <div className="decision-label">Trade-off</div>
                <p>{d.tradeoff}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// IMPACT — North Star + 3 tiers + guardrails
// ─────────────────────────────────────────────────────────────
function Impact() {
  const { NORTH_STAR, DOCUMENTED_TARGETS, EXPECTED_IMPACT, RECOMMENDED_KPIS, GUARDRAILS } = OP_DATA;
  return (
    <section id="impact" data-screen-label="08 Impact" className="section section-impact">
      <SectionHead
        n="08"
        anchor="impact"
        eyebrow="Impact & metrics"
        title="A measurement strategy, not fabricated outcomes."
        sub="The product is in concept phase. Post-launch analytics do not exist. Impact is presented as a measurement strategy with a labeled evidence hierarchy."
      />

      <div className="north-star-card">
        <div className="north-star-eyebrow">
          <Icon n="compass" s={16} sw={2} c="var(--brand)" />
          <span>North Star</span>
        </div>
        <h3 className="north-star-name">{NORTH_STAR.name}</h3>
        <p className="north-star-def">{NORTH_STAR.def}</p>
        <div className="north-star-source"><code>Success_Metrics_v2_2.md</code> v2.3.0</div>
      </div>

      <div className="metrics-tier">
        <div className="tier-header">
          <LabelChip kind="documented">Documented targets</LabelChip>
          <p>From <code>Success_Metrics_v2.3.0</code>. Targets, not measured outcomes.</p>
        </div>
        <div className="metrics-grid">
          {DOCUMENTED_TARGETS.map((m, i) => (
            <div key={i} className="metric">
              <div className="metric-name">{m.name}</div>
              <div className="metric-target">{m.target}</div>
              {m.note && <div className="metric-note">{m.note}</div>}
            </div>
          ))}
        </div>
      </div>

      <div className="metrics-tier">
        <div className="tier-header">
          <LabelChip kind="expected">Expected impact</LabelChip>
          <p>Designer reasoning from documented user problems. Not measured.</p>
        </div>
        <ul className="expected-list">
          {EXPECTED_IMPACT.map((line, i) => (
            <li key={i}>
              <Icon n="arrow-right" s={14} sw={2.4} c="var(--brand)" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="metrics-tier">
        <div className="tier-header">
          <LabelChip kind="recommended">Recommended KPIs</LabelChip>
          <p>Proposed for tracking. Not yet committed in analytics taxonomy.</p>
        </div>
        <div className="metrics-grid">
          {RECOMMENDED_KPIS.map((m, i) => (
            <div key={i} className="metric metric-recommended">
              <div className="metric-name">{m.name}</div>
              {m.note && <div className="metric-note">{m.note}</div>}
            </div>
          ))}
        </div>
      </div>

      <div className="metrics-guardrails">
        <div className="guardrails-head">
          <Icon n="shield" s={18} sw={2} c="var(--orange-700)" />
          <div>
            <h3>Guardrail metrics</h3>
            <p>Prevent unsafe optimization. Every product team should have these.</p>
          </div>
        </div>
        <ul>
          {GUARDRAILS.map((g, i) => <li key={i}>{g}</li>)}
        </ul>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// REFLECTION — pull quote + 4 blocks
// ─────────────────────────────────────────────────────────────
function Reflection() {
  const { REFLECTION } = OP_DATA;
  return (
    <section id="reflection" data-screen-label="09 Reflection" className="section section-reflection">
      <SectionHead
        n="09"
        anchor="reflection"
        eyebrow="Reflection & lessons learned"
        title="What designing for adults 60+ actually taught me."
        sub={null}
      />

      <blockquote className="pull-quote">
        <Icon n="quote" s={28} sw={1.5} c="var(--brand)" />
        <p>{REFLECTION.pullQuote}</p>
      </blockquote>

      <div className="reflection-grid">
        {REFLECTION.blocks.map((b, i) => (
          <article key={i} className={`reflection-block ${b.closer ? "is-closer" : ""}`}>
            <div className="reflection-num">{String(i + 1).padStart(2, "0")}</div>
            <h3>{b.title}</h3>
            {b.body && b.body.map((p, j) => (
              <p key={j} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            {b.list && (
              <ul className="validation-list">
                {b.list.map((item, j) => (
                  <li key={j}>
                    <Icon n="check-circle-2" s={15} sw={2} c="var(--brand)" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}




// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null
      ? keyOrEdits : { [keyOrEdits]: val };
    setValues((prev) => ({ ...prev, ...edits }));
    if (typeof window !== 'undefined') window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('tweakchange', { detail: edits }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({ title = 'Tweaks', noDeckControls = false, children }) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  // Auto-inject a rail toggle when a <deck-stage> is on the page. The
  // toggle drives the deck's per-viewer _railVisible via window message;
  // state is mirrored from the same localStorage key the deck reads so
  // the control reflects reality across reloads. The mechanism is the
  // message — authors who want custom placement can post it directly
  // and pass noDeckControls to suppress this one.
  const hasDeckStage = React.useMemo(
    () => typeof document !== 'undefined' && !!document.querySelector('deck-stage'),
    [],
  );
  // deck-stage enables its rail in connectedCallback, but this panel can
  // mount before that element has upgraded. The initial read catches the
  // common case; the listener covers mounting first. (Older deck-stage.js
  // copies still wait for the host's __omelette_rail_enabled postMessage —
  // same listener handles those.)
  const [railEnabled, setRailEnabled] = React.useState(
    () => typeof document !== 'undefined' && hasDeckStage && !!document.querySelector('deck-stage')?._railEnabled,
  );
  React.useEffect(() => {
    if (!hasDeckStage || railEnabled) return undefined;
    const onMsg = (e) => {
      if (e.data && e.data.type === '__omelette_rail_enabled') setRailEnabled(true);
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [hasDeckStage, railEnabled]);
  const [railVisible, setRailVisible] = React.useState(() => {
    try { return typeof localStorage === 'undefined' ? true : localStorage.getItem('deck-stage.railVisible') !== '0'; } catch (e) { return true; }
  });
  const toggleRail = (on) => {
    setRailVisible(on);
    window.postMessage({ type: '__deck_rail_visible', on }, '*');
  };
  const offsetRef = React.useRef({ x: 16, y: 16 });
  const PAD = 16;

  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth, h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y)),
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);

  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);

  React.useEffect(() => {
    const onMsg = (e) => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);
      else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*');
  };

  const onDragStart = (e) => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX, sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = (ev) => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy),
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  if (!open) return null;
  return (
    <>
      <style>{__TWEAKS_STYLE}</style>
      <div ref={dragRef} className="twk-panel" data-noncommentable=""
           style={{ right: offsetRef.current.x, bottom: offsetRef.current.y }}>
        <div className="twk-hd" onMouseDown={onDragStart}>
          <b>{title}</b>
          <button className="twk-x" aria-label="Close tweaks"
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={dismiss}>✕</button>
        </div>
        <div className="twk-body">
          {children}
          {hasDeckStage && railEnabled && !noDeckControls && (
            <TweakSection label="Deck">
              <TweakToggle label="Thumbnail rail" value={railVisible} onChange={toggleRail} />
            </TweakSection>
          )}
        </div>
      </div>
    </>
  );
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({ label, children }) {
  return (
    <>
      <div className="twk-sect">{label}</div>
      {children}
    </>
  );
}

function TweakRow({ label, value, children, inline = false }) {
  return (
    <div className={inline ? 'twk-row twk-row-h' : 'twk-row'}>
      <div className="twk-lbl">
        <span>{label}</span>
        {value != null && <span className="twk-val">{value}</span>}
      </div>
      {children}
    </div>
  );
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({ label, value, min = 0, max = 100, step = 1, unit = '', onChange }) {
  return (
    <TweakRow label={label} value={`${value}${unit}`}>
      <input type="range" className="twk-slider" min={min} max={max} step={step}
             value={value} onChange={(e) => onChange(Number(e.target.value))} />
    </TweakRow>
  );
}

function TweakToggle({ label, value, onChange }) {
  return (
    <div className="twk-row twk-row-h">
      <div className="twk-lbl"><span>{label}</span></div>
      <button type="button" className="twk-toggle" data-on={value ? '1' : '0'}
              role="switch" aria-checked={!!value}
              onClick={() => onChange(!value)}><i /></button>
    </div>
  );
}

function TweakRadio({ label, value, options, onChange }) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = (o) => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({ 2: 16, 3: 10 }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = (s) => {
      const m = options.find((o) => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return <TweakSelect label={label} value={value} options={options}
                        onChange={(s) => onChange(resolve(s))} />;
  }
  const opts = options.map((o) => (typeof o === 'object' ? o : { value: o, label: o }));
  const idx = Math.max(0, opts.findIndex((o) => o.value === value));
  const n = opts.length;

  const segAt = (clientX) => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor(((clientX - r.left - 2) / inner) * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };

  const onPointerDown = (e) => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = (ev) => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  return (
    <TweakRow label={label}>
      <div ref={trackRef} role="radiogroup" onPointerDown={onPointerDown}
           className={dragging ? 'twk-seg dragging' : 'twk-seg'}>
        <div className="twk-seg-thumb"
             style={{ left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
                      width: `calc((100% - 4px) / ${n})` }} />
        {opts.map((o) => (
          <button key={o.value} type="button" role="radio" aria-checked={o.value === value}>
            {o.label}
          </button>
        ))}
      </div>
    </TweakRow>
  );
}

function TweakSelect({ label, value, options, onChange }) {
  return (
    <TweakRow label={label}>
      <select className="twk-field" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => {
          const v = typeof o === 'object' ? o.value : o;
          const l = typeof o === 'object' ? o.label : o;
          return <option key={v} value={v}>{l}</option>;
        })}
      </select>
    </TweakRow>
  );
}

function TweakText({ label, value, placeholder, onChange }) {
  return (
    <TweakRow label={label}>
      <input className="twk-field" type="text" value={value} placeholder={placeholder}
             onChange={(e) => onChange(e.target.value)} />
    </TweakRow>
  );
}

function TweakNumber({ label, value, min, max, step = 1, unit = '', onChange }) {
  const clamp = (n) => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({ x: 0, val: 0 });
  const onScrubStart = (e) => {
    e.preventDefault();
    startRef.current = { x: e.clientX, val: value };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = (ev) => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return (
    <div className="twk-num">
      <span className="twk-num-lbl" onPointerDown={onScrubStart}>{label}</span>
      <input type="number" value={value} min={min} max={max} step={step}
             onChange={(e) => onChange(clamp(Number(e.target.value)))} />
      {unit && <span className="twk-num-unit">{unit}</span>}
    </div>
  );
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, (c) => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}

const __TwkCheck = ({ light }) => (
  <Icon n="check" s={14} sw={2.4} c={light ? 'rgba(0,0,0,.78)' : '#fff'} />
);

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({ label, value, options, onChange }) {
  if (!options || !options.length) {
    return (
      <div className="twk-row twk-row-h">
        <div className="twk-lbl"><span>{label}</span></div>
        <input type="color" className="twk-swatch" value={value}
               onChange={(e) => onChange(e.target.value)} />
      </div>
    );
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = (o) => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return (
    <TweakRow label={label}>
      <div className="twk-chips" role="radiogroup">
        {options.map((o, i) => {
          const colors = Array.isArray(o) ? o : [o];
          const [hero, ...rest] = colors;
          const sup = rest.slice(0, 4);
          const on = key(o) === cur;
          return (
            <button key={i} type="button" className="twk-chip" role="radio"
                    aria-checked={on} data-on={on ? '1' : '0'}
                    aria-label={colors.join(', ')} title={colors.join(' · ')}
                    style={{ background: hero }}
                    onClick={() => onChange(o)}>
              {sup.length > 0 && (
                <span>
                  {sup.map((c, j) => <i key={j} style={{ background: c }} />)}
                </span>
              )}
              {on && <__TwkCheck light={__twkIsLight(hero)} />}
            </button>
          );
        })}
      </div>
    </TweakRow>
  );
}

function TweakButton({ label, onClick, secondary = false }) {
  return (
    <button type="button" className={secondary ? 'twk-btn secondary' : 'twk-btn'}
            onClick={onClick}>{label}</button>
  );
}



// Osteóplus case study — top app glue: scrollspy, top bar, TOC, scroll progress

const THEME_STORAGE_KEY = "osteoplus.case-study.theme";

function readStoredTheme() {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage && window.localStorage.getItem(THEME_STORAGE_KEY);
    return value === "dark" || value === "light" ? value : null;
  } catch (e) {
    return null;
  }
}

function getInitialDarkMode() {
  if (typeof window === "undefined") return false;
  const stored = readStoredTheme();
  if (stored) return stored === "dark";
  try {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  } catch (e) {
    return false;
  }
}

function persistThemePreference(isDark) {
  if (typeof window === "undefined") return;
  try {
    if (window.localStorage) window.localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
  } catch (e) {}
}

function TopChrome({ active, locale, setLocale, dark, setDark, progress }) {
  const themeLabel = dark ? "Switch to light mode" : "Switch to dark mode";
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a href="#hero" className="topbar-brand" aria-label="Osteóplus case study — back to top">
          <img
            src={dark ? "/assets/logo-svg/osteoplus-logo-teal-300.svg" : "/assets/logo-svg/osteoplus-logo-primary-teal.svg"}
            alt=""
            height="20"
          />
          <span className="topbar-brand-text">
            <strong>Osteóplus</strong>
            <span className="topbar-brand-sub">case study · Edgar Bonilla G.</span>
          </span>
        </a>

        <nav className="topbar-toc" aria-label="Sections">
          {OP_DATA.TOC.map(s => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? "is-active" : ""}>
              {s.label}
            </a>
          ))}
        </nav>

        <div className="topbar-controls">
          <div className="seg" role="group" aria-label="Mockup locale">
            <button type="button" className={locale === "es" ? "on" : ""} onClick={() => setLocale("es")} aria-pressed={locale === "es"}>ES</button>
            <button type="button" className={locale === "en" ? "on" : ""} onClick={() => setLocale("en")} aria-pressed={locale === "en"}>EN</button>
          </div>
          <button type="button" className="icon-btn" onClick={() => setDark(!dark)} aria-label={themeLabel} title={themeLabel} aria-pressed={dark}>
            <Icon n={dark ? "sun" : "moon"} s={18} sw={1.75} />
          </button>
          <a className="btn-mini" href="https://osteoplus-v2-9.vercel.app/es" target="_blank" rel="noreferrer">
            Live <Icon n="arrow-up-right" s={13} sw={2.4} />
          </a>
        </div>
      </div>
      <div className="topbar-progress" aria-hidden="true">
        <div className="topbar-progress-fill" style={{ transform: `scaleX(${progress})` }} />
      </div>
    </header>
  );
}

function FloatingTOC({ active }) {
  return (
    <aside className="floating-toc" aria-label="Section nav">
      <div className="floating-toc-label">Sections</div>
      <ul>
        {OP_DATA.TOC.map((s, i) => (
          <li key={s.id} className={active === s.id ? "is-active" : ""}>
            <a href={`#${s.id}`}>
              <span className="toc-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="toc-label">{s.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

// ─────────────────────────────────────────────────────────────
// Tweaks panel
// ─────────────────────────────────────────────────────────────
function TweaksPanelMount({ tweaks, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Aesthetic">
        <TweakColor
          label="Palette"
          options={[
            ["#0F766E", "#F8FAFC", "#0F172A"],   // Clinical teal (default)
            ["#1E3A8A", "#F8FAFC", "#0F172A"],   // Quiet blue
            ["#7C2D12", "#FFF7ED", "#1C0F0F"],   // Warm rust
            ["#134E4A", "#F1FBF7", "#08221F"],   // Deep clinic
          ]}
          value={tweaks.palette}
          onChange={(v) => setTweak("palette", v)}
        />
      </TweakSection>
      <TweakSection title="Hero">
        <TweakRadio
          label="Hero layout"
          options={["asymmetric", "centered", "manifesto"]}
          value={tweaks.heroLayout}
          onChange={(v) => setTweak("heroLayout", v)}
        />
      </TweakSection>
      <TweakSection title="Density">
        <TweakRadio
          label="Reading density"
          options={["comfortable", "compact"]}
          value={tweaks.density}
          onChange={(v) => setTweak("density", v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

// ─────────────────────────────────────────────────────────────
// App root
// ─────────────────────────────────────────────────────────────
const DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#0F766E", "#F8FAFC", "#0F172A"],
  "heroLayout": "centered",
  "density": "comfortable"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweaks] = useTweaks(DEFAULTS);
  const setTweak = (k, v) => setTweaks({ [k]: v });

  const [locale, setLocale] = React.useState("es");
  const [dark, setDarkState] = React.useState(getInitialDarkMode);
  const [active, setActive] = React.useState("hero");
  const [progress, setProgress] = React.useState(0);

  const setDark = React.useCallback((next) => {
    setDarkState((current) => {
      const resolved = typeof next === "function" ? next(current) : next;
      persistThemePreference(resolved);
      return resolved;
    });
  }, []);

  // Apply palette + density + dark to <html>
  React.useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = dark ? "dark" : "light";
    root.dataset.density = tweaks.density;
    if (tweaks.palette && Array.isArray(tweaks.palette)) {
      root.style.setProperty("--brand-custom", tweaks.palette[0]);
      root.style.setProperty("--bg-custom", tweaks.palette[1]);
      root.style.setProperty("--text-custom", tweaks.palette[2]);
    }
  }, [dark, tweaks.density, tweaks.palette]);

  // Follow the operating-system theme until the user makes an explicit choice.
  React.useEffect(() => {
    if (readStoredTheme()) return undefined;
    if (!window.matchMedia) return undefined;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event) => {
      if (!readStoredTheme()) setDarkState(event.matches);
    };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else if (mq.addListener) mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else if (mq.removeListener) mq.removeListener(onChange);
    };
  }, []);

  // Scrollspy + progress
  React.useEffect(() => {
    const ids = OP_DATA.TOC.map(s => s.id);
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
      // Pick the section whose top is just above the 25% viewport mark
      const probe = window.scrollY + window.innerHeight * 0.25;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= probe) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Shift+T toggles the Tweaks panel — designer-mode keyboard escape hatch
  React.useEffect(() => {
    const onKey = (e) => {
      const t = e.target;
      const isEditing = t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
      if (isEditing) return;
      if (e.shiftKey && (e.key === "T" || e.key === "t")) {
        e.preventDefault();
        // Detect current panel state via the rendered DOM, not a tracked flag —
        // keeps Shift+T in sync with the host toolbar toggle.
        const isOpen = !!document.querySelector(".twk-panel");
        const type = isOpen ? "__deactivate_edit_mode" : "__activate_edit_mode";
        window.postMessage({ type }, "*");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);


  return (
    <React.Fragment>
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="brand-ribbon" role="note">
        <span className="ribbon-pill">UX case study · concept project</span>
        <span className="ribbon-text">
          Osteóplus is an <strong>original fictional brand</strong> for a Barcelona clinic context.
          Solo concept project, not a client engagement.
        </span>
      </div>
      <TopChrome active={active} locale={locale} setLocale={setLocale} dark={dark} setDark={setDark} progress={progress} />
      <FloatingTOC active={active} />
      <main id="main">
        <Hero locale={locale} dark={dark} tweaks={tweaks} />
        <TLDR />
        <Process locale={locale} dark={dark} />
        <Persona />
        <Solution locale={locale} dark={dark} />
        <Decisions />
        <Accessibility locale={locale} dark={dark} />
        <Impact />
        <Reflection />
        <Credits dark={dark} />
      </main>
      <TweaksPanelMount tweaks={tweaks} setTweak={setTweak} />
    </React.Fragment>
  );
}

export function LegacyCaseStudy() {
  return <App />;
}
