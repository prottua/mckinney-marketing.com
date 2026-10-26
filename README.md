# Strike Website — Static Homepage

A responsive, dark-themed one-page website for Strike, with charcoal backgrounds, bright yellow accents, an illustrative customer-journey graphic, service cards, spacious About Me section, a three-step approach section, budget messaging, and a contact modal.

## Files

- `index.html` — homepage and contact modal
- `about-services.html` — dedicated About Services page with all six service descriptions
- `services-page.css` — styles for the About Services page
- `styles.css` — layout, color system, responsive styles
- `script.js` — mobile navigation and contact modal behavior
- `assets/hero-illustration.svg` — custom vector graphic for the homepage hero
- `assets/downtown-storefront.webp` — optimized crop of the supplied downtown storefront photo, used on About Services
- `assets/favicon.svg` — Strike favicon
- `privacy.html`, `terms.html` — placeholders to replace with approved legal text

## Preview locally

Open `index.html` in a browser. For a more reliable local preview, run a local static server from this folder, for example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Before publishing

1. **Connect the approved Kwiga widget.** The contact modal currently shows a front-end form preview only. In `index.html`, find the `kwiga-embed-slot` element and replace the placeholder form with the official Kwiga widget embed code so submissions reach your CRM. Do not publish the placeholder form as a working lead-capture form.
2. Replace the placeholder content in `privacy.html` and `terms.html` with the approved legal copy.
3. Confirm the final copy for the middle sections. The approved hero and closing CTA wording has been retained where available; some explanatory copy in the middle sections is a polished reconstruction from the project discussion.
4. Confirm the domain and Cloudflare Pages build settings for the repository you use.

## SEO and performance

- Added page-specific title tags and meta descriptions for the homepage and About Services page.
- Added Open Graph and Twitter summary metadata (without guessing the production domain).
- Added descriptive image alt text, intrinsic image dimensions, and high-priority loading for the above-the-fold storefront image.
- Cropped the supplied storefront photo to remove phone screenshot chrome and compressed it to WebP (~47 KB).
- Added a basic `robots.txt`. Add a sitemap and canonical URLs after the final production domain is confirmed.
- No fake performance metrics are used in the About Services hero cards.

## Design tokens

- Background: `#080d11`
- Secondary background: `#0b1117`
- Main text: `#f5f6f7`
- Muted text: `#aab3bd`
- Accent yellow: `#ffd51f`

No build tools or package installation are required; this is plain HTML, CSS, JavaScript, and SVG.
