import { Container } from "@/components/layout/container";
import { Skeleton } from "@/components/ui/skeleton";

const CARD_COUNT = 3;

export function PageSkeleton() {
  return (
    <Container className="flex flex-col gap-8 py-16" aria-busy="true">
      <span className="sr-only">Loading…</span>
      <Skeleton className="h-12 w-2/3" />
      <Skeleton className="h-6 w-1/2" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {Array.from({ length: CARD_COUNT }, (_, i) => (
          <Skeleton key={i} className="aspect-[4/3] w-full" />
        ))}
      </div>
    </Container>
  );
}
