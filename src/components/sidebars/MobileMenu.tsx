import React, { useState } from "react";
import MenuItems from "./MenuItems";
/**
 *
 * @returns JSX.Element
 *
 * side bar component
 */
const MobileMenu: () => JSX.Element = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuClick = () => {
    setMenuActive((prev) => !prev);
  };

  return (
    <div className="lg:hidden">
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
      {menuActive && <MenuItems handleMenuClick={handleMenuClick} />}
    </div>
  );
};

export default MobileMenu;
