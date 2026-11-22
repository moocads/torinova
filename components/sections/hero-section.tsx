import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { HoverImage } from "@/components/shared/hover-image";
import { Reveal } from "@/components/motion/reveal";

// Example two-column section: left slides from x:-40, right from x:40 (Standard §7)
export async function HeroSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Hero" });

  return (
    <section className="py-16">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal direction="left" className="flex flex-col gap-6">
          <p className="text-sm font-medium uppercase tracking-wide text-brand-600 dark:text-brand-400">
            {t("eyebrow")}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">{t("title")}</h1>
          <p className="max-w-xl text-lg text-muted-foreground">{t("description")}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/#contact" className={buttonVariants({ size: "lg" })}>
              {t("primaryCta")}
            </Link>
            <Link href="/#services" className={buttonVariants({ size: "lg", variant: "outline" })}>
              {t("secondaryCta")}
            </Link>
          </div>
        </Reveal>
        <Reveal direction="right">
          <HoverImage
            src="/placeholders/hero-placeholder.jpg"
            alt="Placeholder Image"
            aspectClassName="aspect-video"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </Reveal>
      </Container>
    </section>
  );
}
