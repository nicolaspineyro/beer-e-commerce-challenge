import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "..";

describe("Button component", () => {
  const mockOnClick = jest.fn();
  const mockOnFocus = jest.fn();

  test("renders button correctly", () => {
    const { getByText } = render(<Button variant={"primary"}>Click me</Button>);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  test("handles onClick event", () => {
    const { getByText } = render(
      <Button onClick={mockOnClick} variant={"primary"}>
        Click me
      </Button>
    );
    fireEvent.click(getByText("Click me"));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test("handles onFocus event", () => {
    const { getByText } = render(
      <Button onFocus={mockOnFocus} variant={"primary"}>
        Click me
      </Button>
    );
    fireEvent.focus(getByText("Click me"));
    expect(mockOnFocus).toHaveBeenCalledTimes(1);
  });

  test("applies disabled state correctly", () => {
    const { getByText } = render(
      <Button disabled variant={"primary"}>
        Click me
      </Button>
    );
    expect(getByText("Click me")).toBeDisabled();
  });

  test("applies custom className correctly", () => {
    const { getByText } = render(
      <Button className="custom" variant={"primary"}>
        Click me
      </Button>
    );
    expect(getByText("Click me")).toHaveClass("custom");
  });

  test("applies correct button variant", () => {
    const { getByText } = render(
      <Button className="test-class" variant="secondary">
        Click me
      </Button>
    );
    expect(getByText("Click me")).toHaveClass("button-secondary");
  });
});
