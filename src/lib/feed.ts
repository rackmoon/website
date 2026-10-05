import rss from '@astrojs/rss';
import { releases, releaseId } from '../data/changelog';
import { copy, pathFor, type Lang } from '../i18n';

/** Changelog feed for one language. Sample entries from the design stay out of it. */
export function changelogFeed(lang: Lang, site: URL) {
  const c = copy[lang];
  const names = Object.fromEntries(c.products.items.map((item) => [item.key, item.name]));
  return rss({
    title: c.meta.changelog.title,
    description: c.meta.changelog.description,
    site,
    items: releases
      .filter((release) => !release.sample)
      .map((release) => ({
        title: `${names[release.product]} ${release.version}: ${release[lang].title}`,
        pubDate: new Date(`${release.date}T00:00:00Z`),
        description: release[lang].summary,
        link: pathFor(lang, 'changelog', `#${releaseId(release)}`),
      })),
    customData: `<language>${c.htmlLang}</language>`,
  });
}
