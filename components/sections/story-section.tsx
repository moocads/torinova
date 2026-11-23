import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";

export function StorySection() {
  return (
    <Section>
      <Reveal className="mb-8 max-w-2xl space-y-4">
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
          Hot mornings. Iced afternoons. One machine.
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          Pull a rich espresso, pour it over ice, or steam milk for the drink you want now.
        </p>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-[1.18fr_0.82fr]">
        <Reveal direction="left" className="overflow-hidden rounded-2xl shadow-soft">
          <Image
            src="/images/em200-iced.jpg"
            alt="Iced espresso prepared with the TORINOVA EM200"
            width={1254}
            height={1254}
            sizes="(max-width: 768px) 100vw, 58vw"
            className="h-full w-full object-cover"
          />
        </Reveal>
        <Reveal direction="right" delay={0.1} className="overflow-hidden rounded-2xl shadow-soft">
          <Image
            src="/images/em200-milk-foam.jpg"
            alt="Creamy milk foam prepared with the EM200 steam wand"
            width={1254}
            height={1254}
            sizes="(max-width: 768px) 100vw, 40vw"
            className="h-full w-full object-cover"
          />
        </Reveal>
      </div>
    </Section>
  );
}
