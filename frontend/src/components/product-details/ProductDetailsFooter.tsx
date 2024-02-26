import { BsHandbag } from "react-icons/bs";
import { Button } from "components/ui";

const ProductDetailsFooter = () => {
  const handleAdd = () => {};
  return (
    <div className="product-details-footer">
      <div className="cart-icon">
        <BsHandbag size={24} />
      </div>
      <Button onClick={handleAdd} variant="primary">
        Add to cart
      </Button>
    </div>
  );
};

export default ProductDetailsFooter;
