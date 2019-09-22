import React from 'react';
import { ThemeContext, themes } from './theme-context';
import ThemedButton from './themed-button';

type ToolbarProps = {
  changeTheme: () => void
}

type AppState = {
  toggleTheme: () => void
  theme: {
    foreground: string
    background: string
  }
}

class App extends React.Component<any, AppState>{
  constructor(props: any) {
    super(props);

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme.bind(this),
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
    // The entire state is passed to the provider
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

export default App;