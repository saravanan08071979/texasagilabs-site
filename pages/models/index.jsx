// pages/models/index.jsx
import Link from "next/link";

export default function ModelsIndex() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-extrabold tracking-tight">Models</h1>
      <p className="mt-2 text-slate-300">Explore our AGI system families.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm">
        <Link href="/models/alpha" className="block rounded-xl border border-white/10 bg-white/5 p-5 hover:border-violet-400/60 transition">
          <div className="text-xs font-mono text-violet-300/80 uppercase">Model A1</div>
          <div className="text-lg font-semibold text-violet-200">ALPHA</div>
          <p className="mt-2 text-slate-300">Safe deployment AGI.</p>
        </Link>
        <Link href="/models/omega" className="block rounded-xl border border-white/10 bg-white/5 p-5 hover:border-violet-400/60 transition">
          <div className="text-xs font-mono text-violet-300/80 uppercase">Model B1</div>
          <div className="text-lg font-semibold text-violet-200">OMEGA</div>
          <p className="mt-2 text-slate-300">Robust cognition.</p>
        </Link>
        <Link href="/models/nova" className="block rounded-xl border border-white/10 bg-white/5 p-5 hover:border-violet-400/60 transition">
          <div className="text-xs font-mono text-violet-300/80 uppercase">Model C1</div>
          <div className="text-lg font-semibold text-violet-200">NOVA</div>
          <p className="mt-2 text-slate-300">Multi-agent integration.</p>
        </Link>
      </div>
    </main>
  );
}
