export interface AuthResponse {
  user: null | AuthUser;
  tokens: AuthToken;
}

export interface AuthContextData {
  user: null | AuthUser;
  token: null | string;
}

export type AuthToken = {
  access: AuthTokenBody;
  refresh: AuthTokenBody;
};

export type AuthTokenBody = {
  expires: string;
  token: string;
};

export type AuthUser = {
  avatar: string;
  department: string;
  id: string;
  level: string;
  matricNumber: string;
  name: string;
};



export type LoginRequest = { username: string; password: string };

export interface AppUserContext {
  user: AuthUser | undefined | null;
  token: string | undefined | null;
  login: (form: LoginRequest) => Promise<void>;
}
