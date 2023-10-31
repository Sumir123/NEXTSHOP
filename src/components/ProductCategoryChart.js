import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import useStore from "@/store/useStore";

const ProductCategoryChart = () => {
  const isLoading = useStore((state) => state.isLoading);
  const categoriesData = useStore((state) => state.categories);
  const fetchCategories = useStore((state) => state.fetchCategories);
  const getAllProductCategory = useStore(
    (state) => state.getAllProductCategory
  );

  const productPerCategoryCount = useStore(
    (state) => state.productPerCategoryCount
  );

  useEffect(() => {
    getAllProductCategory();
    fetchCategories();
  }, []);

  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: categoriesData,
    datasets: [
      {
        label: "No of Products",
        data: productPerCategoryCount,
        backgroundColor: [
          "#0db38f",
          "#54c79f",
          "#8dd0af",
          "#c4dba1",
          "#f4e8a4",
          "#ffdab7",
          "#ffc19e",
          "#ff9f85",
          "#ff6f69",
          "#ff3f5e",
          "#ff0f55",
          "#d40f6f",
          "#a20f8f",
          "#770f9f",
        ],
        borderColor: [
          "#0c9a79",
          "#49b48c",
          "#7dbd99",
          "#b4c791",
          "#f2d882",
          "#ffcca7",
          "#ffb28f",
          "#ff826b",
          "#ff5147",
          "#ff1f33",
          "#ff0033",
          "#c10055",
          "#8d006f",
          "#64008f",
        ],
      },
    ],
  };

  return (
    <>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <Pie data={data} height={50} width={50} />
      )}
    </>
  );
};
export default ProductCategoryChart;
