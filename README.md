# elektrycznyŁada – Strona internetowa

Next.js 15 / Tailwind CSS 3 / Framer Motion – responsywna strona dla marki elektrycznyŁada z Białegostoku.

## Wymagania

- **Node.js 18+** – [pobierz tutaj](https://nodejs.org/)
- npm lub yarn

## Uruchomienie projektu

```bash
# 1. Przejdź do katalogu projektu
cd elektrycznyLadaWeb

# 2. Zainstaluj zależności
npm install

# 3. Skonfiguruj zmienne środowiskowe (patrz niżej)
# Edytuj plik .env.local

# 4. Uruchom serwer deweloperski
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

## Konfiguracja e-mail (formularz kontaktowy)

Edytuj plik `.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=elektryczny.lada@gmail.com
SMTP_PASS=twoje_haslo_aplikacji_gmail
CONTACT_EMAIL=elektryczny.lada@gmail.com
```

> **Gmail App Password**: Przejdź do [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords), wygeneruj hasło aplikacji i wpisz je w `SMTP_PASS`.

## Struktura projektu

```
elektrycznyLadaWeb/
├── app/
│   ├── layout.tsx          ← Root layout (Navbar, Footer, ThemeProvider)
│   ├── globals.css         ← CSS variables (light/dark), klasy bazowe
│   ├── page.tsx            ← Strona główna
│   ├── oferta/page.tsx     ← Strona Oferty
│   ├── realizacje/         ← Portfolio z filtrowaniem
│   ├── wiedza/             ← Blog + narzędzia
│   ├── kontakt/            ← Formularz kontaktowy
│   └── api/contact/        ← API route do wysyłki e-maili
├── components/
│   ├── layout/             ← Navbar, Footer, MobileTabBar
│   ├── providers/          ← ThemeProvider (next-themes)
│   └── ui/                 ← ThemeToggle, SectionHeader, StatusIndicator, AnimateIn, FilterBar
├── tailwind.config.ts      ← Tokeny kolorów z plików DESIGN_*.md
└── .env.local              ← Konfiguracja SMTP (nie commitować!)
```

## System motywów

Kolory są zdefiniowane jako zmienne CSS w `globals.css`:
- `:root` → tryb jasny (DESIGN_LIGHT_MODE.md)
- `.dark` → tryb ciemny (DESIGN_DARK_MODE.md)
- Przełączanie: przycisk w Navbar lub automatycznie z systemu OS
- Iskra Yellow `#F5C842` – kolor akcentu w obu motywach

## Strony

| Ścieżka | Opis |
|---------|------|
| `/` | Strona główna: Hero, Filozofia, Portfolio, CTA |
| `/oferta` | Usługi: Elektryka, Automatyka, Smart Home, Serwis |
| `/realizacje` | Portfolio z filtrowaniem kategorii |
| `/wiedza` | Artykuły techniczne + narzędzia inżynierskie |
| `/kontakt` | Formularz + dane kontaktowe |
| `/kontakt?wycena=1` | Kontakt z auto-wypełnionym polem wyceny |

## Funkcje UX

- **Darmowa Wycena** → przechodzi na `/kontakt?wycena=1` i automatycznie wypełnia pole wiadomości
- **Filtrowanie** w Realizacje i Wiedza – animowane `AnimatePresence` (Framer Motion)
- **Mobile Tap Bar** – dolny pasek nawigacyjny na urządzeniach mobilnych (md:hidden)
- **Dual Theme** – jasny/ciemny z przyciskiem toggle lub auto z systemu
- **Status OPERACJE_AKTYWNE** – pulsująca dioda w stopce ze wskaźnikiem stabilności sieci

## Build produkcyjny

```bash
npm run build
npm start
```

## SEO

Każda strona ma zoptymalizowane metadane z kluczami:
- `elektryk Białystok`, `instalacje elektryczne Białystok`
- `smart home Białystok`, `automatyka budynkowa Podlasie`
- Open Graph dla mediów społecznościowych
