import Navbar from "../components/Navbar";
import MobileMenu from "../components/sidebars/MobileMenu";
import SidebarMd from "../components/sidebars/SidebarMd";

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
    <div className="flex flex-col flex-auto h-full lg:flex-row">
      <MobileMenu />
      <SidebarMd />
      <div className="grow lg:max-w-screen-2xl">
        <Navbar />
        <div className="md:m-5">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
