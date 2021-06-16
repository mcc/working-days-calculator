import React from "react";

type InputProps = {
  type: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
};

function Input({
  type,
  value,
  onChange,
  placeholder,
  readOnly,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      readOnly={readOnly}
      onChange={onChange}
      {...props}
    />
  );
}

Input.defaultProps = {
  type: "text",
  value: "",
  readOnly: false,
};

export default Input;
