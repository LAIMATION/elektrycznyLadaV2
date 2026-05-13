import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { MobileTabBar } from '@/components/layout/MobileTabBar'

export const metadata: Metadata = {
  title: {
    default: 'elektrycznyŁada – Instalacje Elektryczne i Smart Home Białystok',
    template: '%s | elektrycznyŁada',
  },
  description:
    'Profesjonalne instalacje elektryczne, automatyka budynkowa i systemy Smart Home w Białymstoku i na Podlasiu. Precyzja, estetyka i bezpieczeństwo na najwyższym poziomie.',
  keywords: [
    'elektryk Białystok',
    'instalacje elektryczne Białystok',
    'smart home Białystok',
    'automatyka budynkowa Podlasie',
    'elektrycznyŁada',
    'szafy sterownicze Białystok',
    'elektryk Podlasie',
  ],
  authors: [{ name: 'elektrycznyŁada' }],
  creator: 'elektrycznyŁada',
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    title: 'elektrycznyŁada – Instalacje Elektryczne i Smart Home Białystok',
    description:
      'Profesjonalne instalacje elektryczne, automatyka budynkowa i systemy Smart Home w Białymstoku.',
    siteName: 'elektrycznyŁada',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pb-20 md:pb-0">{children}</main>
          <Footer />
          <MobileTabBar />
        </ThemeProvider>
      </body>
    </html>
  )
}
