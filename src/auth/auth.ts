import { loadAuthState, saveAuthState } from "lib/store";
import { apiGet, apiPost } from "lib/api-client";
import { AuthUser, LoginRequest } from "./auth.types";

export const authQueryKey = "authUserData";

export async function getAuthUserData() {
  const authData = loadAuthState();
  let user = null;
  let token = null
  if (authData) {
    const response = await apiGet<AuthUser>("/mock/user.mock.json");
    user = response //response.data?.user;
    token = response.data?.token;
    if (response.data) saveAuthState(response.data);
  }
  return { user, token };
}

export function login(data: LoginRequest) {
  return apiPost<AuthUser>("/mock/user.mock.json", data).then((res) => {
    if (res.data) saveAuthState(res.data);
    return res.data;
  });
}

export function logout() {}
