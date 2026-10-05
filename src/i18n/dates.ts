import type { Lang } from '.';

/** Formats an ISO date (YYYY-MM-DD) the same way on every build machine. */
export function formatDate(iso: string, lang: Lang): string {
  const [year, month, day] = iso.split('-').map(Number);
  if (lang === 'zh') return `${year} 年 ${month} 月 ${day} 日`;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[month - 1]} ${day}, ${year}`;
}
