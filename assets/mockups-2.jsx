// Osteóplus case study — exercise + gamification + privacy + IA pivot mockups

// ─────────────────────────────────────────────────────────────
// EXER-03 — Rep counter (active exercise)
// ─────────────────────────────────────────────────────────────
function RepCounterScreen({ dark = false, locale = "es", painLevel = 3, modal = false }) {
  const t = window.OP_DATA.COPY[locale];
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
  const t = window.OP_DATA.COPY[locale];
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
  const t = window.OP_DATA.COPY[locale];
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
  const t = window.OP_DATA.COPY[locale];
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

Object.assign(window, {
  RepCounterScreen, PainInterruptScreen, PainInterruptModalOverlay,
  StreakScreen, PrivacyScreen, RepositoryScreen,
});
