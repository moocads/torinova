import { Menu, X } from "lucide-react";
import { NavLink } from "@/components/layout/nav-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  nav: ReadonlyArray<{ readonly label: string; readonly href: string }>;
  walmartUrl: string;
}

export function MobileNav({ nav, walmartUrl }: MobileNavProps) {
  return (
    <details className="group md:hidden">
      <summary
        className="flex size-10 cursor-pointer list-none items-center justify-center rounded-lg border bg-background transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
        aria-label="Toggle navigation"
      >
        <Menu className="group-open:hidden" aria-hidden="true" />
        <X className="hidden group-open:block" aria-hidden="true" />
      </summary>
      <div className="absolute inset-x-0 top-full border-b bg-background/98 shadow-soft backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6" aria-label="Mobile navigation">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              className="rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-muted"
            />
          ))}
          <a
            href={walmartUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "mt-2")}
          >
            Buy at Walmart
          </a>
        </nav>
      </div>
    </details>
  );
}
