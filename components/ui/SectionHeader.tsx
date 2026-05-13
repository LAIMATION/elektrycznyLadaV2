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
      <p className="mono text-mono-xs uppercase text-primary tracking-widest mb-3">{label}</p>
      <h2 className="font-inter font-extrabold text-headline-lg text-on-bg leading-tight tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-body-lg text-on-variant max-w-2xl">{subtitle}</p>
      )}
    </div>
  )
}
