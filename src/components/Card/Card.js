import React from "react";

const Card = ({ children, className, align, outlined, ...props }) => {
  const cardAlign = `align-${align}`;
  const cardStyle = outlined ? "outlined" : "";
  const classNames = `card ${className || ""} ${cardAlign} ${cardStyle}`;
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

Card.defaultProps = {
  children: <div></div>,
  align: "center",
};

export default Card;
