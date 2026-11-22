"use client";

import { motion } from "motion/react";
import { PAGE_FADE } from "@/lib/motion";

// Page-load fade-in (Standard §7)
export function PageFade({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="flex flex-1 flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={PAGE_FADE}
    >
      {children}
    </motion.div>
  );
}
