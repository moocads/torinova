"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface OrbitingAccentProps {
  className?: string;
}

/** Soft circular accent that slowly travels on a circular path. */
export function OrbitingAccent({ className }: OrbitingAccentProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("pointer-events-none absolute inset-[12%] z-0", className)}
      aria-hidden="true"
      animate={reduceMotion ? undefined : { rotate: 360 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 22, repeat: Infinity, ease: "linear" }
      }
    >
      <div className="absolute left-1/2 top-0 size-[78%] -translate-x-1/2 -translate-y-[18%] rounded-full bg-[oklch(0.86_0.045_72)]" />
    </motion.div>
  );
}
