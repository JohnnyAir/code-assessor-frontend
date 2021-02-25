import { get, base_url } from "../utils/requestHandler";
import { delay } from "../utils/helpers";

export interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  department?: string;
  level?: string;
}

export function fetchLoginUser() {
  const loggedIn = localStorage.getItem("login");
  return get<User>(loggedIn ? `${base_url}mock/user.mock.json` : "./nofile.json");
}

export function Logout() {
  return get<User>("./user.mock.json");
}

export type LoginRequest = { username: string; password: string };

export const Login = async ({ username, password }: LoginRequest) => {
  await delay(2000);
  if (username !== "F/HD/18/2342345" || password !== "yourpassword")
    throw new Error("Invalid credentials");
  return get<User>(`${base_url}mock/user.mock.json`);
};
