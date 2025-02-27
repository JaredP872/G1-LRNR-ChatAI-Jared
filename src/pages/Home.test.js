//  imports the React library
import React from "react";
// render: A function used to render a React component in a virtual DOM for testing.
// screen: An object that provides query methods to find elements in the rendered component
// fireEvent: A utility to simulate user interactions (e.g., clicking a button, typing in an input).

import { render, screen, fireEvent } from "@testing-library/react";
// MemoryRouter is used in tests to simulate routing behavior without requiring a browser environment.
import { MemoryRouter } from "react-router-dom";
// This imports the Home component from the ./Home file.
// Ensure that the file path (./Home) matches the actual location of your Home component in your project structure.
import Home from "./Home";
// This imports @testing-library/jest-dom, a library that adds custom matchers (e.g., toBeInTheDocument, toHaveTextContent) to Jest.
import "@testing-library/jest-dom";

test("renders Home page correctly", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  // Checks if the heading appears
  expect(
    screen.getByText("Your guided path to programming enlightenment")
  ).toBeInTheDocument();

  // Checks if the button exists and has the correct text
  const startButton = screen.getByRole("button", { name: /BEGIN JOURNEY/i });
  expect(startButton).toBeInTheDocument();

  // Checks if the features exist
  expect(screen.getByText("Personalized Quizzes")).toBeInTheDocument();
  expect(screen.getByText("Rewarding")).toBeInTheDocument();
  expect(screen.getByText("Personal SME")).toBeInTheDocument();
});

test("navigates to quiz when 'BEGIN JOURNEY' is clicked", () => {
  // Mocks window.location.href
  delete window.location;
  window.location = { href: jest.fn() };

  // renders the home page
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  // Simulates button click
  const startButton = screen.getByRole("button", { name: /BEGIN JOURNEY/i });
  fireEvent.click(startButton);

  // Checks if it redirects to /quiz
  expect(window.location.href).toBe("/quiz");
});
