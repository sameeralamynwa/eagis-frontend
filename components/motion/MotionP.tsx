"use client";

import { HTMLMotionProps, motion } from "motion/react";

export default function MotionP(props?: HTMLMotionProps<"p">) {
  return <motion.p {...props} />;
}
