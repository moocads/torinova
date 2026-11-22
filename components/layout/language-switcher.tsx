"use client";

import { Suspense, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Languages } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LOCALE_LABELS: Record<Locale, string> = { en: "EN", zh: "中文" };

interface LanguageSwitcherProps {
  className?: string;
}

// usePathname() must sit inside <Suspense> under cacheComponents — wrapper keeps every usage safe
export function LanguageSwitcher(props: LanguageSwitcherProps) {
  return (
    <Suspense fallback={<div className={cn("h-8 w-24", props.className)} aria-hidden="true" />}>
      <LanguageSwitcherInner {...props} />
    </Suspense>
  );
}

function LanguageSwitcherInner({ className }: LanguageSwitcherProps) {
  const t = useTranslations("Common");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <div role="group" aria-label={t("language")} className={cn("flex items-center gap-1", className)}>
      <Languages className="size-4 text-muted-foreground" aria-hidden="true" />
      {routing.locales.map((target) => (
        <button
          key={target}
          type="button"
          disabled={isPending}
          aria-pressed={locale === target}
          onClick={() => startTransition(() => router.replace(pathname, { locale: target }))}
          className={cn(
            "rounded-md px-2 py-1 text-sm transition-all duration-300 ease-out hover:bg-muted",
            locale === target ? "font-semibold text-foreground" : "text-muted-foreground",
          )}
        >
          {LOCALE_LABELS[target]}
        </button>
      ))}
    </div>
  );
}
