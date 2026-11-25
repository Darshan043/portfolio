# Portfolio

Infrastructure for a Next.js portfolio. Visual design and content come later.

## Requirements

- Node.js 20.9 or newer
- npm 11

pnpm is not required. This project uses npm and `package-lock.json` to pin resolved versions.

## Install

```bash
npm install
```

Playwright browser binaries are separate from the npm package:

```bash
npx playwright install chromium
```

## Develop

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run typecheck
npm run lint
npm run format:check
npm run build
npm run test:e2e
```

## 3D assets

Place `.glb` and `.gltf` files in `public/models`. They are served from `/models` and are not loaded by the initial page.

Optimize a model before adding it to the app:

```bash
npm run optimize:model -- --help
```

## Environment

Copy `.env.example` to `.env.local` when a public site URL is needed. No variables are required to run the app.

## Scripts

| Script           | Purpose                              |
| ---------------- | ------------------------------------ |
| `dev`            | Start the Next.js development server |
| `build`          | Production build                     |
| `start`          | Serve the production build           |
| `lint`           | ESLint                               |
| `typecheck`      | TypeScript without emitting files    |
| `format`         | Write Prettier formatting            |
| `format:check`   | Check Prettier formatting            |
| `test:e2e`       | Playwright smoke test                |
| `optimize:model` | glTF-Transform CLI                   |
