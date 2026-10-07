import { useState } from 'react'
import LiveMonitoring from '../components/LiveMonitoring'
import Pipeline from '../components/Pipeline'
import { Card, PageTitle } from '../components/ui'

export default function Monitoring() {
  const [boxes, setBoxes] = useState(true)
  return (
    <div>
      <PageTitle title="Live Monitoring" sub="Simulated interface showing how the future aerial view will appear. No real UAV video is connected." />
      <div className="grid gap-5 xl:grid-cols-3">
        <Card title="Live Aerial Monitoring" tag="Simulation — Live Feed Under Development" className="xl:col-span-2">
          <LiveMonitoring showBoxes={boxes} tall />
        </Card>
        <div className="space-y-5">
          <Card title="Display Controls">
            <label className="flex items-center justify-between text-sm">YOLOv8 detection overlay (sample)
              <input type="checkbox" checked={boxes} onChange={e => setBoxes(e.target.checked)} className="h-4 w-4 accent-teal-700" />
            </label>
          </Card>
          <Card title="Planned Acquisition Path">
            <ol className="space-y-2 text-sm text-slate-600">
              <li>1. FIMI Mini 3 captures aerial video.</li>
              <li>2. FIMI Navi Mini shows the live view on the smartphone.</li>
              <li>3. The smartphone display is screen-cast to the laptop.</li>
              <li>4. Python/OpenCV passes frames to YOLOv8.</li>
              <li>5. Results appear in the AeroSeæ Dashboard.</li>
            </ol>
            <p className="mt-3 rounded-lg bg-amber-50 p-2 text-xs text-amber-800">Not yet implemented in this prototype.</p>
          </Card>
        </div>
      </div>
      <div className="mt-5"><Pipeline /></div>
    </div>
  )
}
