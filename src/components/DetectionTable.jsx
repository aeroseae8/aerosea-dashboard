import { Card, PriorityBadge } from './ui'
import { DETECTIONS, CLASS_COLOR } from '../data/sampleData'

export default function DetectionTable({ filter = 'All' }) {
  const rows = DETECTIONS.filter(d => filter === 'All' || d.type === filter)
  return (
    <Card title="Recent Detections" tag="Sample Data">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b-2 border-slate-200 text-xs text-slate-500">
            <tr>{['Timestamp', 'Survey Segment', 'Type', 'Confidence', 'Estimated Density', 'Priority'].map(h => <th key={h} className="py-2 pr-4 font-semibold">{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map(d => (
              <tr key={d.time} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="py-3 pr-4 font-mono text-xs">{d.time}</td>
                <td className="pr-4">{d.segment}</td>
                <td className="pr-4"><span className="inline-flex items-center gap-1.5 font-medium">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: CLASS_COLOR[d.type] }} />{d.type}</span></td>
                <td className="pr-4">{d.conf.toFixed(2)}</td>
                <td className="pr-4">{d.density.toFixed(2)} kg/m³</td>
                <td><PriorityBadge level={d.priority} /></td>
              </tr>
            ))}
            {!rows.length && <tr><td colSpan={6} className="py-6 text-center text-slate-400">No sample detections for this class.</td></tr>}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
