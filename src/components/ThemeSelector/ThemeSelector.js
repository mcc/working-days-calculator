import React, { useContext, useState } from "react";

import SaveAltIcon from "@material-ui/icons/SaveAlt";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";

import { ThemeContext } from "context/ThemeContext";
import Themes from "data/Colors";

const ColorSelector = ({ colors, onToggle, currentTheme }) => (
  <div className="color-selector">
    <div className="title"> Color </div>
    <div className="color-wrapper">
      {colors.map((color) => (
        <span className={`${color}`} onClick={() => onToggle(color)}>
          {color === currentTheme && (
            <ArrowForwardIosIcon className="selected" />
          )}
        </span>
      ))}
    </div>
  </div>
);

const BackgroundSelector = ({ background, isCustomMode, toggleMode }) => {
  const mode = isCustomMode ? "custom" : "default";

  return (
    <div className="bg-selector">
      <div className="title"> Background</div>
      <div className="color-wrapper">
        <span
          style={{ backgroundColor: background }}
          onClick={() => toggleMode(false)}
        >
          {!isCustomMode && <ArrowForwardIosIcon className="selected" />}
        </span>
        <span
          className={`outlined ${isCustomMode ? "selected" : ""}`}
          onClick={() => toggleMode(true)}
        >
          <ImageSearchIcon />
        </span>
      </div>
      <span className="description"> Use {mode} background</span>
      {isCustomMode && (
        <div className="file-drop">
          <SaveAltIcon />
          <span> Choose a file or drag it here </span>
        </div>
      )}
    </div>
  );
};

/**
 * @description get current theme's background color
 * @param {String} color themename
 */
const getThemeBackground = (color) => {
  const currentThemeStyle = Themes[color];
  const backgroundColor = currentThemeStyle[0].split(":")[1];
  return backgroundColor;
};

const ThemeSelector = ({}) => {
  const themes = ["blueTheme", "greenTheme", "redYellowTheme"];
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [background, setBackground] = useState(getThemeBackground(theme));
  const [isCustomMode, setCustomMode] = useState(false);

  const handleToggleTheme = (color) => {
    toggleTheme(color);
    setBackground(getThemeBackground(color));
  };

  const handleToggleMode = (state) => {
    setCustomMode(state);
  };

  return (
    <div className="theme-selector">
      <ColorSelector
        colors={themes}
        onToggle={handleToggleTheme}
        currentTheme={theme}
      />
      <BackgroundSelector
        background={background}
        isCustomMode={isCustomMode}
        toggleMode={handleToggleMode}
      />
    </div>
  );
};

export default ThemeSelector;
