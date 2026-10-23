# houssamboudiar.vercel.app

Personal site of Houssam Boudiar, a full-stack engineer working on AI and LLM applications. It is a
static site built with [Astro](https://astro.build), with no client-side framework and no tracking.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321 (TODO markers are visible here only)
npm run build     # astro check + static build into dist/
npm run preview   # serve dist/
npm run og        # regenerate public/og.png
```

## Layout

- `src/content/work/*.mdx`: the case studies. Frontmatter is validated by `src/content.config.ts`.
- `src/diagrams/*.ts`: diagram data drawn by `src/components/Diagram.astro`.
- `src/styles/global.css`: design tokens for the dark and light themes, plus base styles.
- `src/site.ts`: name, links and the CV path.
- `public/Houssam_Boudiar_CV.pdf`: the CV linked from every page.

## Deploy

Pushing to `main` deploys through the Vercel Git integration. The framework preset is Astro, the
build command is `npm run build` and the output directory is `dist`.
