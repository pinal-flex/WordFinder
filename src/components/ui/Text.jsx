import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

export const textVariants = cva("", {
  variants: {
    variant: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-sm sm:text-lg",
      xl: "",
      "3xl": "",
      "4xl": "",
      "5xl": "",
      "6xl": "text-3xl md:text-6xl",
    },
    weight: {
      medium: "font-medium",
      normal: "",
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
