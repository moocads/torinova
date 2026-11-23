import type { Metadata } from "next";
import { PageHeroSection } from "@/components/sections/page-hero-section";
import { PartnershipFitSection } from "@/components/sections/partnership-fit-section";
import { PartnershipProcessSection } from "@/components/sections/partnership-process-section";

export const metadata: Metadata = {
  title: "Partnership",
  description:
    "Explore distributor, retail, regional agent, and hospitality partnership opportunities with TORINOVA.",
};

export default function PartnershipPage() {
  return (
    <>
      <PageHeroSection
        title="Grow with a focused home espresso brand."
        description="TORINOVA is open to partners who can build the right route to market and support a strong customer experience."
      />
      <PartnershipFitSection />
      <PartnershipProcessSection />
    </>
  );
}
