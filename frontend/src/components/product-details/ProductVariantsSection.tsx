import { Title } from "components/ui";
import { ISku, ProductVariantProps } from "src/utils/interfaces";

const ProductVariantsSection = ({
  skus,
  size,
  handleSizeSelect,
}: ProductVariantProps) => {
  return (
    <div className="size-section">
      <Title type="section">Size</Title>
      <div className="size-buttons">
        {skus?.map((sku: ISku) => (
          <button
            key={`button-${sku.code}`}
            value={sku.code}
            onClick={() => handleSizeSelect(Number(sku.code))}
            className={size === Number(sku.code) ? "size-selected" : ""}
          >
            {sku.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductVariantsSection;
