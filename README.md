# Texas AGI Labs — Official Website

> Frontier AGI research — alignment, interpretability, and agentic systems.

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** CSS Modules + Global CSS
- **Fonts:** Bebas Neue, DM Mono, Lora (Google Fonts)
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy

Push to `main` branch — Vercel auto-deploys.

```bash
git add .
git commit -m "your message"
git push origin main
```

## Project Structure

```
texasagilabs-site/
├── pages/
│   ├── _app.js          # Global app wrapper
│   ├── _document.js     # HTML head, fonts, SEO meta
│   └── index.js         # Homepage
├── styles/
│   ├── globals.css      # Global CSS variables + animations
│   └── Home.module.css  # Scoped component styles
├── public/
│   └── site.webmanifest # PWA manifest
└── package.json
```

## Live

- Production: [https://www.texasagilabs.com](https://www.texasagilabs.com)
- Vercel: [https://texasagilabs-site.vercel.app](https://texasagilabs-site.vercel.app)
