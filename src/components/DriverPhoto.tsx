import { UserRound } from 'lucide-react'

interface Props { photo?: string; name?: string }

export function DriverPhoto({ photo, name }: Props) {
  if (photo) return <img className="h-24 w-24 rounded-2xl object-cover ring-4 ring-white shadow-sm" src={photo} alt={`Foto de ${name ?? 'conductor'}`} />
  return <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-slate-800 text-amber-300 ring-4 ring-white shadow-sm" aria-label="Avatar del conductor"><UserRound size={42} aria-hidden="true" /></div>
}
