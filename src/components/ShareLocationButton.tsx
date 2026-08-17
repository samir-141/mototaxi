import { LocateFixed, LoaderCircle } from 'lucide-react'
import { useState } from 'react'
import { whatsappUrl } from '../utils/whatsapp'

interface Props { phone?: string; message?: string }

export function ShareLocationButton({ phone, message }: Props) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const destination = whatsappUrl(phone, message)

  if (!destination || !navigator.geolocation) return null

  const shareLocation = () => {
    setStatus('loading')
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const mapsLink = `https://www.google.com/maps?q=${coords.latitude},${coords.longitude}`
        const text = `${message ?? 'Hola, quisiera solicitar un recojo.'}\n\nMi ubicación actual: ${mapsLink}`
        const href = whatsappUrl(phone, text)
        if (href) window.open(href, '_blank', 'noopener,noreferrer')
        setStatus('idle')
      },
      () => setStatus('error'),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 },
    )
  }

  return <div className="flex-1"><button type="button" onClick={shareLocation} disabled={status === 'loading'} className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-2xl border-2 border-amber-300 bg-amber-300 px-3 text-sm font-extrabold text-slate-900 transition hover:bg-amber-200 disabled:cursor-wait disabled:opacity-70 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white" aria-label="Enviar mi ubicación al conductor">{status === 'loading' ? <LoaderCircle size={19} className="animate-spin" aria-hidden="true" /> : <LocateFixed size={19} aria-hidden="true" />}{status === 'loading' ? 'Buscando ubicación…' : 'Enviar mi ubicación'}</button>{status === 'error' && <p role="alert" className="mt-2 text-xs text-amber-200">No pudimos obtener tu ubicación. Activa el permiso e inténtalo otra vez.</p>}</div>
}
