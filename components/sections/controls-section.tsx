import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";

export function ControlsSection() {
  return (
    <Section id="features" className="scroll-mt-16">
      <div className="grid items-center gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <Reveal direction="left" className="space-y-6">
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
            Five functions. One touch.
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            Choose single or double espresso, over ice, hot water, or hot foam directly from the touch panel.
          </p>
        </Reveal>
        <Reveal direction="right" className="overflow-hidden rounded-2xl shadow-soft-lg">
          <Image
            src="/images/em200-controls.jpg"
            alt="EM200 touch panel with One-Cup, Two-Cup, Over Ice, Hot Water, and Hot Foam controls"
            width={2048}
            height={2048}
            sizes="(max-width: 1024px) 100vw, 62vw"
            className="h-auto w-full"
          />
        </Reveal>
      </div>
    </Section>
  );
}
