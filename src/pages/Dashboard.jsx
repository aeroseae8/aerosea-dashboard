import { TriangleAlert, Boxes, Droplets, Users, Map } from 'lucide-react'
import LiveMonitoring from '../components/LiveMonitoring'
import WasteComposition from '../components/WasteComposition'
import DensityChart from '../components/DensityChart'
import DetectionTable from '../components/DetectionTable'
import DeploymentCard from '../components/DeploymentCard'
import Validation from '../components/Validation'
import Pipeline from '../components/Pipeline'
import { Card, SampleTag } from '../components/ui'
import { DENSITY, SEGMENT } from '../data/sampleData'

function Stat({ icon: Icon, label, value, sub, tone = 'text-deep' }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between"><Icon size={18} className={tone} /><SampleTag /></div>
      <p className="mt-3 text-2xl font-extrabold text-navy">{value}</p>
      <p className="text-xs text-slate-500">{label}</p>
      {sub && <p className={`mt-1 text-xs font-semibold ${tone}`}>{sub}</p>}
    </div>
  )
}

export default function Dashboard({ user, setPage }) {
  const isTupad = user.id === 'tupad'
  const pct = Math.min(100, (DENSITY.value / 3) * 100)
  return (
    <div className="space-y-5">
      <div className="rounded-2xl bg-gradient-to-r from-navy to-deep p-6 text-white">
        <p className="text-sm text-teal-200">Welcome, {user.first}</p>
        <h2 className="text-2xl font-extrabold">{user.org} • {user.role}</h2>
        <p className="mt-1 text-sm text-slate-300">Focus: {user.focus}</p>
      </div>

      <div className="flex gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-4">
        <TriangleAlert className="mt-0.5 shrink-0 text-amber-600" size={20} />
        <div>
          <p className="text-sm font-bold text-amber-900">Sample Alert — High Waste Density Detected <span className="ml-2 rounded bg-amber-200 px-1.5 py-0.5 text-[10px]">SAMPLE / SIMULATION</span></p>
          <p className="text-sm text-amber-800">Cleanup personnel deployment may be recommended based on the system's defined criteria.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        <Stat icon={Boxes} label="Total Detected Waste" value="100 Sample Objects" />
        <Stat icon={Droplets} label="Estimated Waste Density" value={`${DENSITY.value} ${DENSITY.unit}`} sub={`Status: ${DENSITY.status}`} tone="text-red-600" />
        <Stat icon={Users} label="Recommended Personnel" value="3" sub="Demonstration result" />
        <Stat icon={Map} label="Survey Segment" value="Segment A" sub="Manila Bay" />
      </div>

      {isTupad && <DeploymentCard />}

      <div className="grid gap-5 xl:grid-cols-3">
        <Card title="Live Aerial Monitoring" tag="Simulation" className="xl:col-span-2"><LiveMonitoring /></Card>
        <Card title="Estimated Waste Density" tag="Sample Data">
          <p className="text-4xl font-extrabold text-navy">{DENSITY.value}<span className="ml-1 text-base font-semibold text-slate-500">{DENSITY.unit}</span></p>
          <span className="mt-2 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700">Status: {DENSITY.status}</span>
          <div className="relative mt-6 h-3 rounded-full bg-gradient-to-r from-emerald-400 via-amber-400 to-red-500">
            <div className="absolute -top-1 h-5 w-1.5 rounded bg-navy" style={{ left: `${pct}%` }} />
            <div className="absolute -top-1 h-5 w-px bg-slate-700" style={{ left: `${(DENSITY.sampleThreshold / 3) * 100}%` }} />
          </div>
          <p className="mt-3 text-xs text-slate-500">Marker line: sample threshold ({DENSITY.sampleThreshold.toFixed(2)} kg/m³) — demonstration criteria only. {SEGMENT}.</p>
        </Card>
      </div>

      <Pipeline />

      <div className="grid gap-5 xl:grid-cols-2"><WasteComposition /><DensityChart /></div>
      {!isTupad && <DeploymentCard />}
      <DetectionTable />
      <Validation matrix={false} />
    </div>
  )
}
