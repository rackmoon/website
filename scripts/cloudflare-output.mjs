// Packs the static build in dist/ into the Build Output layout that `cf deploy --prebuilt` uploads.
// The site has no Worker script, so Cloudflare serves these files as static assets.
import { cp, mkdir, rm, writeFile } from 'node:fs/promises';

const root = '.cloudflare/output';
const out = `${root}/v0`;
const worker = {
  name: 'rackmoon-website',
  compatibilityDate: '2026-10-01',
  assets: { htmlHandling: 'auto-trailing-slash', notFoundHandling: '404-page' },
  // rackmoon.com answers too, and a zone redirect rule sends it on to www.
  domains: ['www.rackmoon.com', 'rackmoon.com'],
  workersDev: false,
  observability: { enabled: true },
};

await rm(root, { recursive: true, force: true });
await mkdir(`${out}/workers/default`, { recursive: true });
await writeFile(`${out}/config.json`, JSON.stringify({ buildContext: { isPreview: false } }));
await writeFile(`${out}/workers/default/worker.config.json`, JSON.stringify(worker, null, 2));
await cp('dist', `${out}/workers/default/assets`, { recursive: true });
console.log(`Build output written to ${out}`);
