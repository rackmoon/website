import en from './en';
import zh from './zh';

export type Lang = 'en' | 'zh';
export type PageKey = 'home' | 'products' | 'changelog' | 'about';

export const copy = { en, zh };
export const EMAIL = 'hello@rackmoon.com';
export const GITHUB = 'https://github.com/rackmoon';
export const BRAND_KIT = '/brand/rackmoon-brand-kit.zip';

const PATHS: Record<PageKey, string> = {
  home: '/',
  products: '/products/',
  changelog: '/changelog/',
  about: '/about/',
};

/** Pages in the order of the main navigation. */
export const NAV: PageKey[] = ['products', 'changelog', 'about'];

export function pathFor(lang: Lang, page: PageKey, hash = ''): string {
  return (lang === 'zh' ? '/zh' : '') + PATHS[page] + hash;
}

export function rssPath(lang: Lang): string {
  return lang === 'zh' ? '/zh/rss.xml' : '/rss.xml';
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'zh' : 'en';
}

export function mailto(subject?: string): string {
  return `mailto:${EMAIL}` + (subject ? `?subject=${encodeURIComponent(subject)}` : '');
}
