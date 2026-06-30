import { Zap, Cpu, Home, Wrench, ShieldCheck, Award, Clock } from 'lucide-react'

export const services = [
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
    img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
  },
]

export const guarantee = [
  {
    icon: ShieldCheck,
    title: 'Gwarancja materiałów',
    desc: '5 lat gwarancji na zastosowane materiały renomowanych producentów.',
  },
  {
    icon: Award,
    title: 'Gwarancja wykonania',
    desc: '3 lata gwarancji na jakość wykonania wszystkich prac instalacyjnych.',
  },
  {
    icon: Clock,
    title: 'Serwis gwarancyjny',
    desc: 'Bezpłatny serwis gwarancyjny z czasem reakcji do 24 godzin w dni robocze.',
  },
]

export const process = [
  { step: '01', title: 'Konsultacja i pomiary',  desc: 'Bezpłatna wizja lokalna, pomiary i rozmowa o Twoich potrzebach.' },
  { step: '02', title: 'Projekt i wycena',        desc: 'Schemat elektryczny, lista materiałów i szczegółowy kosztorys w ciągu 48h.' },
  { step: '03', title: 'Realizacja',              desc: 'Prace instalacyjne zgodnie z harmonogramem i normami PN-HD 60364.' },
  { step: '04', title: 'Odbiór i dokumentacja',   desc: 'Pomiary kontrolne, protokoły odbioru i dokumentacja powykonawcza.' },
]
