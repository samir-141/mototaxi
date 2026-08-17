import { Bike, ChevronDown } from 'lucide-react'
import data from './data/mototaxista.json'
import { ContactSection } from './components/ContactSection'
import { DriverCard } from './components/DriverCard'
import { Footer } from './components/Footer'
import { ServicesSection } from './components/ServicesSection'
import { WhatsAppButton } from './components/WhatsAppButton'
import type { Mototaxista } from './types/mototaxista'

const driver = data as Mototaxista

function App() {
  return <main className="min-h-screen overflow-x-hidden bg-[#f8fafc] text-slate-900"><div className="relative isolate overflow-hidden bg-slate-900"><div className="absolute -right-28 -top-20 -z-10 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" /><div className="mx-auto max-w-3xl px-5 pb-10 pt-6 sm:px-8"><div className="flex items-center gap-2 text-sm font-bold text-amber-300"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400 text-slate-900"><Bike size={21} /></span>Mototaxi de confianza</div><div className="mt-9 max-w-xl"><p className="font-semibold text-amber-300">Hola, soy {driver.nombre || 'tu conductor'}.</p><h1 className="mt-2 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl">¿Necesitas mototaxi?</h1><p className="mt-4 max-w-md text-base leading-7 text-slate-300">Estoy disponible para recogerte, realizar encargos y traslados en mi zona.</p><div className="mt-6 max-w-sm"><WhatsAppButton phone={driver.telefono} message={driver.whatsapp?.mensaje} /></div></div></div><ChevronDown className="absolute bottom-3 left-1/2 text-white/40" aria-hidden="true" /></div><div className="mx-auto -mt-4 max-w-3xl space-y-9 px-5 sm:px-8"><DriverCard driver={driver} /><ServicesSection services={driver.servicios} /><ContactSection driver={driver} /><Footer /></div><div className="fixed bottom-5 right-5 z-10 sm:hidden"><WhatsAppButton phone={driver.telefono} message={driver.whatsapp?.mensaje} compact /></div></main>
}

export default App
