const API_BASE_URL = "https://dummyjson.com";
import axios from "axios";

const createProductsSlice = (set, get) => ({
  products: [],
  total: 0,
  skip: 0,
  limit: 0,
  currentPage: 1,
  pageSize: 12,
  isLoading: true,
  totalPages: 1,
  fetchProductData: async () => {
    const { currentPage, pageSize } = get();
    const response = await axios.get(
      `https://dummyjson.com/products?skip=${
        (currentPage - 1) * pageSize
      }&limit=${pageSize}`
    );
    set({
      products: response.data.products,
      total: response.data.total,
      skip: response.data.skip,
      limit: response.data.limit,
      isLoading: false,
      totalPages: Math.ceil(response.data.total / pageSize),
    });
  },
  setCurrentPage: (pageNumber) => {
    set({ currentPage: pageNumber });
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  productDetail: [],
  fetchProductDetails: async (name) => {
    try {
      const res = await axios.get(`${API_BASE_URL}/products/${name}`);
      set({ productDetail: res.data, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  },
});

export default createProductsSlice;
