import React, { useContext } from "react";
import { ThemeContext } from "./theme-context";
import { ISession, UserContext } from "./user-context";

const Status = ({ session }: { session: ISession }) => {
  if (session.isLoggedIn) {
    return <div>Logged In: {session.user ? session.user.name : ""}</div>;
  } else {
    return <div>Logged out</div>;
  }
};

function UserStatus() {
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  const [session] = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div style={theme}>
      <Status session={session} />
    </div>
  );
}

export default UserStatus;
