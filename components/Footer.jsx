export default function Footer(){ return (
  <footer className="mt-24 border-t border-white/6 py-8 text-slate-400">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <div className="font-semibold text-white">Texas AGI Labs</div>
        <div className="text-sm text-slate-400">© {new Date().getFullYear()} Texas AGI Labs. All rights reserved.</div>
      </div>
      <div className="flex gap-4 text-sm">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Press</a>
      </div>
    </div>
  </footer>
)}
