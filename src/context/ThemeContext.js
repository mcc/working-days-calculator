import React, { useLayoutEffect, useState } from "react";

import Themes from "data/Colors";
import {setLocalStorage, getLocalStorage} from 'utils/Storage';

const ThemeContext = React.createContext({
  theme: "greenTheme",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("greenTheme");
  
  //paint app before it renders elements
  useLayoutEffect(() => {
    let storedTheme = getLocalStorage('theme'); 
    if(storedTheme) {
      applyTheme(Themes[storedTheme]);
      return; 
    }

    applyTheme(Themes[theme]);
  }, [theme]);

  const applyTheme = (theme) => {
    const root = document.getElementsByTagName("html")[0];
    root.style.cssText = theme.join(";");
  };

  const toggleTheme = (themeName) => {
    const body = document.getElementsByTagName("body")[0];
    body.style.cssText = "transition : background 0.5s ease";
    setTheme(themeName);
    setLocalStorage('theme', themeName);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
