export interface Project {
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

export const FILTERS = [
  { key: 'wszystko',    label: 'Wszystko' },
  { key: 'smart-home',  label: 'Smart Home' },
  { key: 'instalacje',  label: 'Instalacje' },
  { key: 'automatyka',  label: 'Automatyka' },
  { key: 'przemyslowe', label: 'Przemysłowe' },
]

export const PROJECTS: Project[] = [
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
    desc: 'Modernizacja instalacji elektrycznej biurowca klasy A. Wymiana rozdzielnicy głównej, UPS 80 kVA i systemu BMS.',
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
