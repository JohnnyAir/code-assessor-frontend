export const getValue = (key: string) => {
  try {
    return window.localStorage.getItem(key);
  } catch (err) {
    return null;
  }
};

export const getJsonValue = <T>(key: string) => {
  try {
    const serializedState = getValue(key);
    if (!serializedState) {
      return serializedState;
    }
    return JSON.parse(serializedState) as T;
  } catch (err) {
    return null;
  }
};

export const save = (key: string, data: string | object) => {
  try {
    if (data && typeof data === "object") {
      localStorage.setItem(key, JSON.stringify(data));
      return;
    }
    localStorage.setItem(key, data);
  } catch (err) {}
};
