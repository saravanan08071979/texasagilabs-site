// pages/contact.jsx
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// TODO: Replace with your real Formspree endpoint, e.g.:
// const FORMSPREE_ENDPOINT = "https://formspree.io/f/yourFormId";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvgvenno;

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setError('Something went wrong. Please try again or email us directly.');
      }
    } catch {
      setStatus('error');
      setError('Network error. Please try again or email us directly.');
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Hero */}
        <section>
          <p className="text-xs font-mono tracking-[0.2em] text-blue-500 uppercase">
            Contact
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">
            Get in Touch with Texas AGI Labs
          </h1>
          <p className="mt-4 text-slate-600 max-w-3xl">
            Use this channel for partnership inquiries, research collaboration,
            press, or early access to ALPHA, OMEGA, and NOVA. Messages are
            routed to the appropriate internal team.
          </p>
        </section>

        {/* Category hints */}
        <section className="mt-10 grid gap-4 md:grid-cols-3 text-sm">
          <div className="bg-white border border-blue-100 rounded-xl p-4">
            <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
              General
            </h2>
            <p className="mt-2 text-slate-600">
              Questions about Texas AGI Labs, roadmap, or speaking.
            </p>
          </div>
          <div className="bg-white border border-blue-100 rounded-xl p-4">
            <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
              Research & Partnerships
            </h2>
            <p className="mt-2 text-slate-600">
              Safety evaluations, joint benchmarks, or integration pilots.
            </p>
          </div>
          <div className="bg-white border border-blue-100 rounded-xl p-4">
            <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
              Careers
            </h2>
            <p className="mt-2 text-slate-600">
              Early hiring interest for technical and operations roles.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="mt-12 mb-10">
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-4"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">
                  Name
                </label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/70"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/70"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">
                Topic
              </label>
              <select
                name="topic"
                className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/70"
                defaultValue="General"
              >
                <option>General</option>
                <option>Press / Media</option>
                <option>Research & Partnerships</option>
                <option>Careers</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-500/70"
                placeholder="Provide as much relevant detail as you can. For security-sensitive topics, do not include secrets here."
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-5 py-2.5 rounded-md bg-blue-500 text-white text-sm font-semibold disabled:opacity-60"
              >
                {status === 'submitting' ? 'Sending…' : 'Send Message'}
              </button>
              <p className="text-[10px] text-slate-500">
                This form uses Formspree. Replace the endpoint in the code with
                your organization&apos;s Formspree URL.
              </p>
            </div>

            {status === 'success' && (
              <p className="text-xs text-green-600">
                Message sent. We&apos;ll get back to you if it matches our current focus.
              </p>
            )}
            {status === 'error' && (
              <p className="text-xs text-red-600">
                {error || 'There was an issue sending your message.'}
              </p>
            )}
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

