import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import NavBarItem from "../components/ui/NavBars/RootNavBar/NavBarItem";

describe("NavBarItem component", () => {
  const mockMenuItem = {
    id: "1",
    label: "Home",
    link: "/home",
  };

  test("renders menu item with correct label", () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavBarItem {...mockMenuItem} />
      </MemoryRouter>
    );
    expect(getByText("Home")).toBeInTheDocument();
  });

  test("renders menu item with correct link", () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavBarItem {...mockMenuItem} />
      </MemoryRouter>
    );
    expect(getByText("Home").closest("a")).toHaveAttribute("href", "/home");
  });
});
