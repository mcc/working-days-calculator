import React from "react";

type TextProps = {
  children: React.ReactNode;
};

function Text({ children, ...props }: TextProps) {
  return (
    <span className="text" {...props}>
      {children}
    </span>
  );
}

export default Text;
