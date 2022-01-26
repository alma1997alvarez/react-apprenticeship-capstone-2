import { render, screen } from "@testing-library/react";
import React from "react";
import DatePicker from "./DatePicker.component";

describe("DatePicker component", () => {
  test("renders the button that allows to show images based on the selected date", () => {
    render(<DatePicker />);
    const bttnElement = screen.getByRole("button");
    expect(bttnElement).toBeInTheDocument();
  });

  test("renders the date input label", () => {
    render(<DatePicker />);
    const labelElement = screen.getByText("SELECT A DATE");
    expect(labelElement).toBeInTheDocument();
  });
});
