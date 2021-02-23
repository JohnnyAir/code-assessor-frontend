import { get, base_url } from "../utils/requestHandler";
import { delay } from "../utils/helpers";

export interface User {
  id: string;
  name: string;
  email: string;
  username: string;
}

export function fetchLoginUser() {
  const loggredIn = localStorage.getItem("login");
  return get<User>(loggredIn ? `${base_url}user.mock.json` : "./nofile.json");
}

export function Logout() {
  return get<User>("./user.mock.json");
}

export type LoginBody = { username: string; password: string };

export const Login = async ({ username, password }: LoginBody) => {
  await delay(2000);
  if (username !== "F/HD/18/2342345" || password !== "yourpassword")
    throw new Error("Invalid credentials");
  return get<User>(`${base_url}user.mock.json`);
};
