// pages/models/alpha.jsx
import Link from 'next/link'; // <-- added
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Alpha() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-slate-950 text-white antialiased">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* Back link to the index of models */}
        <div className="mb-6">
          <Link href="/models" className="text-sm text-violet-300 hover:text-violet-200">
            ← Back to Models
          </Link>
        </div>

        {/* Hero */}
        <section>
          <p className="text-xs font-mono tracking-[0.2em] text-blue-400/70 uppercase">
            Model A1 · Deployment-class system
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">
            ALPHA — Safe Deployment AGI
          </h1>
          <p className="mt-4 text-slate-300 max-w-3xl">
            ALPHA is Texas AGI Labs’ deployment-grade AGI system engineered for
            autonomy in real-world, high-stakes environments. It is built to
            execute complex missions under strict safety envelopes, verifiable
            constraints, and live override channels.
          </p>
        </section>

        {/* Mission Role */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-300">Mission Profile</h2>
          <p className="mt-3 text-slate-300 max-w-3xl">
            ALPHA is designed for organizations that require intelligent control,
            planning, and decision support where failure is not an option:
            critical infrastructure, advanced manufacturing, logistics, security,
            and other tightly regulated domains.
          </p>
          <ul className="mt-4 grid gap-3 text-sm text-slate-300 md:grid-cols-2">
            <li>• Policy-constrained autonomous decision-making</li>
            <li>• Real-time monitoring of actions vs. allowed envelopes</li>
            <li>• Formalized escalation and human-in-the-loop hooks</li>
            <li>• Environment-aware rollback and shutdown procedures</li>
          </ul>
        </section>

        {/* Core Capabilities */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-300">Core Capabilities</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3 text-sm">
            <div className="bg-white/5 border border-blue-900/40 rounded-xl p-4">
              <h3 className="font-semibold text-blue-200 text-sm">Constrained Autonomy</h3>
              <p className="mt-2 text-slate-300">
                Decisions are computed within cryptographically enforced policy
                bounds and domain-specific guardrails.
              </p>
            </div>
            <div className="bg-white/5 border border-blue-900/40 rounded-xl p-4">
              <h3 className="font-semibold text-blue-200 text-sm">Online Risk Scoring</h3>
              <p className="mt-2 text-slate-300">
                Every action is assigned a dynamic risk index based on context,
                impact surface, and deviation from expected behavior.
              </p>
            </div>
            <div className="bg-white/5 border border-blue-900/40 rounded-xl p-4">
              <h3 className="font-semibold text-blue-200 text-sm">Incident-Aware Memory</h3>
              <p className="mt-2 text-slate-300">
                Safety-relevant events are retained in structured memory for
                post-incident analysis and future policy updates.
              </p>
            </div>
          </div>
        </section>

        {/* Safety Integration */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-300">Safety Architecture & Integration</h2>
          <p className="mt-3 text-slate-300 max-w-3xl">
            ALPHA is supervised by a layered control stack: sandboxing,
            deterministic policy execution, anomaly detectors, and external
            safety monitors. All high-impact operations require alignment with
            pre-registered constraints and auditable logs.
          </p>
          <div className="mt-4 text-xs text-slate-400 border border-blue-900/40 rounded-xl p-4 bg-slate-900/50">
            [Placeholder diagram: Control stack showing ALPHA core, policy
            engine, monitors, human override, and rollback channel.]
          </div>
        </section>

        {/* Evaluation */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-300">Evaluation & Certification</h2>
          <p className="mt-3 text-slate-300 max-w-3xl">
            ALPHA undergoes adversarial testing, red-team evaluation, and
            scenario-based validation before any production deployment.
          </p>
          <ul className="mt-4 text-sm text-slate-300 space-y-1">
            <li>• Deployment Tier: <span className="font-mono">S-2 (High Assurance)</span></li>
            <li>• Coverage: adversarial prompts, tool misuse, escalation paths</li>
            <li>• Logging: full decision trace for critical operations</li>
          </ul>
        </section>

        {/* CTA + cross-links */}
        <section className="mt-12 mb-4">
          <h2 className="text-xl font-semibold text-blue-300">Explore ALPHA</h2>
          <p className="mt-2 text-slate-300 max-w-3xl">
            Access to full ALPHA documentation, evaluation artifacts, and
            deployment pilots is available to selected partners.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a className="px-4 py-2 rounded-md bg-white text-black font-semibold" href="#">
              Request ALPHA Briefing
            </a>
            <Link className="px-4 py-2 rounded-md border border-blue-500/60 text-blue-300" href="/safety">
              View Safety Framework
            </Link>

            {/* cross-links to other model pages */}
            <Link className="px-4 py-2 rounded-md border border-white/10 bg-white/5 hover:border-violet-400/60 transition"
                  href="/models/omega">
              View OMEGA
            </Link>
            <Link className="px-4 py-2 rounded-md border border-white/10 bg-white/5 hover:border-violet-400/60 transition"
                  href="/models/nova">
              View NOVA
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


