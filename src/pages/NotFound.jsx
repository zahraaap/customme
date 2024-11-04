import Navbar from "../layouts/Navbar";
import SubNavbar from "../layouts/SubNavbar";
import Footer from "../layouts/Footer";
import Container from "../components/ui/Container";
import LinkButton from "../components/ui/LinkButton";

const NotFoundPage = () => {
    return (
        <>
            <Navbar/>
            <SubNavbar/>
            <Container tag="section" wrapperClassName="flex flex-col items-center gap-y-10">
                <img src="/images/notfound/not-found.png" alt="404 چیزی پیدا نشد" className="h-64 w-auto"/>
                <h2 className="heading-3 text-gray-950 ">صفحه مورد نظر یافت نشد</h2>
                <LinkButton href="/"
                            variant="outline"
                            color="primary"
                            rightIcon="arrow-right"
                            text="بازگشت به صفحه اول"
                            size="lg"/>
            </Container>
            <Footer/>
        </>
    );
};
export default NotFoundPage;