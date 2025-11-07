// pages/about.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-slate-950 text-white antialiased">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-16">
        <section>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Engineering Superintelligence That Works
          </h1>
          <p className="mt-4 text-slate-300 max-w-3xl">
            Texas AGI Labs is an independent research and engineering group
            focused on building artificial general intelligence systems that
            operate reliably in high-stakes, real-world environments.
          </p>
          <p className="mt-3 text-slate-400 max-w-3xl">
            Our mandate is simple: unlock AGI-scale capability while preserving
            strict control, auditability, and predictable behavior at every layer
            of the stack.
          </p>
        </section>

        <section className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h2 className="text-lg font-semibold text-blue-300">
              Mission
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Deliver AGI that can be trusted with critical infrastructure,
              defense-adjacent systems, finance, healthcare, and
              autonomy—without sacrificing safety constraints.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h2 className="text-lg font-semibold text-blue-300">
              Engineering Standard
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              We operate with aerospace-grade reliability expectations:
              redundancy, verification, rehearsal, and controlled rollout are
              default—not extras.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h2 className="text-lg font-semibold text-blue-300">
              Texas Advantage
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Combining frontier-scale compute access, applied research talent,
              and a build-first culture rooted in real-world deployment.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-300">
            Leadership (Preview)
          </h2>
          <p className="mt-2 text-slate-400 max-w-3xl">
            Public leadership profiles will be introduced in coordination with
            launch partners. Current executive and research leadership includes
            veterans of large-scale ML systems, safety-critical software,
            aerospace, and defense-grade reliability engineering.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {['Chief Architect', 'Head of Safety Systems', 'Director of Research'].map((role, i) => (
              <div
                key={role}
                className="bg-white/3 border border-white/10 rounded-xl p-4 flex flex-col gap-2"
              >
                <div className="h-10 w-10 rounded-full bg-slate-700/70" />
                <div className="text-sm text-slate-400">Placeholder</div>
                <div className="text-md font-semibold text-white">{role}</div>
                <p className="text-xs text-slate-400">
                  Profile to be disclosed with formal launch.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-300">
            Collaborate With Texas AGI Labs
          </h2>
          <p className="mt-2 text-slate-300 max-w-3xl">
            We work with selected partners on high-assurance autonomy,
            evaluation frameworks, and red-teaming of advanced systems.
            For inquiries, use the contact channel on the homepage.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

