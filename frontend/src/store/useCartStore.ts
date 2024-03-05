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

const useCartStore: UseBoundStore<StoreApi<ICartStore>> = create((set) => ({
  cart: initialState.cart,
  addProductToCart: (product: IProduct) => {
    const setProducts = (state: ICartStore) => {
      let existingItems = state.cart?.items;
      existingItems?.forEach((cartItem, index) => {
        if (product.id === cartItem.product.id && existingItems) {
          existingItems[index].quantity++;
          existingItems[index].subTotal =
            existingItems[index].quantity * product.price;
        }
      });
      return {
        ...state,
      };
    };
    set(setProducts);
  },
  removeProductFromCart: () => {},
}));

export default useCartStore;
