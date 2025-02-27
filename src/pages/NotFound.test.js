import { TextEncoder, TextDecoder } from "util";

// ✅ Polyfill for TextEncoder/TextDecoder (Fixes Jest error)
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "./NotFound"; // Ensure this matches your file structure
import "@testing-library/jest-dom";

test("renders NotFound page correctly", () => {
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );

  // ✅ Check if the "404" heading appears
  expect(screen.getByText("404")).toBeInTheDocument();

  // ✅ Check if the "Page Not Found" text appears
  expect(screen.getByText("Page Not Found")).toBeInTheDocument();

  // ✅ Check if the description message appears
  expect(
    screen.getByText("Sorry, the page you're looking for doesn't exist.")
  ).toBeInTheDocument();

  // ✅ Check if the "Go back to Home" button is present
  const homeLink = screen.getByRole("link", { name: /Go back to Home/i });
  expect(homeLink).toBeInTheDocument();
  expect(homeLink).toHaveAttribute("href", "/");
});
