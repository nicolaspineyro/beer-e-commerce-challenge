import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useDataFetch from "src/utils/hooks/useDataFetch";

import {
  ProductDescription,
  ProductDetailsHeader,
  ProductVariantsSection,
  ProductDetailsFooter,
} from "components/product-details";
import { Loader } from "components/ui";

import { IProduct } from "src/utils/interfaces";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [size, setSize] = useState<number | null>(null);

  const { data: product, isLoading } = useDataFetch<IProduct>(
    `http://localhost:3000/api/products/${id}`,
    {
      enabled: true,
    }
  );

  const { data: sku, refetch } = useDataFetch<{
    stock: number;
    price: number;
  }>(`http://localhost:3000/api/products/stock-price/${size}`, {
    enabled: !!size,
  });

  useEffect(() => {
    if (product && product.skus && product.skus.length > 0) {
      setSize(Number(product.skus[0].code));
    }
  }, [product]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (size) {
        refetch();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [size, refetch]);

  const handleSizeSelect = (sku: number) => setSize(sku);

  if (isLoading || !product) return <Loader />;

  return (
    <section className="product-details-container">
      <img src={product.image} alt={product.brand} />
      <div className="product-details-text-content">
        <ProductDetailsHeader
          sku={sku!}
          brand={product?.brand}
          origin={product.origin}
        />
        <ProductDescription description={product?.information} />
        <ProductVariantsSection
          size={size}
          handleSizeSelect={handleSizeSelect}
          skus={product?.skus}
        />
        <ProductDetailsFooter />
      </div>
    </section>
  );
};

export default ProductDetailPage;
