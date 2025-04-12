import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

export const textVariants = cva("", {
  variants: {
    variant: {
      sm: "text-sm",
      base: "text-sm sm:text-base",
      lg: "text-sm sm:text-lg",
      xl: "text-xl",
      "3xl": "text-2xl sm:text-3xl",
      "4xl": "text-2xl sm:text-4xl",
      "5xl": "",
      "6xl": "text-3xl md:text-6xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      extrabold: "font-extrabold",
    },
  },

  defaultVariants: {
    variant: "sm",
    weight: "normal",
  },
});

export function Text({
  type = "p",
  className,
  variant,
  children,
  weight,
  ...props
}) {
  const Component = type;
  return (
    <Component
      className={cn(textVariants({ variant, weight }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}
