---
name: LogAGood Premium Logistics
colors:
  surface: "#f7f9fb"
  surface-dim: "#d8dadc"
  surface-bright: "#f7f9fb"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f2f4f6"
  surface-container: "#eceef0"
  surface-container-high: "#e6e8ea"
  surface-container-highest: "#e0e3e5"
  on-surface: "#191c1e"
  on-surface-variant: "#404942"
  inverse-surface: "#2d3133"
  inverse-on-surface: "#eff1f3"
  outline: "#707972"
  outline-variant: "#bfc9c0"
  surface-tint: "#226b48"
  primary: "#004328"
  on-primary: "#ffffff"
  primary-container: "#0d5c3b"
  on-primary-container: "#8ad2a8"
  inverse-primary: "#8ed6ac"
  secondary: "#436557"
  on-secondary: "#ffffff"
  secondary-container: "#c2e8d5"
  on-secondary-container: "#476a5b"
  tertiary: "#00431a"
  on-tertiary: "#ffffff"
  tertiary-container: "#005d27"
  on-tertiary-container: "#45dd72"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#a9f2c7"
  primary-fixed-dim: "#8ed6ac"
  on-primary-fixed: "#002112"
  on-primary-fixed-variant: "#005233"
  secondary-fixed: "#c5ebd8"
  secondary-fixed-dim: "#a9cfbd"
  on-secondary-fixed: "#002116"
  on-secondary-fixed-variant: "#2b4d40"
  tertiary-fixed: "#6bff8f"
  tertiary-fixed-dim: "#4ae176"
  on-tertiary-fixed: "#002109"
  on-tertiary-fixed-variant: "#005321"
  background: "#f7f9fb"
  on-background: "#191c1e"
  surface-variant: "#e0e3e5"
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: "600"
    lineHeight: "1.1"
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: "600"
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: "600"
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: "500"
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "500"
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "600"
    lineHeight: 12px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is engineered to evoke a sense of absolute precision, reliability, and high-end modernism. It targets a sophisticated logistics market that demands the clarity of Notion, the technical refinement of Vercel, and the polished trust of Stripe.

The aesthetic is **Modern Minimalist with Tactile Depth**. It utilizes expansive whitespace to reduce cognitive load in complex data environments, paired with "hyper-polished" surfaces. High-end visual signals include subtle linear gradients on primary actions and a sophisticated layering system where cards feel like physical objects resting on a soft, airy foundation. The emotional response is one of calm control over complex global movements.

## Colors

The palette is anchored in a "Forest Professional" range.

- **Primary Green (#0D5C3B):** Used for key brand moments, primary buttons, and active states. It represents stability.
- **Dark Sidebar (#062B1F):** A deep, near-black evergreen used for the navigation core to provide high-contrast grounding.
- **Accent Green (#22C55E):** Used sparingly for success states and highlights to provide a "digital glow."
- **Background & Surfaces:** The main canvas is **#F8FAFC**, a cool off-white that allows white cards to pop.
- **Semantic Accents:** Statuses use vibrant, high-legibility shades of Amber (Pending), Blue (Transit), and Emerald (Delivered).

## Typography

This design system relies exclusively on **Inter** to achieve a systematic, utilitarian, yet premium look. The hierarchy is defined by tight tracking (letter-spacing) on larger headings to mimic high-end editorial design, and generous leading (line-height) for body text to ensure readability in data-heavy logistics manifests.

- **Headlines:** Use Semi-Bold (600) for clear section anchoring.
- **Body:** Use Regular (400) for all descriptive content.
- **Data Labels:** Use Medium (500) or Semi-Bold (600) at smaller sizes (12-14px) for field headers and UI metadata.

## Layout & Spacing

The layout is built on a **strict 8px grid system**. All padding, margins, and component heights must be multiples of 8 (or 4 for micro-adjustments).

- **Grid:** A 12-column fluid grid for desktop with 24px gutters.
- **Sidebars:** Fixed width at 260px for desktop.
- **Containers:** Content is housed in "Premium Cards" with consistent internal padding of 24px (`lg`).
- **Responsive Behavior:** On tablet, gutters reduce to 16px. On mobile, the layout collapses to a single column with 16px side margins.

## Elevation & Depth

This design system uses a **Tonal & Shadow Layering** approach. Depth is not communicated through heavy colors but through light and shadow.

- **Level 0 (Base):** Background color #F8FAFC.
- **Level 1 (Cards/Content):** White (#FFFFFF) surfaces. They use a "Premium Soft Shadow": `0px 4px 20px rgba(0, 0, 0, 0.03), 0px 1px 2px rgba(0, 0, 0, 0.02)`.
- **Level 2 (Hover/Active):** Slightly deeper shadow for interactive elements: `0px 10px 30px rgba(0, 0, 0, 0.06)`.
- **Borders:** All cards and inputs feature a subtle 1px border (#E5E7EB) to maintain definition against the light background.

## Shapes

The shape language is "Optimistically Rounded."

- **Primary Radius:** Components like cards, modals, and large containers use a **18px to 20px** corner radius to soften the technical nature of logistics data.
- **Micro Radius:** Buttons and input fields use a **8px** radius for a tighter, more functional appearance.
- **Interactive Elements:** Checkboxes and radio buttons maintain a soft 4px or fully circular profile respectively.

## Components

- **Premium Cards:** Pure white backgrounds, 18px corner radius, and the "Level 1" soft shadow. Header areas within cards should have a subtle bottom border (#E5E7EB).
- **Sidebar Navigation:** Use the Dark Sidebar color (#062B1F). Nav items feature 20px outline icons with 1.5pt stroke weight. Active states use a subtle green glow or a left-aligned 3px indicator in #22C55E.
- **Buttons:**
  - _Primary:_ #0D5C3B background with a very subtle top-to-bottom gradient (+5% brightness at top).
  - _Secondary:_ White background with #E5E7EB border.
- **Data Tables:** Modern, "borderless" look. Rows are separated by 1px light gray lines. No vertical borders. Header row uses `label-sm` typography with a subtle gray background.
- **Status Badges:** Pill-shaped with low-opacity backgrounds and high-contrast text.
  - _Pending:_ Background 10% Amber, Text Amber.
  - _Transit:_ Background 10% Blue, Text Blue.
  - _Delivered:_ Background 10% Green, Text Green.
- **Timeline Markers:** Vertical 2px dashed lines in #E5E7EB with 12px circular nodes. Active nodes use #22C55E with a soft outer pulse.
- **Input Fields:** 44px height, 8px radius, #F8FAFC background when inactive, turning white with #0D5C3B 1px border on focus.
