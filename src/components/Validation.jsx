import { Card } from './ui'
import { METRICS, CONFUSION } from '../data/sampleData'

export default function Validation({ matrix = true }) {
  const max = Math.max(...CONFUSION.matrix.flat())
  return (
    <Card title="System Validation / Model Performance" tag="Sample Validation Results">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
        {METRICS.map(m => (
          <div key={m.label} className="rounded-xl bg-slate-50 p-3 text-center">
            <p className="text-xl font-extrabold text-navy">{m.value}</p>
            <p className="text-xs text-slate-500">{m.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-slate-500">Demonstration values only — not final measured results. Final validation will use manually annotated ground-truth data.</p>
      {matrix && (
        <div className="mt-5 overflow-x-auto">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">Confusion Matrix (sample)</p>
          <table className="text-center text-sm">
            <thead><tr><th className="p-1 text-[10px] text-slate-400">Actual ↓ / Pred →</th>{CONFUSION.labels.map(l => <th key={l} className="p-1 px-3 text-xs">{l}</th>)}</tr></thead>
            <tbody>
              {CONFUSION.matrix.map((row, i) => (
                <tr key={i}><td className="p-1 pr-3 text-left text-xs font-semibold">{CONFUSION.labels[i]}</td>
                  {row.map((v, j) => (
                    <td key={j} className="h-10 w-16 rounded" style={{ background: `rgba(15,118,110,${0.08 + (v / max) * (i === j ? 0.85 : 0.5)})`, color: v / max > 0.6 && i === j ? '#fff' : '#0f172a' }}>{v}</td>
                  ))}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  )
}
