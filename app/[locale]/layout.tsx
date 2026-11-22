import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site-config";
import { fontVariables } from "@/lib/fonts";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageFade } from "@/components/motion/page-fade";
import "../globals.css";

// Only these namespaces are sent to the browser (used by client components).
// Add a namespace here when a "use client" component calls useTranslations() on it.
const CLIENT_MESSAGE_NAMESPACES = ["Common", "Nav"] as const;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const ogImage = new URL(siteConfig.ogImage, siteConfig.url).toString();

  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: t("title"), template: `%s | ${t("title")}` },
    description: t("description"),
    alternates: {
      canonical: locale === routing.defaultLocale ? "/" : `/${locale}`,
      languages: { en: "/", zh: "/zh", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: t("title"),
      description: t("description"),
      url: siteConfig.url,
      locale: locale === "zh" ? "zh_CN" : "en_CA",
      images: [{ url: ogImage, width: 1200, height: 630, alt: t("title") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [ogImage],
    },
    icons: { icon: "/favicon.ico" },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Common" });
  const messages = await getMessages({ locale });
  const clientMessages = Object.fromEntries(
    CLIENT_MESSAGE_NAMESPACES.map((ns) => [ns, messages[ns]]),
  );

  return (
    <html lang={locale} className={fontVariables} suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2"
        >
          {t("skipToContent")}
        </a>
        <ThemeProvider>
          <NextIntlClientProvider messages={clientMessages}>
            <SiteHeader locale={locale} />
            <PageFade>
              <main id="main" className="flex-1">
                {children}
              </main>
            </PageFade>
            <SiteFooter locale={locale} />
          </NextIntlClientProvider>
        </ThemeProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
