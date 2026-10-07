import { useState } from 'react'
import { Waves, Lock, Mail, FlaskConical } from 'lucide-react'
import { USERS } from '../data/sampleData'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // Prototype-only auth. Replace with supabase.auth.signInWithPassword() later.
  const submit = (e) => {
    e.preventDefault()
    const u = USERS.find(x => x.email === email.trim().toLowerCase() && x.password === password)
    if (!u) return setError('Invalid demo credentials. Select a demo account below.')
    onLogin(u)
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-navy via-deep to-teal-700 p-12 text-white lg:flex">
        <div className="flex items-center gap-3"><Waves size={28} className="text-teal-300" /><span className="text-xl font-extrabold tracking-wide">AEROSEÆ</span></div>
        <div>
          <h2 className="text-4xl font-extrabold leading-tight">Coastal Waste Monitoring &amp; Cleanup Decision Support</h2>
          <p className="mt-4 max-w-md text-teal-100">UAV aerial video → YOLOv8 detection &amp; classification → waste density → cleanup personnel recommendation, for selected portions of the Manila Bay shoreline.</p>
          <div className="mt-6 flex gap-2 text-xs font-semibold">
            {['Plastic', 'Cans', 'Rubber', 'Glass'].map(c => <span key={c} className="rounded-full bg-white/10 px-3 py-1">{c}</span>)}
          </div>
        </div>
        <p className="text-xs text-teal-200/70">Capstone research prototype • Presentation build • Sample data only</p>
      </div>

      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-navy">AeroSeæ</h1>
            <p className="text-slate-500">UAV-Based Coastal Waste Monitoring System</p>
          </div>
          <form onSubmit={submit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <label className="block text-sm font-medium">Email
              <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-300 px-3 focus-within:border-teal-600">
                <Mail size={16} className="text-slate-400" />
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="name@aerosea.example" className="w-full bg-transparent py-2.5 outline-none" />
              </div>
            </label>
            <label className="block text-sm font-medium">Password
              <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-300 px-3 focus-within:border-teal-600">
                <Lock size={16} className="text-slate-400" />
                <input type="password" required value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="w-full bg-transparent py-2.5 outline-none" />
              </div>
            </label>
            <div className="flex justify-between text-xs text-slate-500">
              <label className="flex items-center gap-1.5"><input type="checkbox" defaultChecked /> Remember me</label>
              <button type="button" className="text-teal-700 hover:underline" onClick={() => alert('Demo only: password reset is not available in the prototype.')}>Forgot password?</button>
            </div>
            {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">{error}</p>}
            <button className="w-full rounded-xl bg-deep py-3 text-sm font-bold text-white transition hover:bg-navy">Sign In</button>
          </form>

          <div className="mt-5 rounded-2xl border border-dashed border-amber-300 bg-amber-50 p-4">
            <p className="mb-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800"><FlaskConical size={13} /> Demo accounts — click to fill (password: demo1234)</p>
            <div className="space-y-2">
              {USERS.map(u => (
                <button key={u.id} onClick={() => { setEmail(u.email); setPassword(u.password); setError('') }}
                  className="flex w-full items-center gap-3 rounded-xl bg-white p-2.5 text-left shadow-sm transition hover:ring-2 hover:ring-teal-500">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-deep text-xs font-bold text-white">{u.initials}</span>
                  <span className="text-sm"><b>{u.name}</b><br /><span className="text-xs text-slate-500">{u.org} • {u.role}</span></span>
                  <span className="ml-auto rounded bg-amber-200 px-1.5 py-0.5 text-[9px] font-bold text-amber-900">DEMO</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
