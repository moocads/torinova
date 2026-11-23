import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";

const routineDetails = [
  "57 oz removable water tank",
  "Built-in descaling mode",
  "Removable drip tray",
];

export function OwnershipSection() {
  return (
    <Section>
      <Reveal className="mb-8 max-w-2xl space-y-4">
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
          Built around real routines.
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          Fewer refills, straightforward cleaning, and the tools you need to start brewing.
        </p>
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal direction="left" className="overflow-hidden rounded-2xl shadow-soft">
          <Image
            src="/images/em200-water-tank.jpg"
            alt="The EM200 removable 57 ounce water tank"
            width={1254}
            height={1254}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full"
          />
        </Reveal>
        <Reveal direction="right" className="overflow-hidden rounded-2xl shadow-soft">
          <Image
            src="/images/em200-in-the-box.jpg"
            alt="EM200 espresso machine and included accessories"
            width={2048}
            height={2048}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full"
          />
        </Reveal>
      </div>
      <Reveal className="mt-8 grid gap-4 border-t pt-8 sm:grid-cols-3">
        {routineDetails.map((detail) => (
          <p key={detail} className="font-display text-lg font-medium">
            {detail}
          </p>
        ))}
      </Reveal>
    </Section>
  );
}
