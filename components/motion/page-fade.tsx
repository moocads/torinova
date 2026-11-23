"use client";

import { motion, useReducedMotion } from "motion/react";
import { PAGE_FADE } from "@/lib/motion";

// Page-load fade-in (Standard §7)
export function PageFade({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className="flex flex-1 flex-col"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={reduceMotion ? { duration: 0 } : PAGE_FADE}
    >
      {children}
    </motion.div>
  );
}
