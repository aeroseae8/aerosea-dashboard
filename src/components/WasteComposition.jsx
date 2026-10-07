import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Card } from './ui'
import { WASTE_CLASSES } from '../data/sampleData'

export default function WasteComposition() {
  return (
    <Card title="Waste Composition by Type" tag="Sample Data">
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <div className="h-44 w-44 shrink-0">
          <ResponsiveContainer>
            <PieChart>
              <Pie data={WASTE_CLASSES} dataKey="value" innerRadius={48} outerRadius={78} paddingAngle={2} stroke="none">
                {WASTE_CLASSES.map(c => <Cell key={c.name} fill={c.color} />)}
              </Pie>
              <Tooltip formatter={(v) => `${v}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full space-y-3">
          {WASTE_CLASSES.map(c => (
            <div key={c.name}>
              <div className="mb-1 flex justify-between text-sm"><span className="font-medium">{c.name}</span><span className="font-bold">{c.value}%</span></div>
              <div className="h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full" style={{ width: `${c.value}%`, background: c.color }} /></div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
