import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ── FONTS ─────────────────────────────────────────────── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,400&family=Lora:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />

        {/* ── FAVICON / APP ICONS ───────────────────────────────── */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ── THEME ─────────────────────────────────────────────── */}
        <meta name="theme-color" content="#030508" />
        <meta name="msapplication-TileColor" content="#030508" />
        <meta name="color-scheme" content="dark" />

        {/* ── PRIMARY SEO META ──────────────────────────────────── */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Texas AGI Labs" />
        <meta name="keywords" content="AGI research, artificial general intelligence, AI alignment, mechanistic interpretability, agentic AI, frontier AI, AI safety, Texas AI lab, RLHF, constitutional AI, world modeling, multimodal AI" />
        <link rel="canonical" href="https://www.texasagilabs.com" />

        {/* ── OPEN GRAPH (Facebook, LinkedIn, WhatsApp) ─────────── */}
        <meta property="og:type"        content="website" />
        <meta property="og:site_name"   content="Texas AGI Labs" />
        <meta property="og:url"         content="https://www.texasagilabs.com" />
        <meta property="og:title"       content="Texas AGI Labs — Frontier Intelligence Research" />
        <meta property="og:description" content="An independent research institution advancing aligned, interpretable, and beneficial Artificial General Intelligence. Based in McKinney, Texas." />
        <meta property="og:image"       content="https://www.texasagilabs.com/og-image.png" />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt"   content="Texas AGI Labs — Frontier Intelligence Research" />
        <meta property="og:locale"      content="en_US" />

        {/* ── TWITTER / X CARD ─────────────────────────────────── */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:site"        content="@texasagilabs" />
        <meta name="twitter:creator"     content="@texasagilabs" />
        <meta name="twitter:title"       content="Texas AGI Labs — Frontier Intelligence Research" />
        <meta name="twitter:description" content="Researching and aligning AGI systems to unlock unprecedented human progress — safely, responsibly, and openly." />
        <meta name="twitter:image"       content="https://www.texasagilabs.com/og-image.png" />

        {/* ── JSON-LD STRUCTURED DATA ───────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://www.texasagilabs.com/#organization',
                  name: 'Texas AGI Labs',
                  url: 'https://www.texasagilabs.com',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://www.texasagilabs.com/logo.png',
                    width: 200,
                    height: 200,
                  },
                  description:
                    'An independent frontier AI research lab advancing the science of aligned, interpretable, and beneficial artificial general intelligence.',
                  foundingDate: '2024',
                  foundingLocation: {
                    '@type': 'Place',
                    name: 'McKinney, Texas, USA',
                    address: {
                      '@type': 'PostalAddress',
                      addressLocality: 'McKinney',
                      addressRegion: 'TX',
                      addressCountry: 'US',
                    },
                  },
                  areaServed: 'Worldwide',
                  knowsAbout: [
                    'Artificial General Intelligence',
                    'AI Alignment',
                    'Mechanistic Interpretability',
                    'Agentic AI Systems',
                    'Frontier AI Safety',
                    'Reinforcement Learning from Human Feedback',
                    'Constitutional AI',
                    'World Modeling',
                  ],
                  sameAs: [
                    'https://github.com/saravanan08071979/texasagilabs-site',
                    'https://www.linkedin.com/company/texasagilabs',
                    'https://twitter.com/texasagilabs',
                  ],
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.texasagilabs.com/#website',
                  url: 'https://www.texasagilabs.com',
                  name: 'Texas AGI Labs',
                  description: 'Frontier AGI research — alignment, interpretability, and agentic systems.',
                  publisher: {
                    '@id': 'https://www.texasagilabs.com/#organization',
                  },
                  inLanguage: 'en-US',
                },
                {
                  '@type': 'ResearchOrganization',
                  '@id': 'https://www.texasagilabs.com/#researchorg',
                  name: 'Texas AGI Labs',
                  url: 'https://www.texasagilabs.com',
                  parentOrganization: {
                    '@id': 'https://www.texasagilabs.com/#organization',
                  },
                  researchArea: [
                    'Artificial General Intelligence',
                    'AI Safety',
                    'Machine Learning',
                    'Neural Networks',
                    'Cognitive Science',
                  ],
                },
              ],
            }),
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
