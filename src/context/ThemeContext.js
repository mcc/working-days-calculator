import React, { useLayoutEffect, useState } from "react";

import Themes from "data/Colors";
import { setLocalStorage, getLocalStorage } from "utils/Storage";

const ThemeContext = React.createContext({
  theme: "greenTheme",
  isCustomMode: false,
  toggleTheme: () => {},
  toggleCustomMode: () => {},
  applyBackground: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("greenTheme");
  const [isCustomMode, setCustomMode] = useState(false);

  //paint app before it renders elements
  useLayoutEffect(() => {
    const storedTheme = getLocalStorage("theme") || theme;
    const useCustomBackground = getLocalStorage("useCustomBackground");
    
    if (useCustomBackground) {
      setCustomMode(true);
      applyBackground();
    }
    
    setTheme(storedTheme);
    applyTheme(Themes[theme]);
  }, [theme]);

  const applyTheme = (theme) => {
    const root = document.getElementsByTagName("html")[0];
    root.style.cssText = theme.join(";");
  };

  const applyBackground = () => {
    const base64 = getLocalStorage("bg");
    const img = document.querySelector(".background");
    if(!img) return;
    img.src = base64;
  };

  const toggleTheme = (themeName) => {
    const body = document.getElementsByTagName("body")[0];
    body.style.cssText = "transition : background 0.5s ease";
    setTheme(themeName);
    setLocalStorage("theme", themeName);
  };

  const toggleCustomMode = (state) => {
    setCustomMode(state);
    setLocalStorage("useCustomBackground", state);
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        isCustomMode,
        toggleCustomMode,
        applyBackground,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
