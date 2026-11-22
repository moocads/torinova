import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps extends React.ComponentProps<"section"> {
  containerClassName?: string;
}

// Vertical rhythm uses the spacing scale only: py-16 = 64px is the largest allowed step
export function Section({ className, containerClassName, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-16", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
