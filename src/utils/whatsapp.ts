export const phoneWithCountryCode = (phone?: string) => {
  const digits = phone?.replace(/\D/g, '') ?? ''
  if (!digits) return ''
  return digits.startsWith('51') ? digits : `51${digits}`
}

export const whatsappUrl = (phone?: string, message?: string) => {
  const target = phoneWithCountryCode(phone)
  return target ? `https://wa.me/${target}?text=${encodeURIComponent(message ?? '')}` : undefined
}
