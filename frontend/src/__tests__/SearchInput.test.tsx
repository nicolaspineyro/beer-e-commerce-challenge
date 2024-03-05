import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchInput from "../components/ui/SearchInput";

describe("SearchInput Component", () => {
  test("renders the component", () => {
    const { getByPlaceholderText } = render(
      <SearchInput placeholder="Search..." />
    );
    const inputElement = getByPlaceholderText("Search...");
    expect(inputElement).toBeInTheDocument();
  });

  test("renders the icon", () => {
    const { getByTestId } = render(<SearchInput />);
    const searchIcon = getByTestId("search-icon");
    expect(searchIcon).toBeInTheDocument();
  });

  test("input field is empty initially", () => {
    const { getByPlaceholderText } = render(
      <SearchInput placeholder="Search..." />
    );
    const inputElement = getByPlaceholderText("Search...") as HTMLInputElement;
    expect(inputElement.value).toBe("");
  });

  test("typing in the input field updates its value", () => {
    const { getByPlaceholderText } = render(
      <SearchInput placeholder="Search..." />
    );
    const inputElement = getByPlaceholderText("Search...") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(inputElement.value).toBe("test");
  });
});
