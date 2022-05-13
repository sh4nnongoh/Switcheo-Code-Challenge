import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
const userStory = `
Given no inital state,
When user navigates to the web page,
Then user sees the static form
`;
describe(userStory, () => {
  render(<App />);
  it("shows the form", () => {
    expect(screen.getByText(/Eth Address/i)).toBeInTheDocument();
    expect(screen.getByText(/Amount to send/i)).toBeInTheDocument();
    expect(screen.getByText(/OTP Authentication/i)).toBeInTheDocument();
    const sendButton = screen.getByRole("button", { name: /SEND TOKENS/i });
    expect(sendButton).toBeDisabled();
    const inputBoxList = screen.getAllByRole("textbox");
    expect(inputBoxList[0]).toHaveAccessibleName("ETH Address");
    expect(inputBoxList[1]).toHaveAccessibleName("Amount to send");
    expect(inputBoxList[2]).toHaveAccessibleName("OTP Authentication");
  });
});
