import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home"; // Ensure this matches your file structure
import "@testing-library/jest-dom";

test("renders Home page correctly", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  // ✅ Check if the heading appears
  expect(
    screen.getByText("Your guided path to programming enlightenment")
  ).toBeInTheDocument();

  // ✅ Check if the button exists and has the correct text
  const startButton = screen.getByRole("button", { name: /BEGIN JOURNEY/i });
  expect(startButton).toBeInTheDocument();

  // ✅ Check if the features exist
  expect(screen.getByText("Personalized Quizzes")).toBeInTheDocument();
  expect(screen.getByText("Rewarding")).toBeInTheDocument();
  expect(screen.getByText("Personal SME")).toBeInTheDocument();
});

test("navigates to quiz when 'BEGIN JOURNEY' is clicked", () => {
  // Mock window.location.href
  delete window.location;
  window.location = { href: jest.fn() };

  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  // ✅ Simulate button click
  const startButton = screen.getByRole("button", { name: /BEGIN JOURNEY/i });
  fireEvent.click(startButton);

  // ✅ Check if it redirects to /quiz
  expect(window.location.href).toBe("/quiz");
});
