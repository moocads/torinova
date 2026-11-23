import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";

export function CafeMenuSection() {
  return (
    <Section id="drinks" className="scroll-mt-16">
      <h2 className="sr-only">Your daily café menu</h2>
      <Reveal className="overflow-hidden rounded-2xl shadow-soft-lg">
        <Image
          src="/images/em200-lifestyle.jpg"
          alt="TORINOVA EM200 with espresso, americano, latte, cappuccino, and iced latte"
          width={2048}
          height={2048}
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="h-auto w-full"
        />
      </Reveal>
    </Section>
  );
}
