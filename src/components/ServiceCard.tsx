import { Bike, Package, School, ShoppingBag, Utensils } from 'lucide-react'
import type { Servicio } from '../types/mototaxista'

const icons = { Bike, School, Utensils, Package, ShoppingBag }

export function ServiceCard({ service }: { service: Servicio }) {
  const Icon = icons[service.icono as keyof typeof icons] ?? Bike
  return <article className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700"><Icon size={23} aria-hidden="true" /></div><h3 className="mt-3 font-extrabold text-slate-900">{service.titulo}</h3><p className="mt-1 text-sm leading-5 text-slate-600">{service.descripcion}</p></article>
}
