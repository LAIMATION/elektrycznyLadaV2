'use client'

import { Children, isValidElement, useEffect, useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
}

// ── Helpers ───────────────────────────────────────────────────────────

// Each word is wrapped in a white-space:nowrap inline-block container so the
// browser can only break lines between words, never mid-word.
function splitToChars(children: ReactNode): ReactNode[] {
  const out: ReactNode[] = []
  let k = 0

  function processText(text: string) {
    const tokens = text.split(/(\s+)/)
    for (const token of tokens) {
      if (!token) continue
      if (/^\s/.test(token)) {
        // Raw string → React text node → natural word-break opportunity
        out.push(token)
      } else {
        const chars = Array.from(token).map((ch) => (
          <span
            key={k++}
            className="gsap-char"
            style={{
              display: 'inline-block',
              willChange: 'transform, opacity, filter',
              backfaceVisibility: 'hidden',
            }}
          >
            {ch}
          </span>
        ))
        out.push(
          <span key={`w${k++}`} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {chars}
          </span>
        )
      }
    }
  }

  function process(node: ReactNode) {
    if (typeof node === 'string') {
      processText(node)
    } else if (isValidElement(node)) {
      out.push(node) // preserves <br /> and other JSX elements
    } else if (Array.isArray(node)) {
      node.forEach(process)
    }
  }

  Children.forEach(children, process)
  return out
}

function splitToWords(text: string): ReactNode[] {
  return text.split(' ').flatMap((word, i, arr) => {
    const el = (
      <span
        key={i}
        className="gsap-word"
        style={{ display: 'inline-block', willChange: 'transform, opacity' }}
      >
        {word}
      </span>
    )
    return i < arr.length - 1 ? [el, ' '] : [el]
  })
}

// ── GSAPChars ─────────────────────────────────────────────────────────
// Char-by-char blur + rise — hero h1 display headlines
export function GSAPChars({
  children,
  as: Tag = 'h1',
  className,
  delay = 0,
}: {
  children: ReactNode
  as?: string
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll<HTMLElement>('.gsap-char'), {
        opacity: 0,
        y: 48,
        filter: 'blur(10px)',
        stagger: 0.025,
        duration: 0.85,
        ease: 'power4.out',
        delay,
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
          once: true,
        },
      })
    }, el)
    return () => ctx.revert()
  }, [delay])

  const El = Tag as React.ElementType
  return (
    <El ref={ref as React.Ref<HTMLElement>} className={className}>
      {splitToChars(children)}
    </El>
  )
}

// ── GSAPWords ─────────────────────────────────────────────────────────
// Word-by-word stagger — section titles and CTA headings
export function GSAPWords({
  text,
  as: Tag = 'h2',
  className,
  delay = 0,
}: {
  text: string
  as?: string
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll<HTMLElement>('.gsap-word'), {
        opacity: 0,
        y: 22,
        stagger: 0.08,
        duration: 0.65,
        ease: 'power3.out',
        delay,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      })
    }, el)
    return () => ctx.revert()
  }, [delay])

  const El = Tag as React.ElementType
  return (
    <El ref={ref as React.Ref<HTMLElement>} className={className}>
      {splitToWords(text)}
    </El>
  )
}

// ── GSAPTypewriter ────────────────────────────────────────────────────
// Typewriter reveal — mono technical labels ("SECTION_01 // ...")
export function GSAPTypewriter({
  text,
  className,
  delay = 0,
  speed = 0.042,
}: {
  text: string
  className?: string
  delay?: number
  speed?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.set(el, { text: { value: '', delimiter: '' } })
      gsap.to(el, {
        text: { value: text, delimiter: '' },
        duration: text.length * speed,
        ease: 'none',
        delay,
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
          once: true,
        },
      })
    }, el)
    return () => ctx.revert()
  }, [text, delay, speed])

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  )
}
