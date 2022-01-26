import { render, screen } from "@testing-library/react";
import React from "react";
import MediaCard from "./MediaCard.component";

describe("MediaCard component", () => {
  test("renders the component with the passed title", () => {
    const mediaDetails = { title: "photo test" };
    render(<MediaCard mediaDetails={mediaDetails} />);
    const cardElement = screen.getByText("photo test");
    expect(cardElement).toBeInTheDocument();
  });
});
