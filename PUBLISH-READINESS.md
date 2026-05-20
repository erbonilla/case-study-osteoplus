# Publish Readiness Status

Last updated: 2026-05-20

## Current Publish Preview

Live preview: https://case-study-osteoplus.vercel.app/

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
- Added deployed canonical URL, Open Graph URL, Twitter card metadata, and a 1200x630 social preview image.
- Removed `.DS_Store` files from the repository working tree.

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
- Deployed Vercel URL serves the expected HTML from `/`.
- Deployed Vercel URL has no console errors, no horizontal overflow at audited breakpoints, persistent theme behavior, SVG favicon, Lucide rendering, and light/dark logo variants.
- Lighthouse on deployed URL (2026-05-20): Performance 37, Accessibility 89, Best Practices 100, SEO 100. Low performance is expected for the in-browser Babel preview.

Known console warning:
- Browser reports the expected Babel standalone production warning. This is acceptable for the current preview and should be removed by the future precompiled/Next.js production build.

## Post-deploy checklist

Run after each production deploy or metadata/asset change.

### 1. Live URL and metadata

**Production URL:** https://case-study-osteoplus.vercel.app/

**OG image:** https://case-study-osteoplus.vercel.app/assets/og/osteoplus-case-study.png (1200×630 PNG)

Confirm in page source (View Source or DevTools → Elements → `<head>`):

| Tag | Expected value |
|-----|----------------|
| `link rel="canonical"` | `https://case-study-osteoplus.vercel.app/` |
| `og:url` | `https://case-study-osteoplus.vercel.app/` |
| `og:image` | `https://case-study-osteoplus.vercel.app/assets/og/osteoplus-case-study.png` |
| `twitter:card` | `summary_large_image` |
| `twitter:image` | same `og:image` URL |
| JSON-LD `url` / `image` | same canonical and PNG URLs |

Quick terminal check:

```sh
curl -sL "https://case-study-osteoplus.vercel.app/" | grep -E 'canonical|og:image|twitter:image'
curl -sI "https://case-study-osteoplus.vercel.app/assets/og/osteoplus-case-study.png" | head -5
```

### 2. Lighthouse (deployed URL)

```sh
npx lighthouse@12 "https://case-study-osteoplus.vercel.app/" \
  --only-categories=performance,accessibility,best-practices,seo \
  --view
```

**Targets for this static Babel preview:**

| Category | Target | Notes |
|----------|--------|--------|
| SEO | 100 | Canonical, meta description, structured data |
| Best Practices | ≥ 95 | HTTPS, no console errors |
| Accessibility | ≥ 85 | Re-check after content edits |
| Performance | ≥ 85 | **Not expected** until Next.js/precompiled build |

**Last run (2026-05-20):** Performance 37 · Accessibility 89 · Best Practices 100 · SEO 100.  
Main bottlenecks: render-blocking CDN scripts, in-browser Babel, dev React UMD bundles.

Optional: run **axe DevTools** in the browser on the live URL after substantive UI changes.

### 3. Refresh social preview cache

Platforms cache OG data. Re-scrape after deploys or when the preview image/title changes.

| Platform | Tool | URL to paste |
|----------|------|----------------|
| Facebook | [Sharing Debugger](https://developers.facebook.com/tools/debug/) | `https://case-study-osteoplus.vercel.app/` |
| LinkedIn | [Post Inspector](https://www.linkedin.com/post-inspector/) | same |
| Twitter/X | [Card Validator](https://cards-dev.twitter.com/validator) | same |

For each tool: paste the URL → run inspect/debug → **Scrape Again** (Facebook) if an old preview appears.

Confirm the card shows the 1200×630 mockup (`osteoplus-case-study.png`), not a generic host placeholder.

### 4. When to re-run this checklist

- Push to `main` that changes HTML metadata, `assets/og/`, or `vercel.json`
- Custom domain added (update canonical, `og:url`, and JSON-LD to the final domain, then re-scrape)
- After `python3 scripts/build-standalone.py` if sharing the standalone file externally

## Remaining Before Public Production

- Re-run `python3 scripts/build-standalone.py` after future edits to `Case Study - Osteóplus (standalone-source).html`, `assets/*.jsx`, `assets/*.css`, or `assets/logo-svg/*.svg`.
- For public Vercel production, follow `00-source-inventory/13-v2-to-production-publish-guide.md` and precompile or port to Next.js.
- Re-run Lighthouse/axe on the **Next.js** deployed URL; target Performance ≥ 85 per the production publish guide.

## Do Not Treat As Final

- Any public deployment that still relies on in-browser Babel as the final production architecture.
