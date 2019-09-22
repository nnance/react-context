import React from "react";
import { ThemeContext } from './theme-context';
import { UserContext } from './user-context';

function UserButton() {
    return (
      <ThemeContext.Consumer>
        {({theme}) => (
            <UserContext.Consumer>
                {({user, dispatch}) => (
                    <button
                        onClick={event => dispatch({type: "login", user: {name: "Test User"}})}
                        style={{backgroundColor: theme.background}}>
                        Login Test User
                    </button>
                )}
            </UserContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
  
  export default UserButton;