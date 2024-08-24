import ProductItem from "./ProductItem";

////////////////////////////
////     fake data      ////
////////////////////////////

import { productData } from "../utils/ProductsData";
import FilterBy from "./FilterBy";
import BreadCrumb from "../ui/BreadCrumb";
import Pagination from "../ui/Pagination";
import { useState } from "react";

/////////////////////////////

function Products() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12; // Adjust as needed

  // Calculate the total number of pages
  const pageCount = Math.ceil(productData.length / itemsPerPage);

  // Get current items
  const currentItems = productData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  console.log(currentPage);
  console.log(currentItems);

  // Define a function to handle page changes
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  return (
    <div className="products-helper container mx-auto mb-20 px-3 md:pl-0">
      <BreadCrumb />
      <div className="flex gap-3">
        <div className="hidden lg:block">
          <FilterBy />
        </div>
        <div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
            {currentItems.map((el, key) => (
              <ProductItem data={el} key={key} />
            ))}
          </div>
          <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
}

export default Products;

////////////////////////////////////////////////////

// function Products() {
//   return (
//     <div className="products-helper container mx-auto mb-20 px-3 md:pl-0">
//       <BreadCrumb />
//       <div className="flex gap-3">
//         <div className="hidden lg:block">
//           <FilterBy />
//         </div>
//         <div>
//           <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
//             {productData.map((el, key) => (
//               <ProductItem data={el} key={key} />
//             ))}
//           </div>
//           <Pagination />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Products;

//////////////////////////////////////////
//// This Section is Already Repeated ///
////////////////////////////////////////
