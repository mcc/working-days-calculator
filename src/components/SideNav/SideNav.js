import React from "react";

import PaletteIcon from "@material-ui/icons/Palette";

import NavItem from "./NavItem";
import ThemeSelector from "components/ThemeSelector";

const SideNav = ({ open, onToggle }) => {
  const handleClickBackdrop = (e) => {
    if (e.target === e.currentTarget) onToggle();
  };

  const containerStyle = {
    visibility: open ? "visible" : "hidden",
  };

  const sideNavStyle = {
    transform: open ? "translateX(0)" : "translateX(350px)",
  };

  return (
    <div className="side-nav-container" style={containerStyle}>
      <div id="sideNav" className="side-nav" style={sideNavStyle}>
        <h3> Settings</h3>
        <div className="nav-item-list">
          <NavItem icon={<PaletteIcon />} name="Theme">
            <ThemeSelector />
          </NavItem>
        </div>
      </div>
      <div className="backdrop" onClick={handleClickBackdrop}></div>
    </div>
  );
};

export default SideNav;
