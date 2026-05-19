'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimateIn, RevealImage } from '@/components/ui/AnimateIn'
import { GSAPChars, GSAPTypewriter, GSAPWords } from '@/components/ui/GSAPText'
import { FilterBar } from '@/components/ui/FilterBar'
import { ArrowRight, ExternalLink } from 'lucide-react'

const FILTERS = [
  { key: 'wszystko', label: 'Wszystko' },
  { key: 'smart-home', label: 'Smart Home' },
  { key: 'instalacje', label: 'Instalacje' },
  { key: 'automatyka', label: 'Automatyka' },
  { key: 'przemyslowe', label: 'Przemysłowe' },
]

interface Project {
  id: string
  category: string
  title: string
  location: string
  year: string
  tags: string[]
  img: string
  desc: string
  featured?: boolean
}

const PROJECTS: Project[] = [
  {
    id: 'blt-024',
    category: 'smart-home',
    title: 'Willa Minimalistyczna',
    location: 'Białystok, Dziesięciny',
    year: '2024',
    tags: ['KNX', 'DALI', 'Smart Home'],
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    desc: 'Kompleksowy system KNX dla willi o pow. 420 m². 48 stref oświetleniowych, automatyczne rolety, HVAC i system alarmowy.',
    featured: true,
  },
  {
    id: 'blt-023',
    category: 'automatyka',
    title: 'Data Center Białystok',
    location: 'Białystok, Wysoki Stoczek',
    year: '2024',
    tags: ['Automatyka', 'BMS', 'SCADA'],
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    desc: 'System zarządzania budynkiem dla centrum danych o mocy 2 MW. Monitoring i sterowanie systemami chłodzenia i zasilania UPS.',
  },
  {
    id: 'blt-022',
    category: 'instalacje',
    title: 'Apartamenty Śródmieście',
    location: 'Białystok, Centrum',
    year: '2024',
    tags: ['Instalacje', 'Rozdzielnie'],
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    desc: 'Instalacje elektryczne 32 apartamentów w nowym budynku wielorodzinnym. Rozdzielnie, systemy LAN, TV i intercomy.',
  },
  {
    id: 'blt-021',
    category: 'przemyslowe',
    title: 'Centrum Logistyczne',
    location: 'Białystok, Fasty',
    year: '2023',
    tags: ['Przemysł', 'SZR', 'Agregat'],
    img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    desc: 'Instalacje siłowe i oświetleniowe dla centrum logistycznego o pow. 12 000 m². System samoczynnego załączenia rezerwy.',
  },
  {
    id: 'blt-020',
    category: 'smart-home',
    title: 'Dom Pasywny Supraśl',
    location: 'Supraśl, Podlasie',
    year: '2023',
    tags: ['Grenton', 'Fotowoltaika', 'Smart Home'],
    img: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
    desc: 'Integracja systemu Grenton z instalacją fotowoltaiczną 15 kWp i pompą ciepła. Optymalizacja autokonsumpcji.',
  },
  {
    id: 'blt-019',
    category: 'instalacje',
    title: 'Biurowiec Park Centralny',
    location: 'Białystok, Centrum',
    year: '2023',
    tags: ['Instalacje', 'BMS', 'UPS'],
    img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80',
    desc: 'Modernizacja instalacji elektrycznej biurowca klasy A. Wymiana rozdzielni głównej, UPS 80 kVA i systemu BMS.',
  },
  {
    id: 'blt-018',
    category: 'automatyka',
    title: 'Hotel Boutique',
    location: 'Białystok, Rynek Kościuszki',
    year: '2022',
    tags: ['KNX', 'Hotelowy', 'Automatyka'],
    img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
    desc: 'System KNX dla butikowego hotelu – zarządzanie 24 pokojami, częściami wspólnymi i restauracją z panelu hotelarza.',
  },
  {
    id: 'blt-017',
    category: 'przemyslowe',
    title: 'Hala Produkcyjna Łapy',
    location: 'Łapy, Podlasie',
    year: '2022',
    tags: ['Przemysł', 'Rozdzielnia', 'Oświetlenie LED'],
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    desc: 'Instalacje elektryczne nowej hali produkcyjnej 6000 m². Rozdzielnia główna SN/nn, tory suwnicowe, LED 60 W/m².',
  },
  {
    id: 'blt-016',
    category: 'smart-home',
    title: 'Rezydencja Ignatki',
    location: 'Ignatki, okolice Białegostoku',
    year: '2022',
    tags: ['Loxone', 'Basen', 'Smart Home'],
    img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80',
    desc: 'System Loxone dla rezydencji z basenem. Automatyczne sterowanie podgrzewaniem wody, oświetleniem zewnętrznym i systemem nawadniania.',
  },
]

