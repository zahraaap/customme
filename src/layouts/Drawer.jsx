import cn from "classnames";
import Button from "../components/ui/Button";
import PropTypes from "prop-types";


const menus= [
{
    id:1 ,
    items: [
    {id: 1, name:"پوشاک"},
    {id: 2, name:"لوازم خانه"},
    {id: 3, name:"قاب موبایل"},
    {id: 4, name:"اکسسوری"},
    {id: 5, name:"مپرسه و اداره"},
    {id: 6, name:"کارت و پوستر"},
    {id: 7, name:"جشن و مهمانی"}
    ]
},

{
    id: 2,
    items: [
        {id: 1, name:"همراه با کاستومی"},
        {id: 2, name:"خدمات مشتریان"},
        {id: 3, name:"راهنمای خرید"}
    ]
}


];


const Drawer = ({ closeDrawer }) => {


    return(

        <div className="bg-black/60 fixed top-0 bottom-0 left-0 right-0">

        <nav className={cn("bg-white flex flex-col justify-between gap-y-[4.5rem]",
            "fixed top-0 bottom-0 right-0 overflow-y-auto ")}>

                <Button variant="text" 
                        color="gray" 
                        text="" 
                        rightIcon="close"
                        onClick={closeDrawer}
                        className="absolute top-5 left-5" />

        {
            menus.map((menu )=> {
                return(
                    <div key={menu.id} className="w-full flex flex-col gap-y-8">
                        {
                            menu.items.map (item => {
                                return(
                                    <div key={item.id} className="flex justify-between items-center gap-x-8">
                                        {item.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })
        }

        </nav>

        </div>

    );
};

Drawer.propTypes = {
    closeDrawer: PropTypes.func
  }

export default Drawer ;