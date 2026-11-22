import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

// Card standard (§6): soft shadow, hover → stronger shadow + translateY(-4px)
export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col gap-4 rounded-xl border bg-card p-6 text-card-foreground shadow-soft transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-soft-lg",
        className,
      )}
    >
      <span className="flex size-12 items-center justify-center rounded-lg bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </article>
  );
}
