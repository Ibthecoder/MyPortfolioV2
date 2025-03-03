import { Outlet } from "react-router-dom";
import Nav from "@Component/Nav";
import Footer from "@Section/Footer";

const PageLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default PageLayout;
