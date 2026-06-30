# Codex Instructions

## Project Context

EmGlowSkin is a static website made from root-level HTML pages, one shared CSS file, one shared JavaScript file, and image assets.

There is no bundler, package dependency, or build output right now. Keep the project simple unless the user explicitly asks to migrate to a framework.

## Commands

```sh
npm run dev
```

Starts a local static server at `http://localhost:5173`.

```sh
npm run check
```

Checks local file references from HTML and CSS.

## File Map

- `index.html`: home page
- `facials.html`, `waxing.html`, `beauty.html`: service pages
- `specials.html`: promotions page
- `contact.html`: contact page
- `about.html`: about page
- `faq.html`: FAQ page
- `css/style.css`: shared styles and responsive rules
- `js/main.js`: mobile nav, FAQ accordion, cookie banner, gallery carousel, demo form handling
- `docs/DESIGN_SYSTEM.md`: visual system, component rules, brand direction
- `docs/design-tokens.json`: structured design token reference
- `docs/BOOKING_LINKS.md`: official Square booking link
- `docs/SOCIAL_LINKS.md`: official Google, Facebook, and Instagram links
- `img/`: image assets
- `docs/`: planning and project notes

## Editing Rules

- Prefer small, focused changes that preserve the static-site structure.
- Keep shared header/nav/footer markup consistent across every HTML page.
- If you change `css/style.css` or `js/main.js`, keep the cache-busting query string aligned across pages when needed.
- Use existing CSS variables and typography choices before adding new design tokens.
- Follow `docs/DESIGN_SYSTEM.md` for colors, typography, spacing, component behavior, and imagery direction.
- Use `docs/BOOKING_LINKS.md` as the source of truth for booking CTA links.
- Use `docs/SOCIAL_LINKS.md` as the source of truth for social/profile links.
- Do not introduce a frontend framework, build system, CMS, analytics tool, or form backend without user approval.
- Use semantic HTML and accessible labels for interactive elements.
- Keep mobile behavior in mind. Test desktop and narrow viewport layouts for page-level changes.
- Do not commit generated output, local settings, secrets, or dependency folders.

## Verification

For ordinary edits:

```sh
npm run check
```

For visual edits, also run a local server and inspect the affected page in a browser.

## Git Notes

- Default branch: `main`
- Remote: `origin`
- Do not overwrite unrelated user changes.
- Before making broad edits, check `git status --short --branch`.
