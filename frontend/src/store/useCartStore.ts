import { IProduct } from "src/utils/interfaces";
import { StoreApi, UseBoundStore, create } from "zustand";

interface ICartStore {
  products: IProduct[] | null;
  addProductToCart: () => void;
  removeProductFromCart: () => void;
}

const initialState = {
  products: null,
};

const useCartStore: UseBoundStore<StoreApi<ICartStore>> = create(() => ({
  products: initialState.products,
  addProductToCart: () => {},
  removeProductFromCart: () => {},
}));

export default useCartStore;
