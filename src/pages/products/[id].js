import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import { getProductById } from "@/api/api";
import { GrPrevious, GrNext } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import useStore from "@/store/useStore";

const ProductDetails = () => {
  const { productDetail, fetchProductDetails, isLoading } = useStore();
  //for image slider
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionDuration, setTransitionDuration] = useState(0.5);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchProductDetails(id);
    }
  }, [id]);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? productDetail.images.length - 1 : prevIndex - 1
    );
    setTransitionDuration(0.5);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === productDetail.images.length - 1 ? 0 : prevIndex + 1
    );
    setTransitionDuration(0.5);
  };
  return (
    <div className="">
      {isLoading && <p>Loading...</p>}
      <div className=" px-5 py-8 md:px-20">
        <div className="md:flex md:flex-rap md:gap-10 ">
          <div className="w-full lg:w-1/2 relative">
            <div className="flex flex-row overflow-hidden">
              {productDetail?.images?.map((image, index) => (
                <img
                  key={index}
                  className="w-fit object-cover object-center max-h-[25rem]"
                  src={image}
                  alt={productDetail.title}
                  style={{
                    transform: `translateX(-${activeIndex * 100}%)`,
                    transition: `transform ${transitionDuration}s ease-in-out`,
                  }}
                />
              ))}
            </div>
            <div className="flex flex-row justify-between absolute top-[50%]">
              <button onClick={handlePrevious}>
                <GrPrevious size={20} className="opacity-80" />
              </button>
            </div>
            <div className="flex flex-row justify-between absolute top-[50%] right-1">
              <button onClick={handleNext}>
                <GrNext size={20} className="opacity-80" />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-8  ">
            <h1 className="text-center text-3xl font-semibold my-5">
              {productDetail.title}
            </h1>
            <p className="text-gray-600 mb-4">{productDetail.description}</p>
            <div className="flex mb-4">
              <span className="text-lg font-bold">
                $
                {(
                  (productDetail.price *
                    (100 - productDetail.discountPercentage)) /
                  100
                ).toFixed(2)}
              </span>
              <span className="mx-2 text-gray-500 line-through">
                ${productDetail.price}
              </span>
              <span className="text-green-500">
                {productDetail.discountPercentage}% off
              </span>
            </div>
            <div className="text-gray-600 text-sm font-bold mb-5">
              Stock:
              <span className="mx-2 text-gray-00 font-medium">
                {productDetail.stock}
              </span>
            </div>
            <div className="text-lg font-bold flex mb-5">
              <span className="text-gray-600 text-sm">Rating:</span>
              <span className="text-yellow-500 text-sm ml-1 flex gap-2 items-center">
                <AiFillStar />
                {productDetail.rating}
              </span>
            </div>
            <div className="flex justify-between items-center ">
              <span className="text-sm font-bold text-gray-500">Brand</span>
              <span className="text-sm font-bold text-gray-600 ">Category</span>
            </div>
            <div className="flex justify-between items-center mb-5">
              <span className="text-sm font-medium text-gray-500">
                {productDetail.brand}
              </span>
              <span className="text-sm font-medium text-gray-900 bg-[#F1F5F9] hover:bg-[#E2E8F0] p-1  rounded-md ">
                <a href={`/products/category/${productDetail.category}`}>
                  {productDetail.category}
                </a>
              </span>
            </div>
            <button className="bg-[#3B82F6] text-white py-2 px-4 rounded-md hover:bg-[#1D4ED8]">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
