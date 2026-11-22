import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site-config";

// Add every public route here (without locale prefix). CMS-driven routes can be
// appended by fetching slugs via strapiFetch.
const STATIC_ROUTES = ["/"];

function localizedUrl(route: string, locale: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  const path = route === "/" ? prefix || "/" : `${prefix}${route}`;
  return new URL(path, siteConfig.url).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  return STATIC_ROUTES.map((route) => ({
    url: localizedUrl(route, routing.defaultLocale),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, localizedUrl(route, locale)]),
      ),
    },
  }));
}
