import { ISku } from "./IProduct";

export default interface ProductVariantProps {
  skus: ISku[];
  size: number | null;
  handleSizeSelect: (sku: number) => void;
}
