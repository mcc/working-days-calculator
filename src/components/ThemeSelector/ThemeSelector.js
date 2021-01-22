import React, { useContext } from "react";

import SaveAltIcon from "@material-ui/icons/SaveAlt";

import { ThemeContext } from "context/ThemeContext";

const ColorSelector = ({ colors, onToggle }) => (
  <div className="color-selector">
    <div className="title"> Color </div>
    <div className="color-wrapper">
      {colors.map((color) => (
        <span
          className={`theme-${color}`}
          onClick={() => onToggle(color)}
        ></span>
      ))}
    </div>
  </div>
);

const BackgroundSelector = ({}) => (
  <div className="bg-selector">
    <div className="title"> Background</div>
    <div className="color-wrapper">
      <span> </span>
      <span> </span>
    </div>
    <div className="file-drop">
      <SaveAltIcon />
      <span> Choose a file or drag it here </span>
    </div>
  </div>
);

const ThemeSelector = ({}) => {
  const { toggleTheme } = useContext(ThemeContext);
  const themes = ["blue", "green", "redYellow"];

  return (
    <div className="theme-selector">
      <ColorSelector colors={themes} onToggle={toggleTheme} />
      <BackgroundSelector />
    </div>
  );
};

export default ThemeSelector;
