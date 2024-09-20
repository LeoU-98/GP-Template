import BreadCrumb from "../ui/BreadCrumb";
import ProductImagePreview from "./ProductImagePreview";
import ProductSpecifications from "./ProductSpecifications";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./RelatedProducts";

//////////////////////////////////////////////////////////

function ProductView() {
  return (
    <>
      <BreadCrumb />
      <main className="container mx-auto mb-16 px-2">
        <div className="flex flex-col items-center bg-white p-4 lg:flex-row">
          <ProductImagePreview />
          <ProductSpecifications />
        </div>
        <ProductTabs />
        <RelatedProducts />
      </main>
    </>
  );
}

export default ProductView;
