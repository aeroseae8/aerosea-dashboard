import { useState } from 'react'
import { Card, PageTitle } from '../components/ui'

const Toggle = ({ label, defaultOn = true, locked }) => {
  const [on, setOn] = useState(defaultOn)
  return (
    <label className="flex items-center justify-between border-b border-slate-100 py-3 text-sm">
      {label}
      <button type="button" disabled={locked} onClick={() => setOn(!on)} className={`h-6 w-11 rounded-full p-0.5 transition ${on ? 'bg-teal-600' : 'bg-slate-300'} ${locked ? 'opacity-60' : ''}`}>
        <span className={`block h-5 w-5 rounded-full bg-white transition ${on ? 'translate-x-5' : ''}`} />
      </button>
    </label>
  )
}

export default function Settings({ onLogout, setPage }) {
  return (
    <div className="space-y-5">
      <PageTitle title="Settings" sub="Visual / demo controls for the prototype." />
      <div className="grid gap-5 lg:grid-cols-3">
        <Card title="System Preferences">
          <Toggle label="Alert notifications" /><Toggle label="Compact dashboard" defaultOn={false} /><Toggle label="Dark display mode (coming soon)" defaultOn={false} locked />
        </Card>
        <Card title="Monitoring Settings">
          <label className="block py-2 text-sm">Survey segment
            <select className="mt-1 w-full rounded-lg border border-slate-300 p-2"><option>Manila Bay — Segment A</option><option>Manila Bay — Segment B</option><option>Manila Bay — Segment C</option></select></label>
          <Toggle label="Show detection overlays" /><Toggle label="Sample / demo mode" locked />
        </Card>
        <Card title="Account Settings">
          <div className="space-y-2 pt-1">
            <button onClick={() => setPage('profile')} className="w-full rounded-lg border border-slate-300 py-2 text-sm font-medium hover:bg-slate-50">View Profile</button>
            <button onClick={() => alert('Demo only: password change is not available.')} className="w-full rounded-lg border border-slate-300 py-2 text-sm font-medium hover:bg-slate-50">Change Password</button>
            <button onClick={onLogout} className="w-full rounded-lg bg-red-600 py-2 text-sm font-bold text-white hover:bg-red-700">Sign Out</button>
          </div>
        </Card>
      </div>
    </div>
  )
}
