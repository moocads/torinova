import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/lib/site-config";
import { Container } from "./container";

export async function SiteFooter({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Footer" });

  return (
    <footer className="border-t py-8">
      <Container className="flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:justify-between">
        <p>
          © <CopyrightYear /> {siteConfig.name}. {t("rights")}
        </p>
        <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-foreground">
          {siteConfig.contact.email}
        </a>
      </Container>
    </footer>
  );
}

// Cached so the year doesn't force dynamic rendering under cacheComponents
async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}
