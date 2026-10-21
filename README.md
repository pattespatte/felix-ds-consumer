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

## Upgrade felix-ds

The theme has no CLI – it is a plain CSS package – so upgrading is a dependency update. With `GITHUB_PACKAGES_TOKEN` exported as above:

```bash
bun update @pattespatte/felix-ds
```

This resolves the newest published version allowed by the range in `package.json`, rewrites that range to the new version and updates `bun.lockb`. The `@fkui/*` packages are pinned to exact versions and are not touched, as long as they stay inside the theme's peer range (`@fkui/theme-default >=6.57.0 <7.0.0`). Restart the dev server afterwards – Vite pre-bundles the old CSS – and run `bun run build` and `bunx playwright test` before committing.

To see which version is installed, run `npm ls @pattespatte/felix-ds` (local lookup, no token needed). `npm view @pattespatte/felix-ds versions` lists every published version – it needs the token and must run from the repo root so `.npmrc` applies. To install a specific release instead of the newest one, `bun add @pattespatte/felix-ds@1.4.0` pins that exact version, while `bun add @pattespatte/felix-ds@latest` writes a fresh caret range – use it when a major release falls outside the current range, which `bun update` never crosses. The registry has no dist-tags other than `latest`.

## Scripts

| Command | What it does |
| --- | --- |
| `bun run dev` | Dev server |
| `bun run build` | Typecheck + production build |
| `bun run preview` | Serve the production build |
| `bunx playwright test` | Axe scans (every page in both color modes) and font-loading checks |

Deployments to GitHub Pages run through `.github/workflows/deploy.yml` on every push to `main`.
