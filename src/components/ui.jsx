import { FlaskConical } from 'lucide-react'

export function SampleTag({ text = 'Sample Data' }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-800">
      <FlaskConical size={10} /> {text}
    </span>
  )
}

export function Card({ title, tag, action, children, className = '' }) {
  return (
    <section className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}>
      {(title || tag) && (
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">{title}</h3>
          <div className="flex items-center gap-2">{tag && <SampleTag text={tag} />}{action}</div>
        </div>
      )}
      {children}
    </section>
  )
}

const P = { High: 'bg-red-100 text-red-700', Medium: 'bg-amber-100 text-amber-700', Low: 'bg-emerald-100 text-emerald-700' }
export const PriorityBadge = ({ level }) => (
  <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${P[level]}`}>{level}</span>
)

export const PageTitle = ({ title, sub }) => (
  <div className="mb-5">
    <h2 className="text-2xl font-bold text-navy">{title}</h2>
    {sub && <p className="text-sm text-slate-500">{sub}</p>}
  </div>
)
