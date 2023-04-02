const API_BASE_URL = "https://dummyjson.com";
import axios from "axios";

const createCategorySlice = (set, get) => ({
  categories: [],
  byCategories: [],
  productPerCategoryCount: [],
  isLoading: true,
  fetchCategories: async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/products/categories`);
      set({ categories: res.data, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  },
  fetchByCategories: async (name) => {
    try {
      console.log(name);
      const res = await axios.get(`${API_BASE_URL}/products/category/${name}`);
      console.log(res.data);
      set({ byCategories: res.data.products, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  },
  getAllProductCategory: async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/products/categories`);
      const categoryResponse = res.data;
      set({ catagories: categoryResponse });
      const categoryCounts = [];
      for (const category of categoryResponse) {
        const res = await axios.get(
          `${API_BASE_URL}/products/category/${category}`
        );
        categoryCounts.push(res.data.total);
      }
      set({ productPerCategoryCount: categoryCounts, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  },
});

export default createCategorySlice;
