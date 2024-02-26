import { Title } from "components/ui";
import { useMemo } from "react";
import { formatPrice } from "src/utils/formats";
import { ProductDetailsHeaderProps } from "src/utils/interfaces";

const ProductDetailsHeader = ({
  sku,
  brand,
  origin,
}: ProductDetailsHeaderProps) => {
  const { stock, price } = sku || {};
  const productPrice = useMemo<string>(() => formatPrice(price), [sku?.price]);
  return (
    <div>
      <div className="product-details-text-header">
        <Title type={"main"}>{brand}</Title>
        <p className="product-price">{productPrice}</p>
      </div>
      <p className="stock-details">{`Origin: ${origin} | Stock: ${stock}`}</p>
    </div>
  );
};

export default ProductDetailsHeader;
