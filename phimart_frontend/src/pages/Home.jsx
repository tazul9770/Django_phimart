import HeroCarousel from "../Components/Carousel/HeroCarousel";
import Category from "../Components/categories/Category";
import DiscountSection from "../Components/Discount/DiscountSection";
import Feature from "../Components/Feature";
import Products from "../Components/Product/Products";

const Home = () => {
    return (
        <div>
            <HeroCarousel/>
            <Feature/>
            <Category/>
            <Products/>
            <DiscountSection/>
        </div>
    );
};

export default Home;