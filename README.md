# website

Source of [www.rackmoon.com](https://www.rackmoon.com): a static site built with [Astro](https://astro.build), in English at the root and Chinese under `/zh/`.

## Develop

Needs Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

`npm run build` writes the site to `dist/`, and `npm run format` formats the code with Prettier.

## Where things live

| Path              | Content                                                                          |
| ----------------- | -------------------------------------------------------------------------------- |
| `src/pages/`      | Routes: English at the root, Chinese under `zh/`, the RSS feeds and the 404 page |
| `src/views/`      | One view per page, shared by both languages                                      |
| `src/components/` | Header, footer and the sections of each page                                     |
| `src/i18n/`       | All copy. `zh.ts` keeps the same shape as `en.ts`                                |
| `src/data/`       | Changelog entries, the geometry of the logo and the chart data                   |
| `src/styles/`     | Theme tokens and styles; dark is the default theme                               |
| `public/`         | Icons, the share image and the brand kit download                                |

## Changelog

Add releases to `src/data/changelog.ts`, newest first, with English and Chinese text. Entries marked `sample: true` are placeholders from the design: the page labels them as samples and the RSS feeds leave them out. Delete them when the first real release ships.

## Deploy

The site runs on Cloudflare Workers as static assets, with no Worker script, on `www.rackmoon.com` and `rackmoon.com`. Deploy from a machine where the [`cf` CLI](https://developers.cloudflare.com/) is installed and logged in to the Cloudflare account:

```bash
npm run deploy
```

That builds the site, packs `dist/` into the Build Output layout under `.cloudflare/output` with `scripts/cloudflare-output.mjs`, and uploads it with `cf deploy --prebuilt`. The Worker name, custom domains and asset handling live in that script. Response headers for the static files are set in `public/_headers`.

GitHub Actions only checks that the site builds; it does not deploy.
