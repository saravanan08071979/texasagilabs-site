// pages/careers.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Careers() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero */}
        <section>
          <p className="text-xs font-mono tracking-[0.2em] text-blue-500 uppercase">
            Careers
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Work on the Frontier of General Intelligence
          </h1>
          <p className="mt-4 text-slate-600 max-w-3xl">
            Texas AGI Labs is assembling a small, elite team of engineers,
            researchers, and operators to design, build, and deploy
            superintelligence-grade systems with real-world safety guarantees.
          </p>
          <p className="mt-2 text-slate-500 max-w-3xl">
            We move with the urgency of a startup and the discipline of
            aerospace — mission-first, detail-obsessed, and uncompromising on
            reliability.
          </p>
        </section>

        {/* Culture & Principles */}
        <section className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              High Ownership
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              You own systems end-to-end: design, implementation, evaluation,
              and deployment into real environments.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Mission Alignment
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Everyone here is focused on one problem: make AGI that works, and
              works safely, at planetary scale.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Low Bureaucracy
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Tight core team, minimal process, direct access to decision-makers
              and infrastructure.
            </p>
          </div>
        </section>

        {/* Example Roles (placeholders) */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-900">
            Example Roles
          </h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            Formal openings will be published with our first public milestones.
            Below are indicative roles that reflect the type of people we work
            with.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Senior Research Engineer, AGI Systems
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Own large-scale training, evaluation, and deployment of ALPHA,
                OMEGA, or NOVA components. Strong background in deep learning,
                systems, and safety-aware design.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Location: Flexible · Status: Future opening
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Safety & Alignment Engineer
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Design red-team frameworks, oversight policies, and automated
                monitoring for real-world deployments.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Location: Flexible · Status: Future opening
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Infrastructure & Reliability Lead
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Build and operate the secure, high-availability infrastructure
                backing training, inference, and evaluation.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Operations & Partnerships
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Work directly with founders and research leads to structure
                engagements with high-stakes partners.
              </p>
            </div>
          </div>
        </section>

        {/* Apply CTA */}
        <section className="mt-16 mb-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Interested in Joining Early?
          </h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            If you&apos;re serious about building reliable AGI systems and have a
            track record in ML, security, distributed systems, or safety-critical
            engineering, we want to hear from you.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Until our applicant portal is live, reach out via the contact
            channel on the homepage with a short background and how you&apos;d
            contribute.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

