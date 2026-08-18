# Mariage Élégant Vendor Dashboard Guide

Bilingual English/French product documentation for the Mariage Élégant vendor dashboard. The site covers dashboard notifications, leads, profile settings, subscriptions, business information, online presence, services, gallery management, and Instagram authorization.

## Documentation site

- English: <https://farhang64.github.io/vendor-dashboard-docs/>
- Français: <https://farhang64.github.io/vendor-dashboard-docs/fr/>

## Run locally

Requirements: Node.js 20 or later.

```bash
npm install
npm run start
```

Create a production build:

```bash
npm run build
npm run serve
```

## Content structure

- `docs/` — English source documentation
- `i18n/fr/docusaurus-plugin-content-docs/current/` — French documentation
- `static/img/vendor-dashboard/` — annotated dashboard screenshots
- `.github/workflows/deploy-pages.yml` — build validation and GitHub Pages deployment

## Privacy

The public documentation uses a redacted version of screenshot `002`. Do not replace it with the original image unless all personal contact details have been removed.

## Updating the guide

1. Create a branch.
2. Update the English and French pages together.
3. Run `npm run build`.
4. Open a pull request and review both locales.
5. Merge to `main`; GitHub Actions publishes the updated site.
