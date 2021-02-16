import { post, base_url } from "../utils/requestHandler";

interface User {
  id: string;
  name: string;
  email: string;
  username: string;
}

export const Login = (username: string, password: string) => {
  return post<User>(
    `${base_url}/auth/post`,
    JSON.stringify({ username, password })
  );
};