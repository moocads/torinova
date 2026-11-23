export const GA_PLACEHOLDER_ID = "GA_MEASUREMENT_ID";

export const siteConfig = {
  name: "TORINOVA",
  title: "TORINOVA Home Espresso",
  description:
    "Thoughtful home espresso machines designed to make café rituals clear, capable, and easy to live with.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: "/og/og-default.jpg",
  walmartUrl: "https://www.walmart.com/search?q=TORINOVA%20EM200",
  partnershipEmail: "partnership@torinova.com",
  gaMeasurementId:
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? GA_PLACEHOLDER_ID,
  nav: [
    { label: "Home", href: "/" },
    { label: "Product", href: "/products/em200" },
    { label: "About", href: "/about" },
    { label: "Partnership", href: "/partnership" },
    { label: "FAQ", href: "/faq" },
  ],
} as const;
