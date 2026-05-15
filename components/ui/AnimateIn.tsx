'use client'

import { type ReactNode, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// ── AnimateIn ─────────────────────────────────────────────────────────
// Fade + slide (+ subtle scale) entrance triggered by scroll viewport.
interface AnimateInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'none'
}

export function AnimateIn({ children, className, delay = 0, direction = 'up' }: AnimateInProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 32 : 0,
      x: direction === 'left' ? -32 : 0,
      scale: direction === 'none' ? 1 : 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

// ── StaggerContainer ──────────────────────────────────────────────────
// Triggers stagger cascade when container enters viewport.
interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerContainer({ children, className, staggerDelay = 0.1 }: StaggerContainerProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  )
}

// ── StaggerItem ───────────────────────────────────────────────────────
// Individual card / item inside StaggerContainer — slide up + scale reveal.
export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 36, scale: 0.97 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

// ── RevealImage ───────────────────────────────────────────────────────
// Clip-path curtain wipe from bottom — for featured images and hero shots.
// Pass the image container's className directly so rounded corners are preserved.
export function RevealImage({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ clipPath: 'inset(0 0 100% 0)' }}
      animate={inView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
      transition={{ duration: 0.9, delay, ease: [0.76, 0, 0.24, 1] }}
    >
      {children}
    </motion.div>
  )
}
