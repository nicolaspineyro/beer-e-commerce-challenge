import { useState } from "react";
import { Button, SectionHeader } from "components/ui";

const CATEGORIES = [
  { id: 0, name: "all", label: "All" },
  { id: 1, name: "beer", label: "Beer", icon: "/icons/beer-icon.png" },
  { id: 2, name: "wine", label: "Wine", icon: "/icons/wine-icon.png" },
];

const ProductFilters = () => {
  const [selected, setSelected] = useState(1);

  const handleSelect = (id: number) => setSelected(id);

  return (
    <article className="filters-container">
      <SectionHeader>Drink Category</SectionHeader>
      <div className="buttons-container">
        {CATEGORIES.map((category) => (
          <Button
            key={`button-${category.id}`}
            variant={selected === category.id ? "primary" : "secondary"}
            onClick={() => handleSelect(category.id)}
            className="category-button"
          >
            <div className="category-container">
              {category.icon && (
                <img className="category-icon" src={category.icon} />
              )}
              {category.label}
            </div>
          </Button>
        ))}
      </div>
    </article>
  );
};

export default ProductFilters;
