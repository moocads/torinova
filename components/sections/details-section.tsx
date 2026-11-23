import { ChevronDown } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";

const keyDetails = [
  { value: "9.1 × 8.3 × 10.9 in", label: "Dimensions" },
  { value: "6.4 lb", label: "Weight" },
  { value: "120V, 60Hz", label: "Power supply" },
  { value: "Ground coffee", label: "Coffee type" },
];

const detailGroups = [
  {
    title: "Performance",
    items: ["20-bar pump", "1400W heating system", "Programmable cup size up to 4 fl oz"],
  },
  {
    title: "Care",
    items: ["Removable drip tray", "Built-in descaling mode", "Auto power-off after 8 minutes"],
  },
  {
    title: "Assurance",
    items: ["ETL Listed for the US and Canada", "One-year limited warranty", "Black finish"],
  },
];

export function DetailsSection() {
  return (
    <Section id="details" className="scroll-mt-16">
      <Reveal className="max-w-2xl">
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
          The essentials, clearly stated.
        </h2>
      </Reveal>
      <Reveal className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {keyDetails.map((item) => (
          <div key={item.label} className="rounded-2xl bg-card p-6 shadow-soft">
            <p className="text-sm text-muted-foreground">{item.label}</p>
            <p className="mt-3 font-display text-xl font-semibold tracking-tight">{item.value}</p>
          </div>
        ))}
      </Reveal>
      <Reveal className="mt-8">
        <details className="group rounded-2xl border bg-card p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-semibold focus-visible:ring-2 focus-visible:ring-ring">
            Full specifications
            <ChevronDown className="transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="grid gap-8 pt-8 md:grid-cols-3">
            {detailGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-display font-semibold">{group.title}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </details>
      </Reveal>
    </Section>
  );
}
