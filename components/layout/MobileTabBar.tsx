'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, Zap } from 'lucide-react'

const NAV_LINKS = [
  { href: '/', label: 'Strona Główna' },
  { href: '/oferta', label: 'Oferta' },
  { href: '/realizacje', label: 'Realizacje' },
  { href: '/wiedza', label: 'Wiedza' },
  { href: '/kontakt', label: 'Kontakt' },
]

export function MobileTabBar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close on route change
  useEffect(() => { setOpen(false) }, [pathname])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* ── Backdrop ──────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Menu panel ────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            className="fixed left-0 right-0 bottom-[3.75rem] z-50 md:hidden overflow-hidden"
            style={{ background: 'rgba(var(--bg-rgb, 255 255 255) / 0.97)', backdropFilter: 'blur(24px)' }}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* inner bg fallback for CSS var */}
            <div className="bg-bg/97 backdrop-blur-2xl border-t border-outline-variant px-6 pt-8 pb-6">

              {/* label */}
              <p className="mono text-[10px] uppercase tracking-widest text-on-variant mb-6">
                NAV_LINKS // 0{NAV_LINKS.length}
              </p>

              {/* links */}
              <nav>
                <ul className="flex flex-col">
                  {NAV_LINKS.map(({ href, label }, i) => {
                    const active = pathname === href
                    return (
                      <motion.li
                        key={href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.055 + 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Link
                          href={href}
                          onClick={() => setOpen(false)}
                          className={`flex items-center justify-between py-4 border-b border-outline-variant/40 group transition-colors duration-200 ${
                            active ? 'text-iskra' : 'text-on-bg hover:text-iskra'
                          }`}
                        >
                          <span className="font-inter font-bold text-[22px] leading-tight tracking-tight">
                            {label}
                          </span>
                          <ArrowRight
                            size={17}
                            className={`transition-all duration-200 group-hover:translate-x-1 ${
                              active ? 'text-iskra' : 'text-on-variant'
                            }`}
                          />
                        </Link>
                      </motion.li>
                    )
                  })}
                </ul>
              </nav>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.055 + 0.1, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="mt-7"
              >
                <Link
                  href="/kontakt?wycena=1"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  <Zap size={14} />
                  Darmowa Wycena
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Bottom bar ────────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 h-[3.75rem] bg-bg/90 backdrop-blur-md border-t border-outline-variant md:hidden">
        <div className="flex items-center justify-between px-5 h-full">

          {/* Brand */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 group"
            aria-label="Strona główna"
          >
            <span className="w-6 h-6 bg-iskra rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-iskra/80">
              <Zap size={11} strokeWidth={2.5} className="text-on-iskra" />
            </span>
            <span className="font-inter font-extrabold text-[14px] tracking-tight text-on-bg leading-none">
              elektrycznyŁada
            </span>
          </Link>

          {/* Menu toggle pill */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={open}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border mono text-[11px] uppercase tracking-widest transition-all duration-250 ${
              open
                ? 'border-iskra text-iskra bg-iskra/10 shadow-[0px_4px_18px_rgba(245,200,66,0.35)]'
                : 'border-outline-variant text-on-variant bg-transparent hover:border-iskra/50 hover:text-on-bg'
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex items-center leading-none"
                >
                  <X size={14} strokeWidth={2} />
                </motion.span>
              ) : (
                <motion.span
                  key="m"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex items-center leading-none"
                >
                  <Menu size={14} strokeWidth={2} />
                </motion.span>
              )}
            </AnimatePresence>
            <span>{open ? 'Zamknij' : 'Menu'}</span>
          </button>
        </div>
      </div>
    </>
  )
}
