import { cn } from "@/lib/utils";

// Container standard (§4): max-w-7xl mx-auto px-6
export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-7xl px-6", className)} {...props} />;
}
