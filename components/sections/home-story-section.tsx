import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";

const principles = [
  "Useful functions should be easy to find.",
  "Daily care should feel straightforward.",
  "Good design should earn its place at home.",
];

export function HomeStorySection() {
  return (
    <>
      <Section>
        <Reveal className="max-w-4xl">
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Designed around the moment you want coffee, not the work behind it.
          </h2>
        </Reveal>
        <Reveal className="mt-12 overflow-hidden rounded-2xl shadow-soft-lg">
          <Image
            src="/images/em200-lifestyle.jpg"
            alt="TORINOVA EM200 in a bright home kitchen with espresso and latte drinks"
            width={2048}
            height={2048}
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="h-auto w-full"
          />
        </Reveal>
      </Section>
      <Section className="pt-0">
        <div className="divide-y border-y">
          {principles.map((principle, index) => (
            <Reveal key={principle} delay={index * 0.1}>
              <p className="py-8 font-display text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                {principle}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
