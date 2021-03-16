const apiURL = process.env.REACT_APP_API_URL || "";

interface ApiResponse<T> {
  data: T | Record<string, any> | null;
  error: Record<string, any> | null | string;
  status: string;
  message: string;
}

type ApiClient = <T>( url: string, options?: RequestInit ) => Promise<ApiResponse<T>>;

export const client: ApiClient = async (url, options = {}) => {
  const { headers, ...config } = options;
  try {
    const response = await fetch(`${apiURL}${url}`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...(headers || {}),
      },
      ...config,
    });
    if (!response.ok) {
      let data = await response.clone().json();
      return Promise.reject(data);
    }
    return response.json();
  } catch (e) {
    Promise.reject(e);
  }
};

export const apiGet: ApiClient = async (url, options = {}) => {
  return client(url, { method: "GET", ...options });
};

type ApiClientPost = <T>(
  url: string,
  data: string | Record<string,any>,
  options?: RequestInit
) => Promise<ApiResponse<T>>;

export const apiPost: ApiClientPost = async (url, data, options = {}) => {
  let body = data && typeof data === "object" ? JSON.stringify(data) : data;
  return client(url, { method: "POST", body, ...options });
};
