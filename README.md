# case-study-osteoplus

Static publish-preview bundle for the **Osteóplus** UX case study (*From medical repository to Action Dashboard*). React components load in-browser via Babel for local review; production deployment should precompile or port to Next.js per `00-source-inventory/13-v2-to-production-publish-guide.md`.

## Local preview

```sh
cd case-study-osteoplus
python3 -m http.server 8765
```

Open [http://localhost:8765/Case%20Study%20-%20Osteóplus.html](http://localhost:8765/Case%20Study%20-%20Osteóplus.html) (requires network for CDN scripts).

**Entry points**

| File | Purpose |
|------|---------|
| `Case Study - Osteóplus.html` | Development preview (loads `assets/`) |
| `Case Study - Osteóplus (standalone).html` | Single-file share artifact (regenerate after edits) |
| `Case Study - Osteóplus-print.html` | Print layout |

Regenerate standalone:

```sh
python3 scripts/build-standalone.py
```

## Project docs

- `AGENTS.md` — conventions for agents and contributors
- `PUBLISH-READINESS.md` — QA status and remaining production steps
- `00-source-inventory/` — design specs and publish guide

## Deploy on Vercel (GitHub)

1. Open [vercel.com/new](https://vercel.com/new) (signed in with GitHub).
2. **Import** `erbonilla/case-study-osteoplus`.
3. Leave framework preset as **Other** (static site). Root directory: `.` — no build command.
4. Deploy. The site root `/` serves `Case Study - Osteóplus.html` via `vercel.json`.

This is an **interim static preview** (in-browser Babel). For production SEO/performance, port to Next.js per `00-source-inventory/13-v2-to-production-publish-guide.md`.

## Author

Edgar Bonilla G. — UI/UX Designer
