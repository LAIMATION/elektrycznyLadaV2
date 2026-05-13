import type { Metadata } from 'next'
import { RealizacjeClient } from './RealizacjeClient'

export const metadata: Metadata = {
  title: 'Realizacje – Portfolio Instalacji Elektrycznych Białystok',
  description:
    'Portfolio ukończonych projektów elektrycznych i automatyki budynkowej w Białymstoku i na Podlasiu. Smart Home, instalacje przemysłowe, automatyka KNX.',
}

export default function RealizacjePage() {
  return <RealizacjeClient />
}
