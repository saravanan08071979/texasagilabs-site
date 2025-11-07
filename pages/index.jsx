
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="min-h-screen text-white antialiased bg-gradient-to-b from-black via-slate-900 to-slate-800">
      <Header/>
      <main className="max-w-7xl mx-auto px-6 py-16">
        <section className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-white/6 p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">Building Trusted AGI Systems for the World</h1>
              <p className="mt-4 text-slate-300 max-w-xl">Researching and aligning AGI systems to unlock progress while ensuring long‑term safety and global benefit.</p>
              <div className="mt-6 flex gap-3">
                <a href="/models/alpha" className="px-5 py-3 bg-white text-black rounded-md font-semibold">Explore Models</a>
                <a href="/about" className="px-5 py-3 border border-white/10 rounded-md text-sm">Research Portfolio</a>
              </div>
              <div className="mt-6 text-slate-400 text-sm">Live countdown: <span className="font-mono">T‑72:04:21</span></div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-tr from-slate-700/40 to-transparent">
                <div className="flex h-full items-center justify-center text-slate-500 select-none">[AI Neural Network Visualization]</div>
              </div>
            </div>
          </div>
        </section>

        <section id="vehicles" className="mt-16">
          <h2 className="text-2xl font-semibold">AI Systems</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/models/alpha" className="block"><div className="bg-white/3 rounded-lg p-6 border border-white/6"><div className="text-xl font-semibold">ALPHA</div><div className="text-slate-300 mt-2">Safe deployment AGI.</div></div></a>
            <a href="/models/omega" className="block"><div className="bg-white/3 rounded-lg p-6 border border-white/6"><div className="text-xl font-semibold">OMEGA</div><div className="text-slate-300 mt-2">Robust cognition.</div></div></a>
            <a href="/models/nova" className="block"><div className="bg-white/3 rounded-lg p-6 border border-white/6"><div className="text-xl font-semibold">NOVA</div><div className="text-slate-300 mt-2">Scalable agent integration.</div></div></a>
          </div>
        </section>

      </main>
      <Footer/>
    </div>
  )
}
