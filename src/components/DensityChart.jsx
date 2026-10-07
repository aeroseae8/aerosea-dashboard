import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'
import { Card } from './ui'
import { TREND, DENSITY } from '../data/sampleData'

export default function DensityChart() {
  return (
    <Card title="Waste Density Trend (kg/m³)" tag="Sample / Demonstration Data">
      <div className="h-60">
        <ResponsiveContainer>
          <LineChart data={TREND} margin={{ top: 8, right: 12, left: -16, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="survey" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} domain={[0, 3]} />
            <Tooltip formatter={(v) => [`${v} kg/m³`, 'Sample density']} />
            <ReferenceLine y={DENSITY.sampleThreshold} stroke="#d97706" strokeDasharray="5 4"
              label={{ value: 'Sample threshold', fontSize: 10, fill: '#b45309', position: 'insideTopLeft' }} />
            <Line type="monotone" dataKey="density" stroke="#0f766e" strokeWidth={2.5} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
