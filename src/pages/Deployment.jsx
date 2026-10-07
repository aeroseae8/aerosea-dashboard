import DeploymentCard from '../components/DeploymentCard'
import { Card, PageTitle, PriorityBadge } from '../components/ui'
import { SEGMENTS } from '../data/sampleData'

export default function Deployment() {
  return (
    <div className="space-y-5">
      <PageTitle title="Cleanup Deployment" sub="Decision support for cleanup personnel. Final criteria linking density to personnel are not yet finalized." />
      <DeploymentCard />
      <Card title="Segment Overview" tag="Demonstration Result">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead className="border-b-2 border-slate-200 text-xs text-slate-500"><tr>
              {['Survey Segment', 'Est. Density', 'Recommended Personnel', 'Priority'].map(h => <th key={h} className="py-2 font-semibold">{h}</th>)}</tr></thead>
            <tbody>{SEGMENTS.map(s => (
              <tr key={s.name} className="border-b border-slate-100">
                <td className="py-3 font-medium">{s.name}</td><td>{s.density.toFixed(2)} kg/m³</td>
                <td className="font-bold text-navy">{s.personnel}</td><td><PriorityBadge level={s.priority} /></td></tr>))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
