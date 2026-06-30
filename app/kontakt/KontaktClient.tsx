'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimateIn, StaggerContainer, StaggerItem } from '@/components/ui/AnimateIn'
import { GSAPChars } from '@/components/ui/GSAPText'
import { MapPin, Phone, Mail, Send, CheckCircle2, Instagram, Facebook, ChevronDown } from 'lucide-react'
import { CATEGORIES, LIMITS, GALLERY_IMAGES, type CategoryKey } from '@/data/kontakt'
import { CONTACT } from '@/data/contact'

function CharCounter({ current, max }: { current: number; max: number }) {
  const near = current >= max * 0.8
  return (
    <span
      className={`mono text-[10px] tabular-nums transition-colors duration-200 ${
        near ? 'text-iskra' : 'text-on-variant/50'
      }`}
    >
      {current}/{max}
    </span>
  )
}

export function KontaktClient() {
  const searchParams = useSearchParams()
  const isQuote = searchParams.get('wycena') === '1'

  const [category, setCategory] = useState<CategoryKey>(isQuote ? 'quote' : 'default')
  const [toolbarOpen, setToolbarOpen] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: isQuote ? CATEGORIES.find((c) => c.key === 'quote')!.placeholder : '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const currentCategory = CATEGORIES.find((c) => c.key === category)!

  const autoResize = useCallback(() => {
    const el = messageRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }, [])

  useEffect(() => {
    if (isQuote) {
      setCategory('quote')
      setForm((f) => ({ ...f, message: '' }))
      setTimeout(() => {
        messageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        messageRef.current?.focus()
      }, 400)
    }
  }, [isQuote])

  useEffect(() => {
    autoResize()
  }, [form.message, autoResize])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleCategorySelect = (key: CategoryKey) => {
    setCategory(key)
    setToolbarOpen(false)
    setForm((f) => ({ ...f, message: '' }))
    setTimeout(() => autoResize(), 10)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, category }),
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
        <GSAPChars
          as="h1"
          className="font-inter font-extrabold text-display-lg text-on-bg leading-none tracking-tight mb-4 max-w-2xl"
          delay={0.08}
        >
          Zacznijmy od logiki
        </GSAPChars>
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
              <address className="not-italic flex flex-col gap-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-outline-variant flex items-center justify-center flex-shrink-0 rounded-xl">
                    <MapPin size={16} className="text-iskra" />
                  </div>
                  <div>
                    <p className="mono text-mono-xs uppercase tracking-widest text-on-variant mb-1">
                      Adres biura
                    </p>
                    <p className="text-body-md text-on-bg">
                      {CONTACT.address.street}<br />{CONTACT.address.city}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-outline-variant flex items-center justify-center flex-shrink-0 rounded-xl">
                    <Phone size={16} className="text-iskra" />
                  </div>
                  <div>
                    <p className="mono text-mono-xs uppercase tracking-widest text-on-variant mb-1">
                      Telefon
                    </p>
                    <a
                      href={CONTACT.phone.href}
                      className="text-body-md text-on-bg hover:text-iskra transition-colors duration-180"
                    >
                      {CONTACT.phone.display}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-outline-variant flex items-center justify-center flex-shrink-0 rounded-xl">
                    <Mail size={16} className="text-iskra" />
                  </div>
                  <div>
                    <p className="mono text-mono-xs uppercase tracking-widest text-on-variant mb-1">
                      Email
                    </p>
                    <a
                      href={CONTACT.email.href}
                      className="text-body-md text-on-bg hover:text-iskra transition-colors duration-180 break-all"
                    >
                      {CONTACT.email.display}
                    </a>
                  </div>
                </div>
              </address>

              {/* Social */}
              <div>
                <p className="mono text-mono-xs uppercase tracking-widest text-on-variant mb-4">
                  Social media
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={CONTACT.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-2.5 border border-outline-variant rounded-full hover-lift hover:border-iskra hover:text-iskra text-on-variant"
                    aria-label="Instagram"
                  >
                    <Instagram size={15} />
                    <span className="mono text-mono-xs uppercase">Instagram</span>
                  </a>
                  <a
                    href={CONTACT.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-2.5 border border-outline-variant rounded-full hover-lift hover:border-iskra hover:text-iskra text-on-variant"
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
                  <button onClick={() => setStatus('idle')} className="btn-ghost">
                    Wyślij kolejną wiadomość
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {/* ── Category toolbar ───────────────────── */}
                  <div className="mb-8">
                    <p className="mono text-mono-xs uppercase tracking-widest text-on-variant mb-3">
                      Kategoria zapytania
                    </p>

                    <div className="flex items-center gap-3 flex-wrap">
                      <button
                        type="button"
                        onClick={() => setToolbarOpen((o) => !o)}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-iskra bg-iskra/10 text-on-bg mono text-mono-xs uppercase tracking-widest transition-all duration-200 hover:bg-iskra/20"
                      >
                        <span>{currentCategory.label}</span>
                        <motion.span
                          animate={{ rotate: toolbarOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center"
                        >
                          <ChevronDown size={13} className="text-iskra" />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {toolbarOpen && (
                          <motion.div
                            className="flex items-center gap-2 flex-wrap"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                          >
                            {CATEGORIES.filter((c) => c.key !== category).map((cat, i) => (
                              <motion.button
                                key={cat.key}
                                type="button"
                                onClick={() => handleCategorySelect(cat.key)}
                                variants={{
                                  hidden: { opacity: 0, x: -16 },
                                  visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: { delay: i * 0.05, ease: [0.4, 0, 0, 1], duration: 0.25 },
                                  },
                                }}
                                className="px-4 py-2 rounded-full border border-outline-variant text-on-variant mono text-mono-xs uppercase tracking-widest transition-all duration-200 hover:border-iskra hover:text-iskra hover:bg-iskra/5"
                              >
                                {cat.label}
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* ── Fields ─────────────────────────────── */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7 mb-8">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label htmlFor="name" className="input-label">Imię i Nazwisko</label>
                        <CharCounter current={form.name.length} max={LIMITS.name} />
                      </div>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        maxLength={LIMITS.name}
                        placeholder="Jan Kowalski"
                        value={form.name}
                        onChange={handleChange}
                        className="input-pill"
                        autoComplete="name"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label htmlFor="phone" className="input-label">Telefon</label>
                        <CharCounter current={form.phone.length} max={LIMITS.phone} />
                      </div>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        maxLength={LIMITS.phone}
                        placeholder="+48 000 000 000"
                        value={form.phone}
                        onChange={handleChange}
                        className="input-pill"
                        autoComplete="tel"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <div className="flex items-center justify-between mb-2">
                        <label htmlFor="email" className="input-label">Adres e-mail</label>
                        <CharCounter current={form.email.length} max={LIMITS.email} />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        maxLength={LIMITS.email}
                        placeholder="jan@przyklad.pl"
                        value={form.email}
                        onChange={handleChange}
                        className="input-pill"
                        autoComplete="email"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <div className="flex items-center justify-between mb-2">
                        <label htmlFor="message" className="input-label">Wiadomość / Opis projektu</label>
                        <CharCounter current={form.message.length} max={LIMITS.message} />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        ref={messageRef}
                        required
                        maxLength={LIMITS.message}
                        placeholder={currentCategory.placeholder}
                        value={form.message}
                        onChange={(e) => {
                          handleChange(e)
                          autoResize()
                        }}
                        className="textarea-pill"
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
          {GALLERY_IMAGES.map(({ src, alt }, i) => (
            <StaggerItem key={i}>
              <div className="relative h-64 md:h-80 overflow-hidden group">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-bg/30 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </>
  )
}
