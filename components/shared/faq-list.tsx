import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/faq";
import { cn } from "@/lib/utils";

interface FaqListProps {
  items: ReadonlyArray<FaqItem>;
  className?: string;
}

export function FaqList({ items, className }: FaqListProps) {
  return (
    <div className={cn("divide-y border-y", className)}>
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-lg font-semibold focus-visible:ring-2 focus-visible:ring-ring sm:text-xl">
            {item.question}
            <ChevronDown
              className="size-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="max-w-3xl pb-6 leading-relaxed text-muted-foreground">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
