import React from "react";

const Text = ({ children, ...props }) => (
  <span className="text" {...props}>{children}</span>
);

export default Text;
