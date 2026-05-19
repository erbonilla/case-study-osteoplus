// Osteóplus case study — phone frame + shared mockup primitives
// All mockups render at 375x812 (iPhone-ish) inside a soft bezel.

const Icon = ({ n, s = 20, c, sw = 1.75, style }) => (
  <i data-lucide={n} style={{ width: s, height: s, color: c, display: "inline-flex", strokeWidth: sw, ...style }}></i>
);

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

Object.assign(window, { Icon, PhoneFrame, TabBar, TopBar, StatusPill });
