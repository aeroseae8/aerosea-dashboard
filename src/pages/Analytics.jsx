import WasteComposition from '../components/WasteComposition'
import DensityChart from '../components/DensityChart'
import Validation from '../components/Validation'
import { PageTitle } from '../components/ui'

export default function Analytics() {
  return (
    <div className="space-y-5">
      <PageTitle title="Waste Analysis" sub="Composition, density trend and model validation — all values are demonstration data." />
      <div className="grid gap-5 xl:grid-cols-2"><WasteComposition /><DensityChart /></div>
      <Validation />
    </div>
  )
}
