---
name: Industrial Precision
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d1c5ae'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9a907b'
  outline-variant: '#4e4634'
  surface-tint: '#eec13c'
  primary: '#ffe7af'
  on-primary: '#3d2e00'
  primary-container: '#f5c842'
  on-primary-container: '#6c5400'
  inverse-primary: '#755b00'
  secondary: '#ffb94c'
  on-secondary: '#442b00'
  secondary-container: '#d28d00'
  on-secondary-container: '#482e00'
  tertiary: '#c8efff'
  on-tertiary: '#003543'
  tertiary-container: '#6adbff'
  on-tertiary-container: '#005f75'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe08f'
  primary-fixed-dim: '#eec13c'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#584400'
  secondary-fixed: '#ffddb2'
  secondary-fixed-dim: '#ffb94c'
  on-secondary-fixed: '#291800'
  on-secondary-fixed-variant: '#624000'
  tertiary-fixed: '#b5ebff'
  tertiary-fixed-dim: '#62d4f8'
  on-tertiary-fixed: '#001f28'
  on-tertiary-fixed-variant: '#004e60'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  technical-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  technical-xs:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  section-gap: 120px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is built on the philosophy of **Industrial Minimalism**. It targets high-end clientele in the electrical and automation sectors, evoking a sense of absolute technical precision, reliability, and expert-level authority. 

The aesthetic combines the "less but better" ethos with the raw, functional power of industrial engineering. It utilizes high-contrast visuals, generous whitespace (negative space), and fluid, Apple-inspired motion to transform complex technical information into a premium, accessible experience. The emotional response is one of confidence—this is a system designed by experts, for experts.

## Colors

The palette is strictly functional and high-contrast, optimized for clarity in professional environments.

- **Background (#111111):** A deep, matte charcoal that provides a solid foundation for high-contrast typography and reduces eye strain.
- **Iskra Yellow (#F5C842):** The primary action color. It signifies energy, caution, and precision. It is used sparingly for critical UI elements and accents.
- **Iskra Hover (#E8A020):** A deeper, metallic gold used exclusively for interactive states to provide tactile feedback.
- **Typography:** Primary information is pure white (#FFFFFF) for maximum legibility, while metadata and secondary descriptions are muted at 55% opacity to establish clear hierarchy.

## Typography

Typography in this design system is divided between human-centric communication and technical data representation.

- **Headlines (Nagłówki):** Set in **Inter ExtraBold** with a tight letter spacing of -0.02em. This creates a "blocky," structural feel reminiscent of architectural blueprints. Use for section titles and value propositions.
- **Body (Treść):** Set in **Inter Regular**. It provides a neutral, modern vehicle for narrative content.
- **Technical Specs (Dane techniczne):** Set in **JetBrains Mono**. This monospaced typeface is used for all "hard" data—serial numbers, measurements, electrical parameters, and labels. It reinforces the peer-to-peer expert tone.

*Note: Ensure all Polish diacritics (ą, ć, ę, ł, ń, ó, ś, ź, ż) maintain consistent weight with the Latin characters.*

## Layout & Spacing

The layout follows a strict **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

- **The Signature Line:** Every major section must begin with a 2px horizontal line in `primary_color_hex` (#F5C842). This line acts as a structural anchor, guiding the eye and separating phases of information.
- **Rhythm:** Spacing follows a base-8 increment. Use large vertical gaps (120px+) between sections to allow the high-end imagery and technical specs to "breathe."
- **Alignment:** All technical labels (JetBrains Mono) should align strictly to the left edge of the grid or the signature line to maintain the industrial aesthetic.

## Elevation & Depth

This design system avoids traditional shadows in favor of **Tonal Layers** and **High-Contrast Outlines**.

- **Surfaces:** Use `#1A1A1A` for cards or containers sitting on the `#111111` background. This subtle shift creates depth without relying on skeuomorphic shadows.
- **Dividers:** Use 1px borders in `rgba(255, 255, 255, 0.1)` for secondary separation.
- **Motion:** Depth is conveyed through movement. Elements should use a "Massive" ease (cubic-bezier(0.4, 0, 0, 1)) to slide or fade into view, mimicking the precision of high-end machinery.

## Shapes

The shape language is a juxtaposition of sharp, architectural containers and ergonomic, pill-shaped interactive elements.

- **Containers:** Section backgrounds and large image containers should remain sharp (0px radius) to reflect industrial structural beams.
- **Interactive Elements:** Buttons and tags must be **Pill-shaped** (Full rounding). This provides a clear visual affordance for "touchable" or "actionable" items, contrasting against the rigid grid of the content.

## Components

### Buttons (Przyciski)
- **Style:** Pill-shaped, no border.
- **Color:** Background #F5C842, Text #111111.
- **Interaction:** 180ms linear transition to #E8A020 on hover/active.
- **Typography:** Technical-sm (JetBrains Mono), Uppercase.

### Input Fields (Pola wprowadzania)
- **Style:** Underline only (2px), using `rgba(255,255,255,0.2)`. 
- **Focus State:** Underline transitions to #F5C842.
- **Label:** Technical-xs, positioned above the field, always visible.

### Cards (Karty Projektowe)
- **Background:** #1A1A1A.
- **Corner Radius:** 0px (Sharp).
- **Detailing:** A technical spec (e.g., "REF_NO: 8842") in the top right corner using JetBrains Mono.

### Status Indicators (Statusy)
- Small 8px circles. Use #F5C842 for active/live systems and Text Secondary for standby.

### Section Headers
- Must include the 2px horizontal Iskra Yellow line, followed by a Technical-xs label (e.g., "SECTION_01"), followed by the Headline-lg.