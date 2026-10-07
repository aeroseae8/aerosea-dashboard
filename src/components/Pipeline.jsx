import { ChevronRight, ChevronDown } from 'lucide-react'
import { Card } from './ui'
import { PIPELINE } from '../data/sampleData'

export default function Pipeline() {
  return (
    <Card title="AeroSeæ System Workflow">
      <div className="flex flex-col items-stretch gap-1 xl:flex-row xl:items-center">
        {PIPELINE.map((s, i) => (
          <div key={s.label} className="flex flex-col items-center gap-1 xl:flex-1 xl:flex-row">
            <div className={`w-full flex-1 rounded-xl border p-3 text-center ${s.kind === 'demo' ? 'border-dashed border-amber-300 bg-amber-50' : 'border-slate-200 bg-slate-50'}`}>
              <p className="text-sm font-bold text-navy">{s.label}</p>
              <p className="text-[11px] leading-tight text-slate-500">{s.note}</p>
              <p className={`mt-1 text-[9px] font-bold uppercase tracking-wider ${s.kind === 'demo' ? 'text-amber-700' : 'text-teal-700'}`}>
                {s.kind === 'demo' ? 'Demo output' : 'System component'}
              </p>
            </div>
            {i < PIPELINE.length - 1 && (<><ChevronRight className="hidden shrink-0 text-slate-300 xl:block" size={18} /><ChevronDown className="text-slate-300 xl:hidden" size={18} /></>)}
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-slate-500">Prototype note: live aerial video is not yet integrated. Detection, density and personnel values shown are simulated.</p>
    </Card>
  )
}
