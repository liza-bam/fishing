---
name: sportfish-galapagos-design
description: Use this skill to generate well-branded interfaces and assets for Sportfish Galápagos (offshore sport-fishing charters in San Cristóbal, Galápagos), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **Tokens:** `styles.css` is the single entry point — it `@import`s everything in `tokens/`. Link it, then use CSS custom properties (`--c-deep-sea` (brand navy), `--font-display`, `--space-6`, `--shadow-sm`, …).
- **Fonts:** Cormorant Garamond (display serif) + Mulish (UI sans), loaded via Google Fonts in `tokens/fonts.css`.
- **Logo:** `assets/sportfish-logo-navy.png` (light backgrounds) and `assets/sportfish-logo-white.png` (dark/over-photo). One-colour navy marlin badge.
- **Components:** React primitives under `components/` — Button, IconButton, Tag, Badge, ExperienceCard, StatBlock, Input, Select. Reach them via `window.BelugaGalapagosDesignSystem_fd3494` (internal namespace id). Each has a `.d.ts` (props) and `.prompt.md` (usage).
- **Full example:** `ui_kits/website/` is a complete click-through marketing site showing the system in use.
- **Icons:** Lucide via CDN (`<i data-lucide="…">` + `lucide.createIcons()`).

## Brand in one breath
Minimal and image-forward. Elegant serif headlines over clean sans. Deep nautical navy (from the marlin-badge logo) with open-water blues, warm shell/sand neutrals, and one coral accent for action. Quiet chrome, soft shadows, generous space, slow calm motion. Confident, energetic, local angler voice — sentence case, no emoji, no hype. Let the catch photography lead.
