import { Zap, ShieldCheck, Ruler, Cpu, Home, Wrench } from 'lucide-react'

export const philosophy = [
  {
    icon: Ruler,
    title: 'Logika połączeń',
    body: 'Czytelny schemat to fundament bezpieczeństwa. Projektujemy rozdzielnie tak, by ich serwisowanie było intuicyjne nawet po dekadach eksploatacji.',
  },
  {
    icon: ShieldCheck,
    title: 'Bezpieczeństwo czynne',
    body: 'Dobór zabezpieczeń, redundancja obwodów i właściwe przekroje przewodów to nie opcja – to standard, który chroni Twój dom i majątek.',
  },
  {
    icon: Zap,
    title: 'Estetyka wykonania',
    body: 'Przewody prowadzone w pionach i poziomach, równe odstępy, profesjonalne etykiety. To, co ukryte w ścianach, świadczy o jakości całej inwestycji.',
  },
]

export const services = [
  { icon: Zap,   title: 'Elektryka',   desc: 'Instalacje w budownictwie mieszkaniowym i komercyjnym' },
  { icon: Cpu,   title: 'Automatyka',  desc: 'Systemy zarządzania budynkiem KNX, Grenton, Loxone' },
  { icon: Home,  title: 'Smart Home',  desc: 'Inteligentne oświetlenie, ogrzewanie i bezpieczeństwo' },
  { icon: Wrench,title: 'Serwis',      desc: 'Diagnostyka i utrzymanie instalacji elektrycznych' },
]

export const projects = [
  {
    cat: 'SMART_HOME',
    year: '2024',
    title: 'Willa Minimalistyczna – Białystok',
    span: 'col-span-2 row-span-2',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
    id: 'blt-024',
  },
  {
    cat: 'AUTOMATYKA',
    year: '2024',
    title: 'Centrum Logistyczne Białystok',
    span: 'col-span-2 row-span-1',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80',
    id: 'blt-021',
  },
  {
    cat: 'INSTALACJE',
    year: '2023',
    title: 'Apartamenty Śródmieście',
    span: 'col-span-1 row-span-1',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    id: 'blt-019',
  },
]

export const stats = [
  { value: '8+',   label: 'lat doświadczenia' },
  { value: '120+', label: 'ukończonych projektów' },
  { value: '100%', label: 'zgodność z normami' },
  { value: '24h',  label: 'czas reakcji serwisowej' },
]
