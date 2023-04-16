import Navbar from "../components/Navbar";
import { PropsChildren } from "../components/contactForm/hooks/ContactFormContext";
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
const Layout: ({ children }: PropsChildren) => JSX.Element = ({ children }) => {
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
