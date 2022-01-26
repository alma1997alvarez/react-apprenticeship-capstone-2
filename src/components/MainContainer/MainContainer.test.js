import { render, screen } from "@testing-library/react";
import React from "react";
import MainContainer from "./MainContainer.component";

describe("MainContainer component", () => {
  test("renders the component's children correctly", () => {
    render(
      <MainContainer>
        <p>test paragraph</p>
      </MainContainer>
    );
    const containerElement = screen.getByText("test paragraph");
    expect(containerElement).toBeInTheDocument();
  });
});
