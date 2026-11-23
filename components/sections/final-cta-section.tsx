import { ExternalLink } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function FinalCtaSection() {
  return (
    <Section className="pb-16">
      <Reveal className="flex flex-col items-start gap-6 rounded-2xl bg-accent p-8 sm:p-12 lg:flex-row lg:items-end lg:justify-between lg:p-16">
        <div className="max-w-2xl space-y-4">
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
            Bring the café home.
          </h2>
          <p className="text-lg text-accent-foreground/75">
            View current price and availability at Walmart.
          </p>
        </div>
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
