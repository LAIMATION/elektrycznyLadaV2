import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AnimateIn, StaggerContainer, StaggerItem, RevealImage } from '@/components/ui/AnimateIn'
import { GSAPChars, GSAPWords } from '@/components/ui/GSAPText'
import {
  Zap, Cpu, Home, CheckCircle2, ArrowRight, ShieldCheck,
  Clock, Award, Wrench
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Oferta – Elektryka, Automatyka, Smart Home',
  description:
    'Kompleksowa oferta elektryczna: instalacje mieszkaniowe i przemysłowe, automatyka budynkowa, systemy Smart Home w Białymstoku i na Podlasiu.',
}

const services = [
  {
    icon: Zap,
    title: 'Elektryka',
    tagline: 'Instalacje oparte na normach i doświadczeniu',
    desc: 'Kompleksowe instalacje elektryczne w budownictwie mieszkaniowym, komercyjnym i przemysłowym. Projektujemy i wykonujemy rozdzielnie, obwody gniazd, obwody oświetleniowe i systemy ochronne.',
    features: [
      'Rozdzielnie mieszkaniowe i przemysłowe',
      'Instalacje siłowe i gniazd',
      'Systemy wyrównania potencjałów',
      'Ochrona przeciwprzepięciowa',
      'Dokumentacja powykonawcza',
    ],
    ref: 'SRV_01 // ELEKTRYKA',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    icon: Cpu,
    title: 'Automatyka',
    tagline: 'Systemy sterowania dla wymagających budynków',
    desc: 'Projektujemy i wdrażamy systemy automatyki budynkowej oparte na protokołach KNX, Grenton i Loxone. Centralne zarządzanie oświetleniem, klimatem i bezpieczeństwem z jednego miejsca.',
    features: [
      'Systemy KNX / Grenton / Loxone',
      'Integracja z HVAC',
      'Zarządzanie strefami oświetleniowymi',
      'Wizualizacja SCADA',
      'Zdalny dostęp i monitoring',
    ],
    ref: 'SRV_02 // AUTOMATYKA',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
  },
  {
    icon: Home,
    title: 'Smart Home',
    tagline: 'Inteligentny dom zaprojektowany z myślą o komforcie',
    desc: 'Tworzymy zintegrowane ekosystemy smart home, w których oświetlenie, ogrzewanie, rolety i bezpieczeństwo współpracują ze sobą w sposób intuicyjny i energooszczędny.',
    features: [
      'Inteligentne oświetlenie DALI i DMX',
      'Sterowanie roletami i bramami',
      'Systemy alarmowe i CCTV',
      'Zarządzanie przez aplikację mobilną',
      'Integracja z asystentami głosowymi',
    ],
    ref: 'SRV_03 // SMART_HOME',
    img: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80',
  },
  {
    icon: Wrench,
    title: 'Serwis i diagnostyka',
    tagline: 'Utrzymanie instalacji w najwyższej gotowości',
    desc: 'Oferujemy kompleksowy serwis istniejących instalacji elektrycznych: przeglądy, pomiary elektryczne, termografię IR i diagnostykę sieci. Czas reakcji do 24 godzin.',
    features: [
      'Pomiary instalacji elektrycznej',
      'Termografia IR rozdzielni',
      'Przeglądy okresowe UDT',
      'Modernizacja istniejących instalacji',
      'Audyty energetyczne',
    ],
    ref: 'SRV_04 // SERWIS',
    img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
  },
]

const guarantee = [
  { icon: ShieldCheck, title: 'Gwarancja materiałów', desc: '5 lat gwarancji na zastosowane materiały renomowanych producentów.' },
  { icon: Award, title: 'Gwarancja wykonania', desc: '3 lata gwarancji na jakość wykonania wszystkich prac instalacyjnych.' },
  { icon: Clock, title: 'Serwis gwarancyjny', desc: 'Bezpłatny serwis gwarancyjny z czasem reakcji do 24 godzin w dni robocze.' },
]

const process = [
  { step: '01', title: 'Konsultacja i pomiary', desc: 'Bezpłatna wizja lokalna, pomiary i rozmowa o Twoich potrzebach.' },
  { step: '02', title: 'Projekt i wycena', desc: 'Schemat elektryczny, lista materiałów i szczegółowy kosztorys w ciągu 48h.' },
  { step: '03', title: 'Realizacja', desc: 'Prace instalacyjne zgodnie z harmonogramem i normami PN-HD 60364.' },
  { step: '04', title: 'Odbiór i dokumentacja', desc: 'Pomiary kontrolne, protokoły odbioru i dokumentacja powykonawcza.' },
]

export default function OfertaPage() {
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
                {/* Card image */}
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
                  {/* Card header with yellow line */}
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
              label="PROCESS_FLOW // SECTION_03"
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
                  {/* Connecting line */}
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
