---
name: Para Andrea - Velvet Midnight
description: An intimate, celestial proposal chronicle designed for Andrea under starry skies.
colors:
  bg-deep: "#060814"
  bg-midnight: "#0d122b"
  surface-card: "rgba(14, 20, 46, 0.85)"
  gold-star: "#f6c445"
  gold-light: "#ffd97d"
  rose-blush: "#ff4d6d"
  rose-soft: "#ff8da1"
  text-pure: "#ffffff"
  text-main: "#e2e8f5"
  text-muted: "#9fb0d8"
  paper-bg: "#faf7f0"
  paper-ink: "#1f1d2b"
  wine-wax: "#8b1e2f"
  whatsapp-green: "#25d366"
  whatsapp-hover: "#20bd5a"
typography:
  display:
    fontFamily: "Italiana, Georgia, serif"
    fontSize: "clamp(1.7rem, 6.5vw, 3.4rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.03em"
  body:
    fontFamily: "Urbanist, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0.01em"
  scale:
    - "0.75rem"
    - "0.78rem"
    - "0.8rem"
    - "0.85rem"
    - "0.88rem"
    - "0.9rem"
    - "0.92rem"
    - "0.95rem"
    - "0.98rem"
    - "1rem"
    - "1.05rem"
    - "1.1rem"
    - "1.25rem"
    - "1.35rem"
    - "1.55rem"
    - "1.6rem"
    - "1.7rem"
    - "1.8rem"
    - "1.85rem"
    - "1.9rem"
    - "2rem"
    - "2.1rem"
    - "2.2rem"
    - "2.3rem"
    - "2.4rem"
    - "2.7rem"
    - "2.8rem"
    - "3rem"
    - "3.4rem"
rounded:
  sm: "4px"
  md: "12px"
  lg: "18px"
  card-mobile: "20px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "0.5rem"
  sm: "0.85rem"
  md: "1.5rem"
  lg: "2.5rem"
  xl: "3.5rem"
components:
  button-primary:
    backgroundColor: "{colors.gold-star}"
    textColor: "{colors.bg-deep}"
    rounded: "{rounded.full}"
    padding: "0.85rem 2rem"
  button-yes:
    backgroundColor: "{colors.rose-blush}"
    textColor: "{colors.text-pure}"
    rounded: "{rounded.full}"
    padding: "1rem 2.4rem"
  button-no:
    backgroundColor: "rgba(255, 255, 255, 0.08)"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.full}"
    padding: "1rem 2.4rem"
---

## Overview

"Para Andrea" is a bespoke, high-craft digital proposal experience created to ask Andrea to be the user's girlfriend. Inspired by velvet midnight skies, starlight constellations, and nostalgic keepsake polaroids, the interface establishes an atmosphere of gentle romance, emotional pacing, and playful delight.

## Colors

- **Deep Space & Midnight Blue (`#060814`, `#0d122b`)**: Forms the immersive cosmos backdrop with subtle deep-violet nebula hints.
- **Card Surface (`rgba(14, 20, 46, 0.85)`)**: Deep translucent surface paired with frosted glass `backdrop-filter: blur(20px)` and soft starlight gold rim.
- **Starlight Gold (`#f6c445`, `#ffd97d`)**: Primary accent used for astronomical badges, active stars, monogram, and action sparks.
- **Rose Blush (`#ff4d6d`, `#ff8da1`)**: Vibrant romantic beacon utilized for the magnetic "Sí, acepto!" button and celebration confetti hearts.
- **Vintage Parchment & Wine Wax (`#faf7f0`, `#8b1e2f`)**: Warm tactile physical metaphor for the secret date invitation revealed upon breaking the wax seal.

## Typography

- **Display Voice**: `Italiana`, an Italian haute-couture serif face characterized by slender vertical stems and refined proportions.
- **Body Voice**: `Urbanist`, a geometric sans-serif tuned for supreme legibility on high-density mobile screens without digital sterile stiffness.
- **Contrast Ratios**: All body text maintains ≥ 6.2:1 contrast against dark background tiles; headings maintain ≥ 12:1.

## Layout

- **Stage Composition**: Centered viewport stage (`experience-stage`) hosting progressive chapter narrative cards.
- **Card Container**: Max-width `580px` on desktop and adaptive fluid padding on mobile devices, ensuring thumb-reach comfort.
- **Header Ambient Bar**: Fixed top navigation housing the "A✦" monogram and floating glassmorphism audio player pill.

## Elevation & Depth

- **Atmospheric Glow**: Multi-layered radial gradients emitting soft luminescence behind active cards.
- **Card Shadow**: Double-layer shadow `0 25px 60px -12px rgba(3, 6, 20, 0.8)` with warm gold ambient wash.
- **Polaroid Depth**: Physical skeuomorphic shadow with realistic angle tilts (-1.5deg to +1.8deg) and hover stabilization.

## Shapes

- **Badges & Action Buttons**: Fully rounded pill silhouettes (`border-radius: 9999px`) creating inviting, soft touch targets.
- **Chapter Surfaces**: Smooth rounded corners (`border-radius: 24px` on desktop, `20px` on mobile).
- **Polaroid Frames**: Crisp photo paper borders (`border-radius: 4px`) mimicking real instant film.
- **Wax Seal**: Concentric bevel with embossed monogram "A".

## Components

- **Starfield Canvas**: Dynamic 60fps particle field with shooting stars and cursor constellation lines.
- **Polaroid Frame**: Interactive keepsake card with pin detail, responsive image scaling, and subtle 3D hover physics.
- **Runaway "No" Button**: Intelligently clamped evasive control with progressive tease bubbles and magnetic growth of the "Sí" button.
- **Wax Envelope**: Interactive sealed card that transitions seamlessly to an unfolded parchment ticket upon activation.
- **Celebration Confetti**: Physics-based canvas bursting with golden stars and crimson hearts.

## Do's and Don'ts

### Do's
- Keep the transitions calm, fluid, and emotionally paced.
- Let the typography and poetry breathe with generous vertical whitespace.
- Provide clear customization points for photos, venue, and WhatsApp callbacks.
- Ensure audio plays gracefully both with external MP3 assets and procedural Web Audio synth fallback.

### Don'ts
- Never use harsh neon gradients or tacky 90s alert modals.
- Never let the "No" button move outside the visible screen viewport on mobile screens.
- Never use pure desaturated grays for secondary text; tint secondary copy toward the midnight indigo sky.
