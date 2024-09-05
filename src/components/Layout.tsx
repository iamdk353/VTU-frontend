import Nav from "@/components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
