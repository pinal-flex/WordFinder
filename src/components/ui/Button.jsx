import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

export const buttonVariants = cva("", {
  variants: {
    variant: {
      default: "",
      primary: "",
      secondary: "",
      ghost: "",
      hidden: "",
    },
    size: {
      default: "",
      sm: "",
      icon: "",
    },
  },

  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export default function Button({ className, variant, size, hasDropDown, children, ...props }) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}{hasDropDown}
    </button>
  );
}

