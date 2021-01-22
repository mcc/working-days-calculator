import React, { useLayoutEffect, useState } from "react";

import Themes from "data/Colors";

const ThemeContext = React.createContext({
  theme: "blueTheme",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("blueTheme");

  useLayoutEffect(() => {
    //TODO: get last theme from localstorage

    applyTheme(Themes[theme]);
  }, [theme]);

  const applyTheme = (theme) => {
    const root = document.getElementsByTagName("html")[0];
    root.style.cssText = theme.join(";");
  };

  const toggleTheme = (themeName) => {
    const body = document.getElementsByTagName("body")[0];
    body.style.cssText = "transition : background 0.5s ease";
    setTheme(`${themeName}Theme`);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
