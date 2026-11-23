import type { Metadata } from "next";
import { CafeMenuSection } from "@/components/sections/cafe-menu-section";
import { ControlsSection } from "@/components/sections/controls-section";
import { DetailsSection } from "@/components/sections/details-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { OwnershipSection } from "@/components/sections/ownership-section";
import { StorySection } from "@/components/sections/story-section";

export const metadata: Metadata = {
  title: "EM200 Espresso Machine",
  description:
    "Explore the TORINOVA EM200 with one-touch espresso, over ice, hot water, hot foam, a 20-bar pump, and a removable 57 oz water tank.",
};

export default function Em200ProductPage() {
  return (
    <>
      <HeroSection />
      <CafeMenuSection />
      <ControlsSection />
      <StorySection />
      <OwnershipSection />
      <DetailsSection />
      <FinalCtaSection />
    </>
  );
}
