import { useMutation, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { User, LoginBody, Login } from "./auth";

export function useLogin() {
  const history = useHistory();
  const query = useQueryClient();
  const { mutate, ...rest } = useMutation<User, Error, LoginBody>(
    "loggedInUser",
    (body) => Login(body),
    {
      onSuccess: () => {
        history.replace("/");
        localStorage.setItem("login", "yes");
        query.invalidateQueries("loggedInUser");
      },
    }
  );

  return {
    login: mutate,
    ...rest,
  };
}
