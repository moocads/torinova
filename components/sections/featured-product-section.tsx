import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const functions = ["Espresso", "Over Ice", "Hot Water", "Hot Foam"];

export function FeaturedProductSection() {
  return (
    <Section className="bg-foreground text-background">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="left" className="relative aspect-square overflow-hidden rounded-2xl bg-background">
          <Image
            src="/images/em200-controls.jpg"
            alt="EM200 touch controls for espresso, iced coffee, hot water, and milk foam"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal direction="right" className="flex flex-col items-start gap-8">
          <div className="space-y-4">
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
              EM200
            </h2>
            <p className="max-w-lg text-lg leading-relaxed text-background/70">
              A compact 20-bar espresso machine with one-touch controls and the flexibility to move from hot to iced.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-4 border-y border-background/20 py-6 text-lg font-medium">
            {functions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link
            href="/products/em200"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "min-w-44",
            )}
          >
            View Product
            <ArrowRight aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
