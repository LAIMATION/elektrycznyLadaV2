'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export interface FilterItem {
  key: string
  label: string
}

interface FilterBarProps {
  filters: FilterItem[]
  onChange: (active: string) => void
  defaultActive?: string
}

export function FilterBar({ filters, onChange, defaultActive = 'wszystko' }: FilterBarProps) {
  const [active, setActive] = useState(defaultActive)
  const [open, setOpen] = useState(false)

  const handleClick = (key: string) => {
    setActive(key)
    onChange(key)
    setOpen(false)
  }

  const activeLabel = filters.find((f) => f.key === active)?.label ?? active

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="mono text-mono-xs uppercase tracking-widest text-on-variant">Filtruj:</span>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-iskra bg-iskra/10 text-on-bg mono text-mono-xs uppercase tracking-widest transition-all duration-200 hover:bg-iskra/20"
      >
        <span>{activeLabel}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center"
        >
          <ChevronDown size={13} className="text-iskra" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="flex items-center gap-2 flex-wrap"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filters
              .filter((f) => f.key !== active)
              .map((filter, i) => (
                <motion.button
                  key={filter.key}
                  type="button"
                  onClick={() => handleClick(filter.key)}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: i * 0.05, ease: [0.4, 0, 0, 1], duration: 0.25 },
                    },
                  }}
                  className="px-4 py-2 rounded-full border border-outline-variant text-on-variant mono text-mono-xs uppercase tracking-widest transition-all duration-200 hover:border-iskra hover:text-iskra hover:bg-iskra/5"
                >
                  {filter.label}
                </motion.button>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
