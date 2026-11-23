import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const principles = [
  {
    title: "Clarity",
    text: "Controls and functions should make sense before the first cup.",
  },
  {
    title: "Capability",
    text: "A compact machine should still support the drinks people actually want.",
  },
  {
    title: "Continuity",
    text: "Refilling, cleaning, and caring for a machine are part of the design.",
  },
];

export function AboutPrinciplesSection() {
  return (
    <Section className="bg-foreground text-background">
      <Reveal>
        <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
          What guides the work.
        </h2>
      </Reveal>
      <div className="mt-12 divide-y divide-background/20 border-y border-background/20">
        {principles.map((principle, index) => (
          <Reveal key={principle.title} delay={index * 0.1}>
            <div className="grid gap-4 py-8 md:grid-cols-[0.42fr_1fr] md:gap-8">
              <h3 className="font-display text-2xl font-semibold">{principle.title}</h3>
              <p className="max-w-2xl text-lg leading-relaxed text-background/70">{principle.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-12">
        <Link
          href="/products/em200"
          className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "min-w-44")}
        >
          Meet the EM200
          <ArrowRight aria-hidden="true" />
        </Link>
      </Reveal>
    </Section>
  );
}
