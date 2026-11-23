import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PartnershipPreviewSection() {
  return (
    <Section className="bg-accent">
      <Reveal className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-3xl space-y-4">
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
            Bring TORINOVA to your market.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-accent-foreground/75">
            We welcome conversations with distributors, retailers, regional agents, and hospitality partners.
          </p>
        </div>
        <Link href="/partnership" className={cn(buttonVariants({ size: "lg" }), "min-w-44")}>
          Partnership
          <ArrowRight aria-hidden="true" />
        </Link>
      </Reveal>
    </Section>
  );
}
