import React, { useState } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const NavItem = ({ icon, name, children }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleItem = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <div>
      <div className="nav-item">
        <span className="icon"> {icon}</span>
        <span className="name">{name} </span>
        <ArrowForwardIosIcon onClick={toggleItem} />
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
