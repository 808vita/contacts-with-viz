import React from "react";
import MenuItems from "./MenuItems";
/**
 *
 * @returns JSX.Element
 *
 * side bar component
 */
const MobileMenu: () => JSX.Element = () => {
  return (
    <div className="md:hidden">
      MobileMenu
      <MenuItems />
    </div>
  );
};

export default MobileMenu;
