import React from "react";
import { ThemeContext } from './theme-context';
import { UserContext } from './user-context';

function UserStatus() {
    // The Theme Toggler Button receives not only the theme
    // but also a toggleTheme function from the context
    return (
      <ThemeContext.Consumer>
        {({theme}) => (
            <UserContext.Consumer>
                {({name}) => (
                    <div
                        style={{backgroundColor: theme.background}}>
                        {name}
                    </div>
                )}
            </UserContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
  
  export default UserStatus;