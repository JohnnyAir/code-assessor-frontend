export interface AuthUser {
  user: null | Record<string, any>;
  token: string | null;
}

export type LoginRequest = { username: string; password: string };

export interface AppUserContext {
  user: AuthUser["user"] | undefined;
  token: AuthUser["token"] | undefined;
  login: (form: LoginRequest) => Promise<void>;
}
