import Products from "../database/products";
import StockPrice from "../database/stock-price";

export const getAll = () => {
  return Products;
};

export const getByIdBrand = (id: string, brand: string) => {
  return Products.find(
    (p) =>
      id === p.id.toString() &&
      brand === p.brand.toLocaleLowerCase().replace(" ", "-")
  );
};

export const getStockPriceBySku = (skuCode: string) => {
  let found;
  Object.entries(StockPrice).forEach((prop) => {
    if (prop[0] == skuCode) {
      found = prop[1];
    }
  });

  return found;
};

export const updateBySku = (skuCode: string, stock: number, price: number) => {
  Object.entries(StockPrice).forEach((prop) => {
    if (prop[0] == skuCode) {
      stock && (prop[1].stock = stock);
      price && (prop[1].price = price);
    }
  });
};
