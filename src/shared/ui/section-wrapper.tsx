"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/src/shared/utils/cn";
import { fadeUp } from "@/src/shared/animations";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

export function SectionWrapper({
  id,
  className,
  containerClassName,
  children,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn("section-padding relative", className)}
    >
      <div className={cn("container-main", containerClassName)}>{children}</div>
    </motion.section>
  );
}
