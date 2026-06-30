# EmGlowSkin Design System

This design system documents the current EmGlowSkin website language so future edits stay consistent across Codex, Claude Code, and manual work.

## Brand Direction

EmGlowSkin should feel refined, calm, personal, and treatment-focused. The site should communicate professional skincare without feeling clinical, and relaxation without feeling overly decorative.

Core qualities:

- Calm spa minimalism
- Soft editorial typography
- Clean treatment menus
- Gentle contrast
- Practical booking-first structure

Avoid:

- Heavy gradients or loud color blocking
- Generic stock-photo energy
- Overly playful shapes
- Dense ecommerce-style cards
- Introducing new fonts without a deliberate redesign

## Typography

Fonts are loaded from Google Fonts in each HTML page.

### Font Families

- Display serif: `Cormorant Garamond`
- Body sans: `Mulish`
- Logo sans: `Oswald`, with `Archivo Narrow` fallback

### Usage

| Role | Font | Weight | Treatment |
| --- | --- | --- | --- |
| Main display headings | `Cormorant Garamond` | 500-600 | Small caps where appropriate |
| Body copy | `Mulish` | 300-500 | Sentence case |
| Navigation | `Mulish` | 500 | Uppercase, wide tracking |
| Buttons | `Mulish` | 700 | Uppercase, wide tracking |
| Logo text | `Oswald` | 500 | Uppercase |
| Specials display | `Cormorant Garamond` | 600 | Large, navy, editorial |

### Type Scale

Current values are intentionally fluid for hero moments and calmer for content.

| Token | Value | Current Use |
| --- | --- | --- |
| `display-xl` | `clamp(3rem, 8vw, 6rem)` | Specials headline |
| `display-lg` | `clamp(2.4rem, 6vw, 4.6rem)` | Home hero logo |
| `display-md` | `clamp(2rem, 4vw, 2.9rem)` | Service hero headings |
| `heading-lg` | `2.9rem` | Newsletter heading |
| `heading-md` | `2.4rem` | Section headings |
| `heading-sm` | `1.55rem` | About/contact subheads |
| `body-lg` | `1.4rem` | Reviews and specials body |
| `body-md` | `1rem` | Standard body and form fields |
| `label-sm` | `.78rem` | Section labels |
| `button-sm` | `.8rem` | Buttons and nav |

### Letter Spacing

- Logo: `.04em`
- Section labels and buttons: `.22em`
- Navigation: `.2em`
- Footer brand: `.14em`
- Footer metadata: `.08em`
- Script serif accents: `.02em`

## Color Palette

The base palette is mostly warm grayscale, with a navy/cream/leaf set reserved for seasonal promotions.

### Core Colors

| Token | Hex | Usage |
| --- | --- | --- |
| `ink` | `#1a1a1a` | Primary headings, nav, button text |
| `body` | `#4a4a4a` | Main copy |
| `muted` | `#8a8a8a` | Labels, notes, secondary links |
| `line` | `#e4e4e4` | Rules, form lines, dropdown borders |
| `soft` | `#efefef` | Hover backgrounds |
| `dark` | `#121212` | Dark service intro bands |
| `white` | `#ffffff` | Page background |

### UI Neutrals

| Token | Hex | Usage |
| --- | --- | --- |
| `button` | `#bdbdbd` | Primary CTA background |
| `button-hover` | `#a9a9a9` | CTA hover |
| `button-dark` | `#b9b9b9` | Full-width booking CTA |
| `panel` | `#f2f2f2` | Review cards, about text |
| `hero-left` | `#e9e9e9` | Home hero brand side |
| `hero-right` | `#f4f4f4` | Home hero CTA side |
| `footer` | `#c8c8c8` | Site footer |
| `cookie` | `#cfcfcf` | Cookie banner |

### Accent Colors

| Token | Hex | Usage |
| --- | --- | --- |
| `star` | `#e6a93b` | Review stars |
| `specials-navy` | `#1c3a63` | Specials text |
| `specials-cream` | `#fbf6ea` | Specials card background |
| `specials-leaf` | `#b7c98a` | Specials decorative accents |
| `warm-image-a` | `#b86a4a` | Temporary about image gradient |
| `warm-image-b` | `#7a4030` | Temporary about image gradient |

## Layout

### Containers

- Global max width: `1240px`
- Desktop side padding: `32px`
- Main wrapper class: `.wrap`
- Mobile breakpoint: `880px`

Use `.wrap` for normal page sections. Use full-width bands only when the content needs a background treatment, such as service intro or footer.

### Spacing

| Pattern | Value |
| --- | --- |
| Header padding | `28px 32px` |
| Home split section | `90px 0` desktop, `50px 0` mobile |
| Standard menu section | `70px 0` |
| Newsletter section | `80px 0` |
| Footer | `56px 20px` |
| Service intro | `44px 20px` |
| Desktop split gap | `60px` |
| Service menu grid gap | `48px 70px` |
| Contact grid gap | `80px` |

