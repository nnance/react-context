import React from "react";

export type UserContextType = {
    name: string
}

// Signed-in user context
export const UserContext = React.createContext<UserContextType>({
    name: 'Guest',
});