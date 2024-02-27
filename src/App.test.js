/**
 * @jest-environment jsdom
 */

// Import necessary dependencies and extend expect matchers
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Import the component to be tested
import App from "./App";
import Checkbox from "./Checkbox";

describe("App component", () => {
  // Test: renders the App component
  test("renders the App component", () => {
    render(<App />);
  });

  // Test: button click increments the count
  test("button click increments the count", () => {
    // Render the App component
    const { getByText } = render(<App />);

    // Find the button element with text "count is 0"
    const button = getByText("count is 0");

    // Simulate a click event on the button
    fireEvent.click(button);

    // Assert that the button's text has changed to "count is 1"
    expect(button.textContent).toBe("count is 1");
  });

  // Test: renders the Button component with correct props
  test("renders the Button component with correct props", () => {
    // Render the App component
    const { getByText } = render(<App />);

    // Find the button element with text "count is 0"
    const button = getByText("count is 0");

    // Assert that the button is present in the document
    expect(button).toBeInTheDocument();
  });

  // Test: updates the count when setCount function is called
  test("updates the count when setCount function is called", () => {
    // Render the App component
    const { getByText } = render(<App />);

    // Find the button element with text "count is 0"
    const button = getByText("count is 0");

    // Simulate multiple click events on the button
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    // Assert that the button's text has changed to "count is 3"
    expect(button.textContent).toBe("count is 3");
  });
});

describe("Checkbox component", () => {
  // Reference this test case
  // to complete the following one!
  test("initially renders as off", () => {
    const { queryByLabelText } = render(
      <Checkbox labelOn="On" labelOff="Off" />
    );
    expect(queryByLabelText(/off/i)).toBeTruthy();
  });

  // TODO: Complete this test!
  test("toggles between labels when clicked", () => {
    // 1. Render the component with "On" and "Off" as the labels.
    const { queryByLabelText, getByLabelText } = render(
      <Checkbox labelOn="On" labelOff="Off" />
    );
    // 2. Expect the label to be "Off" initially.
    expect(queryByLabelText(/off/i)).toBeTruthy();

    // 3. Click the checkbox by using `fireEvent.click` and `getByLabelText`.
    fireEvent.click(getByLabelText(/off/i));

    // 4. Expect the label to be "On" after the click event.
    expect(queryByLabelText(/on/i)).toBeTruthy();

    // 5. Click the checkbox again.
    fireEvent.click(getByLabelText(/on/i));

    // 6. Expect the label to be "Off" again.
    expect(queryByLabelText(/off/i)).toBeTruthy();
  });
});
