import { Phone } from 'lucide-react'
import type { Mototaxista } from '../types/mototaxista'
import { phoneWithCountryCode } from '../utils/whatsapp'
import { LocationButton } from './LocationButton'
import { ShareLocationButton } from './ShareLocationButton'
import { WhatsAppButton } from './WhatsAppButton'

export function ContactSection({ driver }: { driver: Mototaxista }) {
  const callTarget = phoneWithCountryCode(driver.telefono)
  return <section aria-labelledby="contact-title" className="rounded-3xl bg-slate-900 px-5 py-6 text-white shadow-xl shadow-slate-900/15"><p className="text-sm font-bold uppercase tracking-[.16em] text-amber-300">Contacto rápido</p><h2 id="contact-title" className="mt-1 text-2xl font-extrabold">¿Necesitas movilidad?</h2><p className="mt-2 max-w-lg text-sm leading-6 text-slate-300">Escríbeme por WhatsApp o revisa mi ubicación para coordinar tu recojo.</p><div className="mt-5"><WhatsAppButton phone={driver.telefono} message={driver.whatsapp?.mensaje} /></div><div className="mt-3 flex flex-wrap gap-3"><ShareLocationButton phone={driver.telefono} message={driver.whatsapp?.mensaje} /><LocationButton location={driver.ubicacion} /> <LocationButton location={driver.ubicacion} directions />{callTarget && <a href={`tel:+${callTarget}`} className="inline-flex min-h-13 flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-slate-700 px-3 text-sm font-bold text-white transition hover:border-amber-300 hover:text-amber-200 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-amber-300"><Phone size={19} aria-hidden="true" />Llamar</a>}</div>{driver.ubicacion?.referencia && <p className="mt-4 text-xs text-slate-400">Punto habitual: {driver.ubicacion.referencia}. No es ubicación en tiempo real.</p>}</section>
}
