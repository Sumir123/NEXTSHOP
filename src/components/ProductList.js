import { AiFillStar } from "react-icons/ai";

const ProductList = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 pt-8">
      {data.map((product) => (
        <div
          key={product.id}
          className="bg-[#E2E8F1] rounded-lg overflow-hidden shadow-md flex flex-col"
        >
          <a href={`/products/${product.id}`}>
            <img
              className="w-full h-48 object-cover duration-500 hover:opacity-90 hover:scale-95 "
              src={product.thumbnail}
              alt={product.title}
            />
          </a>
          <div className="p-4 flex flex-col flex-1">
            <h2 className="text-lg font-bold hover:text-[#3B82F6]">
              <a href={`/products/${product.id}`}>{product.title}</a>
            </h2>
            <p className="mt-2 text-gray-600 flex-1">{product.description}</p>
            <div className="mt-2 flex items-center">
              <span className="text-lg font-bold">
                $
                {(
                  (product.price * (100 - product.discountPercentage)) /
                  100
                ).toFixed(2)}
              </span>
              <span className="mx-2 text-gray-500 line-through">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-green-500">
                {product.discountPercentage}% off
              </span>
            </div>
            <div className="flex-none mt-4 flex justify-between items-center">
              <div className="flex items-center justify-center">
                <span className="text-gray-600 text-sm">Rating:</span>
                <span className="text-yellow-500 text-sm ml-1 flex gap-2 justify-between items-center">
                  <AiFillStar />
                  {product.rating}
                </span>
              </div>
              <span className="text-sm font-medium text-gray-500">
                {product.brand}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
