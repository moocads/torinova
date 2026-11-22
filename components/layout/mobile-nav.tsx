"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./language-switcher";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const tNav = useTranslations("Nav");
  const t = useTranslations("Common");

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        aria-label={open ? t("closeMenu") : t("openMenu")}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
      </Button>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full flex flex-col gap-2 border-b bg-background p-6 shadow-soft"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-base hover:bg-muted"
            >
              {tNav(item.key)}
            </Link>
          ))}
          <LanguageSwitcher className="pt-4" />
        </nav>
      )}
    </div>
  );
}
