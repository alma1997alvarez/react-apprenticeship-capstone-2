import { render, screen } from "@testing-library/react";
import React from "react";
import ErrorCard from "./ErrorCard.component";

describe("ErrorCard component", () => {
  test("renders a paragraph with the passed error message", () => {
    render(<ErrorCard message="testing" />);
    const cardElement = screen.getByText("ERROR: testing");
    expect(cardElement).toBeInTheDocument();
  });
});
