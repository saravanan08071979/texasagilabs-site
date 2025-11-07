// pages/safety.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Safety() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-slate-950 text-white antialiased">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-16">
        <section>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Built-In Safety for Real-World AGI Deployment
          </h1>
          <p className="mt-4 text-slate-300 max-w-3xl">
            Safety at Texas AGI Labs is not a post-hoc filter. It is embedded
            into objectives, training signals, architecture, and runtime control.
          </p>
          <p className="mt-3 text-slate-400 max-w-3xl">
            Our systems are designed to operate under constraints, expose
            uncertainty, and provide hooks for human and automated oversight,
            even under adversarial or high-pressure conditions.
          </p>
        </section>

        <section className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="bg-white/5 border border-blue-900/40 rounded-xl p-5">
            <h2 className="text-lg font-semibold text-blue-300">
              Reliability
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Multi-layer evaluation, regression gates, and continuous monitoring
              before and after deployment for critical behaviors.
            </p>
          </div>
          <div className="bg-white/5 border border-blue-900/40 rounded-xl p-5">
            <h2 className="text-lg font-semibold text-blue-300">
              Transparency
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Structured logging, interpretable control surfaces, and enforced
              explanation channels for high-impact decisions.
            </p>
          </div>
          <div className="bg-white/5 border border-blue-900/40 rounded-xl p-5">
            <h2 className="text-lg font-semibold text-blue-300">
              Containment
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Domain, tool, and action constraints by default, with hardened
              sandbox environments and rapid rollback paths.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-300">
            Operational Safety Model
          </h2>
          <p className="mt-2 text-slate-300 max-w-3xl">
            Every deployment follows a staged pipeline modeled on aerospace and
            launch operations.
          </p>
          <ol className="mt-4 space-y-3 text-sm text-slate-300 list-decimal list-inside">
            <li>Adversarial simulation across red-team and synthetic scenarios.</li>
            <li>Constrained rollout with strict monitoring and abort conditions.</li>
            <li>Continuous policy updates based on real-world feedback signals.</li>
            <li>Guaranteed intervention hooks for shutdown and behavior overrides.</li>
          </ol>
          <div className="mt-6 rounded-xl border border-blue-900/40 bg-slate-900/40 p-4 text-xs text-slate-400">
            [Placeholder: Safety architecture diagram — control stack, monitors, and
            override channels.]
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-300">
            Safety Programs & Partnerships
          </h2>
          <p className="mt-2 text-slate-300 max-w-3xl">
            We collaborate with external reviewers, domain experts, and
            institutional partners to stress-test systems in realistic conditions.
            Security, misuse resistance, and policy alignment are integral
            to every engagement.
          </p>
        </section>

        <section className="mt-16 mb-4">
          <h2 className="text-xl font-semibold text-blue-300">
            Work With Our Safety Team
          </h2>
          <p className="mt-2 text-slate-300 max-w-3xl">
            To discuss audits, evaluations, or formal partnerships, reach out
            through the contact channel referenced on the homepage. Selected
            partners gain access to deeper technical documentation and reports.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

