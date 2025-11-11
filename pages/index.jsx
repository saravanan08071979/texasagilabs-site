import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
   <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-slate-950 text-white antialiased"> 
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-16">        
{/* ======================== HERO SECTION ======================== */}
       <section className="relative rounded-2xl overflow-hidden bg-white/60 border border-slate-200 p-8 lg:p-12 shadow-lg backdrop-blur-md"> 
          <div className="bg-white/50 border border-slate-200 rounded-lg p-6 shadow-sm backdrop-blur-md">
            <div>
              <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">">
                Building Trusted AGI Systems for the World
              </h1>
              <p className="mt-4 text-slate-300 max-w-xl">
                Researching and aligning AGI systems to unlock progress while ensuring
                long-term safety and global benefit.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="/models/alpha"
                  className="px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-semibold transition-colors"
                >
                  Explore Models
                </a>
                <a
                  href="/about"
                  className="px-5 py-3 border border-purple-300 text-purple-700 rounded-md font-medium hover:bg-purple-50 transition-colors"
                >
                  Research Portfolio
                </a>
              </div>
              <div className="mt-6 text-slate-500 text-sm">
                Live countdown: <span className="font-mono">T-72:04:21</span>
              </div>
            </div>

            <div className="relative mt-10">
              <div className="aspect-video rounded-xl overflow-hidden bg-white/60 border border-slate-200 p-6 shadow-sm flex items-center justify-center text-slate-500 select-none backdrop-blur-md">
                [AI Neural Network Visualization]
              </div>
            </div>
          </div>
        </section>

        {/* ======================== AGI SYSTEMS SECTION ======================== */}
        <section id="vehicles" className="mt-20 relative">
          <div
            className="absolute inset-0 pointer-events-none 
              bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] 
              border-t border-b border-blue-800/40"
          />
          <h2 className="relative text-3xl font-semibold tracking-tight text-blue-700">
            AGI Systems
          </h2>

          <div className="relative bg-white/70 border border-slate-200 rounded-lg p-6 shadow-sm backdrop-blur-sm mt-4 grid gap-6">
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
            ].map((system) => (
              <div
                key={system.name}
                className="relative bg-blue-900/10 border border-blue-700/40 
                           rounded-xl p-6 backdrop-blur-[1px] flex flex-col gap-3"
              >
                <div className="text-xl font-bold tracking-wide text-blue-700">
                  {system.name}
                </div>
                <div className="text-xs text-blue-500 uppercase tracking-widest">
                  Model {system.model}
                </div>
                <div className="text-sm text-slate-700">{system.mission}</div>
                <div className="text-xs text-slate-500">{system.spec}</div>
                <div className="mt-auto pt-3 text-blue-600 font-mono text-sm">
                  Cert Level: {system.status}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

