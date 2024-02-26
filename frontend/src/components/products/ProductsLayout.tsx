import { IProduct } from "src/utils/interfaces";
import { ProductCard } from "components/products";

const ProductsLayout = ({ products }: { products: IProduct[] | null }) => {
  return (
    <div className="products-layout">
      {products?.map((product: IProduct) => (
        <ProductCard key={`product-${product.id}`} {...product} />
      ))}
    </div>
  );
};

export default ProductsLayout;
