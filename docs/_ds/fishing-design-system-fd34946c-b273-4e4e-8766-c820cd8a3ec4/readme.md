## Usage

- Link **`styles.css`** (the only entry point). Everything is a CSS variable: `--c-deep-sea` (brand navy), `--brand-accent` (coral), `--font-display`, `--font-sans`, `--space-*`, `--radius-*`, `--shadow-*`.
- Components live under `components/` and mount from `window.BelugaGalapagosDesignSystem_fd3494` (internal id). Each has a `.d.ts` (props) + `.prompt.md` (usage).
- Logo: `assets/sportfish-logo-navy.png` (light bg) / `sportfish-logo-white.png` (dark bg).
- Icons: **Lucide** via CDN (`<i data-lucide="…">` + `lucide.createIcons()`).

## Structure

- `tokens/` — colors, typography, spacing, elevation, fonts, base, motion (CSS variables + resets).
- `guidelines/` — foundation specimen cards (the Design System tab).
- `components/` — `core/` Button · IconButton · Tag · Badge · `cards/` ExperienceCard · StatBlock · `forms/` Input · Select.
