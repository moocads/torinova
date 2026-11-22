import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "zh"],
  defaultLocale: "en",
  // en → /about, zh → /zh/about
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];

/** Map frontend locale → Strapi i18n locale code */
export const STRAPI_LOCALE: Record<Locale, string> = {
  en: "en",
  zh: "zh-Hans",
};
