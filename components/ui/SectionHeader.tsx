'use client'

import { GSAPWords, GSAPTypewriter } from '@/components/ui/GSAPText'

interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({ label, title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <div className={className}>
      <div className="signature-line" />
      <GSAPTypewriter
        text={label}
        className="mono text-mono-xs uppercase text-primary tracking-widest mb-3 block"
      />
      <GSAPWords
        text={title}
        as="h2"
        className="font-inter font-extrabold text-headline-lg text-on-bg leading-tight tracking-tight mb-4"
        delay={0.15}
      />
      {subtitle && (
        <p className="text-body-lg text-on-variant max-w-2xl">{subtitle}</p>
      )}
    </div>
  )
}
