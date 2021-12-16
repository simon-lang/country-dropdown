import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CountryDropdown from "./CountryDropdown";

test("Renders", () => {
  render(<CountryDropdown />);
  const el = screen.getByText(/Select/i);
  expect(el).toBeInTheDocument();
});

test("Shows all countries on click", async () => {
  render(<CountryDropdown />);
  await userEvent.click(screen.getByText("Select"));
  const items = await screen.findAllByRole("listitem");
  expect(items).toHaveLength(249);
});

test("Searches accurately despite fat fingers", async () => {
  render(<CountryDropdown />);
  await userEvent.click(screen.getByText("Select"));
  await userEvent.type(screen.getByRole('textbox'), 'Australa'); // misspelled
  const items = await screen.findAllByRole("listitem");
  expect(items).toHaveLength(2);
  screen.getByText(/Australia/i);
  screen.getByText(/Austria/i);
});

test("Selects country on click", async () => {
  render(<CountryDropdown />);
  await userEvent.click(screen.getByText("Select"));
  await userEvent.type(screen.getByRole('textbox'), 'Australia');
  await userEvent.click(screen.getByText("Australia"));
  const items = screen.queryByRole("listitem");
  expect(items).toBeNull(); // no suggestions
  screen.getByText(/Australia/i); // selection present!
});
