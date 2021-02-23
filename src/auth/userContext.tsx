import React, { useContext } from "react";
import { useQuery } from "react-query";
import { User, fetchLoginUser } from "./auth";

//User Context
interface AppUserContext {
  loadingUser: boolean;
  isError: boolean;
  error: Error | null;
  user: User | undefined;
}

const initialAppUserContextState = {
  loadingUser: false,
  isError: false,
  user: undefined,
  error: null,
};

export const UserContext = React.createContext<AppUserContext>(
  initialAppUserContextState
);

export const UserConsumer = UserContext.Consumer;

export const UserProvider: React.FC = ({ children }) => {
  const { data, isLoading, isError, error } = useQuery<User, Error>(
    "loggedInUser",
    fetchLoginUser,
    { retry: 2 }
  );

  const userContextValue = {
    loadingUser: isLoading,
    isError: isError,
    error: error,
    user: data,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
