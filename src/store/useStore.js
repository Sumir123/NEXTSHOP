import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import createProductsSlice from "./slices/useProductsSlice";
import createCategorySlice from "./slices/useCategorySlice";
import createUserSlice from "./slices/useUserSlice";

const useStore = create(
  devtools(
    persist(
      (set, get) => ({
        ...createProductsSlice(set, get),
        ...createCategorySlice(set, get),
        ...createUserSlice(set, get),
      }),
      {
        name: "user-email",
        storage: createJSONStorage(() => sessionStorage),
        partialize: (state) => ({ userInfo: state.userInfo }),
      }
    )
  )
);

export default useStore;
