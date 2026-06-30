'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AnimateIn, StaggerContainer, StaggerItem } from '@/components/ui/AnimateIn'
import { GSAPChars, GSAPWords } from '@/components/ui/GSAPText'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { philosophy, services, projects, stats } from '@/data/home'

export function HomeClient() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="md:min-h-screen flex flex-col justify-start pt-20 md:justify-center md:pt-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-8 pb-10 md:py-0">
          <div className="md:col-span-7">
            <GSAPChars
              as="h1"
              className="font-inter font-extrabold text-display-lg text-on-bg leading-none tracking-tight mb-6"
              delay={0.15}
            >
              Ład<br />w elektryce.
            </GSAPChars>

            <AnimateIn delay={0.22}>
              <p className="text-body-lg text-on-variant max-w-lg mb-10">
                Tworzę instalacje logiczne, estetyczne i bezpieczne. Przekształcam chaos kabli
                w precyzyjny system zarządzania energią i automatyką – zaprojektowany raz, działający
                przez dekady.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.28}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/realizacje" className="btn-primary w-full sm:w-auto justify-center">
                  Zobacz projekty <ArrowRight size={15} />
                </Link>
                <Link href="/oferta" className="btn-ghost w-full sm:w-auto justify-center">
                  Nasza oferta
                </Link>
              </div>
            </AnimateIn>
          </div>

          {/* Hero image */}
          <div className="md:col-span-5 hidden md:block">
            <AnimateIn delay={0.2} direction="left">
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-container rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="Precyzyjnie okablowana rozdzielnia elektryczna – elektrycznyŁada Białystok"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────── */}
      <section className="bg-surface border-y border-outline-variant py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.08}>
            {stats.map(({ value, label }) => (
              <StaggerItem key={label}>
                <div className="text-center md:text-left">
                  <p className="font-inter font-extrabold text-3xl text-iskra tracking-tight leading-none mb-1">
                    {value}
                  </p>
                  <p className="mono text-mono-xs uppercase tracking-widest text-on-variant">{label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Philosophy ────────────────────────────────────── */}
      <section className="section-padding px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5 md:sticky md:top-24 md:self-start">
            <AnimateIn>
              <SectionHeader
                title="Dlaczego porządek ma znaczenie?"
                subtitle="W systemach elektrycznyŁada precyzja nie jest wyborem – jest standardem. Każdy obwód, każda złączka i każdy metr przewodu są zaplanowane tak, aby służyć przez dekady bezawaryjnej pracy."
              />
            </AnimateIn>
          </div>

          <div className="md:col-span-7">
            <StaggerContainer className="flex flex-col gap-6" staggerDelay={0.12}>
              {philosophy.map(({ icon: Icon, title, body }) => (
                <StaggerItem key={title}>
                  <div className="card-industrial p-8 group">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-iskra/10 flex items-center justify-center rounded-xl group-hover:bg-iskra/20 transition-colors duration-300">
                        <Icon size={22} className="text-iskra" strokeWidth={1.75} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-inter font-bold text-headline-md text-on-bg mb-3">{title}</h3>
                        <p className="text-body-md text-on-variant">{body}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────── */}
      <section className="bg-surface-container py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.08}>
            {services.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="bg-surface p-6 border border-outline-variant rounded-xl hover-lift hover:border-iskra group cursor-default">
                  <div className="w-10 h-10 bg-iskra/10 flex items-center justify-center mb-4 rounded-lg group-hover:bg-iskra/20 transition-colors duration-200">
                    <Icon size={18} className="text-iskra" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-inter font-bold text-on-bg mb-2 text-[15px]">{title}</h3>
                  <p className="text-body-md text-on-variant text-[13px]">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Bento Grid: Projects ──────────────────────────── */}
      <section className="section-padding px-6 md:px-12 max-w-7xl mx-auto">
        <AnimateIn className="mb-12">
          <SectionHeader
            title="Ostatnie realizacje"
            subtitle="Każdy projekt to nowe wyzwanie inżynierskie. Dokumentujemy każdy etap – od schematu po odbiór."
          />
        </AnimateIn>

        {/* Desktop bento */}
        <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-4 h-[640px]">
          {projects.map(({ cat, year, title, span, img, id }) => (
            <AnimateIn
              key={id}
              className={`bento-item bg-surface-container ${span}`}
              delay={0.05}
            >
              <Image
                src={img}
                alt={title}
                fill
                className="object-cover opacity-80"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-flex items-center bg-iskra/85 backdrop-blur-sm text-on-iskra mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full mb-3">
                  {cat.replace(/_/g, ' ')}, {year}
                </span>
                <h4 className="font-inter font-bold text-headline-md text-white">{title}</h4>
              </div>
            </AnimateIn>
          ))}
          {/* CTA tile */}
          <AnimateIn className="bento-item col-span-1 row-span-1 bg-surface border border-outline-variant flex items-center justify-center group cursor-pointer hover:border-iskra transition-colors duration-200">
            <Link href="/realizacje" className="flex flex-col items-center gap-3 p-6 text-center">
              <ChevronRight size={28} className="text-iskra" strokeWidth={1.5} />
              <p className="mono text-mono-xs uppercase tracking-widest text-on-variant group-hover:text-iskra transition-colors">
                Wszystkie projekty
              </p>
            </Link>
          </AnimateIn>
        </div>

        {/* Mobile grid */}
        <StaggerContainer className="grid md:hidden grid-cols-1 gap-4" staggerDelay={0.1}>
          {projects.map(({ cat, year, title, img, id }) => (
            <StaggerItem key={id}>
              <div className="bento-item h-64 bg-surface-container relative">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover opacity-80"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="inline-flex items-center bg-iskra/85 backdrop-blur-sm text-on-iskra mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full mb-2">
                    {cat.replace(/_/g, ' ')}, {year}
                  </span>
                  <h4 className="font-inter font-bold text-[16px] text-white">{title}</h4>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateIn className="mt-8 flex justify-center">
          <Link href="/realizacje" className="btn-ghost">
            Zobacz wszystkie realizacje <ArrowRight size={15} />
          </Link>
        </AnimateIn>
      </section>

      {/* ── CTA section ───────────────────────────────────── */}
      <section className="bg-iskra py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <GSAPWords
              text="Gotowy na kolejny etap?"
              as="h2"
              className="font-inter font-extrabold text-headline-lg text-on-iskra leading-tight tracking-tight"
            />
            <p className="text-body-lg text-on-iskra/80 mt-3 max-w-lg">
              Opisz swój projekt, a przygotuję bezpłatną wycenę w ciągu 24 godzin.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link href="/kontakt?wycena=1" className="btn-cta w-full sm:w-auto justify-center">
              Darmowa wycena <ArrowRight size={15} />
            </Link>
            <Link href="/realizacje" className="btn-cta-outline w-full sm:w-auto justify-center">
              Nasze realizacje
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
