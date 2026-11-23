import { Mail } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Tell us about your market.",
    text: "Share your region, channels, customer profile, and the type of partnership you are exploring.",
  },
  {
    title: "Review the fit.",
    text: "We will look at product positioning, market requirements, and the commercial opportunity together.",
  },
  {
    title: "Plan the launch.",
    text: "Aligned partners can move into product, merchandising, and launch planning.",
  },
];

export function PartnershipProcessSection() {
  const emailHref = `mailto:${siteConfig.partnershipEmail}?subject=TORINOVA%20Partnership%20Inquiry`;

  return (
    <Section className="bg-accent">
      <Reveal>
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
          Start a conversation.
        </h2>
      </Reveal>
      <div className="mt-12 divide-y border-y border-accent-foreground/20">
        {steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.1}>
            <div className="grid gap-4 py-8 md:grid-cols-[0.82fr_1.18fr] md:gap-8">
              <h3 className="font-display text-2xl font-semibold">{step.title}</h3>
              <p className="max-w-2xl text-lg leading-relaxed text-accent-foreground/75">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-12">
        <a href={emailHref} className={cn(buttonVariants({ size: "lg" }), "min-w-44")}>
          Contact Partnerships
          <Mail aria-hidden="true" />
        </a>
      </Reveal>
    </Section>
  );
}
