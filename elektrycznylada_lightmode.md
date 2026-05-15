---
name: Industrial Precision
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4e4634'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#7f7662'
  outline-variant: '#d1c5ae'
  surface-tint: '#755b00'
  primary: '#755b00'
  on-primary: '#ffffff'
  primary-container: '#f5c842'
  on-primary-container: '#6c5400'
  inverse-primary: '#eec13c'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#5d5f5f'
  on-tertiary: '#ffffff'
  tertiary-container: '#cdcdcd'
  on-tertiary-container: '#555757'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe08f'
  primary-fixed-dim: '#eec13c'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#584400'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.4'
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
  label-mono-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.2'
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  container-max-width: 1280px
---

## Brand & Style

The design system embodies "Industrial Minimalism"—a philosophy that prioritizes technical clarity, mechanical precision, and an "expert without ego" aesthetic. Built for **elektrycznyŁada**, the UI functions like a high-performance instrument cluster: every element has a functional purpose, and decorative flair is stripped away in favor of high-legibility and structural integrity.

The style is characterized by:
- **Absolute Flatness:** No shadows, gradients, or bevels. Depth is achieved through tonal shifts and technical borders.
- **High Contrast:** A stark white environment punctuated by dense charcoal text and high-visibility Iskra Yellow highlights.
- **Grid-Centric:** A rigid adherence to alignment that evokes blueprints and engineering schematics.
- **Information Density:** Clean, structured data presentation that respects the user's intelligence and need for technical specs.

## Colors

The palette is rooted in industrial utility. 

- **Primary Surface (#FDFDFD):** A pristine, high-contrast white that serves as the canvas for all technical data.
- **Secondary Surface (#F4F4F4):** A functional light grey used to define "wells," sidebars, or nested technical containers.
- **Iskra Yellow (#F5C842):** The singular "signal" color. It is reserved for primary actions, active states, and structural dividers.
- **Ink (#111111):** A deep charcoal for headlines and heavy borders, ensuring maximum readability.
- **Body Text:** A secondary grey scale (approx. 70% contrast) is used for long-form body copy to prevent visual fatigue on the high-contrast background.

## Typography

Typography is used as a structural element. 

- **Headlines:** Set in **Inter ExtraBold** with tight tracking (-0.02em) to create dense, impactful blocks of text. This mirrors the heavy branding found on industrial machinery.
- **Body:** Set in **Inter Regular** for high readability in technical documentation.
- **Technical Specs/Labels:** All data points, measurements, and labels use **JetBrains Mono**. This monospaced choice ensures that numerical data aligns perfectly in tables and lists, reinforcing the "precision" narrative.

## Layout & Spacing

The layout follows a **Rigid Grid** model based on a 4px baseline unit. 

- **The Divider Signature:** Every major section must begin with a 2px tall horizontal rule in **Iskra Yellow (#F5C842)**. This rule spans the full width of the container or the column it occupies.
- **Grid:** A 12-column grid is used for desktop with 24px gutters. Elements should be "snapped" to the grid with zero margin between bordering technical containers to emphasize a solid, mechanical build.
- **Alignment:** Consistent left-alignment is mandatory for all text blocks to maintain the vertical "axis" of the design.

## Elevation & Depth

This design system uses **Zero Elevation**. 

- **Flat Hierarchy:** There are no shadows. Depth is communicated strictly through the use of 1px and 2px solid borders (#111111) and tonal background changes (#F4F4F4).
- **Layering:** When an element needs to feel "above" another (like a dropdown or modal), it uses a thick 2px black border and a white fill, creating a "cut-out" effect rather than a floating effect.
- **Dividers:** Use horizontal Iskra Yellow lines to denote the hierarchy of information rather than using shadows to lift content.

## Shapes

The shape language is **Strictly Square**. 

- **Corner Radius:** All components—buttons, inputs, cards, and containers—have a 0px border radius. 
- **Consistency:** Round shapes are only permitted for literal representations of circular hardware (e.g., a dial or a charging port icon). All UI containers must maintain sharp, 90-degree angles to reflect industrial machining.

## Components

### Buttons
- **Primary:** Solid Iskra Yellow (#F5C842) background, black (#111111) JetBrains Mono bold text. 0px radius.
- **Secondary:** Transparent background, 2px black border. 
- **State:** On hover, primary buttons shift to a slightly darker yellow or add a "thick" black bottom border (3px) to simulate a physical toggle.

### Technical Input Fields
- **Style:** 1px black border, white background. 
- **Label:** JetBrains Mono, uppercase, small.
- **Focus:** The 1px border becomes a 2px Iskra Yellow border. No outer glow.

### Cards & Containers
- **Style:** No shadow. 1px light grey border or a simple background fill of #F4F4F4.
- **Header:** Each card starts with the signature 2px Iskra Yellow horizontal divider at the top.

### Technical Lists / Data Tables
- Use JetBrains Mono for all cell content.
- Zebra striping using #F4F4F4.
- High-contrast headers with a solid black background and white text for maximum "expert" tone.

### Chips / Status Tags
- **Style:** Rectangular, JetBrains Mono text.
- **Colors:** Neutral tags use a light grey fill. Actionable tags use an Iskra Yellow outline.