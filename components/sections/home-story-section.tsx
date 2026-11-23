import { Home, Sparkles, Touchpad } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";

const principles = [
  {
    icon: Touchpad,
    text: "Useful functions should be easy to find.",
  },
  {
    icon: Sparkles,
    text: "Daily care should feel straightforward.",
  },
  {
    icon: Home,
    text: "Good design should earn its place at home.",
  },
] as const;

export function HomeStorySection() {
  return (
    <section className="relative isolate overflow-hidden">
      <video
        className="absolute inset-0 size-full object-cover"
        src="/images/torinova-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-foreground/58" aria-hidden="true" />
      <Container className="relative grid gap-12 py-16 lg:min-h-[36rem] lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <Reveal direction="left">
          <h2 className="max-w-xl font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-background sm:text-5xl lg:text-6xl">
            Designed around the moment you want coffee, not the work behind it.
          </h2>
        </Reveal>
        <div className="flex flex-col gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Reveal key={principle.text} direction="right" delay={index * 0.1}>
                <div className="flex gap-4">
                  <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-lg bg-background/12 text-background">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="font-display text-xl font-semibold tracking-tight text-background sm:text-2xl">
                    {principle.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
