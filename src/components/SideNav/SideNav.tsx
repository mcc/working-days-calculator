import React from "react";

import PaletteIcon from "@material-ui/icons/Palette";

import NavItem from "./NavItem";
import ThemeSelector from "components/ThemeSelector";

type SideNavProps = {
  open: boolean;
  onToggle: (e: React.MouseEvent<HTMLElement>) => void;
};

function SideNav({ open, onToggle }: SideNavProps) {
  const handleClickBackdrop = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget && open) onToggle(e);
  };

  const containerStyle: React.CSSProperties = {
    visibility: open ? "visible" : "hidden",
  };

  const sideNavStyle: React.CSSProperties = {
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
}

export default SideNav;
