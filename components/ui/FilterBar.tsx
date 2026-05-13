'use client'

import { useState } from 'react'

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

  const handleClick = (key: string) => {
    setActive(key)
    onChange(key)
  }

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filtruj zawartość">
      {filters.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => handleClick(key)}
          className={`filter-chip rounded-full ${active === key ? 'active' : ''}`}
          aria-pressed={active === key}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
