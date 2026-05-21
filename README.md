# case-study-osteoplus

Production Next.js port for the **Osteóplus** UX case study (*From medical repository to Action Dashboard*). The original static React/Babel preview is preserved for reference and standalone sharing.

Live preview: [case-study-osteoplus.vercel.app](https://case-study-osteoplus.vercel.app/)

Launch status: production baseline is live, social preview metadata has been manually refreshed, and the first outreach round can use the Vercel URL.

## Production app

```sh
cd case-study-osteoplus
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production checks:

```sh
npm run build
npm run start
```

Routes:

| Route | Purpose |
|------|---------|
| `/` | Production case-study page |
| `/case-studies/osteoplus` | Portfolio-style case-study route |

## Static preview

```sh
cd case-study-osteoplus
python3 -m http.server 8765
```

Open [http://localhost:8765/Case%20Study%20-%20Osteóplus.html](http://localhost:8765/Case%20Study%20-%20Osteóplus.html) (requires network for CDN scripts).

**Entry points**

| File | Purpose |
|------|---------|
| `app/` | Next.js production app |
| `public/assets/` | Assets served by the Next.js app |
| `app/_components/legacy-case-study.jsx` | First production port of the current case-study UI, compiled by Next.js |
| `Case Study - Osteóplus.html` | Preserved static preview (loads `assets/`) |
| `Case Study - Osteóplus (standalone).html` | Single-file share artifact (regenerate after edits) |
| `Case Study - Osteóplus-print.html` | Print layout |

Regenerate standalone:

```sh
python3 scripts/build-standalone.py
```

## Project docs

- `AGENTS.md` — conventions for agents and contributors
- `PUBLISH-READINESS.md` — QA status and remaining production steps
- `PORTFOLIO-LAUNCH.md` — launch checklist, public post, DM/email templates, and outreach tracking rules
- `00-source-inventory/` — design specs and publish guide

## Deploy on Vercel (GitHub)

1. Open [vercel.com/new](https://vercel.com/new) (signed in with GitHub).
2. **Import** `erbonilla/case-study-osteoplus`.
3. Use the detected **Next.js** framework preset. Root directory: `.`.
4. Deploy. Vercel runs `npm run build`; the site root `/` serves the Next.js app.

The static HTML files remain in the repo as preview/archive artifacts; production traffic should use the Next.js app.

## Author

Edgar Bonilla G. — UI/UX Designer
