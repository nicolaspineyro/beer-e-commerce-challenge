import { useEffect } from "react";
import ProductsLayout from "src/components/products/ProductsLayout";
import useProductsStore from "src/store/useProductsStore";

const ProductsPage = () => {
  const { products, fetchProducts } = useProductsStore();

  useEffect(() => {
    if (products === null) {
      fetchProducts();
    }
  }, [products]);

  return <ProductsLayout products={products} />;
};

export default ProductsPage;
