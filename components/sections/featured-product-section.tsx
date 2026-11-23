import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Coffee, Droplets, Milk, Snowflake } from "lucide-react";
import { Container } from "@/components/layout/container";
import { OrbitingAccent } from "@/components/motion/orbiting-accent";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const functions = [
  { label: "Espresso", icon: Coffee },
  { label: "Over Ice", icon: Snowflake },
  { label: "Hot Water", icon: Droplets },
  { label: "Hot Foam", icon: Milk },
] as const;

export function FeaturedProductSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <Container className="relative grid items-center gap-12 py-16 lg:min-h-[36rem] lg:grid-cols-[1fr_0.95fr] lg:gap-16">
        <Reveal direction="left" className="flex max-w-xl flex-col items-start gap-8">
          <div className="space-y-4">
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-black sm:text-5xl">
              EM200
            </h2>
            <p className="text-lg leading-relaxed text-black">
              A compact 20-bar espresso machine with one-touch controls and the flexibility to move from hot to iced.
            </p>
          </div>
          <ul className="flex flex-wrap gap-3">
            {functions.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-black/5 px-3 py-2 text-sm font-medium text-black"
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {item.label}
                </li>
              );
            })}
          </ul>
          <Link
            href="/products/em200"
            className={cn(buttonVariants({ variant: "default", size: "lg" }), "min-w-44")}
          >
            View Product
            <ArrowRight aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal
          direction="right"
          className="relative ml-auto aspect-square w-full max-w-md lg:max-w-lg"
        >
          <OrbitingAccent />
          <Image
            src="/images/em200-front.png"
            alt="TORINOVA EM200 home espresso machine"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="relative z-10 object-contain"
          />
        </Reveal>
      </Container>
    </section>
  );
}
