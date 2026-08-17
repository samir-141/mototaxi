import { CarFront, Hash } from 'lucide-react'
import type { Mototaxista } from '../types/mototaxista'

export function VehicleInfo({ vehicle }: { vehicle?: Mototaxista['vehiculo'] }) {
  if (!vehicle) return null
  const details = [vehicle.color, vehicle.modelo, vehicle.numeroInterno ? `N.º ${vehicle.numeroInterno}` : undefined].filter(Boolean)
  return <div className="rounded-xl border border-slate-200 bg-white/75 p-3"><div className="flex items-center gap-2 text-[11px] font-bold tracking-[.16em] text-slate-500"><CarFront size={15} /> PLACA</div><strong className="mt-1 block text-xl tracking-wide text-slate-900">{vehicle.placa || 'Por confirmar'}</strong>{details.length > 0 && <p className="mt-1 flex items-center gap-1 text-sm text-slate-600"><Hash size={13} /> {details.join(' · ')}</p>}</div>
}
