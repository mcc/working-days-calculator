import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  align?: string;
  outlined?: boolean;
};

function Card({ children, className, align, outlined, ...props }: CardProps) {
  const cardAlign = `align-${align}`;
  const cardStyle = outlined ? "outlined" : "";
  const classNames = `card ${className || ""} ${cardAlign} ${cardStyle}`;
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}

Card.defaultProps = {
  children: <div></div>,
  align: "center",
};

export default Card;
