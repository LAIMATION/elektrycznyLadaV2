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

const panelVariants = {
  hidden: { y: 28, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.38,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.055,
      delayChildren: 0.07,
    },
  },
  exit: {
    y: 28,
    opacity: 0,
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
}

export function MobileTabBar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close on route change
  useEffect(() => { setOpen(false) }, [pathname])

  // Lock body scroll
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
            className="fixed inset-0 z-40 md:hidden bg-bg/50"
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
            className="fixed left-0 right-0 bottom-[3.75rem] z-50 md:hidden bg-bg/90 backdrop-blur-2xl border-t border-outline-variant max-h-[calc(100dvh-3.75rem)] overflow-y-auto"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="px-5 pt-7 pb-7">
              {/* Navigation pills */}
              <nav>
                <ul className="flex flex-col gap-2.5">
                  {NAV_LINKS.map(({ href, label }) => {
                    const active = pathname === href
                    return (
                      <motion.li key={href} variants={itemVariants}>
                        <Link
                          href={href}
                          onClick={() => setOpen(false)}
                          className={`group flex items-center justify-between w-full px-5 py-3.5 rounded-full border transition-all duration-200 ${
                            active
                              ? 'border-iskra bg-iskra/10 text-iskra shadow-[0px_4px_14px_rgba(245,200,66,0.25)]'
                              : 'border-outline-variant text-on-bg hover:border-iskra/50 hover:text-iskra'
                          }`}
                        >
                          <span className="font-inter font-bold text-[18px] leading-tight tracking-tight">
                            {label}
                          </span>
                          <ArrowRight
                            size={16}
                            className={`transition-transform duration-200 group-hover:translate-x-1 ${
                              active ? 'text-iskra' : 'text-on-variant'
                            }`}
                          />
                        </Link>
                      </motion.li>
                    )
                  })}
                </ul>
              </nav>

              {/* CTA pill */}
              <motion.div variants={itemVariants} className="mt-5">
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

          {/* CTA pill */}
          <Link
            href="/kontakt?wycena=1"
            onClick={() => setOpen(false)}
            className="flex items-center gap-1.5 px-4 py-2 bg-iskra rounded-full text-on-iskra mono text-[11px] uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Wycena
          </Link>

          {/* Menu toggle pill */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={open}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border mono text-[11px] uppercase tracking-widest transition-all duration-250 ${
              open
                ? 'border-iskra text-iskra bg-iskra/10 shadow-[0px_4px_18px_rgba(245,200,66,0.35)]'
                : 'border-outline-variant text-on-variant hover:border-iskra/50 hover:text-on-bg'
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
