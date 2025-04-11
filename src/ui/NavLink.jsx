import React from "react";
import { DropDown } from "../icons";

const NavLink = ({ children, href, hasDropDown, className }) => {
  return (
    <a href={href} className={className}>
      {children}
      {hasDropDown && <DropDown className="ml-1"/>}
    </a>
  );
};
export default NavLink;
