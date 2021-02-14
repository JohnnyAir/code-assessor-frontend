import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Student from "./Student";
import TakeTest from "./Student/TakeTest";
import Login from "./Student/Login";
import theme from "./theme";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Student} />
          <Route path="/take-test" component={TakeTest} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  </QueryClientProvider>
);
