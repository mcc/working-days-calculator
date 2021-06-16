import React, { useContext, useState } from "react";

import SaveAltIcon from "@material-ui/icons/SaveAlt";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import ImageIcon from "@material-ui/icons/Image";

import { ThemeContext } from "context/ThemeContext";
import Themes from "data/Colors";

import { setLocalStorage } from "utils/Storage";
import { toBase64 } from "utils/File";

type ColorSelectorProps = {
  colors: string[];
  onToggle: (color: string) => void;
  currentTheme: string;
};

type BackgroundSelectorProps = {
  currentTheme: string;
  isCustomMode: boolean;
  toggleMode: (mode: boolean) => void;
  applyBackground: () => void;
};
/**
 * @description get current theme's background color
 * @param {String} color themename
 */
const getThemeBackground = (color: string) => {
  const currentThemeStyle: string[] = Themes[color];
  const backgroundColor = currentThemeStyle[0].split(":")[1];
  return backgroundColor;
};

function ColorSelector({ colors, onToggle, currentTheme }: ColorSelectorProps) {
  return (
    <div className="color-selector">
      <div className="title"> Color </div>
      <div className="color-wrapper">
        {colors.map((color: string) => (
          <span className={`${color}`} onClick={() => onToggle(color)}>
            {color === currentTheme && (
              <ArrowForwardIosIcon className="selected" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

function BackgroundSelector({
  currentTheme,
  isCustomMode,
  toggleMode,
  applyBackground,
}: BackgroundSelectorProps) {
  const getFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;

    toBase64(files[0])
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
}

function ThemeSelector() {
  const themes = [
    "redYellowTheme",
    "greenTheme",
    "blueTheme",
    "pinkPurpleTheme",
  ];
  const {
    theme,
    isCustomMode,
    toggleCustomMode,
    toggleTheme,
    applyBackground,
  } = useContext(ThemeContext);

  const handleToggleTheme = (color: string) => {
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
}

export default ThemeSelector;
