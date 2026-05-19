# AGENTS.md

## Project Snapshot

This project is the static publish-preview bundle for the Osteoplus case study. Treat it as a static HTML + React/Babel page for now, not as a Next.js application. The intended future production path is documented in `00-source-inventory/13-v2-to-production-publish-guide.md`.

Primary entry points:
- `Case Study - Osteóplus.html` is the current browser preview.
- `Case Study - Osteóplus (standalone-source).html` is the source for the generated standalone artifact.
- `Case Study - Osteóplus (standalone).html` is generated and can become stale after asset edits; rebuild it from standalone-source before sharing it as the standalone file.
- `scripts/build-standalone.py` rebuilds the generated standalone artifact from `Case Study - Osteóplus (standalone-source).html`.
- `assets/app.jsx` owns app state, theme, locale, scrollspy, and page assembly.
- `assets/case-study.css` owns case-study layout, responsiveness, and page-level dark mode.
- `assets/colors_and_type.css` owns canonical tokens and base theme variables.
- `assets/phone-frame.jsx`, `assets/mockups-1.jsx`, and `assets/mockups-2.jsx` own inline product mockups.
- `assets/sections-*.jsx` own the case-study sections.
- `assets/logo-svg/` contains the canonical SVG logo and favicon variants.

## Source Inventory Read Order

Before changing design, content, or publishing behavior, read:
1. `00-source-inventory/00-README.md`
2. `00-source-inventory/02-visual-design-specs.md`
3. `00-source-inventory/11-case-study-build-instructions.md`
4. `00-source-inventory/12-case-study-revision-instructions.md`
5. `00-source-inventory/13-v2-to-production-publish-guide.md`

Use `00-source-inventory/02-visual-design-specs.md` as the project-specific design source of truth for this static bundle.

## Design Rules

- Preserve the current v2 case-study structure unless the source inventory explicitly calls for a revision.
- Keep the clinical-editorial style: calm layout, generous spacing, strong readability, and restrained visual effects.
- Maintain 18px body text for the default comfortable reading mode.
- Keep touch targets at 48px minimum where practical; primary patient actions should remain visually closer to 56px.
- Respect `prefers-reduced-motion`; do not add decorative motion that lacks a reduced-motion fallback.
- Use semantic tokens from `assets/colors_and_type.css`; avoid raw hex values in new component styles unless defining or correcting tokens.

## Theme Rules

- `document.documentElement.dataset.theme` is the single runtime theme contract.
- Light mode is default only when neither local preference nor system dark preference exists.
- Dark mode must use slate-900 page backgrounds, slate-800 card surfaces, slate-700 borders, slate-50 primary text, slate-300 body text, and teal-300 primary accents.
- Any new mockup surface must accept the existing `dark` prop and render readable colors in both modes.
- If adding logos on dark surfaces, use the white or dark-safe logo variant.
- Use `assets/logo-svg/osteoplus-logo-primary-teal.svg` on light surfaces and `assets/logo-svg/osteoplus-logo-teal-300.svg` on dark navigation/footer surfaces.

## Icon Rules

- Use Lucide for UI icons through the shared `Icon` helper in `assets/phone-frame.jsx`.
- Inline SVG is allowed for brand assets only: favicon, logo files, and standalone thumbnail/fallback artwork.
- Do not add emoji icons, mixed icon libraries, or hand-drawn UI icons.
- After rendering, there should be no leftover `i[data-lucide]` placeholders.

## Responsive QA

Before calling publish-ready, verify:
- `390x844`
- `768x1024`
- `1024x768`
- `1440x900`

Acceptance checks:
- No console errors.
- `document.documentElement.scrollWidth <= window.innerWidth` at each viewport.
- Light and dark mode both render readable UI and mockups.
- Theme toggle persists across reload.
- Focus is visible on skip link, nav links, toggles, buttons, and CTAs.
- External links, metadata, favicon, and structured data remain intact.

## Tooling Notes

- UI UX Pro Max is the preferred audit checklist for accessibility, touch targets, responsive layout, dark mode, and icon consistency.
- Context7 was not available in this workspace during the publish-readiness pass. Use it later only if it becomes available and a framework or dependency documentation lookup would materially improve correctness.
- This folder is not currently a Git repository; inspect files before edits and avoid assuming version-control rollback is available.

## Production Note

The current preview uses in-browser Babel and external UMD scripts. That is acceptable for local review, but public Vercel production should precompile the React assets or follow the Next.js port described in `00-source-inventory/13-v2-to-production-publish-guide.md`.

If the standalone HTML is used as the shareable artifact, regenerate it after every publish-readiness edit. Do not treat the generated standalone file as the implementation source.

Standalone rebuild command:

```sh
python3 scripts/build-standalone.py
```
