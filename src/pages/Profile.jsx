import { Card, PageTitle } from '../components/ui'

export default function Profile({ user, onLogout }) {
  const Row = ({ k, v }) => <div className="border-b border-slate-100 py-3"><p className="text-xs text-slate-500">{k}</p><p className="font-semibold">{v}</p></div>
  return (
    <div>
      <PageTitle title="Profile" />
      <Card title="Account" tag="Demo Account" className="max-w-2xl">
        <div className="mb-4 flex items-center gap-4">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-deep text-2xl font-bold text-white">{user.initials}</div>
          <div><p className="text-xl font-bold text-navy">{user.name}</p><p className="text-slate-500">{user.org}</p><p className="text-sm text-slate-500">{user.title}</p></div>
        </div>
        <Row k="Email" v={user.email} /><Row k="Organization" v={user.org} /><Row k="Role" v={user.role} />
        <Row k="Account Status" v="● Active" />
        <div className="mt-5 flex gap-3">
          <button onClick={() => alert('Demo only: profile editing is not available.')} className="rounded-xl border border-slate-300 px-5 py-2 text-sm font-medium hover:bg-slate-50">Edit Profile</button>
          <button onClick={onLogout} className="rounded-xl bg-red-600 px-5 py-2 text-sm font-bold text-white hover:bg-red-700">Sign Out</button>
        </div>
      </Card>
    </div>
  )
}
