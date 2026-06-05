---
name: SparkSwitch Lite
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f21'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#bbc9cf'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#313032'
  outline: '#859399'
  outline-variant: '#3c494e'
  surface-tint: '#47d6ff'
  primary: '#a5e7ff'
  on-primary: '#003543'
  primary-container: '#00d2ff'
  on-primary-container: '#00566a'
  inverse-primary: '#00677f'
  secondary: '#ffb1c4'
  on-secondary: '#65002e'
  secondary-container: '#ff4a8d'
  on-secondary-container: '#590028'
  tertiary: '#00fca8'
  on-tertiary: '#003822'
  tertiary-container: '#00dc92'
  on-tertiary-container: '#005b3a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b6ebff'
  primary-fixed-dim: '#47d6ff'
  on-primary-fixed: '#001f28'
  on-primary-fixed-variant: '#004e60'
  secondary-fixed: '#ffd9e1'
  secondary-fixed-dim: '#ffb1c4'
  on-secondary-fixed: '#3f001a'
  on-secondary-fixed-variant: '#8f0044'
  tertiary-fixed: '#4dffb1'
  tertiary-fixed-dim: '#00e296'
  on-tertiary-fixed: '#002112'
  on-tertiary-fixed-variant: '#005233'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-sm:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.1em
  label-score:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  playfield-margin: 64px
  hud-padding: 12px
---

## Brand & Style
The design system is built on a **Cyber-Minimalist** aesthetic, prioritizing high-velocity gameplay and instant visual recognition. The brand personality is energetic, precise, and electric, aimed at competitive players who value reflex-driven mechanics. 

The UI utilizes a "Void-Space" strategy: a deep, near-black foundation that allows neon-infused accents to pop with maximum vibrance. By merging the raw utility of **Brutalism** (sharp borders, technical fonts) with the atmospheric depth of **Glassmorphism**, the design system creates a focused, high-stakes environment where the UI never competes with the game's timing rails.

## Colors
The palette is dominated by the **Deep Void (#0a0a0c)** background to eliminate peripheral distraction. 
- **Electric Blue (#00d2ff):** Represents the Left Rail/State A. It should carry a glow effect to signify "Active" status.
- **Neon Pink (#ff007f):** Represents the Right Rail/State B. Used for high-contrast tension and switch points.
- **Cyber Mint (#00ffaa):** Reserved exclusively for "Perfect" timing hits and success states.
- **Neutrals:** Use a tiered gray system for the HUD and background elements to maintain hierarchy without breaking the dark-mode immersion.

## Typography
This design system employs a dual-font approach. **Geist** provides a clean, modern, and highly legible foundation for headings and general interface text, while **JetBrains Mono** is utilized for technical readouts, scores, and timer elements to evoke a developer-centric, "glitch-tech" feel.

Large display sizes use tight letter-spacing to feel "heavy" and impactful. Labels use wide tracking and uppercase transformations to ensure they are readable even at high game speeds.

## Layout & Spacing
The layout follows a **Safe-Zone Model**. The central playfield is buffered by a generous `playfield-margin` (64px+) to prevent UI interference with player peripheral vision. 

The **HUD (Heads-Up Display)** is positioned at the top or corners using a compact, fixed-grid layout. Spacing follows a 4px base unit. On mobile, the UI reflows to a vertical stack where the playfield occupies the center 60% of the screen, with control zones anchored to the bottom thumb-reach areas.

## Elevation & Depth
Depth is achieved through **Luminous Layering** rather than traditional shadows:
- **Level 0 (Base):** Deep Void (#0a0a0c).
- **Level 1 (Panels):** Semi-transparent surfaces (80% opacity) with a 12px Backdrop Blur and a 1px "Inner Glow" border in a muted primary color.
- **Level 2 (Active Elements):** Elements "hover" using an outer neon bloom (8px-16px blur) in the primary or secondary accent color.
- **Overlays:** Use a full-screen backdrop blur (20px) to pull focus entirely onto the active modal or pause screen.

## Shapes
The design system utilizes **Sharp (0px)** corners for all structural components, including containers, buttons, and rails. This reinforces the "Cyber-Minimalist" and "Precision" themes. Occasional 45-degree chamfered corners may be used on buttons to create a custom "tech-cut" appearance, but rounded corners are strictly avoided to maintain the aggressive, high-energy aesthetic.

## Components
- **Primary Action Buttons:** Sharp 1px borders in Electric Blue. On hover or press, the button fills with the primary color and emits a matching outer glow. Text remains white or switches to black for high contrast.
- **The Rails:** Two vertical or horizontal lines with a constant 2px width. The "Active" rail pulsates slightly using a CSS brightness filter.
- **HUD Chips:** Compact rectangles with a semi-transparent background. They use JetBrains Mono for all numeric data.
- **Timing Indicator:** A sharp diamond or vertical bar that changes color (Blue to Pink) instantly upon player input.
- **Modals/Cards:** Feature a 1px border on all sides. The header of the card should have a 4px top-border in the secondary accent color (Neon Pink) to differentiate from the base UI.
- **Score Multiplier:** Appears as floating text near the playfield, using a slight vertical motion and high-contrast "Perfect" mint color when triggered.