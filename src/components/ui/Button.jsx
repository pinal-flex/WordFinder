import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { textVariants } from "./Text";

export const buttonVariants = cva("", {
  variants: {
    variant: {
      default: "",
      primary: "bg-indigo-400",
      secondary: "bg-violet-50",
      ghost: "",
      hidden: "",
      outline: "border border-gray-300",
    },
    size: {
      default: "px-4 md:px-6 py-3 md:py-4",
      xl: "px-4 sm:px-8 py-4",
      lg: "px-4 py-2",
      base: "px-4 py-3",
      sm: "",
      icon: "h-6 w-6",
    },
  },

  defaultVariants: {
    variant: "default",
    size: "",
  },
});

export default function Button({
  className,
  variant,
  size,
  hasDropDown,
  children,
  ...props
}) {
  return (
    <button
      className={cn(
        buttonVariants({ variant, size, className }),
        textVariants({ variant: "sm", weight: "medium" })
      )}
      {...props}
    >
      {children}
      {hasDropDown}
    </button>
  );
}
