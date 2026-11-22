"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { EASE_OUT, SCROLL_REVEAL, TWO_COLUMN_OFFSET_X } from "@/lib/motion";

type Direction = "up" | "left" | "right";

interface RevealProps extends HTMLMotionProps<"div"> {
  /** up = default scroll reveal; left/right = two-column layouts animating toward center */
  direction?: Direction;
  delay?: number;
}

const OFFSETS: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: SCROLL_REVEAL.offsetY },
  left: { x: -TWO_COLUMN_OFFSET_X, y: 0 },
  right: { x: TWO_COLUMN_OFFSET_X, y: 0 },
};

// Scroll animation standard (§7): opacity 0→1, y 30→0, once, amount 0.2
export function Reveal({ direction = "up", delay = 0, children, ...props }: RevealProps) {
  const offset = OFFSETS[direction];
  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: SCROLL_REVEAL.once, amount: SCROLL_REVEAL.viewportAmount }}
      transition={{ duration: SCROLL_REVEAL.duration, ease: EASE_OUT, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
