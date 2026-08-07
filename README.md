# Portfolio

Personal portfolio site — Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript.
Dark theme with ambient glow. Single static page, no database, no backend.

## Run it

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

> **Note on npm:** this machine's npm cache defaults to `D:\npm-cache`, and D: is
> nearly full. If an install fails with `ENOSPC`, run it with the cache redirected:
>
> ```powershell
> $env:npm_config_cache = "C:\npm-cache"; npm install
> ```

## Editing the content

**Everything you'll want to change lives in one file: [`src/content/site.ts`](src/content/site.ts).**
You should not need to open a component to update the site.

| What | Where in `site.ts` |
| --- | --- |
| Name, role, tagline, location | `site` |
| Email, GitHub, LinkedIn | `site.socials`, `site.email` |
| Page title / meta description / URL | `site.seo` |
| Résumé button | `site.resumeUrl` — set `""` to hide it |
| The three numbers under the hero | `stats` |
| About paragraphs | `about.paragraphs` |
| Projects | `projects` |
| Skill groups | `skillGroups` |
| Timeline | `experience` |

### Projects

Each project takes:

- `featured: true` → larger card in the top row, with more room for the `detail`
  paragraph. Keep this to **two** projects so the top row fills evenly.
- `href` → live URL or repo. Leave `""` and the card renders without a link.
- `metrics` → the small cyan stat chips. Keep them concrete and true. Empty array is fine.

### Résumé

Drop your PDF at `public/resume.pdf` and the hero button will serve it. Or point
`site.resumeUrl` at a Google Drive link instead.

## Design system

Tokens are CSS custom properties at the top of [`src/app/globals.css`](src/app/globals.css)
and exposed to Tailwind through `@theme inline`. To re-skin the whole site, change
the values in `:root` — nothing else hardcodes a colour.

| Token | Value | Used for |
| --- | --- | --- |
| `--bg` | `#0a0a0f` | Page base (deliberately not pure black — avoids OLED smear) |
| `--primary` | `#8b5cf6` | Buttons, glow, timeline dots |
| `--accent` | `#22d3ee` | Eyebrow labels, metrics, hover states |
| `--text` / `--text-muted` / `--text-faint` | | Three-step text hierarchy |

Motion is CSS-only (no animation library). Scroll reveals come from
[`src/components/Reveal.tsx`](src/components/Reveal.tsx), which uses an
IntersectionObserver attached via a ref callback. Every animation is disabled
under `prefers-reduced-motion`.

## Deploying

Push to GitHub, then import the repo at [vercel.com/new](https://vercel.com/new).
No environment variables, no build config — it deploys as-is on the free tier.

Afterwards, set `site.seo.url` to the real domain so Open Graph previews resolve.

## Structure

```
src/
  app/
    layout.tsx      fonts, metadata, ambient background layers
    page.tsx        section order
    globals.css     design tokens + animation
  components/       Nav, Hero, Projects, About, Skills, Experience, Contact, Footer
  content/site.ts   ← all copy and data
```
