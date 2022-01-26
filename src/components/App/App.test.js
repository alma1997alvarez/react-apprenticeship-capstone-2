import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders the heading", () => {
    render(<App />);
    const headingElement = screen.getByText(/picture of the day/i);
    expect(headingElement).toBeInTheDocument();
  });
});
