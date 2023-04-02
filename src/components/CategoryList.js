const CategoryList = ({ category }) => {
  return (
    <>
      <h1 className="text-3xl text-center my-8 font-extrabold text-slate-800">
        Product categories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-10">
        {category.map((categories, index) => (
          <a href={`/products/category/${categories}`}>
            <div
              key={index}
              className="h-20 flex justify-center font-medium items-center bg-[#F1F5F9] rounded-lg  shadow-sm cursor-pointer hover:bg-[#E2E8F0]"
            >
              {categories.toUpperCase()}
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default CategoryList;
