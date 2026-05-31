"use client";

import { motion } from "framer-motion";
import { cn } from "@/src/shared/utils/cn";
import { fadeUp } from "@/src/shared/animations";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  alignment?: "center" | "left";
  badge?: string;
}

export function PageHeader({ title, description, className, alignment = "center", badge }: PageHeaderProps) {
  return (
    <div className={cn("section-padding pb-0 relative", className)}>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={cn(
          "container-main max-w-4xl relative",
          alignment === "center" && "text-center",
          alignment === "left" && "text-left",
        )}
      >
        {badge && (
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
            {badge}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-semibold text-charcoal mb-6 leading-[1.1]">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-charcoal-light leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}
