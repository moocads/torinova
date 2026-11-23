import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";

interface PageHeroSectionProps {
  title: string;
  description?: string;
}

export function PageHeroSection({ title, description }: PageHeroSectionProps) {
  return (
    <section className="border-b">
      <Container className="py-16">
        <Reveal className="max-w-5xl space-y-6">
          <h1 className="font-display text-5xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {description ? (
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
