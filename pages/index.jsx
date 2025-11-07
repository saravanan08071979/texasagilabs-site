
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
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

{/* ======================== AGI SYSTEMS SECTION ======================== */}
<section id="vehicles" className="mt-20 relative">
  {/* Sparse engineering grid overlay */}
  <div
    className="absolute inset-0 pointer-events-none 
               bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] 
               border-t border-b border-blue-800/40"
  />

  <h2 className="relative text-3xl font-semibold tracking-tight text-blue-300">
    AGI Systems
  </h2>

  <div className="relative mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        name: 'ALPHA',
        model: 'A1',
        mission: 'Safe Deployment AGI',
        spec: 'Operational autonomy with enforced safety envelopes',
        status: 'S-2',
      },
      {
        name: 'OMEGA',
        model: 'B1',
        mission: 'Robust Cognition',
        spec: 'General reasoning under uncertainty & stress',
        status: 'R-1',
      },
      {
        name: 'NOVA',
        model: 'C1',
        mission: 'Scalable Agent Integration',
        spec: 'Distributed coordination & adaptive scaling',
        status: 'I-3',
      },
    ].map(system => (
      <div
        key={system.name}
        className="relative bg-blue-900/10 border border-blue-700/40 
                   rounded-xl p-6 backdrop-blur-[1px] flex flex-col gap-3"
      >
        <div className="text-xl font-bold tracking-wide text-blue-300">
          {system.name}
        </div>
        <div className="text-xs text-blue-400/80 uppercase tracking-widest">
          Model {system.model}
        </div>
        <div className="text-sm text-slate-300">{system.mission}</div>
        <div className="text-xs text-slate-400">{system.spec}</div>
        <div className="mt-auto pt-3 text-blue-400 font-mono text-sm">
          Cert Level: {system.status}
        </div>
      </div>
    ))}
  </div>
</section>
{/* ======================== END AGI SYSTEMS SECTION ======================== */}

      </main>
      <Footer/>
    </div>
  )
}
