import { loadAuthState, saveAuthState } from "lib/store";
import { apiGet, apiPost } from "lib/api-client";
import { AuthResponse, LoginRequest } from "./auth.types";

export const authQueryKey = "authUserData";

export async function getAuthUserData() {
  const authData = loadAuthState();
  console.log(authData)
  if (authData) {
    let user = authData.user;
    let token = authData.tokens.access.token;
    return { user, token };
  }
  return { user: null, token: null };
}

export function login(data: LoginRequest) {
  return apiPost<AuthResponse>("/v1/auth/login", data).then((res) => {
    if (res.user) saveAuthState(res);
    return res.user;
  });
}

export function logout() {}
