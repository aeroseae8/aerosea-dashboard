import { Menu } from 'lucide-react'

export default function Header({ user, onMenu, onProfile }) {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur md:px-8">
      <div className="flex items-center gap-3">
        <button className="rounded-lg p-2 hover:bg-slate-100 lg:hidden" onClick={onMenu}><Menu size={20} /></button>
        <div>
          <h1 className="text-base font-extrabold text-navy md:text-lg">AeroSeæ</h1>
          <p className="hidden text-xs text-slate-500 sm:block">UAV-Based Coastal Waste Monitoring System</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="hidden items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 md:inline-flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> SYSTEM ACTIVE — DEMO DATA
        </span>
        <button onClick={onProfile} className="flex items-center gap-2">
          <div className="hidden text-right sm:block"><p className="text-sm font-semibold leading-tight">{user.name}</p>
            <p className="text-xs text-slate-500">{user.org}</p></div>
          <div className="grid h-9 w-9 place-items-center rounded-full bg-deep text-xs font-bold text-white">{user.initials}</div>
        </button>
      </div>
    </header>
  )
}
