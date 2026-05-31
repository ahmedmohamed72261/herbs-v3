"use client";

import { forwardRef } from "react";
import { cn } from "@/src/shared/utils/cn";

const variants = {
  primary: "bg-primary text-white hover:bg-primary-dark active:bg-primary-dark shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30",
  secondary: "bg-charcoal text-white hover:bg-charcoal-light active:bg-charcoal-light",
  outline: "border-2 border-primary/30 text-primary hover:bg-primary hover:text-white glass backdrop-blur-none hover:border-primary",
  ghost: "text-charcoal hover:text-primary hover:bg-primary/5",
  gold: "bg-gradient-to-r from-gold to-gold-light text-white hover:from-gold-dark hover:to-gold shadow-lg shadow-gold/20",
} as const;

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
  xl: "px-10 py-5 text-lg",
} as const;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {loading && (
          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
