// Osteóplus case study — Process & Pivot, Final Solution, Accessibility, Footer

// ─────────────────────────────────────────────────────────────
// Process & IA Pivot
// ─────────────────────────────────────────────────────────────
function Process({ locale, dark }) {
  const phases = window.OP_DATA.PHASES;
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
  const mods = window.OP_DATA.SOLUTIONS;
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
  const audit = window.OP_DATA.AUDIT;
  const callouts = window.OP_DATA.A11Y_CALLOUTS;

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
            src={(window.__resources && (dark ? window.__resources.logoTeal300 : window.__resources.logoTeal)) || (dark ? "assets/logo-svg/osteoplus-logo-teal-300.svg" : "assets/logo-svg/osteoplus-logo-primary-teal.svg")}
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
          <code>HTML</code>
          <span className="dot">·</span>
          <code>React 18</code>
          <span className="dot">·</span>
          <code>CSS tokens</code>
          <span className="dot">·</span>
          <code>Lucide</code>
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

Object.assign(window, { Process, Solution, Accessibility, Credits, SolutionMockup });
