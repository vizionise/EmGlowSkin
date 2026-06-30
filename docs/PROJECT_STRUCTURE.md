# Project Structure

This repo is organized as a lightweight static website so it stays easy to edit in Codex, Claude Code, and a browser.

## Current Layout

```text
.
|-- *.html              Static pages
|-- css/style.css       Shared styles
|-- js/main.js          Shared interactions
|-- img/                Image assets
|-- scripts/            Local maintenance scripts
|-- docs/               Project notes
|-- AGENTS.md           Codex instructions
`-- CLAUDE.md           Claude Code instructions
```

## Page Conventions

Each page should keep the same shared document setup:

- Google Font imports
- `css/style.css` stylesheet link
- site header and navigation
- footer
- cookie banner when needed
- `js/main.js` script tag

When editing navigation, footer, brand text, contact details, or global scripts/styles, check every HTML page for matching markup.

## Asset Conventions

- Put site images in `img/`.
- Use lowercase file names with hyphens.
- Prefer optimized `.jpg`, `.webp`, or `.png` files depending on the image.
- Add meaningful `alt` text for content images.
- Decorative CSS backgrounds do not need alt text.

## Future Organization

If the site grows, consider these changes in order:

1. Split repeated header/footer into templates only if a build step is introduced.
2. Split CSS into sections or page files once `css/style.css` becomes hard to navigate.
3. Add a real form backend for contact/newsletter submissions when the business is ready to collect leads.
4. Add analytics only after confirming the provider and privacy requirements.

Until then, avoid extra framework complexity.
