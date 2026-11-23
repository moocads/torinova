import { ExternalLink } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { FaqList } from "@/components/shared/faq-list";
import { buttonVariants } from "@/components/ui/button";
import { faqItems } from "@/lib/faq";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function FaqSection() {
  return (
    <Section>
      <Reveal>
        <FaqList items={faqItems} />
      </Reveal>
      <Reveal className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-lg font-medium">Ready to see current price and availability?</p>
        <a
          href={siteConfig.walmartUrl}
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({ size: "lg" }), "min-w-44")}
        >
          Buy at Walmart
          <ExternalLink aria-hidden="true" />
        </a>
      </Reveal>
    </Section>
  );
}
