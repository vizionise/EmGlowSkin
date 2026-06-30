# Claude Code Instructions

## Overview

This is the EmGlowSkin static website. It uses plain HTML files at the repository root, shared CSS in `css/style.css`, shared JavaScript in `js/main.js`, and images in `img/`.

Keep the site static and lightweight unless the user asks for a larger migration.

## Common Commands

```sh
npm run dev
```

Runs a local static server at `http://localhost:5173`.

```sh
npm run check
```

Validates local file references from HTML and CSS.

## Important Files

- `README.md`: human project overview
- `AGENTS.md`: Codex-oriented project instructions
- `docs/DESIGN_SYSTEM.md`: brand and visual design system
- `docs/design-tokens.json`: structured design token reference
- `docs/PROJECT_STRUCTURE.md`: organization notes and future direction
- `css/style.css`: global design system and responsive styles
- `js/main.js`: shared interactive behavior

## Development Guidelines

- Keep header, navigation, footer, stylesheet links, script tags, and font imports synchronized across pages.
- Reuse existing CSS variables and section patterns before adding new styles.
- Follow `docs/DESIGN_SYSTEM.md` for typography, color, spacing, components, and imagery decisions.
- Add new shared behavior to `js/main.js`.
- Place new images in `img/` using lowercase descriptive names.
- Avoid adding dependencies or build tools without confirming with the user.
- Run `npm run check` after edits.
