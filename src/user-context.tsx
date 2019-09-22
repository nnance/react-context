import React from "react";

export type User = {
    name: string
}

type Action =
  | { type: 'login', user: User }

export type UserState = {
    user: User
    dispatch: React.Dispatch<Action>
}

// Signed-in user context
export const UserContext = React.createContext<UserState>({
    user: {
        name: 'Guest',
    },
    dispatch: () => {}
});

const reducer = (state: User, action: Action): User => {
    switch (action.type) {
        case 'login':
          return action.user
      }
}

export const useUserState = (): UserState => {
    const [state, dispatch] = React.useReducer(reducer, {
        name: "Guest"
    });

    return {
        user: state,
        dispatch,
    }
}