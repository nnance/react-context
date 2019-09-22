import React from "react";

export type User = {
    name: string
}

export type Session = {
    isLoggedIn: boolean
    user?: User
}

type Action =
    | { type: 'logout' }
    | { type: 'login', user: User }

// Signed-in user context
export const UserContext = React.createContext({
    session: { isLoggedIn: false },
    dispatch: (action: Action) => {}
});

const reducer = (state: Session, action: Action): Session => {
    switch (action.type) {
        case 'logout': return {
            isLoggedIn: false
        }
        case 'login': return {
            isLoggedIn: true,
            user: action.user,
        }
    }
}

export const useUserState = () => {
    const [state, dispatch] = React.useReducer(reducer, { isLoggedIn: false });

    return {
        session: state,
        dispatch,
    }
}