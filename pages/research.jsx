// pages/research.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Research() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-slate-950 text-white antialiased">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero */}
        <section>
          <p className="text-xs font-mono tracking-[0.2em] text-blue-400/70 uppercase">
            Research · Systems · Evaluation
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">
            Frontier AGI Research & Evaluation
          </h1>
          <p className="mt-4 text-slate-300 max-w-3xl">
            Texas AGI Labs operates as an engineering-first research organization,
            focused on controllable superintelligence, robust cognition, and
            scalable multi-agent systems suitable for real-world deployment.
          </p>
        </section>

        {/* Systems Overview */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-blue-300">
            Core AGI Systems
          </h2>
          <p className="mt-2 text-slate-300 max-w-3xl">
            Our current research portfolio is organized around three primary
            system families.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3 text-sm">
            <a href="/models/alpha" className="bg-blue-900/10 border border-blue-800/50 rounded-xl p-4 hover:border-blue-400/80 transition">
              <div className="text-xs font-mono text-blue-400/80 uppercase">Model A1</div>
              <div className="text-lg font-semibold text-blue-200">ALPHA</div>
              <p className="mt-2 text-slate-300">
                Safe deployment AGI for constrained, high-assurance autonomy.
              </p>
            </a>
            <a href="/models/omega" className="bg-blue-900/10 border border-blue-800/50 rounded-xl p-4 hover:border-blue-400/80 transition">
              <div className="text-xs font-mono text-blue-400/80 uppercase">Model B1</div>
              <div className="text-lg font-semibold text-blue-200">OMEGA</div>
              <p className="mt-2 text-slate-300">
                Robust cognition engine optimized for reasoning under uncertainty.
              </p>
            </a>
            <a href="/models/nova" className="bg-blue-900/10 border border-blue-800/50 rounded-xl p-4 hover:border-blue-400/80 transition">
              <div className="text-xs font-mono text-blue-400/80 uppercase">Model C1</div>
              <div className="text-lg font-semibold text-blue-200">NOVA</div>
              <p className="mt-2 text-slate-300">
                Scalable multi-agent integration and orchestration framework.
              </p>
            </a>
          </div>
        </section>

        {/* Publications / Artifacts */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-300">
            Publications & Technical Artifacts
          </h2>
          <p className="mt-2 text-slate-300 max-w-3xl">
            Public releases are staged with partners. Below are placeholders for
            upcoming reports and benchmark suites.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 text-sm">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-xs font-mono text-blue-400/80 uppercase">
                Upcoming
              </div>
              <div className="mt-1 font-semibold">
                ALPHA Safety Evaluation Report
              </div>
              <p className="mt-2 text-slate-300">
                Multi-environment stress tests, failure modes, and mitigation
                performance across deployment scenarios.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-xs font-mono text-blue-400/80 uppercase">
                Upcoming
              </div>
              <div className="mt-1 font-semibold">
                OMEGA Robust Reasoning Benchmarks
              </div>
              <p className="mt-2 text-slate-300">
                Evaluation of long-horizon reasoning, calibration, and robustness
                under adversarial prompts.
              </p>
            </div>
          </div>
        </section>

        {/* Collaborations */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-300">
            Research Collaborations
          </h2>
          <p className="mt-2 text-slate-300 max-w-3xl">
            Texas AGI Labs selectively partners with universities, laboratories,
            and industry teams working on high-assurance AI. Collaboration
            includes joint benchmarks, audits, and safety evaluations.
          </p>
          <p className="mt-3 text-slate-400 text-sm">
            To propose a collaboration, use the contact channel on the homepage
            and reference &quot;Research Program&quot; in your subject.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

