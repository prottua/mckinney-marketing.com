# Strike Digital Marketing website

Static, mobile-first website for `https://mckinney-marketing.com`, intended for GitHub Pages.

## Files
- `index.html` — homepage and approved core positioning
- `about.html` — about and approach
- `contact.html` — contact page with a placeholder for the Kwiga form/widget
- `services/` — six individual service pages
- `privacy.html` — draft placeholder that must be reviewed before collecting leads
- `assets/styles.css` — responsive design system
- `assets/main.js` — mobile navigation and current year

## Publish to GitHub Pages
1. Upload the contents of this ZIP into the root of the repository `prottua/mckinney-marketing.com`. Upload the files and folders themselves, not the containing `strike-website` folder.
2. Commit to the `main` branch.
3. In Settings → Pages, keep `Deploy from a branch`, branch `main`, folder `/(root)`.
4. Wait for GitHub Pages to publish the site.
5. Add `mckinney-marketing.com` as the custom domain in Settings → Pages after the website files are present.
6. Configure DNS using the exact records provided in GitHub Pages and Cloudflare documentation. Avoid guessing record values; preserve email and verification records if any.
7. Once the domain resolves, verify HTTPS.

## Before launch
- Replace the contact widget placeholder with the actual Kwiga widget/embed.
- Replace the draft privacy notice with a reviewed, accurate notice covering the actual data collection and services.
- Add final business contact details and any social links you want to publish.
- Check all pages, mobile layout, forms, metadata, and redirects.
- Confirm the canonical domain and redirect strategy in Cloudflare/GitHub Pages.

## Notes
This is a static HTML/CSS/JS website. It does not include server-side form processing, a CMS, or a working contact submission. The Kwiga contact widget is intentionally marked as a placeholder. Google Fonts load externally; system fallback fonts are provided.
