// pages/access.jsx
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_APIKEY = "284f8a2d-3a9d-40d0-a8a7-ec32986df710"; // Access form key

export default function Access() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      access_key: WEB3FORMS_APIKEY,
      name: formData.get('name'),
      email: formData.get('email'),
      organization: formData.get('organization'),
      purpose: formData.get('purpose'),
      models: Array.from(form.querySelectorAll('input[name="models"]:checked')).map(
        (input) => input.value
      ),
    };

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setError(data.message || 'Submission failed.');
      }
    } catch {
      setStatus('error');
      setError('Network error.');
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-slate-800 text-white antialiased">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">Request Early Access</h1>
        <p className="text-slate-300 max-w-3xl mb-10">
          Access to ALPHA, OMEGA, and NOVA is granted selectively to qualified partners and research organizations. 
          Complete the form below to submit your interest. We review applications weekly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-md space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold mb-1">Full Name</label>
              <input
                name="name"
                required
                className="w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email Address</label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@organization.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Organization / Affiliation</label>
            <input
              name="organization"
              required
              className="w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Company, research group, or individual"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Intended Use or Research Purpose</label>
            <textarea
              name="purpose"
              required
              rows={5}
              className="w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe how you plan to use or evaluate the model..."
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Models of Interest</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" name="models" value="ALPHA" className="accent-blue-500" />
                ALPHA (Safe Deployment)
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="models" value="OMEGA" className="accent-blue-500" />
                OMEGA (Robust Cognition)
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="models" value="NOVA" className="accent-blue-500" />
                NOVA (Agent Integration)
              </label>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="px-5 py-2.5 rounded-md bg-blue-500 text-white text-sm font-semibold disabled:opacity-60"
            >
              {status === 'submitting' ? 'Submitting…' : 'Submit Request'}
            </button>
            <p className="text-[10px] text-slate-400">
              Connected to Web3Forms (Access Key Verified)
            </p>
          </div>

          {status === 'success' && (
            <p className="text-green-400 text-sm mt-3">
              ✅ Request submitted successfully! You’ll be contacted after review.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-sm mt-3">
              {error || 'There was an issue submitting your request.'}
            </p>
          )}
        </form>
      </main>
      <Footer />
    </div>
  );
}

