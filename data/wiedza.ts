import { Calculator, FileText, CheckSquare } from 'lucide-react'

export interface Article {
  id: string
  category: string
  title: string
  excerpt: string
  readTime: string
  date: string
  img: string
  featured?: boolean
}

export const WIEDZA_FILTERS = [
  { key: 'wszystko',       label: 'Wszystko' },
  { key: 'smart-home',     label: 'Smart Home' },
  { key: 'instalacje',     label: 'Instalacje' },
  { key: 'automatyka',     label: 'Automatyka' },
  { key: 'bezpieczenstwo', label: 'Bezpieczeństwo' },
]

export const ARTICLES: Article[] = [
  {
    id: 'art-001',
    category: 'smart-home',
    title: '"Każdy obwód powinien mieć własne zabezpieczenie" – jak to dobrać prawidłowo?',
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

export const TOOLS = [
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
