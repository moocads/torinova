// Single source of truth for site-wide constants. No magic strings in components.

export const GA_PLACEHOLDER_ID = "GA_MEASUREMENT_ID";

export const siteConfig = {
  name: "TORINOVA",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: "/og/og-default.jpg",
  gaMeasurementId:
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? GA_PLACEHOLDER_ID,
  contact: {
    email: "info@example.com",
    phone: "",
  },
  nav: [
    { key: "home", href: "/" },
    { key: "about", href: "/#about" },
    { key: "services", href: "/#services" },
    { key: "contact", href: "/#contact" },
  ],
} as const;

export type NavKey = (typeof siteConfig.nav)[number]["key"];
