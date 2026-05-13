'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimateIn, StaggerContainer, StaggerItem } from '@/components/ui/AnimateIn'
import { FilterBar } from '@/components/ui/FilterBar'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ArrowRight, Clock, Calculator, FileText, CheckSquare } from 'lucide-react'

const FILTERS = [
  { key: 'wszystko', label: 'Wszystko' },
  { key: 'smart-home', label: 'Smart Home' },
  { key: 'instalacje', label: 'Instalacje' },
  { key: 'automatyka', label: 'Automatyka' },
  { key: 'bezpieczenstwo', label: 'Bezpieczeństwo' },
]

interface Article {
  id: string
  category: string
  title: string
  excerpt: string
  readTime: string
  date: string
  img: string
  featured?: boolean
}

const ARTICLES: Article[] = [
  {
    id: 'art-001',
    category: 'smart-home',
    title: '"Ważę zabezpieczyć nadmiarowo-prądowe każdego obwodu osobno" – jak to zrobić prawidłowo?',
    excerpt:
      'Przeciążenie obwodu to jedna z częstszych przyczyn pożarów instalacji. Tłumaczymy, jak dobrać wyłączniki nadmiarowo-prądowe zgodnie z normą PN-HD 60364-4-41.',
    readTime: '8 min',
    date: '2025-04-12',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    featured: true,
  },
  {
    id: 'art-002',
    category: 'smart-home',
    title: '"Instalacja Smart Home to tylko gadżet" – obalamy mit precyzją danych',
    excerpt:
      'Wyliczamy rzeczywiste oszczędności energii z systemu KNX dla domu 200 m². Liczby zaskakują nawet sceptyków.',
    readTime: '12 min',
    date: '2025-03-28',
    img: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
    featured: true,
  },
  {
    id: 'art-003',
    category: 'bezpieczenstwo',
    title: 'Bezpieczeństwo od pierwszej wtyczki: jak chronić instalację przed przepięciami',
    excerpt:
      'Ograniczniki przepięć klasy I, II i III – kiedy stosować i jak dobrać parametry dla Twojego budynku.',
    readTime: '6 min',
    date: '2025-03-15',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    id: 'art-004',
    category: 'automatyka',
    title: 'Profesjonalna automatyka DALI oznacza naprawdę redukcję kosztów o 30%',
    excerpt:
      'Porównujemy systemy DALI-2 vs tradycyjne przekaźniki. Analiza TCO dla biurowca 1000 m² z uwzględnieniem pracy konserwatorskiej.',
    readTime: '10 min',
    date: '2025-02-20',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
  },
  {
    id: 'art-005',
    category: 'instalacje',
    title: 'Dobór przekrojów przewodów w instalacjach mieszkaniowych krok po kroku',
    excerpt:
      'Tablice, wzory i praktyczne przykłady. Nie przepalaj pieniędzy na przewymiarowane kable ani nie narażaj bezpieczeństwa na niedowymiarowane.',
    readTime: '15 min',
    date: '2025-02-05',
    img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
  },
  {
    id: 'art-006',
    category: 'instalacje',
    title: 'Schemat rozdzielnicy mieszkaniowej – co musi się znaleźć w każdym projekcie',
    excerpt:
      'Omówimy obowiązkowe elementy schematu elektrycznego rozdzielnicy: od opisu obwodów po wymagania dokumentacyjne do UDT.',
    readTime: '9 min',
    date: '2025-01-18',
    img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80',
  },
]

const TOOLS = [
  {
    icon: Calculator,
    title: 'Kalkulator Obciążeń',
    desc: 'Oblicz maksymalne obciążenie obwodów na podstawie liczby i mocy odbiorników.',
    tag: 'NARZĘDZIE_01',
    status: 'Dostępny',
  },
  {
    icon: FileText,
    title: 'Schematy Rozdzielni',
    desc: 'Biblioteka typowych schematów rozdzielnic mieszkaniowych i przemysłowych do pobrania.',
    tag: 'NARZĘDZIE_02',
    status: 'Dostępny',
  },
  {
    icon: CheckSquare,
    title: 'Checklista Odbioru',
    desc: 'Kompletna lista kontrolna do odbioru instalacji elektrycznej zgodna z normami PN-HD.',
    tag: 'NARZĘDZIE_03',
    status: 'Dostępny',
  },
]

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
        <AnimateIn>
          <div className="signature-line w-24" />
          <p className="mono text-mono-xs uppercase tracking-widest text-primary mt-4 mb-4">
            KNOWLEDGE_BASE // TECH_ARTICLES
          </p>
        </AnimateIn>
        <AnimateIn delay={0.08}>
          <h1 className="font-inter font-extrabold text-display-lg text-on-bg leading-none tracking-tight mb-6 max-w-4xl">
            Ekspercka wiedza<br />o systemach elektrycznych<br />i automatyce.
          </h1>
        </AnimateIn>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="mono text-[10px] uppercase tracking-widest border border-iskra text-iskra px-2.5 py-1 rounded-full">
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
        <AnimateIn className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="signature-line w-16 mb-0" style={{ marginBottom: 0 }} />
            <p className="mono text-mono-xs uppercase tracking-widest text-primary mt-3">
              ARCHIWUM_ARTYKUŁÓW
            </p>
          </div>
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
              (article) => (
                <article key={article.id} className="card-industrial overflow-hidden group">
                  <div className="relative h-44 overflow-hidden">
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
                </article>
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
              label="TOOLS_INDEX // SECTION_03"
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
                  <p className="mono text-mono-xs text-on-variant uppercase tracking-widest mb-3">{tag}</p>
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
            <p className="mono text-mono-xs uppercase tracking-widest text-on-iskra/70 mb-3">
              NASTĘPNY_KROK
            </p>
            <h2 className="font-inter font-extrabold text-headline-lg text-on-iskra tracking-tight leading-tight">
              Masz projekt do omówienia?
            </h2>
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
