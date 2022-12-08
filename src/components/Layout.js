import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import HiddenLines from "./HiddenLines";

const Layout = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <div className="flex-1 flex items-center z-0 justify-center max-w-6xl mx-auto px-4 lg:space-x-0 ">
        <Outlet />
      </div>
      <Footer />

      <div className="fixed top-0 left-0 z-0">
        {/* <HiddenLines /> */}
      </div>
    </div>
  );
};

export default Layout;
