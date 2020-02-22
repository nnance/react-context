import React from "react";

export interface IUser {
  name: string;
}

export interface ISession {
  isLoggedIn: boolean;
  user?: IUser;
}

export type ActionDispatch = (action: Action) => void;

export type UserContext = [ISession, ActionDispatch];

type Action = { type: "logout" } | { type: "login"; user: IUser };

// Signed-in user context
export const UserContext = React.createContext<UserContext>([
  { isLoggedIn: false },
  () => undefined
]);

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

export const useUserState = (
  initialState: ISession = { isLoggedIn: false }
): UserContext => React.useReducer(reducer, initialState);
