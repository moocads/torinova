import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface HoverImageProps extends Omit<ImageProps, "className"> {
  /** Tailwind aspect class keeps placeholder ratios correct, e.g. "aspect-video" */
  aspectClassName?: string;
  className?: string;
  imageClassName?: string;
}

// Image standard (§6): next/image, parent overflow-hidden, hover scale(1.05)
export function HoverImage({
  aspectClassName = "aspect-[4/3]",
  className,
  imageClassName,
  alt,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  ...props
}: HoverImageProps) {
  return (
    <div className={cn("group relative overflow-hidden rounded-xl", aspectClassName, className)}>
      <Image
        fill
        alt={alt}
        sizes={sizes}
        className={cn(
          "object-cover transition-transform duration-300 ease-out group-hover:scale-105",
          imageClassName,
        )}
        {...props}
      />
    </div>
  );
}
