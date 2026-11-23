import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";

const partnerTypes = ["Distributors", "Retailers", "Regional agents", "Hospitality partners"];

export function PartnershipFitSection() {
  return (
    <Section>
      <Reveal className="max-w-4xl">
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
          Built for partners who value a clear product story.
        </h2>
      </Reveal>
      <Reveal className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {partnerTypes.map((type) => (
          <div key={type} className="border-t pt-6">
            <p className="font-display text-xl font-semibold">{type}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
