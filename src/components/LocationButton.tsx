import { MapPin, Navigation } from 'lucide-react'
import type { Mototaxista } from '../types/mototaxista'
import { mapsUrl } from '../utils/maps'

export function LocationButton({ location, directions = false }: { location?: Mototaxista['ubicacion']; directions?: boolean }) {
  const href = mapsUrl(location, directions)
  if (!href) return null
  const Icon = directions ? Navigation : MapPin
  return <a href={href} target="_blank" rel="noreferrer" className="inline-flex min-h-13 flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-3 text-sm font-bold text-slate-800 transition hover:border-amber-400 hover:bg-amber-50 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-amber-500"><Icon size={19} aria-hidden="true" />{directions ? 'Cómo llegar' : 'Ver ubicación'}</a>
}
