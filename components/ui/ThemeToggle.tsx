'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <button className="w-9 h-9 flex items-center justify-center rounded-full border border-outline-variant opacity-0">
        <span className="sr-only">Przełącz motyw</span>
      </button>
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Włącz tryb jasny' : 'Włącz tryb ciemny'}
      className="w-9 h-9 flex items-center justify-center rounded-full border border-outline-variant hover:border-iskra hover:text-iskra transition-all duration-180 text-on-variant"
    >
      {isDark ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />}
    </button>
  )
}
