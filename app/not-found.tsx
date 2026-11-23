import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70dvh] max-w-3xl flex-col items-start justify-center gap-6 px-6">
      <h1 className="font-display text-5xl font-semibold tracking-tight">Page not found.</h1>
      <p className="max-w-md text-muted-foreground">
        The page you requested is unavailable.
      </p>
      <Link href="/" className={cn(buttonVariants({ size: "lg" }))}>
        <ArrowLeft aria-hidden="true" />
        Return home
      </Link>
    </main>
  );
}
