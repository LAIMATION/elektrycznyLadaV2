import type { Metadata } from 'next'
import { Suspense } from 'react'
import { KontaktClient } from './KontaktClient'

export const metadata: Metadata = {
  title: 'Kontakt – Bezpłatna Wycena Instalacji Elektrycznej Białystok',
  description:
    'Skontaktuj się z elektrycznyŁada – bezpłatna wycena instalacji elektrycznej, Smart Home i automatyki budynkowej w Białymstoku i na Podlasiu.',
}

export default function KontaktPage() {
  return (
    <Suspense>
      <KontaktClient />
    </Suspense>
  )
}
