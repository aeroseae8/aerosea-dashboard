import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Monitoring from './pages/Monitoring'
import Detections from './pages/Detections'
import Analytics from './pages/Analytics'
import Deployment from './pages/Deployment'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import Profile from './pages/Profile'

const PAGES = { dashboard: Dashboard, monitoring: Monitoring, detections: Detections, analytics: Analytics,
  deployment: Deployment, reports: Reports, settings: Settings, profile: Profile }
const KEY = 'aerosea_demo_user'

export default function App() {
  const [user, setUser] = useState(() => { try { return JSON.parse(localStorage.getItem(KEY)) } catch { return null } })
  const [page, setPage] = useState('dashboard')
  const [open, setOpen] = useState(false)

  const login = (u) => {
    const { password, ...safe } = u
    try { localStorage.setItem(KEY, JSON.stringify(safe)) } catch {}
    setUser(safe); setPage('dashboard')
  }
  const logout = () => { try { localStorage.removeItem(KEY) } catch {}; setUser(null); setOpen(false) }

  if (!user) return <Login onLogin={login} />
  const Page = PAGES[user.nav.includes(page) || page === 'profile' ? page : 'dashboard']

  return (
    <div className="min-h-screen">
      <Sidebar user={user} page={page} setPage={setPage} onLogout={logout} open={open} setOpen={setOpen} />
      <div className="lg:pl-64">
        <Header user={user} onMenu={() => setOpen(true)} onProfile={() => setPage('profile')} />
        <main className="mx-auto max-w-7xl p-4 md:p-8">
          <Page user={user} setPage={setPage} onLogout={logout} />
          <footer className="mt-10 border-t border-slate-200 pt-4 text-center text-xs text-slate-400">
            AeroSeæ — UAV Remote Sensing System Using YOLOv8 for Detection and Classification of Coastal Waste in Manila Bay • Presentation prototype • All data shown is sample / demonstration data
          </footer>
        </main>
      </div>
    </div>
  )
}
