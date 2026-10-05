import type { APIContext } from 'astro';
import { changelogFeed } from '../lib/feed';

export function GET(context: APIContext) {
  return changelogFeed('en', context.site!);
}
