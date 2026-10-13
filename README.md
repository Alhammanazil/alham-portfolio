# alham-portfolio

Personal portfolio of Alham Manazil: a single-page site built with Vue 3, Vite and Tailwind CSS.

Live at https://alham-manazil.netlify.app/

## Run locally

```sh
npm install
npm run dev      # http://localhost:5173
```

## Scripts

| Command           | What it does                   |
| ----------------- | ------------------------------ |
| `npm run dev`     | Start the dev server           |
| `npm run build`   | Production build into `dist/`  |
| `npm run preview` | Serve the production build     |
| `npm run lint`    | Lint `src/` with ESLint        |

## Editing content

All text, experience and projects live in `src/data/portfolio.js`.
Project screenshots go in `public/img/projects/` as two WebP files per project:
`<slug>-thumb.webp` (480x300, shown in the strip) and `<slug>-full.webp` (about 1200px wide, shown in the lightbox).

## Deploy

Netlify builds with `npm run build` and publishes `dist/` (see `netlify.toml`).
