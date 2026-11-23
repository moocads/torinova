import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t py-8">
      <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="space-y-6">
          <Link href="/" aria-label="TORINOVA home" className="inline-flex">
            <Image
              src="/logos/torinova-logo.png"
              alt="TORINOVA"
              width={491}
              height={172}
              className="h-auto w-32"
              loading="eager"
              unoptimized
            />
          </Link>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Home espresso, made easier to understand and enjoy.
          </p>
        </div>
        <div className="space-y-6 lg:text-right">
          <nav className="flex flex-wrap gap-x-6 gap-y-3 lg:justify-end" aria-label="Footer navigation">
            {siteConfig.nav.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium hover:text-primary">
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-muted-foreground">© 2026 TORINOVA. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
