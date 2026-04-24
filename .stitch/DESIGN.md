# Design System: Summit Sales Institute

## 1. Visual Theme & Atmosphere

A cinematic, editorial interface that feels like the opening frames of a South African documentary — deep navy silences, gold that breaks through like sunrise over the Drakensberg, and type that lands with the confidence of someone who has already closed. The atmosphere is premium-restrained: nothing decorative that doesn't earn its place, nothing generic, nothing borrowed from Silicon Valley SaaS templates.

- **Density:** 5 — Balanced editorial. Not sparse luxury, not app-cockpit dense.
- **Variance:** 8 — Strongly asymmetric. No centered anything except the final CTA.
- **Motion:** 7 — Cinematic choreography. Spring physics throughout. Perpetual micro-interactions on data elements. No animation purely for decoration.

---

## 2. Color Palette & Roles

- **Abyss Black** (#04080F) — Primary canvas. Never pure black.
- **Deep Navy** (#060E1C) — Secondary section background, subtle depth separation.
- **Ocean Trench** (#0A1629) — Tertiary depth, card backgrounds.
- **Slate Mid** (#14305A) — Mid-tone for gradient ranges.
- **Steel Blue** (#4A80B8) — Secondary accent, mist effects, ridge highlights.
- **Ice Mist** (#7AABDC) — Light highlight, snow effects, secondary text tints.
- **Frost** (#D8E8F5) — Snow caps, near-white tints.
- **Burnished Gold** (#C9963B) — CTA borders, active states, section number accents.
- **Summit Amber** (#E5B453) — Primary accent. All primary CTAs, counter highlights, key emphasis.
- **Cream Parchment** (#F5EDD8) — CTA hover state, warm near-white.
- **Ghost White** (#FFFFFF) — Primary text only.
- **Dim Silver** (rgba(255,255,255,0.45)) — Secondary body text.
- **Phantom** (rgba(255,255,255,0.07)) — Ghost card backgrounds.
- **Whisper** (rgba(255,255,255,0.09)) — Structural border lines.

**Banned:** Pure black (#000000), neon gradients, purple, oversaturated blues, warm/cool gray mixing.

---

## 3. Typography Rules

- **Display / Hero:** `Fraunces` — Variable optical size font. Use `opsz` axis for dramatic scale variation. Track-tight at large sizes (letter-spacing: -0.03em to -0.04em). Weight 800–900. Italic variant for emphasis words.
- **Body / UI:** `Outfit` — Clean geometric sans. Weight 300 (body), 500 (labels), 600–700 (UI emphasis). NOT for decorative headlines.
- **Mono / Labels:** `JetBrains Mono` — Section numbers, eyebrow labels, timestamps, stat annotations.
- **Scale:** clamp() everywhere. Display: clamp(64px, 10vw, 160px). Section heads: clamp(40px, 5vw, 80px). Body: 15–19px.
- **Banned:** Inter, Georgia, Times New Roman, Playfair Display (too familiar). Generic system fonts in premium contexts.

---

## 4. Component Stylings

- **Primary Buttons:** Background Summit Amber (#E5B453), color Abyss Black. Font: Outfit 700, 12px, 2.5px letter-spacing, uppercase. Border-radius: 2px. No outer glow. On hover: translate Y -2px, shimmer overlay. On active: translate Y +1px (tactile push). No custom cursor.
- **Ghost Buttons:** Border 1px Burnished Gold at 40% opacity, text Summit Amber. On hover: fill with Summit Amber.
- **Cards (Who / Events):** Background Phantom. Border 1px Whisper. No rounded corners on outer container (editorial square). Inner content padding 48–64px. Hover: background shifts to Ghost.
- **FAQ Items:** No card elevation. Border-top Whisper dividers only. Question: Outfit 600 18px. Answer: Outfit 300 16px, line-height 1.75. Open state: amber chevron rotates 180°.
- **Nav:** Fixed. Backdrop blur 20px + saturate 150% when scrolled. Logo: SVG mountain mark + Outfit 700 uppercase. Links: Outfit 500 12px, 1.5px letter-spacing, uppercase, Dim Silver. CTA: ghost amber button.
- **Loader:** Centered SVG mountain mark + amber progress line + JetBrains Mono label. No circular spinners.

---

## 5. Layout Principles

- CSS Grid exclusively for section layouts. No flexbox percentage math.
- Max-width: 1400px, centered, padded 48px desktop / 24px mobile.
- Horizontal scroll methodology section: 3 full-viewport panels, GSAP-pinned.
- Hero: Left-aligned asymmetric. Mountain SVG occupies full-screen absolute layer.
- "3 equal cards in a row" layout: BANNED. Use asymmetric grids, 2-column zig-zag, or horizontal scroll.
- Stats Impact section: 2x2 grid on desktop, single column on mobile. Numbers are 120–200px, no card containers.
- Testimonials: Staggered masonry-style grid, not uniform grid.
- All sections: min-height uses dvh, never vh.

---

## 6. Motion & Interaction

- **Spring physics default:** cubic-bezier(0.16, 1, 0.3, 1) for entrances. cubic-bezier(0.34, 1.56, 0.64, 1) for spring bounces. No linear easing anywhere.
- **Char-by-char title animation:** Hero title splits into individual characters, each translateY(110%) → 0 with 20ms stagger.
- **Horizontal scroll:** GSAP ScrollTrigger pin + horizontal xPercent for methodology panels.
- **Counters:** Easing-out count from 0 to target on IntersectionObserver entry.
- **Shooting stars:** Random interval 3–8s. Not decorative — they punctuate the night sky narrative.
- **Scroll progress bar:** 2px amber gradient line at viewport top.
- **Section reveals:** gsap.fromTo opacity 0→1, y 40→0, 0.9s, stagger 0.12s.
- **Magnetic buttons:** GSAP translate follow on mousemove, elastic spring on leave.
- **Hardware acceleration only:** transform and opacity. Never animate top/left/width/height.
- **Grain texture:** Fixed pseudo-element, 3.5% overlay opacity, fractalNoise SVG filter.

---

## 7. Anti-Patterns (Banned)

- No emojis in UI (only permitted in footer flag reference)
- No Inter font anywhere
- No Playfair Display (replaced by Fraunces)
- No pure black (#000000)
- No neon outer glows or purple accents
- No custom mouse cursor (removed per taste-design rules)
- No centered hero layout
- No 3-equal-column card grids
- No "Seamless", "Elevate", "Unleash", "Next-Gen" copywriting clichés
- No filler scroll hints ("Scroll to explore", scroll arrows, bouncing chevrons)
- No fabricated statistics beyond what the client has provided
- No broken image placeholders
- No AI slop gradient text on large display headings
- No overlapping elements — every element in its own clear spatial zone
