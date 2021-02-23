import React from "react";
import { useUser } from "./userContext";
import { Route, Redirect } from "react-router-dom";
import PageLoading from "../Components/PageLoading";

const RedirectToLogin = () => <Redirect to={{ pathname: "/login" }} />;

export const AuthenticatedRoutesWrapper: React.FC = (props) => {
  const { user, loadingUser } = useUser();
  if (loadingUser) return <PageLoading />;
  if (!user) return <RedirectToLogin />;
  return <React.Fragment>{props.children}</React.Fragment>;
};

export const AuthenticatedRoute = ({ component, ...rest }: any) => {
  const { user, loadingUser } = useUser();

  const routeComponent = (props: any) => {
    if (loadingUser) return <PageLoading />;
    if (!user) return <RedirectToLogin />;
    return React.createElement(component, props);
  };

  return <Route {...rest} render={routeComponent} />;
};
