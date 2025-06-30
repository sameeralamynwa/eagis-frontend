"use client";

import { HTMLMotionProps, motion } from "motion/react";

export default function MotionLi(props?: HTMLMotionProps<"li">) {
  return <motion.li {...props} />;
}
