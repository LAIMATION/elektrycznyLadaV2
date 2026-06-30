export type CategoryKey = 'default' | 'new' | 'existing' | 'emergency' | 'quote' | 'other'

export const CATEGORIES: { key: CategoryKey; label: string; placeholder: string }[] = [
  {
    key: 'default',
    label: 'Domyślna',
    placeholder: 'Opisz swój projekt lub zadaj pytanie...',
  },
  {
    key: 'new',
    label: 'Nowa instalacja',
    placeholder: 'Np. Planuję nową instalację elektryczną w domu 180 m² – budowa w stanie deweloperskim. Proszę o kontakt i wycenę...',
  },
  {
    key: 'existing',
    label: 'Istniejąca instalacja',
    placeholder: 'Np. Mam instalację z lat 90. i chcę ją zmodernizować. Budynek mieszkalny, 3 pokoje, Białystok. Proszę o informację o zakresie prac...',
  },
  {
    key: 'emergency',
    label: 'Awaria',
    placeholder: 'Np. Wybiły bezpieczniki i nie można ich włączyć z powrotem. Adres: ul. Lipowa 5, Białystok. Proszę o pilny kontakt...',
  },
  {
    key: 'quote',
    label: 'Wycena',
    placeholder: 'Dzień dobry, proszę o przygotowanie darmowej wyceny dla mojego projektu...',
  },
  {
    key: 'other',
    label: 'Inne',
    placeholder: 'Wpisz swoją wiadomość...',
  },
]

export const LIMITS = { name: 60, phone: 20, email: 100, message: 600 }

export const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    alt: 'Rozdzielnia elektryczna – realizacja elektrycznyŁada',
  },
  {
    src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
    alt: 'Instalacja przemysłowa – Białystok',
  },
  {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    alt: 'Kable i połączenia – precyzja wykonania',
  },
]
