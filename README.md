# EmGlowSkin Website

Static website for EmGlowSkin in Branford, CT.

## Quick Start

This repo is currently plain HTML, CSS, JavaScript, and image assets. There is no build step.

```sh
npm run dev
```

Then open:

```text
http://localhost:5173
```

You can also open `index.html` directly in a browser, but the local server is better for testing relative paths consistently.

## Project Structure

```text
.
|-- index.html          Home page
|-- about.html          About page
|-- beauty.html         Beauty services page
|-- contact.html        Contact page
|-- facials.html        Facial services page
|-- faq.html            FAQ page
|-- specials.html       Specials page
|-- waxing.html         Waxing services page
|-- css/
|   `-- style.css       Shared site styles
|-- js/
|   `-- main.js         Shared site interactions
|-- img/                Gallery and site images
|-- docs/               Project notes for future work
|-- AGENTS.md           Codex working instructions
`-- CLAUDE.md           Claude Code working instructions
```

## Commands

```sh
npm run dev
```

Start a local static server on port `5173`.

```sh
npm run check
```

Check local HTML, CSS, JavaScript, and image references for missing files.

## Working Notes

- Keep root HTML pages static unless we intentionally migrate to a framework.
- Shared navigation, footer, font imports, stylesheet links, and script tags appear across pages. Update them together.
- Shared visual tokens live at the top of `css/style.css`.
- Shared behavior belongs in `js/main.js`.
- Keep image file names lowercase and descriptive when adding new assets.
- Before committing, run `npm run check` and preview the changed pages locally.
