'use client'

import { useEffect, useState } from 'react'

export function StatusIndicator() {
  const [uptime, setUptime] = useState('99.9')
  const [tick, setTick] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const stable = Math.random() > 0.05
      setUptime(stable ? '99.9' : '99.8')
      setTick(t => !t)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-2.5">
      <span className="relative flex h-2.5 w-2.5">
        <span className="status-ring" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-iskra animate-pulse_dot" />
      </span>
      <span
        className={`mono text-mono-xs uppercase tracking-widest transition-opacity duration-300 ${tick ? 'opacity-80' : 'opacity-100'}`}
        style={{ color: 'var(--primary)' }}
      >
        STABILNOŚĆ_SIECI:&nbsp;{uptime}%
      </span>
    </div>
  )
}

export function StatusBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-iskra/30 bg-iskra/5">
      <span className="relative flex h-2 w-2">
        <span className="status-ring scale-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-iskra animate-pulse_dot" />
      </span>
      <span className="mono text-mono-xs uppercase tracking-widest text-iskra">
        OPERACJE_AKTYWNE
      </span>
    </div>
  )
}
