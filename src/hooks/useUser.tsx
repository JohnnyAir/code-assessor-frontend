import React from "react";
import { UserContext } from "../userContext";

export const useUser = () => {
  const user = React.useContext(UserContext);
  return user;
};
