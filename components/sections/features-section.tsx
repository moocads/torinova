import { getTranslations } from "next-intl/server";
import { ShieldCheck, Sparkles, Zap, type LucideIcon } from "lucide-react";
import { Section } from "@/components/layout/section";
import { FeatureCard } from "@/components/shared/feature-card";
import { Reveal } from "@/components/motion/reveal";
import { STAGGER_CHILDREN } from "@/lib/motion";

const FEATURES: { key: "one" | "two" | "three"; icon: LucideIcon }[] = [
  { key: "one", icon: Sparkles },
  { key: "two", icon: ShieldCheck },
  { key: "three", icon: Zap },
];

// Example 3-col → 1-col grid (Standard §4)
export async function FeaturesSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Features" });

  return (
    <Section id="services" className="bg-muted/40">
      <Reveal className="mb-12 flex max-w-2xl flex-col gap-4">
        <h2 className="text-3xl font-semibold tracking-tight">{t("title")}</h2>
        <p className="text-muted-foreground">{t("description")}</p>
      </Reveal>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {FEATURES.map(({ key, icon }, index) => (
          <Reveal key={key} delay={index * STAGGER_CHILDREN}>
            <FeatureCard
              icon={icon}
              title={t(`items.${key}.title`)}
              description={t(`items.${key}.description`)}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
