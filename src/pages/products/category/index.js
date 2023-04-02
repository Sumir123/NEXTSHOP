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
      {isLoading ? <p>loading....</p> : <></>}

      <CategoryList category={data} />
    </div>
  );
};
export default ProductCategory;
