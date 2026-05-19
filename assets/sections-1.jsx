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
  const t = window.OP_DATA.COPY[locale];
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

window.SectionHead = SectionHead;
window.Eyebrow = Eyebrow;
window.LabelChip = LabelChip;
window.AnimatedNumber = AnimatedNumber;
window.Hero = Hero;
window.TLDR = TLDR;
