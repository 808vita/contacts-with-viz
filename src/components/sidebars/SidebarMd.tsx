import React from "react";
import MenuItems from "./MenuItems";
/**
 *
 * @returns JSX.Element
 *
 * side bar component
 */
const SidebarMd: () => JSX.Element = () => {
  return (
    <div className="hidden md:block">
      <MenuItems />
    </div>
  );
};

export default SidebarMd;
