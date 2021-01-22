import React, { useContext, useState } from "react";

import SaveAltIcon from "@material-ui/icons/SaveAlt";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import ImageIcon from "@material-ui/icons/Image";

import { ThemeContext } from "context/ThemeContext";
import Themes from "data/Colors";

import { setLocalStorage } from "utils/Storage";
import { toBase64 } from "utils/File";

/**
 * @description get current theme's background color
 * @param {String} color themename
 */
const getThemeBackground = (color) => {
  const currentThemeStyle = Themes[color];
  const backgroundColor = currentThemeStyle[0].split(":")[1];
  return backgroundColor;
};

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

const BackgroundSelector = ({
  currentTheme,
  isCustomMode,
  toggleMode,
  applyBackground,
}) => {
  const getFile = () => {
    const file = document.querySelector('input[type="file"]').files[0];
    toBase64(file)
      .then((res) => {
        setLocalStorage("bg", res.data);
        setLocalStorage("useCustomBackground", true);
        applyBackground();
      })
      .catch((error) => {
        alert(
          "Image upload failed. Please try again or select a different image."
        );
      });
  };

  const mode = isCustomMode ? "custom" : "default";
  const backgroundColor = getThemeBackground(currentTheme);
  return (
    <div className="bg-selector">
      <div className="title"> Background</div>
      <div className="color-wrapper">
        <span style={{ backgroundColor }} onClick={() => toggleMode(false)}>
          {!isCustomMode && <ArrowForwardIosIcon className="selected" />}
        </span>
        <span
          className={`outlined ${isCustomMode ? "selected" : ""}`}
          onClick={() => toggleMode(true)}
        >
          {isCustomMode ? <ImageIcon /> : <ImageSearchIcon />}
        </span>
      </div>
      <span className="description"> Use {mode} background</span>
      {isCustomMode && (
        <label className="file-drop">
          <input type="file" style={{ display: "none" }} onChange={getFile} />
          <SaveAltIcon />
          <span> Choose a file </span>
        </label>
      )}
    </div>
  );
};

const ThemeSelector = ({}) => {
  const themes = ["blueTheme", "greenTheme", "redYellowTheme"];
  const {
    theme,
    isCustomMode,
    toggleCustomMode,
    toggleTheme,
    applyBackground,
  } = useContext(ThemeContext);

  const handleToggleTheme = (color) => {
    toggleTheme(color);
  };

  return (
    <div className="theme-selector">
      <ColorSelector
        colors={themes}
        onToggle={handleToggleTheme}
        currentTheme={theme}
      />
      <BackgroundSelector
        currentTheme={theme}
        isCustomMode={isCustomMode}
        toggleMode={toggleCustomMode}
        applyBackground={applyBackground}
      />
    </div>
  );
};

export default ThemeSelector;
