import React from "react";

const Button = ({ children, className, color, ...props }) => {
  const classNames = `button ${className} ${color}`;

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

Button.defaultProps = {
  color : 'blue', 
  onClick : console.warn('<Button /> onClick props is not defined. ')
}
export default Button;
