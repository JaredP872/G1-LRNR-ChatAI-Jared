import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import Quiz from "./Quiz"; // Ensure the correct import path
import "@testing-library/jest-dom"; // ✅ Import this to enable `toHaveTextContent`

// Mock fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ questions: ["Q1", "Q2", "Q3"] }),
  })
);

test("submits the form and fetches questions", async () => {
  render(<Quiz />);

  // Simulate user selecting a different topic
  fireEvent.change(screen.getByRole("combobox", { name: /Topic/i }), {
    target: { value: "javascript" },
  });

  // Click the Submit button
  await act(async () => {
    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));
  });

  // Wait for fetch API to be called
  await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

  await waitFor(() => {
    expect(screen.getByTestId("question-0")).toHaveTextContent("Q1");
    expect(screen.getByTestId("question-1")).toHaveTextContent("Q2");
    expect(screen.getByTestId("question-2")).toHaveTextContent("Q3");
  });
});
