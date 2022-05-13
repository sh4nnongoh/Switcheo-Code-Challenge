import React, { useState } from "react";
import FieldAmtToSend from "./FieldAmtToSend";
import FieldEthAddr from "./FieldEthAddr";
import FieldOTP from "./FieldOTP";
import SendButton from "./SendButton";
const Form = () => {
  const [addr, setAddr] = useState("");
  const [hasError, setHasError] = useState(false);
  const [amt, setAmt] = useState("");
  const [otp, setOtp] = useState("");
  return (
    <form
      className="flex flex-col items-center"
    >
      <FieldEthAddr addr={addr} setAddr={setAddr} hasError={hasError} setHasError={setHasError} />
      <FieldAmtToSend amt={amt} setAmt={setAmt} />
      <FieldOTP otp={otp} setOtp={setOtp} />
      <SendButton disabled={
        addr.length === 0
        || amt.length === 0
        || otp.length === 0
        || hasError
      }
      />
    </form>
  );
};
export default Form;
