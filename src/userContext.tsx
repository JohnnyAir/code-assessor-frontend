import React from "react";

export interface User {
  username: string;
  name: string;
}

export const UserContext = React.createContext<User | null>(null);

export const UserConsumer = UserContext.Consumer;

export const UserProvider: React.FC = ({ children }) => {
  const [user] = React.useState<User>({
    username: "ekunolajohn",
    name: "Ekunola John",
  });
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