export function RealizacjeClient() {
  const [activeFilter, setActiveFilter] = useState('wszystko')

  const visible = PROJECTS.filter(
    (p) => activeFilter === 'wszystko' || p.category === activeFilter
  )

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <GSAPChars
          as="h1"
          className="font-inter font-extrabold text-display-lg text-on-bg leading-none tracking-tight mb-6 max-w-3xl"
          delay={0.08}
        >
          Dziennik Techniczny:<br />Precyzja w każdym detalu.
        </GSAPChars>
        <AnimateIn delay={0.15}>
          <p className="text-body-lg text-on-variant max-w-2xl">
            Dokumentujemy każdy projekt – od schematu ideowego po protokół odbioru. To świadectwo
            standardów, których nie robimy wyjątków.
          </p>
        </AnimateIn>
      </section>

      {/* Featured project */}
      <section className="pb-16 px-6 md:px-12 max-w-7xl mx-auto">
          <Link href="#" className="group block">
            <RevealImage className="relative h-[420px] md:h-[520px] overflow-hidden bg-surface-container rounded-2xl">
              <Image
                src={PROJECTS[0].img}
                alt={PROJECTS[0].title}
                fill
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/30 to-transparent" />
              <div className="absolute top-6 right-6">
                <span className="mono text-mono-xs bg-iskra text-on-iskra px-3 py-1.5 rounded-full">
                  PROJEKT WYRÓŻNIONY
                </span>
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="mono text-mono-xs text-iskra mb-3">
                  {PROJECTS[0].tags.join(' // ')} · {PROJECTS[0].year}
                </p>
                <h2 className="font-inter font-extrabold text-headline-lg text-on-bg mb-2">
                  {PROJECTS[0].title} – {PROJECTS[0].location}
                </h2>
                <p className="text-body-lg text-on-variant max-w-2xl hidden md:block">
                  {PROJECTS[0].desc}
                </p>
                <div className="mt-4 flex items-center gap-2 text-iskra mono text-mono-xs uppercase group-hover:gap-4 transition-all duration-300">
                  <span>Czytaj więcej</span>
                  <ExternalLink size={14} />
                </div>
              </div>
            </RevealImage>
          </Link>
      </section>

      {/* ── Filter + Grid ─────────────────────────────────── */}
      <section className="pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <AnimateIn className="mb-10 flex justify-end">
          <FilterBar filters={FILTERS} onChange={setActiveFilter} />
        </AnimateIn>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0, 1] }}
          >
            {visible.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.65, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="card-industrial overflow-hidden group"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="mono text-mono-xs bg-bg/90 text-primary px-2 py-0.5 text-[10px]">
                      REF: {project.id.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="mono text-[10px] uppercase tracking-widest border border-iskra/40 text-iskra px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-inter font-bold text-on-bg text-[17px] mb-1">{project.title}</h3>
                  <p className="mono text-mono-xs text-on-variant mb-4">
                    {project.location} · {project.year}
                  </p>
                  <p className="text-body-md text-on-variant text-[14px]">{project.desc}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {visible.length === 0 && (
          <div className="py-24 text-center">
            <p className="mono text-mono-sm text-on-variant uppercase tracking-widest">
              Brak projektów dla tej kategorii.
            </p>
          </div>
        )}
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="bg-surface border-t border-outline-variant py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <GSAPWords
              text="Gotowy na kolejny etap?"
              as="h2"
              className="font-inter font-extrabold text-headline-lg text-on-bg tracking-tight leading-tight"
            />
            <p className="text-body-lg text-on-variant mt-3 max-w-lg">
              Opisz swój projekt, a przygotujemy bezpłatną wycenę w ciągu 24 godzin.
            </p>
          </div>
          <Link href="/kontakt?wycena=1" className="btn-primary flex-shrink-0">
            Darmowa wycena <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
