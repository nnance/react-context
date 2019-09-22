import React from 'react';
import { ThemeContext, useTheme } from './theme-context';
import ThemedButton from './themed-button';
import UserStatus from './user-status';

const App: React.FC = () => {

  const state = useTheme();

  return (
    <ThemeContext.Provider value={state}>
      <ThemedButton />
      <UserStatus />
    </ThemeContext.Provider>
  )
}

export default App;