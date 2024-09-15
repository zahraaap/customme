import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const menuItems = [
    { id: 1, name: "پوشاک" },
    { id: 2, name: "لوازم خانه" },
    { id: 3, name: "قاب موبایل" },
    { id: 4, name: "اکسسوری" },
    { id: 5, name: "مپرسه و اداره" },
    { id: 6, name: "کارت و پوستر" },
    { id: 7, name: "جشن و مهمانی" }
]

const Subnavbar = () => {
    return (
        <Container tag="nav"
            containerClassName="hidden lg:block"
            wrapperClasName="flex items-center gap-x-8">
            <Button text=" خودت طراحیش کن!"
                size="md"
                rightIcon="magicpen"
                className="whitespace-nowrap"
            />
            <div className="flex items-center justify-between flex-1 gap-x-8 pl-6">
                {
                    menuItems.map(item => {
                        return (
                            <span key={item.id} className="px-0.5 body-3 whitespace-nowrap">
                                {item.name}
                            </span>
                        )
                    })
                }

            </div>
        </Container>
    );
};

export default Subnavbar;