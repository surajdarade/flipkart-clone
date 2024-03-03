import SeoMetadata from "../../SEO/SeoMetadata.jsx";
// eslint-disable-next-line no-unused-vars
import { useAuth } from "../../context/auth.jsx";
import ScrollToTopOnRouteChange from "../../utils/ScrollToTopOnRouteChange.jsx";
import Categories from "../../components/header/Categories.jsx";
import Banner from "./Banner/Banner.jsx";
import DealSlider from "./DealSlider/DealSlider.jsx";
import ProductSlider from "./ProductsListing/ProductSlider.jsx";
import { electronicProducts } from "../../utils/electronics.js";
import { accessories } from "../../utils/accessories.js";
import { fashionProducts } from "../../utils/fashion.js";
import { applianceProducts } from "../../utils/appliances.js";
import { furnitureProducts } from "../../utils/furniture.js";
import electronics from "../../assets/images/electronics-card.jpg";
import accessoryCard from "../../assets/images/accessory-card.jpg";
import fashionCard from "../../assets/images/fashion-card.jpg";
import applianceCard from "../../assets/images/appliance-card.jpg";
import furnitureCard from "../../assets/images/furniture-card.jpg";
import Suggestion from "./Suggestions/Suggestion.jsx";

const Home = () => {
    // const [auth, setAuth] = useAuth();
    return (
        <>
            <SeoMetadata title="Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!" />
            <ScrollToTopOnRouteChange />
            <Categories />
            <main className="flex flex-col items-center gap-3 px-2 pb-5 sm:mt-2">
                {/* <pre className="min-h-[60vh]">
                    {JSON.stringify(auth, null, 3)}
                </pre> */}
                <Banner />
                <DealSlider title={"Discounts for You"} />
                <ProductSlider
                    title={"Best of Electronics"}
                    products={electronicProducts}
                    logo={electronics}
                />
                <ProductSlider
                    title={"Beauty, Toys & More"}
                    products={accessories}
                    logo={accessoryCard}
                />
                <Suggestion
                    title={"Suggested for You"}
                    tagline={"Based on Your Activity"}
                />

                <ProductSlider
                    title={"Fashion Top Deals"}
                    products={fashionProducts}
                    logo={fashionCard}
                />
                <ProductSlider
                    title={"TVs & Appliances"}
                    products={applianceProducts}
                    logo={applianceCard}
                />
                <ProductSlider
                    title={"Furniture & More"}
                    products={furnitureProducts}
                    logo={furnitureCard}
                />
            </main>
        </>
    );
};

export default Home;
