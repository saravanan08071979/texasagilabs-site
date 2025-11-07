// components/Header.jsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/6">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold">
            TA
          </div>
          <div>
            <div className="font-semibold text-white">Texas AGI Labs</div>
            <div className="text-xs text-slate-400">
              Engineering Superintelligence That Works
            </div>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 text-sm text-slate-300">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/safety">Safety</Link>
          <Link href="/models/alpha">ALPHA</Link>
          <Link href="/models/omega">OMEGA</Link>
          <Link href="/models/nova">NOVA</Link>
          <Link href="/careers">Careers</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#"
             className="px-4 py-2 bg-white/6 rounded-md text-sm">
            Request Access
          </a>
          <a href="#"
             className="px-4 py-2 border border-white/6 rounded-md text-sm">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

