# MELBET Jordan Landing

A deployable, compliance-gated Next.js landing package for the Jordan market.

## What is included

- `/` — player-facing Jordan home page
- `/partnership` — partner / agent recruitment page
- `/faq` — audience-separated FAQ page
- Arabic-first content with English fallback via `?lang=en`
- Shared layout, theme, motion, content, and routing architecture
- CSS-rendered media placeholders instead of fake image paths
- Anime.js reveal and float helpers with reduced-motion fallback

## Compliance note

Jordan is configured as `requires-review` in `config/jordan.ts`. The package is intended for preview / compliance review until legal and business approval enables live commercial routes, offers, and contact channels.

## Run locally

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000/
http://localhost:3000/?lang=en
http://localhost:3000/partnership
http://localhost:3000/faq
```

## Production build

```bash
npm run typecheck
npm run build
npm run start
```

## Files to edit first

- `content/markets/jordan.ts` — all visitor-facing copy, CTA routes, and replaceable media slots
- `config/jordan.ts` — market routing, locale, compliance, and CTA behavior
- `themes/jordanTheme.ts` — shared color, type, spacing, and shadow tokens
- `app/globals.css` — Jordan shell background, layout rhythm, and responsive styling

## Notes

- All public Jordan routes are root-level: `/`, `/partnership`, and `/faq`
- Internal navigation, footer links, and CTAs preserve `?lang=en` for English fallback
- Placeholder visuals are structured in content and rendered as designed CSS surfaces until final media assets are approved
