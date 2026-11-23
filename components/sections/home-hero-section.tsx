import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HomeHeroSection() {
  return (
    <section className="overflow-hidden">
      <Container className="grid min-h-[calc(100dvh-4rem)] items-center gap-8 py-12 lg:grid-cols-[0.82fr_1.18fr] lg:py-16">
        <Reveal direction="left" className="flex flex-col items-start gap-6">
          <h1 className="max-w-xl font-display text-5xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Better coffee starts with less friction.
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            TORINOVA brings espresso, iced coffee, hot water, and milk foam into one clear home routine.
          </p>
          <Link href="/products/em200" className={cn(buttonVariants({ size: "lg" }), "min-w-44")}>
            Explore EM200
            <ArrowRight aria-hidden="true" />
          </Link>
        </Reveal>
        <Reveal direction="right" className="relative aspect-square">
          <div className="absolute inset-8 rounded-full bg-accent blur-3xl" aria-hidden="true" />
          <Image
            src="/images/em200-front.png"
            alt="TORINOVA EM200 home espresso machine"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="relative object-contain"
          />
        </Reveal>
      </Container>
    </section>
  );
}
