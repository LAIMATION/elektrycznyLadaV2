import type { Metadata } from 'next'
import { WiedzaClient } from './WiedzaClient'

export const metadata: Metadata = {
  title: 'Wiedza – Blog i Poradniki Elektryczne Białystok',
  description:
    'Ekspercka wiedza o instalacjach elektrycznych, automatyce budynkowej i Smart Home. Poradniki, kalkulatory i schematy dla profesjonalistów.',
}

export default function WiedzaPage() {
  return <WiedzaClient />
}
