import ProductList from "@/components/ProductList";
import useStore from "@/store/useStore";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Category = () => {
  const router = useRouter();
  const { name } = router.query;

  const data = useStore((state) => state.byCategories);
  const isLoading = useStore((state) => state.isLoading);
  const fetchByCategories = useStore((state) => state.fetchByCategories);

  useEffect(() => {
    if (name) {
      fetchByCategories(name);
    }
  }, [name]);
  return (
    <div className="px-5 md:px-20 ">
      {isLoading ? (
        <p>Loading.......</p>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-center py-5 text-slate-800">
            Category: {name}
          </h1>
          <ProductList data={data} />
        </>
      )}
    </div>
  );
};

export default Category;
