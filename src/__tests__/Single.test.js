import React from "react";
import { fireEvent, render, within, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import App from "../App";
import '@testing-library/jest-dom/extend-expect'

describe("App", () => {
  describe("deletesTest", () => {
    test("recipe is deleted when the delete button is clicked", () => {
      const { container } = render(<App />);
      const row = container.querySelector('table tbody tr');
      const content = within(row);
      expect(content.getByText(/Tuna Poke with Mango/)).toBeInTheDocument();
      const deleteButton = content.getByText(/delete/i);
      fireEvent(
        deleteButton,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );
      expect(content.queryByText(/Tuna Poke with Mango/)).toBeNull();
    });
  });  
});
