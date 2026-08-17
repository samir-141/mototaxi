import type { Servicio } from '../types/mototaxista'
import { ServiceCard } from './ServiceCard'

export function ServicesSection({ services = [] }: { services?: Servicio[] }) {
  if (!services.length) return null
  return <section aria-labelledby="services-title"><div className="mb-4"><p className="text-sm font-bold uppercase tracking-[.16em] text-amber-700">Servicios</p><h2 id="services-title" className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900">¿Qué servicios realizo?</h2></div><div className="grid gap-3 sm:grid-cols-3">{services.map((service) => <ServiceCard key={service.id} service={service} />)}</div></section>
}
