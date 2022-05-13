import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
const userStory = `
Given no inital state,
When user navigates to the web page,
and enters an invalid Amt to send,
Then user do not see the invalid input.
`;
describe(userStory, () => {
  render(<App />);
  it("does not show the invalid input", () => {
    const input = screen.getByRole("textbox", { name: "Amount to send" });
    userEvent.type(input, "123.asd");
    userEvent.click(screen.getByText("Amount to send"));
    expect(screen.getByDisplayValue("123")).toBeInTheDocument();
  });
});
