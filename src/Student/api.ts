import { post, get, base_url } from "../utils/requestHandler";
import { useQuery } from "react-query";

interface User {
  id: string;
  name: string;
  email: string;
  username: string;
}

export const getUser = (id: string) => {
  return get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
};

export const Login = (username: string, password: string) => {
  return post<User>(
    `${base_url}/auth/post`,
    JSON.stringify({ username, password })
  );
};

export function useUser(userId: string) {
  return useQuery<User, {}>(["user", userId], () => getUser(userId));
}
