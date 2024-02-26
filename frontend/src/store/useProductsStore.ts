import { IProduct } from "src/utils/interfaces";
import { StoreApi, UseBoundStore, create } from "zustand";

interface IProductsStore {
  products: IProduct[] | null;
  loading: boolean;
  error: Error | null;
  fetchProducts: () => Promise<void>;
}

const initialState = {
  products: null,
  loading: false,
  error: null,
};

const useProductsStore: UseBoundStore<StoreApi<IProductsStore>> = create(
  (set) => ({
    products: initialState.products,
    loading: initialState.loading,
    error: initialState.error,
    fetchProducts: async () => {
      set((state) => ({ ...state, loading: true }));
      try {
        const res = await fetch("http://localhost:3000/api/products");
        const products = await res.json();
        set((state) => ({ ...state, products }));
      } catch (error: any) {
        set((state) => ({
          ...state,
          error: error,
        }));
      } finally {
        set((state) => ({
          ...state,
          loading: false,
        }));
      }
    },
  })
);

export default useProductsStore;
