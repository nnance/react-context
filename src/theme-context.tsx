import React from "react";

export const themes = {
  dark: {
    backgroundColor: "#222222",
    color: "#ffffff"
  },
  light: {
    backgroundColor: "#eeeeee",
    color: "#000000"
  }
};

type ThemeToggle = () => void;

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: (() => undefined) as ThemeToggle
});

export const useThemeState = () => {
  const toggleTheme = () => {
    setState(prevState => ({
      ...prevState,
      theme: prevState.theme === themes.dark ? themes.light : themes.dark
    }));
  };

  const [state, setState] = React.useState({
    theme: themes.light,
    toggleTheme
  });

  return state;
};
