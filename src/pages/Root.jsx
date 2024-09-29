import { Outlet } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import SubNavbar from "../layouts/SubNavbar";


const Root = () => {
  return (
    <>
      <Navbar />
      <SubNavbar />
      <Outlet />

    </>
  );
}

export default Root;