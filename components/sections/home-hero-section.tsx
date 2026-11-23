import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HomeHeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/home-banner.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-foreground/58" aria-hidden="true" />
      <Container className="relative flex min-h-[calc(100dvh-4rem)] items-center py-12 lg:py-16">
        <Reveal direction="left" className="flex max-w-xl flex-col items-start gap-6 text-background">
          <h1 className="font-display text-5xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Better coffee starts with less friction.
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-background/70">
            TORINOVA brings espresso, iced coffee, hot water, and milk foam into one clear home routine.
          </p>
          <Link href="/products/em200" className={cn(buttonVariants({ size: "lg" }), "min-w-44")}>
            Explore EM200
            <ArrowRight aria-hidden="true" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
