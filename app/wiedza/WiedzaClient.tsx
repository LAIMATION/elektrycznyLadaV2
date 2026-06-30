'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimateIn, StaggerContainer, StaggerItem } from '@/components/ui/AnimateIn'
import { GSAPChars, GSAPWords } from '@/components/ui/GSAPText'
import { FilterBar } from '@/components/ui/FilterBar'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ArrowRight, Clock } from 'lucide-react'
import { FILTERS, ARTICLES, TOOLS } from '@/data/wiedza'

export function WiedzaClient() {
  const [activeFilter, setActiveFilter] = useState('wszystko')

  const visibleArticles = ARTICLES.filter(
    (a) => activeFilter === 'wszystko' || a.category === activeFilter
  ).filter((a) => !a.featured)

  const featured = ARTICLES.filter((a) => a.featured)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <GSAPChars
          as="h1"
          className="font-inter font-extrabold text-display-lg text-on-bg leading-none tracking-tight mb-6 max-w-4xl"
          delay={0.08}
        >
          Ekspercka wiedza<br />o systemach elektrycznych<br />i automatyce.
        </GSAPChars>
        <AnimateIn delay={0.15}>
          <p className="text-body-lg text-on-variant max-w-2xl">
            Bez marketingowych uproszczeń – tylko rzetelna wiedza techniczna dla instalatorów,
            inwestorów i managerów budynków. Każdy artykuł weryfikowany praktycznym doświadczeniem.
          </p>
        </AnimateIn>
      </section>

      {/* ── Featured 2-column ─────────────────────────────── */}
      <section className="pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {featured.map((article) => (
            <StaggerItem key={article.id}>
              <article className="card-industrial overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="mono text-[10px] uppercase tracking-widest bg-iskra/85 backdrop-blur-sm text-on-iskra px-3 py-1.5 rounded-full">
                      Wyróżniony
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock size={12} className="text-on-variant" />
                    <span className="mono text-mono-xs text-on-variant">{article.readTime} czytania</span>
                    <span className="text-on-variant">·</span>
                    <span className="mono text-mono-xs text-on-variant">{article.date}</span>
                  </div>
                  <h2 className="font-inter font-bold text-on-bg text-[18px] leading-snug mb-4">
                    {article.title}
                  </h2>
                  <p className="text-body-md text-on-variant mb-6">{article.excerpt}</p>
                  <div className="flex items-center gap-2 text-iskra mono text-mono-xs uppercase group-hover:gap-4 transition-all duration-300">
                    <span>Czytaj artykuł</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── Filter + Articles grid ────────────────────────── */}
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
            {(activeFilter === 'wszystko' ? ARTICLES.filter((a) => !a.featured) : visibleArticles).map(
              (article, i) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 28, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.65, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="card-industrial overflow-hidden group"
                >
                  <div className="relative h-36 md:h-44 overflow-hidden">
                    <Image
                      src={article.img}
                      alt={article.title}
                      fill
                      className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock size={11} className="text-on-variant" />
                      <span className="mono text-[10px] text-on-variant">{article.readTime}</span>
                      <span className="text-on-variant">·</span>
                      <span className="mono text-[10px] text-on-variant">{article.date}</span>
                    </div>
                    <h3 className="font-inter font-bold text-on-bg text-[15px] leading-snug mb-3">
                      {article.title}
                    </h3>
                    <p className="text-body-md text-on-variant text-[13px] line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-iskra mono text-[11px] uppercase group-hover:gap-3 transition-all duration-300">
                      <span>Czytaj</span>
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </motion.article>
              )
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── Tools ─────────────────────────────────────────── */}
      <section className="bg-surface py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="mb-12">
            <SectionHeader
              title="Narzędzia inżynierskie"
              subtitle="Darmowe kalkulatory i szablony techniczne do pobrania i użycia w Twoich projektach."
            />
          </AnimateIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {TOOLS.map(({ icon: Icon, title, desc, tag, status }) => (
              <StaggerItem key={tag}>
                <div className="card-industrial p-8 group cursor-pointer">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-iskra/10 flex items-center justify-center group-hover:bg-iskra/20 transition-colors duration-200">
                      <Icon size={22} className="text-iskra" strokeWidth={1.75} />
                    </div>
                    <span className="mono text-[10px] uppercase border border-iskra/30 text-iskra px-2 py-0.5 rounded-full">
                      {status}
                    </span>
                  </div>
                  <h3 className="font-inter font-bold text-on-bg text-[17px] mb-3">{title}</h3>
                  <p className="text-body-md text-on-variant text-[14px] mb-6">{desc}</p>
                  <div className="flex items-center gap-2 text-iskra mono text-mono-xs uppercase group-hover:gap-4 transition-all duration-300">
                    <span>Uruchom narzędzie</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="bg-iskra py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <GSAPWords
              text="Masz projekt do omówienia?"
              as="h2"
              className="font-inter font-extrabold text-headline-lg text-on-iskra tracking-tight leading-tight"
            />
            <p className="text-body-lg text-on-iskra/80 mt-3 max-w-lg">
              Skontaktuj się – odpowiem na pytania techniczne i przygotuję bezpłatną wycenę.
            </p>
          </div>
          <Link
            href="/kontakt?wycena=1"
            className="inline-flex items-center gap-2 bg-on-iskra text-iskra font-mono text-[13px] font-medium uppercase tracking-widest px-8 py-4 rounded-full hover:opacity-90 transition-opacity flex-shrink-0"
          >
            Napisz do mnie <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
