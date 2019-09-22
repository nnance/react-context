import React from "react";
import { ThemeContext } from './theme-context';
import { UserContext } from './user-context';

function UserButton() {
    return (
      <ThemeContext.Consumer>
        {({theme}) => (
            <UserContext.Consumer>
                {({session, dispatch}) => {
                    if (!session.isLoggedIn) {
                        return (
                            <button
                                onClick={() => dispatch({type: "login", user: {name: "Test User"}})}>
                                Login Test User
                            </button>
                        )
                    } else {
                        return (
                            <button
                                onClick={() => dispatch({type: "logout"})}>
                                Log Out
                            </button>
                        )
                    }
                }}
            </UserContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
  
  export default UserButton;