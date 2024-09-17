import FeaturedProducts from "./FeaturedProducts";

function OtherProducts() {
  return (
    <div className="flex flex-col gap-8 px-4 py-10 xl:container xl:mx-auto xl:flex-row xl:justify-between xl:gap-3 2xl:gap-6">
      <FeaturedProducts />
      <FeaturedProducts />
    </div>
  );
}

export default OtherProducts;
