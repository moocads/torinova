import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

const highlights = [
  { value: "20 bar", label: "Pump pressure" },
  { value: "1400W", label: "Heating power" },
  { value: "57 oz", label: "Removable tank" },
  { value: "8 min", label: "Auto power-off" },
];

export function HeroSection() {
  return (
    <>
      <section className="overflow-hidden">
        <Container className="grid min-h-[calc(100dvh-4rem)] items-center gap-8 py-12 lg:grid-cols-[0.88fr_1.12fr] lg:py-16">
          <Reveal direction="left" className="flex flex-col items-start gap-6">
            <h1 className="max-w-xl font-display text-5xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Café-quality coffee. Made simple.
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Brew espresso, iced coffee, hot water, and velvety milk foam with one-touch controls.
            </p>
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
          <Reveal direction="right" className="relative aspect-square overflow-hidden">
            <Image
              src="/images/em200-front.png"
              alt="TORINOVA EM200 espresso machine in black and brushed stainless steel"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-contain"
            />
          </Reveal>
        </Container>
      </section>
      <section className="border-y" aria-label="Product highlights">
        <Container>
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label} className="flex flex-col gap-1 border-border px-4 py-6 first:pl-0 md:border-r md:last:border-r-0 md:last:pr-0">
                <dt className="text-sm text-muted-foreground">{item.label}</dt>
                <dd className="font-display text-2xl font-semibold tracking-tight">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </>
  );
}
