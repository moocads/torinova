import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";

// Page files only compose sections (Standard §2)
export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection locale={locale} />
      <FeaturesSection locale={locale} />
    </>
  );
}
