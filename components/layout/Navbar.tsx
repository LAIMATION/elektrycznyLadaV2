'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Zap } from 'lucide-react'

const links = [
  { href: '/', label: 'Strona Główna' },
  { href: '/oferta', label: 'Oferta' },
  { href: '/realizacje', label: 'Realizacje' },
  { href: '/wiedza', label: 'Wiedza' },
  { href: '/kontakt', label: 'Kontakt' },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-outline-variant bg-bg/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-7 h-7 bg-iskra rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-iskra-hover transition-colors duration-180">
            <Zap size={14} strokeWidth={2.5} className="text-on-iskra" />
          </span>
          <span className="font-inter font-extrabold text-[17px] tracking-tight text-on-bg leading-none">
            elektrycznyŁada
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link ${pathname === href ? 'active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/kontakt?wycena=1"
            className="btn-primary hidden sm:inline-flex text-[12px] px-5 py-2.5"
          >
            Darmowa Wycena
          </Link>
        </div>
      </div>
    </header>
  )
}
