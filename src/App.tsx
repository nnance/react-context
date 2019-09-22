import React from 'react';
import { ThemeContext, themes } from './theme-context';
import ThemedButton from './themed-button';

type ToolbarProps = {
  changeTheme: () => void
}

// An intermediate component that uses the ThemedButton
function Toolbar(props: ToolbarProps) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

type AppState = {
  theme: {
    foreground: string
    background: string
  }
}

class App extends React.Component<any, AppState>{
  constructor(props: any) {
    super(props);
    this.state = {
      theme: themes.light,
    };
  }

  toggleTheme() {
    this.setState(state => ({
      theme:
        state.theme === themes.dark
          ? themes.light
          : themes.dark,
    }));
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme.bind(this)} />
        </ThemeContext.Provider>
        <div>
          <ThemedButton>Outside the context</ThemedButton>
        </div>
      </div>
    );
  }
}

export default App;