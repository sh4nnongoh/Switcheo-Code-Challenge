import React, { FC } from "react";
const SendButton: FC<{
  disabled: boolean
}> = ({
  disabled
}) => (
  <div
    className="p-3"
  >
    <button
      type="button"
      disabled={disabled}
      className="w-fit p-3 bg-green-400 text-green-900 text-base
      rounded shadow-md disabled:bg-gray-300 disabled:text-white"
    >
      SEND TOKENS
    </button>
  </div>
);
export default SendButton;
