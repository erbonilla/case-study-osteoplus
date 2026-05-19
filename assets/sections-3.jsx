// Osteóplus case study — v2 revision sections
// Persona (Carmen), Decisions & trade-offs, Impact & Metrics, Reflection

// ─────────────────────────────────────────────────────────────
// PERSONA — Carmen archetype + 4 research themes
// ─────────────────────────────────────────────────────────────
function Persona() {
  const themes = window.OP_DATA.PERSONA_THEMES;
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
  const rows = window.OP_DATA.DECISIONS;
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
  const { NORTH_STAR, DOCUMENTED_TARGETS, EXPECTED_IMPACT, RECOMMENDED_KPIS, GUARDRAILS } = window.OP_DATA;
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
  const { REFLECTION } = window.OP_DATA;
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

Object.assign(window, { Persona, Decisions, Impact, Reflection });
