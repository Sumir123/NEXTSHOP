import ProductCategoryChart from "@/components/ProductCategoryChart";

const Dashboard = () => {
  return (
    <>
      <div className="px-5 md:px-20 pb-20">
        <div className="md:h-[35rem] flex flex-col md:w-full items-center py-5">
          <h1 className="text-3xl text-center">
            PIE CHART OF PRODUCT COUNT PER CATEGORY
          </h1>
          <ProductCategoryChart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
