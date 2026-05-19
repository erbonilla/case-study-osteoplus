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

window.OP_DATA = { COPY, PHASES, SOLUTIONS, AUDIT, A11Y_CALLOUTS, TOC, PERSONA_THEMES, DECISIONS, NORTH_STAR, DOCUMENTED_TARGETS, EXPECTED_IMPACT, RECOMMENDED_KPIS, GUARDRAILS, REFLECTION };
