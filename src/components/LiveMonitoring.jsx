import { Plane, Gauge, MapPin, Construction } from 'lucide-react'
import { CLASS_COLOR, SEGMENT } from '../data/sampleData'

const BOXES = [
  { type: 'Plastic', conf: 0.91, x: 22, y: 62, w: 12, h: 10 },
  { type: 'Cans', conf: 0.86, x: 55, y: 74, w: 9, h: 9 },
  { type: 'Glass', conf: 0.79, x: 72, y: 58, w: 8, h: 8 },
  { type: 'Rubber', conf: 0.83, x: 38, y: 82, w: 11, h: 8 },
]
const DOTS = [[30,68],[45,74],[60,66],[85,80],[100,62],[120,72],[50,88],[110,86]]

export default function LiveMonitoring({ showBoxes = true, tall = false }) {
  return (
    <div>
      <div className={`relative overflow-hidden rounded-xl bg-slate-900 ${tall ? 'aspect-[16/10]' : 'aspect-video'}`}>
        <svg viewBox="0 0 160 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0b3a52" /><stop offset="1" stopColor="#0e6b78" /></linearGradient>
            <linearGradient id="sand" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#c9b98a" /><stop offset="1" stopColor="#a39366" /></linearGradient>
          </defs>
          <rect width="160" height="100" fill="url(#sea)" />
          <g className="drift" opacity=".25" stroke="#fff" strokeWidth=".4" fill="none">
            <path d="M0 18 Q20 14 40 18 T80 18 T120 18 T160 18" /><path d="M0 32 Q20 28 40 32 T80 32 T120 32 T160 32" />
          </g>
          <path d="M0 50 Q40 44 80 52 T160 48 V100 H0Z" fill="url(#sand)" />
          <path d="M0 50 Q40 44 80 52 T160 48" stroke="#e8f4f2" strokeWidth="1.2" fill="none" opacity=".7" />
          {DOTS.map(([x, y], i) => <circle key={i} cx={x} cy={y} r=".8" fill="#7a6c45" opacity=".6" />)}
        </svg>
        <div className="scan-line absolute left-0 h-px w-full bg-teal-300/40" />
        {showBoxes && BOXES.map(b => (
          <div key={b.type} className="absolute rounded border-2" style={{ left: `${b.x}%`, top: `${b.y}%`, width: `${b.w}%`, height: `${b.h}%`, borderColor: CLASS_COLOR[b.type] }}>
            <span className="absolute -top-5 left-[-2px] whitespace-nowrap rounded px-1.5 py-0.5 text-[10px] font-bold text-white" style={{ background: CLASS_COLOR[b.type] }}>
              {b.type === 'Cans' ? 'Can' : b.type} {b.conf.toFixed(2)}
            </span>
          </div>
        ))}
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="rounded-md bg-amber-400 px-2 py-1 text-[11px] font-extrabold tracking-wider text-slate-900">SIMULATION</span>
          <span className="rounded-md bg-black/50 px-2 py-1 text-[11px] font-semibold text-white">SAMPLE DATA</span>
        </div>
        <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-md bg-black/50 px-2 py-1 text-[11px] font-semibold text-amber-200">
          <Construction size={12} /> LIVE FEED UNDER DEVELOPMENT
        </div>
        <div className="absolute bottom-3 left-3 rounded-md bg-black/50 px-2 py-1 text-[10px] text-slate-200">
          Sample aerial view — illustrates future YOLOv8 overlays
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
        <span className="flex items-center gap-1.5"><Plane size={14} /> FIMI Mini 3</span>
        <span className="flex items-center gap-1.5"><Gauge size={14} /> Altitude: 45 m (sample)</span>
        <span className="flex items-center gap-1.5"><MapPin size={14} /> {SEGMENT}</span>
      </div>
    </div>
  )
}
