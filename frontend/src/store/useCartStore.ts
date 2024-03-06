import { IProduct } from "src/utils/interfaces";
import { StoreApi, UseBoundStore, create } from "zustand";

interface ICartStore {
  cart: {
    total: number;
    items: { product: IProduct; quantity: number; subTotal: number }[];
  } | null;
  addProductToCart: (product: IProduct) => void;
  removeProductFromCart: () => void;
}

const initialState = {
  cart: null,
};

const useCartStore: UseBoundStore<StoreApi<ICartStore>> = create(() => ({
  cart: initialState.cart,
  addProductToCart: () => {},
  removeProductFromCart: () => {},
}));

export default useCartStore;
