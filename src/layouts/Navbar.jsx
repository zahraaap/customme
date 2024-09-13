import cn from "classnames";
import { useState } from "react";
import InlineSVG from "react-inlinesvg";
import Container from "../components/ui/Container";
import IconLogo from "@/components/logo/IconLogo";
// import Icon from "../components/ui/Icon";
import TypographyLogo from "@/components/logo/TypographyLogo";
import Button from "../components/ui/Button";
import Drawer from "./Drawer";


const Navbar = () => {

        const [drawerIsOpen, setDrawerIsOpen] = useState(false);

        const openDrawer = () => {
                setDrawerIsOpen(true)

        };

        const closeDrawer = () => setDrawerIsOpen(false);

        return (
                <Container tag="nav"
                        wrapperClasName="flex items-center justify-between gap-x-[4.75rem]">

                        <Button variant="text"
                                color="gray"
                                text=""
                                rightIcon="menu"
                                onClick={openDrawer} />

                        <a href="/" className="flex items-center gap-x-1">
                                <IconLogo />
                                <TypographyLogo />
                        </a>
                        <div className="flex-1 relative">
                                <input type="text"
                                        placeholder="جستجو"
                                        className={cn("w-full py-3 pl-12 px-6 border border-gray-400 rounded-2xl",
                                                "outline-none placeholder:text-ac-primary",
                                                "hover:border-gray-600 focus:border-black")} />
                                <InlineSVG src="/icons/search.svg"
                                        className="w-6 h-6 fill-ac-primary absolute top-1/2 -translate-y-1/2 left-6" />
                        </div>


                        <div className="flex items-center gap-x-4">
                                <Button variant="text"
                                        color="gray"
                                        text="ورود | ثبت‌نام"
                                        rightIcon="login" />
                                <Button variant="text"
                                        color="gray"
                                        text="سبد خرید"
                                        rightIcon="shopping-cart" />
                        </div>

                        {drawerIsOpen && <Drawer closeDrawer={closeDrawer} />}

                </Container>
        );
};

export default Navbar;