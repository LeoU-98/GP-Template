import BigPromo from "./BigPromo";
import Blog from "./Blog";
import CategoryCarousel from "./CategoryCarousel";
import DealOfTheDay from "./DealOfTheDay";
import FeaturePromo from "./FeaturePromo";
import IntroCarousel from "./IntroCarousel";
import NewsLetter from "./NewsLetter";
import OtherProducts from "./OtherProducts";
import Promo from "./Promo";
import SpecialProducts from "./SpecialProducts";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <>
      <IntroCarousel />
      <div className="container mx-auto">
        <CategoryCarousel />
      </div>
      <Promo />
      <SpecialProducts />
      <BigPromo />
      <FeaturePromo />
      <DealOfTheDay />
      <div className="flex flex-col gap-8 py-10 xl:container xl:mx-auto xl:flex-row xl:justify-between">
        <OtherProducts />
        <OtherProducts />
      </div>
      <div className="py-10">
        <div>
          <NewsLetter />
        </div>
        <div className="container mx-auto">
          <Testimonial />
        </div>
      </div>
      <Blog />
    </>
  );
}

export default Home;
