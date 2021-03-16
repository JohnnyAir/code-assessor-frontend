import React from "react";
import { useQuery, useQueryClient } from "react-query";
import * as auth from "./auth";
import { AuthUser, AppUserContext } from "./auth.types";
import { Flex, Text } from "@chakra-ui/react";

export const AuthContext = React.createContext<AppUserContext | undefined>(
  undefined
);

export const AuthConsumer = AuthContext.Consumer;

export const AuthProvider: React.FC = ({ children }) => {
  const authState = useQuery<AuthUser, Error>(
    auth.authQueryKey,
    auth.getAuthUserData,
    {
      retry: 0,
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: true,
    }
  );

  const queryClient = useQueryClient();

  const updateQueryData = React.useCallback(
    (user) => {
      queryClient.setQueryData(auth.authQueryKey, { user });
    },
    [queryClient]
  );

  const login = React.useCallback(
    (form) => auth.login(form).then(updateQueryData),
    [updateQueryData]
  );

  if (authState.status === "loading")
    return (
      <Flex justify="center" align="center" h="100vh">
        <Text>loading</Text>
      </Flex>
    );

  return (
    <AuthContext.Provider
      value={{
        user: authState.data?.user,
        token: authState.data?.token,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }
  return context;
};
