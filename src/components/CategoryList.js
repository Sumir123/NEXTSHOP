import Link from "next/link";

const CategoryList = ({ category }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-10">
        {category.map((categories, index) => (
          <Link href={`/products/category/${categories}`} key={index}>
            <div
              key={index}
              className="h-20 flex justify-center font-medium items-center bg-[#F1F5F9] rounded-lg  shadow-sm cursor-pointer hover:bg-[#E2E8F0]"
            >
              {categories.toUpperCase()}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CategoryList;
