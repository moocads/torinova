"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const productImages = [
  {
    src: "/images/product-detail/EM200_lifestyle_cafe_quality.jpg",
    alt: "TORINOVA EM200 espresso machine on a sunlit kitchen counter",
  },
  {
    src: "/images/product-detail/EM200_one_touch_controls.jpg",
    alt: "TORINOVA EM200 one-touch control panel",
  },
  {
    src: "/images/product-detail/EM200_cafe_menu.jpg",
    alt: "Coffee drinks made with the TORINOVA EM200",
  },
  {
    src: "/images/product-detail/EM200_iced_espresso.jpg",
    alt: "Iced espresso prepared with the TORINOVA EM200",
  },
  {
    src: "/images/product-detail/EM200_20_bar_pressure.jpg",
    alt: "TORINOVA EM200 20-bar pressure system",
  },
  {
    src: "/images/product-detail/EM200_57oz_water_tank.jpg",
    alt: "TORINOVA EM200 removable 57 ounce water tank",
  },
  {
    src: "/images/product-detail/EM200_dimensions.jpg",
    alt: "TORINOVA EM200 dimensions and weight",
  },
  {
    src: "/images/product-detail/EM200_whats_in_the_box.jpg",
    alt: "TORINOVA EM200 and included accessories",
  },
] as const;

export function ProductImageGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeImage = productImages[activeIndex];

  useEffect(() => {
    thumbnailRefs.current[activeIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeIndex]);

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + productImages.length) % productImages.length);
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % productImages.length);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  }

  return (
    <div
      role="region"
      aria-label="Product images"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="min-w-0 rounded-2xl focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted/40 p-2 shadow-soft">
        <Image
          key={activeImage.src}
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          priority={activeIndex === 0}
          sizes="(max-width: 1024px) 100vw, 56vw"
          className="object-contain"
        />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={showPrevious}
          aria-label="Show previous product image"
          className="rounded-full"
        >
          <ChevronLeft aria-hidden="true" />
        </Button>

        <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto py-1">
          {productImages.map((image, index) => (
            <button
              key={image.src}
              ref={(node) => {
                thumbnailRefs.current[index] = node;
              }}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show image ${index + 1}: ${image.alt}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={cn(
                "relative size-16 shrink-0 overflow-hidden rounded-lg border-2 bg-muted transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                activeIndex === index
                  ? "border-brand-600"
                  : "border-transparent opacity-70 hover:border-border hover:opacity-100",
              )}
            >
              <Image src={image.src} alt="" fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={showNext}
          aria-label="Show next product image"
          className="rounded-full"
        >
          <ChevronRight aria-hidden="true" />
        </Button>
      </div>

      <p className="sr-only" aria-live="polite">
        Image {activeIndex + 1} of {productImages.length}
      </p>
    </div>
  );
}
