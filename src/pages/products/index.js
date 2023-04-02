import { useEffect, useState } from "react";
import ProductList from "@/components/ProductList";
import useStore from "@/store/useStore";

const Product = () => {
  const {
    products,
    isLoading,
    currentPage,
    pageSize,
    totalPages,
    fetchProductData,
    setCurrentPage,
  } = useStore();

  useEffect(() => {
    fetchProductData();
  }, [currentPage]);

  return (
    <div className="px-5 md:px-20 ">
      <h1 className="text-3xl font-bold text-center pt-2 md:pt-5 text-slate-800">
        All Products
      </h1>
      {isLoading ? (
        <div>loading....</div>
      ) : (
        <>
          <ProductList data={products} />

          {/* pagination */}
          <div className="flex justify-center pt-8">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                className={`px-3 py-2 rounded-lg mx-1 ${
                  currentPage === index + 1
                    ? "bg-[#3B82F6] text-[#F8FAFC]"
                    : "bg-[#E4E4E7] text-[#3F3F46] hover:bg-[#D4D4D8]"
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default Product;
