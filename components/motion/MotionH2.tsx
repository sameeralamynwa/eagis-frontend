"use client";

import { HTMLMotionProps, motion } from "motion/react";

export default function MotionH2(props?: HTMLMotionProps<"h2">) {
  return <motion.h2 {...props} />;
}
