import {Outlet} from "react-router-dom";
import SubNavbar from "../layouts/SubNavbar.jsx";

const SubNavbarLayout = ({ }) => {

    return (
        <>
            <SubNavbar/>
            <Outlet/>
        </>

    );
};

export default SubNavbarLayout;