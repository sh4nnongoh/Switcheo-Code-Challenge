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
      className="w-fit p-3 bg-green-300 text-green-900 text-base
      rounded-full shadow-md disabled:bg-gray-300 disabled:text-white
      font-normal disabled:font-light hover:bg-green-400
      active:bg-green-500 transition"
    >
      SEND TOKENS
    </button>
  </div>
);
export default SendButton;
