import React from 'react';
import { ThemeContext, useThemeState } from './theme-context';
import ThemedButton from './themed-button';
import UserStatus from './user-status';
import UserButton from "./user-button";
import { useUserState, UserContext } from './user-context';

const App: React.FC = () => {

  const themeState = useThemeState();
  const userState = useUserState();

  return (
    <ThemeContext.Provider value={themeState}>
      <ThemedButton />
      <UserContext.Provider value={userState}>
        <UserStatus />
        <UserButton />
      </UserContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App;