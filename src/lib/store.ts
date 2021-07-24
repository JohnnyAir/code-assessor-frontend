import { AuthResponse } from "features/auth/auth.types";

export const getItem = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch (err) {
    return null;
  }
};

export const getJsonItem = <T>(key: string) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (!serializedState) {
      return null;
    }
    return JSON.parse(serializedState) as T;
  } catch (err) {
    return null;
  }
};

export const saveItem = (key: string, value: string | object) => {
  if (!value) return;
  try {
    let serializedState =
      typeof value === "string" ? value : JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    return null;
  }
};

export const loadAuthState = () => {
  return getJsonItem<AuthResponse | null>("__auth");
};

export const saveAuthState = (state: Record<string, any> | string) => {
  return saveItem("__auth", state);
};
