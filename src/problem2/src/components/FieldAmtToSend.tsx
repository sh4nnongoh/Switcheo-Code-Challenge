import React, { FC } from "react";
import Field from "./Field";
const FieldAmtToSend: FC<{
  amt: string,
  setAmt: React.Dispatch<React.SetStateAction<string>>
}> = ({
  amt,
  setAmt
}) => {
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const regex = "^([0-9]*[.])?[0-9]+$";
    const dotCount = value.split("").reduce((acc, val) => {
      let result = acc;
      if (val === ".") {
        result += 1;
      }
      return result;
    }, 0);
    if (
      value.match(regex)
      || ((dotCount === 1) && value[value.length - 1] === ".")
      || value === ""
    ) {
      setAmt(value);
    }
  };
  const onBlur = () => {
    if (amt[amt.length - 1] === ".") {
      setAmt(amt.slice(0, amt.length - 1));
    }
  };
  return (
    <Field label="Amount to send" value={amt} onChange={onChange} onBlur={onBlur} />
  );
};
export default FieldAmtToSend;
