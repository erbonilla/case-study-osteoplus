// Osteóplus case study — hi-fi mobile mockup screens.
// All screens render inside <PhoneFrame>. Copy comes from window.OP_DATA.COPY[locale].
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
  const t = window.OP_DATA.COPY[locale];
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
  const t = window.OP_DATA.COPY[locale];
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
  const t = window.OP_DATA.COPY[locale];
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

Object.assign(window, { TodayScreen, BookingScreen, ConfirmationScreen, AnnotationOverlay });
