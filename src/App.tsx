import React from "react";
import { ChakraProvider, Flex, Text } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { AuthProvider, useAuth } from "./auth/AuthContext";
import theme from "./theme";

const Student = React.lazy(() => import("student"));
const Admin = React.lazy(() => import("admin"));
const Login = React.lazy(() => import("auth/Login"));

const queryClient = new QueryClient();

const LoadAppRoutes = (props: any) => {
  const { user } = useAuth();

  return (
    <React.Suspense
      fallback={
        <Flex justify="center" align="center" h="100vh">
          <Text>loading</Text>
        </Flex>
      }
    >
      <Switch>
        {!user ? (
          <Route exact path="/" component={Login} />
        ) : (
          <Route path="/">
            <Route path="/" component={Student} />
            <Route path="/admin" component={Admin} />
          </Route>
        )}
      </Switch>
    </React.Suspense>
  );
};

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Router>
          <LoadAppRoutes />
        </Router>
      </AuthProvider>
    </ChakraProvider>
  </QueryClientProvider>
);
