import Title from "../../components/Title";
import Container from "../../components/ui/Container";
import Category from "../../components/Category";

const categories = [
    { id: 1, title: "قاب موبایل", image: "phone-case" },
    { id: 2, title: "کارت تبریک", image: "postal-card" },
    { id: 3, title: "اکسسوری", image: "accessory" },
    { id: 4, title: "لوازم تحریر", image: "stationery" },
    { id: 5, title: "لباس", image: "clothes" },
    { id: 6, title: "دکور خانه", image: "home-decor" }
  ];
  

const Categories = () => {
    return (
        <Container tag="section">
        <Title icon="medal-star" text="دسته بندی محصولات"/>
        
        <div className="flex items-center gap-x-6 mb-6" >
        <Category image="accessory" title="اکسسوری"/>
        
        {
            categories.map(category=>(
                <Category key={category.id}
                image={category.image}
                title={category.title}/>
            ))
        }
        </div>
        </Container>

    )
};
export default Categories;