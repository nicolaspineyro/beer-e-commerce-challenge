import { render } from "@testing-library/react";
import ProductDetailsHeader from "../ProductDetailsHeader";
import "@testing-library/jest-dom";

const mockProduct = {
  sku: {
    stock: 10,
    price: 1999,
  },
  brand: "Example Brand",
  origin: "Example Origin",
};

describe("ProductDetailsHeader Component", () => {
  test("renders product details header with correct data", () => {
    const { getByText } = render(<ProductDetailsHeader {...mockProduct} />);

    expect(getByText("Example Brand")).toBeInTheDocument();
    expect(getByText("$19.99")).toBeInTheDocument();
    expect(getByText("Origin: Example Origin | Stock: 10")).toBeInTheDocument();
  });
});
