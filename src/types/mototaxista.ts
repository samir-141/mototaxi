export type Estado = 'disponible' | 'no disponible'

export interface Servicio {
  id: string
  titulo: string
  descripcion: string
  icono?: string
}

export interface Mototaxista {
  nombre?: string
  foto?: string
  telefono?: string
  vehiculo?: { placa?: string; color?: string; modelo?: string; numeroInterno?: string }
  zonaTrabajo?: string
  horario?: { inicio?: string; fin?: string }
  estado?: Estado
  ubicacion?: { latitud?: number; longitud?: number; referencia?: string }
  whatsapp?: { mensaje?: string }
  servicios?: Servicio[]
}
