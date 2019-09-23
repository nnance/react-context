import React from "react";

export const themes = {
  dark: {
    background: "#222222",
    foreground: "#ffffff"
  },
  light: {
    background: "#eeeeee",
    foreground: "#000000"
  }
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  // tslint:disable-next-line:no-empty
  toggleTheme: () => {}
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
