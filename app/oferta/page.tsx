import type { Metadata } from 'next'
import { OfertaClient } from './OfertaClient'

export const metadata: Metadata = {
  title: 'Oferta – Elektryka, Automatyka, Smart Home',
  description:
    'Kompleksowa oferta elektryczna: instalacje mieszkaniowe i przemysłowe, automatyka budynkowa, systemy Smart Home w Białymstoku i na Podlasiu.',
}

export default function OfertaPage() {
  return <OfertaClient />
}
