export const ERROR = {
  UNKNOWN: "UNKNOWN",
  NETWORK: "networkError",
  VALIDATION: "ApiValidationError",
  BAD_REQUEST: "ApiBadRequest",
  AUTHENTICATION_ERROR: "AUTHENTICATION_ERROR",
  SERVER_ERROR: "SERVER_ERROR",
  PROXY_ERROR: "PROXY_ERROR",
};

export const errorMsg = {
  [ERROR.UNKNOWN]: "An Error has Occured",
  [ERROR.NETWORK]:"A network error occured, check your internet connectivity and try again",
  [ERROR.PROXY_ERROR]: "Could not proxy request.",
  [ERROR.SERVER_ERROR]: "Well, this is unexpected. An Error has occured we are working to fix this.",
};

const ErrorToStatusMapping: { [key: number]: string } = {
  500: ERROR.SERVER_ERROR,
  400: ERROR.BAD_REQUEST,
  401: ERROR.AUTHENTICATION_ERROR,
};

export class CustomError extends Error {
  type: string;
  meta: { [key: string]: any };
  constructor(type: string, error: { [key: string]: any }) {
    super();
    const { message, meta } = error;
    this.type = type;
    this.message = message;
    this.meta = meta;
  }
}

export const createErrorFromApiResponse = async (response: Response) => {
  let endpoint = response.url;
  let status = response.status;
  let data = await response.clone().json();

  if (typeof data === "string") {
    try {
      data = JSON.parse(data);
    } catch {}
  }

  let errorType = ErrorToStatusMapping[status] || ERROR.UNKNOWN;
  let errorMessage = errorMsg[errorType] || data?.message;

  return new CustomError(errorType, {
    message: errorMessage,
    meta: {
      status,
      endpoint,
      data,
    },
  });
};

export const createNetworkError = async (error: Error) => {
  return new CustomError(ERROR.NETWORK, {
    message: errorMsg[ERROR.NETWORK],
    meta:{
      error
    }
  });
};
