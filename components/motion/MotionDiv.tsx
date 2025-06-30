"use client";

import { HTMLMotionProps, motion } from "motion/react";

export default function MotionDiv(props?: HTMLMotionProps<"div">) {
  return <motion.div {...props} />;
}
