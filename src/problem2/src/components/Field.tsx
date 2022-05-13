import React, { FC } from "react";
const Field: FC<{
  label: string,
  value: string,
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
  onBlur?: () => void
}> = ({
  label,
  value,
  onChange,
  onBlur
}) => (
  <div
    className="p-2.5"
  >
    <label htmlFor={`input-${label}`}>
      <span
        className="text-base text-neutral-800 font-semibold max-w-fit"
      >
        {label}
      </span>
      <div
        className="text-black"
      >
        <input
          id={`input-${label}`}
          type="text"
          className="rounded text-2xl h-12 w-100% p-3"
          required
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    </label>
  </div>
);
Field.defaultProps = {
  onChange: () => { /* stub */ },
  onBlur: () => { /* stub */ }
};
export default Field;
