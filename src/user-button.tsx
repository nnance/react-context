import React from "react";
import { ThemeContext } from "./theme-context";
import { ActionDispatch, UserContext } from "./user-context";

function UserButton() {
  const handleLogin = (dispatch: ActionDispatch | undefined) =>
    dispatch
      ? () => dispatch({ type: "login", user: { name: "Test User" } })
      : dispatch;

  const handleLogout = (dispatch: ActionDispatch | undefined) => () =>
    dispatch ? () => dispatch({ type: "logout" }) : dispatch;

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <UserContext.Consumer>
          {({ session, dispatch }) => {
            if (!session.isLoggedIn) {
              return (
                <button onClick={handleLogin(dispatch)}>Login Test User</button>
              );
            } else {
              return <button onClick={handleLogout(dispatch)}>Log Out</button>;
            }
          }}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}

export default UserButton;
