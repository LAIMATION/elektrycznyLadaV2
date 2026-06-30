'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AnimateIn, StaggerContainer, StaggerItem, RevealImage } from '@/components/ui/AnimateIn'
import { GSAPChars } from '@/components/ui/GSAPText'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { services, guarantee, process } from '@/data/oferta'

export function OfertaClient() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <GSAPChars
          as="h1"
          className="font-inter font-extrabold text-display-lg text-on-bg leading-none tracking-tight mb-6 max-w-3xl"
          delay={0.08}
        >
          Systemy oparte na logice i absolutnej precyzji.
        </GSAPChars>
        <AnimateIn delay={0.15}>
          <p className="text-body-lg text-on-variant max-w-2xl">
            Nie ma tu miejsca na przypadek. To, co inwestujesz w elektrykę, zwraca się bezpieczeństwem,
            komfortem i niezawodnością przez całe życie budynku.
          </p>
        </AnimateIn>
      </section>

      {/* ── Services ──────────────────────────────────────── */}
      <section className="pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, tagline, desc, features, img }, i) => (
            <AnimateIn key={title} delay={i * 0.08}>
              <article className="card-industrial overflow-hidden">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg/80" />
                </div>

                <div className="p-8">
                  <div className="signature-line" />
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-iskra/10 flex items-center justify-center flex-shrink-0 rounded-xl">
                      <Icon size={20} className="text-iskra" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h2 className="font-inter font-bold text-headline-md text-on-bg">{title}</h2>
                      <p className="mono text-mono-xs text-primary mt-0.5">{tagline}</p>
                    </div>
                  </div>
                  <p className="text-body-md text-on-variant mb-6">{desc}</p>
                  <ul className="flex flex-col gap-2 mb-6">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <CheckCircle2 size={14} className="text-iskra flex-shrink-0" />
                        <span className="mono text-mono-xs text-on-variant uppercase tracking-widest">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────── */}
      <section className="bg-surface py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="mb-14">
            <SectionHeader
              title="Jak pracujemy?"
              subtitle="Przejrzysty proces od pierwszego kontaktu po odbiór instalacji z dokumentacją."
            />
          </AnimateIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8" staggerDelay={0.1}>
            {process.map(({ step, title, desc }) => (
              <StaggerItem key={step}>
                <div className="relative">
                  <div className="w-12 h-12 border-2 border-iskra flex items-center justify-center mb-6 rounded-full">
                    <span className="mono text-mono-sm text-iskra font-medium">{step}</span>
                  </div>
                  <div className="hidden md:block absolute top-6 left-12 right-0 h-0.5 bg-iskra/20" />
                  <h3 className="font-inter font-bold text-on-bg mb-2 text-[15px]">{title}</h3>
                  <p className="text-body-md text-on-variant text-[14px]">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Featured project ──────────────────────────────── */}
      <section className="section-padding px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <RevealImage className="relative aspect-square overflow-hidden bg-surface-container rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
              alt="Realizacja Smart Home – willa w Białymstoku"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-bg/60 to-transparent" />
          </RevealImage>
          <div>
            <GSAPChars
              as="h2"
              className="font-inter font-extrabold text-headline-lg text-on-bg tracking-tight leading-tight mb-6"
              delay={0.1}
            >
              Czysty projektowo.<br />Niezawodny w działaniu.
            </GSAPChars>
            <AnimateIn delay={0.2}>
              <p className="text-body-lg text-on-variant mb-8">
                Willa w Białymstoku wyposażona w kompletny system KNX obejmujący 48 stref
                oświetleniowych, automatyczne rolety, klimatyzację i system alarmowy.
                Wszystko zarządzane z jednej aplikacji mobilnej.
              </p>
              <dl className="grid grid-cols-2 gap-4 mb-8">
                {[
                  ['Powierzchnia', '420 m²'],
                  ['Strefy KNX', '48 stref'],
                  ['Czas realizacji', '6 tygodni'],
                  ['Standard', 'KNX + DALI'],
                ].map(([k, v]) => (
                  <div key={k} className="border border-outline-variant p-4 rounded-xl hover-lift">
                    <dt className="mono text-mono-xs text-on-variant uppercase tracking-widest mb-1">{k}</dt>
                    <dd className="font-inter font-bold text-iskra text-lg">{v}</dd>
                  </div>
                ))}
              </dl>
              <Link href="/realizacje" className="btn-primary">
                Zobacz wszystkie realizacje <ArrowRight size={15} />
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Guarantee ─────────────────────────────────────── */}
      <section className="bg-iskra py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="mb-12">
            <h2 className="font-inter font-extrabold text-headline-lg text-on-iskra tracking-tight leading-tight">
              Gwarancja elektrycznyŁada
            </h2>
          </AnimateIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {guarantee.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="bg-on-iskra/10 p-8 border border-on-iskra/20 rounded-xl hover-lift">
                  <Icon size={28} className="text-on-iskra mb-5" strokeWidth={1.5} />
                  <h3 className="font-inter font-bold text-on-iskra text-[17px] mb-3">{title}</h3>
                  <p className="text-body-md text-on-iskra/80">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <AnimateIn delay={0.3} className="mt-10 text-center">
            <Link href="/kontakt?wycena=1" className="btn-cta">
              Poproś o bezpłatną wycenę <ArrowRight size={15} />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
