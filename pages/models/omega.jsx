// pages/models/omega.jsx
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Omega() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-slate-950 text-white antialiased">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Hero */}
        <section>
          <p className="text-xs font-mono tracking-[0.2em] text-blue-400/70 uppercase">
            Model B1 · Cognition-class system
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">
            OMEGA — Robust Cognition
          </h1>
          <p className="mt-4 text-slate-300 max-w-3xl">
            OMEGA is a frontier-scale reasoning system built to maintain
            performance, calibration, and stability under uncertainty, partial
            information, and adversarial conditions.
          </p>
        </section>

        {/* Role */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-300">
            Mission Profile
          </h2>
          <p className="mt-3 text-slate-300 max-w-3xl">
            Designed as the cognitive core for analysis, prediction, and
            strategy, OMEGA serves domains where reasoning quality directly
            impacts economic, operational, or security outcomes.
          </p>
          <ul className="mt-4 grid gap-3 text-sm text-slate-300 md:grid-cols-2">
            <li>• Long-horizon planning under uncertainty</li>
            <li>• Multi-step hypothesis generation and testing</li>
            <li>• Robustness against prompt-level perturbation</li>
            <li>• Calibrated confidence and abstention behavior</li>
          </ul>
        </section>

        {/* Capabilities */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-300">
            Core Capabilities
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3 text-sm">
            <div className="bg-white/5 border border-blue-900/40 rounded-xl p-4">
              <h3 className="font-semibold text-blue-200 text-sm">
                Structured Reasoning
              </h3>
              <p className="mt-2 text-slate-300">
                OMEGA decomposes complex tasks into verifiable intermediate
                steps, enabling reliable chains of thought for critical use.
              </p>
            </div>
            <div className="bg-white/5 border border-blue-900/40 rounded-xl p-4">
              <h3 className="font-semibold text-blue-200 text-sm">
                Uncertainty Aware
              </h3>
              <p className="mt-2 text-slate-300">
                Built-in calibration heads expose when OMEGA is uncertain,
                prompting escalation or human review.
              </p>
            </div>
            <div className="bg-white/5 border border-blue-900/40 rounded-xl p-4">
              <h3 className="font-semibold text-blue-200 text-sm">
                Adversarial Robustness
              </h3>
              <p className="mt-2 text-slate-300">
                Trained and evaluated against adversarial patterns,
                distribution shifts, and misalignment prompts.
              </p>
            </div>
          </div>
        </section>

        {/* Safety */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-300">
            Safety & Cognitive Guarding
          </h2>
          <p className="mt-3 text-slate-300 max-w-3xl">
            OMEGA is paired with safety filters, tooling constraints, and
            oversight policies tuned for high-cognition scenarios. It is
            designed to avoid unsupported claims, catastrophic suggestions,
            and covert goal-seeking.
          </p>
          <div className="mt-4 text-xs text-slate-400 border border-blue-900/40 rounded-xl p-4 bg-slate-900/50">
            [Placeholder diagram: dual-stack architecture showing OMEGA core
            with safety critic, calibration layer, and review hooks.]
          </div>
        </section>

        {/* Evaluation */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-300">
            Evaluation & Benchmarks
          </h2>
          <p className="mt-3 text-slate-300 max-w-3xl">
            OMEGA is benchmarked on complex reasoning, planning, code, and
            domain-specific evaluation suites, with emphasis on stability over
            raw scores.
          </p>
          <ul className="mt-4 text-sm text-slate-300 space-y-1">
            <li>• Stress-tested under noisy, incomplete, and conflicting inputs.</li>
            <li>• Monitoring for hallucination, mode collapse, and unsafe chains.</li>
            <li>• Configurable thresholds for abstention and escalation.</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-12 mb-4">
          <h2 className="text-xl font-semibold text-blue-300">
            Explore OMEGA
          </h2>
          <p className="mt-2 text-slate-300 max-w-3xl">
            For access to OMEGA research notes, evaluation reports, and pilot
            integrations, Texas AGI Labs works with vetted partners.
          </p>
          <div className="mt-4 flex gap-3 text-sm">
            <a className="px-4 py-2 rounded-md bg-white text-black font-semibold" href="#">
              Request OMEGA Dossier
            </a>
            <a className="px-4 py-2 rounded-md border border-blue-500/60 text-blue-300" href="/about">
              Learn About Our Approach
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

