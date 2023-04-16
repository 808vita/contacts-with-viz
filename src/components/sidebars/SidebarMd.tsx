import React, { useState } from "react";
import MenuItems from "./MenuItems";
import MenuItemsMinimized from "./MenuItemsMinimized";
/**
 *
 * @returns JSX.Element
 *
 * side bar component
 */
const SidebarMd: () => JSX.Element = () => {
  const [menuActive, setMenuActive] = useState(false);

  /**
   * used for autoclosing the menu
   */
  const handleMenuClick = () => {
    setMenuActive((prev) => !prev);
  };

  /**
   * used for autoclosing the menu
   */
  const hideMenu = () => {
    setMenuActive(false);
  };

  return (
    <div className="hidden lg:block">
      <div
        className={`p-5 cursor-pointer hover:bg-violet-400 ${
          menuActive && "bg-violet-200"
        }`}
        onClick={handleMenuClick}
      >
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="5"></rect>
          <rect y="30" width="100" height="5"></rect>
          <rect y="60" width="100" height="5"></rect>
        </svg>
      </div>
      {menuActive && <MenuItems handleMenuClick={hideMenu} />}
      {!menuActive && <MenuItemsMinimized handleMenuClick={hideMenu} />}
    </div>
  );
};

export default SidebarMd;
