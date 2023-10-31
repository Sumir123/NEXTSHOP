import CategoryList from "@/components/CategoryList";
import useStore from "@/store/useStore";
import { useEffect } from "react";

const ProductCategory = () => {
  const isLoading = useStore((state) => state.isLoading);
  const data = useStore((state) => state.categories);
  const fetchCategories = useStore((state) => state.fetchCategories);

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="px-5 md:px-20">
      <h1 className="text-3xl text-center my-8 font-extrabold text-slate-800">
        Product categories
      </h1>
      {isLoading ? <p>loading....</p> : <></>}
      <CategoryList category={data} />
    </div>
  );
};
export default ProductCategory;
