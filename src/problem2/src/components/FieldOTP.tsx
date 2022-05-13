import React, { FC } from "react";
import Field from "./Field";
const FieldOTP: FC<{
  otp: string,
  setOtp: React.Dispatch<React.SetStateAction<string>>
}> = ({
  otp,
  setOtp
}) => {
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const regex = "^[0-9]+$";
    if (value.match(regex) || value === "") {
      setOtp(value);
    }
  };
  return (
    <Field label="OTP Authentication" value={otp} onChange={onChange} />
  );
};
export default FieldOTP;
