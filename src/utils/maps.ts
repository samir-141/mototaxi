import type { Mototaxista } from '../types/mototaxista'

export const hasLocation = (location?: Mototaxista['ubicacion']) =>
  typeof location?.latitud === 'number' && typeof location.longitud === 'number'

export const mapsUrl = (location?: Mototaxista['ubicacion'], directions = false) => {
  if (!hasLocation(location)) return undefined
  const point = `${location!.latitud},${location!.longitud}`
  return directions
    ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(point)}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(point)}`
}
