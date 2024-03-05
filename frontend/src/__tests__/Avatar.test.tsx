import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Avatar from "../components/ui/Avatar";

describe("Avatar component", () => {
  const mockImageUrl = "https://example.com/avatar.jpg";
  const mockAltText = "Avatar";
  const mockChildren = "JD";

  test("renders circular avatar with image", () => {
    const { getByAltText, queryByTestId } = render(
      <Avatar
        imageUrl={mockImageUrl}
        altText={mockAltText}
        width={50}
        height={50}
      />
    );
    expect(getByAltText(mockAltText)).toBeInTheDocument();
    expect(queryByTestId("avatar-children")).toBeNull();
  });

  test("renders circular avatar with children", () => {
    const { getByText, queryByAltText } = render(
      <Avatar width={50} height={50}>
        {mockChildren}
      </Avatar>
    );
    expect(getByText(mockChildren)).toBeInTheDocument();
    expect(queryByAltText(mockAltText)).toBeNull();
  });

  test("renders square avatar with image", () => {
    const { getByAltText, queryByTestId } = render(
      <Avatar
        imageUrl={mockImageUrl}
        altText={mockAltText}
        shape="square"
        width={50}
        height={50}
      />
    );
    expect(getByAltText(mockAltText)).toBeInTheDocument();
    expect(queryByTestId("avatar-children")).toBeNull();
  });

  test("renders square avatar with children", () => {
    const { getByText, queryByAltText } = render(
      <Avatar width={50} height={50} shape="square">
        {mockChildren}
      </Avatar>
    );
    expect(getByText(mockChildren)).toBeInTheDocument();
    expect(queryByAltText(mockAltText)).toBeNull();
  });
});
