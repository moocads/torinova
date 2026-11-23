import { FaqPreviewSection } from "@/components/sections/faq-preview-section";
import { FeaturedProductSection } from "@/components/sections/featured-product-section";
import { HomeHeroSection } from "@/components/sections/home-hero-section";
import { HomeStorySection } from "@/components/sections/home-story-section";
import { PartnershipPreviewSection } from "@/components/sections/partnership-preview-section";

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <FeaturedProductSection />
      <HomeStorySection />
      <PartnershipPreviewSection />
      <FaqPreviewSection />
    </>
  );
}
