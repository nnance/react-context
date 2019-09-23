import React from "react";

export interface IUser {
  name: string;
}

export interface ISession {
  isLoggedIn: boolean;
  user?: IUser;
}

export type ActionDispatch = (action: Action) => void;

export interface IUserContext {
  dispatch?: ActionDispatch;
  session: ISession;
}

type Action = { type: "logout" } | { type: "login"; user: IUser };

// Signed-in user context
export const UserContext = React.createContext<IUserContext>({
  session: { isLoggedIn: false }
});

const reducer = (state: ISession, action: Action): ISession => {
  switch (action.type) {
    case "logout":
      return {
        isLoggedIn: false
      };
    case "login":
      return {
        isLoggedIn: true,
        user: action.user
      };
  }
};

export const useUserState = (): IUserContext => {
  const [state, dispatch] = React.useReducer(reducer, { isLoggedIn: false });

  return {
    dispatch,
    session: state
  };
};
