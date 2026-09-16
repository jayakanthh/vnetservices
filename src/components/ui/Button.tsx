"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      withArrow = false,
      children,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary:
        "bg-(--vnet-violet) text-white hover:bg-(--vnet-violet-light) shadow-sm",
      secondary:
        "bg-white text-(--foreground) hover:bg-(--vnet-off-white) shadow-sm border border-(--vnet-silver-light)",
      outline:
        "border-2 border-(--vnet-violet) text-(--vnet-violet) hover:bg-(--vnet-violet) hover:text-white",
      ghost:
        "bg-transparent text-(--foreground) hover:bg-(--vnet-off-white)",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-sm md:text-base",
      lg: "px-8 py-4 text-base md:text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -1 }}
        whileTap={{ y: 0 }}
        className={cn(
          "relative inline-flex items-center justify-center font-medium tracking-wide transition-colors duration-300 overflow-hidden rounded-full",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {withArrow && (
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";
