'use client'

import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { AnimateIn, StaggerContainer, StaggerItem } from '@/components/ui/AnimateIn'
import { StatusBadge } from '@/components/ui/StatusIndicator'
import { MapPin, Phone, Mail, Send, CheckCircle2, Instagram, Facebook } from 'lucide-react'

const QUOTE_MESSAGE =
  'Dzień dobry, proszę o przygotowanie darmowej wyceny dla mojego projektu...'

const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    alt: 'Rozdzielnia elektryczna – realizacja elektrycznyŁada',
    ref: 'REF_IMG_01',
  },
  {
    src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
    alt: 'Instalacja przemysłowa – Białystok',
    ref: 'REF_IMG_02',
  },
  {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    alt: 'Kable i połączenia – precyzja wykonania',
    ref: 'REF_IMG_03',
  },
]

export function KontaktClient() {
  const searchParams = useSearchParams()
  const isQuote = searchParams.get('wycena') === '1'

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: isQuote ? QUOTE_MESSAGE : '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const messageRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (isQuote) {
      setForm((f) => ({ ...f, message: QUOTE_MESSAGE }))
      setTimeout(() => {
        messageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        messageRef.current?.focus()
      }, 400)
    }
  }, [isQuote])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', phone: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <AnimateIn>
          <div className="signature-line w-24" />
          <p className="mono text-mono-xs uppercase tracking-widest text-primary mt-4 mb-4">
            CONTACT_INIT // SYSTEM_READY
          </p>
        </AnimateIn>
        <AnimateIn delay={0.08}>
          <h1 className="font-inter font-extrabold text-display-lg text-on-bg leading-none tracking-tight mb-4 max-w-2xl">
            Zacznijmy od logiki
          </h1>
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <p className="text-body-lg text-on-variant max-w-2xl">
            Opisz projekt, a wrócę z precyzyjną analizą i bezpłatną wyceną. Bez zbędnych pytań
            i marketingowej otoczki – tylko konkrety.
          </p>
        </AnimateIn>
      </section>

      {/* ── Contact grid ──────────────────────────────────── */}
      <section className="pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Info column */}
          <div className="md:col-span-4">
            <AnimateIn>
              <div className="mb-8">
                <StatusBadge />
              </div>
              <address className="not-italic flex flex-col gap-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-outline-variant flex items-center justify-center flex-shrink-0 rounded-xl">
                    <MapPin size={16} className="text-iskra" />
                  </div>
                  <div>
                    <p className="mono text-mono-xs uppercase tracking-widest text-on-variant mb-1">
                      ADRES_BIURA
                    </p>
                    <p className="text-body-md text-on-bg">
                      ul. Elektryczna 12<br />15-688 Białystok
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-outline-variant flex items-center justify-center flex-shrink-0 rounded-xl">
                    <Phone size={16} className="text-iskra" />
                  </div>
                  <div>
                    <p className="mono text-mono-xs uppercase tracking-widest text-on-variant mb-1">
                      TELEFON
                    </p>
                    <a
                      href="tel:+48780800800"
                      className="text-body-md text-on-bg hover:text-iskra transition-colors duration-180"
                    >
                      +48 780 800 800
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-outline-variant flex items-center justify-center flex-shrink-0 rounded-xl">
                    <Mail size={16} className="text-iskra" />
                  </div>
                  <div>
                    <p className="mono text-mono-xs uppercase tracking-widest text-on-variant mb-1">
                      EMAIL
                    </p>
                    <a
                      href="mailto:elektryczny.lada@gmail.com"
                      className="text-body-md text-on-bg hover:text-iskra transition-colors duration-180 break-all"
                    >
                      elektryczny.lada@gmail.com
                    </a>
                  </div>
                </div>
              </address>

              {/* Social */}
              <div>
                <p className="mono text-mono-xs uppercase tracking-widest text-on-variant mb-4">
                  SOCIAL_MEDIA
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/elektryczny.lada/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-2.5 border border-outline-variant rounded-lg hover-lift hover:border-iskra hover:text-iskra text-on-variant"
                    aria-label="Instagram"
                  >
                    <Instagram size={15} />
                    <span className="mono text-mono-xs uppercase">Instagram</span>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61586262846558"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-2.5 border border-outline-variant rounded-lg hover-lift hover:border-iskra hover:text-iskra text-on-variant"
                    aria-label="Facebook"
                  >
                    <Facebook size={15} />
                    <span className="mono text-mono-xs uppercase">Facebook</span>
                  </a>
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* Form column */}
          <div className="md:col-span-8" id="formularz">
            <AnimateIn delay={0.1}>
              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-24 text-center gap-6">
                  <CheckCircle2 size={48} className="text-iskra" strokeWidth={1.5} />
                  <div>
                    <h2 className="font-inter font-bold text-headline-md text-on-bg mb-3">
                      Wiadomość wysłana
                    </h2>
                    <p className="text-body-lg text-on-variant max-w-md">
                      Dziękuję za kontakt. Odpiszę w ciągu 24 godzin.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-ghost"
                  >
                    Wyślij kolejną wiadomość
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-8">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="input-label">Imię i Nazwisko</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jan Kowalski"
                        value={form.name}
                        onChange={handleChange}
                        className="input-underline"
                        autoComplete="name"
                      />
                    </div>
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="input-label">Telefon</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+48 000 000 000"
                        value={form.phone}
                        onChange={handleChange}
                        className="input-underline"
                        autoComplete="tel"
                      />
                    </div>
                    {/* Email */}
                    <div className="md:col-span-2">
                      <label htmlFor="email" className="input-label">Adres e-mail</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jan@przyklad.pl"
                        value={form.email}
                        onChange={handleChange}
                        className="input-underline"
                        autoComplete="email"
                      />
                    </div>
                    {/* Message */}
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="input-label">Wiadomość / Opis projektu</label>
                      <textarea
                        id="message"
                        name="message"
                        ref={messageRef}
                        required
                        rows={6}
                        placeholder="Opisz swój projekt lub zadaj pytanie..."
                        value={form.message}
                        onChange={handleChange}
                        className="input-underline resize-none"
                      />
                    </div>
                  </div>

                  {status === 'error' && (
                    <p className="mono text-mono-xs text-red-500 mb-6 uppercase tracking-widest">
                      Błąd wysyłki – spróbuj ponownie lub napisz bezpośrednio na elektryczny.lada@gmail.com
                    </p>
                  )}

                  <div className="flex items-center gap-6">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary"
                    >
                      {status === 'sending' ? (
                        <>
                          <span className="animate-spin w-4 h-4 border-2 border-on-iskra/30 border-t-on-iskra rounded-full" />
                          Wysyłanie...
                        </>
                      ) : (
                        <>
                          Wyślij wiadomość <Send size={14} />
                        </>
                      )}
                    </button>
                    <p className="mono text-mono-xs text-on-variant">
                      Odpowiadam w ciągu 24h
                    </p>
                  </div>
                </form>
              )}
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Photo gallery ─────────────────────────────────── */}
      <section className="border-t border-outline-variant">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3" staggerDelay={0.08}>
          {GALLERY_IMAGES.map(({ src, alt, ref }) => (
            <StaggerItem key={ref}>
              <div className="relative h-64 md:h-80 overflow-hidden group">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-bg/30 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-4 right-4">
                  <span className="mono text-mono-xs bg-bg/80 text-on-variant px-2 py-0.5">{ref}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </>
  )
}
