import Link from 'next/link'
import { Zap, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'
import { StatusIndicator } from '@/components/ui/StatusIndicator'

const navLinks = [
  { href: '/oferta', label: 'Oferta' },
  { href: '/realizacje', label: 'Realizacje' },
  { href: '/wiedza', label: 'Wiedza' },
  { href: '/kontakt', label: 'Kontakt' },
]

const docLinks = [
  { href: '/regulamin', label: 'Regulamin' },
  { href: '/polityka-prywatnosci', label: 'Polityka prywatności' },
  { href: '/standardy', label: 'Standardy techniczne' },
]

export function Footer() {
  return (
    <footer className="bg-surface border-t-2 border-iskra pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-5 group w-fit">
              <span className="w-7 h-7 bg-iskra rounded-full flex items-center justify-center flex-shrink-0">
                <Zap size={14} strokeWidth={2.5} className="text-on-iskra" />
              </span>
              <span className="font-inter font-extrabold text-[17px] tracking-tight text-on-bg">
                elektrycznyŁada
              </span>
            </Link>
            <p className="text-body-md text-on-variant max-w-xs leading-relaxed mb-6">
              Specjalistyczne instalacje elektryczne i automatyka budynkowa dla Białegostoku
              i Podlasia. Od projektu po wdrożenie.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/elektryczny.lada/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram elektrycznyŁada"
                className="w-9 h-9 rounded-full border border-outline-variant flex items-center justify-center text-on-variant hover:border-iskra hover:text-iskra transition-all duration-180"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61586262846558"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook elektrycznyŁada"
                className="w-9 h-9 rounded-full border border-outline-variant flex items-center justify-center text-on-variant hover:border-iskra hover:text-iskra transition-all duration-180"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <p className="mono text-mono-xs uppercase tracking-widest text-iskra mb-5">Menu</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="mono text-mono-xs uppercase tracking-widest text-on-variant hover:text-iskra transition-colors duration-180"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Docs */}
          <div className="md:col-span-3">
            <p className="mono text-mono-xs uppercase tracking-widest text-iskra mb-5">Dokumentacja</p>
            <ul className="flex flex-col gap-3">
              {docLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="mono text-mono-xs uppercase tracking-widest text-on-variant hover:text-iskra transition-colors duration-180"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="mono text-mono-xs uppercase tracking-widest text-iskra mb-5">Kontakt</p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-on-variant mt-0.5 flex-shrink-0" />
                <span className="text-body-md text-on-variant">
                  ul. Elektryczna 12<br />15-688 Białystok
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-on-variant flex-shrink-0" />
                <a
                  href="tel:+48780800800"
                  className="text-body-md text-on-variant hover:text-iskra transition-colors duration-180"
                >
                  +48 780 800 800
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-on-variant flex-shrink-0" />
                <a
                  href="mailto:elektryczny.lada@gmail.com"
                  className="text-body-md text-on-variant hover:text-iskra transition-colors duration-180 break-all"
                >
                  elektryczny.lada@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-outline-variant pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="mono text-mono-xs uppercase tracking-widest text-on-variant">
            © {new Date().getFullYear()} elektrycznyŁada. Wszelkie prawa zastrzeżone.
          </p>
          <StatusIndicator />
        </div>
      </div>
    </footer>
  )
}
