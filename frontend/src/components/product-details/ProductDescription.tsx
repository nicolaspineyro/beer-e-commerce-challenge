import { Title } from "components/ui";
import { useState } from "react";
import { ProductDescriptionProps } from "src/utils/interfaces";

const ProductDescription = ({ description }: ProductDescriptionProps) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const descriptionClass = showFullDescription
    ? "product-description-full"
    : "product-description";

  return (
    <div className="description-section">
      <Title type="section">Description</Title>
      <p className={descriptionClass}>{description}</p>
      <button onClick={toggleDescription}>{`..Read ${
        !showFullDescription ? "More" : "Less"
      }`}</button>
    </div>
  );
};

export default ProductDescription;
