import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="mx-auto grid min-h-[100dvh] w-full max-w-7xl gap-8 px-6 py-16 lg:grid-cols-2">
      <div className="space-y-6 pt-16">
        <Skeleton className="h-16 w-full max-w-xl" />
        <Skeleton className="h-16 w-3/4 max-w-lg" />
        <Skeleton className="h-12 w-40" />
      </div>
      <Skeleton className="aspect-square w-full rounded-2xl" />
    </main>
  );
}
