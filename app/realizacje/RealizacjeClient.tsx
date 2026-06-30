'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimateIn, RevealImage } from '@/components/ui/AnimateIn'
import { GSAPChars, GSAPWords } from '@/components/ui/GSAPText'
import { FilterBar } from '@/components/ui/FilterBar'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { FILTERS, PROJECTS } from '@/data/realizacje'

export function RealizacjeClient() {
  const [activeFilter, setActiveFilter] = useState('wszystko')

  const visible = PROJECTS.filter(
    (p) => activeFilter === 'wszystko' || p.category === activeFilter
  )

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="pt-24 pb-6 md:pt-32 md:pb-12 px-6 md:px-12 max-w-7xl mx-auto">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
            <div className="absolute top-6 right-6">
              <span className="mono text-mono-xs bg-iskra/85 backdrop-blur-sm text-on-iskra px-3 py-1.5 rounded-full">
                {PROJECTS[0].tags.join(' · ')} · {PROJECTS[0].year}
              </span>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <h2 className="font-inter font-extrabold text-headline-lg text-white mb-2">
                {PROJECTS[0].title} – {PROJECTS[0].location}
              </h2>
              <p className="text-body-lg text-white/75 max-w-2xl hidden md:block">
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
        <AnimateIn className="mb-10">
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
      <section className="bg-iskra py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <GSAPWords
              text="Zrealizujemy Twój projekt."
              as="h2"
              className="font-inter font-extrabold text-headline-lg text-on-iskra tracking-tight leading-tight"
            />
            <p className="text-body-lg text-on-iskra/80 mt-3 max-w-lg">
              Opisz projekt, a przygotuję bezpłatną wycenę w ciągu 24 godzin.
            </p>
          </div>
          <Link href="/kontakt?wycena=1" className="btn-cta flex-shrink-0">
            Darmowa wycena <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
