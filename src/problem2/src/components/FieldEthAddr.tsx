import React, { FC } from "react";
import Field from "./Field";
const FieldEthAddr: FC<{
  addr: string,
  setAddr: React.Dispatch<React.SetStateAction<string>>
  hasError: boolean,
  setHasError: React.Dispatch<React.SetStateAction<boolean>>
}> = ({
  addr,
  setAddr,
  hasError,
  setHasError
}) => {
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const regex = /(0x[A-Fa-f0-9]{40})/g;
    setAddr(value);
    if (value.match(regex)) {
      setHasError(false);
    } else {
      setHasError(true);
    }
  };
  return (
    <>
      <Field label="ETH Address" value={addr} onChange={onChange} />
      {
        hasError && (
          <div
            className="text-xs text-red-900"
          >
            This is not a valid Eth Address.
          </div>
        )
      }
    </>
  );
};
export default FieldEthAddr;
