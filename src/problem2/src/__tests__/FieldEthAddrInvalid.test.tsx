import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
const userStory = `
Given no inital state,
When user navigates to the web page,
and enters an invalid ETH address,
Then user sees the error message.
`;
describe(userStory, () => {
  render(<App />);
  it("shows the error message", () => {
    const addrInput = screen.getByRole("textbox", { name: "ETH Address" });
    userEvent.type(addrInput, "invalid addr");
    expect(screen.getByText("This is not a valid Eth Address.")).toBeInTheDocument();
  });
});
