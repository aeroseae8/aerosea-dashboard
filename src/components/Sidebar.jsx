import { LayoutDashboard, Radar, ScanSearch, PieChart, Users, FileText, Settings, LogOut, X, Waves } from 'lucide-react'

export const NAV = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'monitoring', label: 'Live Monitoring', icon: Radar },
  { id: 'detections', label: 'Detection Results', icon: ScanSearch },
  { id: 'analytics', label: 'Waste Analysis', icon: PieChart },
  { id: 'deployment', label: 'Deployment', icon: Users },
  { id: 'reports', label: 'Reports', icon: FileText },
  { id: 'settings', label: 'Settings', icon: Settings },
]

export default function Sidebar({ user, page, setPage, onLogout, open, setOpen }) {
  const go = (id) => { setPage(id); setOpen(false) }
  return (
    <>
      {open && <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={() => setOpen(false)} />}
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-navy text-slate-200 transition-transform lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between px-5 py-5">
          <div className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-teal-500/20 text-teal-300"><Waves size={20} /></div>
            <div><p className="text-lg font-extrabold leading-none tracking-wide text-white">AEROSEÆ</p>
              <p className="text-[10px] uppercase tracking-widest text-teal-300/80">Decision Support</p></div>
          </div>
          <button className="lg:hidden" onClick={() => setOpen(false)}><X size={18} /></button>
        </div>
        <nav className="flex-1 space-y-1 px-3">
          {NAV.filter(n => user.nav.includes(n.id)).map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => go(id)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${page === id ? 'bg-teal-500/20 text-white' : 'text-slate-300 hover:bg-white/5'}`}>
              <Icon size={18} /> {label}
            </button>
          ))}
        </nav>
        <div className="m-3 rounded-2xl bg-white/5 p-3">
          <button onClick={() => go('profile')} className="flex w-full items-center gap-3 text-left">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-teal-500 text-sm font-bold text-white">{user.initials}</div>
            <div className="min-w-0"><p className="truncate text-sm font-semibold text-white">{user.name}</p>
              <p className="truncate text-xs text-slate-400">{user.org}</p>
              <p className="truncate text-xs text-slate-400">{user.role}</p></div>
          </button>
          <button onClick={onLogout} className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 py-2 text-xs font-semibold hover:bg-white/10">
            <LogOut size={14} /> Sign Out
          </button>
        </div>
      </aside>
    </>
  )
}
