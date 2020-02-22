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
