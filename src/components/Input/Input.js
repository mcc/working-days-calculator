import React from "react";

const Input = ({ type, value, onChange,placeholder, readOnly, ...props }) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      readOnly={readOnly}
      onChange={onChange}
    />
  );
};

Input.defaultProps = {
  type: "text",
  value: "",
  readOnly: false,
};

export default Input;
