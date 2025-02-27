import { TextEncoder, TextDecoder } from "util";

// Polyfill for TextEncoder/TextDecoder (Fixes Jest error)
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

//  imports the React library
import React from "react";
// render: A function used to render a React component in a virtual DOM for testing.
// screen: An object that provides query methods to find elements in the rendered component (e.g., screen.getByText, screen.getByRole).
import { render, screen } from "@testing-library/react";
// This imports the MemoryRouter component from the react-router-dom library. MemoryRouter is used in testing to simulate routing behavior without requiring a real browser environment.
import { MemoryRouter } from "react-router-dom";
// This imports the NotFound component from the ./NotFound file. This is the component you’ll be testing.
import NotFound from "./NotFound";
// This imports the @testing-library/jest-dom library, which adds custom matchers (such as toBeInTheDocument, toHaveTextContent) to Jest for testing DOM elements.
import "@testing-library/jest-dom";

test("renders NotFound page correctly", () => {
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );

  // Check if the "404" heading appears
  expect(screen.getByText("404")).toBeInTheDocument();

  // Check if the "Page Not Found" text appears
  expect(screen.getByText("Page Not Found")).toBeInTheDocument();

  // Check if the description message appears
  expect(
    screen.getByText("Sorry, the page you're looking for doesn't exist.")
  ).toBeInTheDocument();

  // Check if the "Go back to Home" button is present
  const homeLink = screen.getByRole("link", { name: /Go back to Home/i });
  expect(homeLink).toBeInTheDocument();
  expect(homeLink).toHaveAttribute("href", "/");
});