## Components

### Header

Use `.site-header`, `.logo`, `.menu-toggle`, `.nav`, `.has-drop`, and `.dropdown`.

Rules:

- Keep the same nav order across pages: Home, Services, Specials, Contact, About, FAQ.
- Add `.active` to the current top-level nav item.
- On service pages, the Services link receives `.active`.
- Mobile nav opens by toggling `.nav.open`.

### Buttons

Use `.btn` for primary calls to action.

Variants:

- `.btn`: inline CTA
- `.btn-block`: full-width CTA
- `.btn-dark`: neutral darker CTA treatment

Button copy should be short and direct:

- Book Now
- Book Your Glow
- Explore Services
- Sign Up
- Send

Booking CTAs should link to the Square booking page stored in `docs/BOOKING_LINKS.md`. Keep Contact navigation and contact form actions separate from booking CTAs.

### Section Labels

Use `.section-label` for small uppercase labels above content blocks.

Tone:

- Short, editorial phrases
- Wide letter spacing
- Muted color

Examples:

- Skin Success Stories
- Glow Up Gallery
- Seasonal Promotions
- Contact Us

### Hero Sections

Home uses `.hero`, `.hero-inner`, `.hero-left`, `.hero-logo`, and `.hero-right`.

Service pages use `.service-hero` and `.service-intro`.

Rules:

- Keep hero copy concise.
- Use strong CTAs above the fold.
- When replacing placeholder hero backgrounds, use real treatment, studio, or brand imagery.
- Preserve readable contrast for white service hero headings.

### Treatment Menus

Use `.menu-section`, `.menu-grid`, and `.menu-item`.

Rules:

- Treatment name on the left, price on the right.
- Description spans full width below.
- Use `.note` for italic fine print.
- Avoid card containers for every price item; the current airy list is the intended pattern.

### Forms

Use `.contact-form`, `.news-form`, and `.checkbox-row`.

Rules:

- Keep labels visible for contact form fields.
- Use underline inputs for short fields.
- Use bordered textarea for longer messages.
- Demo forms currently use `data-demo` and do not submit anywhere.

### Cards And Panels

Use cards sparingly.

Current approved card treatments:

- `.review-card`: soft gray editorial review cards inside the home review carousel
- `.summer-card`: cream seasonal promotion panel with minimal radius
- Cookie banner: fixed utility panel

Avoid nested cards and card-heavy layouts.

### Review Carousel

The home page uses `[data-reviews]`, `.review-carousel`, `.review-viewport`, `.review-track`, `.review-card`, `.review-controls`, and `.review-dots`.

Rules:

- Show 3 reviews at a time on desktop.
- Show 2 reviews at a time on mid-size screens.
- Show 1 review at a time on mobile.
- Keep review text readable and avoid truncating client quotes.
- Preserve arrow controls, dot controls, keyboard focus behavior, and reduced-motion support.
- Use this carousel pattern for reviews only; do not reuse it for service menus.

The review section may include `.review-social` links beneath the carousel for Google Profile, Facebook, and Instagram. Keep these links as quiet outlined buttons so they support the reviews rather than competing with the primary booking CTAs.

### Social Links

Official social/profile URLs are stored in `docs/SOCIAL_LINKS.md`.

Footer social links use `.social` and should appear on every HTML page in this order:

1. Google
2. Facebook
3. Instagram

### Footer

Use `.site-footer`.

Footer content should remain consistent:

- Social row
- Brand name
- Address
- Phone number
- Copyright

## Imagery

Current image assets live in `img/`.

Guidelines:

- Use real EmGlowSkin, treatment, product, studio, or result imagery when possible.
- Keep file names lowercase with hyphens.
- Prefer optimized `.webp` or `.jpg` for photos.
- Use `.png` when transparency or existing gallery assets require it.
- Add meaningful `alt` text for content images.

Placeholder blocks currently exist in several places. Replace these with real images over time.

## Motion And Interaction

Current shared interactions live in `js/main.js`:

- Mobile navigation toggle
- FAQ accordion
- Cookie banner
- Gallery carousel
- Demo form alert/reset

Motion should be subtle:

- Hover transitions around `.2s`
- Accordion transition around `.3s`
- Carousel transition around `.45s`

Avoid heavy animation that makes the spa experience feel noisy.

## Accessibility

- Use semantic headings in order.
- Buttons must have clear text or `aria-label`.
- Keep contrast readable, especially on hero image overlays.
- Inputs need visible labels or clear context.
- Do not rely on color alone for interactive state.
- Keep tap targets comfortable on mobile.

## Implementation Rules

- Reuse tokens in `css/style.css` before adding new values.
- Reference `docs/design-tokens.json` when creating new components.
- Keep repeated header/footer markup synchronized across HTML files.
- Do not add frameworks or dependencies just to enforce the design system.
- If making a broad visual redesign, update this document and `docs/design-tokens.json` in the same change.
