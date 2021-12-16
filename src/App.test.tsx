import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders", () => {
  render(<App />);
  const linkElement = screen.getByText(/Country Dropdown/i);
  expect(linkElement).toBeInTheDocument();
});
