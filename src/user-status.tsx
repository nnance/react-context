import React from "react";
import { ThemeContext } from './theme-context';
import { UserContext, Session } from './user-context';

const Status = ({session}: {session: Session}) => {
    if (session.isLoggedIn) {
        return (<div>Logged In: {session.user ? session.user.name : ""}</div>)
    } else {
        return (<div>Logged out</div>)
    }
}

function UserStatus() {
    // The Theme Toggler Button receives not only the theme
    // but also a toggleTheme function from the context
    return (
      <ThemeContext.Consumer>
        {({theme}) => (
            <UserContext.Consumer>
                {({session}) => {
                    return (
                        <div
                            style={{backgroundColor: theme.background}}>
                            <Status session={session}/>
                        </div>
                    )
                }}
            </UserContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
  
  export default UserStatus;