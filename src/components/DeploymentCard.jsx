import { Users, AlertTriangle } from 'lucide-react'
import { Card, PriorityBadge } from './ui'
import { SEGMENT, DENSITY } from '../data/sampleData'

export default function DeploymentCard({ personnel = 3 }) {
  return (
    <Card title="Cleanup Deployment Recommendation" tag="Sample Recommendation">
      <div className="grid gap-4 sm:grid-cols-3">
        <div><p className="text-xs text-slate-500">Survey Segment</p><p className="font-semibold">{SEGMENT}</p></div>
        <div><p className="text-xs text-slate-500">Estimated Waste Density</p><p className="font-semibold">{DENSITY.value} {DENSITY.unit}</p></div>
        <div><p className="text-xs text-slate-500">Priority</p><PriorityBadge level="High" /></div>
      </div>
      <div className="mt-4 flex items-center gap-4 rounded-xl bg-slate-50 p-4">
        <div className="grid h-14 w-14 place-items-center rounded-xl bg-deep text-white"><Users size={26} /></div>
        <div><p className="text-xs text-slate-500">Recommended Personnel (demonstration result)</p>
          <p className="text-3xl font-extrabold text-navy">{personnel}</p></div>
      </div>
      <p className="mt-3 flex gap-2 text-xs text-slate-500">
        <AlertTriangle size={14} className="mt-0.5 shrink-0 text-amber-600" />
        Cleanup personnel deployment may be recommended based on the system's defined criteria. Final deployment criteria are not yet finalized.
      </p>
    </Card>
  )
}
