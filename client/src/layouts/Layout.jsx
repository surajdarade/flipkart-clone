import Header from "./../components/header/Header.jsx";
import Footer from "./../components/footer/Footer.jsx";
import Routers from "../routes/Routers.jsx";

const Layout = () => {
    return (
        <>
            <Header />
            <main className="min-h-[60vh] w-[100%] bg-[#f1f3f6]">
                <Routers />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
