import cn from "classnames";
import { useState } from "react";
import InlineSVG from "react-inlinesvg";
import Container from "../components/ui/Container";
import IconLogo from "@/components/logo/IconLogo";
// import Icon from "../components/ui/Icon";
import TypographyLogo from "@/components/logo/TypographyLogo";
import Button from "../components/ui/Button";
import Drawer from "./Drawer";
import { Link } from "react-router-dom";


const Navbar = () => {

        const [drawerIsOpen, setDrawerIsOpen] = useState(false);

        const openDrawer = () => {
                setDrawerIsOpen(true)

        };

        const closeDrawer = () => setDrawerIsOpen(false);

        return (
                <Container tag="nav"
                        wrapperClassName={cn("flex items-center justify-start lg:justify-between" ,
                                "gap-x-3 lg:gap-x-[4.75rem] ")}
                                
                                containerClassName="lg:border-b lg:border-b-gray-400">

                                
                        <Button variant="text"
                                color="gray"
                                size="custom"
                                text=""
                                className="lg:hidden p-1"
                                rightIcon="menu"
                                onClick={openDrawer} />

                        <Link to="/" className="flex items-center gap-x-1 order-1 md:order-none" >
                                <IconLogo />
                                <TypographyLogo className="hidden lg:block" />
                        </Link>

                        <div className="flex-1 relative">
                                <input type="text"
                                        placeholder="جستجو"
                                        className={cn("w-full py-3 pl-12 px-6 border border-gray-400 rounded-2xl",
                                                "outline-none placeholder:text-ac-primary",
                                                "hover:border-gray-600 focus:border-black")} />
                                <InlineSVG src="/icons/search.svg"
                                        className="w-6 h-6 fill-ac-primary absolute top-1/2 -translate-y-1/2 left-6" />
                        </div>


                        <div className="hidden md:flex items-center gap-x-4">
                                <Button variant="text"
                                        color="gray"
                                        text="ورود | ثبت‌نام"
                                        rightIcon="login" />
                                <Button variant="text"
                                        color="gray"
                                        text="سبد خرید"
                                        className="hidden lg:flex"
                                        rightIcon="shopping-cart" />
                        </div>

                        {drawerIsOpen && <Drawer closeDrawer={closeDrawer} />}

                </Container>
        );
};

export default Navbar;