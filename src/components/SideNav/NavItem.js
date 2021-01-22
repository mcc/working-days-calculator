import React, { useState } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const NavItem = ({ icon, name, children }) => {
  const [isOpen, setOpen] = useState(true);

  const toggleItem = () => {
    setOpen((prevState) => !prevState);
  };

  const iconStyle = {
    display: "inline-block",
    transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
    transition : 'transform 0.3s'
  };

  return (
    <div>
      <div className="nav-item" onClick={toggleItem}>
        <span className="icon"> {icon}</span>
        <span className="name">{name} </span>
        <ArrowForwardIosIcon style={iconStyle} onClick={toggleItem} />
      </div>
      {isOpen && children}
    </div>
  );
};

NavItem.defaultProps = {
  icon: "",
  name: "menu-name",
  isOpen: "true",
};

export default NavItem;
