import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
/**
 *
 * @returns JSX.Element
 *
 * Navbar component
 * based on path display relevant text 
 */
const Navbar: () => JSX.Element = () => {
  const { pathname } = useLocation();
  const [navText, setNavText] = useState("");

  console.log(pathname, "pathname");

  useEffect(() => {
    switch (pathname) {
      case "/":
        setNavText("Home Page");
        break;
      case "/contacts":
        setNavText("Contacts Page");
        break;
      case "/contacts/create":
        setNavText("Create Contact");
        break;
      case "/contacts/edit":
        setNavText("Edit Contact");
        break;
      case "/dashboard":
        setNavText("Dashboard Page");
        break;
      default:
        setNavText("Welcome?");
        break;
    }
  }, [pathname]);

  return (
    <nav className="bg-violet-100 flex justify-center items-center p-5">
      <span className="text-3xl font-thin">{navText}</span>
    </nav>
  );
};

export default Navbar;
