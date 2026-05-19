# Publish Readiness Status

Last updated: 2026-05-19

## Current Publish Preview

Use `Case Study - Osteóplus.html` for local browser review. The project is still a static React/Babel bundle, not a Next.js production build.

Primary publish-preview inputs:
- `Case Study - Osteóplus.html`
- `assets/app.jsx`
- `assets/case-study.css`
- `assets/colors_and_type.css`
- `assets/sections-*.jsx`
- `assets/mockups-*.jsx`
- `assets/phone-frame.jsx`
- `assets/logo-svg/`

## Completed

- Added project-level `AGENTS.md`.
- Wired canonical SVG favicon and logo variants from `assets/logo-svg/`.
- Added light/dark theme initialization from saved preference or system preference.
- Added theme persistence via `localStorage`.
- Updated theme toggle labels to describe the next action.
- Tightened dark-mode tokens and dark surfaces.
- Fixed mobile horizontal overflow at the audited breakpoints.
- Kept Lucide as the UI icon system; inline SVG remains limited to brand/fallback artwork.
- Added production notes for the static React/Babel preview.
- Synced active, print, and standalone-source HTML metadata basics.
- Added `scripts/build-standalone.py` and regenerated `Case Study - Osteóplus (standalone).html` from the updated standalone source, including local assets and external JS libraries in the bundle.

## Verified

Browser verification against `Case Study - Osteóplus.html`:
- `390x844`
- `768x1024`
- `1024x768`
- `1440x900`

Passing checks:
- No console errors.
- No horizontal overflow in light or dark mode.
- Theme toggle persists after reload.
- Light mode loads `assets/logo-svg/osteoplus-logo-primary-teal.svg`.
- Dark mode loads `assets/logo-svg/osteoplus-logo-teal-300.svg`.
- Favicon loads from `assets/logo-svg/favicon.svg`.
- Lucide renders with zero leftover `i[data-lucide]` placeholders.
- Skip-link focus outline is visible.
- Reduced-motion and focus-visible CSS rules are present.
- Generated standalone artifact renders with zero console errors in local browser verification.

Known console warning:
- Browser reports the expected Babel standalone production warning. This is acceptable for the current preview and should be removed by the future precompiled/Next.js production build.

## Remaining Before Public Production

- Re-run `python3 scripts/build-standalone.py` after future edits to `Case Study - Osteóplus (standalone-source).html`, `assets/*.jsx`, `assets/*.css`, or `assets/logo-svg/*.svg`.
- For public Vercel production, follow `00-source-inventory/13-v2-to-production-publish-guide.md` and precompile or port to Next.js.
- Add final public URL, canonical URL, and OG image URL once the deployment target is known.
- Run Lighthouse/axe on the deployed URL after production build or deployment.

## Do Not Treat As Final

- Any public deployment that still relies on in-browser Babel as the final production architecture.
