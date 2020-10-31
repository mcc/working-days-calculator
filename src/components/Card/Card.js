import React from "react";

const Card = ({ children, className, align, ...props }) => {
  const cardAlign = `align-${align}`;
  const classNames = `card ${className || ''} ${cardAlign}`; 
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
