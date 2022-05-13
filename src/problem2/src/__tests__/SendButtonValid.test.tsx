import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
const userStory = `
Given no inital state,
When user navigates to the web page,
and enters valid information,
Then user an enabled send tokens button.
`;
describe(userStory, () => {
  render(<App />);
  it("shows an enabled send tokens button", () => {
    const ethInput = screen.getByRole("textbox", { name: "ETH Address" });
    const amtInput = screen.getByRole("textbox", { name: "Amount to send" });
    const otpInput = screen.getByRole("textbox", { name: "OTP Authentication" });
    const sendButton = screen.getByRole("button", { name: "SEND TOKENS" });
    expect(sendButton).toBeDisabled();
    userEvent.type(ethInput, "0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8");
    expect(sendButton).toBeDisabled();
    userEvent.type(amtInput, "1000");
    expect(sendButton).toBeDisabled();
    userEvent.type(otpInput, "1234");
    expect(sendButton).not.toBeDisabled();
  });
});
