import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";

export function AboutPurposeSection() {
  return (
    <Section>
      <div className="grid items-center gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <Reveal direction="left" className="space-y-6">
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
            Make the daily ritual feel lighter.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We focus on the parts of home coffee that shape every day: clear controls, useful versatility, manageable care, and a compact footprint.
          </p>
        </Reveal>
        <Reveal direction="right" className="overflow-hidden rounded-2xl shadow-soft-lg">
          <Image
            src="/images/em200-iced.jpg"
            alt="Iced espresso prepared at home with the TORINOVA EM200"
            width={1254}
            height={1254}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="h-auto w-full"
          />
        </Reveal>
      </div>
    </Section>
  );
}
