// pages/press.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Press() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-slate-950 text-white antialiased">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero */}
        <section>
          <p className="text-xs font-mono tracking-[0.2em] text-blue-400/70 uppercase">
            Press · Media · Announcements
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">
            Press & Media Resources
          </h1>
          <p className="mt-4 text-slate-300 max-w-3xl">
            Official announcements, releases, and reference material for
            covering Texas AGI Labs, our systems, and our research.
          </p>
        </section>

        {/* Featured Announcements */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-blue-300">
            Featured Announcements
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 text-sm">
            <article className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="text-xs font-mono text-blue-400/80 uppercase">
                Statement · Placeholder
              </div>
              <h3 className="mt-1 text-lg font-semibold text-white">
                Texas AGI Labs Introduces ALPHA, OMEGA, NOVA System Stack
              </h3>
              <p className="mt-2 text-slate-300">
                A unified architecture for safe deployment AGI, robust cognition,
                and scalable agent integration, engineered for real-world use.
              </p>
            </article>

            <article className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="text-xs font-mono text-blue-400/80 uppercase">
                Forthcoming
              </div>
              <h3 className="mt-1 text-lg font-semibold text-white">
                Publication of Safety & Evaluation Framework
              </h3>
              <p className="mt-2 text-slate-300">
                Texas AGI Labs will publish a technical overview of alignment,
                verification, and operational safeguards for deployment-class AGI.
              </p>
            </article>
          </div>
        </section>

        {/* Press Kit */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-300">
            Press Kit
          </h2>
          <p className="mt-2 text-slate-300 max-w-3xl">
            A full media kit (logo files, brand guidelines, leadership bios,
            factsheet) will be made available with our first public milestone.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <button
              className="px-4 py-2 rounded-md border border-blue-400/70 text-blue-300 bg-transparent cursor-not-allowed"
              disabled
            >
              Download Press Kit (Coming Soon)
            </button>
            <a
              href="/about"
              className="px-4 py-2 rounded-md bg-blue-500 text-black font-semibold"
            >
              View About Texas AGI Labs
            </a>
          </div>
        </section>

        {/* Media Contact */}
        <section className="mt-16 mb-6">
          <h2 className="text-2xl font-semibold text-blue-300">
            Media & Inquiry Contact
          </h2>
          <p className="mt-2 text-slate-300 max-w-3xl">
            For interview requests, speaking invitations, or comment on AGI and
            safety topics, please use our contact portal and select
            <span className="font-semibold"> “Press / Media”</span> as the topic.
          </p>
          <div className="mt-4">
            <a
              href="/contact"
              className="inline-flex items-center px-4 py-2 rounded-md bg-blue-500 text-black font-semibold text-sm"
            >
              Go to Contact Portal
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

