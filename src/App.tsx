import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { UserProvider } from "./auth/userContext";
import { AuthenticatedRoutesWrapper } from "./auth/AuthenticatedRoute";
import theme from "./theme";
import Student from "./Student";
import TakeTest from "./Student/TakeTest";
import Login from "./auth/Login";

const queryClient = new QueryClient();

const ProtectedRoutes = (props:any) => (
  <AuthenticatedRoutesWrapper {...props}>
    <Route exact path="/" component={Student} />
    <Route exact path="/take-test/:testId" component={TakeTest} />
  </AuthenticatedRoutesWrapper>
);

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <UserProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/" component={ProtectedRoutes} />
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </ChakraProvider>
  </QueryClientProvider>
);
