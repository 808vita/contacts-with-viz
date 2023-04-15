import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
/**
 *
 * @returns JSX.Element
 *
 * layout component
 *
 * to be placed in root level
 */
const Layout: ({ children }: any) => JSX.Element = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
