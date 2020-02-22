import React from "react";
import { UserContext } from "./user-context";

function UserButton() {
  const [session, dispatch] = React.useContext(UserContext);

  const handleLogin = () =>
    dispatch({ type: "login", user: { name: "Test User" } });

  const handleLogout = () => dispatch({ type: "logout" });

  return !session.isLoggedIn ? (
    <button onClick={handleLogin}>Login Test User</button>
  ) : (
    <button onClick={handleLogout}>Log Out</button>
  );
}

export default UserButton;
