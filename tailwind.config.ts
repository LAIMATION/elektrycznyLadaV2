import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-low': 'var(--surface-low)',
        'surface-container': 'var(--surface-container)',
        'surface-high': 'var(--surface-high)',
        'on-bg': 'var(--on-bg)',
        'on-variant': 'var(--on-variant)',
        outline: 'var(--outline)',
        'outline-variant': 'var(--outline-variant)',
        primary: 'var(--primary)',
        iskra: '#F5C842',
        'iskra-hover': '#E8A020',
        'on-iskra': '#111111',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display-lg': ['clamp(40px,6vw,72px)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
        'headline-lg': ['clamp(28px,4vw,44px)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '800' }],
        'headline-md': ['clamp(20px,2.5vw,26px)', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],
        'body-lg': ['clamp(15px,2.2vw,18px)', { lineHeight: '1.65', fontWeight: '400' }],
        'body-md': ['clamp(13px,1.8vw,16px)', { lineHeight: '1.65', fontWeight: '400' }],
        'mono-sm': ['14px', { lineHeight: '1.4', letterSpacing: '0.04em', fontWeight: '500' }],
        'mono-xs': ['12px', { lineHeight: '1.4', letterSpacing: '0.06em', fontWeight: '500' }],
      },
      spacing: {
        section: '120px',
        'section-sm': '80px',
        gutter: '24px',
      },
      transitionTimingFunction: {
        massive: 'cubic-bezier(0.4, 0, 0, 1)',
      },
      keyframes: {
        pulse_dot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.85)' },
        },
        reveal_up: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        pulse_dot: 'pulse_dot 2s ease-in-out infinite',
        reveal_up: 'reveal_up 0.6s cubic-bezier(0.4,0,0,1) forwards',
      },
    },
  },
  plugins: [],
}

export default config
