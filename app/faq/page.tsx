import type { Metadata } from "next";
import { FaqSection } from "@/components/sections/faq-section";
import { PageHeroSection } from "@/components/sections/page-hero-section";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about TORINOVA EM200 coffee types, functions, care, warranty, certification, and purchasing.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeroSection
        title="Answers, without the extra steps."
        description="Product, setup, care, warranty, and purchasing information for the TORINOVA EM200."
      />
      <FaqSection />
    </>
  );
}
