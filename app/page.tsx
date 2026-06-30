import type { Metadata } from 'next'
import { HomeClient } from './HomeClient'

export const metadata: Metadata = {
  title: 'Instalacje Elektryczne i Smart Home Białystok',
  description:
    'elektrycznyŁada – profesjonalne instalacje elektryczne, automatyka budynkowa i Smart Home w Białymstoku. Precyzja inżynierska w każdym detalu.',
}

export default function HomePage() {
  return <HomeClient />
}
