import "server-only";
import { cacheLife, cacheTag } from "next/cache";
import { env } from "@/lib/env";
import { STRAPI_LOCALE, type Locale } from "@/i18n/routing";
import type { StrapiCollectionResponse, StrapiSingleResponse } from "@/types/strapi";

/**
 * Server-side Strapi client. Token never reaches the browser.
 * Cached with Next 16 "use cache"; Strapi webhook → /api/revalidate clears it.
 *
 * Usage:
 *   const res = await strapiFetch<StrapiCollectionResponse<Article>>("articles", {
 *     locale, query: { populate: "*", sort: "publishedAt:desc" },
 *   });
 */
type StrapiQuery = Record<string, string | number | boolean | undefined>;

interface StrapiFetchOptions {
  locale?: Locale;
  query?: StrapiQuery;
  /** extra cache tags, e.g. the collection name */
  tags?: string[];
}

export const STRAPI_CACHE_TAG = "strapi";

function buildUrl(path: string, { locale, query }: StrapiFetchOptions) {
  const url = new URL(`/api/${path.replace(/^\//, "")}`, env.STRAPI_URL);
  if (locale) url.searchParams.set("locale", STRAPI_LOCALE[locale]);
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value !== undefined) url.searchParams.set(key, String(value));
  }
  return url;
}

export async function strapiFetch<T>(
  path: string,
  options: StrapiFetchOptions = {},
): Promise<T> {
  "use cache";
  cacheLife("hours");
  cacheTag(STRAPI_CACHE_TAG, path.split("?")[0], ...(options.tags ?? []));

  const res = await fetch(buildUrl(path, options), {
    headers: env.STRAPI_API_TOKEN
      ? { Authorization: `Bearer ${env.STRAPI_API_TOKEN}` }
      : undefined,
  });

  if (!res.ok) {
    throw new Error(`Strapi ${res.status} on ${path}`);
  }
  return (await res.json()) as T;
}

export function strapiMediaUrl(url?: string | null) {
  if (!url) return null;
  return url.startsWith("http") ? url : new URL(url, env.STRAPI_URL).toString();
}

export type { StrapiCollectionResponse, StrapiSingleResponse };
