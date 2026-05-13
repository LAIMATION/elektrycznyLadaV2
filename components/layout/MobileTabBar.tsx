'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Briefcase, FolderOpen, Phone } from 'lucide-react'

const tabs = [
  { href: '/', label: 'Dom', icon: Home },
  { href: '/oferta', label: 'Oferta', icon: Briefcase },
  { href: '/realizacje', label: 'Realizacje', icon: FolderOpen },
  { href: '/kontakt', label: 'Kontakt', icon: Phone },
]

export function MobileTabBar() {
  const pathname = usePathname()

  return (
    <nav
      className="mobile-tab-bar fixed bottom-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-md border-t border-outline-variant md:hidden"
      aria-label="Nawigacja mobilna"
    >
      <ul className="flex items-center">
        {tabs.map(({ href, label, icon: Icon }) => {
          const active = pathname === href
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                className={`flex flex-col items-center gap-1 py-3 transition-colors duration-180 ${
                  active ? 'text-iskra' : 'text-on-variant'
                }`}
              >
                <span className="relative">
                  <Icon size={20} strokeWidth={active ? 2.5 : 1.75} />
                  {active && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-iskra rounded-full" />
                  )}
                </span>
                <span
                  className="mono text-[10px] uppercase tracking-widest leading-none"
                  style={{ letterSpacing: '0.07em' }}
                >
                  {label}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
