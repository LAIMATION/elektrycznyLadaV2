'use client'

import { GSAPWords } from '@/components/ui/GSAPText'

interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({ title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <div className={className}>
      <GSAPWords
        text={title}
        as="h2"
        className="font-inter font-extrabold text-headline-lg text-on-bg leading-tight tracking-tight mb-4"
      />
      {subtitle && (
        <p className="text-body-lg text-on-variant max-w-2xl">{subtitle}</p>
      )}
    </div>
  )
}
