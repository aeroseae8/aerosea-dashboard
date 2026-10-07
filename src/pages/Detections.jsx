import { useState } from 'react'
import DetectionTable from '../components/DetectionTable'
import { PageTitle } from '../components/ui'
import { WASTE_CLASSES } from '../data/sampleData'

export default function Detections() {
  const [f, setF] = useState('All')
  return (
    <div>
      <PageTitle title="Detection Results" sub="Sample YOLOv8 detections for the four official waste classes." />
      <div className="mb-4 flex flex-wrap gap-2">
        {['All', ...WASTE_CLASSES.map(c => c.name)].map(n => (
          <button key={n} onClick={() => setF(n)} className={`rounded-full px-4 py-1.5 text-sm font-medium ${f === n ? 'bg-deep text-white' : 'bg-white text-slate-600 shadow-sm hover:bg-slate-50'}`}>{n}</button>
        ))}
      </div>
      <DetectionTable filter={f} />
    </div>
  )
}
