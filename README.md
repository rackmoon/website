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

Every push to `main` builds the site with GitHub Actions. To publish it, switch GitHub Pages on once under Settings → Pages, choose GitHub Actions as the source and set the custom domain to `www.rackmoon.com`. From then on each push deploys automatically.

DNS records for the domain:

| Type    | Name  | Value                                                                                      |
| ------- | ----- | ------------------------------------------------------------------------------------------ |
| `CNAME` | `www` | `rackmoon.github.io`                                                                       |
| `A`     | `@`   | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`                 |
| `AAAA`  | `@`   | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` |
