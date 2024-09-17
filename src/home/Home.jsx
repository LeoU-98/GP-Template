import BigPromo from "./BigPromo";
import BlogPreview from "../Blog/BlogPreview";
import CategoryCarousel from "./CategoryCarousel";
import DealOfTheDay from "./DealOfTheDay";
import FeaturePromo from "./FeaturePromo";
import IntroCarousel from "./IntroCarousel";
import NewsLetter from "./NewsLetter";
import Promo from "./Promo";
import SpecialProducts from "./SpecialProducts";
import Testimonial from "./Testimonial";
import OtherProducts from "./OtherProducts";

function Home() {
  return (
    <main>
      <IntroCarousel />
      <CategoryCarousel />
      <Promo />
      <SpecialProducts />
      <BigPromo />
      <FeaturePromo />
      <DealOfTheDay />
      <OtherProducts />
      <div className="py-10">
        <NewsLetter />
        <Testimonial />
      </div>
      <BlogPreview />
    </main>
  );
}

export default Home;
