import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useDataFetch from "src/utils/hooks/useDataFetch";
import { IProduct } from "src/utils/interfaces";
import { Button } from "components/ui";
import { BsPlus } from "react-icons/bs";
import { PATHS } from "routes/paths";
import { formatBrandName, formatPrice } from "src/utils/formats";

const ProductCard = ({ id, brand, image, skus }: IProduct) => {
  const navigate = useNavigate();
  const { data: sku } = useDataFetch<{
    stock: number;
    price: number;
  }>(`http://localhost:3000/api/products/stock-price/${skus[0].code}`, {
    enabled: true,
  });

  const initialPrice = useMemo<string>(
    () => formatPrice(sku?.price!),
    [sku?.price]
  );

  const brandPath = formatBrandName(brand);

  const handleProductClick = () =>
    navigate(PATHS.PRODUCTS + `/${id}-${brandPath}`);

  const handleAdd = (e: any) => {
    // put sku method and modify stock
    e.stopPropagation();
  };

  return (
    <figure onClick={handleProductClick} className="product-card">
      <p className="brand-text brand-title">{brand}</p>
      <img src={image} alt={brand} />
      <div className="price-container">
        <p className="brand-text">{initialPrice}</p>
        <Button onClick={handleAdd} variant="primary" className="plus-button">
          <BsPlus size={30} />
        </Button>
      </div>
    </figure>
  );
};

export default ProductCard;
