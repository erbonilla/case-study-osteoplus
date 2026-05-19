// Osteóplus case study — top app glue: scrollspy, top bar, TOC, scroll progress

const THEME_STORAGE_KEY = "osteoplus.case-study.theme";

function readStoredTheme() {
  try {
    const value = window.localStorage && window.localStorage.getItem(THEME_STORAGE_KEY);
    return value === "dark" || value === "light" ? value : null;
  } catch (e) {
    return null;
  }
}

function getInitialDarkMode() {
  const stored = readStoredTheme();
  if (stored) return stored === "dark";
  try {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  } catch (e) {
    return false;
  }
}

function persistThemePreference(isDark) {
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
            src={(window.__resources && (dark ? window.__resources.logoTeal300 : window.__resources.logoTeal)) || (dark ? "assets/logo-svg/osteoplus-logo-teal-300.svg" : "assets/logo-svg/osteoplus-logo-primary-teal.svg")}
            alt=""
            height="20"
          />
          <span className="topbar-brand-text">
            <strong>Osteóplus</strong>
            <span className="topbar-brand-sub">case study · Edgar Bonilla G.</span>
          </span>
        </a>

        <nav className="topbar-toc" aria-label="Sections">
          {window.OP_DATA.TOC.map(s => (
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
        {window.OP_DATA.TOC.map((s, i) => (
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
  const { TweaksPanel, TweakSection, TweakRadio, TweakColor, TweakToggle } = window;
  if (!TweaksPanel) return null;
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
  const [tweaks, setTweaks] = (window.useTweaks || ((d) => [d, () => {}]))(DEFAULTS);
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
    const ids = window.OP_DATA.TOC.map(s => s.id);
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

  // Re-run Lucide icons after each render
  React.useEffect(() => {
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
  });

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
