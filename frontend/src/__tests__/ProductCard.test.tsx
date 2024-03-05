import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import ProductCard from "../components/products/ProductCard";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

const mockProduct = {
  id: 127,
  brand: "Modelo Especial",
  image: "/products/modelo-especial.jpeg",
  style: "Lager",
  substyle: "Light Lager",
  abv: "4.4%",
  origin: "Import",
  information: "Test info",
  skus: [
    {
      code: "10167",
      name: "12 - 24oz Cans",
    },
    {
      code: "10166",
      name: "18 - 12oz Cans",
    },
    {
      code: "10170",
      name: "Half Barrel",
    },
  ],
};

describe("ProductCard Component", () => {
  test("renders product card with correct data", () => {
    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <ProductCard {...mockProduct} />
      </MemoryRouter>
    );
    expect(getByText("Modelo Especial")).toBeInTheDocument();
    expect(getByAltText("Modelo Especial")).toBeInTheDocument();
  });

  test("navigates to the correct product page when clicked", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <ProductCard {...mockProduct} />
      </MemoryRouter>
    );
    fireEvent.click(getByTestId("product-card-test"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith(
      "/products/127-modelo-especial"
    );
  });
});
