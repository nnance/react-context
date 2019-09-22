import React from "react";

export const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => { },
});

export const useTheme = () => {

    const toggleTheme = () => {
        setState(state => ({
            ...state,
            theme:
                state.theme === themes.dark
                    ? themes.light
                    : themes.dark,
        }));
    }

    const [state, setState] = React.useState({
        theme: themes.light,
        toggleTheme,
    })

    return state;
}