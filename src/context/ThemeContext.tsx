import React, { createContext, useLayoutEffect, useState } from "react";

import Themes from "data/Colors";
import { setLocalStorage, getLocalStorage } from "utils/Storage";

type ThemeProviderProps = {
  children: React.ReactNode;
};

type State = {
  theme: string;
  isCustomMode: boolean;
  toggleTheme: (name: string) => void;
  toggleCustomMode: (state: boolean) => void;
  applyBackground: () => void;
};

const ThemeContext = createContext<State>({
  theme: "greenTheme",
  isCustomMode: false,
  toggleTheme: () => {},
  toggleCustomMode: () => {},
  applyBackground: () => {},
});

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>("greenTheme");
  const [isCustomMode, setCustomMode] = useState<boolean>(false);

  //paint app before it renders elements
  useLayoutEffect(() => {
    const storedTheme = getLocalStorage("theme") || theme;
    setTheme(storedTheme);
    applyTheme(Themes[theme]);
  }, [theme]);

  useLayoutEffect(() => {
    const useCustomBackground = getLocalStorage("useCustomBackground");

    if (useCustomBackground) {
      setCustomMode(true);
      applyBackground();
    }
  }, [isCustomMode]);

  const applyTheme = (theme: string[]) => {
    const root = document.getElementsByTagName("html")[0];
    root.style.cssText = theme.join(";");
  };

  const applyBackground = () => {
    const base64 = getLocalStorage("bg");
    const img: HTMLImageElement = document.querySelector(".background")!;
    if (!img) return;
    img.src = base64;
  };

  const toggleTheme = (themeName: string) => {
    const body = document.getElementsByTagName("body")[0];
    body.style.cssText = "transition : background 0.5s ease";
    setTheme(themeName);
    setLocalStorage("theme", themeName);
  };

  const toggleCustomMode = (state: boolean) => {
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
}

export { ThemeContext, ThemeProvider };
