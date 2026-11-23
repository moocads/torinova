import type { Metadata } from "next";
import { AboutPrinciplesSection } from "@/components/sections/about-principles-section";
import { AboutPurposeSection } from "@/components/sections/about-purpose-section";
import { PageHeroSection } from "@/components/sections/page-hero-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how TORINOVA approaches clear controls, useful capability, and manageable daily care for home espresso.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeroSection
        title="Coffee equipment should support the ritual, not complicate it."
        description="TORINOVA designs home espresso around the decisions and routines that matter every day."
      />
      <AboutPurposeSection />
      <AboutPrinciplesSection />
    </>
  );
}
