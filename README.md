# felix-ds-consumer

A minimal consumer app for [@pattespatte/felix-ds](https://github.com/pattespatte/felix-ds) – a thin, organisation-neutral theme layer on top of FKUI's public npm packages. It exercises the package's consumption contract: validation forms, a data table, an expandable paragraph and a modal, in both light and dark color mode, using the theme's self-hosted fonts (Noto Sans for body text, Roboto Slab for headings).

Live at <https://pattespatte.github.io/felix-ds-consumer/>.

## Run locally

The `@pattespatte` scope is served by GitHub Packages, so installing requires a personal access token with `read:packages`. The tracked `.npmrc` reads it from `GITHUB_PACKAGES_TOKEN`:

```bash
export GITHUB_PACKAGES_TOKEN=<PAT with read:packages>
bun install
bun run dev
```

## Scripts

| Command | What it does |
| --- | --- |
| `bun run dev` | Dev server |
| `bun run build` | Typecheck + production build |
| `bun run preview` | Serve the production build |
| `bunx playwright test` | Axe scans (every page in both color modes) and font-loading checks |

Deployments to GitHub Pages run through `.github/workflows/deploy.yml` on every push to `main`.
