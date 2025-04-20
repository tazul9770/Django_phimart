import HeroCarousel from "../Components/home/Carousel/HeroCarousel";
import Category from "../Components/home/categories/Category";
import DiscountSection from "../Components/home/Discount/DiscountSection";
import Feature from "../Components/home/Feature";
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