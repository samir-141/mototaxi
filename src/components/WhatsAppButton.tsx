import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../utils/whatsapp'

interface Props { phone?: string; message?: string; compact?: boolean }

export function WhatsAppButton({ phone, message, compact = false }: Props) {
  const href = whatsappUrl(phone, message)
  if (!href) return null
  return <a href={href} target="_blank" rel="noreferrer" aria-label="Pedir mototaxi por WhatsApp" className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 font-bold text-white shadow-lg shadow-emerald-950/15 transition hover:bg-emerald-700 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-emerald-600 ${compact ? 'h-14 w-14' : 'min-h-14 w-full px-5 text-base'}`}><MessageCircle size={compact ? 25 : 22} aria-hidden="true" />{!compact && 'Pedir mototaxi por WhatsApp'}</a>
}
