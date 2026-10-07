import { useState } from 'react'
import { FileDown, CheckCircle2 } from 'lucide-react'
import { Card, PageTitle } from '../components/ui'
import { SEGMENT, DENSITY, WASTE_CLASSES, METRICS } from '../data/sampleData'

export default function Reports({ user }) {
  const [done, setDone] = useState(false)
  const date = new Date().toLocaleDateString('en-PH', { dateStyle: 'long' })

  const generate = () => {
    const text = [
      'AeroSeæ Monitoring Report — SAMPLE / DEMONSTRATION ONLY',
      `Prepared for: ${user.name} (${user.org})`, `Date: ${date}`, `Survey Segment: ${SEGMENT}`, '',
      'Waste Composition (sample): ' + WASTE_CLASSES.map(c => `${c.name} ${c.value}%`).join(', '),
      `Estimated Density (sample): ${DENSITY.value} ${DENSITY.unit} — ${DENSITY.status}`,
      'Detection Summary: 100 sample objects', 'Recommended Personnel (demonstration): 3', '',
      'System Performance (sample): ' + METRICS.map(m => `${m.label} ${m.value}`).join(', '), '',
      'These values are not actual field results.',
    ].join('\n')
    const a = document.createElement('a')
    a.href = URL.createObjectURL(new Blob([text], { type: 'text/plain' }))
    a.download = 'AeroSea_Sample_Report.txt'; a.click()
    setDone(true); setTimeout(() => setDone(false), 3500)
  }

  const Row = ({ k, v }) => <div className="flex justify-between border-b border-slate-100 py-2 text-sm"><span className="text-slate-500">{k}</span><span className="text-right font-semibold">{v}</span></div>
  return (
    <div>
      <PageTitle title="Reports" sub="Generate a sample monitoring report for presentation purposes." />
      <Card title="AeroSeæ Monitoring Report" tag="Sample Report"
        action={<button onClick={generate} className="flex items-center gap-2 rounded-xl bg-deep px-4 py-2 text-sm font-bold text-white hover:bg-navy"><FileDown size={16} /> Generate Sample Report</button>}>
        <Row k="Survey Segment" v={SEGMENT} /><Row k="Date" v={date} />
        <Row k="Waste Composition" v={WASTE_CLASSES.map(c => `${c.name} ${c.value}%`).join(' • ')} />
        <Row k="Estimated Density" v={`${DENSITY.value} ${DENSITY.unit}`} />
        <Row k="Detection Summary" v="100 sample objects" />
        <Row k="Recommended Personnel" v="3 (demonstration)" />
        <Row k="System Performance" v={`mAP@0.5 0.89 • IoU 0.81 • 142 ms (sample)`} />
      </Card>
      {done && <div className="fixed bottom-6 right-6 flex items-center gap-2 rounded-xl bg-navy px-4 py-3 text-sm text-white shadow-lg"><CheckCircle2 size={16} className="text-emerald-400" /> Sample report generated (demo)</div>}
    </div>
  )
}
