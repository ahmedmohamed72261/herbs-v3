"use client";

import { cn } from "@/src/shared/utils/cn";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 md:p-8",
        hover && "hover:shadow-glass-hover hover:-translate-y-1",
        className,
      )}
    >
      {children}
    </div>
  );
}
