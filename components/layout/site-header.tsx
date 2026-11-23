import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NavLink } from "@/components/layout/nav-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { Container } from "./container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/92 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="TORINOVA home" className="shrink-0">
          <Image
            src="/logos/torinova-logo.svg"
            alt="TORINOVA"
            width={491}
            height={172}
            className="h-auto w-36"
            unoptimized
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            />
          ))}
        </nav>
        <a
          href={siteConfig.walmartUrl}
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants(), "hidden md:inline-flex")}
        >
          Buy at Walmart
          <ExternalLink aria-hidden="true" />
        </a>
        <MobileNav nav={siteConfig.nav} walmartUrl={siteConfig.walmartUrl} />
      </Container>
    </header>
  );
}
