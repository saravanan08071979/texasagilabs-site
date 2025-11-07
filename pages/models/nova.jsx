// pages/models/nova.jsx
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Nova() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-slate-950 text-white antialiased">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Hero */}
        <section>
          <p className="text-xs font-mono tracking-[0.2em] text-blue-400/70 uppercase">
            Model C1 · Integration-class system
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">
            NOVA — Scalable Agent Integration
          </h1>
          <p className="mt-4 text-slate-300 max-w-3xl">
            NOVA is the integration and orchestration layer for multi-agent AGI
            systems, enabling controlled collaboration, routing, and scaling
            across heterogeneous models and tools.
          </p>
        </section>

        {/* Role */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-300">
            Mission Profile
          </h2>
          <p className="mt-3 text-slate-300 max-w-3xl">
            NOVA is built for organizations running multiple specialized agents:
            planning, perception, control, security, and analytics. It ensures
            these systems coordinate safely, efficiently, and transparently.
          </p>
          <ul className="mt-4 grid gap-3 text-sm text-slate-300 md:grid-cols-2">
            <li>• Policy-aware agent routing and composition</li>
            <li>• Centralized observation and audit of all agent activity</li>
            <li>• Elastic scaling across workloads and environments</li>
            <li>• Isolation between critical and non-critical agent domains</li>
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
                Orchestration Fabric
              </h3>
              <p className="mt-2 text-slate-300">
                Message bus and policy engine for coordinating multiple AGI
                agents with deterministic routing rules.
              </p>
            </div>
            <div className="bg-white/5 border border-blue-900/40 rounded-xl p-4">
              <h3 className="font-semibold text-blue-200 text-sm">
                Safety-Aware Scheduling
              </h3>
              <p className="mt-2 text-slate-300">
                Critical tasks prioritized with stronger guardrails, sandboxed
                zones for experimental behaviors.
              </p>
            </div>
            <div className="bg-white/5 border border-blue-900/40 rounded-xl p-4">
              <h3 className="font-semibold text-blue-200 text-sm">
                Elastic Scale
              </h3>
              <p className="mt-2 text-slate-300">
                Horizontal scaling patterns tuned for low-latency decision loops
                and throughput-heavy analysis workloads.
              </p>
            </div>
          </div>
        </section>

        {/* Safety / Control */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-300">
            Control, Isolation & Telemetry
          </h2>
          <p className="mt-3 text-slate-300 max-w-3xl">
            NOVA centralizes observability and control. Every agent interaction
            is logged, scoped, and enforceable via global policies.
          </p>
          <div className="mt-4 text-xs text-slate-400 border border-blue-900/40 rounded-xl p-4 bg-slate-900/50">
            [Placeholder diagram: hub-and-spoke topology showing NOVA as the
            control hub with multiple AGI agents connected.]
          </div>
        </section>

        {/* Evaluation */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-300">
            Evaluation & Integration Readiness
          </h2>
          <p className="mt-3 text-slate-300 max-w-3xl">
            NOVA is validated through multi-agent stress tests, contention
            scenarios, and failure-injection exercises to ensure stability
            under load and misbehavior.
          </p>
          <ul className="mt-4 text-sm text-slate-300 space-y-1">
            <li>• Observability coverage for all routed calls.</li>
            <li>• Guarded interfaces for external tools and APIs.</li>
            <li>• Tiered trust model across internal vs. third-party agents.</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-12 mb-4">
          <h2 className="text-xl font-semibold text-blue-300">
            Explore NOVA
          </h2>
          <p className="mt-2 text-slate-300 max-w-3xl">
            NOVA is available as a structured integration platform for partners
            operating complex AI stacks that require centralized control.
          </p>
          <div className="mt-4 flex gap-3 text-sm">
            <a className="px-4 py-2 rounded-md bg-white text-black font-semibold" href="#">
              Discuss Integration
            </a>
            <a className="px-4 py-2 rounded-md border border-blue-500/60 text-blue-300" href="/safety">
              Review Safety Guarantees
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

