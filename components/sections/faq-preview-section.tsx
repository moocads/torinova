import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { FaqList } from "@/components/shared/faq-list";
import { buttonVariants } from "@/components/ui/button";
import { faqItems } from "@/lib/faq";
import { cn } from "@/lib/utils";

export function FaqPreviewSection() {
  return (
    <Section>
      <Reveal className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
        <div className="flex flex-col items-start gap-6">
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
            Common questions.
          </h2>
          <Link href="/faq" className={cn(buttonVariants({ variant: "outline" }), "min-w-40")}>
            View all FAQ
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
        <FaqList items={faqItems.slice(0, 4)} />
      </Reveal>
    </Section>
  );
}
