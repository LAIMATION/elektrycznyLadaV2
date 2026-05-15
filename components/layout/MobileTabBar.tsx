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
                className={`flex flex-col items-center py-2.5 transition-colors duration-250 ${
                  active ? 'text-iskra' : 'text-on-variant'
                }`}
              >
                <span
                  className={`flex flex-col items-center gap-1 px-3.5 py-1.5 rounded-full border transition-all duration-250 ${
                    active
                      ? 'border-iskra shadow-[0px_4px_14px_rgba(245,200,66,0.32)]'
                      : 'border-transparent'
                  }`}
                >
                  <Icon size={20} strokeWidth={active ? 2.5 : 1.75} />
                  <span
                    className="mono text-[10px] uppercase leading-none"
                    style={{ letterSpacing: '0.07em' }}
                  >
                    {label}
                  </span>
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
