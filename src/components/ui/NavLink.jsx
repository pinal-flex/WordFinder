import { cn } from "../../lib/utils";

export default function NavLink({ href, hasDropDown, children, className = "" }) {
  return (
    <a href={href} className={cn("font-medium text-base", className)}>
      {children}
      {hasDropDown}
    </a>
  );
}