# Zoo Gonzales — Website

This is a simple **Vite + React** site using **Tailwind via CDN** (no build CSS config).

## Run locally
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
```

The build output goes to `dist/`.

## Deploy for free

### Option A — Vercel (easiest)
1. Push this folder to a **GitHub** repo.
2. Go to vercel.com and **Import Project** → pick the repo.
3. Framework preset: **Vite**. Build command: `vite build` (default). Output: `dist`.
4. Click **Deploy**. You get a live URL.

### Option B — Netlify (drag & drop)
1. Run `npm run build`.
2. Drag the `dist/` folder into app.netlify.com/drop.

### Option C — GitHub Pages
1. Run `npm run build`.
2. Install `gh-pages` and publish `dist/` (or let Pages serve from `/`).
3. In repo Settings → Pages → choose **Deploy from a branch** → **/docs** or **/dist**.

You can add a custom domain later in the hosting platform's settings.
